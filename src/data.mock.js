export const data = {
    main: {
        name: 'Ellen Liang',
        occupation: '(Software Engineer)',
        description:
            'A software engineer with 6 years of experience in Web Technologies and user interfaces using HTML5, DOM, CSS, SCSS, Bootstrap, JavaScript, React, jQuery, NodeJS, Webpack, Typescript, React Hook, Cypress etc.',
        image: 'profilepic.jpg',
        bio: 1,

        contactmessage:
            'Here is where you should write your message to readers to have them get in contact with you.',
        email: 'ellenliangwork@gmail.com',
        phone: '202-800-7285',
        address: {
            city: 'Arlington',
            state: 'VA',
            zip: '22202',
        },
        website: 'http://www.timbakerdev.com',
        resumedownload: 'https://test-ellenliang.s3.amazonaws.com/Ellenresume.pdf',
        social: [
            // {
            //     name: 'linkedin',
            //     url: 'https://www.linkedin.com/in/ellen-liang-773971215/',
            //     className: 'fa fa-linkedin',
            // },
            {
                name: 'github',
                url: 'https://github.com/YvetteVv',
                className: 'fa fa-github',
            },
        ],
    },
    resume: {
        skillmessage: [
            {
                id: 1,
                title: 'Languages & Database',
                skill: 'Java, JavaScript, React, TypeScript, NodeJS, HTML5, CSS3, SCSS, Bootstrap, jQuery, MySQL, MongoDB',
            },
            {
                id: 2,
                title: 'Version Controls',
                skill: 'TortoiseSVN, GIT.',
            },
            {
                id: 3,
                title: 'IDE Tools & Web Servers',
                skill: 'Visual Studio, WebStorm, IntelliJ AWS EC2 S3.',
            },
            {
                id: 4,
                title: 'SDLC Methodologies',
                skill: 'Waterfall, Agile Scrum.',
            },
            {
                id: 5,
                title: 'Testing & Others',
                skill: 'Cypress, Jasmine, JIRA, Jest, Enzyme, NPM, Yarn.',
            },
        ],

        education: [
            {
                school: 'George Washington University',
                degree: 'Masters in Computer Science',
                graduated: 'June 2018 - May 2020',
            },
            {
                school: 'Harbin Institute of Technology',
                degree: 'Bachelor in Computer Science',
                graduated: 'Sep2003 - July 2007',
            },
        ],
        work: [
            {
                company: 'Collov Home Design',
                title: 'Software Engineer',
                years: 'Aug 2020 - Present',
                description: [
                    'Worked on server-side web applications using NodeJS and involved in the Construction of UI using HTML5, CSS3, JavaScript, React, Ext JS, and Bootstrap.',
                    'Designed responsive UI pages using HTML5, CSS, JavaScript and react-bootstrap.',
                    'Created reusable React components for the application and used props for single directional data flow and used state for Class components.',
                    'Worked with unit testing of JavaScript applications using Jest, enzyme, and Integration test.',
                    'Worked with Passport and JSON web tokens for authentication and authorization security configurations using NodeJS.',
                    'Participated in Agile & TDD methodology for application development & used JIRA as a project management tool.',
                    'Experience in (interactive) data visualization with D3.js and Fabric.js',
                ],
            },
            {
                company: 'MyEdmaster',
                title: 'Software Engineer',
                years: 'Oct 2018 - July 2020',
                description: [
                    'Used React including authoring complex directives, services, components, filters, routing, and states to support routing in single-page applications.',
                    'Architected and implemented REST API interfaces using NodeJS and Express',
                    'Used Mongoose to write CRUD operations for retrieving and updating data',
                    'Implemented applications with the Lazy-Loading concept to decrease the initial payload time and downloading time for the application',
                    'Implemented the speech recognition and understanding UI to handle the customer input with React speech recognition and React hook',
                    'For unit testing used Jest, and Cypress for End-To-End testing',
                ],
            },
            {
                company: 'Feiyang Software',
                title: 'Software Engineer',
                years: 'Nov 2017 - Oct 2018',
                description: [
                    'Involved in designing web pages using HTML5, CSS3, JavaScript, Bootstrap, React.js, Redux, React Router, NodeJS, Express, and MongoDB.',
                    'Worked on the state, specs, props, and events to create interactive React JS components',
                    'Implemented HTTP REST API using NodeJS/Express and extensively tested RESTful services using Postman',
                    'Worked in an Agile environment with active scrum participation',
                    'Used GitHub as the version control tool to perform programs Checkout and Check-in from and to the repository',
                ],
            },
            {
                company: 'Gongda Software',
                title: 'Software Engineer',
                years: 'Sep 2015 - Oct 2017',
                description: [
                    'Developed the UI user interface pages using HTML, DHTML, CSS, JSON, JavaScript, jQuery, and Ajax',
                    'Used jQuery core libraries for the logical implementation part Confidential the client side of the website',
                    'Developed client-side drop-down menus, search bars, carousels, and drop-down toggles using Twitter-Bootstrap and jQuery',
                    'Involved in writing jQuery-based Ajax requests using jQuery. Get (URL, data, success, type), and jQuery. Post (URL, data, success, type).',
                    'Wrote extensive jQuery code to perform validation and CSS manipulation',
                    'Accessed the MySQL database from the server writing queries in SQL to retrieve and ensure system integrity',
                    'Developed test cases using Jasmine as a behavior-driven development framework to confirm outputs, behaviors, and performances of complete modules.',
                ],
            },
        ],
        skills: [
            {
                name: 'Javascript',
                level: '90%',
            },
            {
                name: 'React',
                level: '95%',
            },
            {
                name: 'NodeJS',
                level: '88%',
            },
            {
                name: 'HTML/CSS',
                level: '92%',
            },
            {
                name: 'Jest/Cypress',
                level: '80%',
            },
            {
                name: 'MongoDB',
                level: '85%',
            },
        ],
    },
    portfolio: {
        projects: [
            {
                title: 'Canadian Wanderlust',
                category: 'My Travel Blog for my post-university travels',
                image: 'canadian-wanderlust.jpg',
                url: 'https://www.canadianwanderlust.com',
            },
            {
                title: 'Fury Fighting Gear',
                category: '(offline now) A fighting gear company I started',
                image: 'fury-fighting-gear.jpg',
                url: 'http://www.timbakerdev.com',
            },
            {
                title: 'Original Thai Food',
                category: 'Website I built for a restaurant I like in Thailand',
                image: 'original-thai-food.jpg',
                url: 'http://www.timbakerdev.com/originalthaifood.github.io',
            },
            {
                title: 'Resume Website',
                category: 'A React based resume website template',
                image: 'resume-website.jpg',
                url: 'http://www.timbakerdev.com',
            },
            {
                title: 'Smirkspace',
                category:
                    '(MVP Only) A React and Meteor based chat University project.',
                image: 'smirkspace.jpg',
                url: 'http://www.smirkspace.com',
            },
        ],
    },
    testimonials: {
        testimonials: [
            {
                text: 'Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.',
                user: 'Kareem Abdul Jabbar',
            },
            {
                text: "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
                user: 'Steve Wozniak... impersonator',
            },
        ],
    },
};
