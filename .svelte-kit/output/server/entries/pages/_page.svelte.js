import { a as ensure_array_like, b as attr, c as stringify, d as attr_class, e as escape_html, f as attr_style, h as head, i as derived } from "../../chunks/root.js";
import { b as base } from "../../chunks/server.js";
import "../../chunks/url.js";
import "@sveltejs/kit/internal/server";
const jobs = [
  {
    role: "Visualfiles Developer",
    company: "Judge & Priestley",
    date: "February 2025 - January 2026",
    points: [
      "Assisting with development, testing and deployment of automation workflows.",
      "Bulk data analysis using SQL and Visualfiles scripting to provide reports for the business.",
      "Developing and testing integrations with the company's mobile application."
    ]
  },
  {
    role: "Software Engineer",
    company: "Horwich Farrelly",
    date: "June 2021 - August 2024",
    points: [
      "Develop and support the case management software Visualfiles.",
      "Improving existing case creation processes through both Visualfiles scripting and using external services such as web portals.",
      "Developed solutions based on business and external client requirements.",
      "Collaborated with members of the firm and other developers to provide quick and efficient solutions to business requirements.",
      "Utilised SQL to query and manipulate large datasets for analysis and reporting.",
      "Underwent Developing Microsoft Azure Solutions training course provided by QA."
    ]
  },
  {
    role: "Visualfiles Developer",
    company: "Lester Aldridge",
    date: "April 2018 - June 2021",
    points: [
      "Developing processes for a new Visualfiles case type, requiring me to set up new screens, workflows and letters in collaboration with the other Visualfiles developers.",
      "Testing and code reviewing changes made by other developers prior to UAT.",
      "Working closely with legal staff to develop solutions that match what they require.",
      "Using SQL and Visual Studio to produce SSRS reports for external clients.",
      "Undergoing the Querying SQL Databases week long training course with QA."
    ]
  }
];
const education = [
  {
    qualification: "BA Digital Media Design",
    institution: "Bournemouth University",
    date: "Graduated: 2016"
  },
  {
    qualification: "Art & Design Foundation Diploma",
    institution: "East Surrey College",
    date: "Completed: 2013"
  }
];
const skills = [
  { name: "Visualfiles", level: 95 },
  { name: "SQL", level: 80 },
  { name: "Microsoft Office", level: 90 },
  { name: "Agile", level: 75 },
  { name: "Python", level: 60 },
  { name: "Microsoft Azure", level: 60 }
];
const social = [
  { label: "GitHub", url: "https://github.com/DavidWellsDesign" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/davidwellsdesign" },
  { label: "itch.io", url: "https://doctorturnip.itch.io" }
];
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const links = [
      { id: "work", label: "Work" },
      { id: "experience", label: "Experience" },
      { id: "education", label: "Education" },
      { id: "skills", label: "Skills" },
      { id: "contact", label: "Contact" }
    ];
    let active = "work";
    $$renderer2.push(`<aside class="sidebar svelte-129hoe0"><div class="inner svelte-129hoe0"><div class="identity"><h1 class="svelte-129hoe0">David Wells</h1> <p class="role svelte-129hoe0">Software Engineer</p> <p class="bio svelte-129hoe0">Software engineer with a design background — building case management and
				automation systems by day, games and generative art the rest of the time.</p></div> <nav aria-label="Sections" class="svelte-129hoe0"><ul class="svelte-129hoe0"><!--[-->`);
    const each_array = ensure_array_like(links);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<li><a${attr("href", `#${stringify(link.id)}`)}${attr("aria-current", active === link.id ? "true" : void 0)}${attr_class("svelte-129hoe0", void 0, { "active": active === link.id })}><span class="marker svelte-129hoe0" aria-hidden="true"></span> ${escape_html(link.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></nav> <ul class="social svelte-129hoe0"><!--[-->`);
    const each_array_1 = ensure_array_like(social);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let item = each_array_1[$$index_1];
      $$renderer2.push(`<li><a${attr("href", item.url)} target="_blank" rel="noopener" class="svelte-129hoe0">${escape_html(item.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div></aside>`);
  });
}
function ProjectCard($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { project } = $$props;
    $$renderer2.push(`<article class="card svelte-oviq8z"><a class="thumb svelte-oviq8z"${attr("href", project.link)} target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img${attr("src", `${stringify(base)}${stringify(project.image)}`)} alt="" loading="lazy" class="svelte-oviq8z"/> <span class="category svelte-oviq8z">${escape_html(project.category)}</span></a> <div class="body svelte-oviq8z"><h3 class="svelte-oviq8z">${escape_html(project.title)}</h3> <p class="description svelte-oviq8z">${escape_html(project.description)}</p> <ul class="tech svelte-oviq8z"><!--[-->`);
    const each_array = ensure_array_like(project.tech);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let tag = each_array[$$index];
      $$renderer2.push(`<li class="svelte-oviq8z">${escape_html(tag)}</li>`);
    }
    $$renderer2.push(`<!--]--></ul> <a class="link svelte-oviq8z"${attr("href", project.link)} target="_blank" rel="noopener">${escape_html(project.linkLabel)} <span aria-hidden="true" class="svelte-oviq8z">→</span></a></div></article>`);
  });
}
const themes = [
  { id: "ocean", label: "Ocean", accent: "#3498db", accent2: "#8e44ad", dark: "#35424a" },
  { id: "forest", label: "Forest", accent: "#16a085", accent2: "#27ae60", dark: "#1e3a34" },
  { id: "sunset", label: "Sunset", accent: "#e67e22", accent2: "#e74c3c", dark: "#4a2c2a" },
  { id: "rose", label: "Rose", accent: "#e84393", accent2: "#6c5ce7", dark: "#3a2e44" },
  { id: "slate", label: "Slate", accent: "#4a5568", accent2: "#718096", dark: "#1a202c" }
];
const defaultTheme = "ocean";
function ThemeSwitcher($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let open = false;
    let current = defaultTheme;
    $$renderer2.push(`<div${attr_class("switcher svelte-u8uo5a", void 0, { "open": open })}><button class="toggle svelte-u8uo5a"${attr("aria-expanded", open)} aria-label="Change theme colour" title="Change theme colour"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1-.24-.27-.39-.62-.39-1 0-.83.67-1.5 1.5-1.5H16a5 5 0 0 0 5-5c0-4.42-4.03-8-9-8Zm-5.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm3.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg></button> <div class="panel svelte-u8uo5a" role="group" aria-label="Theme colours"><!--[-->`);
    const each_array = ensure_array_like(themes);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let theme = each_array[$$index];
      $$renderer2.push(`<button${attr_class("swatch svelte-u8uo5a", void 0, { "active": current === theme.id })}${attr_style(`background: linear-gradient(135deg, ${stringify(theme.accent)}, ${stringify(theme.accent2)});`)}${attr("aria-label", theme.label)}${attr("aria-pressed", current === theme.id)}${attr("title", theme.label)}></button>`);
    }
    $$renderer2.push(`<!--]--></div></div>`);
  });
}
typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const projects = [
  {
    title: "Voyage",
    category: "Games",
    description: "A 3D space exploration game developed in Unity.",
    image: "/images/voyage.png",
    tech: ["Unity", "C#", "3D"],
    link: "https://gamejolt.com/games/voyage/68864",
    linkLabel: "View on GameJolt"
  },
  {
    title: "Sneaky Sprint",
    category: "Games",
    description: "A fast-paced platformer game developed in Godot.",
    image: "/images/sneaky-sprint.png",
    tech: ["Godot", "GDScript", "2D"],
    link: "https://doctorturnip.itch.io/sneaky-sprint",
    linkLabel: "View on itch.io"
  },
  {
    title: "Python Art Generator",
    category: "Tools",
    description: "A Python script that generates art using configurable parameters.",
    image: "/images/art-generator.png",
    tech: ["Python", "Generative"],
    link: "https://github.com/DavidWellsDesign/ArtGenerator",
    linkLabel: "View on GitHub"
  }
];
const categories = ["Games", "Tools", "Web", "Data"];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let selected = "All";
    const usedCategories = derived(() => [
      "All",
      ...categories.filter((category) => projects.some((p) => p.category === category))
    ]);
    const filtered = derived(
      () => projects
    );
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>David Wells — Software Engineer</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Portfolio of David Wells, a software engineer working across case management systems, automation, tooling and games."/>`);
    });
    $$renderer2.push(`<div class="shell">`);
    Sidebar($$renderer2);
    $$renderer2.push(`<!----> <main class="content"><section id="work" class="section"><h2 class="section-title">Work</h2> `);
    if (usedCategories().length > 2) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="filters svelte-1uha8ag" role="group" aria-label="Filter projects by category"><!--[-->`);
      const each_array = ensure_array_like(usedCategories());
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let category = each_array[$$index];
        $$renderer2.push(`<button${attr_class("pill svelte-1uha8ag", void 0, { "active": selected === category })}${attr("aria-pressed", selected === category)}>${escape_html(category)}</button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="project-grid svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(filtered());
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let project = each_array_1[$$index_1];
      $$renderer2.push(`<div>`);
      ProjectCard($$renderer2, { project });
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="experience" class="section"><h2 class="section-title">Experience</h2> <div class="timeline svelte-1uha8ag"><!--[-->`);
    const each_array_2 = ensure_array_like(jobs);
    for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
      let job = each_array_2[i];
      $$renderer2.push(`<article class="entry svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(job.role)}</h3> <p class="meta svelte-1uha8ag"><span class="company svelte-1uha8ag">${escape_html(job.company)}</span> <span class="date svelte-1uha8ag">${escape_html(job.date)}</span></p> <ul class="svelte-1uha8ag"><!--[-->`);
      const each_array_3 = ensure_array_like(job.points);
      for (let $$index_2 = 0, $$length2 = each_array_3.length; $$index_2 < $$length2; $$index_2++) {
        let point = each_array_3[$$index_2];
        $$renderer2.push(`<li>${escape_html(point)}</li>`);
      }
      $$renderer2.push(`<!--]--></ul></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="education" class="section"><h2 class="section-title">Education</h2> <div class="timeline svelte-1uha8ag"><!--[-->`);
    const each_array_4 = ensure_array_like(education);
    for (let i = 0, $$length = each_array_4.length; i < $$length; i++) {
      let item = each_array_4[i];
      $$renderer2.push(`<article class="entry svelte-1uha8ag"><h3 class="svelte-1uha8ag">${escape_html(item.qualification)}</h3> <p class="meta svelte-1uha8ag"><span class="company svelte-1uha8ag">${escape_html(item.institution)}</span> <span class="date svelte-1uha8ag">${escape_html(item.date)}</span></p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="skills" class="section"><h2 class="section-title">Skills</h2> <div class="skills-grid svelte-1uha8ag"><!--[-->`);
    const each_array_5 = ensure_array_like(skills);
    for (let i = 0, $$length = each_array_5.length; i < $$length; i++) {
      let skill = each_array_5[i];
      $$renderer2.push(`<div class="skill"><div class="skill-head svelte-1uha8ag"><span class="skill-name svelte-1uha8ag">${escape_html(skill.name)}</span> <span class="skill-value svelte-1uha8ag">${escape_html(skill.level)}%</span></div> <div class="skill-track svelte-1uha8ag"><div class="skill-fill svelte-1uha8ag"></div></div></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section id="contact" class="section"><h2 class="section-title">Contact</h2> <div class="contact svelte-1uha8ag"><p class="svelte-1uha8ag">Feel free to reach out, or take a look at more of my work.</p> <ul class="contact-links svelte-1uha8ag"><!--[-->`);
    const each_array_6 = ensure_array_like(social);
    for (let $$index_6 = 0, $$length = each_array_6.length; $$index_6 < $$length; $$index_6++) {
      let item = each_array_6[$$index_6];
      $$renderer2.push(`<li><a${attr("href", item.url)} target="_blank" rel="noopener" class="svelte-1uha8ag">${escape_html(item.label)}</a></li>`);
    }
    $$renderer2.push(`<!--]--></ul></div> <p class="colophon svelte-1uha8ag">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} David Wells</p></section></main></div> `);
    ThemeSwitcher($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
