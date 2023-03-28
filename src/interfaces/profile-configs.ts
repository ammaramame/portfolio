import { IconType } from "react-icons";

export interface ProfileConfigs {
  first_name: string;
  last_name: string;
  profile_pic_main: string;
  email: string;
  bio: string;
  professions: string[];
  cvs: {
    type: string;
    link: string;
  }[];
  years_of_experiance: number;
  social_media: {
    link: string;
    icon: IconType;
    label: string;
  }[];
  skill_set?: {
    icon: string;
    value: number;
    title: string;
    priorty: number;
  }[];
  personal_information: {
    key: string;
    value: string;
  }[];
  statistics: { value: string; title: string }[];
  experince: {
    icon: IconType;
    title: string;
    time: string;
    description_list: string[];
    place: string;
  }[];
  education: {
    icon: IconType;
    title: string;
    time: string;
    description_list: string[];
    place: string;
  }[];

  projects: {
    date: string;
    type: string;
    id: string;
    data?: {
      id: string;
      size: string;
      src: string;
      thumb: string;
      subHtml: string;
    }[];
  }[];

  project_filters: {
    "data-stack": {
      trigger: "filter";
      data: [{ label: "Front-End"; value: "frontend" }, { label: "Back-End"; value: "backend" }, { label: "Full-Stack"; value: "fullstack" }];
    };
    "data-date": {
      trigger: "sort";
      data: [{ label: "Newest"; value: "desc" }, { label: "Oldest"; value: "asc" }];
    };
  };
}
