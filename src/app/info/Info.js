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
      link:"home",
      title:"Home"
    },
    {
      link:"about",
      title:"About Us"
    },
    {
      link:"services",
      title:"Services"
    },
    {
      link:"process",
      title:"Process"
    },
    {
      link:"techstack",
      title:"Technology Stack"
    },
    {
      link:"casestudies",
      title:"Case Studies"
    },
    {
      link:"contactus",
      title:"Contact Us"
    }
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
    }
  ],
  techStack: [
    {
      name: "Android Studio",
      image: "/android-studio.svg"
    },
    {
      name: "CircleCI",
      image: "/circleci.svg"
    },
    {
      name: "Elixir",
      image: "/elixir.svg"
    },
    {
      name: "Fastlane",
      image: "/fastlane.svg"
    },
    {
      name: "Firebase",
      image: "/firebase.svg"
    },
    {
      name: "Flutter",
      image: "/flutter.svg"
    },
    {
      name: "GIT",
      image: "/git.svg"
    },
    {
      name: "JavaScript",
      image: "/javascript.svg"
    },
    {
      name: "Next.js",
      image: "/nextjs.svg"
    },
    {
      name: "Node.js",
      image: "/nodejs.svg"
    },
    {
      name: "Phoenix Framework",
      image: "/phoenix.svg"
    },
    {
      name: "React",
      image: "/react.svg"
    },
    {
      name: "Spring",
      image: "/spring.svg"
    },
    {
      name: "Swift",
      image: "/swift.svg"
    },
    {
      name: "TypeScript",
      image: "/typescript.svg"
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.svg"
    },
    {
      name: "VS Code",
      image: "/vs-code.svg"
    },
    {
      name: "Xcode",
      image: "/xcode.svg"
    },
  ],
  sideProjects: [
    {
      name: "Redux Toolkit Saga Boilerplate",
      link: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-boilerplate",
      description: "The \"Redux Toolkit Saga Boilerplate\" is a VS Code extension designed to simplify the process of creating React Native projects with Redux Toolkit and Saga implementation. It streamlines the initial setup by providing developers with a basic boilerplate code structure. This means developers can start working on their React Native applications without the hassle of manually configuring the underlying Redux Toolkit and Saga setup.",
      isWebsite: false
    },
    {
      name: "Redux Toolkit Saga TypeScript Boilerplate",
      link: "https://marketplace.visualstudio.com/items?itemName=RushikeshPandit.redux-toolkit-saga-typescript-boilerplate",
      description: "The \"Redux Toolkit Saga Typescript Boilerplate\" is a Visual Studio Code extension designed to streamline the process of creating React Native projects with Redux Toolkit implementation. It aims to simplify and accelerate the initial setup for developers by providing a comprehensive boilerplate codebase. With this extension, developers can kickstart their projects without the need to manually configure the underlying Redux and Saga implementations.",
      isWebsite: false
    },
    {
      name: "iOS app privacy generator",
      link: "https://ios-app-privacy.vercel.app",
      description: "The \"iOS app privacy generator\" is a tool which lets you to generate a \"PrivacyInfo.xcprivacy\" file seamlessly without which apple will reject your application.",
      isWebsite: true
    }
  ],
  landingPage:{
    title:"Innovative Mobile & Web App Development Services",
    subtitle:"Building cutting-edge digital solutions with robust technologies for a seamless user experience.",
    ctaButton:"Get a Free Consultation"
  }
};
