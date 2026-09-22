/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader, Sunburst } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Tecnología | Oxigenarte",
};

const equipment = [
  {
    title: "Laserterapia",
    text: "Utilizamos la tecnología de fotobiomodulación para estimular la regeneración celular y acelerar la curación de tejidos dañados.",
    image: "https://static.wixstatic.com/media/c5f053_50b0c5c4aae7497985cf9ee5b6b40cf6~mv2.jpg/v1/fill/w_529,h_659,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
  {
    title: "Sistema Super Inductivo",
    text: "Una terapia avanzada que utiliza campos magnéticos de alta frecuencia para mejorar la circulación y reducir el dolor crónico.",
    image: "https://static.wixstatic.com/media/c5f053_b2ca9e9a745d4358b63355bae611e091~mv2.jpg/v1/fill/w_529,h_659,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
  {
    title: "Cámara Hiperbárica",
    text: "Recupera el oxígeno en cantidades superiores a la normal para potenciar la regeneración celular y fortalecer el sistema inmune.",
    image: "https://static.wixstatic.com/media/c5f053_9d99941984c04105a0a1b587efd38aa8~mv2.jpg/v1/fill/w_529,h_659,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
  {
    title: "Ondas de Choque",
    text: "Terapia de alta presión que rompe la formación de cálculos y mejora la movilidad articular mediante la liberación de toxinas.",
    image: "https://static.wixstatic.com/media/c5f053_66b0091fe0964ab78c16413e6beba01c~mv2.jpg/v1/fill/w_529,h_659,al_c,q_80,enc_avif,quality_auto/ai-generated-IMAGE.jpg",
  },
];

export default function TecnologiaPage() {
  return (
    <main>
      <SiteHeader active="/tecnologia" />
      <section className="technology-page">
        <div className="inner-page-heading">
          <h1>Innovación Médica</h1>
          <p>Equipos de última generación diseñados para potenciar tu recuperación y bienestar integral.</p>
        </div>
        <div className="equipment-list">
          {equipment.map((item, index) => (
            <article className={`equipment-row ${index % 2 ? "reverse" : ""}`} key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="technology-band">
        {["Cámara Hiperbárica", "Laserterapia", "Ondas de Choque", "Crioterapia"].map((item) => (
          <div key={item}><Sunburst /><span>{item}</span></div>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
