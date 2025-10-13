#!/usr/bin/env python3
"""
Transformation script for STTI Master Profiles orientation language updates.

This script applies systematic changes to orientation descriptions:
1. Changes plural terminology (Westerners -> Western profiles, etc.)
2. Removes negative/stuck language from orientation sections
3. Adds standardized closing sentence to all profiles

Changes are applied carefully to avoid modifying already-correct profiles.
"""

import re
import sys
from pathlib import Path

# Closing sentence to add
CLOSING_SENTENCE = " While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind."

# Profiles that are already correct and should NOT be modified
CORRECT_PROFILES = ['IP-Architect', 'IS-Architect']

def transform_orientation_text(profile_name, orientation_text):
    """
    Transform orientation text for a single profile.
    Returns (transformed_text, changes_made)
    """
    # Skip already-correct profiles
    if profile_name in CORRECT_PROFILES:
        return orientation_text, []

    original_text = orientation_text
    changes = []

    # Step 1: Terminology changes
    terminology_replacements = {
        r'\bWesterner\b': 'Western',
        r'\bWesterners\b': 'Western profiles',
        r'\bEasterner\b': 'Eastern',
        r'\bEasterners\b': 'Eastern profiles',
        r'\bNortherner\b': 'Northern',
        r'\bNortherners\b': 'Northern profiles',
        r'\bSouthern are\b': 'Southern profiles are',
    }

    for pattern, replacement in terminology_replacements.items():
        if re.search(pattern, orientation_text):
            orientation_text = re.sub(pattern, replacement, orientation_text)
            changes.append(f"Changed terminology: {pattern} -> {replacement}")

    # Step 2: Remove negative/stuck language sentences
    # These are specific sentences that should be removed entirely

    negative_patterns = [
        # Western profiles
        r'They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing\.',

        # Eastern profiles - two sentence pattern
        r'They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking\. But when (?:Easterners|Eastern profiles) feel overwhelmed, the answer is usually to do less action and more reflection\.',

        # Northern profiles
        r'When overwhelmed, (?:Northerners|Northern profiles) benefit from stepping back to gain perspective before diving into execution\.',

        # Southern profiles
        r'When stuck, Southern(?:\s+profiles)? need space for both reflection and creative experimentation\.',
    ]

    for pattern in negative_patterns:
        match = re.search(pattern, orientation_text)
        if match:
            orientation_text = re.sub(pattern, '', orientation_text)
            changes.append(f"Removed negative language: '{match.group()}'")

    # Step 3: Clean up any double spaces or trailing spaces before period
    orientation_text = re.sub(r'\s+', ' ', orientation_text)
    orientation_text = re.sub(r'\s+\.', '.', orientation_text)
    orientation_text = orientation_text.strip()

    # Step 4: Add closing sentence if not already present
    if CLOSING_SENTENCE.strip() not in orientation_text:
        # Remove any existing period at the end to avoid double periods
        if orientation_text.endswith('.'):
            orientation_text = orientation_text.rstrip('.')

        orientation_text += CLOSING_SENTENCE
        changes.append("Added closing sentence")

    return orientation_text, changes


def process_master_profiles(input_path, output_path=None, dry_run=False):
    """
    Process the entire master profiles markdown file.
    If output_path is None, overwrites input file.
    If dry_run is True, only shows changes without writing.
    """
    # Read the file
    with open(input_path, 'r') as f:
        content = f.read()

    # Split into profiles
    profile_pattern = r'(## ([A-Z]{2}-(?:Architect|Gardener)) \(.*?\)\n\[comment\]: # \(Secret Code: \d{4}\)\n)'
    sections = re.split(profile_pattern, content)

    # Reconstruct with modifications
    new_content = sections[0]  # Everything before first profile
    total_changes = 0
    profiles_modified = 0

    i = 1
    while i < len(sections):
        # sections[i] = full header match
        # sections[i+1] = profile name
        # sections[i+2] = profile content
        if i + 2 < len(sections):
            header = sections[i]
            profile_name = sections[i+1]
            profile_content = sections[i+2]

            # Extract and transform orientation section
            orientation_match = re.search(
                r'(### Orientation Description\n)(.*?)(?=\n### |\Z)',
                profile_content,
                re.DOTALL
            )

            if orientation_match:
                orientation_prefix = orientation_match.group(1)
                orientation_text = orientation_match.group(2).strip()

                # Transform the orientation text
                new_orientation, changes = transform_orientation_text(profile_name, orientation_text)

                if changes:
                    profiles_modified += 1
                    total_changes += len(changes)

                    print(f"\n{'='*80}")
                    print(f"Profile: {profile_name}")
                    print('='*80)
                    for change in changes:
                        print(f"  ✓ {change}")

                    # Replace the orientation text in the profile content
                    old_section = orientation_match.group(0)
                    new_section = orientation_prefix + new_orientation
                    profile_content = profile_content.replace(old_section, new_section, 1)

            # Add to new content
            new_content += header + profile_content
            i += 3
        else:
            # Handle any remaining content
            if i < len(sections):
                new_content += sections[i]
            i += 1

    # Summary
    print(f"\n{'='*80}")
    print("TRANSFORMATION SUMMARY")
    print('='*80)
    print(f"Profiles modified: {profiles_modified}")
    print(f"Total changes made: {total_changes}")
    print(f"Profiles skipped (already correct): {len(CORRECT_PROFILES)}")
    print(f"  - {', '.join(CORRECT_PROFILES)}")

    # Write output
    if not dry_run:
        output_file = output_path if output_path else input_path
        with open(output_file, 'w') as f:
            f.write(new_content)
        print(f"\n✓ File written to: {output_file}")
    else:
        print(f"\n✓ DRY RUN - No files modified")

    return profiles_modified, total_changes


def main():
    import argparse

    parser = argparse.ArgumentParser(
        description='Transform STTI Master Profiles orientation language'
    )
    parser.add_argument(
        '--input',
        default='/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/STTI Master Profiles.md',
        help='Input markdown file path'
    )
    parser.add_argument(
        '--output',
        help='Output file path (if not specified, overwrites input)'
    )
    parser.add_argument(
        '--dry-run',
        action='store_true',
        help='Show changes without modifying files'
    )

    args = parser.parse_args()

    input_path = Path(args.input)
    if not input_path.exists():
        print(f"ERROR: Input file not found: {input_path}")
        sys.exit(1)

    print("STTI Master Profiles Orientation Language Transformation")
    print("="*80)
    print(f"Input file: {input_path}")
    if args.dry_run:
        print("Mode: DRY RUN (no changes will be made)")
    else:
        print(f"Output file: {args.output if args.output else input_path}")
    print()

    try:
        profiles_modified, total_changes = process_master_profiles(
            input_path,
            args.output,
            args.dry_run
        )

        if profiles_modified == 0:
            print("\n⚠ No changes made. All profiles may already be correct.")
        else:
            print(f"\n✓ Successfully processed {profiles_modified} profiles")

    except Exception as e:
        print(f"\n✗ ERROR: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)


if __name__ == '__main__':
    main()
