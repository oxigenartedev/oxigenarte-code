/* eslint-disable @next/next/no-img-element */
import { Menu, Music2, UserCircle } from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/auth";

export const logo =
  "https://static.wixstatic.com/media/c5f053_766755d9c03d4fe1a558c13a512b3a24~mv2.png";

export const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Tecnología", href: "/tecnologia" },
  { label: "Book Online", href: "/book-online" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export function Sunburst() {
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

export async function SiteHeader({ active }: { active?: string }) {
  const session = await getSession();
  const accountHref = session ? "/cuenta" : "/login";
  const accountLabel = session ? "Mi cuenta" : "Iniciar sesión";

  return (
    <header className="header">
      <Link href="/" className="brand" aria-label="Oxigenarte - Inicio">
        <img src={logo} alt="Oxigenarte" />
      </Link>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={active === item.href ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <Link href="/contacto" className="button small">Agendar Cita</Link>
        <Link href={accountHref} className="user-icon-link" aria-label={accountLabel}>
          <UserCircle className="user-icon" strokeWidth={1.7} />
        </Link>
      </div>
      <details className="mobile-nav">
        <summary aria-label="Abrir menú"><Menu /></summary>
        <div className="mobile-nav-panel">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
          <Link href={accountHref}>{accountLabel}</Link>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-about">
          <img src={logo} alt="Oxigenarte" />
          <p>Salud regenerativa<br />y bienestar integral<br />en El Hatillo.<br />Innovación médica<br />y atención personalizada.</p>
        </div>
        <nav className="footer-nav" aria-label="Navegación secundaria">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>
        <div className="footer-contact">
          <h3>CONTACTO</h3>
          <p>Centro Empresarial Dos Torres,<br />El Hatillo, Venezuela</p>
          <a href="tel:+582125550100">+58 212 555 0100</a>
          <a href="mailto:contacto@oxigenarte.com.ve">contacto@oxigenarte.com.ve</a>
          <div className="socials">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="TikTok"><Music2 /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Oxigenarte Venezuela. Todos los derechos reservados.</span>
        <a href="#">Política de Privacidad</a>
      </div>
    </footer>
  );
}
