/**
 * Packages and Solutions Data by State
 * Add/edit package information for each state here
 */

const statePackages = {
    // Northeast
    "NY": {
        state: "New York",
        packages: [
            {
                name: "Starter Package",
                badge: "Popular",
                description: "Perfect for small businesses and startups",
                features: ["Basic Setup", "5 Team Members", "Email Support"],
                price: 299,
                period: "/month",
                bookUrl: "https://example.com/book?state=NY&package=starter"
            },
            {
                name: "Professional Package",
                badge: "Best Value",
                description: "Ideal for growing businesses",
                features: ["Advanced Features", "20 Team Members", "Priority Support", "Analytics Dashboard"],
                price: 799,
                period: "/month",
                bookUrl: "https://example.com/book?state=NY&package=professional"
            },
            {
                name: "Enterprise Package",
                badge: "Premium",
                description: "Custom solutions for large organizations",
                features: ["Unlimited Features", "Unlimited Team", "24/7 Support", "Custom Integration"],
                price: 2499,
                period: "/month",
                bookUrl: "https://example.com/book?state=NY&package=enterprise"
            }
        ]
    },
    "CA": {
        state: "California",
        packages: [
            {
                name: "Startup Bundle",
                badge: "New",
                description: "Designed for tech startups",
                features: ["Core Features", "10 Team Members", "Community Support"],
                price: 199,
                period: "/month",
                bookUrl: "https://example.com/book?state=CA&package=startup"
            },
            {
                name: "Growth Package",
                badge: "Popular",
                description: "For scaling companies",
                features: ["Advanced Analytics", "50 Team Members", "Dedicated Support", "API Access"],
                price: 1299,
                period: "/month",
                bookUrl: "https://example.com/book?state=CA&package=growth"
            },
            {
                name: "Elite Package",
                badge: "Premium",
                description: "Maximum performance and customization",
                features: ["Full Customization", "Unlimited Users", "Premium Support", "White Label"],
                price: 3999,
                period: "/month",
                bookUrl: "https://example.com/book?state=CA&package=elite"
            }
        ]
    },
    "TX": {
        state: "Texas",
        packages: [
            {
                name: "Essential Plan",
                badge: "Entry Level",
                description: "Core solutions for businesses",
                features: ["Essential Features", "8 Team Members", "Email Support"],
                price: 249,
                period: "/month",
                bookUrl: "https://example.com/book?state=TX&package=essential"
            },
            {
                name: "Business Plan",
                badge: "Popular",
                description: "Comprehensive business solutions",
                features: ["Advanced Tools", "30 Team Members", "Phone Support", "Reports"],
                price: 899,
                period: "/month",
                bookUrl: "https://example.com/book?state=TX&package=business"
            },
            {
                name: "Premier Plan",
                badge: "Premium",
                description: "Premium services and support",
                features: ["Premium Features", "Unlimited Access", "VIP Support", "Consulting"],
                price: 2999,
                period: "/month",
                bookUrl: "https://example.com/book?state=TX&package=premier"
            }
        ]
    },
    "FL": {
        state: "Florida",
        packages: [
            {
                name: "Quick Start",
                badge: "Beginner",
                description: "Get started quickly with basics",
                features: ["Basic Setup", "3 Team Members", "Standard Support"],
                price: 149,
                period: "/month",
                bookUrl: "https://example.com/book?state=FL&package=quickstart"
            },
            {
                name: "Standard Package",
                badge: "Popular",
                description: "Most popular choice for businesses",
                features: ["Standard Features", "15 Team Members", "Email Support", "Mobile App"],
                price: 599,
                period: "/month",
                bookUrl: "https://example.com/book?state=FL&package=standard"
            },
            {
                name: "Premium Plus",
                badge: "Premium",
                description: "Ultimate premium experience",
                features: ["All Features", "Unlimited Members", "24/7 Support", "Custom Features"],
                price: 2199,
                period: "/month",
                bookUrl: "https://example.com/book?state=FL&package=premiumplus"
            }
        ]
    },
    "PA": {
        state: "Pennsylvania",
        packages: [
            {
                name: "Starter",
                badge: "New",
                description: "Perfect starting point",
                features: ["Core Features", "5 Users", "Community Support"],
                price: 199,
                period: "/month",
                bookUrl: "https://example.com/book?state=PA&package=starter"
            },
            {
                name: "Professional",
                badge: "Best Value",
                description: "Most comprehensive package",
                features: ["Pro Features", "25 Users", "Priority Support", "Training"],
                price: 699,
                period: "/month",
                bookUrl: "https://example.com/book?state=PA&package=professional"
            },
            {
                name: "Enterprise",
                badge: "Premium",
                description: "Enterprise-grade solutions",
                features: ["Enterprise Features", "Unlimited Users", "Dedicated Support", "SLA"],
                price: 2499,
                period: "/month",
                bookUrl: "https://example.com/book?state=PA&package=enterprise"
            }
        ]
    },
    "IL": {
        state: "Illinois",
        packages: [
            {
                name: "Basic Plan",
                badge: "Entry",
                description: "Affordable basic solution",
                features: ["Basic Tools", "7 Team Members", "Email Support"],
                price: 179,
                period: "/month",
                bookUrl: "https://example.com/book?state=IL&package=basic"
            },
            {
                name: "Advanced Plan",
                badge: "Popular",
                description: "Advanced features and tools",
                features: ["Advanced Tools", "35 Team Members", "Priority Support", "Analytics"],
                price: 999,
                period: "/month",
                bookUrl: "https://example.com/book?state=IL&package=advanced"
            },
            {
                name: "Unlimited Plan",
                badge: "Premium",
                description: "Everything you need",
                features: ["Unlimited Tools", "Unlimited Team", "Premium Support", "Integration"],
                price: 3499,
                period: "/month",
                bookUrl: "https://example.com/book?state=IL&package=unlimited"
            }
        ]
    },
    "OH": {
        state: "Ohio",
        packages: [
            {
                name: "Standard",
                badge: "Popular",
                description: "Standard business package",
                features: ["Standard Features", "12 Users", "Email Support", "Dashboard"],
                price: 349,
                period: "/month",
                bookUrl: "https://example.com/book?state=OH&package=standard"
            },
            {
                name: "Professional",
                badge: "Best Value",
                description: "Professional-grade package",
                features: ["Pro Features", "40 Users", "Phone Support", "API Access"],
                price: 849,
                period: "/month",
                bookUrl: "https://example.com/book?state=OH&package=professional"
            },
            {
                name: "Elite",
                badge: "Premium",
                description: "Elite enterprise package",
                features: ["Elite Features", "Unlimited", "24/7 Support", "Custom Dev"],
                price: 2799,
                period: "/month",
                bookUrl: "https://example.com/book?state=OH&package=elite"
            }
        ]
    },
    "MI": {
        state: "Michigan",
        packages: [
            {
                name: "Starter",
                badge: "New",
                description: "New business starter",
                features: ["Starter Tools", "5 Members", "Community Support"],
                price: 229,
                period: "/month",
                bookUrl: "https://example.com/book?state=MI&package=starter"
            },
            {
                name: "Business",
                badge: "Popular",
                description: "Full business package",
                features: ["Business Tools", "20 Members", "Email Support", "Reports"],
                price: 729,
                period: "/month",
                bookUrl: "https://example.com/book?state=MI&package=business"
            },
            {
                name: "Enterprise",
                badge: "Premium",
                description: "Enterprise solution",
                features: ["Enterprise Tools", "Unlimited", "Premium Support", "Consulting"],
                price: 2299,
                period: "/month",
                bookUrl: "https://example.com/book?state=MI&package=enterprise"
            }
        ]
    },
    // Add more states as needed following the same format
    // You can also use a default package structure for states without specific packages
    "default": {
        packages: [
            {
                name: "Standard Package",
                badge: "Popular",
                description: "Professional solution for your business",
                features: ["Core Features", "15 Team Members", "Email Support"],
                price: 499,
                period: "/month",
                bookUrl: "https://example.com/book?package=standard"
            },
            {
                name: "Premium Package",
                badge: "Best Value",
                description: "Enhanced features and support",
                features: ["Premium Features", "50 Team Members", "Priority Support", "Analytics"],
                price: 999,
                period: "/month",
                bookUrl: "https://example.com/book?package=premium"
            },
            {
                name: "Enterprise Package",
                badge: "Premium",
                description: "Full enterprise solutions",
                features: ["All Features", "Unlimited Team", "24/7 Support", "Custom Solutions"],
                price: 2499,
                period: "/month",
                bookUrl: "https://example.com/book?package=enterprise"
            }
        ]
    }
};