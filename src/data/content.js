export const sharedData = {
  about: {
    title: "About Me",
    message:
      "My name is Gabriel Gonçalves Novalski, I'm 19 years old and I'm from Florianópolis, Brazil. I am currently exploring the world of technology and software development. I'm really interested in software/firmware development, IoT and backend web development.",
  },
  skills: {
    title: "Programming Proeficiency",
    itens: [
      { name: "Swift", color: "rgb(231,57,43)" },
      { name: "Ruby", color: "rgb(231,57,43)" },
      { name: "Rails", color: "rgb(190,26,32)" },
      { name: "GO", color: "rgb(56,156,206)" },
      { name: "Java", color: "rgb(194,27,33)" },
      { name: "Spring", color: "rgb(80,174,38)" },
      { name: "C", color: "rgb(20,69,138)" },
      { name: "C++", color: "rgb(137,20,45)" },

      { name: "MySQL", color: "rgb(27,76,117)" },
      { name: "HTML", color: "rgb(218,55,38)" },
      { name: "CSS", color: "rgb(49,123,186)" },
      { name: "SASS", color: "rgb(190,77,135)" },
      { name: "React", color: "rgb(83,209,248)" },
      { name: "Bootstrap", color: "rgb(70,45,108)" },
      { name: "Yarn", color: "rgb(44,123,173)" },

      { name: "JavaScript", color: "rgb(236,213,63)" },
      { name: "TypeScript", color: "rgb(31,100,193)" },
      { name: "Node.js", color: "rgb(115,199,42)" },
      { name: "PHP", color: "rgb(79,108,167)" },
      { name: "Laravel", color: "rgb(230,53,40)" },
      { name: "Python", color: "rgb(250,209,59)" },
      { name: "Git", color: "rgb(0,0,0)" },
    ],
  },
  education: {
    title: "Education",
    itens: [
      {
        title: "IFSC - Instituto Fedaral de Santa Catrina",
        subtitle: "Electronics Vocational course",
        date: { start: "Jul 2018", end: "Sep 2022" },
      },
      {
        title: "University Estácio de Sá ",
        subtitle: "Software Engineering",
        date: { start: "Aug 2022", end: "present" },
      },
    ],
  },
  projects: {
    title: "Some of my Projects",
    itens: [
      {
        title: "DMDC - Client",
        description:
          "Server developed for an IoT voltage and current meter based on an ESP32 module during the mandatory IFSC internship with Professor Clovis Petry.",
        link: "https://github.com/DMDC-estagio/Dashboard-server",
        image: require("./images/dmdc.png"),
      },
      {
        title: "Creepy Caves Game",
        description:
          "Game developed entirely in C language using the Allegro 5 library during programming classes at IFSC, this being the final project of the subject.",
        link: "https://github.com/gab5987/Jogo-C",
        image: require("./images/creepy-caves-game.jpeg"),
      },
      {
        title: "logical group website",
        description: "Website developed for Pousada Maraká.",
        link: "https://pousadamaraka.com.br",
        image: require("./images/maraka.png"),
      },
      {
        title: "logical group website",
        description:
          "Website developed by me and a friend to showcase our work.",
        link: "https://logical-tecnologia.vercel.app",
        image: require("./images/logical-website.png"),
      },
    ],
  },

  contact: {
    title: "Get in Touch",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    social: [
      {
        name: "github",
        link: "https://github.com/gab5987",
      },
      {
        name: "instagram",
        link: "https://github.com/gab5987",
      },
      {
        name: "whatsapp",
        link: "https://wa.me/5548988401390",
      },
      {
        name: "linkedin",
        link: "https://www.linkedin.com/in/gabriel-oliveira-5987/",
      },
    ],
  },
};
