import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/8d43203e-e41a-4fbe-a028-ce8fcf50b73c/files/0d1e25bc-6bef-4440-8ccc-0c6c8342e4b6.jpg";

const services = [
  { icon: "Briefcase", title: "Корпоративное право", desc: "Регистрация, реорганизация, ликвидация компаний. Подготовка уставных документов и корпоративных договоров.", tag: "Популярно" },
  { icon: "FileText", title: "Договорная работа", desc: "Разработка, анализ и сопровождение договоров любой сложности. Защита интересов на всех этапах сделки.", tag: null },
  { icon: "Shield", title: "Защита бизнеса", desc: "Представление интересов в судах и арбитражах. Досудебное урегулирование споров и медиация.", tag: null },
  { icon: "Globe", title: "Международное право", desc: "Внешнеэкономическая деятельность, международные контракты и санкционный комплаенс.", tag: "Новое" },
  { icon: "Building2", title: "Налоговый консалтинг", desc: "Оптимизация налогообложения, налоговые споры, защита при проверках ФНС.", tag: null },
  { icon: "Lock", title: "Интеллектуальная собственность", desc: "Регистрация и защита торговых марок, патентов, авторских прав. Лицензионные соглашения.", tag: null },
];

const blogPosts = [
  { date: "28 апреля 2026", category: "Корпоративное право", title: "Изменения в законодательстве о ООО: что нужно знать в 2026 году", excerpt: "Разбираем ключевые поправки, вступившие в силу с января, и их влияние на деятельность малого и среднего бизнеса.", readTime: "7 мин" },
  { date: "14 апреля 2026", category: "Налоги", title: "Дробление бизнеса: риски и законные альтернативы", excerpt: "ФНС усиливает контроль за схемами налоговой оптимизации. Анализируем безопасные способы структурирования группы компаний.", readTime: "12 мин" },
  { date: "2 апреля 2026", category: "Арбитраж", title: "Досудебное урегулирование споров: пошаговое руководство", excerpt: "Как грамотно составить претензию и провести переговоры, чтобы решить конфликт без суда и сохранить деловые отношения.", readTime: "9 мин" },
];

const lawyers = [
  { name: "Александр Воронов", spec: "Корпоративное право, M&A" },
  { name: "Елена Соколова", spec: "Налоги, финансовое право" },
  { name: "Дмитрий Краснов", spec: "Арбитраж, судебная защита" },
  { name: "Мария Белова", spec: "Международное право, ВЭД" },
];

type Section = "home" | "services" | "blog" | "contacts";

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", phone: "", email: "", lawyer: "", issue: "", date: "" });
  const [formSent, setFormSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems: { id: Section; label: string }[] = [
    { id: "home", label: "Главная" },
    { id: "services", label: "Услуги" },
    { id: "blog", label: "Блог" },
    { id: "contacts", label: "Контакты" },
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const scrollToSection = (id: Section) => {
    setActiveSection(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen text-lp-text font-body overflow-x-hidden" style={{ background: "var(--lp-bg)" }}>

      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(7,16,32,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(196,160,80,0.12)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          <button onClick={() => scrollToSection("home")} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--lp-gold), var(--lp-gold-dark))" }}>
              <Icon name="Scale" size={18} style={{ color: "var(--lp-dark)" }} />
            </div>
            <span className="font-display text-xl font-semibold tracking-wide" style={{ color: "var(--lp-text)" }}>
              Lex<span style={{ color: "var(--lp-gold)" }}>Pro</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium tracking-wider uppercase transition-all duration-300 relative"
                style={{ color: activeSection === item.id ? "var(--lp-gold)" : "var(--lp-muted)" }}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px" style={{ background: "var(--lp-gold)" }} />
                )}
              </button>
            ))}
            <button onClick={() => scrollToSection("contacts")} className="lp-btn-primary text-sm px-6 py-2.5 rounded-full">
              Записаться
            </button>
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: "var(--lp-text)" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-6 py-6 flex flex-col gap-5" style={{ background: "var(--lp-surface)", borderColor: "var(--lp-border)" }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)}
                className="text-left text-sm uppercase tracking-wider font-medium"
                style={{ color: activeSection === item.id ? "var(--lp-gold)" : "var(--lp-muted)" }}>
                {item.label}
              </button>
            ))}
            <button onClick={() => scrollToSection("contacts")} className="lp-btn-primary text-sm px-6 py-2.5 rounded-full w-fit">
              Записаться
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="hero" className="w-full h-full object-cover" style={{ opacity: 0.2 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--lp-dark) 0%, #0a1628 50%, #071020 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom right, var(--lp-dark) 40%, transparent)" }} />
        </div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,160,80,0.12) 0%, transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(196,160,80,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,80,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 lp-fade-in" style={{ border: "1px solid rgba(196,160,80,0.3)", background: "rgba(196,160,80,0.1)" }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--lp-gold)" }} />
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "var(--lp-gold)" }}>Юридическое сопровождение бизнеса</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-light leading-[1.05] mb-8 lp-fade-in" style={{ animationDelay: "0.15s", color: "var(--lp-text)" }}>
              Право на вашей<br />
              <em className="not-italic" style={{ color: "var(--lp-gold)" }}>стороне</em>
            </h1>

            <p className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl lp-fade-in" style={{ color: "var(--lp-muted)", animationDelay: "0.3s" }}>
              Профессиональная юридическая защита для бизнеса. 15 лет практики, 800+ успешных дел, индивидуальный подход к каждому клиенту.
            </p>

            <div className="flex flex-wrap gap-4 lp-fade-in" style={{ animationDelay: "0.45s" }}>
              <button onClick={() => scrollToSection("contacts")} className="lp-btn-primary px-8 py-4 rounded-full text-base flex items-center gap-2">
                Записаться на консультацию
                <Icon name="ArrowRight" size={18} />
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 rounded-full text-base transition-all duration-300 lp-btn-outline"
              >
                Наши услуги
              </button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lp-fade-in" style={{ animationDelay: "0.6s" }}>
            {[
              { num: "15+", label: "лет на рынке" },
              { num: "800+", label: "выигранных дел" },
              { num: "300+", label: "клиентов B2B" },
              { num: "98%", label: "удовлетворённость" },
            ].map((s) => (
              <div key={s.num} className="pl-5" style={{ borderLeft: "1px solid rgba(196,160,80,0.3)" }}>
                <div className="font-display text-3xl md:text-4xl font-light" style={{ color: "var(--lp-gold)" }}>{s.num}</div>
                <div className="text-sm mt-1" style={{ color: "var(--lp-muted)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={() => scrollToSection("services")} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-300" style={{ color: "var(--lp-muted)" }}>
          <span className="text-xs tracking-widest uppercase">Далее</span>
          <Icon name="ChevronDown" size={20} className="animate-bounce" />
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.3), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Что мы делаем</span>
              <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Наши услуги</h2>
            </div>
            <p className="max-w-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>
              Комплексное юридическое сопровождение для компаний любого масштаба — от стартапов до крупного бизнеса.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="lp-card group relative p-8 rounded-2xl overflow-hidden cursor-pointer">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(196,160,80,0.06) 0%, transparent 100%)" }} />
                {s.tag && (
                  <span className="absolute top-5 right-5 text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ border: "1px solid rgba(196,160,80,0.4)", color: "var(--lp-gold)", background: "rgba(196,160,80,0.1)" }}>
                    {s.tag}
                  </span>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300" style={{ background: "rgba(196,160,80,0.1)" }}>
                  <Icon name={s.icon} size={22} style={{ color: "var(--lp-gold)" }} />
                </div>
                <h3 className="font-display text-xl font-medium mb-3" style={{ color: "var(--lp-text)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--lp-gold)" }}>
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button onClick={() => scrollToSection("contacts")} className="lp-btn-primary px-10 py-4 rounded-full">
              Обсудить задачу
            </button>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0c1e3a, var(--lp-dark))" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.3), transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Наша команда</span>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Ведущие специалисты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lawyers.map((l, i) => (
              <div key={i} className="lp-card p-6 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.04)" }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, rgba(196,160,80,0.2), rgba(196,160,80,0.05))", border: "1px solid rgba(196,160,80,0.3)" }}>
                  <Icon name="User" size={28} style={{ color: "var(--lp-gold)" }} />
                </div>
                <h4 className="font-display text-lg font-medium mb-1" style={{ color: "var(--lp-text)" }}>{l.name}</h4>
                <p className="text-sm" style={{ color: "var(--lp-muted)" }}>{l.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="py-32 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.3), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Экспертиза</span>
              <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Блог</h2>
            </div>
            <p className="max-w-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>
              Актуальные разборы законодательства и практические советы от наших юристов.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[16/9] rounded-2xl mb-6 overflow-hidden flex items-center justify-center relative lp-card">
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(196,160,80,0.05), transparent, rgba(26,58,107,0.2))" }} />
                  <Icon name="BookOpen" size={40} style={{ color: "rgba(196,160,80,0.3)" }} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ border: "1px solid rgba(196,160,80,0.3)", color: "var(--lp-gold)" }}>{post.category}</span>
                  <span className="text-xs" style={{ color: "var(--lp-muted)" }}>{post.date}</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-3 leading-snug transition-colors duration-300 group-hover:text-lp-gold" style={{ color: "var(--lp-text)" }}>{post.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--lp-muted)" }}>{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm" style={{ color: "var(--lp-gold)" }}>
                  <Icon name="Clock" size={13} />
                  <span>{post.readTime} чтения</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0a1628, var(--lp-dark))" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.3), transparent)" }} />
        <div className="absolute top-1/2 right-0 w-96 h-96 -translate-y-1/2 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(196,160,80,0.08) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-xs font-medium tracking-widest uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Записаться</span>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6" style={{ color: "var(--lp-text)" }}>Онлайн-консультация</h2>
              <p className="leading-relaxed mb-10" style={{ color: "var(--lp-muted)" }}>
                Оставьте заявку — и наш менеджер свяжется с вами в течение 2 часов, чтобы подобрать подходящего специалиста и удобное время.
              </p>

              <div className="space-y-6">
                {[
                  { icon: "MapPin", text: "Москва, Пресненская набережная, 6, стр. 2" },
                  { icon: "Phone", text: "+7 (495) 123-45-67" },
                  { icon: "Mail", text: "info@lexpro.ru" },
                  { icon: "Clock", text: "Пн–Пт: 9:00–20:00, Сб: 10:00–16:00" },
                ].map((c, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(196,160,80,0.1)" }}>
                      <Icon name={c.icon} size={18} style={{ color: "var(--lp-gold)" }} />
                    </div>
                    <span style={{ color: "var(--lp-muted)" }}>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-3xl p-8 md:p-10 lp-card">
              {formSent ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: "rgba(196,160,80,0.1)", border: "1px solid rgba(196,160,80,0.3)" }}>
                    <Icon name="CheckCircle" size={36} style={{ color: "var(--lp-gold)" }} />
                  </div>
                  <h3 className="font-display text-2xl font-light mb-3" style={{ color: "var(--lp-text)" }}>Заявка отправлена!</h3>
                  <p style={{ color: "var(--lp-muted)" }}>Мы свяжемся с вами в течение 2 часов в рабочее время.</p>
                  <button onClick={() => setFormSent(false)} className="mt-8 text-sm hover:underline" style={{ color: "var(--lp-gold)" }}>
                    Отправить ещё одну заявку
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-light mb-8" style={{ color: "var(--lp-text)" }}>Заполните форму</h3>
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="lp-label">Ваше имя *</label>
                        <input name="name" required value={formData.name} onChange={handleFormChange} placeholder="Иван Петров" className="lp-input" />
                      </div>
                      <div>
                        <label className="lp-label">Компания</label>
                        <input name="company" value={formData.company} onChange={handleFormChange} placeholder="ООО «Компания»" className="lp-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="lp-label">Телефон *</label>
                        <input name="phone" required type="tel" value={formData.phone} onChange={handleFormChange} placeholder="+7 (___) ___-__-__" className="lp-input" />
                      </div>
                      <div>
                        <label className="lp-label">Email</label>
                        <input name="email" type="email" value={formData.email} onChange={handleFormChange} placeholder="mail@company.ru" className="lp-input" />
                      </div>
                    </div>
                    <div>
                      <label className="lp-label">Специализация юриста</label>
                      <select name="lawyer" value={formData.lawyer} onChange={handleFormChange} className="lp-input">
                        <option value="">Выберите направление</option>
                        <option>Корпоративное право</option>
                        <option>Договорная работа</option>
                        <option>Защита в суде</option>
                        <option>Налоговый консалтинг</option>
                        <option>Международное право</option>
                        <option>Интеллектуальная собственность</option>
                      </select>
                    </div>
                    <div>
                      <label className="lp-label">Удобная дата и время</label>
                      <input name="date" type="datetime-local" value={formData.date} onChange={handleFormChange} className="lp-input" />
                    </div>
                    <div>
                      <label className="lp-label">Кратко опишите вопрос</label>
                      <textarea name="issue" rows={3} value={formData.issue} onChange={handleFormChange} placeholder="Опишите вашу ситуацию..." className="lp-input resize-none" />
                    </div>
                    <button type="submit" className="lp-btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2 text-base">
                      Записаться на консультацию
                      <Icon name="ArrowRight" size={18} />
                    </button>
                    <p className="text-center text-xs" style={{ color: "var(--lp-muted)" }}>
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <span className="hover:underline cursor-pointer" style={{ color: "var(--lp-gold)" }}>политикой конфиденциальности</span>
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ borderTop: "1px solid var(--lp-border)" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--lp-gold), var(--lp-gold-dark))" }}>
              <Icon name="Scale" size={14} style={{ color: "var(--lp-dark)" }} />
            </div>
            <span className="font-display text-sm font-semibold" style={{ color: "var(--lp-text)" }}>
              Lex<span style={{ color: "var(--lp-gold)" }}>Pro</span>
            </span>
          </div>
          <p className="text-sm" style={{ color: "var(--lp-muted)" }}>© 2026 LexPro. Все права защищены.</p>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-xs uppercase tracking-wider transition-colors duration-300" style={{ color: "var(--lp-muted)" }}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;