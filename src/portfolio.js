/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Zack's Portfolio",
  description:
    "An impassioned individual consistently strives to engage in end-to-end product development, fostering the growth of sustainable and scalable social and technical systems to make a meaningful impact.",
  og: {
    title: "Zakaria Bouachra Portfolio",
    type: "website",
    url: "http://zakariabouachra.com/",
    
  },
};

//Home Page
const greeting = {
  title: "Zakaria Bouachra",
  logo_name: "ZakariaBouachra",
  subTitle:
    "An impassioned individual consistently strives to engage in end-to-end product development, fostering the growth of sustainable and scalable social and technical systems to make a meaningful impact.",
  githubProfile: "https://github.com/zakariabouachra",
  resumeLink: "https://drive.google.com/file/d/1vbl_x7sGmlihkfFZBvkPt65BQfW3YJPI/view?usp=sharing"
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/zakariabouachra",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zakaria-bouachra-71044714b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:zikotato03@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/ZakariaBouachra",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Reiy.Swat/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/zakaria__bouachra/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Programming Enthusiast",
      fileName: "DesignImg",
      skills: [
        "⚡ Exploring the fascinating world of coding and programming",
        "⚡ Learning the fundamentals of algorithmic thinking and problem-solving",
        "⚡ Building simple applications and projects to solidify programming concepts",
      ],
      softwareSkills: [
        {
          skillName: "Php",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Mysql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#D00000",
          },
        },
        {
          skillName: "java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "angular",
          fontAwesomeClassname: "logos-angular",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Learning and Exploring",
      fileName: "FullStackImg",
      skills: [
        "⚡ Studying computer science concepts and algorithms",
        "⚡ Exploring various programming languages and technologies",
        "⚡ Seeking opportunities for hands-on experience and collaboration",
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
          skillName: "bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "violet",
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "black",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "simple-icons:windows",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Morocco Subrini School",
      subtitle: "Bachelor of Science in Mathematics",
      duration: "2019 - 2020"
    },
    {
      title: "Ain Chock Faculty of Science",
      subtitle: "D.E.U.G in computer science and mathematics",
      duration: "2020 - 2021",
    },
    {
      title: "Institut Teccart",
      subtitle: "D.E.C Computer Science Techniques",
      duration: "En cours",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Professional Experience",
      work: true,
      experiences: [
        {
          title: "Meal Delivery",
          company: "Uber, Doordash, Skip",
          company_url: "",
          logo_path: "livraison-logo.png",
          duration: "En cours",
          location: "Montréal, Canada",
          description:
            "As a delivery driver for Uber, Doordash, and Skip, I gained in-depth knowledge of delivery routes, developed the ability to work effectively under pressure, and demonstrated skills in organization, orientation, and communication. I always rigorously adhered to rules and safety standards to ensure an optimal delivery experience for customers.",
          color: "#0879bf",
        },
        {
          title: "Customer Service",
          company: "Couche-tard, Petro-Canada",
          company_url: "",
          logo_path: "couchetard-logo.png",
          duration: "2021 - 2022",
          location: "Montréal, Canada | Casablanca, Morocco",
          description:
            "During my work at Couche-tard, Petro-Canada in Montréal, Canada, as well as at Café Lonerza in Casablanca, Morocco, I had the opportunity to take customer orders with precision, operate the cash register efficiently, and ensure optimal merchandise organization. My commitment to delivering quality customer service was always my priority.",
          color: "#9b1578",
        },
      ],
    },
  ],
    
  
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create I.A projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "zakaria_bouachra.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Zakaria Bouachra",
    subtitle:
      "As a Computer Science student, I am deeply passionate about software development and backed by a strong foundation in computer science and mathematics. My drive to learn and contribute motivates me to apply my technical skills in a dynamic professional environment. I am fueled by the desire to push the boundaries of my knowledge and explore new opportunities within the field of computer science.",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "2595 av.DesJardins, Montreal, QC, Canada, H1V 2H8",
    locality: "Montreal",
    country: "Canada",
    region: "QC",
    postalCode: "H1V 2H8",
    streetAddress: "2595 av.DesJardins",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/jGqoG7TFBj7tCHj3A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 (514) 435-6000",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
