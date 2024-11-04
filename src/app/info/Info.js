/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(255,207,103)", "rgb(211,50,29)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  nav_menu: [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "about",
      title: "About Us",
    },
    {
      link: "services",
      title: "Services",
    },
    {
      link: "process",
      title: "Process",
    },
    {
      link: "techstack",
      title: "Technology Stack",
    },
    {
      link: "casestudies",
      title: "Case Studies",
    },
    {
      link: "contactus",
      title: "Contact Us",
    },
  ],
  socials: [
    {
      link: "https://github.com/mobilixir",
      icon: "/github.svg",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/rushikesh-pandit-646834100/",
      icon: "/linkedin.svg",
      label: "linkedin",
    },
    {
      link: "tel:+917588945789",
      icon: "/mobile.svg",
      label: "mobile",
    },
    {
      link: "mailto:rushikesh.d.pandit@gmail.com",
      icon: "/email.svg",
      label: "email",
    },
  ],
  techStack: [
    {
      name: "Android Studio",
      image: "/android-studio.svg",
    },
    {
      name: "CircleCI",
      image: "/circleci.svg",
    },
    {
      name: "Elixir",
      image: "/elixir.svg",
    },
    {
      name: "Fastlane",
      image: "/fastlane.svg",
    },
    {
      name: "Firebase",
      image: "/firebase.svg",
    },
    {
      name: "Flutter",
      image: "/flutter.svg",
    },
    {
      name: "GIT",
      image: "/git.svg",
    },
    {
      name: "JavaScript",
      image: "/javascript.svg",
    },
    {
      name: "Next.js",
      image: "/nextjs.svg",
    },
    {
      name: "Node.js",
      image: "/nodejs.svg",
    },
    {
      name: "Phoenix Framework",
      image: "/phoenix.svg",
    },
    {
      name: "React",
      image: "/react.svg",
    },
    {
      name: "Spring",
      image: "/spring.svg",
    },
    {
      name: "Swift",
      image: "/swift.svg",
    },
    {
      name: "TypeScript",
      image: "/typescript.svg",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.svg",
    },
    {
      name: "VS Code",
      image: "/vs-code.svg",
    },
    {
      name: "Xcode",
      image: "/xcode.svg",
    },
  ],
  sideProjects: [
    {
      name: "Redux Toolkit Saga Boilerplate",
      link: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-boilerplate",
      description:
        'The "Redux Toolkit Saga Boilerplate" is a VS Code extension designed to simplify the process of creating React Native projects with Redux Toolkit and Saga implementation. It streamlines the initial setup by providing developers with a basic boilerplate code structure. This means developers can start working on their React Native applications without the hassle of manually configuring the underlying Redux Toolkit and Saga setup.',
      isWebsite: false,
    },
    {
      name: "Redux Toolkit Saga TypeScript Boilerplate",
      link: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-typescript-boilerplate",
      description:
        'The "Redux Toolkit Saga Typescript Boilerplate" is a Visual Studio Code extension designed to streamline the process of creating React Native projects with Redux Toolkit implementation. It aims to simplify and accelerate the initial setup for developers by providing a comprehensive boilerplate codebase. With this extension, developers can kickstart their projects without the need to manually configure the underlying Redux and Saga implementations.',
      isWebsite: false,
    },
    {
      name: "iOS app privacy generator",
      link: "https://ios-app-privacy.vercel.app",
      description:
        'The "iOS app privacy generator" is a tool which lets you to generate a "PrivacyInfo.xcprivacy" file seamlessly without which apple will reject your application.',
      isWebsite: true,
    },
  ],
  landingPage: {
    title: "Transforming Ideas into Powerful Mobile and Web Solutions",
    subtitle:
      "Innovative software consultancy specializing in cutting-edge mobile and web development",
    ctaButton: "Get a Free Consultation",
    about:
      "Leveraging the latest technologies to build robust, scalable solutions",
    tech: [
      {
        title: "Mobile App Development",
        stack: ["iOS app development", "React Native", "LiveView Native"],
        image: "/mobile.svg",
      },
      {
        title: "Web App Development",
        stack: ["Next.js", "React.js", "Phoenix Framework"],
        image: "/web.svg",
      },
      {
        title: "Backend Development",
        stack: ["Node.js", "Spring Boot", "Elixir"],
        image: "/backend.svg",
      },
      {
        title: "CI/CD Automation",
        stack: ["Fastlane", "CircleCI", "Bitrise"],
        image: "/cicd.svg",
      },
    ],
    whychooseus: {
      title: "Why Choose Us?",
      reasons: [
        "Expertise in both mobile and web development",
        "Cutting-edge technology stack",
        "Personalized, agile development approach",
        "Commitment to quality and innovation",
        "Scalability & Performance",
      ],
      ctatitle: "Ready to bring your idea to life? Let's talk!",
    },
  },
  aboutus: {
    missionTitle: "Our Mission",
    mission:
      "To help businesses thrive in the digital age by delivering robust and scalable mobile and web solutions.",
    storyTitle: "Our Story",
    story:
      "Mobilixir Technologies was founded with a passion for leveraging technology to solve real-world problems. Our team is dedicated to creating top-notch applications using the most advanced frameworks and languages.",
    approach: [
      "Focus on innovation and quality",
      "Commitment to staying ahead of technological trends",
      "Emphasis on creating value for clients",
    ],
  },
  services: {
    title: "Our Services",
    servicesList: [
      {
        title: "Mobile App Development",
        description:
          "Crafting intuitive and feature-rich mobile experiences using Swift, SwiftUI, and React Native. Our expertise spans across native and cross-platform app development, ensuring seamless performance and user engagement.",
        image: "/mobile.svg",
      },
      {
        title: "Web App Development",
        description:
          "Building dynamic, high-performing web applications with technologies like React.js, Next.js, and the Phoenix Framework, focusing on speed, scalability, and user experience.",
        image: "/web.svg",
      },
      {
        title: "Backend Development",
        description:
          "Creating robust server-side solutions using Node.js and Elixir for scalable and reliable applications, complete with RESTful APIs and real-time features.",
        image: "/backend.svg",
      },
      {
        title: "UI/UX Design",
        description:
          "Designing user-centric interfaces that combine beauty and functionality using Tailwind CSS. We create visually appealing and easy-to-navigate applications.",
        image: "/uiux.svg",
      },
      {
        title: "CI/CD Automation",
        description:
          "Automating development pipelines using Fastlane, CircleCI, and Bitrise to ensure rapid, reliable deployments.",
        image: "/cicd.svg",
      },
      {
        title: "Custom Software Solutions",
        description:
          "Tailored solutions for unique business needs with Integration services and Scalable architecture design",
        image:"/software_development.svg"
      }
    ],
  },
};
