/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Derek Servin", // Changed username
  title: "Hello, I'm Derek", // Changed title
  subTitle: emoji(
    "An aspiring full-stack robotics engineer with a passion for building robots and automation systems. Experienced in ROS2, arm manipulation, and autonomous go-kart development." // Changed subtitle
  ),
  resumeLink:
    "resume.pdf", // Changed to "resume.pdf"
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Derek-Servin", // Changed to your username
  linkedin: "https://www.linkedin.com/in/derek-servin/", // Changed to your profile
  gmail: "servderek@gmail.com", // Changed to your email
  bluesky: "https://bsky.app/profile/derekservin.bsky.social", // Removed GitLab link
  facebook: "", // Removed Facebook link
  medium: "", // Removed Medium link
  stackoverflow: "", // Removed Stack Overflow link
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me", // Changed title to "About Me"
  subTitle: "Passionate Robotics Engineer with Expertise in ROS2 and Project Management", // Changed subtitle
  skills: [
    emoji(
      "⚡ Robotics System Design and Development" // Changed skills
    ),
    emoji("⚡ ROS2 (Robot Operating System 2) Expertise"), // Changed skills
    emoji(
      "⚡ Project Management and Team Leadership" // Changed skills
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "ROS2", // Changed skills
      fontAwesomeClassname: "fas fa-robot" // Changed skills
    },
    {
      skillName: "Python", // Changed skills
      fontAwesomeClassname: "fab fa-python" // Changed skills
    },
    {
      skillName: "C++", // Changed skills
      fontAwesomeClassname: "fab fa-cuttlefish" // Changed skills
    },
    {
      skillName: "JavaScript", // Changed skills
      fontAwesomeClassname: "fab fa-js" // Changed skills
    },
    {
      skillName: "Git", // Changed skills
      fontAwesomeClassname: "fab fa-git-alt" // Changed skills
    },
    {
      skillName: "Linux", // Changed skills
      fontAwesomeClassname: "fab fa-linux" // Changed skills
    },
    // Removed other software skills
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Michigan-Dearborn", // Changed school name
      logo: require("./assets/images/uofmd.png"), // Changed logo
      subHeader: "Bachelor of Science in Electrical Engineering", // Changed subheader
      duration: "[Start Year] - [End Year]", // Changed duration
      desc: "Relevant coursework and projects in robotics, control systems, and automation.", // Changed description
      descBullets: [
        "Robotics Design and Control", // Changed bullets
        "Embedded Systems" // Changed bullets
      ]
    },
    // Removed other school
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, // Set it to true to show Proficiency Section // Changed to false
  experience: [
    {
      Stack: "AutoCAD", // Changed stack
      //progressPercentage: "90%" // Changed percentage
    },
    {
      Stack: "Matlab", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "C & C++", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "Python", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "Markdown & YAML & JSON", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "GitHub", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "Photoshop", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "Lightroom", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "Blender", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "ROS Melodic & ROS2 Humble", // Changed stack
      progressPercentage: "85%" // Changed percentage
    },
    {
      Stack: "Webots", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    },
    {
      Stack: "Arduino IDE", // Changed stack
      //progressPercentage: "80%" // Changed percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section


const workExperiences = {
  display: true, //Set it to true to show work Experiences Section
  experience: [
    {
      role: "Intern CAD Drafter",
      company: "University of Michigan - Information Technology Services",
      companylogo: require("./assets/images/umits.png"),
      date: "Summer 2019",
      desc: "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Description Bullets Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Description Bullets Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Founder and Adminstrator",
      company: "D's Homework Help",
      companylogo: require("./assets/images/dhwh.png"),
      date: "June 14, 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "FIRST Robotics Mentor",
      company: "Cyber Cougars 6089",
      companylogo: require("./assets/images/cybercougars.jpg"),
      date: "March 2022 – April 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Undergratuate Student Researcher",
      company: "D's Homework Help",
      companylogo: require("./assets/images/sure.png"),
      date: "Summer 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Chief Engineer/Project Manager",
      company: "Intelligent Systems Club",
      companylogo: require("./assets/images/isclogo.png"),
      date: "September 2021 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true // Changed to false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects", // Changed title to "Projects"
  subtitle: "Highlighted Robotics Projects", // Changed subtitle
  projects: [
    {
      image: require("./assets/images/isclogo.png"), // Changed image
      projectName: "Robotics Project Phoenix", // Changed project name
      projectDesc: "Autonomous go-kart project using ROS2. Responsible for overall project management and technical direction.", // Changed description
      footerLink: [
        {
          name: "View Project", // Changed name
          url: "[Link to project, e.g., GitHub repo or video demo]" // Changed URL
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arm.jpg"), // Changed image
      projectName: "Arm Manipulator Project", // Changed project name
      projectDesc: "Designed and built an arm manipulator using ROS2, showcasing expertise in robotics and software integration.", // Changed description
      footerLink: [
        {
          name: "View Project", // Changed name
          url: "[Link to project, e.g., GitHub repo or video demo]" // Changed URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const smallProjects = {
  title: "Other Cool Projects", // Changed title to "Projects"
  subtitle: "Non-robotics projects", // Changed subtitle
  projects: [
    {
      image: require("./assets/images/isclogo.png"), // Changed image
      projectName: "Robotics Project Phoenix", // Changed project name
      projectDesc: "Autonomous go-kart project using ROS2. Responsible for overall project management and technical direction.", // Changed description
      footerLink: [
        {
          name: "View Project", // Changed name
          url: "[Link to project, e.g., GitHub repo or video demo]" // Changed URL
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/arm.jpg"), // Changed image
      projectName: "Arm Manipulator Project", // Changed project name
      projectDesc: "Designed and built an arm manipulator using ROS2, showcasing expertise in robotics and software integration.", // Changed description
      footerLink: [
        {
          name: "View Project", // Changed name
          url: "[Link to project, e.g., GitHub repo or video demo]" // Changed URL
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"), 
  subtitle:
    "", // Removed subtitle

  achievementsCards: [
    // Removed achievements
  ],
  display: true // Set false to hide this section, defaults to true // Changed to false
};

// Blogs Section

const blogSection = {
  title: "", // Removed title
  subtitle:
    "", // Removed subtitle
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones // Changed to false
  blogs: [
    // Removed blogs
  ],
  display: false // Set false to hide this section, defaults to true // Changed to false
};

// Talks Sections

const talkSection = {
  title: "", // Removed title
  subtitle: emoji(
    "" // Removed subtitle
  ),

  talks: [
    // Removed talks
  ],
  display: false // Set false to hide this section, defaults to true // Changed to false
};

// Podcast Section

const podcastSection = {
  title: emoji(""), // Removed title
  subtitle: "", // Removed subtitle

  // Please Provide with Your Podcast embeded Link
  podcast: [
    // Removed podcasts
  ],
  display: false // Set false to hide this section, defaults to true // Changed to false
};

// Resume Section
const resumeSection = {
  title: "", // Removed title
  subtitle: "", // Removed subtitle

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true // Changed to false
};

const contactInfo = {
  title: emoji("Contact"), // Changed title to "Contact"
  subtitle:
    "Feel free to reach out to me!", // Changed subtitle
  number: "", // Removed number
  email_address: "servderek@gmail.com" // Changed email
};

// Twitter Section

const twitterDetails = {
  userName: "", // Removed username
  display: false // Set true to display this section, defaults to false // Changed to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  smallProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};