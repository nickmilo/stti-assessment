#!/usr/bin/env python3
"""
Update Sticking Points titles and content in profiles-data.js

Updates:
1. All 24 profile titles to "Sticking Points for {Dominant} / {Secondary}"
2. Content for IC, IP, PS, PC, SC profiles with new copy
3. Inverted versions for CI, PI, SP, CP, CS profiles
"""

import re
import json

# New content from user for the 5 profiles
NEW_CONTENT = {
    "IC": {
        "dominant": "so many ideas, interests and insights you want to express that you become scattered across too many different projects and pursuits.",
        "breakthrough_dom": "organize your insights. Activate your <strong>Synthesizer</strong> to connect your ideas into coherent patterns. Then, you can activate your <strong>Producer</strong> to systematically manifest your organized vision.",
        "secondary": "the potential for getting lost in an echo chamber of your own ideas. You're reflecting on what matters most to you…but without outside input, your perspective can become narrow.",
        "breakthrough_sec": "broaden your perspective. Activate your <strong>Synthesizer</strong> to explore diverse ideas and sources. Then, you can activate your <strong>Creative</strong> to express your enriched understanding in new ways."
    },
    "IP": {
        "dominant": "the potential for getting lost in an echo chamber of your own ideas. You're reflecting on what matters most to you…but without outside input, your perspective can become narrow.",
        "breakthrough_dom": "broaden your perspective. Activate your <strong>Synthesizer</strong> to explore diverse ideas and sources. Then, you can activate your <strong>Creative</strong> to express your enriched understanding in new ways.",
        "secondary": "getting caught taking action based solely on what works best for you, without considering the broader context or audience.",
        "breakthrough_sec": "identify the needs of your audience. Activate your <strong>Creative</strong> to understand what resonates with others. Then, you can activate your <strong>Synthesizer</strong> to integrate outside perspectives into your action plan."
    },
    "PS": {
        "dominant": "your desire for action can devolve into exhaustive tracking of every step. You're measuring everything with stopwatch precision, when sometimes you just need to build.",
        "breakthrough_dom": "step back and slow down. Activate your <strong>Creative</strong> to inject fresh innovation into your process. Then, you can activate your <strong>Inner Guide</strong> to reconnect with what truly matters.",
        "secondary": "getting absorbed in researching and synthesizing information to the point of over-engineering. You're building Eiffel tower frameworks when all you needed was a simple beachfront hut.",
        "breakthrough_sec": "reconnect with what matters most. Activate your <strong>Inner Guide</strong> to clarify your purpose. Then, you can activate your <strong>Creative</strong> to find simpler, more elegant solutions."
    },
    "PC": {
        "dominant": "you can spend so much time 'doing' that you lose track of why you're doing it. The endless cycle of tasks and output can disconnect you from your deeper purpose.",
        "breakthrough_dom": "return to your vision. Activate your <strong>Inner Guide</strong> to reconnect with what truly matters. Then, you can activate your <strong>Synthesizer</strong> to understand how your actions align with your purpose.",
        "secondary": "feeling disorganized and overwhelmed by so many ideas and projects that nothing is getting finished.",
        "breakthrough_sec": "see the big picture. Activate your <strong>Synthesizer</strong> to organize your ideas into coherent patterns. Then, you can activate your <strong>Inner Guide</strong> to prioritize what matters most."
    },
    "SC": {
        "dominant": "getting lost in complexity if you try to view every concept from all possible interdisciplinary perspectives, building elaborate conceptual frameworks that may obscure rather than clarify.",
        "breakthrough_dom": "ground yourself with clear intention. Activate your <strong>Inner Guide</strong> to reconnect with what truly matters. Then, you can activate your <strong>Producer</strong> to translate your understanding into concrete action.",
        "secondary": "feeling the internal tension of wanting your creation to be mind blowingly original and brilliant, leading to perfectionism and hesitation.",
        "breakthrough_sec": "act. Activate your <strong>Producer</strong> to ship your work and iterate. Then, you can activate your <strong>Inner Guide</strong> to reflect on what you've learned from creating."
    }
}

def get_archetype_name(code):
    """Convert archetype code to full name"""
    archetypes = {
        'I': 'Inner Guide',
        'P': 'Producer',
        'S': 'Synthesizer',
        'C': 'Creative'
    }
    return archetypes.get(code, code)

def generate_content(profile_code, archetype_pair):
    """Generate the sticking points content for a profile"""
    # Get the base content (use original for inverted profiles)
    if archetype_pair in NEW_CONTENT:
        content = NEW_CONTENT[archetype_pair]
    else:
        # Invert: CI uses IC content but swapped
        inverted = archetype_pair[1] + archetype_pair[0]
        if inverted in NEW_CONTENT:
            inv_content = NEW_CONTENT[inverted]
            content = {
                "dominant": inv_content["secondary"],
                "breakthrough_dom": inv_content["breakthrough_sec"],
                "secondary": inv_content["dominant"],
                "breakthrough_sec": inv_content["breakthrough_dom"]
            }
        else:
            return None  # Keep existing content for IS/SI profiles

    # Build the HTML content
    html = f"""<strong>Your dominant sticking point:</strong> You find yourself with {content['dominant']}<br><br>To break through, you need to {content['breakthrough_dom']}<br><br><hr><br><br><strong>Your secondary sticking point:</strong> {content['secondary'][0].upper()}{content['secondary'][1:]}<br><br>To break through, you need to {content['breakthrough_sec']}"""

    return html

def update_profiles_data():
    """Update the profiles-data.js file"""

    input_file = '/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/Web-App/profiles-data.js'

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the JSON object
    match = re.search(r'window\.STTI_PROFILES = (\{.*?\});', content, re.DOTALL)
    if not match:
        print("❌ Could not find STTI_PROFILES object")
        return

    profiles_json = match.group(1)
    profiles = json.loads(profiles_json)

    updates_made = 0

    # Update all 24 profiles
    for profile_code, profile_data in profiles.items():
        # Extract archetype pair (e.g., "IP", "IS", etc.)
        archetype_pair = profile_code.split('-')[0]
        dominant = archetype_pair[0]
        secondary = archetype_pair[1]

        dominant_name = get_archetype_name(dominant)
        secondary_name = get_archetype_name(secondary)

        # Update title
        old_title = profile_data['stuckUnstuck']['title']
        new_title = f"Sticking Points for {dominant_name} / {secondary_name}"

        if old_title != new_title:
            profile_data['stuckUnstuck']['title'] = new_title
            print(f"✅ Updated title for {profile_code}: {new_title}")
            updates_made += 1

        # Update content if applicable
        new_content = generate_content(profile_code, archetype_pair)
        if new_content:
            old_content = profile_data['stuckUnstuck']['content']
            if old_content != new_content:
                profile_data['stuckUnstuck']['content'] = new_content
                print(f"✅ Updated content for {profile_code}")
                updates_made += 1

    # Convert back to JSON and reconstruct the file
    profiles_json_updated = json.dumps(profiles, indent=2, ensure_ascii=False)

    # Replace in the original file structure
    new_content = content.replace(match.group(1), profiles_json_updated)

    # Write back
    with open(input_file, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f"\n✅ Complete! Made {updates_made} updates to profiles-data.js")

if __name__ == '__main__':
    update_profiles_data()
