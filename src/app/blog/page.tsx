/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Blog | Oxigenarte",
};

const posts = [
  {
    title: "Regeneración Celular: Avances en Medicina Regenerativa",
    excerpt: "La medicina regenerativa ha emergido como un campo fascinante y prometedor en la ciencia médica. A medida que la tecnología avanza, también lo hacen nuestras capacidades para reparar y regenerar tejidos y órganos dañados.",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Cómo la Ozonoterapia Mejora Tu Bienestar Diario",
    excerpt: "La ozonoterapia ha ganado popularidad como una alternativa para mejorar la salud y el bienestar. Conoce sus aplicaciones, beneficios y las consideraciones más importantes de este tratamiento.",
    image: "https://static.wixstatic.com/media/c5f053_ed91427e8c37419fbe2807c95052e7e4~mv2.jpg/v1/fill/w_900,h_600,fp_0.50_0.50,q_85,enc_auto/c5f053_ed91427e8c37419fbe2807c95052e7e4~mv2.jpg",
  },
  {
    title: "Beneficios de la Sueroterapia en Tu Salud Integral",
    excerpt: "La salud integral abarca el bienestar físico, emocional y mental. En este contexto, la sueroterapia se ha convertido en una herramienta eficaz para apoyar la salud general.",
    image: "https://static.wixstatic.com/media/c5f053_e0e6ee3902994e9b926bc7057aea1238~mv2.jpg/v1/fill/w_900,h_600,fp_0.50_0.50,q_85,enc_auto/c5f053_e0e6ee3902994e9b926bc7057aea1238~mv2.jpg",
  },
];

export default function BlogPage() {
  return (
    <main>
      <SiteHeader active="/blog" />
      <section className="blog-page">
        <nav className="blog-filter"><a href="/blog">All Posts</a></nav>
        <div className="blog-feed">
          {posts.map((post) => (
            <article className="post-card" key={post.title}>
              <img src={post.image} alt="" />
              <div>
                <p className="post-meta">Posa Studio Redes · hace 3 horas</p>
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
                <div className="post-footer"><span>0 visualizaciones</span><span>♡</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
