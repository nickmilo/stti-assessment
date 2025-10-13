# STTI Orientation Language Transformation Plan

## Executive Summary

**Current State:** 22 of 24 profiles need updates to orientation descriptions
**Scope:** Terminology changes, closing sentence additions, negative language removal
**Risk Level:** LOW - Changes are straightforward and systematic
**Recommended Approach:** Automated script with manual verification
**Estimated Completion Time:** 30-45 minutes including testing

## Audit Results

### Issues Found

| Issue Type | Profiles Affected | Total Instances |
|------------|-------------------|-----------------|
| Missing closing sentence | 22 profiles | 22 |
| Terminology changes needed | 15 profiles | 15 |
| Negative/stuck language | 15 profiles | 36 |

### Profiles with NO Issues (Already Correct)

1. **IP-Architect (0001)** - Perfect example, has closing sentence, no negative language
2. **IS-Architect (0003)** - Perfect example, has closing sentence, clean language

## Transformation Rules by Category

### 1. DIAGONAL PROFILES (8 profiles)

**Profile Types:** IP, PI, CS, SC (both Architect and Gardener)

**Current Variations:**
- IP profiles: "Your type of diagonal profile is known as a 'converter.'"
- PI/CS/SC profiles: "You are known as 'converters/translators.'"

**Changes Needed:**
- ✅ IP-Architect already correct
- Add closing sentence to 7 profiles

**Example Transformation (IP-Gardener):**

**BEFORE:**
```
As an **IP-Gardener**, you have a **Diagonal** profile (notice how the image spans diagonally across quadrants). Your type of diagonal profile is known as a "converter." You excel at transforming inner insights into productive action, bridging the gap between meaning and execution. Your diagonal nature allows you to move fluidly between reflection and execution.
```

**AFTER:**
```
As an **IP-Gardener**, you have a **Diagonal** profile (notice how the image spans diagonally across quadrants). Your type of diagonal profile is known as a "converter." You excel at transforming inner insights into productive action, bridging the gap between meaning and execution. Your diagonal nature allows you to move fluidly between reflection and execution. While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

---

### 2. WESTERN PROFILES (4 profiles)

**Profile Types:** IS, SI (both Architect and Gardener)

**Current Issues:**
- IS-Gardener, SI-Architect, SI-Gardener use "Westerner" and "Westerners"
- All three contain negative language: "They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing."
- IS-Gardener, SI-Architect, SI-Gardener missing closing sentence

**Example Transformation (IS-Gardener):**

**BEFORE:**
```
As an **IS-Gardener**, you have a **Westerner** profile with a tendency to **garden** (notice how the image is predominantly focused on the western side). Westerners are known as "philosophers." They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing.
```

**AFTER:**
```
As an **IS-Gardener**, you have a **Western** profile with a tendency to **garden** (notice how the image is predominantly focused on the western side). Western profiles are known as "philosophers." While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language to Remove:**
- "They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing."
- This belongs in the Overwhelmed section, NOT the Orientation section

---

### 3. EASTERN PROFILES (4 profiles)

**Profile Types:** CP, PC (both Architect and Gardener)

**Current Issues:**
- All use "Easterner" and "Easterners" (need "Eastern")
- All contain negative language: "They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection."
- All missing closing sentence

**Example Transformation (PC-Architect):**

**BEFORE:**
```
As a **PC-Architect**, you have an **Easterner** profile with a tendency to **architect** (notice how the image is predominantly focused on the eastern side). Easterners are known as "makers." They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection.
```

**AFTER:**
```
As a **PC-Architect**, you have an **Eastern** profile with a tendency to **architect** (notice how the image is predominantly focused on the eastern side). Eastern profiles are known as "makers." While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language to Remove:**
- "They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection."
- This belongs in the Overwhelmed section, NOT the Orientation section

---

### 4. NORTHERN PROFILES (4 profiles)

**Profile Types:** PS, SP (both Architect and Gardener)

**Current Issues:**
- All use "Northerner" and "Northerners" (need "Northern")
- All contain overwhelm language: "When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution."
- All missing closing sentence

**Example Transformation (PS-Architect):**

**BEFORE:**
```
As a **PS-Architect**, you have a **Northerner** profile with a tendency to **architect** (notice how the image is predominantly focused on the northern side). Northerners are known as "builders." They excel at structured creation and systematic progress, combining productive action with synthesized understanding. When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution.
```

**AFTER:**
```
As a **PS-Architect**, you have a **Northern** profile with a tendency to **architect** (notice how the image is predominantly focused on the northern side). Northern profiles are known as "builders." They excel at structured creation and systematic progress, combining productive action with synthesized understanding. While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language to Remove:**
- "When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution."
- This belongs in the Overwhelmed section, NOT the Orientation section

---

### 5. SOUTHERN PROFILES (4 profiles)

**Profile Types:** IC, CI (both Architect and Gardener)

**Current Issues:**
- All use "Southern are" (grammatically incorrect, needs "Southern profiles are")
- All contain stuck language: "When stuck, Southern need space for both reflection and creative experimentation."
- All missing closing sentence

**Example Transformation (IC-Architect):**

**BEFORE:**
```
As an **IC-Architect**, you have a **Southern** profile with a tendency to **architect** (notice how the image is predominantly focused on the southern side). Southern are known as "explorers." They thrive on creative introspection and meaningful discovery, combining inner guidance with creative expression. When stuck, Southern need space for both reflection and creative experimentation.
```

**AFTER:**
```
As an **IC-Architect**, you have a **Southern** profile with a tendency to **architect** (notice how the image is predominantly focused on the southern side). Southern profiles are known as "explorers." They thrive on creative introspection and meaningful discovery, combining inner guidance with creative expression. While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind.
```

**Negative Language to Remove:**
- "When stuck, Southern need space for both reflection and creative experimentation."
- This belongs in the Overwhelmed section, NOT the Orientation section

---

## Implementation Approach

### RECOMMENDED: Automated Script + Manual Verification

**Advantages:**
- Fast (5 minutes to run script vs 60+ minutes manual)
- Consistent application of rules across all profiles
- Reduces human error in repetitive tasks
- Provides clear audit trail of changes

**Process:**
1. Create Python transformation script
2. Run script to generate transformed markdown
3. Use git diff to review all changes line-by-line
4. Make any manual adjustments if needed
5. Run sync-profiles.py to update JSON/JS
6. Run validation script
7. Test in browser
8. Commit changes

### Alternative: Manual Editing

**Disadvantages:**
- Time-consuming (60-90 minutes for 22 profiles)
- Higher risk of inconsistency
- Easy to miss profiles or make typos
- Difficult to verify completeness

---

## Transformation Script Design

### Regex Patterns

```python
# Pattern 1: Plural to singular terminology
replacements = {
    r'\bWesterner\b': 'Western',
    r'\bWesterners\b': 'Western profiles',
    r'\bEasterner\b': 'Eastern',
    r'\bEasterners\b': 'Eastern profiles',
    r'\bNortherner\b': 'Northern',
    r'\bNortherners\b': 'Northern profiles',
    r'\bSouthern are\b': 'Southern profiles are',
}

# Pattern 2: Remove negative language sentences
negative_sentences = [
    r'They often get stuck reflecting and ruminating, and have difficulty moving from thinking to doing\.',
    r'They often get stuck going from expression to reflection, from outward orientation to inward, from doing to thinking\. But when Easterners feel overwhelmed, the answer is usually to do less action and more reflection\.',
    r'When overwhelmed, Northerners benefit from stepping back to gain perspective before diving into execution\.',
    r'When stuck, Southern need space for both reflection and creative experimentation\.',
]

# Pattern 3: Add closing sentence if missing
closing_sentence = "While this is your current sensemaking orientation, you must be able to move between all archetypes to make the most of your mind."
```

---

## Verification Checklist

### Pre-Transformation
- [x] Audit script confirms 22 profiles need updates
- [x] Identified all negative language patterns
- [x] Documented before/after examples for each category
- [ ] Create backup of STTI Master Profiles.md

### During Transformation
- [ ] Run transformation script
- [ ] Review git diff for all changes
- [ ] Verify terminology changes are correct
- [ ] Verify negative language removed
- [ ] Verify closing sentence added to all 22 profiles
- [ ] Verify IP-Architect and IS-Architect unchanged

### Post-Transformation
- [ ] Run sync-profiles.py successfully
- [ ] profiles.json updated correctly
- [ ] main.js orientation data updated correctly
- [ ] Run validation script (no errors)
- [ ] Test all 24 profiles in browser
- [ ] Verify orientation text displays correctly
- [ ] Verify no broken formatting
- [ ] Check sample profiles from each category
- [ ] Commit changes with clear message

---

## Risk Assessment

### Risk Level: LOW

**Why Low Risk:**
1. Changes are isolated to Orientation Description sections only
2. No code changes required (only markdown content)
3. Existing sync-profiles.py handles JSON/JS generation
4. Git provides easy rollback if needed
5. Changes are additive/subtractive (no complex logic)

**Potential Issues:**
1. **Article changes (a/an/the):** May need manual review for grammar
2. **Varied sentence structures:** Some profiles may need custom handling
3. **Edge cases:** Profiles with unique wording may need special attention

**Mitigation:**
1. Use git diff to review every single change
2. Test representative samples from each category
3. Keep backup of original file
4. Run full validation suite before committing

---

## Sample Output from Each Category

### Diagonal (Converter/Translator)
✓ **IP-Architect** - Already perfect
➜ **IP-Gardener** - Add closing sentence only
➜ **PI-Architect** - Add closing sentence only
➜ **PI-Gardener** - Add closing sentence only
➜ **CS-Architect** - Add closing sentence only
➜ **CS-Gardener** - Add closing sentence only
➜ **SC-Architect** - Add closing sentence only
➜ **SC-Gardener** - Add closing sentence only

### Western (Philosopher)
✓ **IS-Architect** - Already perfect
➜ **IS-Gardener** - Change "Westerner/Westerners", remove negative sentence, add closing
➜ **SI-Architect** - Change "Westerner/Westerners", remove negative sentence, add closing
➜ **SI-Gardener** - Change "Westerner/Westerners", remove negative sentence, add closing

### Eastern (Maker)
➜ **CP-Architect** - Change "Easterner/Easterners", remove negative sentences, add closing
➜ **CP-Gardener** - Change "Easterner/Easterners", remove negative sentences, add closing
➜ **PC-Architect** - Change "Easterner/Easterners", remove negative sentences, add closing
➜ **PC-Gardener** - Change "Easterner/Easterners", remove negative sentences, add closing

### Northern (Builder)
➜ **PS-Architect** - Change "Northerner/Northerners", remove overwhelm sentence, add closing
➜ **PS-Gardener** - Change "Northerner/Northerners", remove overwhelm sentence, add closing
➜ **SP-Architect** - Change "Northerner/Northerners", remove overwhelm sentence, add closing
➜ **SP-Gardener** - Change "Northerner/Northerners", remove overwhelm sentence, add closing

### Southern (Explorer)
➜ **IC-Architect** - Fix "Southern are", remove stuck sentence, add closing
➜ **IC-Gardener** - Fix "Southern are", remove stuck sentence, add closing
➜ **CI-Architect** - Fix "Southern are", remove stuck sentence, add closing
➜ **CI-Gardener** - Fix "Southern are", remove stuck sentence, add closing

---

## Next Steps

1. **Review and approve this plan**
2. **Create backup of master profiles file**
3. **Build transformation script**
4. **Run transformation with review**
5. **Execute full testing workflow**
6. **Commit changes**

---

## Estimated Timeline

| Task | Time Estimate |
|------|---------------|
| Create transformation script | 10 minutes |
| Run script and review diffs | 10 minutes |
| Make manual adjustments | 5 minutes |
| Run sync-profiles.py | 1 minute |
| Run validation script | 1 minute |
| Browser testing (5 profiles) | 5 minutes |
| Git commit | 2 minutes |
| **TOTAL** | **34 minutes** |

Compare to manual editing: 60-90 minutes with higher error risk.

---

## Conclusion

**RECOMMENDATION:** Proceed with automated transformation script approach.

The changes are systematic, well-defined, and low-risk. An automated script ensures consistency and speed while maintaining accuracy. The comprehensive verification checklist ensures quality control at every step.
