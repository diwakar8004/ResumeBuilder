import {
  initialEducation,
  initialProfile,
  initialProject,
  initialWorkExperience,
} from "lib/redux/resumeSlice";
import type { Resume } from "lib/redux/types";
import { deepClone } from "lib/deep-clone";

export const END_HOME_RESUME: Resume = {
  profile: {
    name: "DHYANCHAND GOND",
    summary:
      "Web developer pursuing B.Tech (CSE - AIML), focused on building responsive web applications and improving technical skills.",
    email: "diwakargond923@gmail.com",
    phone: "+91 6394237705",
    location: "Lucknow / Bahraich, India",
    url: "linkedin.com/in/dhyanchand-gond",
  },
  workExperiences: [
    {
      company: "Tech Solutions Inc.",
      jobTitle: "Junior Web Developer",
      date: "Jun 2024 - Present",
      descriptions: [
        "Developed and maintained responsive web applications using React and Node.js",
        "Collaborated with designers and backend engineers to deliver user-friendly interfaces",
        "Optimized website performance and improved load times by 30%",
      ],
    },
  ],
  educations: [
    {
      school: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
      degree: "Bachelor of Technology - CSE (AIML)",
      date: "2023 - Present",
      gpa: "",
      descriptions: [],
    },
    {
      school: "S Prashad V Prashad Inter College, Bahraich",
      degree: "Intermediate",
      date: "2021 - 2022",
      gpa: "",
      descriptions: [],
    },
  ],
  projects: [
    {
      project: "Resume Builder",
      date: "",
      descriptions: [
        "Built an AI-powered Resume Builder with a clean and user-friendly interface.",
        "Implemented ATS-friendly templates, skill extraction, and smart suggestions for resume optimization.",
      ],
    },
    {
      project: "PartanX",
      date: "",
      descriptions: [
        "Developed the front-end for PartanX, creating a responsive and engaging user interface.",
        "Focused on clean design, smooth performance, and seamless navigation across devices.",
        "Strengthened skills in responsive design and modern front-end development.",
      ],
    },
    {
      project: "Xorvo Technologies",
      date: "",
      descriptions: [
        "Built the front-end for Xorvo Technologies, delivering a professional and user-friendly interface.",
        "Ensured visual consistency, accessibility, and performance optimization.",
      ],
    },
    {
      project: "Cyber Shield",
      date: "",
      descriptions: [
        "Built Cyber Shield, a responsive website providing comprehensive information on cybersecurity.",
        "Designed an intuitive layout for easy navigation and improved user engagement.",
      ],
    },
  ],
  skills: {
    featuredSkills: [
      { skill: "Java", rating: 3 },
      { skill: "C", rating: 3 },
      { skill: "Data Structures & Algorithms", rating: 4 },
      { skill: "Web Development", rating: 4 },
      { skill: "UI/UX", rating: 2 },
    ],
    descriptions: [
      "Professional: Teamwork, Quick learner, Adaptable, Problem solving",
      "Technologies: HTML, CSS, JavaScript, React, Node.js, Responsive Design",
    ],
  },
  custom: {
    descriptions: [
      "Certifications & Achievements:",
      "- Nexus Hackathon 2024 – Runner-up",
      "- SRGI Debugging 2023 – 3rd Place (College Level)",
      "- 21st Divisional Talent Search Examination 2023 – 2nd Place (District Level)",
    ],
  },
};

export const START_HOME_RESUME: Resume = {
  profile: deepClone(initialProfile),
  workExperiences: END_HOME_RESUME.workExperiences.map(() =>
    deepClone(initialWorkExperience)
  ),
  educations: [deepClone(initialEducation)],
  projects: [deepClone(initialProject)],
  skills: {
    featuredSkills: END_HOME_RESUME.skills.featuredSkills.map((item) => ({
      skill: "",
      rating: item.rating,
    })),
    descriptions: [],
  },
  custom: {
    descriptions: [],
  },
};
