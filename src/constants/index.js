import {
  utube,
  devblog,
  demo,
  instabanner,
  nikelanding,
  sushi,
  microsoft,
  devtown,
  GDclub,
  chatapp,
  reactjscertificate,
  resumexpress,
  getYTSubs,
  nodejsCertificate,
  flex
} from "../assets";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#exp", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
];

export const imgUrls = [
  nodejsCertificate,
  reactjscertificate,
  microsoft,
  devtown,
  GDclub,
];

export const skills = [
  {
    name: "JavaScript",
    value: "80%",
  },
  {
    name: "Node JS",
    value: "70%",
  },
  {
    name: "Express JS",
    value: "70%",
  },
  {
    name: "React JS",
    value: "75%",
  },
  {
    name: "Mongo DB",
    value: "60%",
  },
  {
    name: "SQL Server",
    value: "70%",
  },
  {
    name: "HTML",
    value: "90%",
  },
  {
    name: "CSS",
    value: "80%",
  },
  {
    name: "Bootstrap",
    value: "75%",
  },
  {
    name: "Tailwind CSS",
    value: "80%",
  },
  {
    name: "Material UI",
    value: "75%",
  },
];

export const projects = [
  {
    imgURL: flex,
    name: "Vibe-flow",
    comment:
      "Full Stack entertainment app with auth, search, bookmark features built using MERN Stack.",
    livelink: "https://vibe-flow-eight.vercel.app/",
    githublink: "https://github.com/Nitinpr1/entertainment_app",
  },
  {
    imgURL: getYTSubs,
    name: "Get Youtube Subs",
    comment:
      "An API for getting Youtube Subs data using Node.js, Express.js and mongoDB.",
    livelink: "https://youtu.be/ir_7Zs15dNE?si=C0rlgqFDLMBAhSGB",
    githublink: "https://github.com/Nitinpr1/get-youtube-subscribers-",
  },
  {
    imgURL: resumexpress,
    name: "ResumeXpress",
    comment:
      "A resume builder app using React, redux-toolkit, MUI, react-hook-form and jsPDF.",
    livelink: "https://resume-xpress.vercel.app/",
    githublink: "https://github.com/Nitinpr1/ResumeXpress",
  },
  {
    imgURL: chatapp,
    name: "Chat App",
    comment:
      "Real time chat app using React.js , Tailwind CSS and Appwrite cloud",
    livelink: "https://chatapp-rosy-tau.vercel.app/",
    githublink: "https://github.com/Nitinpr1/chatapp",
  },
  {
    imgURL: utube,
    name: "YouTube Clone",
    comment: " Youtube clone using react js, Material UI and rapid API",
    livelink: "https://youtube-2-iota.vercel.app/",
    githublink: "https://github.com/Nitinpr1/Youtube-2.0",
  },
  {
    imgURL: devblog,
    name: "Dev Blog",
    comment: "Dev Blog , a web blogging app using react js",
    livelink:
      "https://www.linkedin.com/posts/nitin-prajapati1_reactjs-reactjsdevelopment-project-activity-7098719644886204416-Ad_Z?utm_source=share&utm_medium=member_desktop",
    githublink: "https://github.com/Nitinpr1/Dev-Blog",
  },
  {
    imgURL: demo,
    name: "RentSpace",
    comment:
      "Online Home appliances rental web app using ASP.NET and SQL Server",
    livelink: "http://rentspacen.somee.com/GuestUser/GuestHome.aspx",
    githublink: "https://github.com/Nitinpr1/Home_Appliences_for_Rent",
  },
  {
    imgURL: instabanner,
    name: "Instagram Clone",
    comment: "Instagram Clone using HTML, CSS and JavaScript",
    livelink:
      "https://www.linkedin.com/posts/nitin-prajapati1_project-instagram-html-activity-7094992836634288128-Fy44?utm_source=share&utm_medium=member_desktop",
    githublink: "https://github.com/Nitinpr1/Instagram-clone",
  },
  {
    imgURL: nikelanding,
    name: "Nike Landing pages",
    comment: "Nike Landing pages using react js +Vite and Tailwind CSS ",
    livelink: "https://nike-landing-page-theta.vercel.app/",
    githublink: "https://github.com/Nitinpr1/Nike-landing-page",
  },
  {
    imgURL: sushi,
    name: "Sushi Shop",
    comment: "Sushi Shop using HTML, CSS and JavaScript",
    livelink: "https://sushishop1.netlify.app/",
    githublink: "https://github.com/Nitinpr1/Sushi_shop",
  },
];

export const education = [
  {
    name: "Bachelor of Science in Information Technology",
    collage: "Sanpda Collage of Commerce and Technology",
    city: "Navi Mumbai, Maharashtra",
    comment:
      "Throughout my academic journey, I have cultivated a robust foundation in essential web development principles, mastered the art of object-oriented programming, and gained proficiency in the intricate realm of database management. One of my standout attributes is my active involvement in numerous IT events. I thrive in team environments, where I not only contribute my technical expertise but also foster collaboration, synergy, and a collective drive for excellence.",
    time: "2020-2023",
  },
  // {
  //   name: "HSC",
  //   collage: "Udhyog Inter Collage",
  //   city: "Azamgarh, Uttar Pradesh",
  //   comment: "higher secondary education",
  //   time: "2018-2020",
  // },
];
export const experience = [
  {
    name: "Software Developer",
    company: "TalentCo HR Services",
    city: "Mulund, Maharashtra",
    comment:
      "Working on full-stack development with RESTful APIs using Node.js and Express.js, MySQL for data management, and React.js for frontend features. Also responsible for deployment and ongoing maintenance of core projects like the HRMS and ATS applications.",
    startTime: "June-2024",
    endTime: "Present",
    technologies: ["Node.js", "Express.js", "React.js", "MySQL", "Git", "Postman"],
    highlights: [
      "Developed scalable APIs for core modules",
      "Deployed and maintained HRMS and ATS applications",
      "Optimized SQL queries and improved backend response time",
      "Worked closely with frontend team on user interface improvements"
    ]
  }
];

