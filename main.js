        const questions = [
            { id: 1, text: "I am really satisfied when I create something that feels original to me.", archetype: 'C+' },
            { id: 2, text: "I naturally look at topics from many angles.", archetype: 'S+' },
            { id: 3, text: "I find working from detailed plans draining.", archetype: 'G+' },
            { id: 4, text: "I prefer to read summaries, not wade through a lot of information.", archetype: 'S-' },
            { id: 5, text: "I am energized by making progress on tasks.", archetype: 'P+' },
            { id: 6, text: "If I'm putting something together, I start building before opening the manual.", archetype: 'G+' },
            { id: 7, text: "I prefer novels over non-fiction.", archetype: 'RH' },
            { id: 8, text: "I feel satisfied when my explorations lead to something unexpected.", archetype: 'G+' },
            { id: 9, text: "I don't tend to reflect on my life experiences.", archetype: 'I-' },
            { id: 10, text: "I am willing to put in the work required for my ideas to have an impact on others.", archetype: 'C+' },
            { id: 11, text: "Working from detailed plans is energizing for me.", archetype: 'A+' },
            { id: 12, text: "I am not particularly interested in abstract ideas.", archetype: 'S-' },
            { id: 13, text: "I find exploring without a set path energizing.", archetype: 'G+' },
            { id: 14, text: "I have a hard time making progress on my goals.", archetype: 'P-' },
            { id: 15, text: "Taking action on what I learn is important to me.", archetype: 'P+' },
            { id: 16, text: "I am drained by reflecting on my life.", archetype: 'I-' },
            { id: 17, text: "I rarely share my ideas with others.", archetype: 'C-' },
            { id: 18, text: "Mapping out everything ahead of time helps me focus on what matters.", archetype: 'A+' },
            { id: 19, text: "I prefer classic literature over sci-fi or fantasy.", archetype: 'RH' },
            { id: 20, text: "I feel really satisfied when I get a lot of things done in a day.", archetype: 'P+' },
            { id: 21, text: "I dive in without a plan when starting a new project.", archetype: 'G+' },
            { id: 22, text: "I'm more extrovert than introvert.", archetype: 'RH' },
            { id: 23, text: "I find exploring topics in depth energizing.", archetype: 'S+' },
            { id: 24, text: "Creating something original doesn't give me particular satisfaction.", archetype: 'C-' },
            { id: 25, text: "Having a clear plan at the start of something new is important to me.", archetype: 'A+' },
            { id: 26, text: "I am not particularly interested in personal reflection.", archetype: 'I-' },
            { id: 27, text: "I am energized by expressing my unique perspective.", archetype: 'C+' },
            { id: 28, text: "If I'm putting something together, I read the manual first.", archetype: 'A+' },
            { id: 29, text: "There will always be more to do. I don't stress about getting stuff done.", archetype: 'P-' },
            { id: 30, text: "I often spend time reflecting on my life experiences.", archetype: 'I+' },
            { id: 31, text: "Being able to do something with my learning isn't that important to me.", archetype: 'P-' },
            { id: 32, text: "I am really satisfied when I make sense out of complex information.", archetype: 'S+' },
            { id: 33, text: "Exploring without a set path drains me.", archetype: 'A+' },
            { id: 34, text: "I find expressing my unique perspective draining.", archetype: 'C-' },
            { id: 35, text: "I consistently take action on the tasks and plans of the day.", archetype: 'P+' },
            { id: 36, text: "Trying to map out everything ahead of time is a waste of time.", archetype: 'G+' },
            { id: 37, text: "I prefer a mountain hike rather than a beach stroll.", archetype: 'RH' },
            { id: 38, text: "I feel satisfied when I execute a well-structured plan.", archetype: 'A+' },
            { id: 39, text: "I enjoy working with a lot of information.", archetype: 'S+' },
            { id: 40, text: "I am not particularly interested in taking detours without a high-level picture.", archetype: 'A+' },
            { id: 41, text: "I think introspection is overrated. I'm content to take life as it comes.", archetype: 'I-' },
            { id: 42, text: "Executing a structured plan doesn't appeal to me.", archetype: 'G+' },
            { id: 43, text: "I find working on tasks draining.", archetype: 'P-' },
            { id: 44, text: "Having flexibility at the start of something new is important to me.", archetype: 'G+' },
            { id: 45, text: "I feel really satisfied when I am making sense of my life.", archetype: 'I+' },
            { id: 46, text: "I'm more introvert than extrovert.", archetype: 'RH' },
            { id: 47, text: "I often share my ideas with others.", archetype: 'C+' },
            { id: 48, text: "While it would be nice to impact others with my original creations, I have more pressing priorities.", archetype: 'C-' },
            { id: 49, text: "I am drained by exploring topics in depth.", archetype: 'S-' },
            { id: 50, text: "When beginning a new project, I usually start by making a plan.", archetype: 'A+' },
            { id: 51, text: "I feel a strong need to think about my values and what really matters to me.", archetype: 'I+' },
            { id: 52, text: "I find reflecting on my life energizing.", archetype: 'I+' },
            { id: 53, text: "I don't feel the need to exhaustively explore an idea.", archetype: 'S-' }
        ];

        const demographicQuestions = [
            {
                id: 54,
                type: 'radio',
                text: 'How familiar are you with linking notes/ideas in digital tools?',
                options: [
                    'Very experienced - I use linking regularly',
                    'Somewhat experienced - I\'ve tried it or use it occasionally',
                    'Familiar with the concept but haven\'t used it much',
                    'Not familiar with linking notes/ideas digitally',
                    'Prefer not to answer'
                ]
            },
            {
                id: 55,
                type: 'radio',
                text: 'What is your age range?',
                options: [
                    'Under 18',
                    '18-24',
                    '25-34',
                    '35-44',
                    '45-54',
                    '55-64',
                    '65+',
                    'Prefer not to answer'
                ]
            },
            {
                id: 56,
                type: 'checkbox-with-text',
                text: 'Have you been diagnosed with any of these neurodivergent conditions? (Select all that apply)',
                options: [
                    'ADHD',
                    'Autism/Autistic',
                    'Dyslexia',
                    'Learning disabilities/differences',
                    { text: 'Prefer to self-describe:', hasInput: true, inputId: 'q56_self_describe' },
                    'I suspect I have something, but I haven\'t been diagnosed',
                    'None of the above',
                    'Prefer not to answer'
                ]
            },
            {
                id: 57,
                type: 'radio-with-text',
                text: 'What is your gender?',
                options: [
                    'Man',
                    'Woman',
                    'Non-binary',
                    { text: 'Prefer to self-describe:', hasInput: true, inputId: 'q57_self_describe' },
                    'Prefer not to answer'
                ]
            },
            {
                id: 58,
                type: 'radio',
                text: 'How would you describe your current approach to using AI tools?',
                options: [
                    'Enthusiastically using - I actively seek out AI tools and integrate them into my work',
                    'Practically using - I use AI tools when they\'re helpful for specific tasks',
                    'Reluctantly using - I use them sometimes but have reservations',
                    'Avoiding use - I prefer not to use AI tools',
                    'Haven\'t had much opportunity to use AI tools yet',
                    'Prefer not to answer'
                ]
            }
        ];

        // Global constants for archetype configuration
        const ARCHETYPE_NAMES = {
            'I': 'Inner Guide',
            'S': 'Synthesizer',
            'P': 'Producer',
            'C': 'Creative'
        };

        const ARCHETYPE_PILL_CLASSES = {
            'I': 'inner-guide-pill',
            'S': 'synthesizer-pill',
            'P': 'producer-pill',
            'C': 'creative-pill'
        };

        let currentQuestion = 0;
        let answers = {};
        let demographicAnswers = {};
        let userEmail = '';
        let hasSubmittedToFormspree = false; // Prevent duplicate API submissions
        let hasRenderedResults = false; // Track rendering state separately
        let currentProfile = null; // Store current profile for share functions
        const TOTAL_QUESTIONS = 58; // 53 STTI + 5 demographic (intro screen is NOT counted as a question)
        
        
        // Simple secret code system - exact copy of what worked with Z key
        let keySequence = '';
        let keyTimer = null;
        
        window.addEventListener('keydown', function(e) {
            // Only work when not in an input field
            if (document.activeElement.tagName === 'INPUT') return;
            
            // Build sequence for 4-digit codes
            if (e.key >= '0' && e.key <= '9') {
                keySequence += e.key;

                // Clear timer
                if (keyTimer) clearTimeout(keyTimer);
                
                // Reset after 3 seconds
                keyTimer = setTimeout(() => {
                    keySequence = '';
                }, 3000);
                
                // Check for exact matches
                if (keySequence === '0001') {
                    activateProfile('IP-Architect', 'The Converter');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0002') {
                    activateProfile('IP-Gardener', 'The Converter');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0003') {
                    activateProfile('IS-Architect', 'The Philosopher');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0004') {
                    activateProfile('IS-Gardener', 'The Philosopher');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0005') {
                    activateProfile('IC-Architect', 'The Explorer');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0006') {
                    activateProfile('IC-Gardener', 'The Explorer');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0007') {
                    activateProfile('PI-Architect', 'The Converter');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0008') {
                    activateProfile('PI-Gardener', 'The Converter');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0009') {
                    activateProfile('PS-Architect', 'The Builder');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0010') {
                    activateProfile('PS-Gardener', 'The Builder');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0011') {
                    activateProfile('PC-Architect', 'The Maker');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0012') {
                    activateProfile('PC-Gardener', 'The Maker');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0013') {
                    activateProfile('SI-Architect', 'The Philosopher');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0014') {
                    activateProfile('SI-Gardener', 'The Philosopher');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0015') {
                    activateProfile('SP-Architect', 'The Builder');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0016') {
                    activateProfile('SP-Gardener', 'The Builder');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0017') {
                    activateProfile('SC-Architect', 'The Translator');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0018') {
                    activateProfile('SC-Gardener', 'The Translator');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0019') {
                    activateProfile('CI-Architect', 'The Explorer');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0020') {
                    activateProfile('CI-Gardener', 'The Explorer');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0021') {
                    activateProfile('CP-Architect', 'The Maker');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0022') {
                    activateProfile('CP-Gardener', 'The Maker');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0023') {
                    activateProfile('CS-Architect', 'The Translator');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0024') {
                    activateProfile('CS-Gardener', 'The Translator');
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0025') {
                    // Test profile: Extreme variance (I:32 S:8 P:26 C:15 A:32 G:10)
                    activateProfile('IP-Architect', 'The Converter', {
                        I: 32, S: 8, P: 26, C: 15, A: 32, G: 10
                    });
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0026') {
                    // Test profile: Balanced scores (I:24 S:18 P:33 C:20 A:20 G:18)
                    activateProfile('PI-Architect', 'The Converter', {
                        I: 24, S: 18, P: 33, C: 20, A: 20, G: 18
                    });
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0027') {
                    // Test profile: All equal (I:20 S:20 P:20 C:20 A:20 G:20) - perfect balance
                    activateProfile('IP-Architect', 'The Converter', {
                        I: 20, S: 20, P: 20, C: 20, A: 20, G: 20
                    });
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0028') {
                    // Test profile: All minimum (I:8 S:8 P:8 C:8 A:8 G:8) - edge case
                    activateProfile('IP-Architect', 'The Converter', {
                        I: 8, S: 8, P: 8, C: 8, A: 8, G: 8
                    });
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0029') {
                    // Test profile: All maximum (I:32 S:32 P:32 C:32 A:32 G:32) - edge case
                    activateProfile('IP-Architect', 'The Converter', {
                        I: 32, S: 32, P: 32, C: 32, A: 32, G: 32
                    });
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence === '0030') {
                    // Test profile: Gardener extreme (I:15 S:26 P:8 C:32 A:10 G:32) - reverse of 0025
                    activateProfile('CP-Gardener', 'The Maker', {
                        I: 15, S: 26, P: 8, C: 32, A: 10, G: 32
                    });
                    keySequence = ''; clearTimeout(keyTimer);
                } else if (keySequence.length >= 4) {
                    keySequence = '';
                    clearTimeout(keyTimer);
                }
            }
            
            // Keep 9 key as backup
            if (e.key === '9' && keySequence === '') {
                activateProfile('IS-Architect', 'The Philosopher');
            }
        });

        /**
         * Generate shareable URL with score parameters
         * @param {Object} scores - Score object with I, S, P, C, A, G properties
         * @returns {string} - Full URL with all 6 score parameters
         */
        function generateShareableURL(scores) {
            const baseURL = window.location.origin + window.location.pathname;
            const params = new URLSearchParams();

            // Add all 6 scores as URL parameters
            params.set('I', scores.I);
            params.set('S', scores.S);
            params.set('P', scores.P);
            params.set('C', scores.C);
            params.set('A', scores.A);
            params.set('G', scores.G);

            return `${baseURL}?${params.toString()}`;
        }

        /**
         * Parse URL parameters for scores or secret codes
         * @returns {Object|null} - Returns {type: 'secretCode', code: '0025'} or {type: 'scores', scores: {...}} or null
         */
        function parseURLScores() {
            const params = new URLSearchParams(window.location.search);

            // Check for secret code first (takes precedence)
            const secretCode = params.get('code');
            if (secretCode) {
                return { type: 'secretCode', code: secretCode };
            }

            // Check for score parameters
            const I = params.get('I');
            const S = params.get('S');
            const P = params.get('P');
            const C = params.get('C');
            const A = params.get('A');
            const G = params.get('G');

            // Validate all 6 scores are present
            if (!I || !S || !P || !C || !A || !G) {
                return null;
            }

            // Parse and validate each score
            const scores = {
                I: parseInt(I, 10),
                S: parseInt(S, 10),
                P: parseInt(P, 10),
                C: parseInt(C, 10),
                A: parseInt(A, 10),
                G: parseInt(G, 10)
            };

            // Validate all scores are in 8-32 range
            const allScoresValid = Object.values(scores).every(score =>
                !isNaN(score) && score >= 8 && score <= 32
            );

            if (!allScoresValid) {
                console.error('Invalid scores in URL - must be 8-32 range', scores);
                return null;
            }

            return { type: 'scores', scores };
        }

        /**
         * Get profile subtitle from archetype combination
         * @param {string} code - Profile code (e.g., "IP-Architect", "IS-Gardener")
         * @returns {string} - Profile subtitle (e.g., "The Converter", "The Philosopher")
         */
        function getProfileSubtitle(code) {
            // Extract archetype combination (first 2 letters before the hyphen)
            const archetypes = code.split('-')[0];

            // Map archetype combinations to subtitles
            const subtitleMap = {
                'IP': 'The Converter',
                'PI': 'The Converter',
                'IS': 'The Philosopher',
                'SI': 'The Philosopher',
                'IC': 'The Explorer',
                'CI': 'The Explorer',
                'PS': 'The Builder',
                'SP': 'The Builder',
                'PC': 'The Maker',
                'CP': 'The Maker',
                'SC': 'The Translator',
                'CS': 'The Translator'
            };

            return subtitleMap[archetypes] || 'Unknown Profile';
        }

        function setTendencyPills(code) {
            const [archetypes, tendency] = code.split('-');

            // Set primary tendency pill
            const tendencyPill = document.getElementById('tendencyPill');
            if (tendencyPill) {
                tendencyPill.textContent = tendency;
                tendencyPill.className = `tendency-pill ${tendency === "Architect" ? "architect" : "gardener"}-pill`;
            }

            // Set secondary tendency pill (opposite of primary)
            const secondaryTendencyPill = document.getElementById('secondaryTendencyPill');
            if (secondaryTendencyPill) {
                const secondaryTendency = tendency === 'Architect' ? 'Gardener' : 'Architect';
                secondaryTendencyPill.textContent = secondaryTendency;
                secondaryTendencyPill.className = `tendency-pill secondary-tendency ${secondaryTendency === "Architect" ? "architect" : "gardener"}-pill`;
            }

            // Set tendency description using ProfileRenderer
            if (window.profileRenderer && window.profileRenderer.isReady && window.profileRenderer.hasProfile(code)) {
                const profile = window.profileRenderer.profiles[code];
                if (profile && profile.tendencyDescription) {
                    const tendencyDesc = document.getElementById('tendencyDescription');
                    if (tendencyDesc) {
                        tendencyDesc.innerHTML = profile.tendencyDescription.content;
                        return;
                    }
                }
            }

            // ProfileRenderer should always be available - log error if not
            console.error(`❌ setTendencyPills: ProfileRenderer not ready or missing for ${code}`);
        }
        
        function setArchetypeDescription(code) {
            // Use ProfileRenderer for profile-specific descriptions
            if (window.profileRenderer && window.profileRenderer.isReady && window.profileRenderer.hasProfile(code)) {
                const profile = window.profileRenderer.profiles[code];
                if (profile && profile.archetypeDescription) {
                    const archetypeDesc = document.getElementById('archetypeDescription');
                    if (archetypeDesc) {
                        archetypeDesc.innerHTML = profile.archetypeDescription.content;
                        return;
                    }
                }
            }

            // ProfileRenderer should always be available - log error if not
            console.error(`❌ setArchetypeDescription: ProfileRenderer missing for ${code}`);
        }
        
        function setCollapsibleSections(code) {
            // ProfileRenderer handles visibility - it will show/hide sections based on data availability
            // Use ProfileRenderer for all profile content
            if (window.profileRenderer && window.profileRenderer.isReady && window.profileRenderer.hasProfile(code)) {
                const success = window.profileRenderer.renderProfile(code);
                if (success) {
                    console.log(`✅ setCollapsibleSections: Rendered ${code} using ProfileRenderer`);
                    return;
                }
            }

            // Fallback error if ProfileRenderer fails
            console.error(`❌ setCollapsibleSections: ProfileRenderer failed for ${code} - no fallback available`);
        }

        function activateProfile(code, name, customScores = null) {
            try {
                // Hide all screens
                document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

                // Show results screen
                const resultsScreen = document.getElementById('resultsScreen');
                if (resultsScreen) {
                    resultsScreen.classList.add('active');

                    // Set basic profile info
                    const profileCode = document.getElementById('profileCode');
                    if (profileCode) profileCode.textContent = code;

                    const profileSubtitle = document.getElementById('profileSubtitle');
                    if (profileSubtitle) profileSubtitle.textContent = name;

                    // Set chord diagram for all profiles
                    const chordDiagram = document.getElementById('chordDiagram');
                    if (chordDiagram) {
                        chordDiagram.src = `./Assets/Images/Clean_STTI_${code}_Thin.png`;
                        chordDiagram.alt = `${code} Sensemaking Pattern`;
                    }

                    // If custom scores provided, render with those scores
                    if (customScores) {
                        // Calculate archetype scores array for sorting pills
                        const archetypeScores = [
                            ['I', customScores.I],
                            ['S', customScores.S],
                            ['P', customScores.P],
                            ['C', customScores.C]
                        ];

                        // Set archetype pills sorted by score
                        setStaticArchetypePills(code, archetypeScores);

                        // Render radar charts with custom scores
                        renderRadarChart(customScores, code);
                        renderRadarChartArchetypesOnly(customScores);

                        // Render donut chart with custom A/G scores
                        renderArchitectGardenerDonut(customScores);

                        // Initialize tendency spectrum with custom A/G scores
                        initTendencySpectrum(customScores);

                        // Animate score bars with custom scores
                        animateScoreBars(customScores);
                    } else {
                        // Set static archetype pills for regular profiles (no scores)
                        setStaticArchetypePills(code);
                    }

                    // Set orientation for all profiles
                    setOrientation(code);

                    // Set tendency pills and descriptions for all profiles
                    setTendencyPills(code);

                    // Set archetype description for all profiles
                    setArchetypeDescription(code);

                    // Set collapsible sections content for all profiles
                    setCollapsibleSections(code);

                    // Load full content based on profile

                    console.log(`${code} activated successfully${customScores ? ' with custom scores' : ''}`);
                }
            } catch (err) {
                console.error('Error:', err);
                alert('Error: ' + err.message);
            }
        }
        
        function setStaticArchetypePills(code, archetypeScores = null) {
            let sortedArchetypes;

            if (archetypeScores) {
                // Sort by score (descending), then alphabetically for ties
                sortedArchetypes = archetypeScores.slice().sort((a, b) => {
                    if (b[1] !== a[1]) {
                        return b[1] - a[1]; // Higher score first
                    }
                    return a[0].localeCompare(b[0]); // Alphabetical tiebreaker
                });
            } else {
                // Fallback for secret codes: use profile code order
                const archetypes = code.split('-')[0];
                const primary = archetypes[0];
                const secondary = archetypes[1];
                const remaining = ['I', 'S', 'P', 'C'].filter(a => a !== primary && a !== secondary);
                sortedArchetypes = [
                    [primary, 0],
                    [secondary, 0],
                    ...remaining.map(a => [a, 0])
                ];
            }

            // Extract archetype letters in score order
            const [first, second, third, fourth] = sortedArchetypes.map(pair => pair[0]);

            // Set all 4 pills in correct score order
            const primaryPill = document.getElementById('primaryArchetypePill');
            if (primaryPill) {
                primaryPill.textContent = ARCHETYPE_NAMES[first];
                primaryPill.className = `archetype-pill ${ARCHETYPE_PILL_CLASSES[first]}`;
            }

            const secondaryPill = document.getElementById('secondaryArchetypePill');
            if (secondaryPill) {
                secondaryPill.textContent = ARCHETYPE_NAMES[second];
                secondaryPill.className = `archetype-pill ${ARCHETYPE_PILL_CLASSES[second]}`;
            }

            const thirdPill = document.getElementById('thirdArchetypePill');
            if (thirdPill) {
                thirdPill.textContent = ARCHETYPE_NAMES[third];
                thirdPill.className = `archetype-pill secondary-archetype ${ARCHETYPE_PILL_CLASSES[third]}`;
            }

            const fourthPill = document.getElementById('fourthArchetypePill');
            if (fourthPill) {
                fourthPill.textContent = ARCHETYPE_NAMES[fourth];
                fourthPill.className = `archetype-pill secondary-archetype ${ARCHETYPE_PILL_CLASSES[fourth]}`;
            }
        }
        
        function setOrientation(code) {
            // Extract archetypes from profile code
            const [archetypes, tendency] = code.split('-');
            const sortedArchetypes = archetypes.split('').sort().join('');

            // Determine orientation based on archetype combination
            let orientation = '';

            if (sortedArchetypes === 'IS') {
                orientation = 'Western';
            } else if (sortedArchetypes === 'CP') {
                orientation = 'Eastern';
            } else if (sortedArchetypes === 'PS') {
                orientation = 'Northern';
            } else if (sortedArchetypes === 'CI') {
                orientation = 'Southern';
            } else if (sortedArchetypes === 'CS') {
                orientation = 'Diagonal';
            } else if (sortedArchetypes === 'IP') {
                orientation = 'Diagonal';
            } else {
                orientation = 'Mixed';
            }

            // Set orientation pill
            const orientationPill = document.getElementById('orientationPill');
            if (orientationPill) orientationPill.textContent = orientation;

            // Use ProfileRenderer for orientation description
            if (window.profileRenderer && window.profileRenderer.isReady && window.profileRenderer.hasProfile(code)) {
                const profile = window.profileRenderer.profiles[code];
                if (profile && profile.orientationDescription) {
                    const westernerDesc = document.getElementById('westernerDescription');
                    if (westernerDesc) {
                        westernerDesc.innerHTML = profile.orientationDescription.content;
                        return;
                    }
                }
            }

            // ProfileRenderer should always be available - log error if not
            console.error(`❌ setOrientation: ProfileRenderer missing for ${code}`);
        }

        





        // Check for URL parameters (scores or secret codes) or email on page load
        (function() {
            const urlData = parseURLScores();

            if (urlData) {
                if (urlData.type === 'scores') {
                    // URL contains scores - reconstruct results and skip to results screen
                    console.log('URL scores detected:', urlData.scores);

                    // Wait for ProfileRenderer to be ready before showing results
                    const initFromURL = async () => {
                        try {
                            if (!window.profileRenderer) {
                                throw new Error('ProfileRenderer not initialized');
                            }

                            await window.profileRenderer.waitForProfiles();

                            // Calculate profile from URL scores
                            const profile = determineProfile(urlData.scores);

                            // Mark as already submitted to prevent Formspree submission
                            hasSubmittedToFormspree = true;

                            // Activate the profile directly
                            activateProfile(
                                profile.code,
                                getProfileSubtitle(profile.code),
                                urlData.scores
                            );

                            console.log('Profile reconstructed from URL:', profile.code);
                        } catch (error) {
                            console.error('Failed to load profile from URL:', error);
                            alert('Error loading profile. Please try again.');
                        }
                    };

                    initFromURL();
                    return; // Skip email initialization
                } else if (urlData.type === 'secretCode') {
                    // Handle secret code if needed (existing keyboard handler will take care of it)
                    console.log('Secret code detected in URL:', urlData.code);
                }
            }

            // Standard email initialization (only if no scores in URL)
            const urlParams = new URLSearchParams(window.location.search);
            const emailFromURL = urlParams.get('email');
            const emailFromStorage = localStorage.getItem('userEmail');

            const prefilledEmail = emailFromURL || emailFromStorage || '';
            // Don't prefill with demo/test values
            if (prefilledEmail && !prefilledEmail.toLowerCase().includes('demo') && !prefilledEmail.toLowerCase().includes('test')) {
                document.getElementById('emailInput').value = prefilledEmail;
                userEmail = prefilledEmail;
                // Enable start button if email is valid
                if (prefilledEmail.includes('@') && prefilledEmail.length > 5) {
                    document.getElementById('startBtn').disabled = false;
                }
            }
        })();

        // Email validation and start
        const emailInput = document.getElementById('emailInput');
        const startBtn = document.getElementById('startBtn');

        emailInput.addEventListener('input', function() {
            const email = this.value;
            const isValid = email.includes('@') && email.length > 5;
            startBtn.disabled = !isValid;
            // Save to localStorage for persistence
            if (email) {
                localStorage.setItem('userEmail', email);
            }
        });

        startBtn.addEventListener('click', function() {
            userEmail = emailInput.value;
            showScreen('assessmentScreen');
            loadQuestion();
        });

        function showScreen(screenId) {
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            document.getElementById(screenId).classList.add('active');
        }

        function updateNavButtons() {
            const backBtn = document.getElementById('backBtn');
            const forwardBtn = document.getElementById('forwardBtn');
            
            backBtn.disabled = currentQuestion === 0;
            forwardBtn.disabled = !answers[currentQuestion];
        }

        function loadQuestion() {
            // STTI questions (0-52)
            if (currentQuestion < questions.length) {
                const question = questions[currentQuestion];
                document.getElementById('questionText').textContent = question.text;
                document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS}`;

                const progress = ((currentQuestion + 1) / TOTAL_QUESTIONS) * 100;
                document.getElementById('progressBar').style.width = progress + '%';

                // Show assessment screen, hide others
                showScreen('assessmentScreen');

                highlightSelectedAnswer();
                updateNavButtons();
                return;
            }

            // After Q53, show demographic intro screen
            if (currentQuestion === questions.length) {
                showScreen('demographicIntroScreen');
                updateProgressBar();
                return;
            }

            // Demographic questions (54-58)
            const demoIndex = currentQuestion - questions.length - 1;
            if (demoIndex >= 0 && demoIndex < demographicQuestions.length) {
                showScreen('demographicQuestionScreen');
                loadDemographicQuestion(demoIndex);
                return;
            }

            // All questions complete - show results
            showResults();
        }

        function updateProgressBar() {
            // CRITICAL FIX: Calculate correct question number to display
            // - STTI questions (0-52): Display as 1-53 (currentQuestion + 1)
            // - Intro screen (53): Display as 53 (NOT 54 - intro is not a question)
            // - Demo questions (54-58): Display as 54-58 (currentQuestion itself, since already offset)
            let displayQuestion;
            if (currentQuestion < questions.length) {
                // STTI questions: 0-indexed, so add 1
                displayQuestion = currentQuestion + 1;
            } else if (currentQuestion === questions.length) {
                // Intro screen: keep at last STTI question number
                displayQuestion = questions.length;
            } else {
                // Demographic questions: currentQuestion is already the correct question number
                displayQuestion = currentQuestion;
            }

            const progress = (displayQuestion / TOTAL_QUESTIONS) * 100;
            const progressText = `Question ${displayQuestion} of ${TOTAL_QUESTIONS}`;

            // Update main assessment progress bar
            const mainProgressBar = document.getElementById('progressBar');
            const mainProgressText = document.getElementById('progressText');
            if (mainProgressBar) mainProgressBar.style.width = progress + '%';
            if (mainProgressText) mainProgressText.textContent = progressText;

            // Update demographic intro progress bar
            const demoIntroProgressBar = document.getElementById('demoIntroProgressBar');
            const demoIntroProgressText = document.getElementById('demoIntroProgressText');
            if (demoIntroProgressBar) demoIntroProgressBar.style.width = progress + '%';
            if (demoIntroProgressText) demoIntroProgressText.textContent = progressText;

            // Update demographic question progress bar
            const demoQuestionProgressBar = document.getElementById('demoQuestionProgressBar');
            const demoQuestionProgressText = document.getElementById('demoQuestionProgressText');
            if (demoQuestionProgressBar) demoQuestionProgressBar.style.width = progress + '%';
            if (demoQuestionProgressText) demoQuestionProgressText.textContent = progressText;
        }

        function highlightSelectedAnswer() {
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.style.opacity = '1';
                btn.style.transform = 'scale(1)';
            });
            
            if (answers[currentQuestion]) {
                const selectedBtn = document.querySelector(`[onclick="selectAnswer('${answers[currentQuestion].answer}')"]`);
                if (selectedBtn) {
                    selectedBtn.style.opacity = '0.8';
                    selectedBtn.style.transform = 'scale(0.95)';
                }
            }
        }

        function selectAnswer(response) {
            // Bounds check to prevent accessing undefined question
            if (currentQuestion >= questions.length) {
                console.error('selectAnswer called with currentQuestion out of bounds:', currentQuestion);
                return;
            }
            
            answers[currentQuestion] = {
                questionId: questions[currentQuestion].id,
                answer: response,
                archetype: questions[currentQuestion].archetype
            };

            // Visual feedback
            document.querySelectorAll('.answer-btn').forEach(btn => {
                btn.style.transform = 'scale(1)';
            });
            
            const selectedBtn = event.target.closest('.answer-btn');
            if (selectedBtn) {
                selectedBtn.style.transform = 'scale(0.95)';
            }

            updateNavButtons();

            // Auto-advance after a short delay
            setTimeout(() => {
                currentQuestion++;
                loadQuestion();
            }, 400);
        }

        function goBack() {
            if (currentQuestion > 0) {
                currentQuestion--;
                loadQuestion();
            }
        }

        function goForward() {
            if (currentQuestion < questions.length - 1 && answers[currentQuestion]) {
                currentQuestion++;
                loadQuestion();
            } else if (currentQuestion === questions.length - 1 && answers[currentQuestion]) {
                showResults();
            }
        }

        function calculateScores() {
            const scores = { I: 0, S: 0, P: 0, C: 0, A: 0, G: 0 };
            
            Object.values(answers).forEach(answer => {
                if (answer.archetype === 'RH') return; // Skip red herrings
                
                const archetype = answer.archetype.substring(0, 1);
                const polarity = answer.archetype.substring(1);
                
                let score = 0;
                switch (answer.answer) {
                    case 'SD': score = polarity === '+' ? 1 : 4; break;
                    case 'D': score = polarity === '+' ? 2 : 3; break;
                    case 'A': score = polarity === '+' ? 3 : 2; break;
                    case 'SA': score = polarity === '+' ? 4 : 1; break;
                }
                
                scores[archetype] += score;
            });
            
            return scores;
        }

        function determineProfile(scores) {
            // Get all 4 archetypes sorted by score (highest to lowest)
            const archetypeScores = [
                ['I', scores.I], ['S', scores.S], ['P', scores.P], ['C', scores.C]
            ].sort((a, b) => b[1] - a[1]);
            
            // Determine tendency
            const tendency = scores.A > scores.G ? 'Architect' : 'Gardener';
            
            const dominantArchetypes = [archetypeScores[0][0], archetypeScores[1][0]];
            const code = dominantArchetypes.join('') + '-' + tendency;
            
            return { code, dominantArchetypes, tendency, scores, archetypeScores };
        }

        /**
         * Animate score visualization bars with absolute scaling
         * Bars scale from 0 to theoretical maximum (32 points)
         * Each archetype/tendency has 8 questions × 4 points max = 32
         */
        function animateScoreBars(scores) {
            // Score range: 8 questions × 1-4 points = 8 to 32
            const THEORETICAL_MIN = 8;
            const THEORETICAL_MAX = 32;

            // Animate each archetype bar (scaled from min to max)
            animateBar('score-inner-guide', scores.I, THEORETICAL_MIN, THEORETICAL_MAX);
            animateBar('score-synthesizer', scores.S, THEORETICAL_MIN, THEORETICAL_MAX);
            animateBar('score-creative', scores.C, THEORETICAL_MIN, THEORETICAL_MAX);
            animateBar('score-producer', scores.P, THEORETICAL_MIN, THEORETICAL_MAX);

            // Animate tendency bars (scaled from min to max)
            animateBar('score-architect', scores.A, THEORETICAL_MIN, THEORETICAL_MAX);
            animateBar('score-gardener', scores.G, THEORETICAL_MIN, THEORETICAL_MAX);

            // Update raw scores display
            const rawScoresText = document.getElementById('raw-scores-text');
            if (rawScoresText) {
                rawScoresText.textContent = `I: ${scores.I}, S: ${scores.S}, C: ${scores.C}, P: ${scores.P} | A: ${scores.A}, G: ${scores.G}`;
            }
        }

        function animateBar(scoreId, score, minScore, maxScore) {
            const scoreElement = document.getElementById(scoreId);
            if (!scoreElement) return;

            // Update the numerical value
            scoreElement.textContent = score;

            // Find the corresponding bar
            const wrapper = scoreElement.closest('.score-bar-wrapper');
            const bar = wrapper.querySelector('.score-bar');

            // Calculate percentage width scaled from min to max (8-32 range)
            const percentage = ((score - minScore) / (maxScore - minScore)) * 100;

            // Animate the bar width after a short delay
            setTimeout(() => {
                bar.style.width = `${percentage}%`;
            }, 100);
        }

        // ============================================================================
        // RADAR CHART REFACTORED CODE
        // ============================================================================

        // Configuration
        const RADAR_CHART_CONFIG = {
            CENTER_X: 220,    // Updated for 440x440 viewBox (was 260 for 520x520)
            CENTER_Y: 220,    // Updated for 440x440 viewBox (was 260 for 520x520)
            MAX_RADIUS: 160,  // Increased from 135 to better fill the smaller viewBox
            GRID_LEVELS: 5,
            LABEL_OFFSET: 50,
            ANIMATION_DELAY: 300,
            DOT_ANIMATION_STAGGER: 100,
            // Fixed absolute scale: Circle 1 = 8, Circle 2 = 18, Circle 3 = 23, Circle 4 = 28, Circle 5 = 32
            // Using 7 as minimum so score 8 appears ON first circle (not at center)
            SCALE_MIN_VALUE: 7,
            SCALE_MAX_VALUE: 32
        };

        // SVG Helper Functions
        function createSVGElement(type, attributes = {}, styles = {}) {
            const element = document.createElementNS('http://www.w3.org/2000/svg', type);
            Object.entries(attributes).forEach(([key, value]) => {
                element.setAttribute(key, value);
            });
            Object.entries(styles).forEach(([key, value]) => {
                element.style[key] = value;
            });
            return element;
        }

        function createSVGGroup(className) {
            return createSVGElement('g', { class: className });
        }

        function createLine(x1, y1, x2, y2, className = '') {
            const attrs = { x1, y1, x2, y2 };
            if (className) attrs.class = className;
            return createSVGElement('line', attrs);
        }

        function createText(x, y, content, attributes = {}) {
            const text = createSVGElement('text', { x, y, ...attributes });
            text.textContent = content;
            return text;
        }

        // Grid Rendering Functions
        function drawConcentricGrid(svg, centerX, centerY, maxRadius, levels = 5) {
            const gridGroup = createSVGGroup('radar-grid');
            for (let i = 1; i <= levels; i++) {
                const radius = (i / levels) * maxRadius;
                const circle = createSVGElement('circle', { cx: centerX, cy: centerY, r: radius });
                gridGroup.appendChild(circle);
            }
            svg.appendChild(gridGroup);
        }

        function drawAxisSpokes(svg, axes, centerX, centerY, maxRadius) {
            const axesGroup = createSVGGroup('radar-axes');
            axes.forEach(axis => {
                const angleRad = (axis.angle * Math.PI) / 180;
                const x2 = centerX + maxRadius * Math.cos(angleRad);
                const y2 = centerY + maxRadius * Math.sin(angleRad);
                axesGroup.appendChild(createLine(centerX, centerY, x2, y2));
            });
            svg.appendChild(axesGroup);
        }

        function drawCartesianGrid(svg, centerX, centerY, maxRadius) {
            const cartesianGroup = createSVGGroup('cartesian-grid');

            cartesianGroup.appendChild(createSVGElement('line', {
                x1: centerX - maxRadius, y1: centerY,
                x2: centerX + maxRadius, y2: centerY,
                stroke: '#B0B0B0', 'stroke-width': '2'
            }));

            cartesianGroup.appendChild(createSVGElement('line', {
                x1: centerX, y1: centerY - maxRadius,
                x2: centerX, y2: centerY + maxRadius,
                stroke: '#B0B0B0', 'stroke-width': '2'
            }));

            svg.appendChild(cartesianGroup);

            const labelsGroup = createSVGGroup('axis-labels');
            const labelAttrs = { fill: '#6B7280', 'font-size': '13', 'font-style': 'italic' };

            // Helper function to add text with background
            const addLabelWithBackground = (x, y, text, textAnchor, bgWidth = 80, bgHeight = 20) => {
                const bg = createSVGElement('rect', {
                    x: textAnchor === 'middle' ? x - bgWidth/2 : (textAnchor === 'start' ? x - 2 : x - bgWidth + 2),
                    y: y - bgHeight/2 - 3,
                    width: bgWidth,
                    height: bgHeight,
                    fill: 'rgba(255, 255, 255, 0.85)',
                    rx: '4'
                });
                labelsGroup.appendChild(bg);
                labelsGroup.appendChild(createText(x, y, text, { 'text-anchor': textAnchor, ...labelAttrs }));
            };

            addLabelWithBackground(centerX, centerY - maxRadius - 8, 'Top-down', 'middle', 75, 20);
            addLabelWithBackground(centerX, centerY + maxRadius + 18, 'Bottom-up', 'middle', 80, 20);
            addLabelWithBackground(centerX - maxRadius - 45, centerY + 5, 'Reflection', 'start', 75, 20);
            addLabelWithBackground(centerX + maxRadius + 45, centerY + 5, 'Expression', 'end', 80, 20);

            svg.appendChild(labelsGroup);
        }

        function drawQuadrantGradients(svg, centerX, centerY, maxRadius) {
            // Create defs for gradients
            let defs = svg.querySelector('defs');
            if (!defs) {
                defs = createSVGElement('defs');
                svg.insertBefore(defs, svg.firstChild);
            }

            // Define quadrant gradients (using brand colors)
            const gradients = [
                { id: 'synthesizerGradient', color1: '#5dbcd2', color2: 'rgba(93, 188, 210, 0.25)' },   // Teal/Cyan
                { id: 'producerGradient', color1: '#d669bc', color2: 'rgba(214, 105, 188, 0.25)' },     // Pink
                { id: 'creativeGradient', color1: '#b9adff', color2: 'rgba(185, 173, 255, 0.25)' },    // Purple
                { id: 'innerGuideGradient', color1: '#fcf601', color2: 'rgba(252, 246, 1, 0.25)' }     // Yellow
            ];

            gradients.forEach(({ id, color1, color2 }) => {
                const gradient = createSVGElement('radialGradient', { id });
                const stop1 = createSVGElement('stop', { offset: '0%', 'stop-color': color2 });
                const stop2 = createSVGElement('stop', { offset: '100%', 'stop-color': color1 });
                gradient.appendChild(stop1);
                gradient.appendChild(stop2);
                defs.appendChild(gradient);
            });

            // Create quadrant paths (curved segments)
            const quadrantsGroup = createSVGGroup('quadrant-gradients');

            // Helper to create quadrant path
            const createQuadrantPath = (startAngle, endAngle, gradientId) => {
                const startRad = (startAngle * Math.PI) / 180;
                const endRad = (endAngle * Math.PI) / 180;

                const x1 = centerX + maxRadius * Math.cos(startRad);
                const y1 = centerY + maxRadius * Math.sin(startRad);
                const x2 = centerX + maxRadius * Math.cos(endRad);
                const y2 = centerY + maxRadius * Math.sin(endRad);

                const pathData = `M ${centerX} ${centerY} L ${x1} ${y1} A ${maxRadius} ${maxRadius} 0 0 1 ${x2} ${y2} Z`;

                return createSVGElement('path', {
                    d: pathData,
                    fill: `url(#${gradientId})`,
                    opacity: '0.6'
                });
            };

            // Add quadrant paths: Synthesizer (upper-left), Producer (upper-right), Creative (lower-right), Inner Guide (lower-left)
            quadrantsGroup.appendChild(createQuadrantPath(-180, -90, 'synthesizerGradient'));  // Upper-left
            quadrantsGroup.appendChild(createQuadrantPath(-90, 0, 'producerGradient'));        // Upper-right
            quadrantsGroup.appendChild(createQuadrantPath(0, 90, 'creativeGradient'));         // Lower-right
            quadrantsGroup.appendChild(createQuadrantPath(90, 180, 'innerGuideGradient'));     // Lower-left

            svg.appendChild(quadrantsGroup);
        }

        function drawYAxisScoreLabels(svg, centerX, centerY, maxRadius) {
            // Fixed scale values for each of the 5 concentric circles
            const scaleValues = [8, 18, 23, 28, 32];
            const labelsGroup = createSVGGroup('y-axis-score-labels');

            scaleValues.forEach((value, index) => {
                // Calculate radius for this circle (1-based index)
                const circleRadius = ((index + 1) / RADAR_CHART_CONFIG.GRID_LEVELS) * maxRadius;

                // Position label to the right of the vertical axis
                const labelX = centerX + 10;
                const labelY = centerY - circleRadius + 4; // Offset for vertical centering

                const label = createText(labelX, labelY, value.toString(), {
                    'text-anchor': 'start',
                    'fill': '#9CA3AF',  // Medium gray - better readability
                    'font-size': '12',
                    'font-weight': '600'
                });

                labelsGroup.appendChild(label);
            });

            svg.appendChild(labelsGroup);
        }

        /**
         * Create SVG arc path for donut chart (stroked arc, no fill)
         */
        function createDonutArc(cx, cy, radius, startAngle, endAngle, strokeWidth, color) {
            // Convert angles to radians (subtract 90 to start from left instead of top)
            const startRad = (startAngle - 90) * Math.PI / 180;
            const endRad = (endAngle - 90) * Math.PI / 180;

            // Calculate arc points
            const x1 = cx + radius * Math.cos(startRad);
            const y1 = cy + radius * Math.sin(startRad);
            const x2 = cx + radius * Math.cos(endRad);
            const y2 = cy + radius * Math.sin(endRad);

            // Large arc flag
            const largeArc = (endAngle - startAngle) > 180 ? 1 : 0;

            // Create path
            const pathData = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`;

            return createSVGElement('path', {
                d: pathData,
                fill: 'none',
                stroke: color,
                'stroke-width': strokeWidth,
                'stroke-linecap': 'round'
            });
        }

        /**
         * Create filled donut segment (ring segment with inner and outer arcs)
         * @param {number} cx - Center X coordinate
         * @param {number} cy - Center Y coordinate
         * @param {number} outerRadius - Outer radius of donut
         * @param {number} innerRadius - Inner radius of donut (hole size)
         * @param {number} startAngle - Start angle in degrees (0 = top, 180 = left)
         * @param {number} endAngle - End angle in degrees
         * @param {string} fillColor - Fill color for segment
         * @returns {SVGElement} Path element for donut segment
         */
        function createDonutSegment(cx, cy, outerRadius, innerRadius, startAngle, endAngle, fillColor, strokeColor = '#444444', strokeWidth = 2.5) {
            // Normalize angles to 0-360 range
            const normalizeAngle = (angle) => ((angle % 360) + 360) % 360;
            const start = normalizeAngle(startAngle);
            const end = normalizeAngle(endAngle);

            // Calculate angle span
            let angleSpan = end - start;
            if (angleSpan < 0) angleSpan += 360;

            // Convert to radians (0° = right/3 o'clock, 90° = bottom/6 o'clock, 180° = left/9 o'clock, 270° = top/12 o'clock)
            const startRad = (start * Math.PI) / 180;
            const endRad = (end * Math.PI) / 180;

            // Calculate outer arc points
            const outerX1 = cx + outerRadius * Math.cos(startRad);
            const outerY1 = cy + outerRadius * Math.sin(startRad);
            const outerX2 = cx + outerRadius * Math.cos(endRad);
            const outerY2 = cy + outerRadius * Math.sin(endRad);

            // Calculate inner arc points (reversed direction)
            const innerX1 = cx + innerRadius * Math.cos(endRad);
            const innerY1 = cy + innerRadius * Math.sin(endRad);
            const innerX2 = cx + innerRadius * Math.cos(startRad);
            const innerY2 = cy + innerRadius * Math.sin(startRad);

            // Large arc flag (1 if arc > 180°)
            const largeArc = angleSpan > 180 ? 1 : 0;

            // Build path: outer arc (clockwise) + line to inner + inner arc (counter-clockwise) + close
            const pathData = `
                M ${outerX1} ${outerY1}
                A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${outerX2} ${outerY2}
                L ${innerX1} ${innerY1}
                A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${innerX2} ${innerY2}
                Z
            `.replace(/\s+/g, ' ').trim();

            return createSVGElement('path', {
                d: pathData,
                fill: fillColor,
                stroke: strokeColor,
                'stroke-width': strokeWidth
            });
        }

        /**
         * Render Architect vs Gardener donut chart
         * @param {Object} scores - Score object with A and G properties
         */
        function renderArchitectGardenerDonut(scores) {
            console.log('🍩 DONUT: Starting render with scores:', scores);
            const svg = document.getElementById('architectGardenerDonut');
            if (!svg) {
                console.error('❌ DONUT: SVG element #architectGardenerDonut NOT FOUND!');
                return;
            }
            console.log('✓ DONUT: SVG element found');

            // Validation
            if (!scores || typeof scores.A === 'undefined' || typeof scores.G === 'undefined') {
                console.error('❌ DONUT: Missing A or G scores', { scores });
                return;
            }
            console.log('✓ DONUT: A=' + scores.A + ', G=' + scores.G);

            const centerX = 150;
            const centerY = 150;
            const outerRadius = 140;  // Much bigger - almost fills the 300x300 viewBox
            const innerRadius = 90;   // Proportionally larger inner hole

            // Calculate percentages
            const total = scores.A + scores.G;
            const architectPercent = (scores.A / total) * 100;
            const gardenerPercent = (scores.G / total) * 100;

            // Clear SVG
            svg.innerHTML = '';

            // Add gradient definitions
            const defs = createSVGElement('defs');

            // Architect radial gradient (cool blue-teal)
            const architectGradient = createSVGElement('radialGradient', {
                id: 'architectGradient',
                cx: '50%',
                cy: '50%',
                r: '50%'
            });
            architectGradient.innerHTML = `
                <stop offset="0%" style="stop-color:#5dbcd2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#4a9fb0;stop-opacity:1" />
            `;
            defs.appendChild(architectGradient);

            // Gardener radial gradient (warm yellow-green)
            const gardenerGradient = createSVGElement('radialGradient', {
                id: 'gardenerGradient',
                cx: '50%',
                cy: '50%',
                r: '50%'
            });
            gardenerGradient.innerHTML = `
                <stop offset="0%" style="stop-color:#67c073;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#52a65e;stop-opacity:1" />
            `;
            defs.appendChild(gardenerGradient);

            svg.appendChild(defs);

            // DYNAMIC DONUT: Proportional arcs based on A/G scores
            // Start at left (180°), Architect sweeps upward, Gardener sweeps downward
            const startAngle = 180;  // Left side (9 o'clock position)
            const architectAngle = (architectPercent / 100) * 360;  // Architect's portion in degrees
            const gardenerAngle = (gardenerPercent / 100) * 360;    // Gardener's portion in degrees

            // Calculate arc endpoints
            const architectArcEnd = startAngle + architectAngle;  // Clockwise through bottom
            const gardenerArcEnd = startAngle - gardenerAngle;    // Counterclockwise through top

            // Create Architect arc (sweeps DOWNWARD/clockwise through bottom)
            const architectPath = createDonutSegment(
                centerX, centerY,
                outerRadius, innerRadius,
                startAngle, architectArcEnd,  // NORMAL: start → end (clockwise)
                'url(#architectGradient)',
                '#444444',
                2.5
            );
            svg.appendChild(architectPath);

            // Create Gardener arc (sweeps UPWARD/counterclockwise through top)
            // REVERSED parameters: end → start for counterclockwise direction
            const gardenerPath = createDonutSegment(
                centerX, centerY,
                outerRadius, innerRadius,
                gardenerArcEnd, startAngle,  // REVERSED: end → start (counterclockwise)
                'url(#gardenerGradient)',
                '#444444',
                2.5
            );
            svg.appendChild(gardenerPath);

            // White center circle for donut hole
            const centerHole = createSVGElement('circle', {
                cx: centerX,
                cy: centerY,
                r: innerRadius,
                fill: 'white',
                stroke: '#444444',
                'stroke-width': '2.5'
            });
            svg.appendChild(centerHole);

            // Add percentage labels
            const architectLabel = createText(
                centerX, centerY - 40,
                `${architectPercent.toFixed(1)}%`,
                {
                    'text-anchor': 'middle',
                    'font-size': '18',
                    'font-weight': '600',
                    'fill': '#5dbcd2'
                }
            );
            svg.appendChild(architectLabel);

            const gardenerLabel = createText(
                centerX, centerY + 50,
                `${gardenerPercent.toFixed(1)}%`,
                {
                    'text-anchor': 'middle',
                    'font-size': '18',
                    'font-weight': '600',
                    'fill': '#67c073'
                }
            );
            svg.appendChild(gardenerLabel);

            console.log('✓ DONUT: Simple half-circle donut rendered - A=' + architectPercent.toFixed(1) + '%, G=' + gardenerPercent.toFixed(1) + '%');
        }

        // ============================================
        // TENDENCY SPECTRUM VISUALIZATION
        // ============================================

        /**
         * Initialize the vertical tendency spectrum slider
         * @param {Object} scores - The profile scores object containing A and G values
         */
        function initTendencySpectrum(scores) {
            // Calculate architect percentage (same calculation as donut chart)
            const total = scores.A + scores.G;
            const architectPercent = (scores.A / total) * 100;

            console.log('Initializing tendency spectrum with A=' + architectPercent.toFixed(1) + '%');

            // Update the spectrum indicator position
            updateSpectrumIndicator(architectPercent);

            // Auto-expand the appropriate section
            autoExpandTendencySection(architectPercent);

            // Initialize expand/collapse listeners (defensive check)
            if (!window.tendencySpectrumInitialized) {
                initSpectrumCardListeners();
                window.tendencySpectrumInitialized = true;
            }
        }

        /**
         * Update the spectrum indicator position and color based on architect percentage
         * @param {number} architectPercent - Percentage value 0-100 where 100 is full architect
         */
        function updateSpectrumIndicator(architectPercent) {
            const indicator = document.getElementById('spectrumIndicator');
            const scoreLabel = document.getElementById('spectrumIndicatorScore');

            if (!indicator || !scoreLabel) {
                console.error('Spectrum indicator elements not found');
                return;
            }

            // Position: 0% architect = bottom (100% of bar height), 100% architect = top (0% of bar height)
            // We need to invert because CSS top:0 is at the top
            const positionPercent = 100 - architectPercent;

            // Calculate pixel position accounting for indicator size
            // Bar height is 500px on desktop, indicator is 50px
            // Position from top = (positionPercent / 100) * (barHeight - indicatorHeight)
            const barHeight = 500; // matches CSS
            const indicatorSize = 50; // matches CSS
            const topPosition = (positionPercent / 100) * (barHeight - indicatorSize);

            // Apply position
            indicator.style.top = topPosition + 'px';

            // Update indicator border color based on position (gradient interpolation)
            const color = getGradientColorAtPercent(architectPercent);
            indicator.style.borderColor = color;

            console.log('Spectrum indicator positioned at ' + architectPercent.toFixed(1) + '% (top: ' + topPosition + 'px)');
        }

        /**
         * Auto-expand the appropriate tendency section based on score
         * @param {number} architectPercent - Percentage value 0-100
         */
        function autoExpandTendencySection(architectPercent) {
            let cardToExpand = null;

            if (architectPercent > 60) {
                // Strong architect tendency - expand healthy architecting
                cardToExpand = 'healthyArchitecting';
            } else if (architectPercent < 40) {
                // Strong gardener tendency - expand healthy gardening
                cardToExpand = 'healthyGardening';
            }
            // If 40-60%, leave all collapsed (balanced)

            if (cardToExpand) {
                // Use requestAnimationFrame to ensure DOM is ready
                requestAnimationFrame(() => {
                    const content = document.getElementById('content-' + cardToExpand);
                    const arrow = document.getElementById('arrow-' + cardToExpand);

                    if (content && arrow) {
                        content.classList.remove('collapsed');
                        content.classList.add('expanded');
                        arrow.classList.add('expanded');
                        console.log('Auto-expanded tendency card: ' + cardToExpand);
                    }
                });
            }
        }

        /**
         * Get interpolated gradient color at a specific percentage
         * @param {number} percent - Value 0-100 where 0=green (gardener), 100=cyan (architect)
         * @returns {string} - RGB color string
         */
        function getGradientColorAtPercent(percent) {
            // Gradient colors from CSS: cyan (#5dbcd2) at top to green (#67c073) at bottom
            const cyan = { r: 93, g: 188, b: 210 };   // Top = 100% architect
            const green = { r: 103, g: 192, b: 115 }; // Bottom = 0% architect

            // Interpolate
            const t = percent / 100;
            const r = Math.round(green.r + (cyan.r - green.r) * t);
            const g = Math.round(green.g + (cyan.g - green.g) * t);
            const b = Math.round(green.b + (cyan.b - green.b) * t);

            return 'rgb(' + r + ', ' + g + ', ' + b + ')';
        }

        /**
         * Initialize event listeners for spectrum card expand/collapse
         */
        function initSpectrumCardListeners() {
            // This is handled by inline onclick in HTML, but we define the function here
            window.toggleSpectrumCard = function(cardId) {
                const content = document.getElementById('content-' + cardId);
                const arrow = document.getElementById('arrow-' + cardId);

                if (!content || !arrow) {
                    console.error('Spectrum card elements not found for: ' + cardId);
                    return;
                }

                const isCollapsed = content.classList.contains('collapsed');

                if (isCollapsed) {
                    // Expand
                    content.classList.remove('collapsed');
                    content.classList.add('expanded');
                    arrow.classList.add('expanded');
                } else {
                    // Collapse
                    content.classList.remove('expanded');
                    content.classList.add('collapsed');
                    arrow.classList.remove('expanded');
                }
            };
        }

        function drawAxisLabels(svg, axes, centerX, centerY, maxRadius, labelOffset = 50) {
            const labelsGroup = createSVGGroup('radar-labels');
            axes.forEach(axis => {
                const angleRad = (axis.angle * Math.PI) / 180;
                const labelRadius = maxRadius + labelOffset;
                const x = centerX + labelRadius * Math.cos(angleRad);
                const y = centerY + labelRadius * Math.sin(angleRad);
                labelsGroup.appendChild(createText(x, y, axis.label));
            });
            svg.appendChild(labelsGroup);
        }

        // Data Rendering Functions
        function calculatePolygonPoints(axes, scores, centerX, centerY, maxRadius) {
            // Define the fixed scale: score values that correspond to each circle
            const scalePoints = [
                { score: 8, radius: (1/5) * maxRadius },   // Circle 1: 36px
                { score: 18, radius: (2/5) * maxRadius },  // Circle 2: 72px
                { score: 23, radius: (3/5) * maxRadius },  // Circle 3: 108px
                { score: 28, radius: (4/5) * maxRadius },  // Circle 4: 144px
                { score: 32, radius: (5/5) * maxRadius }   // Circle 5: 180px
            ];

            return axes.map(axis => {
                const score = scores[axis.key];
                let radius;

                // Find which segment the score falls into
                if (score <= scalePoints[0].score) {
                    // Below minimum: map to first circle
                    radius = scalePoints[0].radius;
                } else if (score >= scalePoints[scalePoints.length - 1].score) {
                    // Above maximum: map to last circle
                    radius = scalePoints[scalePoints.length - 1].radius;
                } else {
                    // Interpolate between adjacent scale points
                    for (let i = 0; i < scalePoints.length - 1; i++) {
                        const lower = scalePoints[i];
                        const upper = scalePoints[i + 1];

                        if (score >= lower.score && score <= upper.score) {
                            // Linear interpolation between two points
                            const t = (score - lower.score) / (upper.score - lower.score);
                            radius = lower.radius + t * (upper.radius - lower.radius);
                            break;
                        }
                    }
                }

                const angleRad = (axis.angle * Math.PI) / 180;
                const x = centerX + radius * Math.cos(angleRad);
                const y = centerY + radius * Math.sin(angleRad);
                return { x, y, score, label: axis.label };
            });
        }

        function drawPolygonWithDots(svg, polygonPoints, axes) {
            const dataGroup = createSVGGroup('radar-data');

            const polygon = createSVGElement('polygon', {
                points: polygonPoints.map(p => `${p.x},${p.y}`).join(' '),
                class: 'score-polygon'
            });
            dataGroup.appendChild(polygon);

            polygonPoints.forEach((point, index) => {
                const circle = createSVGElement('circle', {
                    cx: point.x, cy: point.y,
                    class: 'score-dot',
                    'data-score': point.score,
                    'data-label': point.label
                }, {
                    fill: getArchetypeColor(axes[index].key)
                });
                dataGroup.appendChild(circle);
            });

            svg.appendChild(dataGroup);
            return polygon;
        }

        function animateChart(svg, polygon, initialDelay = 300) {
            setTimeout(() => {
                polygon.style.opacity = '0.6';
                polygon.style.transform = 'scale(1)';

                const dots = svg.querySelectorAll('.score-dot');
                dots.forEach((dot, index) => {
                    setTimeout(() => {
                        dot.style.opacity = '1';
                        dot.style.transform = 'scale(1)';
                    }, index * RADAR_CHART_CONFIG.DOT_ANIMATION_STAGGER);
                });
            }, initialDelay);
        }

        /**
         * Unified radar chart renderer
         * @param {Object} scores - Score object with I, S, P, C, A, G properties
         * @param {Object|String} optionsOrProfileCode - Either options object or legacy profileCode string
         */
        function renderRadarChart(scores, optionsOrProfileCode = {}) {
            // Support legacy call: renderRadarChart(scores, profileCode)
            const options = typeof optionsOrProfileCode === 'string'
                ? { profileCode: optionsOrProfileCode }
                : optionsOrProfileCode;

            const {
                svgId = 'radarChart',
                profileCode = null,
                includeCartesian = false,
                animationDelay = RADAR_CHART_CONFIG.ANIMATION_DELAY,
                axisConfig = null
            } = options;

            const svg = document.getElementById(svgId);
            if (!svg) return;

            const { CENTER_X, CENTER_Y, MAX_RADIUS, LABEL_OFFSET } = RADAR_CHART_CONFIG;

            const axisConfigs = {
                '6-axis': [
                    { key: 'A', label: 'Architect', angle: -90 },
                    { key: 'P', label: 'Producer', angle: -30 },
                    { key: 'C', label: 'Creative', angle: 30 },
                    { key: 'G', label: 'Gardener', angle: 90 },
                    { key: 'I', label: 'Inner Guide', angle: 150 },
                    { key: 'S', label: 'Synthesizer', angle: 210 }
                ],
                '4-axis': [
                    { key: 'S', label: 'Synthesizer', angle: -135 },
                    { key: 'P', label: 'Producer', angle: -45 },
                    { key: 'C', label: 'Creative', angle: 45 },
                    { key: 'I', label: 'Inner Guide', angle: 135 }
                ]
            };

            const axes = axisConfig || (includeCartesian ? axisConfigs['4-axis'] : axisConfigs['6-axis']);

            if (profileCode) {
                const profileCodeElement = document.getElementById('radarProfileCode');
                if (profileCodeElement) {
                    const tendency = profileCode.split('-')[1];
                    const tendencyNames = { 'Architect': 'The Architect', 'Gardener': 'The Gardener' };
                    profileCodeElement.textContent = `${profileCode} - ${tendencyNames[tendency] || tendency}`;
                }
            }

            svg.innerHTML = '';

            drawConcentricGrid(svg, CENTER_X, CENTER_Y, MAX_RADIUS);
            if (includeCartesian) {
                drawQuadrantGradients(svg, CENTER_X, CENTER_Y, MAX_RADIUS);
                drawCartesianGrid(svg, CENTER_X, CENTER_Y, MAX_RADIUS);
                drawYAxisScoreLabels(svg, CENTER_X, CENTER_Y, MAX_RADIUS);
            }
            drawAxisSpokes(svg, axes, CENTER_X, CENTER_Y, MAX_RADIUS);

            const polygonPoints = calculatePolygonPoints(axes, scores, CENTER_X, CENTER_Y, MAX_RADIUS);
            const polygon = drawPolygonWithDots(svg, polygonPoints, axes);

            drawAxisLabels(svg, axes, CENTER_X, CENTER_Y, MAX_RADIUS, LABEL_OFFSET);
            animateChart(svg, polygon, animationDelay);
        }

        /**
         * Render archetype-only radar chart (4 archetypes, no tendencies)
         * @param {Object} scores - Score object with I, S, P, C properties
         */
        function renderRadarChartArchetypesOnly(scores) {
            renderRadarChart(scores, {
                svgId: 'radarChartArchetypes',
                includeCartesian: true,
                animationDelay: 600
            });
        }

        function getArchetypeColor(key) {
            const colors = {
                'I': '#fcf601',  // Inner Guide - yellow (matches innerGuideGradient)
                'S': '#5dbcd2',  // Synthesizer - cyan (matches synthesizerGradient)
                'P': '#d669bc',  // Producer - pink (matches producerGradient)
                'C': '#b9adff',  // Creative - purple (matches creativeGradient)
                'A': '#5dbcd2',  // Architect - cyan
                'G': '#27ae60'   // Gardener - green
            };
            return colors[key] || '#b9adff';
        }

        async function submitToFormspree(profile) {
            try {
                // Format demographic data
                const demographicData = {
                    q54_linking_experience: demographicAnswers[54]?.value || 'Not answered',
                    q55_age_range: demographicAnswers[55]?.value || 'Not answered',
                    q56_neurodivergence: demographicAnswers[56]?.values || [],
                    q56_self_describe: demographicAnswers[56]?.textInputs?.q56_self_describe || '',
                    q57_gender: demographicAnswers[57]?.value || 'Not answered',
                    q57_self_describe: demographicAnswers[57]?.textInput || '',
                    q58_ai_tools: demographicAnswers[58]?.value || 'Not answered'
                };

                const response = await fetch('https://formspree.io/f/mvgwrngq', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: userEmail,
                        profile_code: profile.code,
                        dominant_archetypes: profile.dominantArchetypes.join(' & '),
                        tendency: profile.tendency,
                        scores: profile.scores,
                        timestamp: new Date().toISOString(),
                        answers: Object.values(answers).map(answer => ({
                            question_id: answer.questionId,
                            question_text: questions.find(q => q.id === answer.questionId)?.text,
                            answer: answer.answer,
                            archetype: answer.archetype
                        })),
                        demographic_data: demographicData
                    })
                });

                if (response.ok) {
                    console.log('Data submitted to Formspree successfully');
                } else {
                    console.error('Failed to submit to Formspree');
                }
            } catch (error) {
                console.error('Error submitting to Formspree:', error);
            }
        }

        async function showResults() {
            const scores = calculateScores();
            const profile = determineProfile(scores);

            // Store profile globally for share functions
            currentProfile = profile;

            // Submit to Formspree (only once)
            if (!hasSubmittedToFormspree) {
                submitToFormspree(profile);
                hasSubmittedToFormspree = true;
            } else {
                console.log('Results already submitted to Formspree, skipping duplicate submission');
            }

            // Wait for profiles to load before rendering
            try {
                // Ensure profileRenderer exists
                if (!window.profileRenderer) {
                    throw new Error('ProfileRenderer not initialized');
                }

                await window.profileRenderer.waitForProfiles();
            } catch (error) {
                console.error('Failed to load profiles after retries:', error);

                // Show error using fallback if profileRenderer doesn't exist
                if (window.profileRenderer && window.profileRenderer.showCriticalError) {
                    window.profileRenderer.showCriticalError(error);
                } else {
                    alert('Configuration Error: The assessment profiles failed to load. Please refresh the page.');
                }
                return;
            }

            // Update profile code display
            document.getElementById('profileCode').textContent = profile.code;

            // Update profile subtitle display
            const profileSubtitle = document.getElementById('profileSubtitle');
            if (profileSubtitle) {
                profileSubtitle.textContent = getProfileSubtitle(profile.code);
            }

            // Set orientation title
            const westernerTitle = document.getElementById('westernerTitle');
            westernerTitle.textContent = 'Orientation';

            // Delegate all rendering to helper functions
            setStaticArchetypePills(profile.code, profile.archetypeScores);
            setOrientation(profile.code);
            setTendencyPills(profile.code);
            setArchetypeDescription(profile.code);
            setCollapsibleSections(profile.code);

            // Update chord diagram
            const chordImage = document.getElementById('chordDiagram');
            chordImage.src = `./Assets/Images/Clean_STTI_${profile.code}_Thin.png`;
            chordImage.alt = `${profile.code} Sensemaking Pattern`;

            // Render archetype radar chart, donut chart, spectrum slider, and animate score bars
            renderRadarChartArchetypesOnly(profile.scores);
            renderArchitectGardenerDonut(profile.scores);
            initTendencySpectrum(profile.scores);
            animateScoreBars(profile.scores);

            hasRenderedResults = true; // Mark results as successfully rendered

            // Auto-update browser URL with score parameters
            const shareableURL = generateShareableURL(profile.scores);
            const newURL = shareableURL.replace(window.location.origin + window.location.pathname, '');
            history.replaceState({scores: profile.scores}, '', window.location.pathname + newURL);

            showScreen('resultsScreen');
        }

        function shareResults() {
            const profileCode = document.getElementById('profileCode').textContent;
            const shareText = `I just discovered I'm a ${profileCode} on the STTI Assessment! Find out your sensemaking type at https://nickmilo.github.io/stti-assessment/`;
            
            if (navigator.share) {
                navigator.share({
                    title: `I'm a ${profileCode}! - STTI Assessment`,
                    text: shareText,
                    url: 'https://nickmilo.github.io/stti-assessment/'
                }).catch(err => console.log('Error sharing:', err));
            } else if (navigator.clipboard) {
                navigator.clipboard.writeText(shareText)
                    .then(() => alert('Share text copied to clipboard!'))
                    .catch(() => alert('Unable to copy to clipboard'));
            } else {
                alert(shareText);
            }
        }


        /**
         * Get current scores with multi-layer fallback strategy
         * @returns {Object|null} - Returns scores object {I, S, P, C, A, G} or null if unavailable
         */
        function getCurrentScores() {
            // Layer 1: Try global profile (most reliable)
            if (currentProfile && currentProfile.scores) {
                return currentProfile.scores;
            }

            // Layer 2: Try URL parameters
            const urlData = parseURLScores();
            if (urlData && urlData.type === 'scores') {
                return urlData.scores;
            }

            // Layer 3: Try recalculating from answers
            if (Object.keys(answers).length > 0) {
                try {
                    return calculateScores();
                } catch (error) {
                    console.error('Failed to calculate scores:', error);
                }
            }

            // No scores available
            return null;
        }



        function copyResultsLink() {
            // Get scores using multi-layer fallback
            const scores = getCurrentScores();
            if (!scores) {
                alert('Unable to generate shareable link. Please complete the assessment first.');
                return;
            }

            const url = generateShareableURL(scores);

            if (navigator.clipboard) {
                navigator.clipboard.writeText(url)
                    .then(() => {
                        alert('Link copied to clipboard!');
                    })
                    .catch(() => {
                        alert('Unable to copy to clipboard');
                    });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = url;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    alert('Link copied to clipboard!');
                } catch (err) {
                    alert('Unable to copy to clipboard');
                }
                document.body.removeChild(textArea);
            }
        }


        function toggleSection(contentId, titleElement) {
            const content = document.getElementById(contentId);
            const isCollapsed = content.classList.contains('collapsed');
            
            if (isCollapsed) {
                // Expand
                content.classList.remove('collapsed');
                content.classList.add('expanded');
                titleElement.classList.remove('collapsed');
            } else {
                // Collapse
                content.classList.remove('expanded');
                content.classList.add('collapsed');
                titleElement.classList.add('collapsed');
            }
        }





        // Image modal functionality
        document.addEventListener('click', function(event) {
            // Check if clicked on chord diagram
            if (event.target.id === 'chordDiagram') {
                const modal = document.getElementById('imageModal');
                const modalImage = document.getElementById('modalImage');
                modalImage.src = event.target.src;
                modal.classList.add('active');
            }
            
            // Close modal when clicking anywhere on it
            if (event.target.closest('#imageModal')) {
                document.getElementById('imageModal').classList.remove('active');
            }
        });

        // Demographic question functions
        function loadDemographicQuestion(demoIndex) {
            const question = demographicQuestions[demoIndex];
            const questionNumber = question.id;

            updateProgressBar();

            document.getElementById('demoQuestionText').textContent = question.text;
            const optionsContainer = document.getElementById('demoOptionsContainer');
            optionsContainer.innerHTML = '';

            if (question.type === 'radio' || question.type === 'radio-with-text') {
                renderRadioOptions(question, optionsContainer, questionNumber);
            } else if (question.type === 'checkbox' || question.type === 'checkbox-with-text') {
                renderCheckboxOptions(question, optionsContainer, questionNumber);
            }

            // Show/hide navigation
            const demoBackBtn = document.getElementById('demoBackBtn');
            const demoForwardBtn = document.getElementById('demoForwardBtn');
            demoBackBtn.style.display = 'inline-block';
            demoForwardBtn.style.display = 'inline-block';
            demoBackBtn.disabled = false;

            // CRITICAL FIX: Update forward button state after rendering options
            // This ensures button is enabled if user navigates back to an answered question
            updateDemoForwardButton(questionNumber);
        }

        function renderRadioOptions(question, container, questionNumber) {
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'demo-option';

                const isObject = typeof option === 'object';
                const optionText = isObject ? option.text : option;
                const hasInput = isObject && option.hasInput;

                const radioId = `demo_q${questionNumber}_opt${index}`;
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `demo_q${questionNumber}`;
                radio.value = optionText;
                radio.id = radioId;
                radio.className = 'demo-radio';

                // Check if previously selected
                if (demographicAnswers[questionNumber] && demographicAnswers[questionNumber].value === optionText) {
                    radio.checked = true;
                }

                radio.addEventListener('change', () => {
                    demographicAnswers[questionNumber] = { value: optionText };
                    if (hasInput) {
                        const textInput = document.getElementById(option.inputId);
                        if (textInput) {
                            demographicAnswers[questionNumber].textInput = textInput.value;
                        }
                    }
                    updateDemoForwardButton(questionNumber);
                });

                const label = document.createElement('label');
                label.htmlFor = radioId;
                label.textContent = optionText;
                label.className = 'demo-label';

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                if (hasInput) {
                    const textInput = document.createElement('input');
                    textInput.type = 'text';
                    textInput.id = option.inputId;
                    textInput.className = 'demo-text-input';
                    textInput.placeholder = 'Please specify...';
                    if (demographicAnswers[questionNumber] && demographicAnswers[questionNumber].textInput) {
                        textInput.value = demographicAnswers[questionNumber].textInput;
                    }
                    textInput.addEventListener('input', () => {
                        if (radio.checked && demographicAnswers[questionNumber]) {
                            demographicAnswers[questionNumber].textInput = textInput.value;
                        }
                    });
                    optionDiv.appendChild(textInput);
                }

                container.appendChild(optionDiv);
            });
        }

        function renderCheckboxOptions(question, container, questionNumber) {
            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'demo-option';

                const isObject = typeof option === 'object';
                const optionText = isObject ? option.text : option;
                const hasInput = isObject && option.hasInput;

                const checkboxId = `demo_q${questionNumber}_opt${index}`;
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.value = optionText;
                checkbox.id = checkboxId;
                checkbox.className = 'demo-checkbox';

                // Initialize answer array if needed
                if (!demographicAnswers[questionNumber]) {
                    demographicAnswers[questionNumber] = { values: [], textInputs: {} };
                }

                // Check if previously selected
                if (demographicAnswers[questionNumber].values.includes(optionText)) {
                    checkbox.checked = true;
                }

                checkbox.addEventListener('change', () => {
                    if (!demographicAnswers[questionNumber]) {
                        demographicAnswers[questionNumber] = { values: [], textInputs: {} };
                    }

                    if (checkbox.checked) {
                        if (!demographicAnswers[questionNumber].values.includes(optionText)) {
                            demographicAnswers[questionNumber].values.push(optionText);
                        }
                    } else {
                        const idx = demographicAnswers[questionNumber].values.indexOf(optionText);
                        if (idx > -1) {
                            demographicAnswers[questionNumber].values.splice(idx, 1);
                        }
                        if (hasInput) {
                            delete demographicAnswers[questionNumber].textInputs[option.inputId];
                        }
                    }
                    updateDemoForwardButton(questionNumber);
                });

                const label = document.createElement('label');
                label.htmlFor = checkboxId;
                label.textContent = optionText;
                label.className = 'demo-label';

                optionDiv.appendChild(checkbox);
                optionDiv.appendChild(label);

                if (hasInput) {
                    const textInput = document.createElement('input');
                    textInput.type = 'text';
                    textInput.id = option.inputId;
                    textInput.className = 'demo-text-input';
                    textInput.placeholder = 'Please specify...';
                    if (demographicAnswers[questionNumber] && demographicAnswers[questionNumber].textInputs[option.inputId]) {
                        textInput.value = demographicAnswers[questionNumber].textInputs[option.inputId];
                    }
                    textInput.addEventListener('input', () => {
                        if (checkbox.checked) {
                            if (!demographicAnswers[questionNumber].textInputs) {
                                demographicAnswers[questionNumber].textInputs = {};
                            }
                            demographicAnswers[questionNumber].textInputs[option.inputId] = textInput.value;
                        }
                    });
                    optionDiv.appendChild(textInput);
                }

                container.appendChild(optionDiv);
            });
        }

        function updateDemoForwardButton(questionNumber) {
            const forwardBtn = document.getElementById('demoForwardBtn');
            const answer = demographicAnswers[questionNumber];

            if (answer) {
                if (answer.value !== undefined) {
                    // Radio question - has answer
                    forwardBtn.disabled = false;
                } else if (answer.values !== undefined && answer.values.length > 0) {
                    // Checkbox question - has at least one selection
                    forwardBtn.disabled = false;
                } else {
                    forwardBtn.disabled = true;
                }
            } else {
                forwardBtn.disabled = true;
            }
        }

        function demoGoBack() {
            if (currentQuestion > questions.length) {
                currentQuestion--;
                hasRenderedResults = false; // Allow results to be re-rendered if user returns
                loadQuestion();
            }
        }

        function demoGoForward() {
            const demoIndex = currentQuestion - questions.length - 1;
            const questionNumber = demographicQuestions[demoIndex].id;

            if (demographicAnswers[questionNumber]) {
                // Check if this is the last demographic question
                if (demoIndex === demographicQuestions.length - 1) {
                    // Last demographic question - go directly to results
                    showResults();
                } else {
                    // More demographic questions remain
                    currentQuestion++;
                    loadQuestion();
                }
            }
        }

        function continueToDemographics() {
            currentQuestion++;
            loadQuestion();
        }

        function skipToResults() {
            // Skip demographic questions and show results immediately
            showResults();
        }
