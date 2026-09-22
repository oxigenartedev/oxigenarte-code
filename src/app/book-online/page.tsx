/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

export const metadata: Metadata = {
  title: "Book Online | Oxigenarte",
};

const services = [
  {
    title: "Ozonotherapy",
    subtitle: "Harness the Power of Supercharged Oxygen",
    price: "$120",
    image: "https://static.wixstatic.com/media/c5f053_ed91427e8c37419fbe2807c95052e7e4~mv2.jpg/v1/fill/w_380,h_255,fp_0.50_0.50,q_80,enc_auto/c5f053_ed91427e8c37419fbe2807c95052e7e4~mv2.jpg",
  },
  {
    title: "Hyperbaric Chamber",
    subtitle: "Revitalize with Pressurized Oxygen",
    price: "$150",
    image: "https://static.wixstatic.com/media/c5f053_114b662dda304a02a00caaca6a5947d1~mv2.jpg/v1/fill/w_380,h_255,fp_0.50_0.50,q_80,enc_auto/c5f053_114b662dda304a02a00caaca6a5947d1~mv2.jpg",
  },
  {
    title: "Suerotherapy",
    subtitle: "Boost Your Immunity and Energy",
    price: "$100",
    image: "https://static.wixstatic.com/media/c5f053_e0e6ee3902994e9b926bc7057aea1238~mv2.jpg/v1/fill/w_380,h_255,fp_0.50_0.50,q_80,enc_auto/c5f053_e0e6ee3902994e9b926bc7057aea1238~mv2.jpg",
  },
];

export default function BookOnlinePage() {
  return (
    <main>
      <SiteHeader active="/book-online" />
      <section className="booking-page">
        <div className="breadcrumbs"><Link href="/">Inicio</Link><span>›</span><span>Servicios</span></div>
        <div className="booking-grid">
          {services.map((service) => (
            <article className="booking-card" key={service.title}>
              <img src={service.image} alt={service.title} />
              <div className="booking-card-content">
                <h1>{service.title}</h1>
                <p>{service.subtitle}</p>
                <div className="booking-price">{service.price}</div>
                <a href="/contacto">Reservar ahora</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
