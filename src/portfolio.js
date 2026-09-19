/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hari Maliya Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hari Maliya Portfolio",
    type: "website",
    url: "http://harishankar.com",
  },
};

//Home Page
const greeting = {
  title: "Hari Shankar Maliya",
  logo_name: "Hari Shankar",
  nickname: "CEO & FOUNDER",
  roles: [
    "CEO & FOUNDER",
    "BUSINESS STRATEGIST",
    "TECH VISIONARY"
  ],
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "#/masterPortfolio",
  githubProfile: "#",
};

const aboutMe = {
  title: "Get To Know Me",
  subtitle: "A Passionate Developer | A Problem Solver | A Lifelong Learner",
  quote: "\"Keep Learning, Keep Building\"",
  description:
    "Hi, I’m Hari Maliya, CEO & Founder of Intechno Software Private Limited. With a Bachelor’s degree in Information Technology and over 16 years of experience in web and software development, I have built a career around creating practical, scalable digital solutions that solve real business problems.\n\nMy journey has been deeply shaped by WordPress development, where I’ve created 500+ plugins and themes for clients across India and international markets. I work with PHP, OOP, Laravel, CodeIgniter, MySQL, JavaScript, jQuery, AngularJS, HTML5, CSS3, Bootstrap, REST APIs, payment integrations, Git, and LAMP stack technologies to deliver reliable, high-impact products.\n\nBeyond development, I bring experience in project planning, CRM, marketing, training, business strategy, and team collaboration. As a founder, I enjoy turning ideas into scalable products, driving growth, and continuously improving how technology serves people and businesses.\n\nWhen I’m not building or exploring new technologies, I enjoy learning, reading, watching movies, discovering fresh ideas, and spending meaningful time with my family.",
  details: [
    { name: "FULL NAME", value: "HARI SHANKAR MALIYA", icon: "fas fa-user" },
    { name: "BIRTHDAY", value: "15th August", icon: "far fa-calendar-alt" },
    { name: "HOBBIES", value: "Programming, Reading, Watching Movies", icon: "fas fa-heart" },
    { name: "PHONE", value: "+91-9950348952", icon: "fas fa-phone-alt" },
    { name: "EMAIL", value: "hmaliya55888@gmail.com", icon: "fas fa-envelope" },
    { name: "WEBSITE", value: "https://www.harimaliya.com/", icon: "fas fa-globe" },
  ],
  stats: [
    { name: "Years Experience", value: "16+", image: require("./assets/images/3d_briefcase.png"), color: "#1877F2" },
    { name: "Happy Clients", value: "70K+", image: require("./assets/images/3d_people.png"), color: "#00A95F" },
    { name: "Projects Completed", value: "500+", image: require("./assets/images/3d_clipboard.png"), color: "#F7931E" },
    { name: "Plugins & Themes", value: "100+", image: require("./assets/images/3d_trophy.png"), color: "#9D50BB" },
  ],
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "#",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hari-shankar-maliya-402336353/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/c/WeblizarWordPressPremiumThemesAndPlugins",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:hmaliya55888@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/software86221",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/harishankar.kahar",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harimaliya/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "My Skills",
      fileName: "FullStackImg",
      skills: [
        "Leadership",
        "Strategic Thinking",
        "Decision-Making",
        "Financial Management",
        "Communication",
        "Team Management",
        "Sales & Business Development"
      ],
      softwareSkills: [
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      imagePath: "hari-fullstack.png",
      skills: [
        "Building responsive website front end using HTML5, CSS3, Bootstrap & JavaScript",
        "Developing mobile applications using Flutter",
        "Creating application backend in PHP, Laravel & WordPress",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "simple-icons:laravel",
          style: {
            color: "#FF2D20",
          },
        },
        {
          skillName: "WordPress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#21759B",
          },
        },
      ],
    },
    {
      title: "Leadership & Business Expertise",
      fileName: "CloudInfraImg",
      imagePath: "hari-business.jpg",
      skills: [
        "Business Strategy & Growth",
        "Product Development & Innovation",
        "Team Leadership & Management",
        "Client & Partner Relationships",
        "Sales & Business Development",
        "Technology & Digital Transformation",
        "Business Operations & Execution",
      ],
      softwareSkills: [],
    },
    {
      title: "Executive Leadership & Vision",
      imagePath: "designer-illustration.png",
      skills: [
        "Driving organizational growth and maximizing stakeholder value",
        "Defining corporate vision, mission, and long-term strategic goals",
        "Overseeing daily operations and ensuring effective execution of business strategies",
        "Leading high-performance executive teams and fostering a culture of innovation",
        "Navigating complex market dynamics and identifying new business opportunities",
      ],
      softwareSkills: [],
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  title: "Our Technology Stack and Platforms",
  subTitle: "Over 1,000 experts with 24+ years of experience in over 50 cutting-edge technologies.",
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  display: true, //Set this to true to display tech stack section
  technologies: [
    { name: "React", iconName: "simple-icons:react", color: "#61DAFB" },
    { name: "NodeJS", iconName: "simple-icons:node-dot-js", color: "#339933" },
    { name: "JavaScript", iconName: "simple-icons:javascript", color: "#F7DF1E" },
    { name: "Angular", iconName: "simple-icons:angular", color: "#DD0031" },
    { name: "PHP", iconName: "simple-icons:php", color: "#777BB4" },
    { name: "Laravel", iconName: "simple-icons:laravel", color: "#FF2D20" },
    { name: "WordPress", iconName: "simple-icons:wordpress", color: "#21759B" },
    { name: "MySQL", iconName: "simple-icons:mysql", color: "#4479A1" },
    { name: "AWS", iconName: "simple-icons:amazonaws", color: "#232F3E" },
    { name: "Docker", iconName: "simple-icons:docker", color: "#2496ED" },
    { name: "Git", iconName: "simple-icons:git", color: "#F05032" },
    { name: "Flutter", iconName: "simple-icons:flutter", color: "#02569B" },
    { name: "Figma", iconName: "simple-icons:figma", color: "#F24E1E" },
    { name: "Swift", iconName: "simple-icons:swift", color: "#FA7343" },
    { name: "Go Lang", iconName: "simple-icons:go", color: "#00ADD8" },
    { name: "Python", iconName: "simple-icons:python", color: "#3776AB" }
  ]
};

// Education Page


const degrees = {
  degrees: [
    {
      title: "University of Kota",
      subtitle: "Master of Business Administration, MBA In Marketing/Human Resource",
      logo_path: "education.svg",
      alt_name: "University of Kota",
      duration: "JULY 2017 - JUNE 2019",
      descriptions: [
        "Master of Business Administration with specialization in Marketing & Human Resource Management.",
        "Studied strategic management, consumer marketing, organizational dynamics, and corporate leadership.",
        "Applied analytical problem-solving and cross-functional leadership principles for scalable business operations.",
      ],
      website_link: "https://www.uok.ac.in",
    },
    {
      title: "L-BITS College Kota",
      subtitle: "Bachelor of Information Technology, BSc IN IT",
      logo_path: "education.svg",
      alt_name: "L-BITS College Kota",
      duration: "JULY 2007 - MAY 2010",
      descriptions: [
        "Studied core computer science & information technology subjects including Software Engineering, DBMS, Computer Networks, and Web Technologies.",
        "Hands-on application architecture, database administration, and modern software development practices.",
      ],
      website_link: "",
    },
    {
      title: "LBS School Kota, Rajasthan",
      subtitle: "Senior Secondary School Examination",
      logo_path: "education.svg",
      alt_name: "LBS School Kota, Rajasthan",
      duration: "JULY 2006 - JUNE 2007",
      descriptions: [
        "Completed Senior Secondary School Examination (Class XII) with focused foundation in Science and Mathematics.",
      ],
      website_link: "",
    },
    {
      title: "Adarsh School Kota, Rajasthan",
      subtitle: "Secondary School Examination",
      logo_path: "education.svg",
      alt_name: "Adarsh School Kota, Rajasthan",
      duration: "JULY 2004 - JUNE 2005",
      descriptions: [
        "Completed Secondary School Examination (Class X) with strong academic standing across all foundational disciplines.",
      ],
      website_link: "",
    },
  ],
};

const certifications = {
  certifications: [],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description: "",
  header_image_path: "",
  sections: [],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_hari.png",
    description:
      "I’m available across all major social media platforms and always open to new ideas, collaborations, and opportunities. Feel free to connect with me anytime—I’ll get back to you within 24 hours. I specialize in WordPress, Laravel, Android Development, Cloud Solutions, and Open Source Development, helping turn ideas into reliable and scalable digital solutions.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://weblizar.com/blog/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "5, Main Road, Krishna Nagar, Rangbari, Kota, Rajasthan 324005",
    locality: "Kota",
    country: "India",
    region: "Rajasthan",
    postalCode: "324005",
    streetAddress: "5, Main Road, Krishna Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.356982436479!2d75.83842!3d25.1236192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f8534ac294541%3A0x63bbba3373473faf!2sIntechno%20Software%20Private%20Limited!5e0!3m2!1sen!2sin!4v1789557703227!5m2!1sen!2sin",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
  emailSection: {
    title: "Email",
    subtitle: "hmaliya55888@gmail.com",
    link: "mailto:hmaliya55888@gmail.com",
  },
};

const megaTechStack = {
  title: "Technologies & Platforms",
  subtitle: "Expertise across modern frameworks, cloud infrastructure, and enterprise CMS.",
  categories: [
    {
      title: "Mobile Apps",
      icon: "fa-mobile-screen-button",
      skills: [
        { name: "Android", link: "https://www.dotsquares.com/technology/android-development" },
        { name: "React Native", link: "https://www.dotsquares.com/technology/react-native-development" },
        { name: "Ios", link: "https://www.dotsquares.com/technology/ios-development" },
        { name: "Flutter", link: "https://www.dotsquares.com/technology/flutter-development" },
        { name: "Swift", link: "https://www.dotsquares.com/technology/swift-development" },
        { name: "Kotlin", link: "https://www.dotsquares.com/technology/kotlin-development" },
        { name: "Xamarin", link: "https://www.dotsquares.com/technology/xamarin-development" }
      ]
    },
    {
      title: "Ecommerce",
      icon: "fa-cart-shopping",
      skills: [
        { name: "Adobe Commerce", link: "https://www.dotsquares.com/technology/adobe-commerce-development" },
        { name: "Shopify", link: "https://www.dotsquares.com/technology/shopify-development" },
        { name: "Symfony", link: "https://www.dotsquares.com/technology/symfony-development" },
        { name: "WooCommerce", link: "https://www.dotsquares.com/technology/woocommerce-development" },
        { name: "BigCommerce", link: "https://www.dotsquares.com/technology/bigcommerce-development" },
        { name: "Magento", link: "https://www.dotsquares.com/technology/magento-development" }
      ]
    },
    {
      title: "CMS",
      icon: "fa-layer-group",
      skills: [
        { name: "Wordpress", link: "https://www.dotsquares.com/technology/wordpress-development" },
        { name: "Drupal", link: "https://www.dotsquares.com/technology/drupal-development" },
        { name: "Craft", link: "https://www.dotsquares.com/technology/craftcms" },
        { name: "Acquia", link: "https://www.dotsquares.com/technology/acquia-development" },
        { name: "Joomla", link: "https://www.dotsquares.com/technology/joomla-development" },
        { name: "SharePoint", link: "https://www.dotsquares.com/technology/sharepoint-development" },
        { name: "Umbraco", link: "https://www.dotsquares.com/technology/umbraco-development" },
        { name: "Sitecore", link: "https://www.dotsquares.com/technology/sitecore-development" },
        { name: "Pantheon", link: "https://www.dotsquares.com/technology/pantheon" },
        { name: "AEM Development", link: "https://www.dotsquares.com/technology/aem-development" },
        { name: "Sitefinity", link: "https://www.dotsquares.com/technology/sitefinity" }
      ]
    },
    {
      title: "Custom Development",
      icon: "fa-code",
      skills: [
        { name: "PHP", link: "https://www.dotsquares.com/technology/php-development" },
        { name: "Python", link: "https://www.dotsquares.com/technology/python-development" },
        { name: "Laravel", link: "https://www.dotsquares.com/technology/laravel-development" },
        { name: "DotNet", link: "https://www.dotsquares.com/technology/dotnet-development" },
        { name: "ROR", link: "https://www.dotsquares.com/technology/ror-development" },
        { name: "NodeJS", link: "https://www.dotsquares.com/technology/node-js-development" },
        { name: "Power Platform", link: "https://www.dotsquares.com/technology/power-app-development" },
        { name: "Angular", link: "https://www.dotsquares.com/technology/angular-development" },
        { name: "HTML5", link: "https://www.dotsquares.com/hire-on-demand-developers" },
        { name: "Spring", link: "https://www.dotsquares.com/hire-on-demand-developers" },
        { name: "JavaScript", link: "https://www.dotsquares.com/technology/javascript-development" },
        { name: "C#", link: "https://www.dotsquares.com/technology/c-sharp-development" },
        { name: "Zoho Creator", link: "https://www.dotsquares.com/technology/zoho-creator-development" },
        { name: "NFT Marketplace", link: "https://www.dotsquares.com/technology/nft-marketplace-development" },
        { name: "Smart Contract", link: "https://www.dotsquares.com/technology/smart-contract-development" },
        { name: "Token Asset", link: "https://www.dotsquares.com/technology/token-asset-development" }
      ]
    },
    {
      title: "Full Stack Development",
      icon: "fa-cubes",
      skills: [
        { name: "MEAN", link: "https://www.dotsquares.com/technology/meanstack-development" },
        { name: "Full Stack", link: "https://www.dotsquares.com/full-stack-development" },
        { name: "MERN", link: "https://www.dotsquares.com/technology/mernstack-development" },
        { name: "Java", link: "https://www.dotsquares.com/technology/java-development" },
        { name: "React JS", link: "https://www.dotsquares.com/technology/reactjs-development" }
      ]
    },
    {
      title: "CRM",
      icon: "fa-users-gear",
      skills: [
        { name: "ServiceNow", link: "https://www.dotsquares.com/technology/service-now" },
        { name: "Salesforce", link: "https://www.dotsquares.com/salesforce-consulting-services" },
        { name: "Odoo", link: "https://www.dotsquares.com/technology/odoo" },
        { name: "HubSpot", link: "https://www.dotsquares.com/hubspot-consulting-services" },
        { name: "Zoho", link: "https://www.dotsquares.com/zoho-consulting-services" },
        { name: "MS Dynamics", link: "https://www.dotsquares.com/ms-dynamic-consulting-services" },
        { name: "GoHighLevel CRM SOLUTION", link: "https://www.dotsquares.com/gohighlevel-consulting-services" }
      ]
    },
    {
      title: "Game Development",
      icon: "fa-gamepad",
      skills: [
        { name: "Unity", link: "https://www.dotsquares.com/technology/unity-development" },
        { name: "Unreal", link: "https://www.dotsquares.com/technology/unreal-development" },
        { name: "Maya", link: "https://www.dotsquares.com/hire-on-demand-developers" },
        { name: "3DS MAX", link: "https://www.dotsquares.com/technology/3d-development" },
        { name: "Blender", link: "https://www.dotsquares.com/hire-on-demand-developers" }
      ]
    },
    {
      title: "Cloud",
      icon: "fa-cloud",
      skills: [
        { name: "AWS", link: "https://www.dotsquares.com/technology/aws" },
        { name: "Azure", link: "https://www.dotsquares.com/technology/azure" },
        { name: "Google Cloud", link: "https://www.dotsquares.com/technology/google-cloud" },
        { name: "DevOps", link: "https://www.dotsquares.com/technology/devops-development" }
      ]
    },
    {
      title: "Immersive Development",
      icon: "fa-vr-cardboard",
      skills: [
        { name: "Golang", link: "https://www.dotsquares.com/hire-on-demand-developers" },
        { name: "AR/VR", link: "https://www.dotsquares.com/technology/ar-vr-development" }
      ]
    }
  ]
};

const platformsData = {
  title: "Platforms",
  subtitle: "Over 16+ years of experience in various cutting-edge technologies.",
  technologies: [
    { name: "AWS", icon: "simple-icons:amazonaws", color: "#232F3E" },
    { name: "PHP", icon: "simple-icons:php", color: "#777BB4" },
    { name: "WordPress", icon: "simple-icons:wordpress", color: "#21759B" },
    { name: "React", icon: "simple-icons:react", color: "#61DAFB" },
    { name: "Node.js", icon: "simple-icons:nodedotjs", color: "#339933" },
    { name: "Laravel", icon: "simple-icons:laravel", color: "#FF2D20" },
    { name: "Docker", icon: "simple-icons:docker", color: "#2496ED" },
    { name: "Firebase", icon: "simple-icons:firebase", color: "#FFCA28" },
    { name: "Angular", icon: "simple-icons:angular", color: "#DD0031" },
    { name: "JavaScript", icon: "simple-icons:javascript", color: "#F7DF1E" },
    { name: "HTML 5", icon: "simple-icons:html5", color: "#E34F26" },
    { name: "Python", icon: "simple-icons:python", color: "#3776AB" },
    { name: "Kotlin", icon: "simple-icons:kotlin", color: "#7F52FF" },
    { name: "Swift", icon: "simple-icons:swift", color: "#FA7343" },
    { name: "MySQL", icon: "simple-icons:mysql", color: "#4479A1" },
  ]
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  megaTechStack,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  aboutMe,
  platformsData,
};
