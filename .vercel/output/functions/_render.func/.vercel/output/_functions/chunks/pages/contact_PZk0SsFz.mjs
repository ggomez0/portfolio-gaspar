/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, f as renderSlot, m as maybeRenderHead } from '../astro_-JQ9ce_4.mjs';
import { a as $$BaseHead, b as $$Header } from './__fYWQpzyc.mjs';
import { Resend } from 'resend';
/* empty css                            */

const SITE_TITLE = "Portfolio - Gaspar Gomez";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$1 = createAstro("https://example.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- <Footer /> --> </html>`;
}, "C:/Users/gaspa/code/portfolio-gaspar/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const APIKEY = {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://example.com", "ASSETS_PREFIX": undefined}.resendapi;
  console.log(APIKEY);
  const resend = new Resend("re_Rrdkz424_9QjAPBmJFsbJPWBfLQx3rmaa");
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const asunto = data.get("asunto");
      const mensaje = data.get("mensaje");
      const email = data.get("email");
      const nombre = data.get("nombre");
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "gaspargomez2000@outlook.com",
        subject: asunto,
        html: `<p>${nombre}</p><p>${email}</p><p>${mensaje}</p>`
      });
      console.log("Correo electrónico enviado exitosamente");
      return Astro2.redirect("/contact");
    } catch (error) {
      console.error("Error al enviar el correo electrónico:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="POST" data-astro-cid-uw5kdbxl> <section class="flex flex-col gap-y-5" data-astro-cid-uw5kdbxl> <h2 class="text-center" data-astro-cid-uw5kdbxl>Contáctame</h2> <input type="text" name="nombre" placeholder="Nombre" data-astro-cid-uw5kdbxl> <input type="text" name="asunto" placeholder="Asunto" data-astro-cid-uw5kdbxl> <input name="email" placeholder="Correo electrónico" type="email" data-astro-cid-uw5kdbxl> <textarea name="mensaje" placeholder="Mensaje" class="h-[190px]" data-astro-cid-uw5kdbxl></textarea> <button class="bg-green-500 hover:bg-green-400 text-white w-[90px] h-[50px] m-auto" data-astro-cid-uw5kdbxl>Enviar</button> </section> </form> ` })} `;
}, "C:/Users/gaspa/code/portfolio-gaspar/src/pages/contact.astro", void 0);
const $$file = "C:/Users/gaspa/code/portfolio-gaspar/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, SITE_TITLE as S, SITE_DESCRIPTION as a, contact as c };
