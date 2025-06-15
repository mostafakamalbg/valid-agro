// script.js

// ভাষা ডেটা
const translations = {
    bn: {
        // Shared
        company_name_header: "Valid Agro Products LTD",
        home_page_title: "Valid Agro Products LTD - হোম",
        products_page_title: "Valid Agro Products LTD - পণ্য",
        manufacturing_page_title: "Valid Agro Products LTD - উৎপাদন কেন্দ্র",
        news_media_page_title: "Valid Agro Products LTD - খবর ও মিডিয়া",
        career_page_title: "Valid Agro Products LTD - ক্যারিয়ার",
        contact_page_title: "Valid Agro Products LTD - যোগাযোগ",
        nav_home: "হোম",
        nav_products: "পণ্য",
        nav_products_seeds: "বীজ",
        nav_products_fertilizers: "সার",
        nav_products_pesticides: "কীটনাশক",
        nav_manufacturing: "উৎপাদন কেন্দ্র",
        nav_news_media: "খবর ও মিডিয়া",
        nav_career: "ক্যারিয়ার",
        nav_contact: "যোগাযোগ",
        footer_quick_links_title: "গুরুত্বপূর্ণ লিংক",
        footer_contact_title: "যোগাযোগ",
        footer_address: "ঠিকানা: নাদুরপুকুর, শাহজাহানপুর, বগুড়া।",
        footer_phone: "ফোন: +880 1713-736920",
        footer_email: "ইমেল: validagrolimited@gmail.com",
        footer_copyright: "&copy; <span id=\"current-year\"></span> Valid Agro Products LTD. সর্বস্বত্ব সংরক্ষিত।",
        footer_slogan: "কৃষিক্ষেত্রে উদ্ভাবনী সমাধান প্রদানে প্রতিশ্রুতিবদ্ধ।",
        
        // Home Page Specific
        hero_title: "Valid Agro Products LTD",
        hero_subtitle: "সবুজ ভবিষ্যতের জন্য আপনার সঙ্গী",
        hero_button: "আমাদের পণ্য দেখুন",
        about_us_title: "আমাদের সম্পর্কে",
        about_us_paragraph_1: "Valid Agro Products LTD কৃষিক্ষেত্রে উদ্ভাবনী সমাধান প্রদানে প্রতিশ্রুতিবদ্ধ। আমরা উন্নত মানের বীজ, সার এবং কীটনাশক সরবরাহ করে কৃষকদের উৎপাদনশীলতা এবং ফসলের মান বৃদ্ধিতে সহায়তা করি।",
        about_us_paragraph_2: "আমাদের লক্ষ্য হল পরিবেশের ভারসাম্য বজায় রেখে টেকসই কৃষি অনুশীলনকে উৎসাহিত করা। আমরা গবেষণা ও উন্নয়নে বিনিয়োগ করি যাতে আমাদের পণ্যগুলো কৃষকদের চাহিদা মেটাতে এবং তাদের সাফল্যের অংশীদার হতে পারে।",
        about_us_paragraph_3: "আমাদের উৎপাদন কেন্দ্রগুলো আধুনিক প্রযুক্তি এবং কঠোর মান নিয়ন্ত্রণ প্রক্রিয়া অনুসরণ করে, যা আমাদের পণ্যের গুণগত মান নিশ্চিত করে।",
        our_products_title: "আমাদের পণ্য",
        product_card_seeds_title: "বীজ",
        product_card_seeds_desc: "উচ্চ ফলনশীল এবং রোগ প্রতিরোধী বিভিন্ন ধরণের বীজ।",
        product_card_fertilizers_title: "সার",
        product_card_fertilizers_desc: "মাটির উর্বরতা বৃদ্ধিতে কার্যকর বিভিন্ন জৈব ও রাসায়নিক সার।",
        product_card_pesticides_title: "কীটনাশক",
        product_card_pesticides_desc: "ফসলের ক্ষতিকারক পোকামাকড় এবং রোগ নিয়ন্ত্রণে কার্যকর সমাধান।",
        product_card_view_details: "বিস্তারিত দেখুন",
        manufacturing_plants_title: "আমাদের উৎপাদন কেন্দ্র",
        manufacturing_plant_caption: "আধুনিক প্রযুক্তিতে সমৃদ্ধ আমাদের উৎপাদন কেন্দ্র",
        learn_more_button: "আরো জানুন",

        // Products Page Specific
        products_page_main_title: "আমাদের পণ্যসমূহ",
        seeds_section_title: "বীজ",
        seeds_product_1_title: "উন্নত মানের গম বীজ",
        seeds_product_1_desc: "উচ্চ ফলনশীল এবং রোগ প্রতিরোধী গম বীজ, যা বাংলাদেশের আবহাওয়ার জন্য উপযুক্ত।",
        seeds_product_2_title: "বিশেষ ধান বীজ",
        seeds_product_2_desc: "স্বল্পকালীন এবং উচ্চ ফলনশীল বিভিন্ন জাতের ধান বীজ।",
        seeds_product_3_title: "বিভিন্ন প্রকার সবজি বীজ",
        seeds_product_3_desc: "সতেজ এবং পুষ্টিকর সবজি উৎপাদনে সহায়ক।",
        fertilizers_section_title: "সার",
        fertilizers_product_1_title: "জৈব সার",
        fertilizers_product_1_desc: "মাটির স্বাস্থ্য ও উর্বরতা বৃদ্ধিতে প্রাকৃতিক সমাধান।",
        fertilizers_product_2_title: "রাসায়নিক সার",
        fertilizers_product_2_desc: "ফসলের পুষ্টি চাহিদা পূরণে উন্নত রাসায়নিক ফর্মুলা।",
        pesticides_section_title: "কীটনাশক",
        pesticides_product_1_title: "ফসলের জন্য কীটনাশক",
        pesticides_product_1_desc: "বিভিন্ন ক্ষতিকারক পোকামাকড় নিয়ন্ত্রণে কার্যকর।",
        pesticides_product_2_title: "ছত্রাকনাশক",
        pesticides_product_2_desc: "ফসলকে ছত্রাকজনিত রোগ থেকে রক্ষা করে।",

        // Manufacturing Page Specific
        manufacturing_page_main_title: "আমাদের উৎপাদন কেন্দ্র",
        manufacturing_page_intro: "Valid Agro Products LTD এর অত্যাধুনিক উৎপাদন কেন্দ্রগুলো উন্নত প্রযুক্তি এবং কঠোর মান নিয়ন্ত্রণ প্রক্রিয়া ব্যবহার করে। আমরা আন্তর্জাতিক মানের পণ্য উৎপাদনে অঙ্গীকারবদ্ধ।",
        plant_1_title: "কেন্দ্র ১: আধুনিক প্রযুক্তি ও স্বয়ংক্রিয় প্রক্রিয়া",
        plant_1_desc_1: "আমাদের প্রধান উৎপাদন কেন্দ্রটি স্বয়ংক্রিয় মেশিনারি এবং পরিবেশ-বান্ধব প্রযুক্তি ব্যবহার করে। এখানে বীজ প্রক্রিয়াকরণ এবং সার উৎপাদনের আধুনিক সুবিধা রয়েছে।",
        plant_1_desc_2: "আমরা উৎপাদনের প্রতিটি ধাপে গুণগত মান বজায় রাখি এবং নিশ্চিত করি যে প্রতিটি পণ্য সর্বোচ্চ মানের হয়।",
        plant_2_title: "কেন্দ্র ২: গবেষণা ও উন্নয়ন",
        plant_2_desc_1: "আমাদের দ্বিতীয় কেন্দ্রে গবেষণা ও উন্নয়নের উপর বিশেষ জোর দেওয়া হয়। এখানে নতুন পণ্য এবং উন্নত উৎপাদন পদ্ধতির উদ্ভাবন করা হয়।",
        plant_2_desc_2: "আমাদের অভিজ্ঞ বিজ্ঞানী এবং গবেষকদের দল কৃষকদের চাহিদা পূরণের জন্য নিরন্তর কাজ করে যাচ্ছে।",
        contact_us_button: "আমাদের সাথে যোগাযোগ করুন",

        // News & Media Page Specific
        news_media_page_main_title: "খবর ও মিডিয়া",
        news_1_title: "কৃষি খাতে নতুন উদ্ভাবন",
        news_1_date: "প্রকাশিত: জুন ১০, ২০২৪",
        news_1_desc: "আমাদের নতুন গবেষণা দলের মাধ্যমে কৃষি খাতে একটি যুগান্তকারী উদ্ভাবন আনা হয়েছে, যা ফসলের ফলন উল্লেখযোগ্যভাবে বৃদ্ধি করবে।",
        news_2_title: "স্থানীয় কৃষকদের প্রশিক্ষণ কর্মসূচি",
        news_2_date: "প্রকাশিত: মে ২৫, ২০২৪",
        news_2_desc: "Valid Agro Products LTD স্থানীয় কৃষকদের জন্য একটি বিশেষ প্রশিক্ষণ কর্মসূচির আয়োজন করেছে, যেখানে আধুনিক কৃষি পদ্ধতির উপর আলোকপাত করা হয়।",
        news_3_title: "পরিবেশবান্ধব সার উৎপাদন",
        news_3_date: "প্রকাশিত: এপ্রিল ২০, ২০২৪",
        news_3_desc: "পরিবেশের সুরক্ষায় প্রতিশ্রুতিবদ্ধ হয়ে আমরা নতুন একটি পরিবেশবান্ধব সার উৎপাদন প্রক্রিয়া শুরু করেছি।",
        read_more_button: "বিস্তারিত পড়ুন",

        // Career Page Specific
        career_page_main_title: "ক্যারিয়ার",
        career_page_intro: "Valid Agro Products LTD-এ আমরা প্রতিভাবান এবং নিবেদিতপ্রাণ ব্যক্তিদের খুঁজছি, যারা কৃষি খাতে অবদান রাখতে আগ্রহী। আমাদের দলে যোগ দিন এবং সবুজ ভবিষ্যতের অংশীদার হন!",
        job_title_1: "কৃষি বিজ্ঞানী",
        job_desc_1: "আমাদের গবেষণা ও উন্নয়ন বিভাগে কৃষি বিজ্ঞানী পদে নতুনদের খুঁজছি। কৃষি বিজ্ঞান বা সংশ্লিষ্ট বিষয়ে স্নাতক/স্নাতকোত্তর ডিগ্রী এবং ২-৩ বছরের অভিজ্ঞতা প্রয়োজন।",
        job_location_1: "স্থান: ঢাকা, বাংলাদেশ",
        job_type_1: "পূর্ণকালীন",
        job_title_2: "বিক্রয় প্রতিনিধি",
        job_desc_2: "আমাদের বিক্রয় বিভাগে অভিজ্ঞ বিক্রয় প্রতিনিধি খুঁজছি। কৃষি পণ্যের বিক্রয় ও বিপণনে অভিজ্ঞতা সম্পন্ন প্রার্থীদের অগ্রাধিকার দেওয়া হবে।",
        job_location_2: "স্থান: সারা বাংলাদেশ",
        job_type_2: "পূর্ণকালীন",
        job_title_3: "উৎপাদন প্রকৌশলী",
        job_desc_3: "আমাদের উৎপাদন কেন্দ্রে একজন উৎপাদন প্রকৌশলী প্রয়োজন। কেমিক্যাল ইঞ্জিনিয়ারিং বা সংশ্লিষ্ট বিষয়ে ডিগ্রী এবং উৎপাদন খাতে অভিজ্ঞতা থাকতে হবে।",
        job_location_3: "স্থান: সাভার, ঢাকা",
        job_type_3: "পূর্ণকালীন",
        apply_button: "আবেদন করুন",
        join_us_section_title: "আমাদের দলে যোগ দিন",
        join_us_section_desc: "আপনার সিভি এবং কভার লেটার আমাদের ইমেল ঠিকানায় পাঠান বা নিচের ফর্মটি পূরণ করুন।",
        apply_now_button: "এখনই আবেদন করুন",

        // Contact Page Specific
        contact_page_main_title: "আমাদের সাথে যোগাযোগ করুন",
        contact_info_title: "যোগাযোগের তথ্য",
        contact_address: "ঠিকানা: নাদুরপুকুর, শাহজাহানপুর, বগুড়া।",
        contact_phone: "ফোন: +880 1713-736920",
        contact_email: "ইমেল:",
        contact_hours: "কার্যকাল: রবি-বৃহস্পতি: সকাল ৯টা - বিকাল ৫টা",
        social_media_title: "সামাজিক মাধ্যম",
        send_message_title: "আমাদের কাছে বার্তা পাঠান",
        form_name_label: "আপনার নাম",
        form_name_placeholder: "আপনার পুরো নাম লিখুন",
        form_email_label: "আপনার ইমেল",
        form_email_placeholder: "আপনার ইমেল ঠিকানা লিখুন",
        form_subject_label: "বিষয়",
        form_subject_placeholder: "বার্তার বিষয়",
        form_message_label: "আপনার বার্তা",
        form_message_placeholder: "এখানে আপনার বার্তা লিখুন",
        send_message_button: "বার্তা পাঠান",
        our_location_title: "আমাদের অবস্থান",
    },
    en: {
        // Shared
        company_name_header: "Valid Agro Products LTD",
        home_page_title: "Valid Agro Products LTD - Home",
        products_page_title: "Valid Agro Products LTD - Products",
        manufacturing_page_title: "Valid Agro Products LTD - Manufacturing Plants",
        news_media_page_title: "Valid Agro Products LTD - News & Media",
        career_page_title: "Valid Agro Products LTD - Career",
        contact_page_title: "Valid Agro Products LTD - Contact",
        nav_home: "Home",
        nav_products: "Products",
        nav_products_seeds: "Seeds",
        nav_products_fertilizers: "Fertilizers",
        nav_products_pesticides: "Pesticides",
        nav_manufacturing: "Manufacturing Plants",
        nav_news_media: "News & Media",
        nav_career: "Career",
        nav_contact: "Contact",
        footer_quick_links_title: "Quick Links",
        footer_contact_title: "Contact",
        footer_address: "Address: Nadurpukur, Shahjahanpur, Bogura.",
        footer_phone: "Phone: +880 1713-736920",
        footer_email: "Email: validagrolimited@gmail.com",
        footer_copyright: "&copy; <span id=\"current-year\"></span> Valid Agro Products LTD. All Rights Reserved.",
        footer_slogan: "Your Partner for a Green Future.",

        // Home Page Specific
        hero_title: "Valid Agro Products LTD",
        hero_subtitle: "Your Partner for a Green Future",
        hero_button: "View Our Products",
        about_us_title: "About Us",
        about_us_paragraph_1: "Valid Agro Products LTD is committed to providing innovative solutions in the agricultural sector. We help farmers increase productivity and crop quality by supplying high-quality seeds, fertilizers, and pesticides.",
        about_us_paragraph_2: "Our goal is to promote sustainable agricultural practices while maintaining ecological balance. We invest in research and development so that our products can meet the needs of farmers and be partners in their success.",
        about_us_paragraph_3: "Our manufacturing plants follow modern technology and strict quality control processes, ensuring the highest quality of our products.",
        our_products_title: "Our Products",
        product_card_seeds_title: "Seeds",
        product_card_seeds_desc: "High-yielding and disease-resistant varieties of seeds.",
        product_card_fertilizers_title: "Fertilizers",
        product_card_fertilizers_desc: "Effective organic and chemical fertilizers to increase soil fertility.",
        product_card_pesticides_title: "Pesticides",
        product_card_pesticides_desc: "Effective solutions for controlling harmful insects and diseases in crops.",
        product_card_view_details: "View Details",
        manufacturing_plants_title: "Our Manufacturing Plants",
        manufacturing_plant_caption: "Our Manufacturing Plants Enriched with Modern Technology",
        learn_more_button: "Learn More",

        // Products Page Specific
        products_page_main_title: "Our Products",
        seeds_section_title: "Seeds",
        seeds_product_1_title: "High-Quality Wheat Seeds",
        seeds_product_1_desc: "High-yielding and disease-resistant wheat seeds suitable for Bangladesh's climate.",
        seeds_product_2_title: "Special Rice Seeds",
        seeds_product_2_desc: "Short-duration and high-yielding varieties of rice seeds.",
        seeds_product_3_title: "Various Vegetable Seeds",
        seeds_product_3_desc: "Help produce fresh and nutritious vegetables.",
        fertilizers_section_title: "Fertilizers",
        fertilizers_product_1_title: "Organic Fertilizers",
        fertilizers_product_1_desc: "Natural solutions to improve soil health and fertility.",
        fertilizers_product_2_title: "Chemical Fertilizers",
        fertilizers_product_2_desc: "Advanced chemical formulas to meet crop nutritional needs.",
        pesticides_section_title: "Pesticides",
        pesticides_product_1_title: "Pesticides for Crops",
        pesticides_product_1_desc: "Effective in controlling various harmful insects.",
        pesticides_product_2_title: "Fungicides",
        pesticides_product_2_desc: "Protect crops from fungal diseases.",

        // Manufacturing Page Specific
        manufacturing_page_main_title: "Our Manufacturing Plants",
        manufacturing_page_intro: "Valid Agro Products LTD's state-of-the-art manufacturing plants use advanced technology and strict quality control processes. We are committed to producing international standard products.",
        plant_1_title: "Plant 1: Modern Technology & Automated Processes",
        plant_1_desc_1: "Our main manufacturing plant uses automated machinery and eco-friendly technology. It has modern facilities for seed processing and fertilizer production.",
        plant_1_desc_2: "We maintain quality at every stage of production and ensure that every product is of the highest standard.",
        plant_2_title: "Plant 2: Research & Development",
        plant_2_desc_1: "Our second plant focuses heavily on research and development. New products and improved production methods are innovated here.",
        plant_2_desc_2: "Our team of experienced scientists and researchers works tirelessly to meet the needs of farmers.",
        contact_us_button: "Contact Us",

        // News & Media Page Specific
        news_media_page_main_title: "News & Media",
        news_1_title: "New Innovations in Agriculture",
        news_1_date: "Published: June 10, 2024",
        news_1_desc: "A groundbreaking innovation has been brought to the agricultural sector through our new research team, which will significantly increase crop yield.",
        news_2_title: "Local Farmer Training Program",
        news_2_date: "Published: May 25, 2024",
        news_2_desc: "Valid Agro Products LTD has organized a special training program for local farmers, focusing on modern agricultural methods.",
        news_3_title: "Eco-Friendly Fertilizer Production",
        news_3_date: "Published: April 20, 2024",
        news_3_desc: "Committed to environmental protection, we have started a new eco-friendly fertilizer production process.",
        read_more_button: "Read More",

        // Career Page Specific
        career_page_main_title: "Career",
        career_page_intro: "At Valid Agro Products LTD, we are looking for talented and dedicated individuals who are eager to contribute to the agricultural sector. Join our team and be a part of a green future!",
        job_title_1: "Agricultural Scientist",
        job_desc_1: "We are looking for new agricultural scientists in our Research & Development department. A graduate/post-graduate degree in agricultural science or a related field and 2-3 years of experience are required.",
        job_location_1: "Location: Dhaka, Bangladesh",
        job_type_1: "Full-time",
        job_title_2: "Sales Representative",
        job_desc_2: "We are looking for experienced sales representatives in our sales department. Candidates with experience in sales and marketing of agricultural products will be given preference.",
        job_location_2: "Location: All over Bangladesh",
        job_type_2: "Full-time",
        job_title_3: "Production Engineer",
        job_desc_3: "A Production Engineer is required at our production plant. A degree in Chemical Engineering or a related field and experience in the production sector are required.",
        job_location_3: "Location: Savar, Dhaka",
        job_type_3: "Full-time",
        apply_button: "Apply",
        join_us_section_title: "Join Our Team",
        join_us_section_desc: "Send your CV and cover letter to our email address or fill out the form below.",
        apply_now_button: "Apply Now",

        // Contact Page Specific
        contact_page_main_title: "Contact Us",
        contact_info_title: "Contact Information",
        contact_address: "Address: Nadurpukur, Shahjahanpur, Bogura.",
        contact_phone: "Phone: +880 1713-736920",
        contact_email: "Email:",
        contact_hours: "Working Hours: Sun-Thu: 9 AM - 5 PM",
        social_media_title: "Social Media",
        send_message_title: "Send Us a Message",
        form_name_label: "Your Name",
        form_name_placeholder: "Enter your full name",
        form_email_label: "Your Email",
        form_email_placeholder: "Enter your email address",
        form_subject_label: "Subject",
        form_subject_placeholder: "Subject of your message",
        form_message_label: "Your Message",
        form_message_placeholder: "Write your message here",
        send_message_button: "Send Message",
        our_location_title: "Our Location",
    }
};

let currentLang = localStorage.getItem('lang') || 'bn'; // Default to Bengali

function setLanguage(lang) {
    // Update the lang attribute of the html tag
    document.documentElement.lang = lang;

    // Update current language display in the header
    const currentLanguageSpan = document.getElementById('current-language');
    if (currentLanguageSpan) {
        currentLanguageSpan.textContent = lang === 'bn' ? 'বাংলা' : 'English';
    }

    // Update all elements with data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            // Special handling for elements that contain HTML (like footer_copyright)
            if (key === 'footer_copyright') {
                // Preserve the inner span for current year. This is a common pattern for footers.
                // We use a regex to replace any existing year span (e.g., <span id="current-year">2023</span>)
                // with a new empty span, then JavaScript will populate the year.
                const yearSpanRegex = /<span id="current-year(?:-products|-manufacturing|-news|-career|-contact)?"><\/span>/g;
                element.innerHTML = translations[lang][key].replace(yearSpanRegex, `<span id="current-year${element.id.includes('products') ? '-products' : element.id.includes('manufacturing') ? '-manufacturing' : element.id.includes('news') ? '-news' : element.id.includes('career') ? '-career' : element.id.includes('contact') ? '-contact' : ''}"></span>`);
            } else if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // For input/textarea elements, update placeholder
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                // For other text content elements, update textContent
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update page title (special handling as it's outside body and relies on data-lang-key on the <title> tag itself)
    const pageTitleElement = document.querySelector('title');
    if (pageTitleElement) {
        const titleKey = pageTitleElement.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][titleKey]) {
            pageTitleElement.textContent = translations[lang][titleKey];
        }
    }

    // Update specific footer year spans (these IDs might differ across pages)
    // This loop should run after the innerHTML updates above, to ensure the spans exist.
    const yearSpans = ['current-year', 'current-year-products', 'current-year-manufacturing', 'current-year-news', 'current-year-career', 'current-year-contact'];
    yearSpans.forEach(id => {
        const span = document.getElementById(id);
        if (span) {
            span.textContent = new Date().getFullYear();
        }
    });

    // Store preferred language in local storage
    localStorage.setItem('lang', lang);
}


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileProductsToggle = document.getElementById('mobile-products-toggle');
    const mobileProductsSubmenu = document.getElementById('mobile-products-submenu');
    const languageMenuButton = document.getElementById('language-menu-button');
    const languageMenu = document.getElementById('language-menu');
    const langBnOption = document.getElementById('lang-bn');
    const langEnOption = document.getElementById('lang-en');

    // Set initial language on page load
    setLanguage(currentLang);

    // Mobile menu toggle functionality
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
            // Update aria-expanded for accessibility
            const isHidden = mobileNav.classList.contains('hidden');
            menuToggle.setAttribute('aria-expanded', !isHidden);
        });
    }

    // Mobile products submenu toggle functionality
    if (mobileProductsToggle && mobileProductsSubmenu) {
        mobileProductsToggle.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            mobileProductsSubmenu.classList.toggle('hidden');
        });
    }

    // Language menu toggle functionality
    if (languageMenuButton && languageMenu) {
        languageMenuButton.addEventListener('click', function() {
            const isHidden = languageMenu.classList.contains('hidden');
            languageMenu.classList.toggle('hidden');
            languageMenuButton.setAttribute('aria-expanded', isHidden ? 'true' : 'false'); // Toggle aria-expanded
        });

        // Close language menu if clicked outside
        document.addEventListener('click', function(event) {
            if (!languageMenuButton.contains(event.target) && !languageMenu.contains(event.target)) {
                if (!languageMenu.classList.contains('hidden')) {
                    languageMenu.classList.add('hidden');
                    languageMenuButton.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Language selection
        if (langBnOption) {
            langBnOption.addEventListener('click', function(e) {
                e.preventDefault();
                setLanguage('bn');
                languageMenu.classList.add('hidden'); // Hide menu after selection
                languageMenuButton.setAttribute('aria-expanded', 'false');
            });
        }

        if (langEnOption) {
            langEnOption.addEventListener('click', function(e) {
                e.preventDefault();
                setLanguage('en');
                languageMenu.classList.add('hidden'); // Hide menu after selection
                languageMenuButton.setAttribute('aria-expanded', 'false');
            });
        }
    }

    // Hide mobile menu and submenus on resize if desktop view
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) { // lg breakpoint in Tailwind CSS
            if (mobileNav && !mobileNav.classList.contains('hidden')) {
                mobileNav.classList.add('hidden');
                menuToggle.setAttribute('aria-expanded', 'false'); // Reset aria-expanded
            }
            if (mobileProductsSubmenu && !mobileProductsSubmenu.classList.contains('hidden')) {
                mobileProductsSubmenu.classList.add('hidden');
            }
            if (languageMenu && !languageMenu.classList.contains('hidden')) {
                languageMenu.classList.add('hidden');
                languageMenuButton.setAttribute('aria-expanded', 'false'); // Reset aria-expanded
            }
        }
    });
});

