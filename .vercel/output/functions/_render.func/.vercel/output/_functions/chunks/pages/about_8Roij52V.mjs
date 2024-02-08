/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_-JQ9ce_4.mjs';
import { $ as $$BlogPost } from './__fYWQpzyc.mjs';

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$BlogPost, { "title": "About me", "description": "a short description about me", "pubDate": /* @__PURE__ */ new Date(), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p></p> <p></p> ` })}`;
}, "C:/Users/gaspa/code/portfolio-gaspar/src/pages/about.astro", void 0);

const $$file = "C:/Users/gaspa/code/portfolio-gaspar/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
