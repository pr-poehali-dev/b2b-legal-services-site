import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const navItems = [
  { path: "/", label: "Главная" },
  { path: "/services", label: "Услуги" },
  { path: "/blog", label: "Блог" },
  { path: "/contacts", label: "Контакты" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen font-body" style={{ background: "var(--lp-bg)", color: "var(--lp-text)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(248,247,244,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--lp-gold), var(--lp-gold-dark))" }}
            >
              <Icon name="Scale" size={17} style={{ color: "var(--lp-dark)" }} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-semibold tracking-wide" style={{ color: "var(--lp-text)" }}>
                Юридический
              </span>
              <span className="font-display text-lg font-light tracking-widest" style={{ color: "var(--lp-gold)" }}>
                Сервис
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium tracking-wider uppercase transition-all duration-300"
                style={{ color: isActive(item.path) ? "var(--lp-text)" : "var(--lp-muted)" }}
              >
                {item.label}
                {isActive(item.path) && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: "var(--lp-gold)" }}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contacts"
              className="lp-btn-primary px-6 py-2.5 rounded-full text-sm"
            >
              Записаться
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--lp-text)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="md:hidden px-6 py-6 flex flex-col gap-5"
            style={{ background: "var(--lp-surface)", borderTop: "1px solid var(--lp-border)" }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm uppercase tracking-wider font-medium"
                style={{ color: isActive(item.path) ? "var(--lp-text)" : "var(--lp-muted)" }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contacts" className="lp-btn-primary px-6 py-2.5 rounded-full text-sm w-fit">
              Записаться
            </Link>
          </div>
        )}
      </nav>

      {/* CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid var(--lp-border)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, var(--lp-gold), var(--lp-gold-dark))" }}
                >
                  <Icon name="Scale" size={15} style={{ color: "var(--lp-dark)" }} />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-display text-base font-semibold" style={{ color: "var(--lp-text)" }}>Юридический</span>
                  <span className="font-display text-base font-light tracking-widest" style={{ color: "var(--lp-gold)" }}>Сервис</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--lp-muted)" }}>
                Профессиональное юридическое сопровождение бизнеса. Защищаем интересы компаний с 2009 года.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {["Linkedin", "MessageCircle", "Send"].map((icon) => (
                  <button
                    key={icon}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ border: "1px solid var(--lp-border)", color: "var(--lp-muted)" }}
                  >
                    <Icon name={icon} size={15} />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "var(--lp-gold)" }}>Навигация</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm transition-colors duration-300 hover:text-lp-gold" style={{ color: "var(--lp-muted)" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: "var(--lp-gold)" }}>Контакты</h4>
              <ul className="space-y-3">
                {[
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "info@юрсервис.рф" },
                  { icon: "MapPin", text: "Москва, Пресненская наб., 6" },
                  { icon: "Clock", text: "Пн–Пт: 9:00–20:00" },
                ].map((c) => (
                  <li key={c.text} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--lp-muted)" }}>
                    <Icon name={c.icon} size={13} style={{ color: "var(--lp-gold)", flexShrink: 0 }} />
                    {c.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 text-xs"
            style={{ borderTop: "1px solid var(--lp-border)", color: "var(--lp-muted)" }}
          >
            <p>© 2026 Юридический Сервис. Все права защищены.</p>
            <div className="flex items-center gap-6">
              <button className="hover:underline">Политика конфиденциальности</button>
              <button className="hover:underline">Пользовательское соглашение</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}