/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader, Sunburst } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Nosotros | Oxigenarte",
};

const team = [
  {
    name: "Lic. Dinorah Valero",
    role: "Medicina Regenerativa",
    image: "https://static.wixstatic.com/media/c5f053_38325a3539f247e5a3eb6e1399c74a00~mv2.jpg/v1/fill/w_351,h_349,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
  {
    name: "Dra. María Inés Oronoz",
    role: "Sueroterapia & Nutrición",
    image: "https://static.wixstatic.com/media/c5f053_cee928eaacc74ac1b7a9417b5a4d3d2d~mv2.jpg/v1/fill/w_351,h_349,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
  {
    name: "Lic. Lucio Cárdenas",
    role: "Fisioterapia Avanzada",
    image: "https://static.wixstatic.com/media/c5f053_b1c85c85a56a434bb91275ad4d7bdb77~mv2.jpg/v1/fill/w_351,h_349,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
];

export default function NosotrosPage() {
  return (
    <main>
      <SiteHeader active="/nosotros" />
      <section className="philosophy">
        <img
          src="https://static.wixstatic.com/media/c5f053_c25840201139405a9e843dc51dc36a4d~mv2.jpg/v1/fill/w_627,h_586,al_c,q_85,enc_avif,quality_auto/ai-generated-IMAGE.jpg"
          alt="Instalaciones de Oxigenarte"
        />
        <div>
          <h1>Nuestra Filosofía</h1>
          <p>
            En Oxigenarte Venezuela,<br />
            nuestra filosofía se fundamenta en la salud<br />
            regenerativa y la innovación médica.<br />
            Creemos que el bienestar integral requiere<br />
            una combinación de tecnología avanzada<br />
            y un enfoque humano, diseñado<br />
            para acompañar a cada paciente en su camino<br />
            hacia la recuperación y la excelencia personal.
          </p>
        </div>
      </section>

      <section className="values-grid">
        <article>
          <Sunburst />
          <h2>Nuestra Misión</h2>
          <p>Impulsar el bienestar integral mediante la integración de la medicina regenerativa y la atención humana, ofreciendo soluciones tecnológicas avanzadas para una recuperación completa.</p>
        </article>
        <article>
          <Sunburst />
          <h2>Nuestra Visión</h2>
          <p>Convertirnos en el referente internacional de salud regenerativa en Venezuela, liderando el cambio hacia un futuro donde la innovación médica y el cuidado personalizado se encuentran.</p>
        </article>
      </section>

      <section className="team-section">
        <h2>Nuestro Equipo</h2>
        <p>Un equipo de expertos dedicados a la innovación médica y el bienestar integral.</p>
        <div className="team-grid">
          {team.map((person) => (
            <article key={person.name}>
              <img src={person.image} alt={person.name} />
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
