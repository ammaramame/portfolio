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

  bio: `Well-qualified Developer familiar with a wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Able to handle any part of the process with ease.Collaborative team player with excellent technical abilities, offering 6 years of related experience`,

  skills_introduction: "As I progressed in my career as a software developer and worked on numerous small and medium-sized projects, I acquired a diverse set of skills from these experiences.",

  professions: ["Frontend Developer", "Fullstack Developer"],

  cvs: [
    {
      type: "Front-End",
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
    {
      icon: FaBriefcase,
      title: "Web Developer",
      time: "2017-Present",
      description_list: ["Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt", "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt"],
      place: "Freelance",
    },
    {
      icon: FaBriefcase,
      title: "Front-end Developer",
      time: "2020-Present",
      description_list: [
        "Working on a popular platform specialized in providing services to farmers in Kenya such as selling crops,renting fields, statistical services on crops etc.",
        "Working as a squad leader.",
        "Technologies used are Laravel, ReactJS, Typescript, Docker, Microservices, PostgreSQL,GraphQL",
      ],
      place: "L-One systems GMBH",
    },
  ],

  education: [
    {
      icon: FaGraduationCap,
      title: "Bachelor in Computer Technologies",
      time: "Jan 2015 - Dec 2020",
      description_list: [
        "Successfully completed a number of mini-projects in multiple programming languages such as C#, Visual Basic C++, and Java.",
        "Gained extensive training and successfully accomplished all courses for Computer programming.",
        "Completed a graduation project entitled User tracking technology across browsers",
        "Graduated with an average of 77.87%",
      ],
      place: "Damascus University",
    },
    {
      icon: FaGraduationCap,
      title: "Computer Technology Profession Diploma",
      time: "Dec 2012 - Jul 2015",
      description_list: ["Academic Excellence in Programming, Networking and Mathematics", "Graduated with an average of 91.07%"],
      place: "BAB AL-JABIYA HIGH SCHOOL",
    },
  ],

  statistics: [
    { value: "+5", title: "years of Experience" },
    { value: "+12", title: "Completed Projects" },
    { value: "+6", title: "Happy Customers" },
    { value: "+0", title: "Awards Winner" },
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
          head: "Feedback Page",
          paragraph: `This page contains all the main event happening in your network`,
        },

        {
          id: "2",
          src: "/imgs/projects/1/11f8a4133829781.61c71c52c134d.png",
          thumb: "/imgs/projects/1/11f8a4133829781.61c71c52c134d.png",
          head: "Feedback Page",
          paragraph: `This page show all the events media in your network (video,images,...)`,
        },

        {
          id: "3",
          src: "/imgs/projects/1/8d44cb133829781.61c71c52bede9.png",
          thumb: "/imgs/projects/1/8d44cb133829781.61c71c52bede9.png",
          head: "Profile Page",
          paragraph: `This Page will contain your profile data and your activites`,
        },

        {
          id: "4",
          src: "/imgs/projects/1/d09cb8133829781.61c71c52bf3ea.png",
          thumb: "/imgs/projects/1/d09cb8133829781.61c71c52bf3ea.png",
          head: "Messanger",
          paragraph: `This is Dialog that popup and show all contacts and messages that you have received and sent overtime`,
        },
        {
          id: "5",
          src: "/imgs/projects/1/86ba85133829781.61c71c52bddc2.png",
          thumb: "/imgs/projects/1/86ba85133829781.61c71c52bddc2.png",
          head: "Create Chat Dialog",
          paragraph: `This dialig allow you to create new chat with one or more of users in your contact list`,
        },
        {
          id: "6",
          src: "/imgs/projects/1/90abb5133829781.61c71c52bfe9c.png",
          thumb: "/imgs/projects/1/90abb5133829781.61c71c52bfe9c.png",
          head: "Delete Chat Dilaog",
          paragraph: `This dialog used to confirm deleting one chat member`,
        },
        {
          id: "7",
          src: "/imgs/projects/1/7c587a133829781.61c71c52be255.png",
          thumb: "/imgs/projects/1/7c587a133829781.61c71c52be255.png",
          head: "Settings Menu",
          paragraph: `This menu contain some general yet frequently used settings`,
        },

        {
          id: "8",
          src: "/imgs/projects/1/d5e3dd133829781.61c71c52c0c49.png",
          thumb: "/imgs/projects/1/d5e3dd133829781.61c71c52c0c49.png",
          head: "Change Chat Color",
          paragraph: `This dialog is used to change chat color`,
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
          head: "Home Page",
          paragraph: `This page contains overview for latest activites occurred on the platform (manage,chapters,comments,...) `,
        },
        {
          id: "2",
          src: "/imgs/projects/2/871faa134108299.61cdef73983b5.png",
          thumb: "/imgs/projects/2/871faa134108299.61cdef73983b5.png",
          head: "Manga Details Page",
          paragraph: `This page used to show all the details about specfic manga`,
        },
        {
          id: "3",
          src: "/imgs/projects/2/0e6667134108299.61cdef73942f3.png",
          thumb: "/imgs/projects/2/0e6667134108299.61cdef73942f3.png",
          head: "Profile Page",
          paragraph: `This page show all the details about user profile as will as past activites on the platform`,
        },
        {
          id: "4",
          src: "/imgs/projects/2/bad2c9134108299.61cdef739afba.png",
          thumb: "/imgs/projects/2/bad2c9134108299.61cdef739afba.png",
          head: "Team Page",
          paragraph: `This Page show one team details and there achievements on the platform (team members,added chapters,projects,...)`,
        },
        {
          id: "5",
          src: "/imgs/projects/2/fce8d4134108299.61cdef739771e.png",
          thumb: "/imgs/projects/2/fce8d4134108299.61cdef739771e.png",
          head: "News Page",
          paragraph: `The page used to show all the manga news worldwide as will as news of the mymanga platform`,
        },
        {
          id: "6",
          src: "/imgs/projects/2/75334f134108299.61cdef7399a4e.png",
          thumb: "/imgs/projects/2/75334f134108299.61cdef7399a4e.png",
          head: "Dashboard Main Page",
          paragraph: `This page show general information about the platform, and general info about the hosting server`,
        },
        {
          id: "7",
          src: "/imgs/projects/2/172489134108299.61cdef7397d4f.png",
          thumb: "/imgs/projects/2/172489134108299.61cdef7397d4f.png",
          head: "Dashboard Main Page",
          paragraph: `This page show general information about the platform, and general info about the hosting server`,
        },
        {
          id: "8",
          src: "/imgs/projects/2/238896134108299.61cdef739576c.png",
          thumb: "/imgs/projects/2/238896134108299.61cdef739576c.png",
          head: "Dashboard User Activites",
          paragraph: `This section show one member detailed activites over the platform`,
        },
        {
          id: "9",
          src: "/imgs/projects/2/0e4d1c134108299.61cdef739513e.png",
          thumb: "/imgs/projects/2/0e4d1c134108299.61cdef739513e.png",
          head: "Dashboard Users Mangament",
          paragraph: `This table show and manage all mymanga users data`,
        },
        {
          id: "10",
          src: "/imgs/projects/2/f3496c134108299.61cdef7394cea.png",
          thumb: "/imgs/projects/2/f3496c134108299.61cdef7394cea.png",
          head: "Managas Overview Page",
          paragraph: `This page show overview data for the mangas in the platform with the ability to filter the mange using sidebar filter form`,
        },
        {
          id: "11",
          src: "/imgs/projects/2/18822d134108299.61cdef739b775.png",
          thumb: "/imgs/projects/2/18822d134108299.61cdef739b775.png",
          head: "Chat Bar",
          paragraph: `This Bar show all the conversations with other members.`,
        },
        {
          id: "12",
          src: "/imgs/projects/2/bde9dc134108299.61cdef739bdaa.png",
          thumb: "/imgs/projects/2/bde9dc134108299.61cdef739bdaa.png",
          head: "Messages Box",
          paragraph: `This Box show all the chats for current user`,
        },
        {
          id: "13",
          src: "/imgs/projects/2/430c3c134108299.61cdef739efc7.png",
          thumb: "/imgs/projects/2/430c3c134108299.61cdef739efc7.png",
          head: "Manga Releases Dialog",
          paragraph: `This dialog show recent added chapters to platform by teams`,
        },

        {
          id: "14",
          src: "/imgs/projects/2/cd9a7f134108299.61cdef739c740.png",
          thumb: "/imgs/projects/2/cd9a7f134108299.61cdef739c740.png",
          head: "Ticketing System",
          paragraph: `The dialog used to open new support tickets in mymanga platform that admins can responed to`,
        },

        {
          id: "15",
          src: "/imgs/projects/2/5ec876134108299.61cdef7393804.png",
          thumb: "/imgs/projects/2/5ec876134108299.61cdef7393804.png",
          head: "Notification Menu",
          paragraph: `This menu show all the user notifications`,
        },
        {
          id: "16",
          src: "/imgs/projects/2/b40014134108299.61cdef739ab41.png",
          thumb: "/imgs/projects/2/b40014134108299.61cdef739ab41.png",
          head: "Add Managa Form",
          paragraph: `This form used by platform teams to add new mange series`,
        },
        {
          id: "17",
          src: "/imgs/projects/2/371ddf134108299.61cdef739a3b2.png",
          thumb: "/imgs/projects/2/371ddf134108299.61cdef739a3b2.png",
          head: "Add Team Form",
          paragraph: `This form used to create new team.`,
        },
        {
          id: "18",
          src: "/imgs/projects/2/909b4f134108299.61cdef73966ff.png",
          thumb: "/imgs/projects/2/909b4f134108299.61cdef73966ff.png",
          head: "Add Chapter Form",
          paragraph: `This form used to add new mange chapter to mymange platform`,
        },
        {
          id: "19",
          src: "/imgs/projects/2/a30c23134108299.61cdef739e612.png",
          thumb: "/imgs/projects/2/a30c23134108299.61cdef739e612.png",
          head: "Chapters Reader",
          paragraph: `This component used to view mange chapters pages`,
        },
        {
          id: "20",
          src: "/imgs/projects/2/078c12134108299.61cdef739dfa8.png",
          thumb: "/imgs/projects/2/078c12134108299.61cdef739dfa8.png",
          head: "Chapters Pages Order Change Dialog",
          paragraph: `This dialog used to switch chapter pages`,
        },
        {
          id: "21",
          src: "/imgs/projects/2/6a3919134108299.61cdef739db3e.png",
          thumb: "/imgs/projects/2/6a3919134108299.61cdef739db3e.png",
          head: "Chapter Settings Dialog",
          paragraph: `This dialog used to modify chapter data`,
        },
        {
          id: "22",
          src: "/imgs/projects/2/87ee41134108299.61cdef739cc25.png",
          thumb: "/imgs/projects/2/87ee41134108299.61cdef739cc25.png",
          head: "Chapter Usage Guideline",
          paragraph: `This dialog shows instructions on how to use the mange reader`,
        },
        {
          id: "23",
          src: "/imgs/projects/2/291a7c134108299.61cdef739d08c.png",
          thumb: "/imgs/projects/2/291a7c134108299.61cdef739d08c.png",
          head: "Reader Reading Settings",
          paragraph: `This dialog can be used to adjust the reader general settings`,
        },

        {
          id: "24",
          src: "/imgs/projects/2/41bc12134108299.61cdef7393e94.png",
          thumb: "/imgs/projects/2/41bc12134108299.61cdef7393e94.png",
          head: "Profile Settings Dialog",
          paragraph: `This dialog is used to update current and other users basic information`,
        },
        {
          id: "25",
          src: "/imgs/projects/2/06a899134108299.61cdef7396e1e.png",
          thumb: "/imgs/projects/2/06a899134108299.61cdef7396e1e.png",
          head: "Main Menu",
          paragraph: `This menu contains general yet most used commands in the platform`,
        },
        {
          id: "26",
          src: "/imgs/projects/2/ff7863134108299.61cdef7392e2c.png",
          thumb: "/imgs/projects/2/ff7863134108299.61cdef7392e2c.png",
          head: "Team Settings Dialog",
          paragraph: `This dialog responsible for modifying teams information`,
        },
        {
          id: "27",
          src: "/imgs/projects/2/2061d2134108299.61cdef73992e1.png",
          thumb: "/imgs/projects/2/2061d2134108299.61cdef73992e1.png",
          head: "Report Team",
          paragraph: `This dialog meets the needs of users by reporting any abuse by any team`,
        },
        {
          id: "28",
          src: "/imgs/projects/2/6265ed134108299.61cdef739d4f6.png",
          thumb: "/imgs/projects/2/6265ed134108299.61cdef739d4f6.png",
          head: "Comments Dialog",
          paragraph: `This component used by users to add comments on the mange chapters`,
        },

        {
          id: "29",
          src: "/imgs/projects/2/9d9879134108299.61cdef7395e91.png",
          thumb: "/imgs/projects/2/9d9879134108299.61cdef7395e91.png",
          head: "News Dialog",
          paragraph: `This dialog used by admins to add news to the platform`,
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
          head: "Home Page",
          paragraph: `This page contains an some basic instructions on how to use the app to order foods`,
        },
        {
          id: "2",
          src: "/imgs/projects/4/33f714133833139.61c734188881d.png",
          thumb: "/imgs/projects/4/33f714133833139.61c734188881d.png",
          head: "Resturants Overview Page",
          paragraph: `This page show overview over the resturent restaurants registerd in the platform with ability to filter foe specific criteria`,
        },
        {
          id: "3",
          src: "/imgs/projects/4/f97a66133833139.61c7341882eb0.png",
          thumb: "/imgs/projects/4/f97a66133833139.61c7341882eb0.png",
          head: "Resturants Box View",
          paragraph: `This image show Resturants Overview Page with box view instead of list view.`,
        },
        {
          id: "4",
          src: "/imgs/projects/4/0e4881133833139.61c73418861be.png",
          thumb: "/imgs/projects/4/0e4881133833139.61c73418861be.png",
          head: "Resturant Details Page",
          paragraph: `This page displays detailed information about the restaurant, as well as all the items it offers`,
        },

        {
          id: "5",
          src: "/imgs/projects/4/990aaa133833139.61c7341887f52.png",
          thumb: "/imgs/projects/4/990aaa133833139.61c7341887f52.png",
          head: "Order Item Box",
          paragraph: `This box show input to add order for specific food item`,
        },
        {
          id: "6",
          src: "/imgs/projects/4/a02a7a133833139.61c734188581f.png",
          thumb: "/imgs/projects/4/a02a7a133833139.61c734188581f.png",
          head: "Food List",
          paragraph: `This is a small view for the food list of one restaurant`,
        },
        {
          id: "7",
          src: "/imgs/projects/4/acbc43133833139.61c7341888d6d.png",
          thumb: "/imgs/projects/4/acbc43133833139.61c7341888d6d.png",
          head: "Add Food Item Form",
          paragraph: `This form used by restaurant manager to add new dish to the menu`,
        },
        {
          id: "8",
          src: "/imgs/projects/4/c4d139133833139.61c7341882317.png",
          thumb: "/imgs/projects/4/c4d139133833139.61c7341882317.png",
          head: "Resturant Details Dialog",
          paragraph: `This dialog tab show detaild information about this restaurant (close/open time, payment methods,...)`,
        },
        {
          id: "9",
          src: "/imgs/projects/4/d490cc133833139.61c73418834da.png",
          thumb: "/imgs/projects/4/d490cc133833139.61c73418834da.png",
          head: "Resturant Reviews Dialog",
          paragraph: `This dialog tab show reviews for the current restaurant`,
        },
        {
          id: "10",
          src: "/imgs/projects/4/faea6c133833139.61c7341885300.png",
          thumb: "/imgs/projects/4/faea6c133833139.61c7341885300.png",
          head: "Favorite Dialog",
          paragraph: `This dialog used by users to save any restaurant for later view`,
        },
        {
          id: "11",
          src: "/imgs/projects/4/d9ca98133833139.61c73418877b4.png",
          thumb: "/imgs/projects/4/d9ca98133833139.61c73418877b4.png",
          head: "Add Resturant Dialog",
          paragraph: `This form used by admins to add new restaurant to the platform`,
        },
        {
          id: "12",
          src: "/imgs/projects/4/cecbdb133833139.61c73418841b0.png",
          thumb: "/imgs/projects/4/cecbdb133833139.61c73418841b0.png",
          head: "Recommand Resturant Page",
          paragraph: `This page used by guests to recommand a restaurant to the platform operation team`,
        },
        {
          id: "13",
          src: "/imgs/projects/4/86cd28133833139.61c7341882813.png",
          thumb: "/imgs/projects/4/86cd28133833139.61c7341882813.png",
          head: "Topics Form",
          paragraph: `This form used to add new support topic by admins to the platform.`,
        },
        {
          id: "14",
          src: "/imgs/projects/4/d78e42133833139.61c7341883c48.png",
          thumb: "/imgs/projects/4/d78e42133833139.61c7341883c48.png",
          head: "Support Form",
          paragraph: `This form filled by users to get support by operation team with detailed info about the issue`,
        },
        {
          id: "15",
          src: "/imgs/projects/4/d970e8133833139.61c7341881e72.png",
          thumb: "/imgs/projects/4/d970e8133833139.61c7341881e72.png",
          head: "Login Page",
          paragraph: `This page used to login all platform users (managers,users,operation user,...)`,
        },
        {
          id: "16",
          src: "/imgs/projects/4/c89c0b133833139.61c7341884847.png",
          thumb: "/imgs/projects/4/c89c0b133833139.61c7341884847.png",
          head: "Singup Page",
          paragraph: `This page used to signup new users account to the platform`,
        },
        {
          id: "17",
          src: "/imgs/projects/4/7d6e65133833139.61c734188690d.png",
          thumb: "/imgs/projects/4/7d6e65133833139.61c734188690d.png",
          head: "Reset Password Page",
          paragraph: `This page used to reset any user password`,
        },
        {
          id: "18",
          src: "/imgs/projects/4/c0362f133833139.61c7341884e5c.png",
          thumb: "/imgs/projects/4/c0362f133833139.61c7341884e5c.png",
          head: "Food Item",
          paragraph: `This box show details about speicfic food item for one restaurant`,
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
          head: "Home Page",
          paragraph: `This page contains a form to  regsiter new student to the website`,
        },
        {
          id: "2",
          src: "/imgs/projects/3/1ceed6133932501.61ca03b0e611f.png",
          thumb: "/imgs/projects/3/1ceed6133932501.61ca03b0e611f.png",
          head: "About Page",
          paragraph: `This section show breif info about the institution`,
        },
        {
          id: "3",
          src: "/imgs/projects/3/f0d069133932501.61ca03b0e8913.png",
          thumb: "/imgs/projects/3/f0d069133932501.61ca03b0e8913.png",
          head: "Vision Section",
          paragraph: `This section show the vision and the goal of the institution`,
        },
        {
          id: "4",
          src: "/imgs/projects/3/085bac133932501.61ca03b0e7444.png",
          thumb: "/imgs/projects/3/085bac133932501.61ca03b0e7444.png",
          head: "Why Us",
          paragraph: `This section show timer for the next session as will as some points on why to choose SPA over any other competitors`,
        },
        {
          id: "5",
          src: "/imgs/projects/3/7fca6b133932501.61ca03b0e7bdc.png",
          thumb: "/imgs/projects/3/7fca6b133932501.61ca03b0e7bdc.png",
          head: "Prominent Courses",
          paragraph: `This section show breif look for some prominent courses runed by SPA`,
        },
        {
          id: "6",
          src: "/imgs/projects/3/5cd08a133932501.61ca03b0e5b5a.png",
          thumb: "/imgs/projects/3/5cd08a133932501.61ca03b0e5b5a.png",
          head: "Courses Dialog",
          paragraph: `This dilaog show all the courses provided by SPA on the platform with teachers details and prices`,
        },
        {
          id: "7",
          src: "/imgs/projects/3/74f43d133932501.61ca03b0e8363.png",
          thumb: "/imgs/projects/3/74f43d133932501.61ca03b0e8363.png",
          head: "Contact Us Section",
          paragraph: `This section show some infomation about the location as will as form for direct contact with the managament team`,
        },
        {
          id: "8",
          src: "/imgs/projects/3/fa5d57133932501.61ca03b0e6f68.png",
          thumb: "/imgs/projects/3/fa5d57133932501.61ca03b0e6f68.png",
          head: "Footer Section",
          paragraph: `This footer contains some information about on how to reach out and small map for the website`,
        },
        {
          id: "9",
          src: "/imgs/projects/3/9d6512133932501.61ca03b0e6ab5.png",
          thumb: "/imgs/projects/3/9d6512133932501.61ca03b0e6ab5.png",
          head: "User Menu",
          paragraph: `This menu used by admins to manage website data (courses,courses dates,contact list,...)`,
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
          head: "Home Page",
          paragraph: `This section is a slider that show all the recent events for a water industry company (MAP)`,
        },
        {
          id: "2",
          src: "/imgs/projects/5/1e418f133982397.61cb28530fd04.png",
          thumb: "/imgs/projects/5/1e418f133982397.61cb28530fd04.png",
          head: "About Us Page",
          paragraph: `This section show breif look for the company vision,mission and value`,
        },
        {
          id: "3",
          src: "/imgs/projects/5/c432eb133982397.61cb28530e9bf.png",
          thumb: "/imgs/projects/5/c432eb133982397.61cb28530e9bf.png",
          head: "About Page",
          paragraph: `This section show the main core values of the company`,
        },

        {
          id: "4",
          src: "/imgs/projects/5/8f7529133982397.61cb28530e081.png",
          thumb: "/imgs/projects/5/8f7529133982397.61cb28530e081.png",
          head: "Products Section",
          paragraph: `This section show all the products that MAP provides`,
        },
        {
          id: "5",
          src: "/imgs/projects/5/f2c46e133982397.61cb28530efe1.png",
          thumb: "/imgs/projects/5/f2c46e133982397.61cb28530efe1.png",
          head: "Our Team Section",
          paragraph: `This section show MAP company team as will as their profession`,
        },

        {
          id: "6",
          src: "/imgs/projects/5/1d8ebc133982397.61cb28530d2b1.png",
          thumb: "/imgs/projects/5/1d8ebc133982397.61cb28530d2b1.png",
          head: "Contact Us Page",
          paragraph: `This page used to connect clients with MAP operation team`,
        },
        {
          id: "7",
          src: "/imgs/projects/5/98df65133982397.61cb28530f738.png",
          thumb: "/imgs/projects/5/98df65133982397.61cb28530f738.png",
          head: "Career Page",
          paragraph: `This page is used to add and display available vacancies in MAP company`,
        },
        {
          id: "8",
          src: "/imgs/projects/5/81258e133982397.61cb28530c917.png",
          thumb: "/imgs/projects/5/81258e133982397.61cb28530c917.png",
          head: "Footer Section",
          paragraph: `This footer contains some information about on how to reach out and small map for the website`,
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
        { label: "Newest", value: "desc" },
        { label: "Oldest", value: "asc" },
      ],
    },
  },
};

export default switchConfigByLanguage(profileConfig, i18next.language, [...i18next.languages]) as ProfileConfigs;
