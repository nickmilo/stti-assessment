#!/bin/bash

echo "=========================================="
echo "TENDENCY SPECTRUM IMPLEMENTATION VERIFICATION"
echo "=========================================="
echo ""

# Check file modifications
echo "1. Checking file modifications..."
echo ""

if grep -q "tendency-spectrum-section" index.html; then
    echo "✓ index.html: Spectrum section found"
else
    echo "✗ index.html: Spectrum section NOT found"
fi

if grep -q "\.tendency-spectrum-section" styles.css; then
    echo "✓ styles.css: Spectrum styles found"
else
    echo "✗ styles.css: Spectrum styles NOT found"
fi

if grep -q "initTendencySpectrum" main.js; then
    echo "✓ main.js: Spectrum functions found"
else
    echo "✗ main.js: Spectrum functions NOT found"
fi

echo ""
echo "2. Checking integration points..."
echo ""

if grep -q "initTendencySpectrum(profile.scores)" main.js; then
    echo "✓ Integrated into showResults()"
else
    echo "✗ NOT integrated into showResults()"
fi

if grep -q "initTendencySpectrum(customScores)" main.js; then
    echo "✓ Integrated into activateProfile()"
else
    echo "✗ NOT integrated into activateProfile()"
fi

echo ""
echo "3. Validating syntax..."
echo ""

if node -c main.js 2>/dev/null; then
    echo "✓ JavaScript syntax valid"
else
    echo "✗ JavaScript syntax errors"
fi

echo ""
echo "4. Content verification..."
echo ""

if grep -q "Convergent Thinker" index.html && grep -q "Fragile Thinker" index.html; then
    echo "✓ Card content present (Architect tendencies)"
else
    echo "✗ Card content missing (Architect tendencies)"
fi

if grep -q "Divergent Thinker" index.html && grep -q "Scattered Thinker" index.html; then
    echo "✓ Card content present (Gardener tendencies)"
else
    echo "✗ Card content missing (Gardener tendencies)"
fi

echo ""
echo "=========================================="
echo "VERIFICATION COMPLETE"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Open index.html in browser"
echo "2. Press keys: 0 0 2 5"
echo "3. Verify spectrum appears with indicator near top"
echo "4. Press keys: 0 0 3 0"
echo "5. Verify indicator moves near bottom"
echo ""
