import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Contacto | Oxigenarte",
};

export default function ContactoPage() {
  return (
    <main>
      <SiteHeader active="/contacto" />
      <section className="contact-page">
        <div>
          <h1>Consulta tu Bienestar</h1>
          <form className="contact-page-form">
            <div className="form-row">
              <label>Nombre *<input type="text" placeholder="Ingresa tu nombre" required /></label>
              <label>Apellido *<input type="text" placeholder="Ingresa tu apellido" required /></label>
            </div>
            <label>Correo electrónico *<input type="email" placeholder="Ingresa tu correo electrónico" required /></label>
            <label>Teléfono *
              <div className="phone-input"><span>🇻🇪</span><ChevronDown size={14} /><input type="tel" placeholder="Ingresa tu número de teléfono" required /></div>
            </label>
            <label>Servicio de interés *
              <select defaultValue="">
                <option value="" disabled>Selecciona un servicio</option>
                <option>Cámara hiperbárica</option>
                <option>Sueroterapia</option>
                <option>Ozonoterapia</option>
                <option>Laserterapia</option>
              </select>
            </label>
            <label>Mensaje *<textarea placeholder="Escribe tu mensaje aquí..." required /></label>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <aside className="contact-details">
          <div><h2>Ubicación</h2><p>Centro Empresarial Dos Torres,<br />El Hatillo, Venezuela.</p></div>
          <div><h2>Atención</h2><a href="tel:+582125550123">+58 212 555 0123</a></div>
          <div><h2>Contacto</h2><a href="mailto:contacto@oxigenarte.com.ve">contacto@oxigenarte.com.ve</a></div>
          <div><h2>Síguenos</h2><p>Instagram&nbsp; • &nbsp;Facebook&nbsp; • &nbsp;LinkedIn</p></div>
        </aside>
      </section>
      <section className="contact-map">
        <iframe
          title="Ubicación de Oxigenarte"
          src="https://www.google.com/maps?q=El%20Hatillo%2C%20Venezuela&z=14&output=embed"
          loading="lazy"
        />
      </section>
      <SiteFooter />
    </main>
  );
}
