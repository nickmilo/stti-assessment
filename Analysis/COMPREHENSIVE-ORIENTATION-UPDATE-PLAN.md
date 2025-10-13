# COMPREHENSIVE ORIENTATION UPDATE PLAN
## STTI Master Profiles - Orientation Language Standardization

**Date:** 2025-10-12
**Status:** READY FOR EXECUTION
**Risk Level:** LOW
**Estimated Time:** 30-45 minutes

---

## EXECUTIVE SUMMARY

This plan provides a complete strategy for updating all 24 STTI profile orientation sections with standardized language and structure. The analysis confirms 22 profiles need updates, with 2 already correct.

**Key Changes:**
- Terminology: Plural forms → Singular forms (Westerners → Western profiles)
- Content: Remove negative/stuck language from Orientation sections
- Structure: Add standardized closing sentence to all profiles

**Recommendation:** Execute automated transformation script with manual verification.

---

## TABLE OF CONTENTS

1. [Current State Audit](#current-state-audit)
2. [Transformation Requirements](#transformation-requirements)
3. [Profile Category Analysis](#profile-category-analysis)
4. [Implementation Tools](#implementation-tools)
5. [Execution Workflow](#execution-workflow)
6. [Verification Strategy](#verification-strategy)
7. [Risk Assessment](#risk-assessment)
8. [Timeline & Dependencies](#timeline--dependencies)

---

## CURRENT STATE AUDIT

### Overview Statistics

| Metric | Count |
|--------|-------|
| Total profiles | 24 |
| Profiles needing updates | 22 |
| Profiles already correct | 2 |
| Total changes required | 63 |
| Terminology changes | 15 profiles |
| Negative language removals | 15 profiles |
| Missing closing sentences | 22 profiles |

### Profiles Already Correct

These profiles serve as our gold standard and will NOT be modified:

1. **IP-Architect (Code: 0001)**
   - Has closing sentence
   - Clean, positive language
   - No terminology issues

2. **IS-Architect (Code: 0003)**
   - Has closing sentence
   - Clean, positive language
   - No terminology issues

### Profiles Requiring Updates (22)

**By Change Type:**
- **Simple (closing sentence only):** 7 profiles
  - IP-Gardener, PI-Architect, PI-Gardener, SC-Architect, SC-Gardener, CS-Architect, CS-Gardener

- **Moderate (terminology + closing):** 0 profiles

- **Complex (terminology + negative language + closing):** 15 profiles
  - All Western (except IS-Architect)
  - All Eastern
  - All Northern
  - All Southern

---

## TRANSFORMATION REQUIREMENTS

### Requirement 1: Terminology Changes

**Rule:** Change plural to singular forms

| Old Term | New Term | Profiles Affected |
|----------|----------|-------------------|
| Westerner | Western | 3 (IS-Gardener, SI-Architect, SI-Gardener) |
| Westerners | Western profiles | 3 (IS-Gardener, SI-Architect, SI-Gardener) |
| Easterner | Eastern | 4 (CP-Architect, CP-Gardener, PC-Architect, PC-Gardener) |
| Easterners | Eastern profiles | 4 (CP-Architect, CP-Gardener, PC-Architect, PC-Gardener) |
| Northerner | Northern | 4 (PS-Architect, PS-Gardener, SP-Architect, SP-Gardener) |
| Northerners | Northern profiles | 4 (PS-Architect, PS-Gardener, SP-Architect, SP-Gardener) |
| Southern are | Southern profiles are | 4 (IC-Architect, IC-Gardener, CI-Architect, CI-Gardener) |

**Article Adjustments:** Contextual changes to "a", "an", "the" as needed for grammar.

### Requirement 2: Remove Negative Language

**Principle:** Orientation sections describe the profile positively. Negative language about being "stuck" or "overwhelmed" belongs in the Overwhelmed section, not Orientation.

**Sentences to Remove:**

**Western profiles:**
```
They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing.
```

**Eastern profiles:**
```
They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection.
```

**Northern profiles:**
```
When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution.
```

**Southern profiles:**
```
When stuck, Southern need space for both reflection and creative experimentation.
```

### Requirement 3: Add Closing Sentence

**Standard Closing:** Every orientation section must end with:

```
While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Placement:** Add to end of orientation paragraph (after final period).

---

## PROFILE CATEGORY ANALYSIS

### Category 1: Diagonal Profiles (8 profiles)

**Subcategories:**
- **Converters:** IP, PI (4 profiles)
- **Translators:** CS, SC (4 profiles)

**Current State:**
- IP-Architect: ✓ Already correct
- 7 others: Need closing sentence only

**Changes Needed:**
- Add closing sentence to 7 profiles
- No terminology changes
- No negative language to remove

**Sample Before/After (IP-Gardener):**

**BEFORE:**
```
As an **IP-Gardener**, you have a **Diagonal** profile (notice how the image spans diagonally across quadrants). Your type of diagonal profile is known as a "converter." You excel at transforming inner insights into productive action, bridging the gap between meaning and execution. Your diagonal nature allows you to move fluidly between reflection and execution.
```

**AFTER:**
```
As an **IP-Gardener**, you have a **Diagonal** profile (notice how the image spans diagonally across quadrants). Your type of diagonal profile is known as a "converter." You excel at transforming inner insights into productive action, bridging the gap between meaning and execution. Your diagonal nature allows you to move fluidly between reflection and execution. While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

---

### Category 2: Western Profiles (4 profiles)

**Label:** Philosophers
**Profiles:** IS, SI (both Architect and Gardener)

**Current State:**
- IS-Architect: ✓ Already correct
- IS-Gardener, SI-Architect, SI-Gardener: Need full transformation

**Changes Needed:**
- Change "Westerner" → "Western"
- Change "Westerners" → "Western profiles"
- Remove negative sentence about being stuck
- Add closing sentence

**Sample Before/After (IS-Gardener):**

**BEFORE:**
```
As an **IS-Gardener**, you have a **Westerner** profile with a tendency to **garden** (notice how the image is predominantly focused on the western side). Westerners are known as "philosophers." They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing.
```

**AFTER:**
```
As an **IS-Gardener**, you have a **Western** profile with a tendency to **garden** (notice how the image is predominantly focused on the western side). Western profiles are known as "philosophers." While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language Removed:**
```
They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing.
```
→ This belongs in Overwhelmed section, not Orientation.

---

### Category 3: Eastern Profiles (4 profiles)

**Label:** Makers
**Profiles:** CP, PC (both Architect and Gardener)

**Current State:**
- All 4 need full transformation

**Changes Needed:**
- Change "Easterner" → "Eastern"
- Change "Easterners" → "Eastern profiles"
- Remove negative sentences (2 sentences about stuck/overwhelmed)
- Add closing sentence

**Sample Before/After (PC-Architect):**

**BEFORE:**
```
As a **PC-Architect**, you have an **Easterner** profile with a tendency to **architect** (notice how the image is predominantly focused on the eastern side). Easterners are known as "makers." They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection.
```

**AFTER:**
```
As a **PC-Architect**, you have an **Eastern** profile with a tendency to **architect** (notice how the image is predominantly focused on the eastern side). Eastern profiles are known as "makers." While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language Removed:**
```
They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection.
```
→ This belongs in Overwhelmed section, not Orientation.

---

### Category 4: Northern Profiles (4 profiles)

**Label:** Builders
**Profiles:** PS, SP (both Architect and Gardener)

**Current State:**
- All 4 need full transformation

**Changes Needed:**
- Change "Northerner" → "Northern"
- Change "Northerners" → "Northern profiles"
- Remove overwhelm sentence
- Add closing sentence

**Sample Before/After (PS-Architect):**

**BEFORE:**
```
As a **PS-Architect**, you have a **Northerner** profile with a tendency to **architect** (notice how the image is predominantly focused on the northern side). Northerners are known as "builders." They excel at structured creation and systematic progress, combining productive action with synthesized understanding. When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution.
```

**AFTER:**
```
As a **PS-Architect**, you have a **Northern** profile with a tendency to **architect** (notice how the image is predominantly focused on the northern side). Northern profiles are known as "builders." They excel at structured creation and systematic progress, combining productive action with synthesized understanding. While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language Removed:**
```
When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution.
```
→ This belongs in Overwhelmed section, not Orientation.

---

### Category 5: Southern Profiles (4 profiles)

**Label:** Explorers
**Profiles:** IC, CI (both Architect and Gardener)

**Current State:**
- All 4 need full transformation

**Changes Needed:**
- Fix grammar: "Southern are" → "Southern profiles are"
- Remove stuck sentence
- Add closing sentence

**Sample Before/After (IC-Architect):**

**BEFORE:**
```
As an **IC-Architect**, you have a **Southern** profile with a tendency to **architect** (notice how the image is predominantly focused on the southern side). Southern are known as "explorers." They thrive on creative introspection and meaningful discovery, combining inner guidance with creative expression. When stuck, Southern need space for both reflection and creative experimentation.
```

**AFTER:**
```
As an **IC-Architect**, you have a **Southern** profile with a tendency to **architect** (notice how the image is predominantly focused on the southern side). Southern profiles are known as "explorers." They thrive on creative introspection and meaningful discovery, combining inner guidance with creative expression. While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language Removed:**
```
When stuck, Southern need space for both reflection and creative experimentation.
```
→ This belongs in Overwhelmed section, not Orientation.

---

## IMPLEMENTATION TOOLS

### Tool 1: Audit Script

**File:** `/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/Analysis/audit-orientation-language.py`

**Purpose:**
- Identifies all orientation sections
- Detects terminology issues
- Flags negative language
- Validates closing sentences

**Usage:**
```bash
python3 audit-orientation-language.py
```

**Output:** Detailed report of all issues by profile category

### Tool 2: Transformation Script

**File:** `/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/Analysis/transform-orientation-language.py`

**Purpose:**
- Applies all terminology changes
- Removes negative language sentences
- Adds closing sentences
- Preserves already-correct profiles

**Key Features:**
- Dry-run mode for safe preview
- Detailed change logging
- Atomic transformations
- Backup-safe (can specify output file)

**Usage:**
```bash
# Preview changes without modifying files
python3 transform-orientation-language.py --dry-run

# Apply changes (overwrites master file)
python3 transform-orientation-language.py

# Apply changes to new file (preserves original)
python3 transform-orientation-language.py --output "STTI Master Profiles UPDATED.md"
```

**Dry-Run Output Summary:**
```
Profiles modified: 22
Total changes made: 63
Profiles skipped (already correct): 2
  - IP-Architect, IS-Architect
```

---

## EXECUTION WORKFLOW

### Step 1: Pre-Execution Checklist

- [x] Audit script created and tested
- [x] Transformation script created and tested
- [x] Dry-run executed successfully (22 profiles, 63 changes)
- [ ] Git status clean (no uncommitted changes)
- [ ] Create git backup branch (optional but recommended)

### Step 2: Create Backup

**Recommended:** Create backup branch before transformation

```bash
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev"
git checkout -b backup-before-orientation-update
git checkout premium-test
```

### Step 3: Execute Transformation

**Option A: Direct transformation (overwrites original)**
```bash
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/Analysis"
python3 transform-orientation-language.py
```

**Option B: Safe transformation (creates new file)**
```bash
python3 transform-orientation-language.py \
  --output "../STTI Master Profiles UPDATED.md"
# Then manually review and replace original
```

### Step 4: Review Changes

```bash
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev"
git diff "STTI Master Profiles.md"
```

**Review Checklist:**
- [ ] Exactly 22 profiles modified (IP-Architect and IS-Architect unchanged)
- [ ] All terminology changes applied correctly
- [ ] No unintended text modifications
- [ ] Closing sentence added to all 22 profiles
- [ ] No formatting issues or broken markdown
- [ ] Grammar looks correct (articles: a/an/the)

### Step 5: Sync to JSON/JS

```bash
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/Analysis"
python3 sync-profiles.py
```

**Expected Output:**
```
✓ Successfully synced 24 profiles to profiles.json
✓ Successfully synced orientation data to main.js
```

### Step 6: Run Validation

```bash
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev/Analysis"
python3 validate-profiles.py
```

**Expected Output:**
```
✓ All 24 profiles validated successfully
✓ No errors found
```

### Step 7: Browser Testing

**Test representative samples from each category:**

1. Open `index.html` in browser
2. Test these profiles with their secret codes:
   - IP-Architect (0001) - Should be unchanged
   - IP-Gardener (0002) - Diagonal with closing added
   - IS-Gardener (0004) - Western with full transformation
   - PC-Architect (0011) - Eastern with full transformation
   - PS-Gardener (0010) - Northern with full transformation
   - IC-Architect (0005) - Southern with full transformation

**Check for each profile:**
- [ ] Orientation text displays correctly
- [ ] No formatting issues
- [ ] Closing sentence appears
- [ ] Grammar is correct
- [ ] No negative language in Orientation section
- [ ] Terminology is correct (Western, not Westerners, etc.)

### Step 8: Commit Changes

```bash
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev"
git add "STTI Master Profiles.md"
git add "Analysis/profiles.json"  # if using JSON-based system
git add "Web-App/main.js"  # if orientation data in JS

git commit -m "$(cat <<'EOF'
Standardize orientation language across all 24 profiles

- Change plural terminology to singular (Westerners → Western profiles)
- Remove negative/stuck language from Orientation sections
- Add standardized closing sentence to 22 profiles
- Preserve IP-Architect and IS-Architect (already correct)

Changes applied to:
- 3 Western profiles (IS-Gardener, SI-Architect, SI-Gardener)
- 4 Eastern profiles (all CP, PC variants)
- 4 Northern profiles (all PS, SP variants)
- 4 Southern profiles (all IC, CI variants)
- 7 Diagonal profiles (IP-Gardener, all PI, SC, CS variants)

Total: 22 profiles modified, 63 individual changes

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

---

## VERIFICATION STRATEGY

### Level 1: Automated Verification

**Tools:**
- Audit script (before/after comparison)
- Validation script (schema/structure check)
- Git diff (line-by-line review)

**Checks:**
- [x] Dry-run shows expected changes
- [ ] Post-transformation audit shows 0 issues
- [ ] Git diff shows only intended changes
- [ ] No unexpected modifications

### Level 2: Manual Spot Checks

**Sample Profiles to Review (one from each category):**

1. **Diagonal:** PI-Architect
   - Should have closing sentence added
   - No other changes

2. **Western:** SI-Gardener
   - Should have terminology changed
   - Should have negative sentence removed
   - Should have closing sentence added

3. **Eastern:** CP-Gardener
   - Should have terminology changed
   - Should have negative sentences removed
   - Should have closing sentence added

4. **Northern:** SP-Architect
   - Should have terminology changed
   - Should have overwhelm sentence removed
   - Should have closing sentence added

5. **Southern:** CI-Gardener
   - Should have grammar fixed
   - Should have stuck sentence removed
   - Should have closing sentence added

### Level 3: Browser Testing

**Test Matrix:**

| Profile | Code | Expected Orientation Text Check |
|---------|------|--------------------------------|
| IP-Architect | 0001 | ✓ Should be unchanged |
| IS-Architect | 0003 | ✓ Should be unchanged |
| IP-Gardener | 0002 | ✓ Closing sentence added |
| IS-Gardener | 0004 | ✓ "Western profiles" + closing |
| PC-Architect | 0011 | ✓ "Eastern profiles" + closing |
| PS-Gardener | 0010 | ✓ "Northern profiles" + closing |
| IC-Architect | 0005 | ✓ "Southern profiles are" + closing |

### Level 4: Regression Testing

**Ensure no breakage:**
- [ ] All 24 profiles render in browser
- [ ] No JavaScript console errors
- [ ] Navigation works correctly
- [ ] Images display properly
- [ ] Other sections (Overwhelmed, Stuck, etc.) unchanged
- [ ] Secret codes still work

---

## RISK ASSESSMENT

### Overall Risk Level: LOW

**Justification:**
- Changes are isolated to Orientation sections only
- No code modifications required
- Transformations are systematic and repeatable
- Git provides easy rollback
- Two profiles already correct serve as validation

### Risk Breakdown

| Risk Area | Level | Mitigation |
|-----------|-------|------------|
| Unintended text changes | LOW | Git diff review + dry-run preview |
| Grammar errors | LOW | Manual spot-check + browser testing |
| Breaking functionality | VERY LOW | No code changes, only content |
| Missing profiles | VERY LOW | Automated count verification |
| Sync issues | LOW | Validation script catches errors |
| User-facing impact | VERY LOW | Content improvements only |

### Failure Scenarios & Recovery

**Scenario 1: Script produces unexpected output**
- **Probability:** Very Low
- **Detection:** Dry-run preview, git diff review
- **Recovery:** Do not commit, fix script, re-run
- **Impact:** None (caught before commit)

**Scenario 2: Grammar issues in transformed text**
- **Probability:** Low
- **Detection:** Manual review, browser testing
- **Recovery:** Manual correction in markdown, re-sync
- **Impact:** Minimal (easy fix)

**Scenario 3: Sync script fails**
- **Probability:** Very Low
- **Detection:** Script error output
- **Recovery:** Fix markdown issues, re-run sync
- **Impact:** Minimal (no user-facing change until sync succeeds)

**Scenario 4: Need to rollback after commit**
- **Probability:** Very Low
- **Detection:** User testing, QA review
- **Recovery:** `git revert` or restore from backup branch
- **Impact:** Low (quick rollback available)

---

## TIMELINE & DEPENDENCIES

### Estimated Timeline

| Phase | Task | Time | Dependencies |
|-------|------|------|--------------|
| 1 | Pre-execution checklist | 2 min | - |
| 2 | Create backup branch | 1 min | Git clean status |
| 3 | Run transformation script | 1 min | Backup created |
| 4 | Review git diff | 5 min | Transformation complete |
| 5 | Run sync-profiles.py | 1 min | Diff approved |
| 6 | Run validation script | 1 min | Sync complete |
| 7 | Browser testing (7 profiles) | 10 min | Validation passed |
| 8 | Make any manual adjustments | 5 min | Testing complete |
| 9 | Re-sync if needed | 1 min | Adjustments made |
| 10 | Final validation | 1 min | Re-sync complete |
| 11 | Git commit | 2 min | All tests passed |
| **TOTAL** | **30 minutes** | |

**Buffer Time:** +15 minutes for unexpected issues = **45 minutes max**

### Dependencies

**External Dependencies:**
- None (all tools created and tested)

**Internal Dependencies:**
1. Git repository in clean state
2. Python 3 available
3. Browser for testing
4. sync-profiles.py script (already exists)
5. validate-profiles.py script (assumed to exist)

**Blocking Issues:**
- None identified

---

## SUCCESS CRITERIA

### Must Have (Non-Negotiable)

1. ✓ All 22 target profiles updated
2. ✓ IP-Architect and IS-Architect unchanged
3. ✓ No unintended modifications to other sections
4. ✓ All profiles pass validation script
5. ✓ Closing sentence added to all 22 profiles
6. ✓ All negative language removed from Orientation sections
7. ✓ All terminology changed correctly

### Should Have (Highly Desired)

1. ✓ Grammar is correct across all changes
2. ✓ No formatting issues in browser
3. ✓ Git commit is clean and well-documented
4. ✓ All profiles tested in browser

### Nice to Have (Optional)

1. Documentation of changes for future reference
2. Before/after comparison screenshots
3. User testing feedback

---

## CONCLUSION

This plan provides a complete, low-risk strategy for updating all 24 STTI profile orientation sections. The automated transformation approach ensures consistency and speed while comprehensive verification ensures quality.

**RECOMMENDATION:** Proceed with execution following this workflow.

**NEXT STEPS:**
1. Review and approve this plan
2. Execute Step 1: Pre-execution checklist
3. Execute transformation workflow (Steps 2-8)
4. Verify success criteria met
5. Commit changes

---

## APPENDIX: Quick Reference Commands

```bash
# Navigate to project
cd "/Users/nick/Dropbox/+/AI/Efforts/Active/STTI Assessment Dev"

# Create backup branch
git checkout -b backup-before-orientation-update
git checkout premium-test

# Run transformation
cd Analysis
python3 transform-orientation-language.py --dry-run  # preview
python3 transform-orientation-language.py             # execute

# Review changes
cd ..
git diff "STTI Master Profiles.md"

# Sync and validate
cd Analysis
python3 sync-profiles.py
python3 validate-profiles.py

# Test in browser
open "../index.html"

# Commit
cd ..
git add "STTI Master Profiles.md"
git commit -m "Standardize orientation language across all 24 profiles"
```

---

**Document Version:** 1.0
**Last Updated:** 2025-10-12
**Status:** READY FOR EXECUTION
