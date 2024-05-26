export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Mobile App with Web3",
      description: "A New way of using Web3 Technologies",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Portfolio Website using Next Js",
      des: "Yes, this is the site you are currently on! I created it with Next js and Tailwind CSS.",
      img: "/p1N.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fiv.svg"],
      link: "https://github.com/mhaseebali/threads",
    },
    {
      id: 2,
      title: "AI - Video Mobile APP with React Native",
      des: "A mobile App created using React Native, for the purpose of creating and saving AI videos",
      img: "/Reizx.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/three.svg"],
      link: "https://github.com/mhaseebali",
    },
    {
      id: 3,
      title: "Threads Clone App using Next Js",
      des: "I created a Threads App Clone using Next js Framework, TailwindCSS, And more!",
      img: "/threads.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/mhaseebali",
    },
    {
      id: 4,
      title: "Animated Artwork Displays For Streamers & Gamers",
      des: "Apart from Coding I also find it quite creative to spend my time making Animations.",
      img: "/art.png",
      iconLists: ["/fiv.svg", "/pph.svg", "/git.svg", "/three.svg", "/tail.svg"],
      link: "https://github.com/mhaseebali",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "This man is incredible ! As a man who is a bit dumb, I really need someone to explain me step by step how to do something on my computer especially for his products and this seller helped me a lot to set up correctly my new order. The product is amazing and I'm really happy to have it and the way I had to set up it, thanks to him it was really easy and handfull. Thanks again",
      name: "Catapig",
      title: "Fiverr - Client",
    },
    {
      quote:
        "Asked for a youtube video of Croagunk walking in front of a green screen to be put on top of a Hawaiian beach with multiple moving objects in the background. Not only did he produce what I asked for, he also adjusted the walk so it loops perfectly. Thank you so much!!",
      name: "Campionrolls",
      title: "Fiverr - Client",
    },
    {
      quote:
        "Professionalism of work, Creativity, Politeness, and Quick responsiveness Will buy again",
      name: "Maddogmajima7",
      title: "Fiverr - Client",
    },
    {
      quote:
        "Super quick turnover rate, good communication, and helpful in making the necessary adjustments for the final product!",
      name: "Sutcereen",
      title: "Upwork - Client",
    },
    {
      quote:
        "A very good man, delivered more than I asked for, kept me updated throughout the process or our order. Highly Satisfied, will 100% comeback for more work!",
      name: "Flowofoct",
      title: "Upwork - Client",
    },
  ];
  
  export const companies = [
    // {
    //   id: 1,
    //   name: "cloudinary",
    //   img: "/cloud.svg",
    //   nameImg: "/cloudName.svg",
    // },
    {
      id: 2,
      name: "PeoplePerHour",
      img: "/pph.svg",
      nameImg: "/pphname.svg",
    },
    {
      id: 3,
      name: "UPWORK",
      img: "/upwork.svg",
      nameImg: "/upwork.svg",
    },
    {
      id: 4,
      name: "Fiverr",
      img: "/fiv.svg",
      nameImg: "/fiverrName.svg",
    },
    // {
    //   id: 5,
    //   name: "docker.",
    //   img: "/dock.svg",
    //   nameImg: "/dockerName.svg",
    // },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Software Engineer Intern",
      desc: "Assisted in the development of several platform, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - Upwork",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Created a mobile app for a client, from initial concept to deployment on google play store.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Freelance Frontend Developer",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];