#!/usr/bin/env python3
"""
Update Sticking Points & Breaking Through sections for all 24 profiles
Removes Overwhelmed sections and replaces Stuck/Unstuck with merged content
"""

import re
from pathlib import Path

# Master profiles file path
MASTER_FILE = Path(__file__).parent.parent / "STTI Master Profiles.md"

# Sticking points content for each orientation pair
STICKING_POINTS = {
    # IS/SI - Inner Guide ↔ Synthesizer (Westerner/Philosopher)
    'IS': {
        'dominant_archetype': 'Inner Guide',
        'dominant_stuck': "You find yourself getting lost in your mind. You're reflecting, or analyzing, or trying to understand…but then come the doubts, and you're caught in paralysis by analysis.",
        'dominant_action': "To break through, you need to act. Activate your **Producer** to set a goal or deadline and take some action. Then, you can activate your **Creative** to find innovative ways to manifest your deep insights.",
        'secondary_stuck': "Your curious mind can dive so deeply into topics that you find yourself following a trail of 'just one more' source.",
        'secondary_action': "To break through, you need to do something with your knowledge. Activate your **Creative** to express what you've learned. Then, you can activate your **Producer** to create with purpose."
    },
    'SI': {
        'dominant_archetype': 'Synthesizer',
        'dominant_stuck': "You find yourself getting lost in understanding. You're researching, or connecting ideas, or following threads…but then the threads multiply, and you're caught following 'just one more' source.",
        'dominant_action': "To break through, you need to do something with your knowledge. Activate your **Creative** to express what you've learned. Then, you can activate your **Producer** to create with purpose.",
        'secondary_stuck': "Your reflective mind can get lost in analysis. You're trying to understand your place, your purpose, your path…but then come the doubts, and you're caught in paralysis by analysis.",
        'secondary_action': "To break through, you need to act. Activate your **Producer** to set a goal or deadline and take some action. Then, you can activate your **Creative** to find innovative ways to manifest your understanding."
    },

    # IC/CI - Inner Guide ↔ Creative (Southerner/Explorer)
    'IC': {
        'dominant_archetype': 'Inner Guide',
        'dominant_stuck': "You find yourself with so many ideas, interests and insights that you feel scattered across too many different projects and pursuits.",
        'dominant_action': "To break through, you need to organize your insights. Activate your **Synthesizer** to connect your ideas into coherent patterns. Then, you can activate your **Producer** to systematically manifest your organized vision.",
        'secondary_stuck': "You can get lost in perfecting your vision. You're creating, iterating, refining…but as they say: 'Real artists ship.'",
        'secondary_action': "To break through, you need to act. Activate your **Producer** to set deadlines and ship your work. Then, you can activate your **Synthesizer** to make sense of what you've created."
    },
    'CI': {
        'dominant_archetype': 'Creative',
        'dominant_stuck': "You find yourself lost in perfecting your vision. You're creating, iterating, refining…but as they say: 'Real artists ship.'",
        'dominant_action': "To break through, you need to act. Activate your **Producer** to set deadlines and ship your work. Then, you can activate your **Synthesizer** to make sense of what you've created.",
        'secondary_stuck': "Your reflective mind generates so many ideas, interests and insights that you feel scattered across too many different projects and pursuits.",
        'secondary_action': "To break through, you need to organize your insights. Activate your **Synthesizer** to connect your ideas into coherent patterns. Then, you can activate your **Producer** to systematically manifest your organized vision."
    },

    # IP/PI - Inner Guide ↔ Producer (Diagonal/Converter)
    'IP': {
        'dominant_archetype': 'Inner Guide',
        'dominant_stuck': "You find yourself getting lost in an echo chamber of your own ideas. You're reflecting on what matters most to you…but without outside input, your perspective can become narrow.",
        'dominant_action': "To break through, you need to broaden your perspective. Activate your **Synthesizer** to explore diverse ideas and sources. Then, you can activate your **Creative** to express your enriched understanding in new ways.",
        'secondary_stuck': "You can get caught taking action based solely on what works best for you, without considering the broader context or audience.",
        'secondary_action': "To break through, you need to identify the needs of your audience. Activate your **Creative** to understand what resonates with others. Then, you can activate your **Synthesizer** to integrate outside perspectives into your action plan."
    },
    'PI': {
        'dominant_archetype': 'Producer',
        'dominant_stuck': "You find yourself taking action based solely on what works best for you, without considering the broader context or audience.",
        'dominant_action': "To break through, you need to identify the needs of your audience. Activate your **Creative** to understand what resonates with others. Then, you can activate your **Synthesizer** to integrate outside perspectives into your action plan.",
        'secondary_stuck': "Your reflective side can get lost in an echo chamber of your own ideas. You're reflecting on what matters most to you…but without outside input, your perspective can become narrow.",
        'secondary_action': "To break through, you need to broaden your perspective. Activate your **Synthesizer** to explore diverse ideas and sources. Then, you can activate your **Creative** to express your enriched understanding in new ways."
    },

    # PS/SP - Producer ↔ Synthesizer (Northerner/Builder)
    'PS': {
        'dominant_archetype': 'Producer',
        'dominant_stuck': "Your desire for action and progress can devolve into exhaustive tracking of every step. You're measuring everything with stopwatch precision, when sometimes you just need to build.",
        'dominant_action': "To break through, you need to step back and slow down. Activate your **Creative** to inject fresh innovation into your process. Then, you can activate your **Inner Guide** to reconnect with what truly matters.",
        'secondary_stuck': "You can get absorbed in researching and synthesizing information to the point of over-engineering. You're building Eiffel tower frameworks when all you needed was a simple beachfront hut.",
        'secondary_action': "To break through, you need to reconnect with what matters most. Activate your **Inner Guide** to clarify your purpose. Then, you can activate your **Creative** to find simpler, more elegant solutions."
    },
    'SP': {
        'dominant_archetype': 'Synthesizer',
        'dominant_stuck': "You find yourself absorbed in researching and synthesizing information to the point of over-engineering. You're building Eiffel tower frameworks when all you needed was a simple beachfront hut.",
        'dominant_action': "To break through, you need to reconnect with what matters most. Activate your **Inner Guide** to clarify your purpose. Then, you can activate your **Creative** to find simpler, more elegant solutions.",
        'secondary_stuck': "Your action-oriented side's desire for progress can devolve into exhaustive tracking of every step. You're measuring everything with stopwatch precision, when sometimes you just need to build.",
        'secondary_action': "To break through, you need to step back and slow down. Activate your **Creative** to inject fresh innovation into your process. Then, you can activate your **Inner Guide** to reconnect with what truly matters."
    },

    # PC/CP - Producer ↔ Creative (Easterner/Maker)
    'PC': {
        'dominant_archetype': 'Producer',
        'dominant_stuck': "You spend so much time 'doing' that you lose track of why you're doing it. The endless cycle of tasks and output can disconnect you from your deeper purpose.",
        'dominant_action': "To break through, you need to return to your vision. Activate your **Inner Guide** to reconnect with what truly matters. Then, you can activate your **Synthesizer** to understand how your actions align with your purpose.",
        'secondary_stuck': "Your creative side can leave you feeling disorganized and overwhelmed by so many ideas and projects that nothing is getting finished.",
        'secondary_action': "To break through, you need to see the big picture. Activate your **Synthesizer** to organize your ideas into coherent patterns. Then, you can activate your **Inner Guide** to prioritize what matters most."
    },
    'CP': {
        'dominant_archetype': 'Creative',
        'dominant_stuck': "You find yourself feeling disorganized and overwhelmed by so many ideas and projects that nothing is getting finished.",
        'dominant_action': "To break through, you need to see the big picture. Activate your **Synthesizer** to organize your ideas into coherent patterns. Then, you can activate your **Inner Guide** to prioritize what matters most.",
        'secondary_stuck': "Your productive side can lead you to spend so much time 'doing' that you lose track of why you're doing it. The endless cycle of tasks and output can disconnect you from your deeper purpose.",
        'secondary_action': "To break through, you need to return to your vision. Activate your **Inner Guide** to reconnect with what truly matters. Then, you can activate your **Synthesizer** to understand how your actions align with your purpose."
    },

    # SC/CS - Synthesizer ↔ Creative (needs to be added based on user specs)
    'SC': {
        'dominant_archetype': 'Synthesizer',
        'dominant_stuck': "You find yourself getting lost in complexity. You're viewing every concept from all possible interdisciplinary perspectives, building elaborate conceptual frameworks that may obscure rather than clarify.",
        'dominant_action': "To break through, you need to ground yourself with clear intention. Activate your **Inner Guide** to reconnect with what truly matters. Then, you can activate your **Producer** to translate your understanding into concrete action.",
        'secondary_stuck': "Your creative side can feel the internal tension of wanting your creation to be mind blowingly original and brilliant, leading to perfectionism and hesitation.",
        'secondary_action': "To break through, you need to act. Activate your **Producer** to ship your work and iterate. Then, you can activate your **Inner Guide** to reflect on what you've learned from creating."
    },
    'CS': {
        'dominant_archetype': 'Creative',
        'dominant_stuck': "You find yourself feeling the internal tension of wanting your creation to be mind blowingly original and brilliant, leading to perfectionism and hesitation.",
        'dominant_action': "To break through, you need to act. Activate your **Producer** to ship your work and iterate. Then, you can activate your **Inner Guide** to reflect on what you've learned from creating.",
        'secondary_stuck': "Your synthesizing side can get lost in complexity. You're viewing every concept from all possible interdisciplinary perspectives, building elaborate conceptual frameworks that may obscure rather than clarify.",
        'secondary_action': "To break through, you need to ground yourself with clear intention. Activate your **Inner Guide** to reconnect with what truly matters. Then, you can activate your **Producer** to translate your understanding into concrete action."
    }
}

# Profile codes and their orientation pairs
PROFILE_MAPPINGS = [
    ('IS-Architect', 'IS'),
    ('IS-Gardener', 'IS'),
    ('SI-Architect', 'SI'),
    ('SI-Gardener', 'SI'),
    ('IC-Architect', 'IC'),
    ('IC-Gardener', 'IC'),
    ('CI-Architect', 'CI'),
    ('CI-Gardener', 'CI'),
    ('IP-Architect', 'IP'),
    ('IP-Gardener', 'IP'),
    ('PI-Architect', 'PI'),
    ('PI-Gardener', 'PI'),
    ('PS-Architect', 'PS'),
    ('PS-Gardener', 'PS'),
    ('SP-Architect', 'SP'),
    ('SP-Gardener', 'SP'),
    ('PC-Architect', 'PC'),
    ('PC-Gardener', 'PC'),
    ('CP-Architect', 'CP'),
    ('CP-Gardener', 'CP'),
    ('SC-Architect', 'SC'),
    ('SC-Gardener', 'SC'),
    ('CS-Architect', 'CS'),
    ('CS-Gardener', 'CS'),
]

def generate_sticking_points_content(profile_code, orientation):
    """Generate the sticking points content for a profile"""
    content_data = STICKING_POINTS[orientation]
    archetype = content_data['dominant_archetype']

    content = f"**Your dominant sticking point:** {content_data['dominant_stuck']}\n\n"
    content += f"{content_data['dominant_action']}\n\n"
    content += "---\n\n"
    content += f"**Your secondary sticking point:** {content_data['secondary_stuck']}\n\n"
    content += f"{content_data['secondary_action']}"

    return content

def update_master_profiles():
    """Update all profiles in the master file"""

    # Read the master file
    with open(MASTER_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    print(f"Reading master file: {MASTER_FILE}")
    print(f"Original file size: {len(content)} characters\n")

    updates_made = 0

    for profile_code, orientation in PROFILE_MAPPINGS:
        print(f"Processing {profile_code} ({orientation})...")

        # Find the profile section
        profile_pattern = rf'## {re.escape(profile_code)}.*?\n\[comment\]: # \(Secret Code: \d+\)'
        profile_match = re.search(profile_pattern, content, re.DOTALL)

        if not profile_match:
            print(f"  ⚠️  Could not find profile section for {profile_code}")
            continue

        profile_start = profile_match.end()

        # Find the next profile or end of file
        next_profile_pattern = r'\n---\n\n## [A-Z]{2}-(?:Architect|Gardener)'
        next_profile_match = re.search(next_profile_pattern, content[profile_start:])
        if next_profile_match:
            profile_end = profile_start + next_profile_match.start()
        else:
            profile_end = len(content)

        profile_section = content[profile_start:profile_end]

        # Remove Overwhelmed section if it exists
        overwhelmed_pattern = r'\n### Overwhelmed\n.*?(?=\n### |\Z)'
        profile_section = re.sub(overwhelmed_pattern, '', profile_section, flags=re.DOTALL)

        # Find and replace Stuck/Unstuck section
        stuck_pattern = r'### Stuck/Unstuck\n\*\*Title:\*\* .*?\n\*\*Content:\*\* .*?(?=\n### |\n---\n\n|\Z)'

        archetype = STICKING_POINTS[orientation]['dominant_archetype']
        new_section = f"### Stuck/Unstuck\n**Title:** Sticking Points & Breaking Through for the {archetype}\n**Content:** {generate_sticking_points_content(profile_code, orientation)}"

        profile_section_updated = re.sub(stuck_pattern, new_section, profile_section, flags=re.DOTALL)

        if profile_section != profile_section_updated:
            # Update the content
            content = content[:profile_start] + profile_section_updated + content[profile_end:]
            updates_made += 1
            print(f"  ✓ Updated {profile_code}")
        else:
            print(f"  ⚠️  No changes for {profile_code}")

    # Write back to file
    with open(MASTER_FILE, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"\n{'='*60}")
    print(f"✅ Complete! Updated {updates_made} profiles")
    print(f"Final file size: {len(content)} characters")
    print(f"{'='*60}\n")

if __name__ == '__main__':
    update_master_profiles()
