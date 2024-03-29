import { 
  faJava, 
  faJs, 
  faPython, 
  faAngular, 
  faNodeJs, 
  faGit 
} from '@fortawesome/free-brands-svg-icons';

import { 
  faLaptopCode, // An alternative code icon
  faHdd, // An alternative storage/database icon
  faLayerGroup // An alternative icon for TypeORM
} from '@fortawesome/free-solid-svg-icons';

// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Mohamed",
  middleName: "",
  lastName: "Dahir",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/MohamedDahir100",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/mohamed-dahir-15783222a/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/mohamed.jpeg"),
  imageSize: 375,
  message:
    "Hi! I'm Mohamed Dahir, a third-year Computer Science student at Carleton University.  My journey in the world of technology has been an exhilarating exploration of endless possibilities. Fueled by an unyielding curiosity, I'm always eager to learn, create, and unveil the wonders that the tech universe holds. During my previous internships, I had the incredible opportunity to collaborate with exceptional developers. These experiences not only honed my technical skills but also taught me the art of effective teamwork and the value of continuous learning. The dynamic environment of these internships fueled my drive to consistently push my boundaries and expand my knowledge horizons. Beyond lines of code and debugging sessions, I find solace in the embrace of nature and the pages of a good book. Exploring the great outdoors allows me to recharge and gain fresh perspectives, while reading fuels my imagination and broadens my understanding of the world. Join me as I set out on this voyage, navigating the intricate domains of computer science and innovation.",
    resume: require("../editable-stuff/Mohamed_Software_Developer.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Experience",
  gitHubUsername: "hashirshoaeb", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  // show: false,
  // heading: "Leadership",
  // message:
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  // images: [
  //   { 
  //     img: require("../editable-stuff/hashirshoaeb.png"), 
  //     label: "First slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
  //   },
  //   { 
  //     img: require("../editable-stuff/hashirshoaeb.png"), 
  //     label: "Second slide label", 
  //     paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." s
  //   },
  // ],
  // imageSize: {
  //   width:"615",
  //   height:"450"
  // }
};

// SKILLS SECTION
const skills = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  show: true,
  heading: "Technical Skills",
  hardSkills: [
    { icon: faJava, name: "Java" },
    { icon: faJs, name: "JavaScript" },
    { icon: faJs, name: "TypeScript" },
    { icon: faPython, name: "Python" },
    { icon: faAngular, name: "Angular" },
    { icon: faNodeJs, name: "NestJs" }, 
    { icon: faLaptopCode, name: "RxJS" }, 
    { icon: faNodeJs, name: "Express.js" }, 
    { icon: faHdd, name: "MySQL" },
    { icon: faLayerGroup, name: "TypeORM" },
    { icon: faGit, name: "Git" },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you're in search of a dedicated and adaptable team member, one who brings an authentic passion for growth and collaboration, I'm fully prepared to contribute to your team's accomplishments, please feel free to email me at",
  email: "mohamed.dahir561@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Full Stack Devoloper Intern',// Here Add Company Name
      company: 'VectorSolv',
      companylogo: require('../assets/img/VectorSolv.jpeg'),
      date: 'May 2023 – Aug 2023',
      info:'• Engineered a transformative warranty table feature with Angular, RxJS, NestJs, and TypeORM, enhancing user experience, fortifying security, and improving decision-making ; • Enhanced security by seamlessly integrating permission checks with Angular and NestJs, ensuring the utmost protection of confidential data and fostering trust in the products security framework;• Leveraged Angular and NestJs to efficiently spotlight Distributor information within Warranty Product, enhancing user engagement and comprehension while enabling more informed decision-making;• Strategically resolved critical bugs across customer and admin portals with Angular, NestJs, RxJS, and TypeORM, significantly improving user experience, product stability, and overall success;',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Snow Software',
      companylogo: require('../assets/img/SnowSoftware.jpeg'),
      date: 'Jan 2023 – Apr 2023',
      info:'• Implemented a Limit Login Feature using Java, allowing admin users to configure fail attempt limits, and rigorously tested it with EasyMock, resulting in elevated security and enhanced system resilience.; • Led system upgrades for Apache Tomcat and Guacamole, optimizing performance, seamlessly integrating them into GCPs cloud infrastructure, and achieving a 70% process enhancement.;• Collaborated with the QA team to rectify user-reported bugs using Java and EasyMock, ensuring product alignment, stability, and customer satisfaction',
    },
    {
      role: 'Data Analyst Intern',
      company: 'Statistics Canada',
      companylogo: require('../assets/img/stats.jpeg'),
      date: 'May 2022 – Dec 2022',
      info:'• Developed a centralized SQL Database to optimize data storage and accessibility, streamlining data management for the Customer Success team, expediting data-driven decision-making, and enhancing their processes by 100%; • Streamlined data-to-report processes by automating Power BI report connections through Power Automate, ensuring accurate and efficient customer data capture.; • Designed real-time Interactive Dashboards using Power BI and Power Automate, informing senior leaderships decisions, shaping Data Analytics as a service, and facilitating the budgeting of millions of dollars in funding.', 
    },
    
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
