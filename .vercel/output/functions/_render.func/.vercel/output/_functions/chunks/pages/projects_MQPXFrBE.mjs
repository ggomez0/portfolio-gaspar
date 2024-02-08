/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent } from '../astro_-JQ9ce_4.mjs';
import { $ as $$Layout } from './contact_PZk0SsFz.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { href, title, image, descripcion } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="link-card flex list-none bg-slate-800 text-white rounded-xl"> <a${addAttribute(href, "href")} target="_blank" class="hover:bg-slate-700 leading-6 opacity-80 p-[calc(1.5rem-1px)] no-underline text-white rounded-xl"> <img class="m-auto"${addAttribute(image, "src")} width="300px" height="300px"> <h2 class="text-center font-bold text-2xl text-white"> ${title} </h2> <p class="text-center m-auto text-sm text-wrap w-64  ">${descripcion}</p> </a> </li>`;
}, "C:/Users/gaspa/code/portfolio-gaspar/src/components/ProjectCard.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const username = "ggomez0";
  const apiUrl = `https://api.github.com/users/${username}/repos`;
  const response = await fetch(apiUrl);
  const datas = await response.json();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="justify-center flex gap-4 flex-wrap"> <!-- Loop para recuperar todos los proyectos y mostrarlos en la página de /projects con unos condicionantes --> ${datas.map((data) => {
    const showProjectCard = data.description && data.description.slice(-1) === ".";
    return showProjectCard ? renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": `https://github.com/${username}/${data.name}`, "title": data.name, "descripcion": data.description || "Sin descripci\xF3n ", "image": "/public/dolarpro.webp" })}` : null;
  })} </div> ` })}`;
}, "C:/Users/gaspa/code/portfolio-gaspar/src/pages/projects.astro", void 0);

const $$file = "C:/Users/gaspa/code/portfolio-gaspar/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
