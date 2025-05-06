// Import images
import dco from '../../assets/imgs/dco.webp';
import mentor from '../../assets/imgs/p-mentor.webp';
import ds3 from '../../assets/imgs/ds3.webp';
import shot from '../../assets/imgs/portfolio.webp';
import shot3 from '../../assets/imgs/catcar.webp';
import project1 from '../../assets/imgs/projectup.webp';
import shot4 from '../../assets/imgs/traveltrendz.webp';
import shot6 from '../../assets/imgs/weather.webp';
import shot7 from '../../assets/imgs/rainfall.webp';

const projects = [
  { 
    title: "Design Co",
    role: "Web Developer", 
    image: dco, 
    tools: "React, Typescript, Next.js, HTML, SASS",
    link: "https://ucsddesign.co/",
    description: "Creating interactive websites for UCSD's largest pre-professional design community events."
  },

  { 
    title: "ACM x Hacks Projects", 
    role: "Project Mentor", 
    image: mentor, 
    tools: "React, ExpressJS, Node.js, HTML, MongoDB, CSS, Figma",
    link: "https://www.figma.com/design/qInsM9vo3HplH9n6Iaigpq/(4)-HIGH-FI-FIDELITY-PROTOTYPING?node-id=0-1&p=f&t=6CgGRGpiSTeAl3Kn-0",
    description: "A dynamic web platform for beginner gardeners and local gardens at UCSD."},

  { 
    title: "DS3 Society", 
    role: "Software Developer", 
    image: ds3, 
    tools: "React, Typescript, Tailwind CSS",
    link: "https://www.ds3ucsd.com/",
    description: "Revamping the main, consulting, and hackathon websites for the data science student society." },

  { 
    title: "Personal Portfolio", 
    role: "Personal Project", 
    image: shot, 
    tools: "React, HTML, CSS, Figma",
    link: "#",
    description: "Personal portfolio showcasing my projects, developed by me." },

];

export default projects;
