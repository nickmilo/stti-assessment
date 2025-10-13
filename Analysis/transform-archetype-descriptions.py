#!/usr/bin/env python3
"""
Transform archetype description sentences in STTI Master Profiles.

Changes the pattern:
FROM: "The **{Dom}** is your dominant sensemaking archetype. The **{Sec}** is your secondary. This combination creates"
TO:   "**{Dom}** is your dominant sensemaking archetype, and **{Sec}** is your secondary. This combination creates"

Key changes:
1. Remove "The" from the beginning of both archetype names
2. Combine the two sentences into one with a comma and "and"
3. Keep bold formatting on archetype names
4. Preserve the rest of the paragraph

Author: Claude Code
Date: 2025-10-12
"""

import re
from datetime import datetime
from pathlib import Path


def transform_archetype_description(text: str, dry_run: bool = True) -> tuple[str, list[dict]]:
    """
    Transform archetype description sentences from two sentences to one compound sentence.

    Args:
        text: Full text of STTI Master Profiles.md
        dry_run: If True, don't modify text, just report what would change

    Returns:
        Tuple of (transformed_text, list of changes)
    """
    changes = []

    # Pattern to match current two-sentence structure:
    # "The **{Dom}** is your dominant sensemaking archetype. The **{Sec}** is your secondary. This combination creates..."
    # Capture groups: 1=Dom archetype, 2=Sec archetype, 3=rest of paragraph
    pattern = re.compile(
        r'The \*\*([A-Za-z\s]+)\*\* is your dominant sensemaking archetype\. The \*\*([A-Za-z\s]+)\*\* is your secondary\.\s+(This combination creates.+?)(?=\n\n|\Z)',
        re.DOTALL
    )

    def replacer(match):
        dom = match.group(1)
        sec = match.group(2)
        rest = match.group(3)

        # Create new combined sentence structure
        new_text = f"**{dom}** is your dominant sensemaking archetype, and **{sec}** is your secondary. {rest}"

        # Record the change
        changes.append({
            'dominant': dom,
            'secondary': sec,
            'original': match.group(0)[:150] + '...' if len(match.group(0)) > 150 else match.group(0),
            'new': new_text[:150] + '...' if len(new_text) > 150 else new_text
        })

        return new_text if not dry_run else match.group(0)

    transformed_text = pattern.sub(replacer, text)

    return transformed_text, changes


def main():
    """Main execution function."""
    import sys

    # Determine if this is a dry run
    dry_run = '--execute' not in sys.argv

    # File paths
    base_path = Path('/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev')
    master_file = base_path / 'STTI Master Profiles.md'

    if not master_file.exists():
        print(f"ERROR: Master file not found: {master_file}")
        return 1

    # Read the master file
    print(f"Reading {master_file.name}...")
    original_text = master_file.read_text(encoding='utf-8')

    # Transform the text
    print(f"\n{'=' * 80}")
    print(f"{'DRY RUN MODE - NO CHANGES WILL BE MADE' if dry_run else 'EXECUTE MODE - MAKING ACTUAL CHANGES'}")
    print(f"{'=' * 80}\n")

    transformed_text, changes = transform_archetype_description(original_text, dry_run=dry_run)

    # Report findings
    print(f"Found {len(changes)} archetype descriptions to transform:\n")

    for i, change in enumerate(changes, 1):
        print(f"{i}. {change['dominant']} + {change['secondary']}")
        print(f"   BEFORE: {change['original']}")
        print(f"   AFTER:  {change['new']}")
        print()

    # Verify we found all 24
    if len(changes) != 24:
        print(f"\nWARNING: Expected 24 profiles, found {len(changes)}!")
        print("Please review the pattern matching logic.")
        return 1

    # If execute mode, write the file
    if not dry_run:
        # Create backup first
        backup_file = base_path / f"STTI Master Profiles.md.backup-{datetime.now().strftime('%Y%m%d-%H%M%S')}"
        print(f"\nCreating backup: {backup_file.name}")
        backup_file.write_text(original_text, encoding='utf-8')

        # Write transformed file
        print(f"Writing transformed file: {master_file.name}")
        master_file.write_text(transformed_text, encoding='utf-8')

        print(f"\n{'=' * 80}")
        print("TRANSFORMATION COMPLETE!")
        print(f"{'=' * 80}")
        print(f"\nBackup saved to: {backup_file}")
        print(f"Transformed file: {master_file}")
        print(f"Total transformations: {len(changes)}")
    else:
        print(f"\n{'=' * 80}")
        print("DRY RUN COMPLETE - No changes made")
        print(f"{'=' * 80}")
        print(f"\nTo execute the transformation, run:")
        print(f"  python3 {Path(__file__).name} --execute")

    return 0


if __name__ == '__main__':
    exit(main())
