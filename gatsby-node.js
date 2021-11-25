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
                role: 'Front-end Integration, UI/UX Consultation',
                agency: 'WIDE Switzerland',
            },
            images: [
                'https://res.cloudinary.com/jhamara/image/upload/v1637860072/projects/1_u09fuy.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860072/projects/2_lrm0og.jpg',
                'https://res.cloudinary.com/jhamara/image/upload/v1637860071/projects/3_mp7yv9.jpg',
            ],
            brief: "<strong>UTMB®</strong> - the world's biggest trail-running organization, has tasked our agency with creation of two interconnected online platforms, firstly <strong>UTMB World Series</strong>, a portal for the organization and its global series of races organized around the world, all leading up to the ultimate final race of the series - the famous ultramarathon <strong>UTMB® Ultra Trail de Mont Blanc</strong>. <br/><br/> Secondly, the <strong>design and development of a site factory</strong> based on <strong>React.js</strong> and <strong>Next.js</strong>, capable of dynamically generating a unique website for each separate race of the UTMB® World Series. <br/><br/>This site factory would be utilizing the same component library to generate the main site and all race sites, while using a single instance of <strong>headless content-management system</strong>, using <strong>Strapi</strong> to build a fast and self-hosted API.",
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
                role: 'Front-end Integration, UI/UX Consultation',
                agency: 'WIDE Switzerland',
            },
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
    ];

    pages.forEach((page) => {
        createPage({
            path: `/portfolio/${page.slug}`,
            component: require.resolve(`./src/templates/project-template.js`),
            context: {page},
        });
    });
};