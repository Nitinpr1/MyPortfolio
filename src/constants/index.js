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
} from "../assets";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#certificates", label: "Certificates" },
];

export const imgUrls = [microsoft, devtown, GDclub];

export const skills = [
  {
    name: "HTML",
    value: "90%",
  },
  {
    name: "CSS",
    value: "80%",
  },
  {
    name: "JavaScript",
    value: "70%",
  },
  {
    name: "React JS",
    value: "60%",
  },
  {
    name: "ASP.NET",
    value: "80%",
  },
  {
    name: "SQL Server",
    value: "70%",
  },
  {
    name: "Bootstrap",
    value: "90%",
  },
  {
    name: "Tailwind CSS",
    value: "70%",
  },
  {
    name: "Material UI",
    value: "60%",
  },
  {
    name: "C#",
    value: "80%",
  },
  {
    name: "C++",
    value: "50%",
  },
  {
    name: "Core Java",
    value: "60%",
  },
];

export const projects = [
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
