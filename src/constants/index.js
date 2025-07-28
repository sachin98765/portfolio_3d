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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Tailwind CSS",
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
      title: "Python Best Book Recommendation",
      company_name: "ARDENT COMPUTECH PVT. LTD.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2022 - May 2022",
      points: [
         "Built a book recommendation system using Python, pandas, and scikit-learn.",
    "Applied collaborative and content-based filtering techniques to suggest relevant books.",
    "Processed and cleaned large book datasets (titles, authors, ratings) using NumPy and pandas.",
    "Visualized user preference trends using matplotlib and seaborn for better insights.",
    "Packaged the system into a simple web interface using Streamlit.",
    "Improved system accuracy through hyperparameter tuning and evaluation metrics like RMSE.",
      ],
    },
    {
      title: "AI-ML Virtual Internship",
      company_name: "AICTE",
      icon: meta,
      iconBg: "#383E56",
      date: "April 2024 - June 2024",
      points: [
        "Learned core concepts of Artificial Intelligence and Machine Learning including supervised and unsupervised learning.",
    "Built ML models using Python libraries such as scikit-learn, NumPy, and pandas.",
    "Performed data preprocessing, feature selection, and model evaluation on real-world datasets.",
    "Implemented projects like Iris classification, House price prediction, and Handwritten digit recognition using Jupyter Notebook.",
    "Explored AI ethics, bias in datasets, and model interpretability.",
    "Participated in virtual workshops and quizzes to reinforce concepts and gain certifications.",
      ],
    },
    {
      title: "Android Developer Virtual Internship",
      company_name: "AICTE",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Oct 2024 - Dec 2024",
      points: [
        "Learned the fundamentals of Android app development using Kotlin programming language.",
    "Built Android applications using Android Studio and Kotlin with a focus on clean and readable code.",
    "Designed user interfaces using XML and Jetpack Compose for modern UI experiences.",
    "Implemented navigation components, RecyclerViews, and data persistence using Room Database.",
    "Worked with coroutines for asynchronous programming and improved app performance.",
    "Integrated RESTful APIs using Retrofit and handled JSON data efficiently.",
    "Added user authentication and real-time database features using Firebase.",
    "Debugged and tested applications using Logcat, Android Emulator, and Unit Tests.",
    "Completed and submitted capstone projects like To-Do List App, Notes App, and News App.",
      ],
    },
    {
      title: "Java Full Stack Virtual Internship",
      company_name: "AICTE",
      icon: meta,
      iconBg: "#383E56",
      date: "Apr 2025 - Jun 2025",
      points: [
        "Learned core Java concepts including OOP, collections, exception handling, and multithreading.",
    "Built responsive frontend interfaces using HTML, CSS, JavaScript, and React.js.",
    "Developed RESTful APIs using Spring Boot and implemented MVC architecture.",
    "Integrated MySQL database with backend using Hibernate/JPA for full-stack functionality.",
    "Worked on a full-stack project (e.g., Employee Management System) combining frontend, backend, and database.",
    "Used Git and GitHub for version control and collaborated in a team environment.",
    "Gained knowledge of deployment techniques using tools like Heroku and understanding of CI/CD basics."
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };