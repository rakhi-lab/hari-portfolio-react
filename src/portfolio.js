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
  nickname: "PHP/WORDPRESS DEVELOPER",
  roles: [
    "PHP / WORDPRESS DEVELOPER",
    "LARAVEL / YII / CI DEVELOPER",
    "HTML5 / CSS3 / JAVASCRIPT / JQUERY DESIGNER"
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
    "I'm Hari Maliya, CEO & Founder at Intechno Software Private Limited. I completed my Bachelor's degree in Information Technology. I'm passionate about developing web based applications, SaaS applications, teaching programming, discovering new technologies and learning all about software development methodologies. WordPress is my passion. Developed 100+ WordPress plugins and themes for various clients locally and internationally. Basically I love working in the LAMP stack.\n\nMy abilities in managing diverse range of skills, Marketing & Training Activities, Customer Relationship Management (CRM), Business Ethics and Corporate Social Responsibility, Project Planning, formulation and management. I have experience since 2010 in Web programming. Expert in PHP5, OOP PHP, CodeIgniter framework, Laravel framework, MySQL, Smarty Template Engine, jQuery, AngularJS, HTML5, CSS3, Bootstrap 4, Bootstrap 5, Web Services in PHP5, Payment Gateway Integration, API implementation, etc. I am GIT and Mercurial for version control. Slack for task base work. When I'm not building websites, I love exploring new ideas, reading, watching movies and spending time with family.",
  details: [
    { name: "FULL NAME", value: "HARI SHANKAR MALIYA", icon: "fas fa-user" },
    { name: "BIRTHDAY", value: "15th August", icon: "far fa-calendar-alt" },
    { name: "HOBBIES", value: "Programming, Reading, Watching Movies", icon: "fas fa-heart" },
    { name: "PHONE", value: "+91-9950348952", icon: "fas fa-phone-alt" },
    { name: "EMAIL", value: "hmaliya55888@gmail.com", icon: "fas fa-envelope" },
    { name: "WEBSITE", value: "https://www.harimaliya.com/", icon: "fas fa-globe" },
  ],
  stats: [
    { name: "Years Experience", value: "13+", icon: "fas fa-briefcase", color: "#1877F2" },
    { name: "Happy Clients", value: "100+", icon: "fas fa-users", color: "#00A95F" },
    { name: "Projects Completed", value: "150+", icon: "fas fa-clipboard-list", color: "#F7931E" },
    { name: "Plugins & Themes", value: "100+", icon: "fas fa-trophy", color: "#9D50BB" },
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
        "Skills you can rely on for your next projects.",
        "PHP - 90%",
        "WordPress - 85%",
        "Laravel, CI - 95%",
        "MySQL - 80%",
        "HTML5, CSS3 - 90%",
        "Jquery, JavaScript - 95%"
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
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "Experience working on multiple cloud platforms",
        "Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "Deploying deep learning models on cloud to use on mobile devices",
        "Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        "Managing web hosting, domains, and server configurations using cPanel and GoDaddy",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "cPanel",
          fontAwesomeClassname: "simple-icons:cpanel",
          style: {
            color: "#FF6C2C",
          },
        },
        {
          skillName: "GoDaddy",
          fontAwesomeClassname: "simple-icons:godaddy",
          style: {
            color: "#1BDBDB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "Designing highly attractive user interface for mobile and web applications",
        "Customizing logo designs and building logos from scratch",
        "Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/PHP/WORDPRESS DEVLOPER/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/PHP/WORDPRESS DEVLOPER",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/PHP/WORDPRESS DEVLOPER",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Kota",
      subtitle: "Master of Business Administration, MBA In Marketing/Human Resource",
      logo_path: "education.svg",
      alt_name: "University of Kota",
      duration: "JULY 2017 - JUNE 2019",
      descriptions: [
        "⚡ Master of Business Administration with specialization in Marketing & Human Resource Management.",
        "⚡ Studied strategic management, consumer marketing, organizational dynamics, and corporate leadership.",
        "⚡ Applied analytical problem-solving and cross-functional leadership principles for scalable business operations.",
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
        "⚡ Studied core computer science & information technology subjects including Software Engineering, DBMS, Computer Networks, and Web Technologies.",
        "⚡ Hands-on application architecture, database administration, and modern software development practices.",
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
        "⚡ Completed Senior Secondary School Examination (Class XII) with focused foundation in Science and Mathematics.",
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
        "⚡ Completed Secondary School Examination (Class X) with strong academic standing across all foundational disciplines.",
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
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.harishanker.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  aboutMe,
};
