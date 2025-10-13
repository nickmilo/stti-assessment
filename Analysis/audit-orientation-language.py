#!/usr/bin/env python3
"""
Audit script for STTI Master Profiles orientation language analysis.
Identifies all orientation descriptions, terminology usage, and negative language patterns.
"""

import re
from collections import defaultdict

def parse_profile_sections(content):
    """Parse all profiles and extract orientation sections."""
    profiles = []

    # Split by profile headers (## ProfileName)
    profile_pattern = r'## ([A-Z]{2}-(?:Architect|Gardener)) \(.*?\)\n\[comment\]: # \(Secret Code: (\d{4})\)'
    sections = re.split(profile_pattern, content)

    # Group into profiles (header, code, content)
    for i in range(1, len(sections), 3):
        if i+2 <= len(sections):
            profile_name = sections[i]
            secret_code = sections[i+1]
            profile_content = sections[i+2]

            # Extract orientation description
            orientation_match = re.search(
                r'### Orientation Description\n(.*?)(?=\n### |\Z)',
                profile_content,
                re.DOTALL
            )

            if orientation_match:
                orientation_text = orientation_match.group(1).strip()
                profiles.append({
                    'name': profile_name,
                    'code': secret_code,
                    'orientation': orientation_text,
                    'full_content': profile_content
                })

    return profiles

def categorize_profile(name):
    """Categorize profile by orientation type."""
    # Extract archetype combination
    archetypes = name.split('-')[0]

    diagonal_profiles = ['IP', 'PI', 'CS', 'SC']
    western_profiles = ['IS', 'SI']
    eastern_profiles = ['CP', 'PC']
    northern_profiles = ['PS', 'SP']
    southern_profiles = ['IC', 'CI']

    if archetypes in diagonal_profiles:
        return 'Diagonal'
    elif archetypes in western_profiles:
        return 'Western'
    elif archetypes in eastern_profiles:
        return 'Eastern'
    elif archetypes in northern_profiles:
        return 'Northern'
    elif archetypes in southern_profiles:
        return 'Southern'
    else:
        return 'Unknown'

def analyze_terminology(orientation_text):
    """Analyze terminology usage in orientation text."""
    issues = []

    # Check for plural forms that need changing
    plural_terms = {
        'Westerners': 'Western',
        'Easterners': 'Eastern',
        'Northerners': 'Northern',
        'Southerners': 'Southern',
        'Southern are': 'Southern profiles are',  # Grammar issue
    }

    for old_term, new_term in plural_terms.items():
        if old_term in orientation_text:
            issues.append(f"Found '{old_term}' -> should be '{new_term}'")

    # Check for missing closing sentence
    closing_sentence = "While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind."

    if closing_sentence not in orientation_text:
        issues.append("Missing closing sentence")

    return issues

def detect_negative_language(orientation_text):
    """Detect negative or stuck language in orientation sections."""
    negative_patterns = [
        (r'\b(stuck|difficulty|struggle|problem|issue|challenge)\b', 'stuck/negative language'),
        (r'\b(often get stuck|have difficulty|struggle with)\b', 'struggle language'),
        (r'\b(overwhelmed|paralyzed|anxious|stressed)\b', 'overwhelm language'),
        (r'\b(But when.*overwhelmed)\b', 'overwhelm discussion'),
    ]

    issues = []
    for pattern, description in negative_patterns:
        matches = re.finditer(pattern, orientation_text, re.IGNORECASE)
        for match in matches:
            issues.append(f"{description}: '{match.group()}'")

    return issues

def main():
    # Read the master profiles file
    file_path = '/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/STTI Master Profiles.md'

    with open(file_path, 'r') as f:
        content = f.read()

    profiles = parse_profile_sections(content)

    print("=" * 80)
    print("STTI MASTER PROFILES ORIENTATION LANGUAGE AUDIT")
    print("=" * 80)
    print(f"\nTotal profiles found: {len(profiles)}\n")

    # Group by orientation category
    by_category = defaultdict(list)
    for profile in profiles:
        category = categorize_profile(profile['name'])
        by_category[category].append(profile)

    # Analyze each category
    for category in ['Diagonal', 'Western', 'Eastern', 'Northern', 'Southern']:
        if category not in by_category:
            continue

        print("\n" + "=" * 80)
        print(f"{category.upper()} PROFILES ({len(by_category[category])} profiles)")
        print("=" * 80)

        for profile in sorted(by_category[category], key=lambda x: x['name']):
            print(f"\n{profile['name']} (Code: {profile['code']})")
            print("-" * 80)

            # Show current orientation text
            print("\nCURRENT TEXT:")
            print(profile['orientation'])

            # Terminology issues
            terminology_issues = analyze_terminology(profile['orientation'])
            if terminology_issues:
                print("\nTERMINOLOGY ISSUES:")
                for issue in terminology_issues:
                    print(f"  - {issue}")

            # Negative language
            negative_issues = detect_negative_language(profile['orientation'])
            if negative_issues:
                print("\nNEGATIVE/STUCK LANGUAGE (should be in Overwhelmed section):")
                for issue in negative_issues:
                    print(f"  - {issue}")

            if not terminology_issues and not negative_issues:
                print("\n✓ No issues detected")

    # Summary statistics
    print("\n\n" + "=" * 80)
    print("SUMMARY STATISTICS")
    print("=" * 80)

    total_terminology_issues = 0
    total_negative_issues = 0
    total_missing_closing = 0

    for profile in profiles:
        terminology_issues = analyze_terminology(profile['orientation'])
        negative_issues = detect_negative_language(profile['orientation'])

        total_terminology_issues += len([i for i in terminology_issues if 'Missing closing' not in i])
        total_negative_issues += len(negative_issues)
        total_missing_closing += len([i for i in terminology_issues if 'Missing closing' in i])

    print(f"\nProfiles with terminology issues: {sum(1 for p in profiles if len([i for i in analyze_terminology(p['orientation']) if 'Missing closing' not in i]) > 0)}")
    print(f"Total terminology changes needed: {total_terminology_issues}")
    print(f"\nProfiles missing closing sentence: {total_missing_closing}")
    print(f"\nProfiles with negative/stuck language: {sum(1 for p in profiles if len(detect_negative_language(p['orientation'])) > 0)}")
    print(f"Total negative language instances: {total_negative_issues}")

    # Best practice examples
    print("\n\n" + "=" * 80)
    print("BEST PRACTICE EXAMPLES")
    print("=" * 80)

    print("\nIP-Architect (GOOD - Line 66):")
    ip_architect = next((p for p in profiles if p['name'] == 'IP-Architect'), None)
    if ip_architect:
        print(ip_architect['orientation'])

    print("\n\nIS-Architect (GOOD - Line 118):")
    is_architect = next((p for p in profiles if p['name'] == 'IS-Architect'), None)
    if is_architect:
        print(is_architect['orientation'])

if __name__ == '__main__':
    main()
