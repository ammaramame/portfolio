import { i18next } from "../setups/languages";
import { switchConfigByLanguage } from "../utils/configs/configs-manipulation";
import { FaBehance, FaBriefcase, FaEnvelope, FaGithub, FaGraduationCap, FaLinkedinIn } from "react-icons/fa";
import reactIcon from "devicon/icons/react/react-original.svg";
import mongoDBIcon from "devicon/icons/mongodb/mongodb-original.svg";
import phpIcon from "devicon/icons/php/php-original.svg";
import nestJsIcon from "devicon/icons/nestjs/nestjs-plain.svg";
import laravelIcon from "devicon/icons/laravel/laravel-plain.svg";
import javascriptIcon from "devicon/icons/javascript/javascript-plain.svg";
import typescriptIcon from "devicon/icons/typescript/typescript-plain.svg";
import circleciIcon from "devicon/icons/circleci/circleci-plain.svg";
import dockerIcon from "devicon/icons/docker/docker-plain.svg";
import graphqlIcon from "devicon/icons/graphql/graphql-plain.svg";
import gitIcon from "devicon/icons/git/git-plain.svg";
import mysqlIcon from "devicon/icons/mysql/mysql-plain.svg";
import reduxIcon from "devicon/icons/redux/redux-original.svg";
import htmlIcon from "devicon/icons/html5/html5-plain.svg";
import cssIcon from "devicon/icons/css3/css3-plain.svg";
import angularjsIcon from "devicon/icons/angularjs/angularjs-plain.svg";

import { ProfileConfigs } from "../interfaces/profile-configs";

const profileConfig = {
  first_name: "Ammar",

  last_name: "Amami",

  profile_pic_main: "/imgs/profile.png",

  email: "ammar.amami.it@gmail.com",

  bio_en: `Well-qualified developer familiar with a wide range of programming utilities and languages, knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease. Collaborative team player with excellent technical abilities, offering 6 years of related experience.`,

  skills_introduction_en: "As I progressed in my career as a software developer and worked on numerous small and medium-sized projects, I acquired a diverse set of skills from these experiences.",

  professions_en: ["Frontend Developer", "Fullstack Developer"],

  cvs: [
    {
      type_en: "Front-End",
      link: "/cvs/my-cv.pdf",
    },
  ],

  years_of_experiance: 6,

  social_media: [
    { link: "https://www.linkedin.com/in/ammar-amame-158931167/", icon: FaLinkedinIn, label: "LinkedIn" },

    { link: "https://github.com/ammaramame", icon: FaGithub, label: "Github" },

    { link: "https://www.behance.net/ammaramami", icon: FaBehance, label: "Behance" },

    { link: "mailto: ammar.amami.it@gmail.com", icon: FaEnvelope, label: "Email" },
  ],

  skill_set: [
    { icon: reactIcon, value: 9, title: "React.JS", priorty: 1 },
    { icon: typescriptIcon, value: 7, title: "Typescript", priorty: 2 },
    { icon: javascriptIcon, value: 8, title: "Javascript", priorty: 3 },
    { icon: nestJsIcon, value: 7, title: "NestJs", priorty: 4 },
    { icon: circleciIcon, value: 4, title: "CI/CD", priorty: 6 },
    { icon: dockerIcon, value: 7, title: "Docker", priorty: 5 },
    { icon: undefined, value: 7, title: "Microservices", priorty: 7 },
    { icon: laravelIcon, value: 7, title: "Laravel", priorty: 8 },
    { icon: graphqlIcon, value: 7, title: "graphQL", priorty: 9 },
    { icon: gitIcon, value: 7, title: "GIT", priorty: 10 },
    { icon: phpIcon, value: 7, title: "PHP", priorty: 11 },
    { icon: mysqlIcon, value: 6, title: "MySQL", priorty: 12 },
    { icon: mongoDBIcon, value: 4, title: "mongoDB", priorty: 13 },
    { icon: reduxIcon, value: 9, title: "Redux", priorty: 14 },
    { icon: htmlIcon, value: 9, title: "HTML", priorty: 15 },
    { icon: cssIcon, value: 8, title: "CSS", priorty: 16 },
    { icon: undefined, value: 3, title: "Testing", priorty: 17 },
    { icon: angularjsIcon, value: 5, title: "Angular", priorty: 18 },
  ],

  personal_information: [
    { key_en: "first name", value: "Ammar" },
    { key_en: "last name", value: "Amami" },
    { key_en: "age", value: "26" },
    { key_en: "nationality", value_en: "Syrian" },
    { key_en: "freelance", value_en: "Available" },
    { key_en: "address", value_en: "Damascus,Syria" },
    { key_en: "phone", value: "+963935702780" },
    { key_en: "email", value: "ammar.amami.it@gmail.com" },
    { key_en: "relocate", value_en: "Available" },
    { key_en: "langages", value_en: "English(C1), Arabic(C1), German(A1)" },
  ],

  experince: [
    {
      icon: FaBriefcase,
      title_en: "Web Developer",
      time_en: "2017-Present",
      description_list_en: ["During this period, I have worked with some local and international clients on a number of medium- and small-term projects.", "Some of these projects can be found in the Portfolio section."],
      place: "Freelance",
    },
    {
      icon: FaBriefcase,
      title_en: "Front-end Developer",
      time_en: "2020-Present",
      description_list_en: [
        "Working on a popular platform specialized in providing services to farmers in Kenya such as selling crops, renting fields, statistical services on crops, etc.",
        "Working as a squad leader.",
        "Technologies used include Laravel, ReactJS, Typescript, Docker, Microservices, PostgreSQL, and GraphQL.",
      ],
      place: "L-One systems GMBH",
    },
  ],

  education: [
    {
      icon: FaGraduationCap,
      title_en: "Bachelor in Computer Technologies",
      time: "Jan 2015 - Dec 2020",
      description_list_en: [
        "Successfully completed a number of mini-projects in multiple programming languages such as C#, Visual Basic C++, and Java.",
        "Gained extensive training and successfully accomplished all courses for Computer programming.",
        "Completed a graduation project entitled User tracking technology across browsers",
        "Graduated with an average of 77.87%",
      ],
      place_en: "Damascus University",
    },
    {
      icon: FaGraduationCap,
      title_en: "Computer Technology Profession Diploma",
      time: "Dec 2012 - Jul 2015",
      description_list_en: ["Academic Excellence in Programming, Networking and Mathematics", "Graduated with an average of 91.07%"],
      place_en: "BAB AL-JABIYA HIGH SCHOOL",
    },
  ],

  statistics: [
    { value: "+5", title_en: "years of Experience" },
    { value: "+12", title_en: "Completed Projects" },
    { value: "+6", title_en: "Happy Customers" },
    { value: "+0", title_en: "Awards Winner" },
  ],

  projects: [
    {
      date: "10-12-2018",
      type: "frontend",
      name: "Social M",
      id: "1",
      data: [
        {
          id: "1",
          src: "/imgs/projects/1/787c10133829781.61c71c52c0570.png",
          thumb: "/imgs/projects/1/787c10133829781.61c71c52c0570.png",
          head_en: "Feedback Page",
          paragraph_en: `This page contains all the main events happening in your network.`,
        },

        {
          id: "2",
          src: "/imgs/projects/1/11f8a4133829781.61c71c52c134d.png",
          thumb: "/imgs/projects/1/11f8a4133829781.61c71c52c134d.png",
          head_en: "Media Page",
          paragraph_en: `This page shows all the media events in your network (videos, images, etc.).`,
        },

        {
          id: "3",
          src: "/imgs/projects/1/8d44cb133829781.61c71c52bede9.png",
          thumb: "/imgs/projects/1/8d44cb133829781.61c71c52bede9.png",
          head_en: "Profile Page",
          paragraph_en: `This page will contain your profile data and activities.`,
        },

        {
          id: "4",
          src: "/imgs/projects/1/d09cb8133829781.61c71c52bf3ea.png",
          thumb: "/imgs/projects/1/d09cb8133829781.61c71c52bf3ea.png",
          head_en: "Messenger",
          paragraph_en: `This is a dialog that pops up and shows all the contacts and messages that you have received and sent over time.`,
        },
        {
          id: "5",
          src: "/imgs/projects/1/86ba85133829781.61c71c52bddc2.png",
          thumb: "/imgs/projects/1/86ba85133829781.61c71c52bddc2.png",
          head_en: "Create Chat Dialog",
          paragraph_en: `This dialog allows you to create a new chat with one or more users in your contact list.`,
        },
        {
          id: "6",
          src: "/imgs/projects/1/90abb5133829781.61c71c52bfe9c.png",
          thumb: "/imgs/projects/1/90abb5133829781.61c71c52bfe9c.png",
          head_en: "Delete Chat Dialog",
          paragraph_en: `This dialog is used to confirm deleting one chat member.`,
        },
        {
          id: "7",
          src: "/imgs/projects/1/7c587a133829781.61c71c52be255.png",
          thumb: "/imgs/projects/1/7c587a133829781.61c71c52be255.png",
          head_en: "Settings Menu",
          paragraph_en: `This menu contains some general yet frequently used settings.`,
        },

        {
          id: "8",
          src: "/imgs/projects/1/d5e3dd133829781.61c71c52c0c49.png",
          thumb: "/imgs/projects/1/d5e3dd133829781.61c71c52c0c49.png",
          head_en: "Change Chat Color",
          paragraph_en: `This dialog is used to change the chat color.`,
        },
      ],
    },
    {
      date: "05-01-2018",
      type: "fullstack",
      id: "2",
      name: "My Manga",
      data: [
        {
          id: "1",
          src: "/imgs/projects/2/41beae134108299.61cdef7398cb1.png",
          thumb: "/imgs/projects/2/41beae134108299.61cdef7398cb1.png",
          head_en: "Home Page",
          paragraph_en: "This page contains an overview of the latest activities that occurred on the platform (manage, chapters, comments, etc.).",
        },
        {
          id: "2",
          src: "/imgs/projects/2/871faa134108299.61cdef73983b5.png",
          thumb: "/imgs/projects/2/871faa134108299.61cdef73983b5.png",
          head_en: "Manga Details Page",
          paragraph_en: "This page is used to show all the details about a specific manga.",
        },
        {
          id: "3",
          src: "/imgs/projects/2/0e6667134108299.61cdef73942f3.png",
          thumb: "/imgs/projects/2/0e6667134108299.61cdef73942f3.png",
          head_en: "Profile Page",
          paragraph_en: "This page shows all the details about the user's profile as well as past activities on the platform.",
        },
        {
          id: "4",
          src: "/imgs/projects/2/bad2c9134108299.61cdef739afba.png",
          thumb: "/imgs/projects/2/bad2c9134108299.61cdef739afba.png",
          head_en: "Team Page",
          paragraph_en: "This page shows one team's details and their achievements on the platform (team members, added chapters, projects, etc.).",
        },
        {
          id: "5",
          src: "/imgs/projects/2/fce8d4134108299.61cdef739771e.png",
          thumb: "/imgs/projects/2/fce8d4134108299.61cdef739771e.png",
          head_en: "News Page",
          paragraph_en: "The page is used to show all the manga news worldwide as well as news of the mymanga platform.",
        },
        {
          id: "6",
          src: "/imgs/projects/2/75334f134108299.61cdef7399a4e.png",
          thumb: "/imgs/projects/2/75334f134108299.61cdef7399a4e.png",
          head_en: "Dashboard Main Page",
          paragraph_en: "This page shows general information about the platform and general info about the hosting server.",
        },
        {
          id: "7",
          src: "/imgs/projects/2/172489134108299.61cdef7397d4f.png",
          thumb: "/imgs/projects/2/172489134108299.61cdef7397d4f.png",
          head_en: "Dashboard Main Page",
          paragraph_en: "This page shows general information about the platform and general info about the hosting server.",
        },
        {
          id: "8",
          src: "/imgs/projects/2/238896134108299.61cdef739576c.png",
          thumb: "/imgs/projects/2/238896134108299.61cdef739576c.png",
          head_en: "Dashboard User Activities",
          paragraph_en: "This section shows one member's detailed activities over the platform.",
        },
        {
          id: "9",
          src: "/imgs/projects/2/0e4d1c134108299.61cdef739513e.png",
          thumb: "/imgs/projects/2/0e4d1c134108299.61cdef739513e.png",
          head_en: "Dashboard Users Management",
          paragraph_en: "This table shows and manages all MyManga users' data.",
        },
        {
          id: "10",
          src: "/imgs/projects/2/f3496c134108299.61cdef7394cea.png",
          thumb: "/imgs/projects/2/f3496c134108299.61cdef7394cea.png",
          head_en: "Mangas Overview Page",
          paragraph_en: "This page shows overview data for the mangas in the platform with the ability to filter the manga using the sidebar filter form.",
        },
        {
          id: "11",
          src: "/imgs/projects/2/18822d134108299.61cdef739b775.png",
          thumb: "/imgs/projects/2/18822d134108299.61cdef739b775.png",
          head_en: "Chat Bar",
          paragraph_en: "This bar shows all the conversations with other members.",
        },
        {
          id: "12",
          src: "/imgs/projects/2/bde9dc134108299.61cdef739bdaa.png",
          thumb: "/imgs/projects/2/bde9dc134108299.61cdef739bdaa.png",
          head_en: "Messages Box",
          paragraph_en: "This box shows all the chats for the current user.",
        },
        {
          id: "13",
          src: "/imgs/projects/2/430c3c134108299.61cdef739efc7.png",
          thumb: "/imgs/projects/2/430c3c134108299.61cdef739efc7.png",
          head_en: "Manga Releases Dialog",
          paragraph_en: "This dialog shows the recently added chapters to the platform by teams.",
        },
        {
          id: "14",
          src: "/imgs/projects/2/cd9a7f134108299.61cdef739c740.png",
          thumb: "/imgs/projects/2/cd9a7f134108299.61cdef739c740.png",
          head_en: "Ticketing System",
          paragraph_en: "This dialog is used to open new support tickets in MyManga platform that admins can respond to.",
        },
        {
          id: "15",
          src: "/imgs/projects/2/5ec876134108299.61cdef7393804.png",
          thumb: "/imgs/projects/2/5ec876134108299.61cdef7393804.png",
          head_en: "Notification Menu",
          paragraph_en: "This menu shows all the user notifications.",
        },
        {
          id: "16",
          src: "/imgs/projects/2/b40014134108299.61cdef739ab41.png",
          thumb: "/imgs/projects/2/b40014134108299.61cdef739ab41.png",
          head_en: "Add Manga Form",
          paragraph_en: "This form is used by platform teams to add new manga series.",
        },
        {
          id: "17",
          src: "/imgs/projects/2/371ddf134108299.61cdef739a3b2.png",
          thumb: "/imgs/projects/2/371ddf134108299.61cdef739a3b2.png",
          head_en: "Add Team Form",
          paragraph_en: "This form is used to create a new team.",
        },
        {
          id: "18",
          src: "/imgs/projects/2/909b4f134108299.61cdef73966ff.png",
          thumb: "/imgs/projects/2/909b4f134108299.61cdef73966ff.png",
          head_en: "Add Chapter Form",
          paragraph_en: "This form is used to add and manage new chapters on the MyMange platform.",
        },
        {
          id: "19",
          src: "/imgs/projects/2/a30c23134108299.61cdef739e612.png",
          thumb: "/imgs/projects/2/a30c23134108299.61cdef739e612.png",
          head_en: "Chapters Reader",
          paragraph_en: "This component is used to view and manage chapter pages.",
        },
        {
          id: "20",
          src: "/imgs/projects/2/078c12134108299.61cdef739dfa8.png",
          thumb: "/imgs/projects/2/078c12134108299.61cdef739dfa8.png",
          head_en: "Chapters Pages Order Change Dialog",
          paragraph_en: "This dialog is used to switch between chapter pages.",
        },
        {
          id: "21",
          src: "/imgs/projects/2/6a3919134108299.61cdef739db3e.png",
          thumb: "/imgs/projects/2/6a3919134108299.61cdef739db3e.png",
          head_en: "Chapter Settings Dialog",
          paragraph_en: "This dialog is used to modify chapter data.",
        },
        {
          id: "22",
          src: "/imgs/projects/2/87ee41134108299.61cdef739cc25.png",
          thumb: "/imgs/projects/2/87ee41134108299.61cdef739cc25.png",
          head_en: "Chapter Usage Guideline",
          paragraph_en: "This dialog shows instructions on how to use the MyMange reader.",
        },
        {
          id: "23",
          src: "/imgs/projects/2/291a7c134108299.61cdef739d08c.png",
          thumb: "/imgs/projects/2/291a7c134108299.61cdef739d08c.png",
          head_en: "Reader Reading Settings",
          paragraph_en: "This dialog can be used to adjust the reader's general settings.",
        },
        {
          id: "24",
          src: "/imgs/projects/2/41bc12134108299.61cdef7393e94.png",
          thumb: "/imgs/projects/2/41bc12134108299.61cdef7393e94.png",
          head_en: "Profile Settings Dialog",
          paragraph_en: "This dialog is used to update the basic information of current and other users.",
        },
        {
          id: "25",
          src: "/imgs/projects/2/06a899134108299.61cdef7396e1e.png",
          thumb: "/imgs/projects/2/06a899134108299.61cdef7396e1e.png",
          head_en: "Main Menu",
          paragraph_en: "This menu contains general yet most used commands in the platform.",
        },
        {
          id: "26",
          src: "/imgs/projects/2/ff7863134108299.61cdef7392e2c.png",
          thumb: "/imgs/projects/2/ff7863134108299.61cdef7392e2c.png",
          head_en: "Team Settings Dialog",
          paragraph_en: "This dialog is responsible for modifying team information.",
        },
        {
          id: "27",
          src: "/imgs/projects/2/2061d2134108299.61cdef73992e1.png",
          thumb: "/imgs/projects/2/2061d2134108299.61cdef73992e1.png",
          head_en: "Report Team",
          paragraph_en: "This dialog meets the needs of users by reporting any abuse by any team.",
        },
        {
          id: "28",
          src: "/imgs/projects/2/6265ed134108299.61cdef739d4f6.png",
          thumb: "/imgs/projects/2/6265ed134108299.61cdef739d4f6.png",
          head_en: "Comments Dialog",
          paragraph_en: "This component is used by users to add comments on the manage chapters.",
        },
        {
          id: "29",
          src: "/imgs/projects/2/9d9879134108299.61cdef7395e91.png",
          thumb: "/imgs/projects/2/9d9879134108299.61cdef7395e91.png",
          head_en: "News Dialog",
          paragraph_en: "This dialog is used by admins to add news to the platform.",
        },
      ],
    },
    {
      date: "6-8-2020",
      type: "frontend",
      id: "3",
      name: "liferpfeife",
      data: [
        {
          id: "1",
          src: "/imgs/projects/4/26dffe133833139.61c734188724e.png",
          thumb: "/imgs/projects/4/26dffe133833139.61c734188724e.png",
          head_en: "Home Page",
          paragraph_en: "This page contains some basic instructions on how to use the app to order food.",
        },
        {
          id: "2",
          src: "/imgs/projects/4/33f714133833139.61c734188881d.png",
          thumb: "/imgs/projects/4/33f714133833139.61c734188881d.png",
          head_en: "Restaurants Overview Page",
          paragraph_en: "This page shows an overview of the restaurants registered in the platform with the ability to filter for specific criteria.",
        },
        {
          id: "3",
          src: "/imgs/projects/4/f97a66133833139.61c7341882eb0.png",
          thumb: "/imgs/projects/4/f97a66133833139.61c7341882eb0.png",
          head_en: "Restaurants Box View",
          paragraph_en: "This image shows the Restaurants Overview Page with box view instead of list view.",
        },
        {
          id: "4",
          src: "/imgs/projects/4/0e4881133833139.61c73418861be.png",
          thumb: "/imgs/projects/4/0e4881133833139.61c73418861be.png",
          head_en: "Restaurant Details Page",
          paragraph_en: "This page displays detailed information about the restaurant, as well as all the items it offers.",
        },
        {
          id: "5",
          src: "/imgs/projects/4/990aaa133833139.61c7341887f52.png",
          thumb: "/imgs/projects/4/990aaa133833139.61c7341887f52.png",
          head_en: "Order Item Box",
          paragraph_en: "This box shows an input to add an order for a specific food item.",
        },
        {
          id: "6",
          src: "/imgs/projects/4/a02a7a133833139.61c734188581f.png",
          thumb: "/imgs/projects/4/a02a7a133833139.61c734188581f.png",
          head_en: "Food List",
          paragraph_en: "This is a small view of the food list of one restaurant.",
        },
        {
          id: "7",
          src: "/imgs/projects/4/acbc43133833139.61c7341888d6d.png",
          thumb: "/imgs/projects/4/acbc43133833139.61c7341888d6d.png",
          head_en: "Add Food Item Form",
          paragraph_en: "This form is used by restaurant managers to add a new dish to the menu.",
        },
        {
          id: "8",
          src: "/imgs/projects/4/c4d139133833139.61c7341882317.png",
          thumb: "/imgs/projects/4/c4d139133833139.61c7341882317.png",
          head_en: "Restaurant Details Dialog",
          paragraph_en: "This dialog tab shows detailed information about this restaurant (closing/opening time, payment methods, etc.).",
        },
        {
          id: "9",
          src: "/imgs/projects/4/d490cc133833139.61c73418834da.png",
          thumb: "/imgs/projects/4/d490cc133833139.61c73418834da.png",
          head_en: "Restaurant Reviews Dialog",
          paragraph_en: "This dialog tab shows reviews for the current restaurant",
        },
        {
          id: "10",
          src: "/imgs/projects/4/faea6c133833139.61c7341885300.png",
          thumb: "/imgs/projects/4/faea6c133833139.61c7341885300.png",
          head_en: "Favorite Dialog",
          paragraph_en: "This dialog is used by users to save any restaurant for later view",
        },
        {
          id: "11",
          src: "/imgs/projects/4/d9ca98133833139.61c73418877b4.png",
          thumb: "/imgs/projects/4/d9ca98133833139.61c73418877b4.png",
          head_en: "Add Restaurant Dialog",
          paragraph_en: "This form is used by admins to add a new restaurant to the platform",
        },
        {
          id: "12",
          src: "/imgs/projects/4/cecbdb133833139.61c73418841b0.png",
          thumb: "/imgs/projects/4/cecbdb133833139.61c73418841b0.png",
          head_en: "Recommend Restaurant Page",
          paragraph_en: "This page is used by guests to recommend a restaurant to the platform operation team",
        },
        {
          id: "13",
          src: "/imgs/projects/4/86cd28133833139.61c7341882813.png",
          thumb: "/imgs/projects/4/86cd28133833139.61c7341882813.png",
          head_en: "Topics Form",
          paragraph_en: "This form is used to add a new support topic by admins to the platform",
        },
        {
          id: "14",
          src: "/imgs/projects/4/d78e42133833139.61c7341883c48.png",
          thumb: "/imgs/projects/4/d78e42133833139.61c7341883c48.png",
          head_en: "Support Form",
          paragraph_en: "This form is filled by users to get support by the operation team with detailed information about the issue",
        },
        {
          id: "15",
          src: "/imgs/projects/4/d970e8133833139.61c7341881e72.png",
          thumb: "/imgs/projects/4/d970e8133833139.61c7341881e72.png",
          head_en: "Login Page",
          paragraph_en: "This page is used to login all platform users (managers, users, operation user, etc.)",
        },
        {
          id: "16",
          src: "/imgs/projects/4/c89c0b133833139.61c7341884847.png",
          thumb: "/imgs/projects/4/c89c0b133833139.61c7341884847.png",
          head_en: "Signup Page",
          paragraph_en: "This page is used to sign up new user accounts on the platform.",
        },
        {
          id: "17",
          src: "/imgs/projects/4/7d6e65133833139.61c734188690d.png",
          thumb: "/imgs/projects/4/7d6e65133833139.61c734188690d.png",
          head_en: "Reset Password Page",
          paragraph_en: "This page is used to reset any user's password.",
        },
        {
          id: "18",
          src: "/imgs/projects/4/c0362f133833139.61c7341884e5c.png",
          thumb: "/imgs/projects/4/c0362f133833139.61c7341884e5c.png",
          head_en: "Food Item",
          paragraph_en: "This box shows details about a specific food item for one restaurant.",
        },
      ],
    },
    {
      date: "01-10-2020",
      type: "fullstack",
      id: "4",
      name: "Vocational Training Center",
      data: [
        {
          id: "1",
          src: "/imgs/projects/3/b31d24133932501.61ca03b0e6609.png",
          thumb: "/imgs/projects/3/b31d24133932501.61ca03b0e6609.png",
          head_en: "Home Page",
          paragraph_en: "This page contains a form to register new students to the website.",
        },
        {
          id: "2",
          src: "/imgs/projects/3/1ceed6133932501.61ca03b0e611f.png",
          thumb: "/imgs/projects/3/1ceed6133932501.61ca03b0e611f.png",
          head_en: "About Page",
          paragraph_en: "This section shows brief information about the institution.",
        },
        {
          id: "3",
          src: "/imgs/projects/3/f0d069133932501.61ca03b0e8913.png",
          thumb: "/imgs/projects/3/f0d069133932501.61ca03b0e8913.png",
          head_en: "Vision Section",
          paragraph_en: "This section shows the vision and the goals of the institution.",
        },
        {
          id: "4",
          src: "/imgs/projects/3/085bac133932501.61ca03b0e7444.png",
          thumb: "/imgs/projects/3/085bac133932501.61ca03b0e7444.png",
          head_en: "Why Us",
          paragraph_en: "This section shows a timer for the next session, as well as some reasons why to choose SPA over any other competitors.",
        },
        {
          id: "5",
          src: "/imgs/projects/3/7fca6b133932501.61ca03b0e7bdc.png",
          thumb: "/imgs/projects/3/7fca6b133932501.61ca03b0e7bdc.png",
          head_en: "Prominent Courses",
          paragraph_en: "This section shows a brief overview of some prominent courses run by SPA.",
        },
        {
          id: "6",
          src: "/imgs/projects/3/5cd08a133932501.61ca03b0e5b5a.png",
          thumb: "/imgs/projects/3/5cd08a133932501.61ca03b0e5b5a.png",
          head_en: "Courses Dialog",
          paragraph_en: "This dialog shows all the courses provided by SPA on the platform, with teachers' details and prices.",
        },
        {
          id: "7",
          src: "/imgs/projects/3/74f43d133932501.61ca03b0e8363.png",
          thumb: "/imgs/projects/3/74f43d133932501.61ca03b0e8363.png",
          head_en: "Contact Us Section",
          paragraph_en: "This section shows some information about the location, as well as a form for direct contact with the management team.",
        },
        {
          id: "8",
          src: "/imgs/projects/3/fa5d57133932501.61ca03b0e6f68.png",
          thumb: "/imgs/projects/3/fa5d57133932501.61ca03b0e6f68.png",
          head_en: "Footer Section",
          paragraph_en: "This footer contains some information about how to reach out and a small map for the website.",
        },
        {
          id: "9",
          src: "/imgs/projects/3/9d6512133932501.61ca03b0e6ab5.png",
          thumb: "/imgs/projects/3/9d6512133932501.61ca03b0e6ab5.png",
          head_en: "User Menu",
          paragraph_en: `This menu used by admins to manage website data (courses,courses dates,contact list,...)`,
        },
      ],
    },
    {
      date: "10-16-2023",
      type: "fullstack",
      name: "Water Treatment Company Website",
      id: "5",
      data: [
        {
          id: "1",
          src: "/imgs/projects/5/8e5410133982397.61cb28530dadf.png",
          thumb: "/imgs/projects/5/8e5410133982397.61cb28530dadf.png",
          head_en: "Home Page",
          paragraph_en: "This section is a slider that shows all the recent events for a water industry company (MAP).",
        },
        {
          id: "2",
          src: "/imgs/projects/5/1e418f133982397.61cb28530fd04.png",
          thumb: "/imgs/projects/5/1e418f133982397.61cb28530fd04.png",
          head_en: "About Us Page",
          paragraph_en: "This section shows a brief overview of the company's vision, mission, and values.",
        },
        {
          id: "3",
          src: "/imgs/projects/5/c432eb133982397.61cb28530e9bf.png",
          thumb: "/imgs/projects/5/c432eb133982397.61cb28530e9bf.png",
          head_en: "About Page",
          paragraph_en: "This section shows the main core values of the company.",
        },
        {
          id: "4",
          src: "/imgs/projects/5/8f7529133982397.61cb28530e081.png",
          thumb: "/imgs/projects/5/8f7529133982397.61cb28530e081.png",
          head_en: "Products Section",
          paragraph_en: "This section shows all the products that MAP provides.",
        },
        {
          id: "5",
          src: "/imgs/projects/5/f2c46e133982397.61cb28530efe1.png",
          thumb: "/imgs/projects/5/f2c46e133982397.61cb28530efe1.png",
          head_en: "Our Team Section",
          paragraph_en: "This section shows the MAP company team as well as their professions.",
        },
        {
          id: "6",
          src: "/imgs/projects/5/1d8ebc133982397.61cb28530d2b1.png",
          thumb: "/imgs/projects/5/1d8ebc133982397.61cb28530d2b1.png",
          head_en: "Contact Us Page",
          paragraph_en: "This page is used to connect clients with the MAP operations team.",
        },
        {
          id: "7",
          src: "/imgs/projects/5/98df65133982397.61cb28530f738.png",
          thumb: "/imgs/projects/5/98df65133982397.61cb28530f738.png",
          head_en: "Career Page",
          paragraph_en: "This page is used to display available vacancies in the MAP company.",
        },
        {
          id: "8",
          src: "/imgs/projects/5/81258e133982397.61cb28530c917.png",
          thumb: "/imgs/projects/5/81258e133982397.61cb28530c917.png",
          head_en: "Footer Section",
          paragraph_en: "This footer contains information on how to reach out and a small map of the website.",
        },
      ],
    },
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
        { label_en: "Newest", value: "desc" },
        { label_en: "Oldest", value: "asc" },
      ],
    },
  },
};

export default switchConfigByLanguage(profileConfig, i18next.language, [...i18next.languages]) as ProfileConfigs;
