#!/usr/bin/env python3
"""
Update Sticking Points titles and content in STTI Master Profiles.md

Updates:
1. All 24 profile titles to "Sticking Points for {Dominant} / {Secondary}"
2. Content for IC, IP, PS, PC, SC profiles with new copy
3. Inverted versions for CI, PI, SP, CP, CS profiles
"""

import re

# New content from user for the 5 profiles
NEW_CONTENT = {
    "IC": {
        "dominant": "so many ideas, interests and insights you want to express that you become scattered across too many different projects and pursuits.",
        "breakthrough_dom": "organize your insights. Activate your **Synthesizer** to connect your ideas into coherent patterns. Then, you can activate your **Producer** to systematically manifest your organized vision.",
        "secondary": "the potential for getting lost in an echo chamber of your own ideas. You're reflecting on what matters most to you…but without outside input, your perspective can become narrow.",
        "breakthrough_sec": "broaden your perspective. Activate your **Synthesizer** to explore diverse ideas and sources. Then, you can activate your **Creative** to express your enriched understanding in new ways."
    },
    "IP": {
        "dominant": "the potential for getting lost in an echo chamber of your own ideas. You're reflecting on what matters most to you…but without outside input, your perspective can become narrow.",
        "breakthrough_dom": "broaden your perspective. Activate your **Synthesizer** to explore diverse ideas and sources. Then, you can activate your **Creative** to express your enriched understanding in new ways.",
        "secondary": "getting caught taking action based solely on what works best for you, without considering the broader context or audience.",
        "breakthrough_sec": "identify the needs of your audience. Activate your **Creative** to understand what resonates with others. Then, you can activate your **Synthesizer** to integrate outside perspectives into your action plan."
    },
    "PS": {
        "dominant": "your desire for action can devolve into exhaustive tracking of every step. You're measuring everything with stopwatch precision, when sometimes you just need to build.",
        "breakthrough_dom": "step back and slow down. Activate your **Creative** to inject fresh innovation into your process. Then, you can activate your **Inner Guide** to reconnect with what truly matters.",
        "secondary": "getting absorbed in researching and synthesizing information to the point of over-engineering. You're building Eiffel tower frameworks when all you needed was a simple beachfront hut.",
        "breakthrough_sec": "reconnect with what matters most. Activate your **Inner Guide** to clarify your purpose. Then, you can activate your **Creative** to find simpler, more elegant solutions."
    },
    "PC": {
        "dominant": "you can spend so much time 'doing' that you lose track of why you're doing it. The endless cycle of tasks and output can disconnect you from your deeper purpose.",
        "breakthrough_dom": "return to your vision. Activate your **Inner Guide** to reconnect with what truly matters. Then, you can activate your **Synthesizer** to understand how your actions align with your purpose.",
        "secondary": "feeling disorganized and overwhelmed by so many ideas and projects that nothing is getting finished.",
        "breakthrough_sec": "see the big picture. Activate your **Synthesizer** to organize your ideas into coherent patterns. Then, you can activate your **Inner Guide** to prioritize what matters most."
    },
    "SC": {
        "dominant": "getting lost in complexity if you try to view every concept from all possible interdisciplinary perspectives, building elaborate conceptual frameworks that may obscure rather than clarify.",
        "breakthrough_dom": "ground yourself with clear intention. Activate your **Inner Guide** to reconnect with what truly matters. Then, you can activate your **Producer** to translate your understanding into concrete action.",
        "secondary": "feeling the internal tension of wanting your creation to be mind blowingly original and brilliant, leading to perfectionism and hesitation.",
        "breakthrough_sec": "act. Activate your **Producer** to ship your work and iterate. Then, you can activate your **Inner Guide** to reflect on what you've learned from creating."
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

def generate_content(archetype_pair):
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

    # Build the markdown content
    markdown = f"""**Your dominant sticking point:** You find yourself with {content['dominant']}

To break through, you need to {content['breakthrough_dom']}

---

**Your secondary sticking point:** {content['secondary'][0].upper()}{content['secondary'][1:]}

To break through, you need to {content['breakthrough_sec']}"""

    return markdown

def update_master_markdown():
    """Update the STTI Master Profiles.md file"""

    input_file = '/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/STTI Master Profiles.md'

    with open(input_file, 'r', encoding='utf-8') as f:
        content = f.read()

    updates_made = 0

    # Find all profile sections
    profile_pattern = r'## (IP|IS|IC|PI|PS|PC|SI|SP|SC|CI|CP|CS)-(Architect|Gardener)'
    profile_matches = list(re.finditer(profile_pattern, content))

    for match in profile_matches:
        archetype_pair = match.group(1)
        dominant = archetype_pair[0]
        secondary = archetype_pair[1]
        dominant_name = get_archetype_name(dominant)
        secondary_name = get_archetype_name(secondary)

        # Find the Stuck/Unstuck section for this profile
        # Pattern: ### Stuck/Unstuck\n**Title:**...\n**Content:**...
        stuck_pattern = rf'(## {archetype_pair}-{match.group(2)}.*?)### Stuck/Unstuck\n\*\*Title:\*\* (.*?)\n\*\*Content:\*\* (.*?)(?=### )'

        stuck_match = re.search(stuck_pattern, content, re.DOTALL)

        if stuck_match:
            old_title = stuck_match.group(2)
            old_content = stuck_match.group(3)
            new_title = f"Sticking Points for {dominant_name} / {secondary_name}"

            # Check if we need to update content
            new_content_text = generate_content(archetype_pair)

            if old_title != new_title:
                content = content.replace(
                    f"**Title:** {old_title}",
                    f"**Title:** {new_title}"
                )
                print(f"✅ Updated title for {archetype_pair}-{match.group(2)}: {new_title}")
                updates_made += 1

            if new_content_text and new_content_text.strip() != old_content.strip():
                content = content.replace(
                    f"**Content:** {old_content}",
                    f"**Content:** {new_content_text}\n"
                )
                print(f"✅ Updated content for {archetype_pair}-{match.group(2)}")
                updates_made += 1

    # Write back
    if updates_made > 0:
        with open(input_file, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"\n✅ Complete! Made {updates_made} updates to STTI Master Profiles.md")
    else:
        print("\n✅ No updates needed")

if __name__ == '__main__':
    update_master_markdown()
