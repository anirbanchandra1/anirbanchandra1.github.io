// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "a thematic collection of my past and present works.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-preprint-on-downscaling-weather-forecasts-https-arxiv-org-pdf-2602-23146",
          title: 'New preprint on downscaling weather forecasts! https://arxiv.org/pdf/2602.23146',
          description: "",
          section: "News",},{id: "projects-ai-based-surrogate-modeling",
          title: 'AI based Surrogate Modeling',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-weather-forecasting",
          title: 'Weather forecasting',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-ai4materials",
          title: 'AI4Materials',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-multi-scale-modeling-of-liquid-vapor-interfaces-ph-d",
          title: 'Multi-scale modeling of liquid-vapor interfaces (Ph.D.)',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-semiconductor-amp-memory-device-optimization",
          title: 'Semiconductor &amp;amp; Memory Device Optimization',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-undergrad-research",
          title: 'Undergrad. research',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6E%69%72%62%61%6E[%64%6F%74]%63%68%61%6E%64%72%61[%64%6F%74]%32%30%32%30[%61%74]%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=Vjvd3ekAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/anirban-c-52577659", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/anirbanchandra1", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
