// 引入i18next库
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/i18next@21.6.10/dist/umd/i18next.min.js';
script.onload = initializeI18n;
document.head.appendChild(script);

// 翻译资源
const resources = {
    en: {
        translation: {
            // 导航
            'nav.home': 'Home',
            'nav.blog': 'Blog',
            'nav.faq': 'FAQ',
            'nav.about': 'About',
            'nav.feedback': 'Feedback',
            
            // 页面标题
            'page.title.home': 'Home - AddressGen',
            'page.title.blog': 'Blog - AddressGen',
            'page.title.faq': 'FAQ - AddressGen',
            'page.title.about': 'About - AddressGen',
            'page.title.feedback': 'Feedback - AddressGen',
            
            // 博客页面
            'blog.title': 'Blog - AddressGen',
            'blog.header.title': 'AddressGen Blog',
            'blog.header.subtitle': 'Get the latest news, tips, and insights about address generation, data privacy, and identity management.',
            'blog.featured': 'Featured',
            'blog.guide': 'Guide',
            'blog.security': 'Security',
            'blog.region': 'Region',
            'blog.development': 'Development',
            'blog.readMore': 'Read More',
            'blog.readFull': 'Read Full Article',
            'blog.minutesRead': 'minutes read',
            'blog.dataPrivacy': 'Data Privacy',
            'blog.whyDataPrivacyMatters': 'Why Data Privacy Matters in Address Generation',
            'blog.dataPrivacyDesc': 'In today\'s digital world, protecting personal information is more important than ever. Learn how to use randomly generated addresses to protect your privacy during testing and development.',
            'blog.ukAddressFormat': 'Understanding UK Address Format',
            'blog.ukAddressFormatDesc': 'A comprehensive guide to UK address structure, postal codes, and regional variations for generating accurate addresses.',
            'blog.creditCardGeneration': 'Credit Card Number Generation: How It Works',
            'blog.creditCardGenerationDesc': 'Learn about the Luhn algorithm and how our system generates valid but fictional credit card numbers for testing purposes.',
            'blog.hkAddressSystem': 'Hong Kong Address System Explained',
            'blog.hkAddressSystemDesc': 'Explore the unique characteristics of Hong Kong addresses and how our generator creates authentic-looking examples.',
            'blog.testingBestPractices': 'Best Practices for Using Generated Data in Testing',
            'blog.testingBestPracticesDesc': 'Tips and strategies for effectively using randomly generated address information in your software testing workflow.',
            'blog.pagination': 'Pagination',
            'blog.previousPage': 'Previous Page',
            'blog.nextPage': 'Next Page',
            'blog.search': 'Search',
            'blog.searchPlaceholder': 'Search articles...',
            'blog.categories': 'Categories',
            'blog.popularArticles': 'Popular Articles',
            'blog.usAddressGuide': 'US Address Format Guide',
            'blog.gdprAddressGeneration': 'GDPR and Address Generation',
            
            // Blog Categories
            'blog.categories.dataPrivacy': 'Data Privacy',
            'blog.categories.addressFormat': 'Address Format',
            'blog.categories.identityGeneration': 'Identity Generation',
            'blog.categories.creditCardSecurity': 'Credit Card Security',
            'blog.categories.developmentTips': 'Development Tips',
            'blog.categories.regionGuide': 'Region Guide',
            
            // Newsletter
            'newsletter.title': 'Subscribe to Our Newsletter',
            'newsletter.subtitle': 'Get the latest articles and resources delivered straight to your inbox.',
            'newsletter.email': 'Email Address',
            'newsletter.placeholder': 'Enter your email',
            'newsletter.subscribe': 'Subscribe',
            
            // 语言
            'language': 'Language:',
            
            // 页脚
            'footer.privacy': 'Privacy Policy',
            'footer.terms': 'Terms of Service',
            'footer.copyright': '© 2023 AddressGen. All rights reserved.',
            'footer.nav.home': 'Home',
            'footer.nav.blog': 'Blog',
            'footer.nav.faq': 'FAQ',
            'footer.nav.about': 'About',
            'footer.nav.feedback': 'Feedback',

            // 首页内容
            'heroTitle': 'Generate Random Address Information',
            'heroDesc': 'Create realistic random addresses, identities, and credit card information for testing, development, or data privacy purposes.',
            'getStarted': 'Get Started',
            'learnMore': 'Learn More',
            'whyUse': 'Why Use Our Address Generator?',
            'whyUseDesc': 'Our tool provides realistic, randomly generated information for various purposes while ensuring privacy and security.',
            'privacyProtection': 'Privacy Protection',
            'privacyProtectionDesc': 'Use randomly generated information instead of real personal data for testing and development purposes.',
            'internationalSupport': 'International Support',
            'internationalSupportDesc': 'Generate address information for multiple countries including the US, UK, and Hong Kong.',
            'customizableOptions': 'Customizable Options',
            'customizableOptionsDesc': 'Select exactly what information you need, from basic address details to complete identity profiles.',

            // Address Generator Section
            'generator.title': 'Address Generator',
            'generator.country.title': 'Select Country/Region',
            'generator.state.title': 'Select State',
            'generator.city.title': 'Select City',
            'generator.quantity.title': 'Quantity',
            'generator.quantity.max': 'Maximum: 100',
            'generator.button': 'Generate Information',
            'generator.results.title': 'Generated Information',
            'generator.results.copy': 'Copy All',
            'generator.results.download': 'Download CSV',
            'generator.results.generateMore': 'Generate More',
            
            // Results Sections
            'generator.results.basicInfo': 'Basic Information',
            'generator.results.addressInfo': 'Address Information',
            'generator.results.creditCardInfo': 'Credit Card Information',
            'generator.results.employmentInfo': 'Employment Information',
            
            // Field Labels
            'generator.fields.fullName': 'Full Name',
            'generator.fields.email': 'Email',
            'generator.fields.phone': 'Phone Number',
            'generator.fields.dob': 'Date of Birth',
            'generator.fields.country': 'Country',
            'generator.fields.streetAddress': 'Street Address',
            'generator.fields.city': 'City',
            'generator.fields.stateCode': 'State Code',
            'generator.fields.stateName': 'State Name',
            'generator.fields.zipCode': 'ZIP Code',
            'generator.fields.cardType': 'Card Type',
            'generator.fields.cardNumber': 'Card Number',
            'generator.fields.cvv': 'CVV',
            'generator.fields.expiryDate': 'Expiry Date',
            'generator.fields.occupation': 'Occupation',
            'generator.fields.company': 'Company',
            'country.us': 'United States',
            'country.uk': 'United Kingdom',
            'country.hk': 'Hong Kong',

            // About Page
            'about.title': 'About AddressGen',
            'about.subtitle': 'Learn about our mission, our team, and why we created the most comprehensive address generation tool.',
            'about.our_story': 'Our Story',
            'about.story.p1': 'AddressGen was born out of necessity. As software developers, we frequently needed realistic test data for our projects, but existing solutions were either too limited, too complex, or didn\'t provide the quality of data we needed.',
            'about.story.p2': 'In 2025, our team of developers and data specialists came together to create a solution that would generate high-quality, realistic address information for multiple countries while maintaining the highest standards of privacy and security.',
            'about.story.p3': 'What started as an internal tool quickly grew into a comprehensive platform used by thousands of developers, testers, and businesses worldwide. Today, AddressGen is the go-to solution for generating realistic address and identity information for testing, development, and educational purposes.',
            'about.mission.title': 'Our Mission',
            'about.mission.subtitle': 'We believe in empowering developers and businesses with tools that make their work easier while protecting privacy and promoting best practices in data handling.',
            'about.mission.innovation.title': 'Innovation',
            'about.mission.innovation.desc': 'We continuously improve our algorithms and expand our capabilities to provide the most accurate and useful address generation service possible.',
            'about.mission.privacy.title': 'Privacy',
            'about.mission.privacy.desc': 'We\'re committed to protecting privacy by providing fictional data that helps developers avoid using real personal information in their work.',
            'about.mission.community.title': 'Community',
            'about.mission.community.desc': 'We support the developer community by providing tools that make testing and development more efficient and effective.',
            'about.testimonials.title': 'What Our Users Say',
            'about.testimonials.subtitle': 'Don\'t just take our word for it — hear from some of our satisfied users.',
            'about.testimonials.user1.name': 'Emily R.',
            'about.testimonials.user1.role': 'Software Developer',
            'about.testimonials.user1.comment': '"AddressGen has been a game-changer for our development team. We use it daily to generate test data for our e-commerce platform, and it\'s saved us countless hours of manual work."',
            'about.testimonials.user2.name': 'Marcus T.',
            'about.testimonials.user2.role': 'QA Engineer',
            'about.testimonials.user2.comment': '"The quality of the generated addresses is impressive. Everything from postal codes to street names follows the correct format for each country, which is essential for our international application testing."',
            'about.testimonials.user3.name': 'Sophia L.',
            'about.testimonials.user3.role': 'Product Manager',
            'about.testimonials.user3.comment': '"We use AddressGen for our UI prototyping and user testing. Having realistic data makes our demos much more effective and helps stakeholders visualize the final product better."',
            'about.contact.title': 'Ready to get started?',
            'about.contact.subtitle': 'Try AddressGen today.',
            'about.contact.get_started': 'Get started',
            'about.contact.contact_us': 'Contact us',

            // Feedback Page
            'feedback.title': 'Feedback - AddressGen',
            'feedback.subtitle': 'We value your feedback and suggestions. Help us improve AddressGen by sharing your thoughts.',
            'feedback.form.name': 'Name',
            'feedback.form.email': 'Email',
            'feedback.form.subject': 'Subject',
            'feedback.form.message': 'Message',
            'feedback.form.submit': 'Submit Feedback',
            'feedback.form.placeholder.name': 'Your name',
            'feedback.form.placeholder.email': 'your.email@example.com',
            'feedback.form.placeholder.subject': 'What is this regarding?',
            'feedback.form.placeholder.message': 'Tell us what you think...',
            'feedback.instructions.title': 'Feedback Submission Instructions',
            'feedback.instructions.limit': 'To prevent spam, each IP address can only submit feedback once per day',
            'feedback.instructions.complete': 'Please ensure your feedback is accurate and complete, as it cannot be modified on the same day after submission',
            'feedback.instructions.response': 'We will carefully review each feedback and respond to you as soon as possible',
            'feedback.ip.limit': 'Each IP address is limited to one feedback submission per day. Thank you for your understanding and cooperation',

            // FAQ Page
            'faq.title': 'Frequently Asked Questions',
            'faq.subtitle': 'Find answers to common questions about our address generation service.',
            'faq.categories.title': 'FAQ Categories',
            'faq.categories.general': 'General Questions',
            'faq.categories.usage': 'Usage & Features',
            'faq.categories.privacy': 'Privacy & Security',
            'faq.categories.technical': 'Technical Details',
            'faq.categories.billing': 'Billing & Pricing',
            'faq.contact.title': 'Still Have Questions?',
            'faq.contact.subtitle': 'Can\'t find the answer you\'re looking for? Please feel free to contact our customer support team.',
            'faq.contact.button': 'Contact Support',
            
            // General Questions
            'faq.questions.general.what.title': 'What is AddressGen?',
            'faq.questions.general.what.answer': 'AddressGen is a web application that generates random address information for various countries including the United States, United Kingdom, and Hong Kong. It creates realistic but fictional personal data such as addresses, names, phone numbers, email addresses, and credit card information for testing, development, or data privacy purposes.',
            'faq.questions.general.why.title': 'Why would I need to generate random addresses?',
            'faq.questions.general.why.answer': 'Random address generation is useful for various purposes:',
            'faq.questions.general.why.list.0': 'Software testing and development',
            'faq.questions.general.why.list.1': 'Database population for demos',
            'faq.questions.general.why.list.2': 'UI/UX testing with realistic data',
            'faq.questions.general.why.list.3': 'Protecting privacy by avoiding the use of real personal information',
            'faq.questions.general.why.list.4': 'Creating sample data for educational purposes',
            'faq.questions.general.why.list.5': 'Testing e-commerce checkout flows',
            'faq.questions.general.countries.title': 'Which countries are supported?',
            'faq.questions.general.countries.answer': 'Currently, AddressGen supports address generation for:',
            'faq.questions.general.countries.list.0': 'United States (including all 50 states and territories)',
            'faq.questions.general.countries.list.1': 'United Kingdom (England, Scotland, Wales, and Northern Ireland)',
            'faq.questions.general.countries.list.2': 'Hong Kong',
            'faq.questions.general.countries.note': 'We are constantly working to add more countries and regions to our service. If you need a country that is not currently supported, please let us know through our feedback page.',
            
            // Usage & Features
            'faq.questions.usage.how.title': 'How do I generate address information?',
            'faq.questions.usage.how.answer': 'Generating address information is simple:',
            'faq.questions.usage.how.steps.0': 'Select the country for which you want to generate addresses',
            'faq.questions.usage.how.steps.1': 'Choose the types of information you need (name, address, phone, email, credit card, etc.)',
            'faq.questions.usage.how.steps.2': 'Specify the number of records you want to generate (up to 100 at a time)',
            'faq.questions.usage.how.steps.3': 'Click the "Generate Information" button',
            'faq.questions.usage.how.steps.4': 'View, copy, or download the generated data',
            'faq.questions.usage.what.title': 'What information types can I generate?',
            'faq.questions.usage.what.answer': 'AddressGen can generate the following types of information:',
            'faq.questions.usage.what.list.0': 'Full names (first, middle, last)',
            'faq.questions.usage.what.list.1': 'Complete addresses (street, city, state/province, postal code)',
            'faq.questions.usage.what.list.2': 'Phone numbers (formatted according to country standards)',
            'faq.questions.usage.what.list.3': 'Email addresses',
            'faq.questions.usage.what.list.4': 'Credit card information (number, expiration date, CVV)',
            'faq.questions.usage.what.list.5': 'Date of birth',
            'faq.questions.usage.what.list.6': 'Social Security Numbers (US) or ID numbers',
            'faq.questions.usage.what.list.7': 'Occupation and company information',
            'faq.questions.usage.what.note': 'You can select exactly which information types you need for your specific use case.',
            'faq.questions.usage.download.title': 'Can I download the generated data?',
            'faq.questions.usage.download.answer': 'Yes, you can download the generated data in CSV (Comma-Separated Values) format, which can be easily imported into spreadsheet applications like Microsoft Excel or Google Sheets, as well as databases and other software systems.',
            'faq.questions.usage.download.note': 'You can also copy the generated data directly to your clipboard for immediate use in other applications.',
            
            // Privacy & Security
            'faq.questions.privacy.real.title': 'Is the generated information real?',
            'faq.questions.privacy.real.answer': 'No, all information generated by AddressGen is completely fictional. While the data follows the correct formats and conventions for each country (such as postal code patterns, phone number formats, etc.), it does not correspond to real individuals, addresses, or credit cards.',
            'faq.questions.privacy.real.note': 'Our algorithms ensure that the generated data looks realistic but does not match actual people or places, protecting privacy and preventing accidental misuse.',
            'faq.questions.privacy.valid.title': 'Are the credit card numbers valid?',
            'faq.questions.privacy.valid.answer': 'The credit card numbers generated by our system pass the Luhn algorithm check (the standard validation algorithm used by credit card companies), which means they have valid formats and check digits. However, they are not connected to actual bank accounts and cannot be used for real transactions.',
            'faq.questions.privacy.valid.note': 'These numbers are specifically designed for testing payment systems, forms, and software without using real credit card information.',
            'faq.questions.privacy.store.title': 'Do you store the generated information?',
            'faq.questions.privacy.store.answer': 'No, we do not store any of the information generated by our service. All data is created on-demand when you request it and is not saved on our servers after it\'s delivered to you.',
            'faq.questions.privacy.store.note': 'This approach ensures maximum privacy and security, as the generated data exists only on your device after generation.',
            
            // Technical Details
            'faq.questions.technical.how.title': 'How are the addresses generated?',
            'faq.questions.technical.how.answer': 'Our address generation system uses a combination of algorithms and databases of common street names, cities, states/provinces, and postal code patterns for each supported country. The system ensures that:',
            'faq.questions.technical.how.list.0': 'Street numbers are within realistic ranges',
            'faq.questions.technical.how.list.1': 'Street names sound natural and follow country-specific patterns',
            'faq.questions.technical.how.list.2': 'Cities are paired with their correct states/provinces',
            'faq.questions.technical.how.list.3': 'Postal codes match the correct format for the region',
            'faq.questions.technical.how.list.4': 'All components together form a plausible (though fictional) address',
            'faq.questions.technical.api.title': 'Is there an API available?',
            'faq.questions.technical.api.answer': 'Yes, we offer a RESTful API that allows developers to integrate our address generation capabilities directly into their applications, testing frameworks, or development environments.',
            'faq.questions.technical.api.note': 'The API supports all the same features as the web interface, including:',
            'faq.questions.technical.api.list.0': 'Selecting specific countries',
            'faq.questions.technical.api.list.1': 'Choosing which information types to generate',
            'faq.questions.technical.api.list.2': 'Generating multiple records in a single request',
            'faq.questions.technical.api.list.3': 'Receiving data in JSON or CSV format',
            'faq.questions.technical.rate.title': 'What are the rate limits?',
            'faq.questions.technical.rate.answer': 'Our service has the following rate limits:',
            'faq.questions.technical.rate.list.0': 'Web Interface: Up to 100 records per generation, with a maximum of 1,000 records per day for free users',
            'faq.questions.technical.rate.list.1': 'API - Free Tier: 100 requests per day, maximum 100 records per request',
            'faq.questions.technical.rate.list.2': 'API - Basic Tier: 1,000 requests per day, maximum 500 records per request',
            'faq.questions.technical.rate.list.3': 'API - Professional Tier: 10,000 requests per day, maximum 1,000 records per request',
            'faq.questions.technical.rate.list.4': 'API - Enterprise Tier: Custom limits based on your needs',
            'faq.questions.technical.rate.note': 'If you need higher limits, please contact us to discuss custom solutions.',
            
            // Billing & Pricing
            'faq.questions.billing.free.title': 'Is AddressGen free to use?',
            'faq.questions.billing.free.answer': 'Yes, the basic web interface of AddressGen is free to use with certain limitations:',
            'faq.questions.billing.free.list.0': 'Up to 100 records per generation',
            'faq.questions.billing.free.list.1': 'Maximum of 1,000 records per day',
            'faq.questions.billing.free.list.2': 'Access to all supported countries',
            'faq.questions.billing.free.list.3': 'All information types available',
            'faq.questions.billing.free.list.4': 'CSV download capability',
            'faq.questions.billing.free.note': 'For higher volume needs or API access, we offer paid subscription plans.',
            'faq.questions.billing.plans.title': 'What subscription plans are available?',
            'faq.questions.billing.plans.answer': 'We offer several subscription plans to meet different needs:',
            'faq.questions.billing.plans.list.0': 'Free: Basic web access with limited daily generations',
            'faq.questions.billing.plans.list.1': 'Basic ($9.99/month): Increased limits and basic API access',
            'faq.questions.billing.plans.list.2': 'Professional ($29.99/month): Higher limits, full API access, and priority support',
            'faq.questions.billing.plans.list.3': 'Enterprise (Custom pricing): Custom limits, dedicated support, and SLA guarantees',
            'faq.questions.billing.plans.note': 'All paid plans are billed monthly with the option for annual billing at a discount. Visit our pricing page for detailed feature comparisons.',
            'faq.questions.billing.refund.title': 'Do you offer refunds?',
            'faq.questions.billing.refund.answer': 'Yes, we offer a 14-day money-back guarantee for all new subscriptions. If you\'re not satisfied with our service within the first 14 days, you can request a full refund with no questions asked.',
            'faq.questions.billing.refund.note': 'For refund requests after the initial 14-day period, please contact our support team to discuss your specific situation.',

            // Copy messages
            'copy.success': 'Copied to clipboard!',
            'copy.error': 'Failed to copy!',

            // Data Privacy Blog Article
            'blog.dataPrivacy.title': 'Why Data Privacy Matters in Address Generation - AddressGen',
            'blog.dataPrivacy.intro': 'In today\'s digital age, data privacy is not just a buzzword—it has become a core consideration in software development and testing processes. When we need to generate address information for testing, protecting personal privacy becomes paramount.',
            'blog.dataPrivacy.whyItMatters.title': 'Why Does Data Privacy Matter?',
            'blog.dataPrivacy.whyItMatters.content': 'During software development and testing, developers often need large amounts of address data to verify application functionality. Traditionally, teams might use real personal information or data collected from the internet. However, this practice poses serious privacy risks and legal issues.',
            'blog.dataPrivacy.risks.title': 'Risks of Using Real Data',
            'blog.dataPrivacy.risks.list': [
                'Violation of data protection regulations (such as GDPR, CCPA, etc.)',
                'Exposure of personal sensitive information',
                'Facing legal lawsuits and fines',
                'Damaging company reputation and customer trust',
                'Misuse of others\' identity information'
            ],
            'blog.dataPrivacy.quote': 'Protecting data privacy is not only a legal obligation but also a moral responsibility. Using fictional but realistic data in testing environments is a best practice in modern software development.',
            'blog.dataPrivacy.solution.title': 'Virtual Address Generation Solution',
            'blog.dataPrivacy.solution.content': 'Using randomly generated address information is an effective way to solve this problem. AddressGen\'s service generates completely fictional but correctly formatted address information, including:',
            'blog.dataPrivacy.solution.features': [
                'Fictional addresses that comply with national address format standards',
                'Randomly generated personal identity information',
                'Fictional credit card numbers for testing',
                'Phone numbers and email addresses',
                'Employment and company information'
            ],
            'blog.dataPrivacy.benefits.title': 'Benefits of Using Virtual Data',
            'blog.dataPrivacy.benefits.legal.title': '1. Legal Compliance',
            'blog.dataPrivacy.benefits.legal.content': 'Using fictional data ensures your development and testing activities comply with various data protection regulations. This eliminates the risk of accidentally processing real personal data, allowing your team to focus on product development rather than legal issues.',
            'blog.dataPrivacy.benefits.quality.title': '2. Improved Testing Quality',
            'blog.dataPrivacy.benefits.quality.content': 'Randomly generated data provides better test coverage. You can generate data for various edge cases and exceptional scenarios that are often difficult to obtain when using real data.',
            'blog.dataPrivacy.benefits.flexibility.title': '3. Flexibility and Control',
            'blog.dataPrivacy.benefits.flexibility.content': 'You can generate data of specific formats or types according to specific needs. Need to test international address formats? Need a specific number of test cases? Virtual data generators can easily meet these requirements.',
            'blog.dataPrivacy.bestPractices.title': 'Best Practice Recommendations',
            'blog.dataPrivacy.bestPractices.intro': 'To maximize the value of virtual data while ensuring privacy protection, we recommend following these best practices:',
            'blog.dataPrivacy.bestPractices.list': [
                '<strong>Establish clear data usage policies:</strong> Ensure team members understand when to use virtual data vs. real data',
                '<strong>Regularly update test data:</strong> Avoid over-reliance on fixed test datasets',
                '<strong>Mark testing environments:</strong> Clearly identify which environments use virtual data',
                '<strong>Train development teams:</strong> Ensure all members understand the importance of data privacy',
                '<strong>Monitor data usage:</strong> Regularly review data usage to ensure compliance'
            ],
            'blog.dataPrivacy.conclusion.title': 'Conclusion',
            'blog.dataPrivacy.conclusion.content': 'Data privacy plays an increasingly important role in modern software development. By using virtual address generation services, development teams can ensure complete privacy compliance without sacrificing testing quality. AddressGen is committed to providing developers with high-quality, realistic virtual data to help you build better software products.',
            'blog.dataPrivacy.conclusion.cta': 'Start using AddressGen today to experience secure, compliant virtual data generation services that provide strong support for your development and testing work.',
            'blog.actions.like': 'Like',
            'blog.actions.share': 'Share',
            'blog.actions.backToBlog': 'Back to Blog',
            'blog.relatedArticles': 'Related Articles',

            // UK Address Blog Article
            'blog.ukAddress.title': 'Understanding UK Address Format - AddressGen',
            'blog.ukAddress.intro': 'The UK address system has a long history and unique structure. Understanding UK address formats is crucial for correctly generating test data and ensuring international compatibility of applications. This article will deeply analyze the various components of UK addresses.',
            'blog.ukAddress.basicStructure.title': 'Basic Structure of UK Addresses',
            'blog.ukAddress.basicStructure.content': 'UK addresses typically contain the following main parts, arranged in order from specific to general:',
            'blog.ukAddress.example.title': 'Standard UK Address Example:',
            'blog.ukAddress.components.title': 'Detailed Address Components',
            'blog.ukAddress.components.name.title': '1. Recipient Name',
            'blog.ukAddress.components.name.content': 'The first line is usually the recipient\'s full name, including titles (Mr., Mrs., Ms., Dr., etc.). In business addresses, this may be the company name.',
            'blog.ukAddress.components.street.title': '2. Street Address',
            'blog.ukAddress.components.street.content': 'The street address contains the house number and street name. UK street names typically end with Street, Road, Avenue, Lane, etc. House numbers may include letters, such as "123A".',
            'blog.ukAddress.components.secondary.title': '3. Secondary Address Information',
            'blog.ukAddress.components.secondary.content': 'If applicable, this includes apartment numbers, floor levels, or other detailed information, such as "Flat 2", "2nd Floor", etc.',
            'blog.ukAddress.components.locality.title': '4. Locality/City',
            'blog.ukAddress.components.locality.content': 'This is usually the name of a city, town, or village. In large cities, it may also include area names.',
            'blog.ukAddress.postcode.title': 'UK Postcode System',
            'blog.ukAddress.postcode.intro': 'The UK postcode is a key part of the address system, with a unique format and logic:',
            'blog.ukAddress.postcode.format.title': 'Postcode Format',
            'blog.ukAddress.postcode.format.content': 'UK postcodes consist of two parts, separated by a space:',
            'blog.ukAddress.postcode.parts': [
                '<strong>Outward Code:</strong> 1-2 letters + 1-2 numbers + optional letter',
                '<strong>Inward Code:</strong> 1 number + 2 letters'
            ],
            'blog.ukAddress.postcode.examples.title': 'Postcode Examples:',
            'blog.ukAddress.postcode.examples.format': 'Format',
            'blog.ukAddress.postcode.examples.example': 'Example',
            'blog.ukAddress.postcode.examples.area': 'Area',
            'blog.ukAddress.postcode.special.title': 'Special Postcodes',
            'blog.ukAddress.postcode.special.content': 'Some famous addresses have special postcodes:',
            'blog.ukAddress.postcode.special.examples': [
                '<strong>SW1A 1AA</strong> - Buckingham Palace',
                '<strong>SW1A 2AA</strong> - 10 Downing Street',
                '<strong>EC4M 8AD</strong> - Bank of England',
                '<strong>SE1 9RT</strong> - Shakespeare\'s Globe Theatre'
            ],
            'blog.ukAddress.regions.title': 'UK Regional Differences',
            'blog.ukAddress.regions.intro': 'The UK comprises four constituent countries, each with some distinctive address format characteristics:',
            'blog.ukAddress.regions.england.title': 'England',
            'blog.ukAddress.regions.england.content': 'Uses the standard UK address format. Large cities like London, Manchester, Birmingham typically include area information.',
            'blog.ukAddress.regions.scotland.title': 'Scotland',
            'blog.ukAddress.regions.scotland.content': 'Scottish addresses may include "SCOTLAND" as the last line. City names like Edinburgh, Glasgow occupy important positions in addresses.',
            'blog.ukAddress.regions.wales.title': 'Wales',
            'blog.ukAddress.regions.wales.content': 'Welsh addresses may contain bilingual place names in both Welsh and English. Postcodes typically begin with "CF", "LL", "SA", etc.',
            'blog.ukAddress.regions.ni.title': 'Northern Ireland',
            'blog.ukAddress.regions.ni.content': 'Northern Ireland uses postcodes beginning with "BT". Address format is similar to England but may include county names.',
            'blog.ukAddress.generation.title': 'Generating Realistic UK Addresses',
            'blog.ukAddress.generation.intro': 'When generating UK addresses for testing purposes, pay attention to the following points:',
            'blog.ukAddress.generation.streetNames.title': 'Common Street Names',
            'blog.ukAddress.generation.streetNames.list': [
                'High Street - Most common street name',
                'Church Lane - Church-related streets',
                'Victoria Road - Named after Queen Victoria',
                'Mill Lane - Mill pathway',
                'Station Road - Station road',
                'King\'s Road - King\'s road',
                'Queen\'s Avenue - Queen\'s avenue'
            ],
            'blog.ukAddress.generation.validation.title': 'Address Validation Points',
            'blog.ukAddress.generation.validation.rules': [
                'Postcodes must conform to correct format rules',
                'House numbers can include numbers and letters',
                'Street types should match the area',
                'City names should correspond to postcode areas',
                'Avoid using real specific addresses'
            ],
            'blog.ukAddress.best_practices.title': 'Best Practice Recommendations',
            'blog.ukAddress.best_practices.intro': 'When handling UK addresses in applications, it\'s recommended to follow these best practices:',
            'blog.ukAddress.best_practices.list': [
                '<strong>Flexible Field Length:</strong> Reserve sufficient character space for address fields',
                '<strong>Postcode Validation:</strong> Implement strict postcode format validation',
                '<strong>Case Handling:</strong> Postcodes typically use uppercase letters',
                '<strong>Internationalization Support:</strong> Consider local languages like Welsh',
                '<strong>Address Standardization:</strong> Standardize address formats for easier processing'
            ],
            'blog.ukAddress.conclusion.title': 'Conclusion',
            'blog.ukAddress.conclusion.content': 'Understanding the complexity of UK address formats is crucial for developing internationalized applications. By correctly implementing UK address format rules, you can ensure your application provides the best experience for UK users. AddressGen\'s UK address generator follows all these rules, providing accurate and realistic address data for your testing needs.',
            'blog.ukAddress.conclusion.cta': 'Try using AddressGen now to generate standards-compliant UK addresses and provide high-quality test data for your projects.',

            // Credit Card Blog Article
            'blog.creditCard.title': 'Credit Card Number Generation: How It Works - AddressGen',
            'blog.creditCard.warning.title': 'Important Notice',
            'blog.creditCard.warning.content': 'The credit card number generation techniques described in this article are for educational and testing purposes only. The generated numbers are completely fictional and cannot be used for any actual transactions. Any illegal use will result in legal liability.',
            'blog.creditCard.intro': 'Credit card number generation is not a random process, but follows strict mathematical algorithms and industry standards. Understanding how the Luhn algorithm works helps developers create effective test data while ensuring system security and compliance.',
            'blog.creditCard.structure.title': 'Credit Card Number Structure',
            'blog.creditCard.structure.intro': 'Each credit card number contains multiple important components, each with specific meaning and function:',
            'blog.creditCard.structure.components.title': 'Number Components',
            'blog.creditCard.structure.components.list': [
                '<strong>Issuer Identification Number (IIN):</strong> First 6 digits, identifying the issuing institution',
                '<strong>Account Identifier:</strong> Middle digits, uniquely identifying the cardholder\'s account',
                '<strong>Check Digit:</strong> Last digit, used to validate the number\'s validity'
            ],
            'blog.creditCard.structure.example.title': 'Credit Card Number Analysis Example:',
            'blog.creditCard.brands.title': 'Major Credit Card Brand Identification',
            'blog.creditCard.brands.intro': 'Different credit card brands have different IIN ranges and number lengths:',
            'blog.creditCard.brands.list': [
                '<strong>Visa:</strong> Starts with 4, 16 digits',
                '<strong>MasterCard:</strong> Starts with 5 (51-55) or 2 (2221-2720), 16 digits',
                '<strong>American Express:</strong> Starts with 34 or 37, 15 digits',
                '<strong>Discover:</strong> Starts with 6 (6011, 622126-622925, 644-649, 65), 16 digits',
                '<strong>JCB:</strong> Starts with 35 (3528-3589), 16 digits'
            ],
            'blog.creditCard.luhn.title': 'Luhn Algorithm Explained',
            'blog.creditCard.luhn.intro': 'The Luhn algorithm (also known as the modulus 10 algorithm) is a checksum algorithm invented by Hans Peter Luhn of IBM in 1954, used to validate credit card number validity.',
            'blog.creditCard.luhn.howItWorks.title': 'How the Algorithm Works',
            'blog.creditCard.luhn.howItWorks.intro': 'The Luhn algorithm validation process includes the following steps:',
            'blog.creditCard.luhn.steps': [
                'From right to left, double every second digit',
                'If the doubled number is greater than 9, add the two digits together',
                'Add all digits to get the total sum',
                'If the sum is divisible by 10, the number is valid'
            ],
            'blog.creditCard.luhn.example.title': '# Luhn Algorithm Validation Example: 4532123456789012',
            'blog.creditCard.luhn.implementation.title': 'Algorithm Implementation',
            'blog.creditCard.luhn.implementation.intro': 'Here is a JavaScript implementation of the Luhn algorithm:',
            'blog.creditCard.generation.title': 'Secure Test Number Generation',
            'blog.creditCard.generation.intro': 'When generating credit card numbers for testing, strict security guidelines must be followed:',
            'blog.creditCard.generation.principles.title': 'Generation Principles',
            'blog.creditCard.generation.principles.list': [
                '<strong>Completely Fictional:</strong> Ensure generated numbers do not correspond to any real accounts',
                '<strong>Format Compliant:</strong> Follow correct IIN ranges and length requirements',
                '<strong>Pass Validation:</strong> Meet Luhn algorithm verification',
                '<strong>Clear Identification:</strong> Clearly mark as test-only',
                '<strong>Regular Updates:</strong> Avoid using the same test data long-term'
            ],
            'blog.creditCard.generation.testNumbers.title': 'Standard Test Numbers',
            'blog.creditCard.generation.testNumbers.intro': 'The payment industry provides some standard test numbers that are safe and widely accepted:',
            'blog.creditCard.generation.testNumbers.examples.title': 'Common Test Numbers:',
            'blog.creditCard.security.title': 'Security Considerations and Best Practices',
            'blog.creditCard.security.intro': 'When handling credit card information, even test data, strict security guidelines must be followed:',
            'blog.creditCard.security.dataHandling.title': 'Data Handling Security',
            'blog.creditCard.security.dataHandling.list': [
                '<strong>Encrypted Transmission:</strong> Use HTTPS to encrypt all data transmission',
                '<strong>No Sensitive Logging:</strong> Avoid logging credit card numbers',
                '<strong>Principle of Least Privilege:</strong> Limit access to test data',
                '<strong>Regular Cleanup:</strong> Regularly clean sensitive data from test environments',
                '<strong>PCI DSS Compliance:</strong> Follow Payment Card Industry Data Security Standards'
            ],
            'blog.creditCard.security.development.title': 'Development Environment Security',
            'blog.creditCard.security.development.list': [
                '<strong>Environment Isolation:</strong> Complete separation of test and production environments',
                '<strong>Access Control:</strong> Implement strict access control mechanisms',
                '<strong>Audit Trail:</strong> Record all data access and operations',
                '<strong>Regular Reviews:</strong> Regularly review the effectiveness of security measures'
            ],
            'blog.creditCard.security.reminder.title': 'Security Reminder',
            'blog.creditCard.security.reminder.content': 'Never use real credit card numbers for testing in production environments. Even valid test numbers should be used in secure environments and ensure they cannot be maliciously exploited.',
            'blog.creditCard.testing.title': 'Testing Scenarios and Applications',
            'blog.creditCard.testing.intro': 'Generated credit card numbers have various application scenarios in software testing:',
            'blog.creditCard.testing.scenarios.title': 'Common Test Scenarios',
            'blog.creditCard.testing.scenarios.list': [
                '<strong>Payment Process Testing:</strong> Validate payment forms and processing logic',
                '<strong>Input Validation Testing:</strong> Test number format validation functionality',
                '<strong>User Interface Testing:</strong> Verify credit card input interface interactions',
                '<strong>Performance Testing:</strong> Use large amounts of test data for stress testing',
                '<strong>Security Testing:</strong> Verify the effectiveness of security measures'
            ],
            'blog.creditCard.testing.automation.title': 'Automated Testing Integration',
            'blog.creditCard.testing.automation.content': 'In automated testing, compliant test credit card numbers can be dynamically generated to improve test coverage and efficiency. The API provided by AddressGen can be easily integrated into your testing framework.',
            'blog.creditCard.conclusion.title': 'Conclusion',
            'blog.creditCard.conclusion.content': 'Understanding the principles of credit card number generation and the Luhn algorithm is crucial for developing secure payment systems. By using correct testing methods and tools, developers can create high-quality payment-related applications while ensuring security. The credit card generation feature provided by AddressGen follows all industry standards, providing reliable support for your testing needs.',
            'blog.creditCard.conclusion.cta': 'Start using AddressGen now to generate secure, compliant test credit card data and provide strong support for your payment system development.',

            // Hong Kong Address Blog Article
            'blog.hkAddress.title': 'Hong Kong Address System Explained - AddressGen',
            'blog.hkAddress.intro': 'As an international financial center, Hong Kong has a unique and complex address system. Understanding the structure and characteristics of Hong Kong addresses is crucial for generating accurate test data. This article will explore all aspects of the Hong Kong address system in depth.',
            'blog.hkAddress.overview.title': 'Hong Kong Address System Overview',
            'blog.hkAddress.overview.content': 'Hong Kong\'s address system reflects its unique historical background and geographical features. Since Hong Kong consists of three main regions - Hong Kong Island, Kowloon Peninsula, and New Territories - each region has its own address characteristics and naming conventions.',
            'blog.hkAddress.overview.uniqueFeatures.title': 'Unique Features of Hong Kong Address System:',
            'blog.hkAddress.overview.uniqueFeatures.list': [
                'Bilingual Chinese-English address identification',
                'Hierarchical address structure based on regions',
                'Unique building numbering system',
                'Coexistence of traditional and modern naming methods'
            ],
            'blog.hkAddress.structure.title': 'Hong Kong Address Structure Explained',
            'blog.hkAddress.structure.intro': 'A standard Hong Kong address usually contains the following levels, arranged from specific to general:',
            'blog.hkAddress.structure.example.title': 'Standard Hong Kong Address Example:',
            'blog.hkAddress.structure.components.title': 'Address Components',
            'blog.hkAddress.structure.components.region.title': '1. Regional Identification',
            'blog.hkAddress.structure.components.region.content': 'Hong Kong is divided into three main regions: Hong Kong Island, Kowloon, and New Territories. Each region is further subdivided into different districts.',
            'blog.hkAddress.structure.components.district.title': '2. District Names',
            'blog.hkAddress.structure.components.district.content': 'Such as Central, Causeway Bay, Tsim Sha Tsui, etc. These district names usually have standard Chinese-English correspondences.',
            'blog.hkAddress.structure.components.street.title': '3. Street Address',
            'blog.hkAddress.structure.components.street.content': 'Includes street name and house number. Hong Kong street names often reflect historical background, such as Queen\'s Road, Des Voeux Road, etc.',
            'blog.hkAddress.structure.components.building.title': '4. Building Name',
            'blog.hkAddress.structure.components.building.content': 'Commercial and residential buildings in Hong Kong usually have unique names, such as International Finance Centre (IFC), Pacific Place, etc.',
            'blog.hkAddress.structure.components.unit.title': '5. Floor and Unit',
            'blog.hkAddress.structure.components.unit.content': 'Use "楼" to indicate floor and "室" to indicate unit. In English, "/F" is used to indicate floor, such as "15/F" for 15th floor.',
            'blog.hkAddress.regions.title': 'Three Major Regional Characteristics',
            'blog.hkAddress.regions.hkIsland.title': 'Hong Kong Island',
            'blog.hkAddress.regions.hkIsland.content': 'Hong Kong Island is the commercial and financial center of Hong Kong, containing many famous districts:',
            'blog.hkAddress.regions.hkIsland.areas': [
                '<strong>Central:</strong> Financial district with concentrated high-end commercial buildings',
                '<strong>Admiralty:</strong> Government institutions and business center',
                '<strong>Wan Chai:</strong> Business and convention center',
                '<strong>Causeway Bay:</strong> Shopping and entertainment district',
                '<strong>North Point:</strong> Mixed residential and commercial area'
            ],
            'blog.hkAddress.regions.kowloon.title': 'Kowloon',
            'blog.hkAddress.regions.kowloon.content': 'Kowloon Peninsula is an important commercial and residential area of Hong Kong:',
            'blog.hkAddress.regions.kowloon.areas': [
                '<strong>Tsim Sha Tsui:</strong> Tourism and shopping hotspot',
                '<strong>Mong Kok:</strong> Dense commercial and residential area',
                '<strong>Yau Ma Tei:</strong> Traditional commercial district',
                '<strong>Hung Hom:</strong> Transportation hub and residential area',
                '<strong>Kowloon Tong:</strong> Upscale residential district'
            ],
            'blog.hkAddress.regions.newTerritories.title': 'New Territories',
            'blog.hkAddress.regions.newTerritories.content': 'New Territories is the largest area of Hong Kong, containing many new towns:',
            'blog.hkAddress.regions.newTerritories.areas': [
                '<strong>Sha Tin:</strong> Large new town',
                '<strong>Tai Po:</strong> Historic town',
                '<strong>Yuen Long:</strong> New town transformed from traditional agriculture',
                '<strong>Tuen Mun:</strong> Balanced industrial and residential area',
                '<strong>Tsuen Wan:</strong> Commercial area transformed from industry'
            ],
            'blog.hkAddress.naming.title': 'Street Naming Characteristics',
            'blog.hkAddress.naming.intro': 'Hong Kong street naming reflects its rich historical and cultural background:',
            'blog.hkAddress.naming.categories.title': 'Common Naming Categories',
            'blog.hkAddress.naming.categories.type': 'Type',
            'blog.hkAddress.naming.categories.examples': 'Examples',
            'blog.hkAddress.naming.categories.meaning': 'Meaning',
            'blog.hkAddress.buildings.title': 'Building Numbering and Naming',
            'blog.hkAddress.buildings.intro': 'Hong Kong\'s building numbering system has its unique characteristics:',
            'blog.hkAddress.buildings.numbering.title': 'Numbering Rules',
            'blog.hkAddress.buildings.numbering.rules': [
                '<strong>Odd-Even Distribution:</strong> Usually odd numbers on one side, even numbers on the other',
                '<strong>Number Skipping:</strong> Certain "unlucky" numbers (like 4, 14) may be skipped',
                '<strong>Letter Suffixes:</strong> Such as 123A, 123B indicating different entrances at the same location',
                '<strong>Range Numbering:</strong> Such as 123-125 indicating a large building complex'
            ],
            'blog.hkAddress.buildings.naming.title': 'Building Naming Characteristics',
            'blog.hkAddress.buildings.naming.features': [
                '<strong>Auspicious Meanings:</strong> Such as "富豪阁", "金运大厦"',
                '<strong>Geographical Location:</strong> Such as "海景大厦", "山景园"',
                '<strong>Developer Names:</strong> Such as "太古广场", "新鸿基中心"',
                '<strong>Functional Description:</strong> Such as "商业中心", "购物广场"'
            ],
            'blog.hkAddress.generation.title': 'Key Points for Generating Hong Kong Addresses',
            'blog.hkAddress.generation.intro': 'When generating Hong Kong addresses for testing, pay attention to the following key points:',
            'blog.hkAddress.generation.guidelines.title': 'Generation Guidelines',
            'blog.hkAddress.generation.guidelines.list': [
                '<strong>Regional Consistency:</strong> Ensure logical consistency between districts, streets, and building names',
                '<strong>Bilingual Correspondence:</strong> Provide accurate Chinese-English address correspondence',
                '<strong>Realism Balance:</strong> Addresses should look realistic but not correspond to actual existing addresses',
                '<strong>Cultural Sensitivity:</strong> Avoid using inappropriate or sensitive names',
                '<strong>Format Standardization:</strong> Follow Hong Kong Post address format standards'
            ],
            'blog.hkAddress.generation.examples.title': 'Generated Address Examples:',
            'blog.hkAddress.validation.title': 'Address Validation and Standardization',
            'blog.hkAddress.validation.intro': 'Validating the accuracy of Hong Kong addresses requires considering multiple factors:',
            'blog.hkAddress.validation.criteria.title': 'Validation Criteria',
            'blog.hkAddress.validation.criteria.list': [
                '<strong>Regional Matching:</strong> Street names must match their districts',
                '<strong>Floor Reasonableness:</strong> Floor numbers must be reasonable',
                '<strong>Number Continuity:</strong> House numbers must be within reasonable ranges',
                '<strong>Naming Standards:</strong> Building names must conform to Hong Kong naming conventions',
                '<strong>Language Consistency:</strong> Chinese and English versions must be consistent'
            ],
            'blog.hkAddress.conclusion.title': 'Conclusion',
            'blog.hkAddress.conclusion.content': 'Although Hong Kong\'s address system is complex, it follows clear rules and patterns. Understanding these rules is crucial for creating accurate and realistic test data. AddressGen\'s Hong Kong address generator fully considers these characteristics and can generate high-quality test data that meets Hong Kong address standards.',
            'blog.hkAddress.conclusion.cta': 'Start using AddressGen now to generate test data that meets Hong Kong address standards and provide the most realistic user experience for your applications.',

            // Generator Batch Table Headers
            'generator.batch.table.headers.index': 'Index',
            'generator.batch.table.headers.basicInfo': 'Basic Information',
            'generator.batch.table.headers.addressInfo': 'Address Information',
            'generator.batch.table.headers.creditCardInfo': 'Credit Card Information',
            'generator.batch.table.tip': 'Tip: Click any row to copy the complete information to clipboard'
        }
    },
    zh: {
        translation: {
            // 导航
            'nav.home': '首页',
            'nav.blog': '博客',
            'nav.faq': '常见问题',
            'nav.about': '关于我们',
            'nav.feedback': '反馈',
            
            // 页面标题
            'page.title.home': '首页 - AddressGen',
            'page.title.blog': '博客 - AddressGen',
            'page.title.faq': '常见问题 - AddressGen',
            'page.title.about': '关于 - AddressGen',
            'page.title.feedback': '反馈 - AddressGen',
            
            // 博客页面
            'blog.title': '博客 - AddressGen',
            'blog.header.title': 'AddressGen 博客',
            'blog.header.subtitle': '获取关于地址生成、数据隐私和身份管理的最新新闻、提示和见解。',
            'blog.featured': '精选',
            'blog.guide': '指南',
            'blog.security': '安全',
            'blog.region': '地区',
            'blog.development': '开发',
            'blog.readMore': '继续阅读',
            'blog.readFull': '阅读全文',
            'blog.minutesRead': '分钟阅读',
            'blog.dataPrivacy': '数据隐私',
            'blog.whyDataPrivacyMatters': '为什么数据隐私在地址生成中很重要',
            'blog.dataPrivacyDesc': '在当今的数字世界中，保护个人信息比以往任何时候都更加重要。了解如何在测试和开发过程中使用随机生成的地址来保护您的隐私。',
            'blog.ukAddressFormat': '了解英国地址格式',
            'blog.ukAddressFormatDesc': '全面了解英国地址结构、邮政编码和地区差异，以生成准确的地址。',
            'blog.creditCardGeneration': '信用卡号码生成：工作原理',
            'blog.creditCardGenerationDesc': '了解Luhn算法以及我们的系统如何生成用于测试目的的有效但虚构的信用卡号码。',
            'blog.hkAddressSystem': '香港地址系统详解',
            'blog.hkAddressSystemDesc': '探索香港地址的独特特点，以及我们的生成器如何创建真实可信的示例。',
            'blog.testingBestPractices': '在测试中使用生成数据的最佳实践',
            'blog.testingBestPracticesDesc': '在软件测试工作流程中有效使用随机生成的地址信息的技巧和策略。',
            'blog.pagination': '分页',
            'blog.previousPage': '上一页',
            'blog.nextPage': '下一页',
            'blog.search': '搜索',
            'blog.searchPlaceholder': '搜索文章...',
            'blog.categories': '分类',
            'blog.popularArticles': '热门文章',
            'blog.usAddressGuide': '美国地址格式指南',
            'blog.gdprAddressGeneration': 'GDPR与地址生成',
            
            // Blog Categories
            'blog.categories.dataPrivacy': '数据隐私',
            'blog.categories.addressFormat': '地址格式',
            'blog.categories.identityGeneration': '身份生成',
            'blog.categories.creditCardSecurity': '信用卡安全',
            'blog.categories.developmentTips': '开发技巧',
            'blog.categories.regionGuide': '地区指南',
            
            // Newsletter
            'newsletter.title': '订阅我们的通讯',
            'newsletter.subtitle': '获取最新文章和资源，直接发送到您的收件箱。',
            'newsletter.email': '电子邮箱地址',
            'newsletter.placeholder': '输入您的邮箱',
            'newsletter.subscribe': '订阅',
            
            // 语言
            'language': '语言：',
            
            // 页脚
            'footer.privacy': '隐私政策',
            'footer.terms': '服务条款',
            'footer.copyright': '© 2023 AddressGen. 保留所有权利。',
            'footer.nav.home': '首页',
            'footer.nav.blog': '博客',
            'footer.nav.faq': '常见问题',
            'footer.nav.about': '关于我们',
            'footer.nav.feedback': '反馈',

            // 首页内容
            'heroTitle': '生成随机地址信息',
            'heroDesc': '为测试、开发或数据隐私目的创建逼真的随机地址、身份和信用卡信息。',
            'getStarted': '开始使用',
            'learnMore': '了解更多',
            'whyUse': '为什么使用我们的地址生成器？',
            'whyUseDesc': '我们的工具提供逼真的随机生成信息，同时确保隐私和安全。',
            'privacyProtection': '隐私保护',
            'privacyProtectionDesc': '使用随机生成的信息代替真实个人数据进行测试和开发。',
            'internationalSupport': '国际支持',
            'internationalSupportDesc': '为多个国家生成地址信息，包括美国、英国和香港。',
            'customizableOptions': '可定制选项',
            'customizableOptionsDesc': '选择您需要的确切信息，从基本地址详情到完整的身份档案。',

            // Address Generator Section
            'generator.title': '地址生成器',
            'generator.country.title': '选择国家/区域',
            'generator.state.title': '选择州/省',
            'generator.city.title': '选择城市',
            'generator.quantity.title': '生成数量',
            'generator.quantity.max': '最大数量：100',
            'generator.button': '生成信息',
            'generator.results.title': '生成的信息',
            'generator.results.copy': '复制全部',
            'generator.results.download': '下载CSV',
            'generator.results.generateMore': '再次生成',
            
            // Results Sections
            'generator.results.basicInfo': '基本信息',
            'generator.results.addressInfo': '地址信息',
            'generator.results.creditCardInfo': '信用卡信息',
            'generator.results.employmentInfo': '工作信息',
            
            // Field Labels
            'generator.fields.fullName': '姓名',
            'generator.fields.email': '邮箱',
            'generator.fields.phone': '电话',
            'generator.fields.dob': '出生日期',
            'generator.fields.country': '国家',
            'generator.fields.streetAddress': '街道地址',
            'generator.fields.city': '城市',
            'generator.fields.stateCode': '州/省代码',
            'generator.fields.stateName': '州/省名称',
            'generator.fields.zipCode': '邮政编码',
            'generator.fields.cardType': '卡类型',
            'generator.fields.cardNumber': '卡号',
            'generator.fields.cvv': '安全码',
            'generator.fields.expiryDate': '有效期',
            'generator.fields.occupation': '职业',
            'generator.fields.company': '公司',
            'country.us': '美国',
            'country.uk': '英国',
            'country.hk': '香港',

            // About Page
            'about.title': '关于 AddressGen',
            'about.subtitle': '了解我们的使命、团队以及为什么我们创建了最全面的地址生成工具。',
            'about.our_story': '我们的故事',
            'about.story.p1': 'AddressGen 源于实际需求。作为软件开发人员，我们经常需要为项目生成真实的测试数据，但现有的解决方案要么功能有限，要么过于复杂，或者无法提供我们所需的数据质量。',
            'about.story.p2': '在 2025 年，我们的开发人员和数据专家团队共同创建了一个解决方案，能够为多个国家生成高质量、真实的地址信息，同时保持最高的隐私和安全标准。',
            'about.story.p3': '这个最初作为内部工具的项目迅速发展成为一个综合性平台，被全球数千名开发人员、测试人员和商业用户使用。如今，AddressGen 已成为生成真实地址和身份信息的首选解决方案，用于测试、开发和教育目的。',
            'about.mission.title': '我们的使命',
            'about.mission.subtitle': '我们致力于为开发人员和企业提供工具，使他们的工作更轻松，同时保护隐私并促进数据处理的最佳实践。',
            'about.mission.innovation.title': '创新',
            'about.mission.innovation.desc': '我们不断改进算法并扩展功能，以提供最准确和有用的地址生成服务。',
            'about.mission.privacy.title': '隐私',
            'about.mission.privacy.desc': '我们致力于通过提供虚构数据来保护隐私，帮助开发人员避免在工作中使用真实的个人信息。',
            'about.mission.community.title': '社区',
            'about.mission.community.desc': '我们通过提供使测试和开发更高效、更有效的工具来支持开发者社区。',
            'about.testimonials.title': '用户评价',
            'about.testimonials.subtitle': '不要只听我们说 — 听听我们满意用户的心声。',
            'about.testimonials.user1.name': 'Emily R.',
            'about.testimonials.user1.role': '软件开发工程师',
            'about.testimonials.user1.comment': '"AddressGen 彻底改变了我们的开发团队。我们每天用它为电商平台生成测试数据，节省了无数手动工作的时间。"',
            'about.testimonials.user2.name': 'Marcus T.',
            'about.testimonials.user2.role': '质量保证工程师',
            'about.testimonials.user2.comment': '"生成的地址质量令人印象深刻。从邮政编码到街道名称，每个国家的格式都完全正确，这对我们的国际应用测试至关重要。"',
            'about.testimonials.user3.name': 'Sophia L.',
            'about.testimonials.user3.role': '产品经理',
            'about.testimonials.user3.comment': '"我们使用 AddressGen 进行 UI 原型设计和用户测试。拥有真实的数据使我们的演示更加有效，帮助利益相关者更好地理解最终产品。"',
            'about.contact.title': '准备开始使用？',
            'about.contact.subtitle': '立即体验 AddressGen。',
            'about.contact.get_started': '开始使用',
            'about.contact.contact_us': '联系我们',

            // Feedback Page
            'feedback.title': '反馈 - AddressGen',
            'feedback.subtitle': '我们重视您的反馈和建议。通过分享您的想法，帮助我们改进 AddressGen。',
            'feedback.form.name': '姓名',
            'feedback.form.email': '电子邮箱',
            'feedback.form.subject': '主题',
            'feedback.form.message': '留言',
            'feedback.form.submit': '提交反馈',
            'feedback.form.placeholder.name': '您的姓名',
            'feedback.form.placeholder.email': '您的邮箱地址',
            'feedback.form.placeholder.subject': '这是关于什么的？',
            'feedback.form.placeholder.message': '请告诉我们您的想法...',
            'feedback.instructions.title': '反馈提交说明',
            'feedback.instructions.limit': '为了防止垃圾邮件，每个IP地址每天只能提交一次反馈',
            'feedback.instructions.complete': '请确保您的反馈内容准确完整，提交后当天无法再次修改',
            'feedback.instructions.response': '我们会认真查看每一条反馈，并尽快回复您',
            'feedback.ip.limit': '每个IP地址每天限制提交一次反馈，感谢您的理解与配合',

            // FAQ Page
            'faq.title': '常见问题',
            'faq.subtitle': '查找关于我们地址生成服务的常见问题解答。',
            'faq.categories.title': '问题分类',
            'faq.categories.general': '一般问题',
            'faq.categories.usage': '使用与功能',
            'faq.categories.privacy': '隐私与安全',
            'faq.categories.technical': '技术细节',
            'faq.categories.billing': '计费与价格',
            'faq.contact.title': '还有其他问题？',
            'faq.contact.subtitle': '找不到您需要的答案？请随时联系我们的客户支持团队。',
            'faq.contact.button': '联系支持',
            
            // 一般问题
            'faq.questions.general.what.title': '什么是 AddressGen？',
            'faq.questions.general.what.answer': 'AddressGen 是一个网络应用程序，可以为包括美国、英国和香港在内的多个国家生成随机地址信息。它创建真实但虚构的个人数据，如地址、姓名、电话号码、电子邮件地址和信用卡信息，用于测试、开发或数据隐私目的。',
            'faq.questions.general.why.title': '为什么需要生成随机地址？',
            'faq.questions.general.why.answer': '随机地址生成可用于多种用途：',
            'faq.questions.general.why.list.0': '软件测试和开发',
            'faq.questions.general.why.list.1': '演示数据库填充',
            'faq.questions.general.why.list.2': '使用真实数据进行 UI/UX 测试',
            'faq.questions.general.why.list.3': '通过避免使用真实个人信息来保护隐私',
            'faq.questions.general.why.list.4': '为教育目的创建示例数据',
            'faq.questions.general.why.list.5': '测试电子商务结账流程',
            'faq.questions.general.countries.title': '支持哪些国家？',
            'faq.questions.general.countries.answer': '目前，AddressGen 支持以下国家的地址生成：',
            'faq.questions.general.countries.list.0': '美国（包括所有 50 个州和地区）',
            'faq.questions.general.countries.list.1': '英国（英格兰、苏格兰、威尔士和北爱尔兰）',
            'faq.questions.general.countries.list.2': '香港',
            'faq.questions.general.countries.note': '我们正在不断努力添加更多国家和地区到我们的服务中。如果您需要目前不支持的国家，请通过我们的反馈页面告知我们。',
            
            // Usage & Features
            'faq.questions.usage.how.title': '如何生成地址信息？',
            'faq.questions.usage.how.answer': '生成地址信息很简单：',
            'faq.questions.usage.how.steps.0': '选择您想要生成地址的国家',
            'faq.questions.usage.how.steps.1': '选择您需要的信息类型（姓名、地址、电话、电子邮件、信用卡等）',
            'faq.questions.usage.how.steps.2': '指定您想要生成的记录数量（一次最多 100 条）',
            'faq.questions.usage.how.steps.3': '点击"生成信息"按钮',
            'faq.questions.usage.how.steps.4': '查看、复制或下载生成的数据',
            'faq.questions.usage.what.title': '可以生成哪些类型的信息？',
            'faq.questions.usage.what.answer': 'AddressGen 可以生成以下类型的信息：',
            'faq.questions.usage.what.list.0': '全名（名、中间名、姓）',
            'faq.questions.usage.what.list.1': '完整地址（街道、城市、州/省、邮政编码）',
            'faq.questions.usage.what.list.2': '电话号码（根据国家标准格式化）',
            'faq.questions.usage.what.list.3': '电子邮件地址',
            'faq.questions.usage.what.list.4': '信用卡信息（卡号、有效期、CVV）',
            'faq.questions.usage.what.list.5': '出生日期',
            'faq.questions.usage.what.list.6': '社会安全号码（美国）或身份证号码',
            'faq.questions.usage.what.list.7': '职业和公司信息',
            'faq.questions.usage.what.note': '您可以根据具体需求选择所需的信息类型。',
            'faq.questions.usage.download.title': '可以下载生成的数据吗？',
            'faq.questions.usage.download.answer': '是的，您可以下载 CSV（逗号分隔值）格式的生成数据，可以轻松导入到 Microsoft Excel 或 Google Sheets 等电子表格应用程序，以及数据库和其他软件系统中。',
            'faq.questions.usage.download.note': '您还可以将生成的数据直接复制到剪贴板，以便在其他应用程序中立即使用。',
            
            // Privacy & Security
            'faq.questions.privacy.real.title': '生成的信息是真实的吗？',
            'faq.questions.privacy.real.answer': '不，AddressGen 生成的所有信息都是完全虚构的。虽然数据遵循每个国家的正确格式和惯例（如邮政编码模式、电话号码格式等），但它不对应于真实的个人、地址或信用卡。',
            'faq.questions.privacy.real.note': '我们的算法确保生成的数据看起来真实，但不会匹配实际的人或地点，从而保护隐私并防止意外滥用。',
            'faq.questions.privacy.valid.title': '信用卡号码有效吗？',
            'faq.questions.privacy.valid.answer': '我们系统生成的信用卡号码通过 Luhn 算法检查（信用卡公司使用的标准验证算法），这意味着它们具有有效的格式和校验位。但是，它们没有连接到实际的银行账户，不能用于真实交易。',
            'faq.questions.privacy.valid.note': '这些号码专门设计用于测试支付系统、表单和软件，而无需使用真实的信用卡信息。',
            'faq.questions.privacy.store.title': '你们存储生成的信息吗？',
            'faq.questions.privacy.store.answer': '不，我们不存储由我们的服务生成的任何信息。所有数据都是在您请求时按需创建的，在交付给您后不会保存在我们的服务器上。',
            'faq.questions.privacy.store.note': '这种方法确保了最大的隐私和安全性，因为生成的数据在生成后只存在于您的设备上。',
            
            // Technical Details
            'faq.questions.technical.how.title': '地址是如何生成的？',
            'faq.questions.technical.how.answer': '我们的地址生成系统使用算法和每个支持国家的常见街道名称、城市、州/省和邮政编码模式数据库的组合。系统确保：',
            'faq.questions.technical.how.list.0': '街道号码在合理范围内',
            'faq.questions.technical.how.list.1': '街道名称听起来自然并遵循国家特定的模式',
            'faq.questions.technical.how.list.2': '城市与其正确的州/省配对',
            'faq.questions.technical.how.list.3': '邮政编码匹配该地区的正确格式',
            'faq.questions.technical.how.list.4': '所有组件共同构成一个合理的（虽然是虚构的）地址',
            'faq.questions.technical.api.title': '有 API 可用吗？',
            'faq.questions.technical.api.answer': '是的，我们提供 RESTful API，允许开发人员将我们的地址生成功能直接集成到他们的应用程序、测试框架或开发环境中。',
            'faq.questions.technical.api.note': 'API 支持与 Web 界面相同的所有功能，包括：',
            'faq.questions.technical.api.list.0': '选择特定国家',
            'faq.questions.technical.api.list.1': '选择要生成的信息类型',
            'faq.questions.technical.api.list.2': '在单个请求中生成多条记录',
            'faq.questions.technical.api.list.3': '以 JSON 或 CSV 格式接收数据',
            'faq.questions.technical.rate.title': '有什么速率限制？',
            'faq.questions.technical.rate.answer': '我们的服务有以下速率限制：',
            'faq.questions.technical.rate.list.0': 'Web 界面：每次生成最多 100 条记录，免费用户每天最多 1,000 条记录',
            'faq.questions.technical.rate.list.1': 'API - 免费版：每天 100 个请求，每个请求最多 100 条记录',
            'faq.questions.technical.rate.list.2': 'API - 基础版：每天 1,000 个请求，每个请求最多 500 条记录',
            'faq.questions.technical.rate.list.3': 'API - 专业版：每天 10,000 个请求，每个请求最多 1,000 条记录',
            'faq.questions.technical.rate.list.4': 'API - 企业版：根据您的需求自定义限制',
            'faq.questions.technical.rate.note': '如果您需要更高的限制，请联系我们讨论定制解决方案。',
            
            // Billing & Pricing
            'faq.questions.billing.free.title': 'AddressGen 是免费的吗？',
            'faq.questions.billing.free.answer': '是的，AddressGen 的基本 Web 界面可以免费使用，但有一些限制：',
            'faq.questions.billing.free.list.0': '每次生成最多 100 条记录',
            'faq.questions.billing.free.list.1': '每天最多 1,000 条记录',
            'faq.questions.billing.free.list.2': '访问所有支持的国家',
            'faq.questions.billing.free.list.3': '所有信息类型可用',
            'faq.questions.billing.free.list.4': 'CSV 下载功能',
            'faq.questions.billing.free.note': '对于更高容量的需求或 API 访问，我们提供付费订阅计划。',
            'faq.questions.billing.plans.title': '有哪些订阅计划？',
            'faq.questions.billing.plans.answer': '我们提供多种订阅计划以满足不同需求：',
            'faq.questions.billing.plans.list.0': '免费：基本 Web 访问，每日生成次数有限',
            'faq.questions.billing.plans.list.1': '基础版（$9.99/月）：增加限制和基本 API 访问',
            'faq.questions.billing.plans.list.2': '专业版（$29.99/月）：更高的限制、完整的 API 访问和优先支持',
            'faq.questions.billing.plans.list.3': '企业版（自定义价格）：自定义限制、专属支持和 SLA 保证',
            'faq.questions.billing.plans.note': '所有付费计划按月计费，可选择年度计费享受折扣。访问我们的定价页面查看详细的功能比较。',
            'faq.questions.billing.refund.title': '提供退款吗？',
            'faq.questions.billing.refund.answer': '是的，我们为所有新订阅提供 14 天退款保证。如果您在前 14 天内对我们的服务不满意，可以无条件要求全额退款。',
            'faq.questions.billing.refund.note': '对于初始 14 天期限后的退款请求，请联系我们的支持团队讨论您的具体情况。',

            // Copy messages
            'copy.success': '复制成功！',
            'copy.error': '复制失败！',

            // Data Privacy Blog Article
            'blog.dataPrivacy.title': '为什么数据隐私在地址生成中很重要 - AddressGen',
            'blog.dataPrivacy.intro': '在当今数字化时代，数据隐私不仅仅是一个流行词汇，它已经成为软件开发和测试过程中的核心考量因素。当我们需要生成地址信息进行测试时，保护个人隐私变得至关重要。',
            'blog.dataPrivacy.whyItMatters.title': '为什么数据隐私很重要？',
            'blog.dataPrivacy.whyItMatters.content': '在软件开发和测试过程中，开发人员经常需要大量的地址数据来验证应用程序的功能。传统上，团队可能会使用真实的个人信息或者从互联网上搜集的数据。然而，这种做法存在严重的隐私风险和法律问题。',
            'blog.dataPrivacy.risks.title': '使用真实数据的风险',
            'blog.dataPrivacy.risks.list': [
                '违反数据保护法规（如GDPR、CCPA等）',
                '泄露个人敏感信息',
                '面临法律诉讼和罚款',
                '损害公司声誉和客户信任',
                '不当使用他人身份信息'
            ],
            'blog.dataPrivacy.quote': '保护数据隐私不仅是法律义务，更是道德责任。在测试环境中使用虚构但真实的数据，是现代软件开发的最佳实践。',
            'blog.dataPrivacy.solution.title': '虚拟地址生成的解决方案',
            'blog.dataPrivacy.solution.content': '使用随机生成的地址信息是解决这一问题的有效方法。AddressGen提供的服务生成完全虚构但格式正确的地址信息，包括：',
            'blog.dataPrivacy.solution.features': [
                '符合各国地址格式规范的虚构地址',
                '随机生成的个人身份信息',
                '用于测试的虚构信用卡号码',
                '电话号码和电子邮件地址',
                '就业和公司信息'
            ],
            'blog.dataPrivacy.benefits.title': '使用虚拟数据的好处',
            'blog.dataPrivacy.benefits.legal.title': '1. 法律合规',
            'blog.dataPrivacy.benefits.legal.content': '使用虚构数据确保你的开发和测试活动符合各种数据保护法规。这消除了意外处理真实个人数据的风险，让你的团队专注于产品开发而不是法律问题。',
            'blog.dataPrivacy.benefits.quality.title': '2. 提高测试质量',
            'blog.dataPrivacy.benefits.quality.content': '随机生成的数据提供了更好的测试覆盖度。你可以生成各种边界情况和异常情况的数据，这在使用真实数据时往往难以获得。',
            'blog.dataPrivacy.benefits.flexibility.title': '3. 灵活性和可控性',
            'blog.dataPrivacy.benefits.flexibility.content': '你可以根据具体需求生成特定格式或类型的数据。需要测试国际地址格式？需要特定数量的测试用例？虚拟数据生成器可以轻松满足这些需求。',
            'blog.dataPrivacy.bestPractices.title': '最佳实践建议',
            'blog.dataPrivacy.bestPractices.intro': '为了最大化虚拟数据的价值同时确保隐私保护，我们建议遵循以下最佳实践：',
            'blog.dataPrivacy.bestPractices.list': [
                '<strong>制定明确的数据使用政策：</strong>确保团队成员了解何时使用虚拟数据vs真实数据',
                '<strong>定期更新测试数据：</strong>避免过度依赖固定的测试数据集',
                '<strong>标记测试环境：</strong>清楚标识哪些环境使用虚拟数据',
                '<strong>培训开发团队：</strong>确保所有成员了解数据隐私的重要性',
                '<strong>监控数据使用：</strong>定期审查数据使用情况，确保合规性'
            ],
            'blog.dataPrivacy.conclusion.title': '总结',
            'blog.dataPrivacy.conclusion.content': '数据隐私在现代软件开发中扮演着越来越重要的角色。通过使用虚拟地址生成服务，开发团队可以在不牺牲测试质量的前提下，确保完全的隐私合规性。AddressGen致力于为开发者提供高质量、真实可信的虚拟数据，帮助你构建更好的软件产品。',
            'blog.dataPrivacy.conclusion.cta': '立即开始使用AddressGen，体验安全、合规的虚拟数据生成服务，为你的开发和测试工作提供强有力的支持。',
            'blog.actions.like': '喜欢',
            'blog.actions.share': '分享',
            'blog.actions.backToBlog': '返回博客',
            'blog.relatedArticles': '相关文章',

            // UK Address Blog Article
            'blog.ukAddress.title': '了解英国地址格式 - AddressGen',
            'blog.ukAddress.intro': '英国的地址系统有着悠久的历史和独特的结构。理解英国地址格式对于正确生成测试数据和确保应用程序的国际兼容性至关重要。本文将深入解析英国地址的各个组成部分。',
            'blog.ukAddress.basicStructure.title': '英国地址基本结构',
            'blog.ukAddress.basicStructure.content': '英国地址通常包含以下几个主要部分，按从具体到一般的顺序排列：',
            'blog.ukAddress.example.title': '标准英国地址示例：',
            'blog.ukAddress.components.title': '地址组成部分详解',
            'blog.ukAddress.components.name.title': '1. 收件人姓名',
            'blog.ukAddress.components.name.content': '第一行通常是收件人的全名，包括称谓（Mr.、Mrs.、Ms.、Dr. 等）。在商业地址中，这里可能是公司名称。',
            'blog.ukAddress.components.street.title': '2. 街道地址',
            'blog.ukAddress.components.street.content': '街道地址包含门牌号和街道名称。英国的街道名称通常以Street、Road、Avenue、Lane等结尾。门牌号可能包含字母，如"123A"。',
            'blog.ukAddress.components.secondary.title': '3. 二级地址信息',
            'blog.ukAddress.components.secondary.content': '如果适用，这里包含公寓号、楼层或其他详细信息，如"Flat 2"、"2nd Floor"等。',
            'blog.ukAddress.components.locality.title': '4. 地区/城市',
            'blog.ukAddress.components.locality.content': '这通常是城市、镇或村庄的名称。在大城市中，可能还包含区域名称。',
            'blog.ukAddress.postcode.title': '英国邮政编码系统',
            'blog.ukAddress.postcode.intro': '英国邮政编码（Postcode）是地址系统中的关键部分，具有独特的格式和逻辑：',
            'blog.ukAddress.postcode.format.title': '邮政编码格式',
            'blog.ukAddress.postcode.format.content': '英国邮政编码由两部分组成，用空格分隔：',
            'blog.ukAddress.postcode.parts': [
                '<strong>外部代码（Outward Code）：</strong>1-2个字母 + 1-2个数字 + 可选字母',
                '<strong>内部代码（Inward Code）：</strong>1个数字 + 2个字母'
            ],
            'blog.ukAddress.postcode.examples.title': '邮政编码示例：',
            'blog.ukAddress.postcode.examples.format': '格式',
            'blog.ukAddress.postcode.examples.example': '示例',
            'blog.ukAddress.postcode.examples.area': '区域',
            'blog.ukAddress.postcode.special.title': '特殊邮政编码',
            'blog.ukAddress.postcode.special.content': '一些著名地址有特殊的邮政编码：',
            'blog.ukAddress.postcode.special.examples': [
                '<strong>SW1A 1AA</strong> - 白金汉宫',
                '<strong>SW1A 2AA</strong> - 唐宁街10号',
                '<strong>EC4M 8AD</strong> - 英格兰银行',
                '<strong>SE1 9RT</strong> - 莎士比亚环球剧院'
            ],
            'blog.ukAddress.regions.title': '英国地区差异',
            'blog.ukAddress.regions.intro': '英国包含四个构成国，各自有一些地址格式的特点：',
            'blog.ukAddress.regions.england.title': '英格兰（England）',
            'blog.ukAddress.regions.england.content': '使用标准的英国地址格式。大城市如伦敦、曼彻斯特、伯明翰等通常包含区域信息。',
            'blog.ukAddress.regions.scotland.title': '苏格兰（Scotland）',
            'blog.ukAddress.regions.scotland.content': '苏格兰地址可能包含"SCOTLAND"作为最后一行。城市名称如爱丁堡、格拉斯哥在地址中占据重要位置。',
            'blog.ukAddress.regions.wales.title': '威尔士（Wales）',
            'blog.ukAddress.regions.wales.content': '威尔士地址可能包含威尔士语和英语双语地名。邮政编码通常以"CF"、"LL"、"SA"等开头。',
            'blog.ukAddress.regions.ni.title': '北爱尔兰（Northern Ireland）',
            'blog.ukAddress.regions.ni.content': '北爱尔兰使用"BT"开头的邮政编码。地址格式与英格兰相似，但可能包含县名。',
            'blog.ukAddress.generation.title': '生成真实的英国地址',
            'blog.ukAddress.generation.intro': '在为测试目的生成英国地址时，需要注意以下要点：',
            'blog.ukAddress.generation.streetNames.title': '常见街道名称',
            'blog.ukAddress.generation.streetNames.list': [
                'High Street - 最常见的街道名称',
                'Church Lane - 教会相关街道',
                'Victoria Road - 以维多利亚女王命名',
                'Mill Lane - 磨坊小径',
                'Station Road - 车站路',
                'King\'s Road - 国王路',
                'Queen\'s Avenue - 女王大道'
            ],
            'blog.ukAddress.generation.validation.title': '地址验证要点',
            'blog.ukAddress.generation.validation.rules': [
                '邮政编码必须符合正确的格式规则',
                '门牌号可以包含数字和字母',
                '街道类型要与地区相匹配',
                '城市名称要与邮政编码区域对应',
                '避免使用真实存在的具体地址'
            ],
            'blog.ukAddress.best_practices.title': '最佳实践建议',
            'blog.ukAddress.best_practices.intro': '在应用程序中处理英国地址时，建议遵循以下最佳实践：',
            'blog.ukAddress.best_practices.list': [
                '<strong>灵活的字段长度：</strong>为地址字段预留足够的字符空间',
                '<strong>邮政编码验证：</strong>实施严格的邮政编码格式验证',
                '<strong>大小写处理：</strong>邮政编码通常使用大写字母',
                '<strong>国际化支持：</strong>考虑威尔士语等本地语言',
                '<strong>地址标准化：</strong>统一地址格式以便于处理'
            ],
            'blog.ukAddress.conclusion.title': '总结',
            'blog.ukAddress.conclusion.content': '理解英国地址格式的复杂性对于开发国际化应用程序至关重要。通过正确实施英国地址格式规则，你可以确保应用程序为英国用户提供最佳体验。AddressGen的英国地址生成器遵循所有这些规则，为你的测试需求提供准确、真实的地址数据。',
            'blog.ukAddress.conclusion.cta': '现在就尝试使用AddressGen生成符合标准的英国地址，为你的项目提供高质量的测试数据。',

            // Credit Card Blog Article
            'blog.creditCard.title': '信用卡号码生成：工作原理 - AddressGen',
            'blog.creditCard.warning.title': '重要声明',
            'blog.creditCard.warning.content': '本文介绍的信用卡号码生成技术仅供教育和测试目的。生成的号码完全虚构，不能用于任何实际交易。任何非法使用都将承担法律责任。',
            'blog.creditCard.intro': '信用卡号码的生成并非随机过程，而是遵循严格的数学算法和行业标准。理解Luhn算法的工作原理，有助于开发者创建有效的测试数据，同时确保系统的安全性和合规性。',
            'blog.creditCard.structure.title': '信用卡号码结构',
            'blog.creditCard.structure.intro': '每个信用卡号码都包含多个重要组成部分，每个部分都有特定的含义和功能：',
            'blog.creditCard.structure.components.title': '号码组成部分',
            'blog.creditCard.structure.components.list': [
                '<strong>发行人识别号码（IIN）：</strong>前6位数字，标识发卡机构',
                '<strong>账户识别符：</strong>中间的数字，唯一标识持卡人账户',
                '<strong>校验位：</strong>最后一位数字，用于验证号码的有效性'
            ],
            'blog.creditCard.structure.example.title': '信用卡号码示例分析：',
            'blog.creditCard.brands.title': '主要信用卡品牌识别',
            'blog.creditCard.brands.intro': '不同的信用卡品牌有不同的IIN范围和号码长度：',
            'blog.creditCard.brands.list': [
                '<strong>Visa：</strong>以4开头，16位数字',
                '<strong>MasterCard：</strong>以5开头（51-55）或2开头（2221-2720），16位数字',
                '<strong>American Express：</strong>以34或37开头，15位数字',
                '<strong>Discover：</strong>以6开头（6011, 622126-622925, 644-649, 65），16位数字',
                '<strong>JCB：</strong>以35开头（3528-3589），16位数字'
            ],
            'blog.creditCard.luhn.title': 'Luhn算法详解',
            'blog.creditCard.luhn.intro': 'Luhn算法（也称为模10算法）是由IBM的Hans Peter Luhn于1954年发明的校验和算法，用于验证信用卡号码的有效性。',
            'blog.creditCard.luhn.howItWorks.title': '算法工作原理',
            'blog.creditCard.luhn.howItWorks.intro': 'Luhn算法的验证过程包括以下步骤：',
            'blog.creditCard.luhn.steps': [
                '从右到左，对偶数位数字进行双倍处理',
                '如果双倍后的数字大于9，则将两位数字相加',
                '将所有数字相加得到总和',
                '如果总和能被10整除，则号码有效'
            ],
            'blog.creditCard.luhn.example.title': '# Luhn算法验证示例: 4532123456789012',
            'blog.creditCard.luhn.implementation.title': '算法实现',
            'blog.creditCard.luhn.implementation.intro': '以下是Luhn算法的JavaScript实现：',
            'blog.creditCard.generation.title': '安全的测试号码生成',
            'blog.creditCard.generation.intro': '在生成用于测试的信用卡号码时，必须遵循严格的安全准则：',
            'blog.creditCard.generation.principles.title': '生成原则',
            'blog.creditCard.generation.principles.list': [
                '<strong>完全虚构：</strong>确保生成的号码不对应任何真实账户',
                '<strong>符合格式：</strong>遵循正确的IIN范围和长度要求',
                '<strong>通过验证：</strong>满足Luhn算法校验',
                '<strong>明确标识：</strong>清楚标明仅供测试使用',
                '<strong>定期更新：</strong>避免长期使用相同的测试数据'
            ],
            'blog.creditCard.generation.testNumbers.title': '标准测试号码',
            'blog.creditCard.generation.testNumbers.intro': '支付行业提供了一些标准的测试号码，安全且被广泛接受：',
            'blog.creditCard.generation.testNumbers.examples.title': '常用测试号码：',
            'blog.creditCard.security.title': '安全考虑和最佳实践',
            'blog.creditCard.security.intro': '在处理信用卡信息时，即使是测试数据，也需要遵循严格的安全准则：',
            'blog.creditCard.security.dataHandling.title': '数据处理安全',
            'blog.creditCard.security.dataHandling.list': [
                '<strong>加密传输：</strong>使用HTTPS加密所有数据传输',
                '<strong>不记录敏感信息：</strong>避免在日志中记录信用卡号码',
                '<strong>最小权限原则：</strong>限制对测试数据的访问权限',
                '<strong>定期清理：</strong>定期清理测试环境中的敏感数据',
                '<strong>PCI DSS合规：</strong>遵循支付卡行业数据安全标准'
            ],
            'blog.creditCard.security.development.title': '开发环境安全',
            'blog.creditCard.security.development.list': [
                '<strong>环境隔离：</strong>测试环境与生产环境完全分离',
                '<strong>访问控制：</strong>实施严格的访问控制机制',
                '<strong>审计跟踪：</strong>记录所有数据访问和操作',
                '<strong>定期审查：</strong>定期审查安全措施的有效性'
            ],
            'blog.creditCard.security.reminder.title': '安全提醒',
            'blog.creditCard.security.reminder.content': '永远不要在生产环境中使用真实的信用卡号码进行测试。即使是有效的测试号码，也应该在安全的环境中使用，并确保不会被恶意利用。',
            'blog.creditCard.testing.title': '测试场景和应用',
            'blog.creditCard.testing.intro': '生成的信用卡号码在软件测试中有多种应用场景：',
            'blog.creditCard.testing.scenarios.title': '常见测试场景',
            'blog.creditCard.testing.scenarios.list': [
                '<strong>支付流程测试：</strong>验证支付表单和处理逻辑',
                '<strong>输入验证测试：</strong>测试号码格式验证功能',
                '<strong>用户界面测试：</strong>验证信用卡输入界面的交互',
                '<strong>性能测试：</strong>使用大量测试数据进行压力测试',
                '<strong>安全测试：</strong>验证安全措施的有效性'
            ],
            'blog.creditCard.testing.automation.title': '自动化测试集成',
            'blog.creditCard.testing.automation.content': '在自动化测试中，可以动态生成符合要求的测试信用卡号码，提高测试覆盖率和效率。AddressGen提供的API可以轻松集成到你的测试框架中。',
            'blog.creditCard.conclusion.title': '总结',
            'blog.creditCard.conclusion.content': '理解信用卡号码的生成原理和Luhn算法对于开发安全的支付系统至关重要。通过使用正确的测试方法和工具，开发者可以在确保安全性的前提下，创建高质量的支付相关应用程序。AddressGen提供的信用卡生成功能遵循所有行业标准，为你的测试需求提供可靠的支持。',
            'blog.creditCard.conclusion.cta': '立即使用AddressGen生成安全、合规的测试信用卡数据，为你的支付系统开发提供强有力的支持。',

            // Hong Kong Address Blog Article
            'blog.hkAddress.title': '香港地址系统详解 - AddressGen',
            'blog.hkAddress.intro': '香港作为国际金融中心，拥有独特而复杂的地址系统。理解香港地址的结构和特点对于生成准确的测试数据至关重要。本文将深入探讨香港地址系统的各个方面。',
            'blog.hkAddress.overview.title': '香港地址系统概览',
            'blog.hkAddress.overview.content': '香港的地址系统反映了其独特的历史背景和地理特点。由于香港由香港岛、九龙半岛和新界三个主要区域组成，每个区域都有自己的地址特点和命名规则。',
            'blog.hkAddress.overview.uniqueFeatures.title': '香港地址系统的独特特征：',
            'blog.hkAddress.overview.uniqueFeatures.list': [
                '中英文双语地址标识',
                '基于区域的分层地址结构',
                '独特的楼宇编号系统',
                '传统与现代命名方式并存'
            ],
            'blog.hkAddress.structure.title': '香港地址结构详解',
            'blog.hkAddress.structure.intro': '标准的香港地址通常包含以下几个层次，按从具体到一般的顺序排列：',
            'blog.hkAddress.structure.example.title': '标准香港地址示例：',
            'blog.hkAddress.structure.components.title': '地址组成部分',
            'blog.hkAddress.structure.components.region.title': '1. 地区标识',
            'blog.hkAddress.structure.components.region.content': '香港分为三个主要区域：香港岛（Hong Kong Island）、九龙（Kowloon）、新界（New Territories）。每个区域进一步细分为不同的区域。',
            'blog.hkAddress.structure.components.district.title': '2. 区域名称',
            'blog.hkAddress.structure.components.district.content': '如中环（Central）、铜锣湾（Causeway Bay）、尖沙咀（Tsim Sha Tsui）等。这些区域名称通常有标准的中英文对照。',
            'blog.hkAddress.structure.components.street.title': '3. 街道地址',
            'blog.hkAddress.structure.components.street.content': '包含街道名称和门牌号码。香港的街道名称常常反映历史背景，如皇后大道、德辅道等。',
            'blog.hkAddress.structure.components.building.title': '4. 楼宇名称',
            'blog.hkAddress.structure.components.building.content': '香港的商业和住宅楼宇通常都有独特的名称，如国际金融中心（IFC）、太古广场等。',
            'blog.hkAddress.structure.components.unit.title': '5. 楼层和单位',
            'blog.hkAddress.structure.components.unit.content': '使用"楼"表示楼层，"室"表示单位。英文中使用"/F"表示楼层，如"15/F"表示15楼。',
            'blog.hkAddress.regions.title': '三大区域特点',
            'blog.hkAddress.regions.hkIsland.title': '香港岛（Hong Kong Island）',
            'blog.hkAddress.regions.hkIsland.content': '香港岛是香港的商业和金融中心，包含许多著名区域：',
            'blog.hkAddress.regions.hkIsland.areas': [
                '<strong>中环（Central）：</strong>金融区，高档商业楼宇集中',
                '<strong>金钟（Admiralty）：</strong>政府机构和商业中心',
                '<strong>湾仔（Wan Chai）：</strong>商业和会议中心',
                '<strong>铜锣湾（Causeway Bay）：</strong>购物和娱乐区',
                '<strong>北角（North Point）：</strong>住宅和商业混合区'
            ],
            'blog.hkAddress.regions.kowloon.title': '九龙（Kowloon）',
            'blog.hkAddress.regions.kowloon.content': '九龙半岛是香港的重要商业和住宅区域：',
            'blog.hkAddress.regions.kowloon.areas': [
                '<strong>尖沙咀（Tsim Sha Tsui）：</strong>旅游和购物热点',
                '<strong>旺角（Mong Kok）：</strong>密集的商业和住宅区',
                '<strong>油麻地（Yau Ma Tei）：</strong>传统商业区',
                '<strong>红磡（Hung Hom）：</strong>交通枢纽和住宅区',
                '<strong>九龙塘（Kowloon Tong）：</strong>高档住宅区'
            ],
            'blog.hkAddress.regions.newTerritories.title': '新界（New Territories）',
            'blog.hkAddress.regions.newTerritories.content': '新界是香港面积最大的区域，包含许多新市镇：',
            'blog.hkAddress.regions.newTerritories.areas': [
                '<strong>沙田（Sha Tin）：</strong>大型新市镇',
                '<strong>大埔（Tai Po）：</strong>历史悠久的市镇',
                '<strong>元朗（Yuen Long）：</strong>传统农业转型的新市镇',
                '<strong>屯门（Tuen Mun）：</strong>工业和住宅并重',
                '<strong>荃湾（Tsuen Wan）：</strong>工业转型的商业区'
            ],
            'blog.hkAddress.naming.title': '街道命名特点',
            'blog.hkAddress.naming.intro': '香港的街道命名反映了其丰富的历史和文化背景：',
            'blog.hkAddress.naming.categories.title': '常见命名类别',
            'blog.hkAddress.naming.categories.type': '类型',
            'blog.hkAddress.naming.categories.examples': '示例',
            'blog.hkAddress.naming.categories.meaning': '含义',
            'blog.hkAddress.buildings.title': '楼宇编号和命名',
            'blog.hkAddress.buildings.intro': '香港的楼宇编号系统有其独特性：',
            'blog.hkAddress.buildings.numbering.title': '编号规则',
            'blog.hkAddress.buildings.numbering.rules': [
                '<strong>奇偶分布：</strong>通常奇数在一侧，偶数在另一侧',
                '<strong>跳号现象：</strong>某些"不吉利"的数字（如4、14）可能被跳过',
                '<strong>字母后缀：</strong>如123A、123B表示同一位置的不同入口',
                '<strong>范围编号：</strong>如123-125号表示一个大型建筑群'
            ],
            'blog.hkAddress.buildings.naming.title': '楼宇命名特点',
            'blog.hkAddress.buildings.naming.features': [
                '<strong>吉祥寓意：</strong>如"富豪阁"、"金运大厦"',
                '<strong>地理位置：</strong>如"海景大厦"、"山景园"',
                '<strong>开发商名称：</strong>如"太古广场"、"新鸿基中心"',
                '<strong>功能描述：</strong>如"商业中心"、"购物广场"'
            ],
            'blog.hkAddress.generation.title': '生成香港地址的要点',
            'blog.hkAddress.generation.intro': '在生成香港地址用于测试时，需要注意以下关键点：',
            'blog.hkAddress.generation.guidelines.title': '生成指南',
            'blog.hkAddress.generation.guidelines.list': [
                '<strong>区域一致性：</strong>确保地区、街道和楼宇名称的逻辑一致性',
                '<strong>双语对应：</strong>提供准确的中英文地址对应',
                '<strong>真实性平衡：</strong>地址看起来真实但不对应实际存在的地址',
                '<strong>文化敏感性：</strong>避免使用不合适或敏感的名称',
                '<strong>格式标准化：</strong>遵循香港邮政的地址格式标准'
            ],
            'blog.hkAddress.generation.examples.title': '生成地址示例：',
            'blog.hkAddress.validation.title': '地址验证和标准化',
            'blog.hkAddress.validation.intro': '验证香港地址的准确性需要考虑多个因素：',
            'blog.hkAddress.validation.criteria.title': '验证标准',
            'blog.hkAddress.validation.criteria.list': [
                '<strong>区域匹配：</strong>街道名称与所在区域要匹配',
                '<strong>楼层合理性：</strong>楼层编号要符合常理',
                '<strong>编号连续性：</strong>门牌号码要在合理范围内',
                '<strong>命名规范：</strong>楼宇名称要符合香港的命名习惯',
                '<strong>语言一致性：</strong>中英文版本要保持一致'
            ],
            'blog.hkAddress.conclusion.title': '总结',
            'blog.hkAddress.conclusion.content': '香港的地址系统虽然复杂，但遵循明确的规则和模式。理解这些规则对于创建准确、真实的测试数据至关重要。AddressGen的香港地址生成器充分考虑了这些特点，能够生成符合香港地址标准的高质量测试数据。',
            'blog.hkAddress.conclusion.cta': '现在就使用AddressGen生成符合香港地址标准的测试数据，为你的应用程序提供最真实的用户体验。',

            // Generator Batch Table Headers
            'generator.batch.table.headers.index': '序号',
            'generator.batch.table.headers.basicInfo': '基本信息',
            'generator.batch.table.headers.addressInfo': '地址信息',
            'generator.batch.table.headers.creditCardInfo': '信用卡信息',
            'generator.batch.table.tip': '提示：点击任意行可以复制该条记录的完整信息到剪贴板'
        }
    }
};

// 初始化i18next
function initializeI18n() {
    i18next.init({
        resources,
        lng: localStorage.getItem('language') || 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    }).then(() => {
        // 初始化语言选择器
        initializeLanguageSelector();
        // 更新页面文本
        updatePageText();
    });
}

// 更新页面文本
function updatePageText() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key) {
            element.textContent = i18next.t(key);
        }
    });
    
    // 更新当前语言显示
    const currentLangElement = document.getElementById('current-lang');
    if (currentLangElement) {
        currentLangElement.textContent = i18next.language === 'zh-CN' ? '简体中文' : 'English';
    }
    
    // 更新页面标题
    const titleElement = document.querySelector('title[data-i18n]');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-i18n');
        if (titleKey) {
            document.title = i18next.t(titleKey);
        }
    }
}

// 切换语言
function changeLanguage(lang) {
    // 先保存语言设置
    localStorage.setItem('language', lang);
    // 直接刷新页面
    window.location.reload();
}

// 初始化语言选择器
function initializeLanguageSelector() {
    const langButton = document.getElementById('lang-button');
    const langDropdown = document.getElementById('lang-dropdown');
    
    if (langButton && langDropdown) {
        // 点击按钮显示/隐藏下拉菜单
        langButton.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('hidden');
        });
        
        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
                langDropdown.classList.add('hidden');
            }
        });

        // 点击下拉菜单选项时关闭下拉菜单
        langDropdown.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                langDropdown.classList.add('hidden');
            }
        });
    }
}

// 复制到剪贴板并显示提示
function copyToClipboard(element) {
    const text = element.querySelector('p:last-child').textContent;
    navigator.clipboard.writeText(text).then(() => {
        showToast(i18next.t('copy.success'));
    }).catch(err => {
        showToast(i18next.t('copy.error'));
        console.error('复制失败:', err);
    });
}

// 显示 Toast 提示
function showToast(message) {
    // 创建 toast 元素
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 translate-y-0 opacity-100';
    toast.textContent = message;
    
    // 添加到页面
    document.body.appendChild(toast);
    
    // 2秒后移除
    setTimeout(() => {
        toast.classList.add('translate-y-2', 'opacity-0');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}