import { FaBehance, FaBriefcase, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedinIn } from "react-icons/fa";
import reactIcon from "devicon/icons/react/react-original.svg";
import mongoDBIcon from "devicon/icons/mongodb/mongodb-original.svg";
import phpIcon from "devicon/icons/php/php-original.svg";
import nestJsIcon from "devicon/icons/nestjs/nestjs-plain.svg";
import laravelIcon from "devicon/icons/laravel/laravel-plain.svg";

const profileConfig = {
  first_name: "Ammar",

  last_name: "Amami",

  profile_pic_main: "/imgs/profile.png",

  email: "ammar.amami.it@gmail.com",

  bio: "Im a Freelancer Front-end Developer with over 6 years of experience. Im from San Francisco. I code and create web elements for amazing people around the world. I like work with new people.",

  cvs: [
    {
      type: "Front-End",
      link: "/cvs/my-cv.pdf",
    },
    {
      type: "Full-Stack",
      link: "/cvs/my-cv.pdf",
    },
  ],

  years_of_experince: 6,

  social_media: [
    { link: "https://www.linkedin.com/in/ammar-amame-158931167/", icon: FaLinkedinIn, label: "LinkedIn" },

    { link: "https://github.com/ammaramame", icon: FaGithub, label: "Github" },

    { link: "https://www.behance.net/ammaramami", icon: FaBehance, label: "Behance" },

    { link: "mailto: ammar.amami.it@gmail.com", icon: FaEnvelope, label: "Email" },
  ],

  skill_set: [
    { icon: reactIcon, value: 4, title: "React.JS", priorty: 1 },
    { icon: nestJsIcon, value: 3, title: "NestJs", priorty: 1 },
    { icon: laravelIcon, value: 3, title: "Laravel", priorty: 3 },
    { icon: phpIcon, value: 3, title: "PHP", priorty: 4 },
    { icon: mongoDBIcon, value: 2, title: "MongoDB", priorty: 5 },
    { icon: reactIcon, value: 4, title: "GIT", priorty: 6 },
    { icon: reactIcon, value: 4, title: "React.JS", priorty: 7 },
    { icon: nestJsIcon, value: 3, title: "NestJs", priorty: 8 },
    { icon: laravelIcon, value: 3, title: "Laravel", priorty: 9 },
    { icon: phpIcon, value: 3, title: "PHP", priorty: 10 },
    { icon: mongoDBIcon, value: 2, title: "MongoDB", priorty: 11 },
    { icon: reactIcon, value: 4, title: "GIT", priorty: 12 },
    { icon: reactIcon, value: 4, title: "React.JS", priorty: 13 },
    { icon: nestJsIcon, value: 3, title: "NestJs", priorty: 14 },
    { icon: laravelIcon, value: 3, title: "Laravel", priorty: 15 },
    { icon: phpIcon, value: 3, title: "PHP", priorty: 16 },
    { icon: mongoDBIcon, value: 2, title: "MongoDB", priorty: 17 },
    { icon: reactIcon, value: 4, title: "GIT", priorty: 18 },
  ],

  personal_information: [
    { key: "first name", value: "Ammar" },
    { key: "last name", value: "Amami" },
    { key: "age", value: "26" },
    { key: "nationality", value: "Syrian" },
    { key: "freelance", value: "Available" },
    { key: "address", value: "Damascus,Syria" },
    { key: "phone", value: "+963935702780" },
    { key: "email", value: "ammar.amami.it@gmail.com" },
    { key: "relocate", value: "Available" },
    { key: "langages", value: "English(C1), Arabic(C1), German(A1)" },
  ],

  experince: [
    { icon: FaBriefcase, title: "Web Developer", time: "2017-Present", description: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt", place: "Freelance" },
    { icon: FaBriefcase, title: "Front-end Developer", time: "2020-Present", description: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt", place: "L-One systems GMBH" },
  ],

  education: [
    { icon: FaGraduationCap, title: "Bachelor in Computer Technologies", time: "Jan 2015 - Dec 2020", description: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt", place: "Damascus University" },
    { icon: FaGraduationCap, title: "Computer Technology Profession Diploma", time: "Dec 2012 - Jul 2015", description: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt", place: "BAB AL-JABIYA HIGH SCHOOL" },
  ],

  statistics: [
    { value: "+5", title: "years of Experience" },
    { value: "+12", title: "Completed Projects" },
    { value: "+6", title: "Happy Customers" },
    { value: "+0", title: "Awards Winner" },
  ],

  projects: [
    {
      date: "10-12-2023",
      type: "frontend",
      id: "1",
      data: [
        {
          id: "1",
          size: "1400-800",
          src: "https://picsum.photos/200/300",
          thumb: "https://picsum.photos/200/300",
          subHtml: `<div class="lightGallery-captions">
                <h4>Home Page</h4>
                <p>The sun sets in the west,
                Painting the sky with a colorful crest,
                As the day comes to a rest."</p>
            </div>`,
        },
        {
          id: "2",
          size: "1400-800",
          src: "https://picsum.photos/200/300",
          thumb: "https://picsum.photos/200/300",
          subHtml: `<div class="lightGallery-captions">
                <h4>Chat Page</h4>
                <p>As the sun sets behind the horizon, the sky begins to transform into a dazzling display of colors. Shades of pink, orange, and red blend together in a magnificent show of natural beauty. The clouds are transformed into wispy brushstrokes, painted across the canvas of the sky. Slowly, the colors begin to fade as the day gives way to the night, and the stars begin to twinkle overhead.</p>
            </div>`,
        },
      ],
    },
    { date: "10-11-2023", type: "backend", id: "2" },
    { date: "9-11-2023", type: "backend", id: "3" },
    { date: "10-14-2023", type: "fullstack", id: "4" },
    { date: "10-16-2023", type: "fullstack", id: "5" },
  ],

  project_filters: {
    "data-stack": {
      trigger: "filter",
      data: [
        { label: "Front-End", value: "frontend" },
        { label: "Back-End", value: "backend" },
        { label: "Full-Stack", value: "fullstack" },
      ],
    },
    "data-date": {
      trigger: "sort",
      data: [
        { label: "Newest", value: "desc" },
        { label: "Oldest", value: "asc" },
      ],
    },
  },
};

export default profileConfig;
