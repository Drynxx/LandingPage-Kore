export type Language = 'en' | 'ro';

export const translations = {
    en: {
        nav: {
            brand: "Kore",
            features: "Features",
            intelligence: "Intelligence",
            docs: "Docs",
        },
        hero: {
            version: "v2.0 is now available",
            title_1: "Financial Clarity.",
            subtitle: "Smart finance tracking powered by Intelligence. \nThe most beautiful way to track your money.",
            cta_download: "Launch App",
            cta_source: "View Source",
            window_title: "Kore - Dashboard",
            menu: {
                title: "MENU",
                dashboard: "Dashboard",
                transactions: "Transactions",
                analytics: "Analytics",
                budget: "Budget",
                settings: "Settings",
                agent: "Kore Agent",
                agent_status: "Ready to help."
            },
            content: {
                greeting: "Good Evening",
                overview: "Here's your financial overview.",
                balance_label: "Total Balance",
                spending: "Spending Activity",
                categories: "Categories",
                recent: "Recent Transactions",
                merchant_1: "Apple Store",
                category_1: "Electronics"
            },
            dashboard: {
                net_balance: { label: "NET BALANCE", value: "$2,450.00" },
                income: { label: "INCOME", value: "$4,200.00" },
                expense: { label: "EXPENSE", value: "$1,750.00" },
                spending_art: { label: "Spending Art", top: "TOP", category: "Shopping" },
                daily_avg: { label: "DAILY AVERAGE", value: "$58.00", sub: "Last 30 days" },
                cash_flow: { label: "Cash Flow Oracle", sub: "Past 30 Days + AI Forecast", status: "AI Predicting..." }
            }
        },
        quote: {
            text: "“The plans of the diligent lead surely to abundance, but everyone who is hasty comes only to poverty.”",
            reference: "Proverbs 21:5"
        },
        features: {
            title: "Powerful Widgets.",
            subtitle: "Everything you need to master your finances, wrapped in a beautiful interface.",
            items: {
                agent: {
                    title: "Kore Agent",
                    desc: "Natural voice control powered by Google Gemini. Just speak to track expenses instantly."
                },
                analytics: {
                    title: "Smart Analytics",
                    desc: "Deep insights into your spending habits with beautiful, interactive visualizations."
                },
                universal: {
                    title: "Cross Platform",
                    desc: "Access your financial data anywhere. Available on web, mobile, and desktop."
                },
                privacy: {
                    title: "Privacy First",
                    desc: "Your financial data stays secure. No tracking, no ads, complete control."
                }
            }
        },
        ai: {
            powered_by: "POWERED BY GOOGLE GEMINI",
            title_prefix: "Just ask",
            title_kore: "Kore",
            subtitle: "The power of AI, integrated directly into your financial workflow. Natural language understanding that actually works.",
            search_placeholder: "How much did I spend on coffee this month?",
            result_title: "Kore Intelligence",
            result_status: "Analyzed 12 transactions",
            time_status: "Just now",
            answer_text_1: "You spent",
            answer_text_2: "$45.50",
            answer_text_3: "on coffee this month. This is",
            answer_text_4: "15% less",
            answer_text_5: "than last month—great job! ☕",

            breakdown_items: [
                { name: "Starbucks", amount: "$22.00", text: "text-gray-400" },
                { name: "Blue Bottle", amount: "$15.50", text: "text-gray-400" },
                { name: "Other", amount: "$8.00", text: "text-gray-400" }
            ]
        },
        footer: {
            brand_desc: "The intelligent finance tracker for everyone. Privacy-focused, offline-first, and stunningly beautiful.",
            col_1: "Product",
            col_2: "Community",
            links: {
                features: "Features",
                agent: "Kore Agent",
                download: "Download",
                docs: "Documentation",
                github: "GitHub",
                discord: "Discord",
                twitter: "Twitter",
                support: "Support"
            },
            copyright: "© 2025 Kore Finance Tracker. Open Source (MIT License)."
        }
    },
    ro: {
        nav: {
            brand: "Kore",
            features: "Funcționalități",
            intelligence: "Inteligență",
            docs: "Documentație",
        },
        hero: {
            version: "v2.0 este acum disponibilă",
            title_1: "Claritate Financiară.",
            subtitle: "Urmărire financiară inteligentă. \nCel mai frumos mod de a-ți urmări banii.",
            cta_download: "Lansează Aplicația",
            cta_source: "Vezi Codul Sursă",
            window_title: "Kore - Panou Control",
            menu: {
                title: "MENIU",
                dashboard: "Panou",
                transactions: "Tranzacții",
                analytics: "Analize",
                budget: "Buget",
                settings: "Setări",
                agent: "Agentul Kore",
                agent_status: "Gata să ajute."
            },
            content: {
                greeting: "Bună Seara",
                overview: "Iată imaginea de ansamblu.",
                balance_label: "Sold Total",
                spending: "Activitate Cheltuieli",
                categories: "Categorii",
                recent: "Tranzacții Recente",
                merchant_1: "Apple Store",
                category_1: "Electronice"
            },
            dashboard: {
                net_balance: { label: "BALANȚA NETĂ", value: "10.500,00 RON" },
                income: { label: "VENITURI", value: "18.500,00 RON" },
                expense: { label: "CHELTUIELI", value: "8.000,00 RON" },
                spending_art: { label: "Arta Cheltuielilor", top: "TOP", category: "Cumpărături" },
                daily_avg: { label: "MEDIA ZILNICĂ", value: "245,00 RON", sub: "Ultimele 30 zile" },
                cash_flow: { label: "Cash Flow Oracle", sub: "Ultimele 30 Zile + Predicții AI", status: "AI Predicție..." }
            }
        },
        quote: {
            text: "“Planurile omului harnic nu duc decât la belșug, dar cel ce lucrează cu grabă n-ajunge decât la lipsă.”",
            reference: "Proverbe 21:5"
        },
        features: {
            title: "Widget-uri Puternice.",
            subtitle: "Tot ce ai nevoie pentru a stăpâni finanțele, într-o interfață superbă.",
            items: {
                agent: {
                    title: "Agentul Kore",
                    desc: "Control vocal natural cu Google Gemini. Vorbește doar pentru a adăuga cheltuieli instant."
                },
                analytics: {
                    title: "Analize Inteligente",
                    desc: "Informații profunde despre obiceiurile tale de cheltuieli cu vizualizări interactive."
                },
                universal: {
                    title: "Multi Platformă",
                    desc: "Accesează datele tale financiare oriunde. Disponibil pe web, mobil și desktop."
                },
                privacy: {
                    title: "Confidențialitate",
                    desc: "Datele tale rămân în siguranță. Fără urmărire, fără reclame, control total."
                }
            }
        },
        ai: {
            powered_by: "SUSȚINUT DE GOOGLE GEMINI",
            title_prefix: "Doar întreabă-l pe",
            title_kore: "Kore",
            subtitle: "Puterea AI, integrată direct în fluxul tău financiar. Înțelegere a limbajului natural care chiar funcționează.",
            search_placeholder: "Cât am cheltuit pe cafea luna asta?",
            result_title: "Inteligența Kore",
            result_status: "12 tranzacții analizate",
            time_status: "Chiar acum",
            answer_text_1: "Ai cheltuit",
            answer_text_2: "215.00 RON",
            answer_text_3: "pe cafea luna asta. Asta este cu",
            answer_text_4: "15% mai puțin",
            answer_text_5: "decât luna trecută—felicitări! ☕",
            breakdown_items: [
                { name: "Starbucks", amount: "105.00 RON", text: "text-gray-400" },
                { name: "Blue Bottle", amount: "75.00 RON", text: "text-gray-400" },
                { name: "Altele", amount: "35.00 RON", text: "text-gray-400" }
            ]
        },
        footer: {
            brand_desc: "Tracker-ul financiar inteligent pentru toată lumea. Privat, offline-first și absolut superb.",
            col_1: "Produs",
            col_2: "Comunitate",
            links: {
                features: "Funcționalități",
                agent: "Agentul Kore",
                download: "Descarcă",
                docs: "Documentație",
                github: "GitHub",
                discord: "Discord",
                twitter: "Twitter",
                support: "Suport"
            },
            copyright: "© 2025 Kore Finance Tracker. Open Source (Licența MIT)."
        }
    }
};
