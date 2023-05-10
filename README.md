# React Application Readme

This is a React application that allows you to showcase your portfolio data. Follow the steps below to run the project.

## Prerequisites

Before you start, make sure you have Node.jsand npm installed on your system.

### Installation

1. Clone the repository to your local machine.

2. Open a terminal window and navigate to the project's root folder.

3. Run the following command to install the required libraries:
   <br>
   `npm test`

## Configuration

1. Run the following command to generate the configuration files:
   <br>
   `npm run generate-configs`
   This will create some files in the src/configs folder. You can modify these files to add your own portfolio data. For more information about the structure of these files, complete reading the file.

## Running the project

1. Run the following command to start the development server:

   ```
   npm start
   ```

2. Open a web browser and navigate to http://localhost:3000. You should see the application's main page.

That's it! Now you can start customizing your portfolio data and building your application. If you have any questions or feedback, feel free to contact us.

## Application Configuration

This application uses the following configuration settings, which can be adjusted as needed.

```
export const appConfig = {
default_mode: "dark",
languages: ["en", "de"],
contact_form_url: "https://example.io/xwkjnpjd",
};
```

1. Default Mode
   The `default_mode` setting determines the default color scheme for the application. Currently, the available options are "dark" and "light". By default, the application is set to use the "dark" mode.

2. Languages
   The `languages` setting is an array of strings that determines the languages supported by the application. Currently, the application supports English ("en") and German ("de") languages. You can add or remove languages from this list as needed.

## Profile Configuration

You can find these sections in the profile configuration file, you will full it with your data in the languages that you set in your app config file:

1. Main information

```
 first_name: "YOUR_FIRST_NAME",

  last_name: "YOUR_LAST_NAME",

  profile_pic_main: "/imgs/profile.png",

  profile_pic_about_me: "/imgs/my-about-image.jpg",

  email: "YOUR_EMAIL",

  bio_en: `YOUR_BIO_IN_ENGLISH`,
  bio_de: `YOUR_BIO_IN_GERMAN`,

  skills_introduction_en: "YOUR_SKILLS_INTRODUCTION_IN_ENGLISH",
  skills_introduction_de: "YOUR_SKILLS_INTRODUCTION_IN_GERMAN",

  professions_en: ["PROFESSION1_IN_ENGLISH", "PROFESSION2_IN_ENGLISH"],
  professions_de: ["PROFESSION1_IN_GERMAN", "PROFESSION2_IN_GERMAN"],

  cvs: [
    {
      type: "RESUME_TYPE,
      link: "/cvs/my-cv.pdf",
    },
  ],

  years_of_experiance: 5,
```

2. Social media links

```

social_media: [
    { link: "YOUR_LINKEDIN_URL", icon: FaLinkedinIn, label: "LinkedIn" },

    { link: "YOUR_GITHUB_URL", icon: FaGithub, label: "Github" },

    { link: "YOUR_BEHANCE_URL", icon: FaBehance, label: "Behance" },

    { link: "mailto: YOUREMAIL", icon: FaEnvelope, label: "Email" },
  ],
```

3. Skills set :

```
 skill_set: [
    { icon: reactIcon, value: 9, title: "React.JS", priorty: 1 },
    { icon: typescriptIcon, value: 7, title: "Typescript", priorty: 2 },
    { icon: javascriptIcon, value: 8, title: "Javascript", priorty: 3 },
    { icon: nestJsIcon, value: 7, title: "NestJs", priorty: 4 },
    { icon: circleciIcon, value: 4, title: "CI/CD", priorty: 6 }
  ]
```

4. Personal information

```
  personal_information: [
    { key_en: "YOUR_FIRST_NAME", key_de: "Vorname", value: "YOUR_FIRST_NAME" },
    { key_en: "YOUR_LAST_NAME", key_de: "Nachname", value: "YOUR_LAST_NAME" },
    { key_en: "age", key_de: "Alter", value: "YOUR_AGE" },
    {
      key_en: "nationality",
      key_de: "Nationalität",
      value_en: "YOUR_NATIONALITY_IN_ENGLISH",
      value_de: "YOUR_NATIONALITY_IN_GERMAN",
    },
    {
      key_en: "freelance",
      key_de: "Freiberuflich",
      value_en: "YOUR_STATUS_FOR_FREELANCE_IN_ENGLISH",
      value_de: "YOUR_STATUS_FOR_FREELANCE_IN_GERMAN",
    },
    {
      key_en: "address",
      key_de: "Adresse",
      value_en: "YOUR_ADDRESS_IN_ENGLISH",
      value_de: "YOUR_ADDRESS_IN_GERMAN",
    },
    { key_en: "phone", key_de: "Telefon", value: "YOUR_PHONE_NUMBER" },
    {
      key_en: "Email",
      key_de: "E-Mail",
      value: "YOUR_EMAIL",
    },
    {
      key_en: "Relocate",
      key_de: "Umzug möglich",

      value_en: "YOUR_STATUS_FOR_RELOCATION_IN_ENGLISH",
      value_de: "YOUR_STATUS_FOR_RELOCATION_IN_GERMAN",
    },
    {
      key_en: "Languages",
      key_de: "Sprachen",
      value_en: "English(C1), Arabic(C1), German(A1)",
      value_de: "Englisch(C1), Arabisch(C1), Deutsch(A1)",
    },
  ],
```

5. Experinces

```
  experince: [
    {
      icon: FaBriefcase,
      title_en: "YOUR_POSTION_TITLE_ENGLISH",
      title_de: "YOUR_POSTION_TITLE_GERMAN",
      time_en: "FROM-TO",
      time_de: "FROM-TO",
      description_list_en: [],
      description_list_de: [],
      place: "Freelance",
    },
    {
      ....
    }
    ,
  ],
```

6. Education

```
education: [
    {
      icon: "FaGraduationCap",
      title_en: "YOUR_MAJOR_IN_ENGLISH",
      title_de: "YOUR_MAJOR_IN_GERMAN",

      time: "FROM - TO",
      time_de: "FROM - TWO",

      description_list_en: [],
      description_list_de: [],

      place_en: "YOUR_EDUCATION_PLACE_IN_ENGLISH",
      place_de: "YOUR_EDUCATION_PLACE_IN_GERMAN",
    },
    {
      ......
    }

  ],

```

7. Experince statistics

```
  statistics: [
    { value: "+5", title_en: "years of Experience", title_de: "Jahre Erfahrung" },
    { value: "+12", title_en: "Completed Projects", title_de: "Abgeschlossene Projekte" },
    { value: "+6", title_en: "Happy Customers", title_de: "Zufriedene Kunden" },
    { value: "+0", title_en: "Awards Winner", title_de: "Preisgewinner" },
  ],
```

8. Projects.

```

  projects: [
    {
      date: "PROJECT_DATE,
      type: "PROJECT_TYPE",
      name: "PROJECT_NAME",
      id: "ID",
      data: [
        {
          id: "ID",
          src: "IMAGE_PATH",
          thumb: "THUMB",
          head_en: "HEADER_IN_ENGLISH",
          head_de: "HEADER_IN_GERMAN",
          paragraph_en: "PHARAGRAPH_IN_ENGLISH",
          paragraph_de: "PHARAGRAPH_IN_GERMAN",
        },
        {
         .....
        }
      ]
```

9. Project filters

```
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
        { label_en: "Newest", value: "desc", label_de: "Neueste" },
        { label_en: "Oldest", value: "asc", label_de: "Älteste" },
      ],
    },
  }
```

## Additional Info

I use devicon for the development icons, so you should import them before you use it
