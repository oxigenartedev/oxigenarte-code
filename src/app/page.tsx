/* eslint-disable @next/next/no-img-element */
import { ChevronDown, Plus } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const images = {
  hero: "https://static.wixstatic.com/media/c5f053_1141986acc064d379352f6ba057aacba~mv2.jpg/v1/fill/w_1213,h_467,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  wellness:
    "https://static.wixstatic.com/media/c5f053_e4c0bb715dd84ad39d15b0b1589407b0~mv2.jpg/v1/fill/w_494,h_615,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  space:
    "https://static.wixstatic.com/media/c5f053_c3de42ea8e53476798960f94398905f0~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/Espacio%20Bienestar.jpg",
  technology:
    "https://static.wixstatic.com/media/c5f053_60015e86b1d24869a410ef4176361b24~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_85,enc_avif,quality_auto/Tecnolog%C3%ADa%20M%C3%A9dica.jpg",
  rooms:
    "https://static.wixstatic.com/media/c5f053_f91102fb451a4f33a4468220ec860785~mv2.jpg/v1/fill/w_900,h_900,al_c,q_85,enc_avif,quality_auto/Salas%20de%20Tratamiento.jpg",
  team: "https://static.wixstatic.com/media/c5f053_90cfc569055049bc9100949a7b3f345a~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_85,enc_avif,quality_auto/Equipo%20de%20Salud.jpg",
  chamber:
    "https://static.wixstatic.com/media/c5f053_539dcc023bb4408dbb3a22bb9c0b7d54~mv2.jpg/v1/fill/w_900,h_1200,al_c,q_85,enc_avif,quality_auto/C%C3%A1mara%20Hiperb%C3%A1rica.jpg",
};

const technologies = [
  {
    title: "BTL EMSella®",
    text: "Terapia electromagnética de alta frecuencia para la regeneración celular y el alivio de dolencias crónicas.",
  },
  {
    title: "Laserterapia",
    text: "Terapia fotodinámica de baja intensidad para estimular la cicatrización y la recuperación muscular profunda.",
  },
  {
    title: "Crioterapia",
    text: "Tratamiento de frío controlado para reducir la inflamación y acelerar la recuperación de lesiones deportivas.",
  },
];

const benefits = [
  {
    title: "Atención Personalizada",
    text: "Entendemos que cada paciente es único, nuestro enfoque se centra en una evaluación clínica profunda para diseñar tratamientos que respeten tu ritmo y necesidades individuales.",
  },
  {
    title: "Innovación Médica",
    text: "Utilizamos tecnología avanzada como la BTL EMSella® y sistemas super inductivos para potenciar tu recuperación física y bienestar integral con precisión científica.",
  },
  {
    title: "Salud Regenerativa",
    text: "Integramos la medicina regenerativa con nutrición ortomolecular para restaurar tu salud desde el origen, fomentando un equilibrio duradero y una vida plena.",
  },
];

const questions = [
  ["¿Qué es la salud regenerativa?", "Es un enfoque médico que busca estimular los procesos naturales de reparación y recuperación del organismo."],
  ["¿Cómo funciona la cámara hiperbárica?", "Permite respirar oxígeno en un entorno presurizado para favorecer la oxigenación de los tejidos."],
  ["¿Cuáles son los beneficios de la sueroterapia?", "Aporta nutrientes de forma personalizada para apoyar la energía, hidratación y bienestar integral."],
  ["¿Es seguro el uso de ozonoterapia?", "Aplicada por profesionales y tras una evaluación médica, se realiza bajo protocolos clínicos de seguridad."],
  ["¿Cómo se realiza la fisioterapia avanzada?", "Combina evaluación funcional, tecnología terapéutica y ejercicios adaptados a cada paciente."],
  ["¿Qué es la medicina regenerativa?", "Es una rama de la medicina enfocada en recuperar la función de tejidos y apoyar los mecanismos de reparación corporal."],
];

function Sunburst() {
  return (
    <svg className="sunburst" viewBox="0 0 64 64" aria-hidden="true">
      {Array.from({ length: 16 }).map((_, index) => (
        <circle
          key={index}
          cx={32 + Math.cos((index * Math.PI) / 8) * 22}
          cy={32 + Math.sin((index * Math.PI) / 8) * 22}
          r="2.4"
        />
      ))}
      {Array.from({ length: 12 }).map((_, index) => (
        <circle
          key={`inner-${index}`}
          cx={32 + Math.cos((index * Math.PI) / 6) * 13}
          cy={32 + Math.sin((index * Math.PI) / 6) * 13}
          r="2"
        />
      ))}
      <circle cx="32" cy="32" r="4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader active="/" />

      <section className="hero" id="inicio">
        <h1>Tecnología avanzada para tu<br className="desktop-break" /> bienestar y salud integral</h1>
        <p>En Oxigenarte combinamos innovación médica, terapias avanzadas y atención<br className="desktop-break" /> personalizada para acompañarte en el camino hacia una mejor calidad de vida.</p>
        <div className="hero-actions">
          <a href="/contacto" className="button">Agendar una cita</a>
          <a href="#servicios" className="button outline">Conocer nuestros servicios</a>
        </div>
      </section>

      <div className="hero-image">
        <img src={images.hero} alt="Recepción moderna de Oxigenarte" />
      </div>

      <section className="regenerative" id="nosotros">
        <div className="regenerative-copy">
          <h2>Salud Regenerativa</h2>
          <p>En Oxigenarte Venezuela, fusionamos la precisión médica<br className="desktop-break" /> con un enfoque humano para restaurar tu equilibrio y bienestar integral.</p>
        </div>
        <img src={images.wellness} alt="Sala de tratamiento de Oxigenarte" />
      </section>

      <section className="featured" id="servicios">
        <h2>Servicios Destacados</h2>
      </section>

      <section className="technologies" id="tecnología">
        <h2>Tecnologías Avanzadas</h2>
        <p>Equipos de vanguardia diseñados para el bienestar integral y la recuperación regenerativa.</p>
        <div className="technology-grid">
          {technologies.map((item) => (
            <article key={item.title} className="technology-card">
              <Sunburst />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <h2>Por qué elegir Oxigenarte</h2>
        <div className="benefit-grid">
          {benefits.map((item) => (
            <article key={item.title}>
              <Sunburst />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="facilities">
        <h2>Instalaciones</h2>
        <p>Un entorno de bienestar y tecnología avanzada diseñado para ofrecer una experiencia de<br className="desktop-break" /> salud regenerativa integral y sofisticada.</p>
        <div className="gallery">
          <div className="gallery-column">
            <img src={images.space} alt="Espacio Bienestar" />
            <img src={images.rooms} alt="Salas de Tratamiento" />
          </div>
          <div className="gallery-column">
            <img src={images.technology} alt="Tecnología Médica" className="gallery-tall" />
          </div>
          <div className="gallery-column">
            <img src={images.team} alt="Equipo de Salud" className="gallery-tall" />
          </div>
          <div className="gallery-column">
            <img src={images.chamber} alt="Cámara Hiperbárica" className="gallery-tall" />
          </div>
        </div>
      </section>

      <section className="testimonial">
        <blockquote>
          “La combinación de tecnología avanzada y un enfoque humano<br className="desktop-break" />
          en Oxigenarte ha sido el impulso que necesitaba para que recupere<br className="desktop-break" />
          su salud integral.”
        </blockquote>
        <p>— Dra. María Inés Oronoz, Especialista en Medicina Regenerativa</p>
      </section>

      <section className="faq">
        <h2>Preguntas<br />Frecuentes</h2>
        <div className="faq-list">
          {questions.map(([question, answer]) => (
            <details key={question}>
              <summary><span>{question}</span><Plus size={18} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-copy">
          <h2>Consulta tu Bienestar</h2>
          <p>Recibe asesoría personalizada y agenda tu cita<br /> con nuestros expertos en salud regenerativa.<br /> Nuestro equipo está listo para acompañarle<br /> en su proceso de recuperación y bienestar integral.</p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <label>Nombre *<input type="text" placeholder="Ingresa tu nombre" required /></label>
            <label>Apellido *<input type="text" placeholder="Ingresa tu apellido" required /></label>
          </div>
          <label>Correo electrónico *<input type="email" placeholder="Ingresa tu correo electrónico" required /></label>
          <label>Teléfono
            <div className="phone-input"><span>🇻🇪</span><ChevronDown size={14} /><input type="tel" placeholder="Ingresa tu número de teléfono" /></div>
          </label>
          <fieldset>
            <legend>Servicio de interés *</legend>
            {["Cámara hiperbárica", "Sueroterapia", "Ozonoterapia", "Otro"].map((service) => (
              <label className="radio-label" key={service}><input type="radio" name="servicio" />{service}</label>
            ))}
          </fieldset>
          <label>Mensaje *<textarea placeholder="Escribe tu mensaje aquí" required /></label>
          <button type="submit">Enviar</button>
        </form>
      </section>

      <section className="map-section" aria-label="Ubicación de Oxigenarte">
        <iframe
          title="Mapa de Oxigenarte Venezuela"
          src="https://www.google.com/maps?q=El%20Hatillo%2C%20Venezuela&z=14&output=embed"
          loading="lazy"
        />
      </section>

      <section className="cta">
        <h2>¿Listo para<br />oxigenar tu<br />vida?</h2>
        <a href="/contacto" className="button light">Agendar una cita</a>
      </section>

      <SiteFooter />
    </main>
  );
}
