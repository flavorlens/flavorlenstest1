// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.textContent;
    mobileMenuBtn.textContent = icon === 'menu' ? 'close' : 'menu';
});

function handleFreeUploadSubmit() {
    const email = document.getElementById('free-email').value;
    const ambiance = document.getElementById('free-ambiance').value;

    const t = translations[currentLang].mailtoFree;
    const subject = `${t.subject} - ${email}`;
    let bodyText = `${t.bodyHeader}\n\n`;
    bodyText += `${t.bodyEmail}: ${email}\n`;
    bodyText += `${t.bodyAmbiance}: ${ambiance}\n\n`;
    bodyText += `${t.bodyAction}\n`;

    const mailtoUrl = `mailto:info.flavorlens@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;

    return false;
}

function handleContactSubmit() {
    const name = document.getElementById('contact-name').value;
    const restaurant = document.getElementById('contact-restaurant').value;
    const email = document.getElementById('contact-email').value;
    const pkg = document.getElementById('contact-package').value;
    const message = document.getElementById('contact-message').value;


    const t = translations[currentLang].mailtoContact;
    const subject = `${t.subject} - ${name}`;
    let bodyText = `${t.bodyHeader}\n\n`;
    bodyText += `${t.bodyName}: ${name}\n`;
    if (restaurant) bodyText += `${t.bodyRestaurant}: ${restaurant}\n`;
    bodyText += `${t.bodyEmail}: ${email}\n`;
    bodyText += `${t.bodyPackage}: ${pkg}\n`;
    bodyText += `${t.bodyBriefing}:\n${message}\n\n`;
    bodyText += `${t.bodyAction}\n\n`;
    bodyText += `${t.bodyFooter}`;

    const mailtoUrl = `mailto:info.flavorlens@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;

    return false;
}

// Image Comparison Slider
document.querySelectorAll('.ba-container').forEach(slider => {
    const handle = slider.querySelector('.ba-foreground');
    const button = slider.querySelector('.ba-slider');

    if (handle && button) {
        const moveSlider = (x) => {
            const sliderRect = slider.getBoundingClientRect();
            let position = ((x - sliderRect.left) / sliderRect.width) * 100;

            if (position < 0) position = 0;
            if (position > 100) position = 100;

            handle.style.width = `${position}%`;
            button.style.left = `${position}%`;
        };

        slider.addEventListener('mousemove', (e) => {
            moveSlider(e.clientX);
        });

        slider.addEventListener('touchmove', (e) => {
            // Prevent default scrolling when sliding on mobile
            e.preventDefault();
            moveSlider(e.touches[0].clientX);
        }, { passive: false });

        slider.addEventListener('click', (e) => {
            moveSlider(e.clientX);
        });
    }
});

// Internationalization (i18n)
const translations = {
    en: {
        nav: {
            vision: "Vision",
            gallery: "Gallery",
            transformation: "Transformation",
            excellence: "Excellence",
            cta: "Get Started"
        },
        hero: {
            tag: "Sustainable Tech",
            title: {
                realFood: "Real Food.",
                realVibrance: "Real Vibrance."
            },
            description: "The high-end lens for organic integrity. Elevate your culinary storytelling with technology that honors the natural textures and colors of every harvest.",
            cta: {
                pricing: "View Pricing",
                enhance: "Enhance for Free",
                showcase: "View Showcase"
            },
            slider: {
                before: "Original",
                after: "Enhanced"
            }
        },
        features: {
            organic: "100% Organic Support",
            integrity: "Food Integrity Certified",
            michelin: "Michelin Standard Aesthetics",
            realtime: "Real-time Processing"
        },
        problem: {
            tag: "The Challenge",
            title: "Bad Photos Hurt Your Business",
            subtitle: "Food delivery is visual. If your food doesn't look incredible, your customers are clicking away to your competitors.",
            card1: {
                title: "Lost Conversions",
                desc: "Customers buy with their eyes. Dark menus equal fewer orders."
            },
            card2: {
                title: "Lack of Trust",
                desc: "Inconsistent, messy phone photos make your restaurant look amateur."
            },
            card3: {
                title: "Smaller Orders",
                desc: "High-quality visual menus increase the average order value substantially."
            }
        },
        gallery: {
            tag: "Visual Excellence",
            title: "Culinary Gallery",
            description: "Flavor Lens doesn't just make food look 'better'—it makes it look right. By understanding the unique spectral signatures of fresh produce, our software preserves the natural beauty of your harvest.",
            loadMore: "Load More",
            items: {
                item1: {
                    title: "Rustic Sourdough",
                    p1: "Texture Sharpness +42%",
                    p2: "Crust Contrast +15%"
                },
                item2: {
                    title: "Heritage Beet Salad",
                    p1: "Crimson Saturation +28%",
                    p2: "Leaf Detail +35%"
                },
                item3: {
                    title: "Pan-Seared Scallops",
                    p1: "Maillard Detail +50%",
                    p2: "Specular Highlight -10%"
                },
                item4: {
                    title: "Hand-Cut Tagliatelle",
                    p1: "Flour Texture +22%",
                    p2: "Egg Yolk Depth +18%"
                },
                item5: {
                    title: "Summer Harvest",
                    p1: "Chlorophyll Balance +30%",
                    p2: "Micro-Contrast +25%"
                },
                item6: {
                    title: "Wild Arugula Mix",
                    p1: "Shadow Detail +38%",
                    p2: "Freshness Index +100%"
                },
                item7: {
                    title: "Artisanal Garnish",
                    p1: "Edge Definition +45%",
                    p2: "Color Accuracy 99.9%"
                },
                item8: {
                    title: "Market Radishes",
                    p1: "Texture Mapping +33%",
                    p2: "Highlights Optimized"
                }
            }
        },
        vision: {
            tag: "Our Vision",
            intro_title: "Where Perception Meets Profit",
            intro_desc: "In a world where decisions are made in seconds, visual perception defines value. Our vision is to reshape how restaurants present their culinary identity — by turning every dish into a strategic visual asset.",
            mission_statement: "We aim to bridge gastronomy and psychology, combining aesthetics, precision, and data-driven insight to create imagery that not only inspires appetite, but directly influences ordering behavior.",
            impact_heading: "We don’t create images. We create impact.",
            impact_desc: "Through refined composition, authentic textures, and deliberate lighting, we elevate perception, strengthen brand positioning, and unlock measurable growth.",
            points: {
                excellence: "Visual Excellence",
                presentation: "Strategic Presentation",
                conversion: "Conversion Optimization",
                enhancement: "Authentic Enhancement",
                systems: "Scalable Visual Systems",
                performance: "Performance-Driven Imagery"
            }
        },
        excellence: {
            title: "Designed for Culinary Excellence",
            description: "We treat food as craftsmanship — not content. Our technology preserves the character, texture and atmosphere of every dish, ensuring your kitchen’s identity translates flawlessly to every screen.",
            simplicity: {
                title: "Operational Simplicity",
                desc: "Flavor Lens is designed to work within your existing workflow — not against it. Whether you capture images via smartphone or tablet, our enhancement layer integrates seamlessly without operational complexity."
            },
            integrity: {
                title: "100% Ingredient Integrity",
                desc: "Unlike generic filters, Flavor Lens understands ingredients. It enhances the natural red of a radish and the texture of kale — without artificial gloss, oversaturation or visual noise."
            },
            color_science: {
                title: "Organic Color Science",
                desc: "Developed by culinary photographers and visual technologists, our system replicates how the human eye perceives freshness in natural daylight — balanced, vivid and authentic."
            }
        },
        preservation: {
            title: "Beyond Enhancement. <br />True Preservation.",
            desc: "Flavor Lens doesn't just make food look 'better'—it makes it look right. By understanding the unique spectral signatures of fresh produce, our software preserves the natural beauty of your harvest.",
            list: {
                wb: "Automatic White Balance Correction",
                sharpness: "Texture-Aware Sharpness",
                contrast: "Micro-Contrast Optimization"
            },
            explore: "Explore the Technology"
        },
        how: {
            tag: "Process",
            title: "How It Works",
            description: "A simple, painless process designed for busy restaurant owners.",
            step1: {
                title: "Contact",
                desc: "Tell us what you need. We'll give you a quick, transparent quote."
            },
            step2: {
                title: "Image Capture",
                desc: "We visit your location for a fast, professional capture — or you simply take the photos yourself using your own smartphone or tablet."
            },
            step3: {
                title: "AI Enhancement",
                desc: "Our magical workflow adjusts lighting, tones, and removes distractions."
            },
            step4: {
                title: "Delivery",
                desc: "You get platform-ready, high-conversion images ready to boost your orders."
            }
        },
        faq: {
            tag: "Clarity",
            title: "Common Questions",
            subtitle: "Everything you need to know about our service.",
            q1: {
                q: "Is this fake?",
                a: "No. We do not generate food from text. We take real photos of your real food and enhance them, much like how a professional retoucher operates, but supercharged with AI to simulate physical studio conditions."
            },
            q2: {
                q: "Do you change my dishes?",
                a: "Never. We don't add ingredients, change portion sizes, or alter what your customers will receive. We maintain complete authenticity."
            },
            q3: {
                q: "Will customers feel misled?",
                a: "Absolutely not. They will get exactly what they see—the actual real food, just presented under optimal, appetizing conditions."
            },
            q4: {
                q: "How long does it take?",
                a: "Typically, we deliver the final enhanced images within 48 to 72 hours after the fast on-site shoot."
            },
            q5: {
                q: "Can I use the images everywhere?",
                a: "Yes. You get full rights to the final images to use on Wolt, Uber Eats, Lieferando, your website, and social media."
            }
        },
        divider: {
            or: "or — for real projects"
        },
        freeUpload: {
            tag: "100% Free",
            title: "Chef's Greeting <br> Test for Free",
            slogan: "No account needed. Results in 24h via email.",
            form: {
                email: "Email Address",
                emailPlaceholder: "you@email.com",
                ambiance: "Ambiance Choice",
                ambiancePlaceholder: "Select ambiance ...",
                rustic: "🪵 Rustic",
                modern: "⬛ Modern",
                fastfood: "🍔 Fastfood",
                note: "Please add one picture in email as attachment for the test",
                submit: "Send picture for free food upgrade"
            },
            trust: {
                privacy: "Your data is secure",
                speed: "Results in 24h",
                noCard: "No credit card"
            }
        },
        contact: {
            tag: "Business Inquiry",
            title: "Ready for Better Results?",
            desc: "Select your package and leave your details <br> We'll get back to you within 24h!",
            info: {
                title: "Start Project Inquiry",
                desc: "Leave your info and we'll create a tailored offer within 24 hours.",
                packagesLabel: "Available Packages",
                p0: "Chef's Greeting — 0 €",
                p1: "Digital Tasting — 49,- €",
                p2: "Menu Upgrade — 189,- €",
                p3: "Flavor Flatrate — Custom"
            },
            form: {
                name: "Name",
                namePlaceholder: "Your name",
                restaurant: "Restaurant / Company (optional)",
                restaurantPlaceholder: "E.g., Mario's Pizza Inc.",
                email: "Email",
                emailPlaceholder: "you@restaurant.com",
                package: "Package Selection",
                packagePlaceholder: "Select package ...",
                pkg0: "Chef's Greeting (0€)",
                pkg1: "Digital Tasting (49,- €)",
                pkg2: "Menu Upgrade (189,- €)",
                pkg3: "Flavor Flatrate (Custom)",
                briefing: "Project Briefing",
                briefingPlaceholder: "What is the goal of the assignment?",
                submit: "Send Inquiry",
                alert: "Request sent! We will contact you soon."
            }
        },
        footer: {
            tagline: "Grown with Integrity. Captured with Precision. The future of organic culinary storytelling.",
            solutions: "Solutions",
            solutionsList: {
                restaurants: "Restaurants",
                farms: "Organic Farms",
                api: "Food Tech API",
                sdk: "Mobile SDK"
            },
            company: "Company",
            companyList: {
                vision: "Our Vision",
                imprint: "Imprint",
                privacy: "Privacy Policy",
                contact: "Contact"
            },
            newsletter: "Newsletter",
            newsletterDesc: "Coming soon",
            newsletterPlaceholder: "Your email",
            newsletterUnavailable: "Our newsletter service is not yet available. Please check back later!",
            rights: "© 2026 Flavor Lens. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        },
        cookies: {
            title: "Cookie Settings",
            desc: "We use cookies to enhance your visual experience and analyze our traffic to provide michelin-grade service.",
            accept: "Accept All",
            decline: "Necessary Only"
        },
        modal: {
            close: "Close"
        },
        legal: {
            privacy: {
                title: "Privacy Policy",
                content: `
                <h3>1. Controller</h3>
                <p>Responsible for data processing on this website:</p>
                <p><b>Flavor Lens</b><br>[Name / Company]<br>[Address]<br>[Postcode, City]<br>Germany</p>
                <p>Email: [Email Address]<br>Phone: [Phone Number]</p>
                <hr class="my-6 border-sage/10">
                <h3>2. General Information on Data Processing</h3>
                <p>We process personal data exclusively within the framework of the applicable data protection regulations, in particular the General Data Protection Regulation (GDPR) and the TTDSG.</p>
                <h3>3. Hosting and Server Log Files</h3>
                <p>When you visit our website, information is automatically collected and stored in server log files: IP address, date and time of access, browser type/version, operating system, referrer URL, and hostname of the accessing computer.</p>
                <p><b>Legal basis:</b> Art. 6 Para. 1 lit. f GDPR (legitimate interest).</p>
                <h3>4. Contact Form</h3>
                <p>If you contact us via the contact form, we process the following data: Name, email address, phone number (if provided), message, and date/time of the request.</p>
                <p><b>Legal basis:</b> Art. 6 Para. 1 lit. b GDPR (pre-contractual measures) or Art. 6 Para. 1 lit. f GDPR (legitimate interest).</p>
                <h3>5. Cookies</h3>
                <p>Our website uses cookies. These are small text files stored on your device.</p>
                <h4>5.1 Technically Necessary Cookies</h4>
                <p>These cookies are required to provide the website correctly. Legal basis: § 25 Para. 2 TTDSG, Art. 6 Para. 1 lit. f GDPR.</p>
                <h4>5.2 Consent-Based Cookies (Analysis / Marketing)</h4>
                <p>Analysis or marketing cookies are only set after your express consent. Legal basis: § 25 Para. 1 TTDSG, Art. 6 Para. 1 lit. a GDPR.</p>
                <h3>6. Cookie Banner / Consent Management</h3>
                <p>We use a cookie consent tool to store and manage your consents. This includes processing your IP address (shortened), date/time of consent, and consent status to fulfill legal proof requirements according to Art. 7 GDPR.</p>
                <h3>7. Storage Duration</h3>
                <p>Personal data is only stored as long as necessary for the respective purpose or as long as legal retention periods exist.</p>
                <h3>8. Your Rights</h3>
                <p>You have the following rights: Right to access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20), objection (Art. 21), and withdrawal of consent (Art. 7 Para. 3). You also have the right to lodge a complaint with a supervisory authority.</p>
                <h3>9. Data Security</h3>
                <p>We use technical and organizational security measures to protect your data against loss, manipulation, or unauthorized access.</p>
                <h3>10. Timeliness and Changes</h3>
                <p>We reserve the right to adapt this privacy policy to changed legal or technical requirements.</p>
                <p><b>Status: February 2026</b></p>
                `
            },
            terms: {
                title: "Terms of Service",
                content: `<h3>Terms of Service</h3><p>Welcome to Flavor Lens. By using our services, you agree to the following terms.</p><h4>1. Scope of Service</h4><p>Flavor Lens provides AI-assisted image enhancement services for culinary photography. We do not provide generative image creation from text; our work is based on your authentic photography.</p><h4>2. Intellectual Property</h4><p>You retain all rights to your original photography. Flavor Lens retains rights to the specific AI optimization algorithms used.</p><h4>3. Liability</h4><p>We strive for perfection but are not liable for differences in perception or business outcomes resulting from the use of enhanced imagery.</p>`
            },
            imprint: {
                title: "Imprint",
                content: `
                <h3>Legal Information (Imprint)</h3>
                <p>Information according to § 5 TMG</p>
                <p><b>Flavor Lens</b><br>[Legal Form, e.g., Sole Proprietorship / UG / GmbH]</p>
                <p><b>Represented by:</b><br>[First and Last Name of Owner or Managing Director]</p>
                <p><b>Address:</b><br>[Street and House Number]<br>[Zip Code, City]<br>Germany</p>
                <p><b>Contact:</b><br>Phone: [Phone Number]<br>Email: [Email Address]</p>
                <hr class="my-6 border-sage/10">
                <p><b>VAT ID</b><br>Value added tax identification number according to § 27a UStG:<br>[VAT ID No., if available]</p>
                <hr class="my-6 border-sage/10">
                <p><b>Commercial Register</b><br>Registered in the Commercial Register.<br>Register Court: [City]<br>Register Number: [HRB Number]</p>
                <hr class="my-6 border-sage/10">
                <p><b>Responsible for Content according to § 18 Abs. 2 MStV</b><br>[First and Last Name]<br>[Address same as above]</p>
                <hr class="my-6 border-sage/10">
                <p><b>EU Dispute Resolution</b><br>The European Commission provides a platform for online dispute resolution (OS): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="text-terracotta hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br>Our email address can be found at the top of the imprint.</p>
                <hr class="my-6 border-sage/10">
                <p><b>Consumer Dispute Resolution</b><br>We are neither obliged nor willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
                `
            }
        },
        mailtoFree: {
            subject: "Free Trial Request - Flavor Lens",
            bodyHeader: "New Free Test Request",
            bodyEmail: "Email",
            bodyAmbiance: "Chosen Ambiance",
            bodyAction: "[ACTION REQUIRED]: Please attach your food photo to this email so we can enhance it!"
        },
        mailtoContact: {
            subject: "Business Inquiry - Flavor Lens",
            bodyHeader: "New Project Inquiry",
            bodyName: "Name",
            bodyRestaurant: "Company",
            bodyEmail: "Email",
            bodyPackage: "Package",
            bodyBriefing: "Project Briefing",
            bodyAction: "[ACTION REQUIRED]: Please attach your food photos or current menu to this email! This helps us provide an accurate quote.",
            bodyFooter: "--- Sent via Flavor Lens Business Form ---"
        },
        pricing: {
            tag: "Pricing",
            title: "Professional Results Without the Photographer's Fee",
            benefitsTitle: "The Advantages in Detail",
            benefits: {
                travel: {
                    title: "No Travel & Expenses",
                    desc: "You pay only for the image, not the photographer's fuel."
                },
                setup: {
                    title: "No Set-up & Chaos",
                    desc: "Your kitchen continues as normal, no moving tables."
                },
                styling: {
                    title: "No Expensive Food Styling",
                    desc: "Our AI handles the enhancement of texture and shine."
                },
                licensing: {
                    title: "No Hidden Licensing Fees",
                    desc: "Unlimited use for social media, web & print – for life."
                },
                speed: {
                    title: "No Long Wait Time",
                    desc: "Results often available overnight."
                },
                booking: {
                    title: "No Minimum Booking",
                    desc: "Start with a single image instead of paying expensive daily rates."
                }
            },
            packages: {
                starter: {
                    name: "Chef's Greeting",
                    tagline: "Start your journey",
                    badge: "100% Free",
                    focus: "Convince yourself without obligation. We enhance one photo of your choice in one of our 3 standard ambiance settings.",
                    feature1: "1x PRO image",
                    feature2: "Up to 24 hours",
                    feature3: "Limited ambiance setting",
                    feature4: "Testing potential outcomes",
                    feature5: "No credit card required",
                    price: "Free",
                    cta: "Try for free now"
                },
                appetizer: {
                    name: "Digital Tasting",
                    tagline: "The perfect start",
                    badge: "Best Start",
                    focus: "Ideal to instantly elevate your 3 most important bestsellers (e.g. on Deliveroo or Wolt).",
                    feature1: "3x PRO images",
                    feature2: "24–48 hours",
                    feature3: "Professional ambiance setting",
                    feature4: "Digital food enhancement",
                    feature5: "Unlimited usage rights",
                    price: "49,- €",
                    cta: "Start now"
                },
                main: {
                    name: "Food Upgrade",
                    tagline: "Our Recommendation",
                    badge: "Top Deal",
                    focus: "The all-in-one package for your entire assortment or new seasonal menu. A professional look for every dish.",
                    feature1: "12x PRO images",
                    feature2: "Express delivery (24 hours)",
                    feature3: "Professional ambiance setting",
                    feature4: "Digital food enhancement",
                    feature5: "Unlimited usage rights",
                    feature6: "Exclusive & custom \"Signature Look\" for your brand",
                    price: "189,- €",
                    cta: "Most Popular"
                },
                buffet: {
                    name: "Flavor Flatrate",
                    tagline: "For professionals and content creators",
                    badge: "Pro Choice",
                    focus: "You deliver the content, we deliver the magic. Perfect for cookbooks, franchise chains or daily social media presence.",
                    feature1: "Individual PRO Plan",
                    feature2: "Priority delivery",
                    feature3: "Professional & Custom ambiance setting",
                    feature4: "Digital food enhancement",
                    feature5: "Unlimited usage rights",
                    feature6: "Exclusive & custom \"Signature Look\" for your brand",
                    feature7: "Personal & Priority Support",
                    price: "Individual",
                    cta: "Request Project"
                }
            }
        }
    },
    de: {
        nav: {
            vision: "Vision",
            gallery: "Galerie",
            transformation: "Transformation",
            excellence: "Exzellenz",
            cta: "Start"
        },
        hero: {
            tag: "Nachhaltige Technologie",
            title: {
                realFood: "Echtes Essen.",
                realVibrance: "Echte Lebendigkeit."
            },
            description: "Das High-End-Objektiv für organische Integrität. Erhöhen Sie Ihr kulinarisches Storytelling mit Technologie, die die natürlichen Texturen und Farben jeder Ernte würdigt.",
            cta: {
                pricing: "Preise ansehen",
                enhance: "Kostenlos testen",
                showcase: "Galerie ansehen"
            },
            slider: {
                before: "Original",
                after: "Optimiert"
            }
        },
        features: {
            organic: "100% Bio-Support",
            integrity: "Zertifizierte Lebensmittelechtheit",
            michelin: "Ästhetik auf Michelin-Niveau",
            realtime: "Echtzeit-Verarbeitung"
        },
        problem: {
            tag: "Die Herausforderung",
            title: "Schlechte Fotos schaden Ihrem Geschäft",
            subtitle: "Essenslieferung ist visuell. Wenn Ihr Essen nicht unglaublich aussieht, klicken Ihre Kunden zur Konkurrenz weiter.",
            card1: {
                title: "Verlorene Conversions",
                desc: "Kunden kaufen mit den Augen. Dunkle Speisekarten bedeuten weniger Bestellungen."
            },
            card2: {
                title: "Mangelndes Vertrauen",
                desc: "Inkonsistente, unordentliche Handyfotos lassen Ihr Restaurant amateurhaft wirken."
            },
            card3: {
                title: "Kleinere Bestellungen",
                desc: "Hochwertige visuelle Speisekarten erhöhen den durchschnittlichen Bestellwert erheblich."
            }
        },
        gallery: {
            tag: "Visuelle Exzellenz",
            title: "Kulinarische Galerie",
            description: "Flavor Lens macht Essen nicht nur 'besser' – es macht es richtig. Durch das Verständnis der einzigartigen spektralen Signaturen frischer Produkte bewahrt unsere Software die natürliche Schönheit Ihrer Ernte.",
            loadMore: "Mehr laden",
            items: {
                item1: {
                    title: "Rustikales Sauerteigbrot",
                    p1: "Texturschärfe +42%",
                    p2: "Krustenkontrast +15%"
                },
                item2: {
                    title: "Heidetrüffel-Salat",
                    p1: "Crimson-Sättigung +28%",
                    p2: "Blattdetails +35%"
                },
                item3: {
                    title: "Kurzgebratene Jakobsmuscheln",
                    p1: "Maillard-Details +50%",
                    p2: "Glanzpunkt-Optimierung -10%"
                },
                item4: {
                    title: "Handgeschnittene Tagliatelle",
                    p1: "Mehltextur +22%",
                    p2: "Eigelb-Tiefe +18%"
                },
                item5: {
                    title: "Sommerernte",
                    p1: "Chlorophyll-Balance +30%",
                    p2: "Mikrokontrast +25%"
                },
                item6: {
                    title: "Wilder Rucola-Mix",
                    p1: "Schattendetails +38%",
                    p2: "Frische-Index +100%"
                },
                item7: {
                    title: "Handwerkliche Garnierung",
                    p1: "Kantendefinition +45%",
                    p2: "Farbgenauigkeit 99,9%"
                },
                item8: {
                    title: "Marktfrische Radieschen",
                    p1: "Textur-Mapping +33%",
                    p2: "Optimierte Highlights"
                }
            }
        },
        vision: {
            tag: "Unsere Vision",
            intro_title: "Wo Wahrnehmung auf Profit trifft",
            intro_desc: "In einer Welt, in der Entscheidungen in Sekunden getroffen werden, definiert die visuelle Wahrnehmung den Wert. Unsere Vision ist es, die Art und Weise zu verändern, wie Restaurants ihre kulinarische Identität präsentieren – indem wir jedes Gericht in ein strategisches visuelles Asset verwandeln.",
            mission_statement: "Wir schlagen die Brücke zwischen Gastronomie und Psychologie. Wir kombinieren Ästhetik, Präzision und datengestützte Erkenntnisse, um Bilder zu schaffen, die nicht nur den Appetit anregen, sondern das Bestellverhalten direkt beeinflussen.",
            impact_heading: "Wir schaffen keine Bilder. Wir schaffen Wirkung.",
            impact_desc: "Durch raffinierte Komposition, authentische Texturen und gezielte Beleuchtung steigern wir die Wahrnehmung, stärken die Markenpositionierung und erschließen messbares Wachstum.",
            points: {
                excellence: "Visuelle Exzellenz",
                presentation: "Strategische Präsentation",
                conversion: "Conversion-Optimierung",
                enhancement: "Authentische Optimierung",
                systems: "Skalierbare visuelle Systeme",
                performance: "Performance-orientierte Bildsprache"
            }
        },
        excellence: {
            title: "Entwickelt für kulinarische Exzellenz",
            description: "Wir betrachten Essen als Handwerk – nicht als Inhalt. Unsere Technologie bewahrt den Charakter, die Textur und die Atmosphäre jedes Gerichts und stellt sicher, dass die Identität Ihrer Küche perfekt auf jeden Bildschirm übertragen wird.",
            simplicity: {
                title: "Operative Einfachheit",
                desc: "Flavor Lens wurde entwickelt, um in Ihren bestehenden Workflow zu passen – nicht dagegen. Egal ob Sie Bilder mit dem Smartphone oder Tablet aufnehmen, unsere Optimierungsschicht lässt sich nahtlos und ohne operative Komplexität integrieren."
            },
            integrity: {
                title: "100% Integrität der Zutaten",
                desc: "Im Gegensatz zu generischen Filtern versteht Flavor Lens die Zutaten. Es verstärkt das natürliche Rot eines Radieschens und die Textur von Grünkohl – ohne künstlichen Glanz, Übersättigung oder visuelles Rauschen."
            },
            color_science: {
                title: "Organische Farbwissenschaft",
                desc: "Unser System wurde von kulinarischen Fotografen und visuellen Technologen entwickelt und repliziert, wie das menschliche Auge Frische bei natürlichem Tageslicht wahrnimmt – ausgewogen, lebendig und authentisch."
            }
        },
        preservation: {
            title: "Jenseits von Optimierung. <br />Wahre Bewahrung.",
            desc: "Flavor Lens macht Essen nicht nur 'besser' – es macht es richtig. Durch das Verständnis der einzigartigen spektralen Signaturen frischer Produkte bewahrt unsere Software die natürliche Schönheit Ihrer Ernte.",
            list: {
                wb: "Automatische Weißabgleich-Korrektur",
                sharpness: "Texturbasierte Schärfe",
                contrast: "Mikrokontrast-Optimierung"
            },
            explore: "Technologie erkunden"
        },
        how: {
            tag: "Prozess",
            title: "Wie es funktioniert",
            description: "Ein einheitlicher, müheloser Prozess für vielbeschäftigte Restaurantbesitzer.",
            step1: {
                title: "Kontakt",
                desc: "Sagen Sie uns, was Sie brauchen. Wir geben Ihnen ein schnelles, transparentes Angebot."
            },
            step2: {
                title: "Bilderfassung",
                desc: "Wir besuchen Sie für eine schnelle, professionelle Aufnahme – oder Sie machen die Fotos einfach selbst mit Ihrem eigenen Smartphone oder Tablet."
            },
            step3: {
                title: "KI-Optimierung",
                desc: "Unser intelligenter Workflow passt Beleuchtung und Farbtöne an und entfernt Störfaktoren."
            },
            step4: {
                title: "Lieferung",
                desc: "Sie erhalten plattformoptimierte, konversionsstarke Bilder, bereit Ihre Bestellungen zu steigern."
            }
        },
        faq: {
            tag: "Klarheit",
            title: "Häufige Fragen",
            subtitle: "Alles, was Sie über unseren Service wissen müssen.",
            q1: {
                q: "Ist das ein Fake?",
                a: "Nein. Wir generieren kein Essen aus Texten. Wir machen echte Fotos von Ihrem echten Essen und optimieren diese – ähnlich wie ein professioneller Retuscheur, aber mit KI, um Studiobedingungen zu simulieren."
            },
            q2: {
                q: "Verändern Sie meine Gerichte?",
                a: "Niemals. Wir fügen keine Zutaten hinzu, ändern keine Portionsgrößen oder verfälschen, was Ihre Kunden bekommen werden. Wir bewahren absolute Authentizität."
            },
            q3: {
                q: "Fühlen sich Kunden dadurch in die Irre geführt?",
                a: "Absolut nicht. Sie bekommen genau das, was sie sehen – das echte Essen, nur unter optimalen, appetitlichen Bedingungen."
            },
            q4: {
                q: "Wie lange dauert das?",
                a: "Normalerweise liefern wir die finalen optimierten Bilder innerhalb von 48 bis 72 Stunden nach dem schnellen Shooting vor Ort aus."
            },
            q5: {
                q: "Darf ich die Bilder überall verwenden?",
                a: "Ja. Sie erhalten die vollen Nutzungsrechte an den finalen Bildern für Plattformen wie Wolt, Uber Eats, Lieferando, Ihre Website und Social Media."
            }
        },
        divider: {
            or: "oder — für echte Projekte"
        },
        freeUpload: {
            tag: "100% Gratis",
            title: "Gruß aus der Küche <br> Kostenlos testen",
            slogan: "Kein Account nötig. Ergebnis in 24h per Mail.",
            form: {
                email: "E-Mail-Adresse",
                emailPlaceholder: "deine@email.de",
                ambiance: "Ambiente-Wahl",
                ambiancePlaceholder: "Ambiente wählen …",
                rustic: "🪵 Rustikal",
                modern: "⬛ Modern",
                fastfood: "🍔 Fastfood",
                note: "Bitte füge deiner E-Mail ein Bild als Anhang für den Test hinzu",
                submit: "Bild senden für kostenloses Food-Upgrade"
            },
            trust: {
                privacy: "Deine Daten sind sicher",
                speed: "Ergebnis in 24h",
                noCard: "Keine Kreditkarte"
            }
        },
        contact: {
            tag: "Business-Anfrage",
            title: "Bereit für bessere Ergebnisse?",
            desc: "Wähle dein Paket, hinterlasse deine Details <br> Wir melden uns innerhalb von 24h!",
            info: {
                title: "Projekt-Anfrage starten",
                desc: "Hinterlasse deine Infos und wir erstellen dir innerhalb von 24h ein maßgeschneidertes Angebot.",
                packagesLabel: "Verfügbare Pakete",
                p0: "Chef's Greeting — 0 €",
                p1: "Digitales Tasting — 49,- €",
                p2: "Menu-Upgrade — 189,- €",
                p3: "Flavor Flatrate — Individuell"
            },
            form: {
                name: "Name",
                namePlaceholder: "Dein Name",
                restaurant: "Restaurant / Firma (optional)",
                restaurantPlaceholder: "z.B. Mario's Pizza GmbH",
                email: "E-Mail",
                emailPlaceholder: "ihre@restaurant.com",
                package: "Paketauswahl",
                packagePlaceholder: "Paket wählen …",
                pkg0: "Chef's Greeting (0€)",
                pkg1: "Digitales Tasting (49,- €)",
                pkg2: "Menu-Upgrade (189,- €)",
                pkg3: "Flavor Flatrate (Individuell)",
                briefing: "Projektbriefing",
                briefingPlaceholder: "Was ist das Ziel des Auftrags?",

                submit: "Anfrage Senden",
                alert: "Anfrage gesendet! Wir werden Sie in Kürze kontaktieren."
            }
        },
        pricing: {
            tag: "Preise",
            title: "Professionelle Ergebnisse ohne Fotografen-Honorar",
            benefitsTitle: "Die Vorteile im Detail",
            benefits: {
                travel: {
                    title: "Keine Anfahrt & Reisekosten",
                    desc: "Du zahlst nur das Bild, nicht den Sprit des Fotografen."
                },
                setup: {
                    title: "Kein Set-Aufbau & Chaos",
                    desc: "Deine Küche arbeitet normal weiter, kein Umräumen der Tische."
                },
                styling: {
                    title: "Kein teures Food-Styling",
                    desc: "Unsere KI übernimmt die Veredelung von Textur und Glanz."
                },
                licensing: {
                    title: "Keine versteckten Lizenzgebühren",
                    desc: "Unbegrenzte Nutzung für Social Media, Web & Print – lebenslang."
                },
                speed: {
                    title: "Keine langen Wartezeiten",
                    desc: "Ergebnisse oft schon über Nacht verfügbar."
                },
                booking: {
                    title: "Keine Mindestbuchung",
                    desc: "Starte mit einem einzigen Bild, statt teure Tagessätze zu zahlen."
                }
            },
            packages: {
                starter: {
                    name: "Gruß aus der Küche",
                    tagline: "Unverbindlich testen",
                    badge: "100% Gratis",
                    focus: "Überzeuge dich unverbindlich von unserer Qualität. Wir veredeln ein Foto deiner Wahl in einem unserer 3 Standard-Ambiente-Settings.",
                    feature1: "1x PRO-Bild",
                    feature2: "Bis zu 24 Stunden",
                    feature3: "Limitiertes Ambiente-Setting",
                    feature4: "Ergebnisse testen",
                    feature5: "Keine Kreditkarte erforderlich",
                    price: "Kostenlos",
                    cta: "Jetzt kostenlos testen"
                },
                appetizer: {
                    name: "Digitales Tasting",
                    tagline: "Der perfekte Start",
                    badge: "Bester Start",
                    focus: "Ideal, um deine 3 wichtigsten Bestseller (z.B. auf Lieferando oder Wolt) sofort aufzuwerten.",
                    feature1: "3x PRO-Bilder",
                    feature2: "24–48 Stunden",
                    feature3: "Professionelles Ambiente-Setting",
                    feature4: "Digitales Food-Enhancement",
                    feature5: "Unbegrenzte Nutzungsrechte",
                    price: "49,- €",
                    cta: "Direkt durchstarten"
                },
                main: {
                    name: "Food-Upgrade",
                    tagline: "Unsere Empfehlung",
                    badge: "Top Deal",
                    focus: "Das Rundum-Sorglos-Paket für dein gesamtes Sortiment oder die neue Saisonkarte. Professioneller Look für jedes Gericht.",
                    feature1: "12x PRO-Bilder",
                    feature2: "Express-Lieferung (24 Stunden)",
                    feature3: "Professionelles Ambiente-Setting",
                    feature4: "Digitales Food-Enhancement",
                    feature5: "Unbegrenzte Nutzungsrechte",
                    feature6: "Exklusiver & individueller \"Signature Look\" für deine Marke",
                    price: "189,- €",
                    cta: "Meistgewählt"
                },
                buffet: {
                    name: "Flavor Flatrate",
                    tagline: "Für Profis und Content Creator",
                    badge: "Pro Wahl",
                    focus: "Du lieferst den Content, wir liefern die Magie. Perfekt für Kochbücher, Franchise-Ketten oder tägliche Social Media Präsenz.",
                    feature1: "Individueller PRO-Plan",
                    feature2: "Prioritäts-Lieferung",
                    feature3: "Professionelles & individuelles Ambiente-Setting",
                    feature4: "Digitales Food-Enhancement",
                    feature5: "Unbegrenzte Nutzungsrechte",
                    feature6: "Exklusiver & individueller \"Signature Look\" für deine Marke",
                    feature7: "Persönlicher & priorisierter Support",
                    price: "Individuell",
                    cta: "Projekt anfragen"
                }
            }
        }
    },
    footer: {

        tagline: "Mit Integrität angebaut. Mit Präzision eingefangen. Die Zukunft des organischen kulinarischen Storytellings.",
        solutions: "Lösungen",
        solutionsList: {
            restaurants: "Restaurants",
            farms: "Bio-Bauernhöfe",
            api: "Food Tech API",
            sdk: "Mobile SDK"
        },
        company: "Unternehmen",
        companyList: {
            vision: "Unsere Vision",
            imprint: "Impressum",
            privacy: "Datenschutzerklärung",
            contact: "Kontakt"
        },
        newsletter: "Newsletter",
        newsletterDesc: "Demnächst verfügbar",
        newsletterPlaceholder: "Ihre E-Mail",
        newsletterUnavailable: "Unser Newsletter-Service ist noch nicht verfügbar. Bitte schauen Sie später wieder vorbei!",
        rights: "© 2026 Flavor Lens. Alle Rechte vorbehalten.",
        privacy: "Datenschutzerklärung",
        terms: "Nutzungsbedingungen"
    },
    cookies: {
        title: "Cookie-Einstellungen",
        desc: "Wir verwenden Cookies, um Ihr visuelles Erlebnis zu verbessern und unseren Datenverkehr für michelin-grade Service zu analysieren.",
        accept: "Alle Akzeptieren",
        decline: "Nur Notwendige"
    },
    modal: {
        close: "Schließen"
    },
    legal: {
        privacy: {
            title: "Datenschutzerklärung",
            content: `
                <h3>1. Verantwortlicher</h3>
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
                <p><b>Flavor Lens</b><br>[Vor- und Nachname / Firma]<br>[Adresse]<br>[PLZ, Ort]<br>Deutschland</p>
                <p>E-Mail: [E-Mail-Adresse]<br>Telefon: [Telefonnummer]</p>
                <hr class="my-6 border-sage/10">
                <h3>2. Allgemeine Hinweise zur Datenverarbeitung</h3>
                <p>Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der geltenden Datenschutzvorschriften, insbesondere der Datenschutz-Grundverordnung (DSGVO) sowie des TTDSG.</p>
                <h3>3. Hosting und Server-Logfiles</h3>
                <p>Beim Aufrufen unserer Website werden automatisch Informationen erfasst und in Server-Logfiles gespeichert: IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und Version, Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners.</p>
                <p><b>Rechtsgrundlage:</b> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
                <h3>4. Kontaktformular</h3>
                <p>Wenn Sie uns über das Kontaktformular kontaktieren, verarbeiten wir folgende Daten: Name, E-Mail-Adresse, Telefonnummer (falls angegeben), Nachricht, Datum und Uhrzeit der Anfrage.</p>
                <p><b>Rechtsgrundlage:</b> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</p>
                <h3>5. Cookies</h3>
                <p>Unsere Website verwendet Cookies. Dies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.</p>
                <h4>5.1 Technisch notwendige Cookies</h4>
                <p>Diese Cookies sind erforderlich, um die Website korrekt bereitzustellen. Rechtsgrundlage: § 25 Abs. 2 TTDSG, Art. 6 Abs. 1 lit. f DSGVO.</p>
                <h4>5.2 Einwilligungsbasierte Cookies (Analyse / Marketing)</h4>
                <p>Analyse- oder Marketing-Cookies werden ausschließlich nach Ihrer ausdrücklichen Einwilligung gesetzt. Rechtsgrundlage: § 25 Abs. 1 TTDSG, Art. 6 Abs. 1 lit. a DSGVO.</p>
                <h3>6. Cookie-Banner / Consent-Management</h3>
                <p>Wir verwenden ein Cookie-Consent-Tool, um Ihre Einwilligungen zu speichern und zu verwalten. Dabei werden IP-Adresse (gekürzt), Datum und Uhrzeit sowie der Einwilligungsstatus verarbeitet, um die gesetzliche Nachweispflicht gemäß Art. 7 DSGVO zu erfüllen.</p>
                <h3>7. Speicherdauer</h3>
                <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist oder gesetzliche Aufbewahrungspflichten bestehen.</p>
                <h3>8. Ihre Rechte</h3>
                <p>Sie haben folgende Rechte: Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21) und Widerruf einer Einwilligung (Art. 7 Abs. 3). Beschwerden bei einer Aufsichtsbehörde sind ebenfalls möglich.</p>
                <h3>9. Datensicherheit</h3>
                <p>Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Verlust, Manipulation oder unbefugten Zugriff zu schützen.</p>
                <h3>10. Aktualität und Änderungen</h3>
                <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie an geänderte rechtliche oder technische Anforderungen anzupassen.</p>
                <p><b>Stand: Februar 2026</b></p>
                `
        },
        terms: {
            title: "Nutzungsbedingungen",
            content: `<h3>Nutzungsbedingungen</h3><p>Willkommen bei Flavor Lens. Durch die Nutzung unserer Dienste erklären Sie sich mit den folgenden Bedingungen einverstanden.</p><h4>1. Leistungsumfang</h4><p>Flavor Lens bietet KI-gestützte Bildoptimierungsdienste für die kulinarische Fotografie an. Wir bieten keine generative Bilderzeugung aus Text an; unsere Arbeit basiert auf Ihrer authentischen Fotografie.</p><h4>2. Geistiges Eigentum</h4><p>Sie behalten alle Rechte an Ihrer Originalfotografie. Flavor Lens behält die Rechte an den verwendeten spezifischen KI-Optimierungsalgorithmen.</p><h4>3. Haftung</h4><p>Wir streben nach Perfektion, haften jedoch nicht für Unterschiede in der Wahrnehmung oder für geschäftliche Ergebnisse, die sich aus der Verwendung optimierter Bilder ergeben.</p>`
        },
        imprint: {
            title: "Impressum",
            content: `
                <h3>Angaben gemäß § 5 TMG</h3>
                <p><b>Flavor Lens</b><br>[Rechtsform, z. B. Einzelunternehmen / UG (haftungsbeschränkt) / GmbH]</p>
                <p><b>Vertreten durch:</b><br>[Vor- und Nachname des Inhabers oder Geschäftsführers]</p>
                <p><b>Anschrift:</b><br>[Straße und Hausnummer]<br>[PLZ Ort]<br>Deutschland</p>
                <p><b>Kontakt:</b><br>Telefon: [Telefonnummer]<br>E-Mail: [E-Mail-Adresse]</p>
                <hr class="my-6 border-sage/10">
                <p><b>Umsatzsteuer-ID</b><br>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br>[USt-IdNr., falls vorhanden]</p>
                <hr class="my-6 border-sage/10">
                <p><b>Handelsregister</b><br>Eingetragen im Handelsregister.<br>Registergericht: [Ort]<br>Registernummer: [HRB-Nummer]</p>
                <hr class="my-6 border-sage/10">
                <p><b>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</b><br>[Vor- und Nachname]<br>[Adresse wie oben]</p>
                <hr class="my-6 border-sage/10">
                <p><b>EU-Streitschlichtung</b><br>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="text-terracotta hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br>Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
                <hr class="my-6 border-sage/10">
                <p><b>Verbraucherstreitbeilegung</b><br>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                `
        },
        mailtoFree: {
            subject: "Kostenlose Testanfrage - Flavor Lens",
            bodyHeader: "Neue Anfrage für Gratis-Test",
            bodyEmail: "E-Mail",
            bodyAmbiance: "Gewähltes Ambiente",
            bodyAction: "[AKTION ERFORDERLICH]: Bitte hängen Sie Ihr Food-Foto an diese E-Mail an, damit wir es veredeln können!"
        },
        mailtoContact: {
            subject: "Business-Anfrage - Flavor Lens",
            bodyHeader: "Neue Projektanfrage",
            bodyName: "Name",
            bodyRestaurant: "Firma",
            bodyEmail: "E-Mail",
            bodyPackage: "Paket",
            bodyBriefing: "Projektbriefing",
            bodyAction: "[AKTION ERFORDERLICH]: Bitte hängen Sie Ihre Food-Fotos oder Ihr aktuelles Menü an diese E-Mail an! Dies hilft uns, ein genaues Angebot zu erstellen.",
            bodyFooter: "--- Gesendet über das Flavor Lens Business Formular ---"
        }
    }
}
    ;

let currentLang = localStorage.getItem('lang') || 'en';

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = translations[currentLang];
        keys.forEach(k => {
            value = value ? value[k] : null;
        });
        if (value) {
            element.innerHTML = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let value = translations[currentLang];
        keys.forEach(k => {
            value = value ? value[k] : null;
        });
        if (value) {
            element.placeholder = value;
        }
    });

    // Update Language Toggles (Text and Flag SVGs)
    const nextLang = currentLang === 'en' ? 'de' : 'en';
    const langText = nextLang.toUpperCase();

    // Flags as SVGs for maximum compatibility
    const deFlag = `
        <svg class="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 5 3">
            <rect width="5" height="3" y="0" fill="#000"/>
            <rect width="5" height="2" y="1" fill="#D00"/>
            <rect width="5" height="1" y="2" fill="#FFCE00"/>
        </svg>
    `;
    const enFlag = `
        <svg class="h-4 w-6 rounded-sm shadow-sm" viewBox="0 0 60 30">
            <rect width="60" height="30" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="4"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
        </svg>
    `;

    const flagHTML = nextLang === 'de' ? deFlag : enFlag;

    document.getElementById('lang-text-desktop').textContent = langText;
    document.getElementById('lang-flag-desktop').innerHTML = flagHTML;
    document.getElementById('lang-text-mobile').textContent = langText;
    document.getElementById('lang-flag-mobile').innerHTML = flagHTML;

    // Update Cookie Banner buttons explicitly (some are handled by data-i18n, but accept is tricky if not marked)
    const cookieT = translations[currentLang].cookies;
    document.getElementById('accept-cookies').textContent = cookieT.accept;
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'de' : 'en';
    localStorage.setItem('lang', currentLang);
    updateContent();
}

document.getElementById('lang-toggle-desktop').addEventListener('click', toggleLanguage);
document.getElementById('lang-toggle-mobile').addEventListener('click', toggleLanguage);

// Theme Toggle Update
let isDarkMode = localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

function updateTheme() {
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle-desktop').textContent = 'light_mode';
        document.getElementById('theme-toggle-mobile').textContent = 'light_mode';
    } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle-desktop').textContent = 'dark_mode';
        document.getElementById('theme-toggle-mobile').textContent = 'dark_mode';
    }
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateTheme();
}

document.getElementById('theme-toggle-desktop').addEventListener('click', toggleTheme);
document.getElementById('theme-toggle-mobile').addEventListener('click', toggleTheme);

// Watch for System Theme Changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    isDarkMode = e.matches;
    localStorage.removeItem('theme'); // Reset manual override to follow system again
    updateTheme();
});

// Legal Modal Logic
const modal = document.getElementById('legal-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const closeButtons = [document.getElementById('close-modal'), document.getElementById('close-modal-footer')];
const privacyBtn = document.getElementById('privacy-btn');
const privacyBtnFooter = document.getElementById('privacy-btn-footer');
const termsBtn = document.getElementById('terms-btn');
const newsletterBtn = document.getElementById('newsletter-btn');

function openModal(type) {
    const content = translations[currentLang].legal[type];
    modalTitle.textContent = content.title;
    modalBody.innerHTML = content.content;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Force reflow
    modal.offsetHeight;

    modal.classList.remove('opacity-0');
    modal.classList.add('opacity-100');
    modal.querySelector('div').classList.remove('scale-95');
    modal.querySelector('div').classList.add('scale-100');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.classList.add('opacity-0');
    modal.querySelector('div').classList.remove('scale-100');
    modal.querySelector('div').classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
    }, 300);
}

if (privacyBtn) privacyBtn.addEventListener('click', () => openModal('privacy'));
if (privacyBtnFooter) privacyBtnFooter.addEventListener('click', () => openModal('privacy'));
if (termsBtn) termsBtn.addEventListener('click', () => openModal('terms'));
document.getElementById('imprint-btn').addEventListener('click', () => openModal('imprint'));

if (newsletterBtn) {
    newsletterBtn.addEventListener('click', () => {
        const status = document.getElementById('newsletter-status');
        status.textContent = translations[currentLang].footer.newsletterUnavailable;
        status.classList.remove('opacity-0');
        status.classList.add('opacity-100');
    });
}

closeButtons.forEach(btn => btn.addEventListener('click', closeModal));

// Cookie Banner Logic
const cookieBanner = document.getElementById('cookie-banner');
const acceptCookies = document.getElementById('accept-cookies');
const declineCookies = document.getElementById('decline-cookies');

function showCookieBanner() {
    if (!localStorage.getItem('cookies-accepted')) {
        cookieBanner.classList.remove('hidden');
        // Force reflow
        cookieBanner.offsetHeight;
        cookieBanner.classList.remove('translate-y-20', 'opacity-0');
        cookieBanner.classList.add('translate-y-0', 'opacity-100');
    }
}

function hideCookieBanner() {
    cookieBanner.classList.add('translate-y-20', 'opacity-0');
    cookieBanner.classList.remove('translate-y-0', 'opacity-100');
    setTimeout(() => {
        cookieBanner.classList.add('hidden');
    }, 500);
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookies-accepted', 'true');
    hideCookieBanner();
});

declineCookies.addEventListener('click', () => {
    localStorage.setItem('cookies-accepted', 'false');
    hideCookieBanner();
});

// Show banner after short delay
setTimeout(showCookieBanner, 1000);

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// ESC key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

// Initialize
updateTheme();
updateContent();

// Reset forms on page load to ensure fields are empty after refresh
window.addEventListener('load', () => {
    const contactForm = document.querySelector('form[onsubmit*="handleContactSubmit"]');
    if (contactForm) {
        contactForm.reset();
    }

    // Reset newsletter input
    const newsletterInput = document.getElementById('newsletter-email');
    if (newsletterInput) {
        newsletterInput.value = '';
    }

    // Clear newsletter status
    const status = document.getElementById('newsletter-status');
    if (status) {
        status.textContent = '';
        status.classList.add('opacity-0');
        status.classList.remove('opacity-100');
    }
});
