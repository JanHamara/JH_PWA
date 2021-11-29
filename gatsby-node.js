if (process.env.NODE_ENV === 'development') {
    process.env.GATSBY_WEBPACK_PUBLICPATH = '/';
}

exports.createPages = ({actions}) => {
    const {createPage} = actions;
    // pull in or use whatever data
    const pages = [
        {
            slug: 'utmb',
            title: 'UTMB® World Series',
            header: {
                techstack: 'React, Next.js, Typescript, Strapi, Docker, React Aria',
                client: 'UTMB®',
                role: ['Front-end Integration', 'UI/UX Consultation'],
                agency: 'WIDE Switzerland',
            },
            previewImage:
                'https://res.cloudinary.com/jhamara/image/upload/v1637860072/projects/1_u09fuy.jpg',
            shortDesc:
                'Online race platform and site-factory for the <strong>biggest trail-running organization in the world</strong>...',
            images: [
                'https://res.cloudinary.com/jhamara/image/upload/v1637860072/projects/1_u09fuy.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860072/projects/2_lrm0og.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860071/projects/3_mp7yv9.jpg',
            ],
            brief: "<strong>UTMB®</strong> - the world's biggest trail-running organization has tasked our agency with creation of two interconnected online platforms, firstly <strong>UTMB World Series</strong>, a portal for the organization and its global series of races organized around the world, all leading up to the ultimate final race of the series - the famous ultramarathon <strong>UTMB® Ultra Trail de Mont Blanc</strong>. <br/><br/> Secondly, the <strong>design and development of a site factory</strong> based on <strong>React.js</strong> and <strong>Next.js</strong>, capable of dynamically generating a unique website for each separate race of the UTMB® World Series. <br/><br/>This site factory would be utilizing the same component library to generate the main site and all race sites, while using a single instance of <strong>headless content-management system</strong>, using <strong>Strapi</strong> to build a fast and self-hosted API.",
            // stack: ['react', 'nextjs', 'nodejs', 'typescript', 'strapi'],
            role: 'My main role in the team was the <strong>integration of react-based reusable UI components</strong> for the site factory and main site, making sure they represent the <strong>best practices and highest standards</strong> in terms of <strong>usability, accessibility and performance.</strong> <br/><br/> This process included regular <strong>UI/UX consultation</strong> and <strong>review meetings with the client</strong> and project manager to discuss various usability issues and <strong>UX improvement proposals</strong>, as well as to present various benefits that the implementation of proposed enhancements would bring into production.',
            achievement:
                'During this project, our team has used a <strong>scrum framework</strong>, following the principles of <strong>agile software development</strong>, which has allowed us to <strong>continuously deliver and present meaningful pieces of work</strong> to our client on weekly basis, <strong>effectively respond to change in client requirements</strong> at any stage of project, and most importantly <strong>demonstrate an increase in team productivity on almost weekly basis</strong>. <br/><br/> This was achieved thanks to efficient workload estimation, short but intensive sprints, as well as regular <strong>sprint retrospectives</strong> and <strong>code reviews</strong>. <br/><br/> My personal contribution in this area, was the creation of <strong>team-specific workflow</strong> to be applied on every individual task, establishing <strong>crucial points</strong> and <strong>requirements</strong> that needed to be fulfilled in order to move task from one stage of development to another (on a Kanban board)',
        },
        {
            slug: 'easygym',
            title: 'Easygym',
            header: {
                techstack: 'Modulus, Express, Sylius, Webpack, Docker, ESLint + Lint-Staged',
                client: 'easyGym',
                role: ['Front-end Integration', 'UI/UX Consultation'],
                agency: 'WIDE Switzerland',
            },
            previewImage:
                'https://res.cloudinary.com/jhamara/image/upload/v1637860061/projects/1_hp45mx.jpg',
            shortDesc:
                'Website development for a gym franchise owned by one of the most-known consumer brands in Europe - <strong>easyJet</strong>...',
            images: [
                'https://res.cloudinary.com/jhamara/image/upload/v1637860061/projects/1_hp45mx.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860060/projects/2_ifgruf.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860062/projects/3_xrkgx7.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860062/projects/4_kglqad.jpg',
            ],
            brief: '<strong>Easygym</strong> - a gym model franchise stemmed up from one of Europe’s most well recognized consumer brands <strong>easyJet</strong>, offering <strong>low-cost</strong> and <strong>no contract memberships</strong>, <strong>premium gym facilities</strong> and <strong>free gym classes</strong>. <br/><br/> Deriving from the <strong>crucial catch</strong> word in their brand name - <strong>EASY</strong>, our agency has won the project with a pitch of <strong>marketing materials, website and application design concept</strong> that revolved around the idea of <strong>“feeling easy”</strong>. Rather than utilizing the so-often used gym image of <strong>muscularity</strong>, <strong>sweat</strong> and <strong>hard work</strong>, we wanted to make users feel like they can come to <strong>easyGym</strong> with <strong>no expectations</strong> or <strong>pressure</strong> being put on them, in terms of their results or performance in gym.',
            // stack: ['react', 'nextjs', 'nodejs', 'typescript', 'strapi'],
            role: "The <strong>target audience</strong> of this gym franchise and of the accompanying marketing campaign was thus defined mostly by the type of people <strong>who are not looking for an intensive and disciplined workout plan</strong> and a network of body builders and cross-fitters, but are rather looking for a gym that they can <strong>enjoy sporadically</strong> to their liking, whether that is for their <strong>personal well-being</strong>, <strong>spending time with friends</strong>, or <strong>meeting new people</strong> during group classes - the ultimate goal is always to achieve the <strong>'feel good' effect</strong>",
            achievement:
                'I worked on the front-end integration of  <strong>reusable UI components</strong> using an internal web component Javascript library called <strong>Modulus</strong>, also assisting back-end devs during development of API with <strong>Sylius</strong>, a powerful headless eCommerce platform, recognized by developers as the best <strong>Symfony-based</strong> framework built with <strong>API Platform</strong>, ready to interface with <strong>PWA</strong>, <strong>SPA</strong>, or <strong>Native Mobile Apps</strong>. <br/><br/> In order to create a <strong>robust</strong> and <strong>well organized design system</strong> powered by our UI components, as well as to achieve <strong>the highest level of abstraction and modularity</strong> within our component library, we have been following <strong>the atomic design methodology</strong>',
        },
        {
            slug: 'bat',
            title: 'BLAST® by BAT',
            header: {
                techstack:
                    'SF Lightning Web Components, Salesforce B2B Commerce Cloud, Adobe Illustrator, After Effects',
                client: 'British American Tobacco',
                role: ['Front-end Integration', 'UI/UX Design'],
                agency: 'WIDE Switzerland',
            },
            previewImage:
                'https://res.cloudinary.com/jhamara/image/upload/v1637922275/projects/1_pbli52.jpg',
            shortDesc:
                'B2B e-Commerce platform for retailers of <strong>British American Tobacco products</strong>...',
            images: [
                'https://res.cloudinary.com/jhamara/image/upload/v1637922275/projects/1_pbli52.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637922488/projects/BAT_-_2_sqrubq.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637927285/projects/3_ydjtos.jpg',
            ],
            brief: '<strong>British American Tobacco</strong> has tasked our agency with a creation of <strong>BLAST®</strong> platform, a brand new <strong>B2B e-commerce product</strong> for their retailers, offering not only a new image for their <strong>product catalogue</strong> along with an <strong>improved shopping experience</strong>, but also with additional features, such as <strong>retailer training platform</strong>, <strong>loyalty points scheme</strong> with discounts on purchases, as well as <strong>daily lottery</strong> for official platform members.',
            // stack: ['react', 'nextjs', 'nodejs', 'typescript', 'strapi'],
            role: "We have built the platform on top of <strong>Salesforce B2B Commerce Cloud</strong>, also making use of Salesforce's <strong>Lightning Web Components (LWCs)</strong> for the development of UI. Lightning Web Components are extremely lightweight, they use <strong>core Web Components standards</strong>, follow latest accessibility requirements and deliver exceptional performance in browsers that support Salesforce. <br/><br/> Most importantly, however, these components are optimized for use within <strong>Salesforce's Experience Cloud</strong> Visual Editor, allowing non-technical users to use these components easily in a drag-and-drop editor, <strong>creating full page layouts</strong> and <strong>managing data flows into components</strong> from within a simple visual editor.",
            achievement:
                'My responsibility was mostly the front-end integration, <strong>development of UI components</strong> with Lightning Web Components technology, integration with <strong>Commerce Cloud</strong> data, as well as setting up <strong>page templates</strong> and <strong>data flows</strong> through component data attributes set up in <strong>Experience Cloud.</strong>. <br/><br/> As the project progressed, I have taken on more responsibilities for some <strong>creative tasks</strong>, for example, designing a <strong>collection of animated illustrations</strong> requested by client, with which they wanted to give the platform a little bit of <strong>personal "fun" touch</strong>.',
        },
        {
            slug: 'rd',
            title: 'Roger Dubuis',
            header: {
                techstack: 'HTML, CSS, PHP, Twig, Drupal, Docker',
                client: 'Roger Dubuis',
                role: ['Front-end integration', 'Maintenance'],
                agency: 'WIDE Switzerland',
            },
            previewImage:
                'https://res.cloudinary.com/jhamara/image/upload/v1638109960/projects/ROGER_DUBUIS_1_rxnmgb.jpg',
            shortDesc:
                'An official website for <strong>Roger Dubuis</strong>, a Swiss manufacturer of luxury watches...',
        },
        {
            slug: 'notify',
            title: 'Notify',
            header: {
                techstack: 'Adobe CC, HTML, Less, Vanilla JS, Python, Cisco™ Beacon',
                // client: 'Cisco',
                role: ['UI/UX Design', 'Project Management'],
                // agency: 'WIDE Switzerland',
            },
            shortDesc:
                'A <strong>revolutionary commerce application</strong> from <strong>Cisco University Hackathon</strong>...',
            sideImages: {
                left: 'https://res.cloudinary.com/jhamara/image/upload/v1638177752/projects/logo_maekcq.png',
                right: 'https://res.cloudinary.com/jhamara/image/upload/v1638177752/projects/animation_mbut0m.gif',
            },
            previewImage:
                'https://res.cloudinary.com/jhamara/image/upload/v1638193946/projects/NOTIFY_4_vjzffg.jpg',
            images: [
                'https://res.cloudinary.com/jhamara/image/upload/v1638193946/projects/NOTIFY_4_vjzffg.jpg',
                '',
                'https://res.cloudinary.com/jhamara/image/upload/v1638193948/projects/NOTIFY_6_m289r3.jpg',
            ],
            brief: "The concept of <strong>Notify</strong> application began at the <strong>CISCO University Hackathon 2016</strong>, where I participated as the <strong>project manager</strong> and <strong>UI/UX designer</strong> of <strong>Glasgow University Team</strong> along with three classmates. As a team, we had 24 hours to develop a <strong>Proof of Concept</strong> for a revolutionary applicaton in any area, but required to use one of Cisco's technological developments. <br/><br/> Motivated by a surprising statistic that <strong>'only 3% of products browsed online each day actually end up being purchased'</strong>, our team seeked to capitalise on people's habit of just browsing e-stores <strong>without converting to the checkout</strong>. We came up with an application idea that could revolutionize e-commerce by bringing together the world of online shopping with the hands-on experience of brick-and-mortar shops.",
            role: "The main purpose of this app was to <strong>monitor user's activity on e-commerce sites</strong>, collecting data about products that users seems to be interested in the most, later using that data to <strong>reinforce the urge to buy</strong> that product, by <strong>notifying the user when this product is available near them</strong> in a physical store. <br/></br/> This match between user's database of <strong>'desired'</strong> products and the database of brick-and-mortar store would be done by <strong>Cisco Beacon™</strong>. The urge to buy would be further <strong>incentivized with discount</strong> offered on any purchase done via the application, leading the user towards the simplest route to the product - buy the product with <strong>one click</strong> and simply <strong>collect in store</strong>",
            achievement:
                'My role was divided between <strong>managing the team efforts</strong> during the 24-hour hackathon, as well as <strong>producing graphic materials</strong> for the concept. That included designing a completely custom <strong>typography</strong> for the logo and <strong>the design of logo</strong> itself, landing page design mockup for the web app, and most importantly the <strong>design of the application UI</strong> mockups for the demo. <br/><br/> Our efforts did not go unnoticed, as the application and its demo have earned us <strong>a second place</strong> at this prestigious hackathon. Apart from beating <strong>Oxford</strong> and <strong>Cambridge</strong> universities in the final ranking, we have also received a personal endorsement from <strong>CEO of Cisco UK</strong>, and consequently the opportunity to pitch our idea for investor panel of <strong>start-up incubator IDEALondon</strong>',
        },
        {
            slug: 'ih',
            title: 'Internship Hunter',
            header: {
                techstack: 'Phaser.io, HTML, CSS, Adobe Illustrator, Adobe After Effects',
                // client: 'Cisco',
                role: ['UI/UX Design', 'Game Design'],
                // agency: 'WIDE Switzerland',
            },
            shortDesc:
                'A funky <Strong>8-bit style oldschool game</strong> about devs chasing those internships...',
            previewImage:
                'https://res.cloudinary.com/jhamara/image/upload/v1638197770/projects/INTERNSHIP_HUNTER_ubyeay.jpg',
            images: [
                'https://res.cloudinary.com/jhamara/image/upload/v1638197770/projects/INTERNSHIP_HUNTER_ubyeay.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1638198806/projects/INTERNSHIP_HUNTER_1_uj3j2t.jpg',
            ],
            video: 'https://player.vimeo.com/video/442035775?h=549add8c73',
            brief: '<strong>Internship Hunter</strong> was a fun little project developed in just 24 hours by our team at an annual <strong>Hack Cambridge</strong> hackathon, a short but entertaining <strong>8-bit style oldschool game</strong> with a theme of <strong>developers hunting for internships</strong> at various companies who sponsored the hackathon. <br/><br/> <strong>Rules?</strong> Better the company you pick, more points you get. If you pick up beer, you become slower, while picking up Redbull gives you a speed boost.',
            role: 'We created the game using <strong>Phaser.io</strong>, a fast open source framework for development of <strong>Canvas</strong> and <strong>WebGL</strong> powered browser games. My role was <strong>creation of static assets</strong> for the game, mainly <strong>design of the game interface</strong>, <strong>splashscreen</strong>, <strong> maps</strong>, <strong>character sprites</strong> and their <strong>motion frames</strong>. My intention from the beginning was to give the game the old school look of 8-bit games, therefore the aim was to create <strong>hacker sprites</strong> with as few pixels as possible, while still achieving the desired level of detail.<br/><br/> While the utility of our game was not big enough to win main prizes, we have been awarded an <strong>honorable mention</strong> for the most entertaining project of the hackathon.',
        },
    ];

    pages.forEach((page) => {
        createPage({
            path: `/portfolio/${page.slug}`,
            component: require.resolve(`./src/templates/project-template.js`),
            context: {page},
        });
    });

    createPage({
        path: `/portfolio`,
        component: require.resolve(`./src/templates/portfolio-page.js`),
        context: {pages},
    });
};
