import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  supersourcingimg,
  hiriumimg,
  neplarimg,
  thelanudryimg,
  bpmsimg,
  pasimg,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mern developer",
    icon: creator,
  },
  {
    title: "Aws architect",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Postgres",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancing",
    company_name: "Multiple company's",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "EngineerBabu",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2021 - Jan 2022",
    points: [
      "Developing and maintaining product for NAF (Nigerian Air Force) using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Node.js Developer",
    company_name: "Supersourcing",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2022 - Jan 2023",
    points: [
      "Developing and maintaining supersourcing product using Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing payment gateways and 3rd party services with ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Supersourcing",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but shubhankar proved me wrong. It was an absolute game-changer for our business",
    name: "Pramod V.",
    designation: "Group CTO at INQ",
    company: "INQ",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Shubhankar was an absolute pleasure. Their expertise, professionalism, and attention to detail exceeded my expectations.",
    name: "Arup Mondal",
    designation: "CEO",
    company: "Neplar techno pvt ltd",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      // "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      "I can't thank shubhankar enough for their incredible work. They transformed my vision into reality and helped me establish a strong online presence.",
    name: "Tunde Dada",
    designation: "Group Head at INQ",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like shubhankar does. The entire process smooth and enjoyable.",
    name: "Ram k.",
    designation: "CTO",
    company: "Thelaundrybag",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    testimonial:
      "The dedication demonstrated by shubhankar throughout our collaboration were outstanding. They truly understood our needs and delivered beyond our expectations.",
    name: "Jitendra G.",
    designation: "Group CTO at INQ",
    company: "INQ",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "Supersourcing Product",
    description:
      "Web-based platform that allows users to search, and manage jobs from various providers, providing a convenient and efficient solution for job needs.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
      {
        name: "micro-services",
        color: "pink-text-gradient",
      },
    ],
    image: supersourcingimg,
    demo_link: "https://supersourcing.com",
    source_code_link: "https://github.com/atprogrammerashu",
  },
  {
    name: "BPMS (INQ) Product",
    description:
      "Web application that enables users to automate their process for their departments, view estimated work, share confidential docx with diff. departments, having live doc editing and locate available docx based on their roles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "hooks",
        color: "red-text-gradient",
      },
      {
        name: "antd",
        color: "light-blue-text-gradient",
      },
      {
        name: "richtexteditor",
        color: "dark-blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: bpmsimg,
    demo_link: "https://github.com/atprogrammerashu/react-naf-inq",
    source_code_link: "https://github.com/atprogrammerashu",
  },
  {
    name: "Hirium Product (ATS)",
    description:
      "Web-based platform that allows company to track, and manage developers, publish their jobs on various platforms, providing a convenient and efficient solution for managing resources.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
      {
        name: "micro-services",
        color: "pink-text-gradient",
      },
    ],
    image: hiriumimg,
    demo_link: "https://ats.supersourcing.com/auth/login",
    source_code_link: "https://github.com/atprogrammerashu",
  },
  {
    name: "Neplar product",
    description:
      "A comprehensive (Stock market) trading analysis platform that allows users to track their funds, loss/profits, future goals, live tracking graphs for investments and popular company shares recommendations.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "hooks",
        color: "red-text-gradient",
      },
      {
        name: "pdf-extractor-lib",
        color: "pink-text-gradient",
      },
    ],
    image: neplarimg,
    demo_link: "https://www.zaubacorp.com/company/NEPLAR-TECHNO-PRIVATE-LIMITED/U72900MP2019PTC049909",
    source_code_link: "https://github.com/atprogrammerashu",
  },
  {
    name: "The Laundry bag",
    description:
      "The Laundry Bag can laundry facilities of top hotel, hospitals, chains as well as local motels, did iron, packing, wash cloths while mantaning quality and deliver it on time also in door step",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "orange-text-gradient",
      },
      {
        name: "expressjs",
        color: "red-text-gradient",
      },
      {
        name: "payment-razorpay",
        color: "pink-text-gradient",
      },
    ],
    image: thelanudryimg,
    demo_link: "https://www.thelaundrybag.co.in/home/",
    source_code_link: "https://github.com/atprogrammerashu",
  },
  {
    name: "PAS Product",
    description:
      "PAS enables users to automate their process for their organisation members, they view praise, team members, scheduled meetings, projects working on,can see reports depratments on dashbord.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "hooks",
        color: "red-text-gradient",
      },
      {
        name: "antd",
        color: "light-blue-text-gradient",
      },
      {
        name: "richtexteditor",
        color: "dark-blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: pasimg,
    demo_link: "https://github.com/atprogrammerashu/react-naf-inq",
    source_code_link: "https://github.com/atprogrammerashu",
  },
];

export { services, technologies, experiences, testimonials, projects };
