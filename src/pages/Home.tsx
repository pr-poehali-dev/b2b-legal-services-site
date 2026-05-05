import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8d43203e-e41a-4fbe-a028-ce8fcf50b73c/files/322257de-1b63-4d20-870b-1943ebb98fd9.jpg";

const services = [
  { icon: "Briefcase", title: "Корпоративное право" },
  { icon: "FileText", title: "Договорная работа" },
  { icon: "Shield", title: "Судебная защита" },
  { icon: "Globe", title: "Международное право" },
  { icon: "Building2", title: "Налоговый консалтинг" },
  { icon: "Lock", title: "Интеллектуальная собственность" },
];

const advantages = [
  {
    icon: "Award",
    title: "15 лет опыта",
    desc: "Практика с 2009 года в крупнейших корпоративных спорах и сделках.",
  },
  {
    icon: "Users",
    title: "Команда экспертов",
    desc: "12 специализированных юристов с опытом в ведущих российских и международных фирмах.",
  },
  {
    icon: "Target",
    title: "Результат — главное",
    desc: "98% клиентов рекомендуют нас. Мы работаем на результат, а не на часы.",
  },
  {
    icon: "Zap",
    title: "Быстрый старт",
    desc: "Онлайн-консультация в течение 2 часов. Работаем удалённо по всей России.",
  },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Оставьте заявку на сайте или позвоните — мы ответим в течение 2 часов" },
  { num: "02", title: "Анализ", desc: "Изучаем вашу ситуацию, определяем оптимальную стратегию защиты" },
  { num: "03", title: "Стратегия", desc: "Предлагаем конкретный план действий с прозрачным ценообразованием" },
  { num: "04", title: "Результат", desc: "Реализуем решение и сопровождаем на всех этапах до завершения" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #050d1a 0%, #0a1628 40%, #071020 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--lp-dark) 35%, transparent 100%)" }} />
        </div>

        {/* Decorative lines */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
          <div className="absolute right-24 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(196,160,80,0.15), transparent)" }} />
          <div className="absolute right-48 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, transparent, rgba(196,160,80,0.07), transparent)" }} />
          <div className="absolute right-0 top-1/3 w-full h-px" style={{ background: "linear-gradient(to left, transparent, rgba(196,160,80,0.1), transparent)" }} />
        </div>

        {/* Gold orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            right: "15%",
            top: "30%",
            width: 480,
            height: 480,
            background: "radial-gradient(circle, rgba(196,160,80,0.09) 0%, transparent 65%)",
            borderRadius: "50%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-10 lp-fade-in"
                style={{ border: "1px solid rgba(196,160,80,0.25)", background: "rgba(196,160,80,0.08)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--lp-gold)" }} />
                <span className="text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: "var(--lp-gold)" }}>
                  Юридическое сопровождение бизнеса
                </span>
              </div>

              <h1
                className="font-display font-light leading-[1.05] mb-8 lp-fade-in"
                style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)", animationDelay: "0.12s", color: "var(--lp-text)" }}
              >
                Ваш бизнес<br />
                под надёжной<br />
                <em className="not-italic" style={{ color: "var(--lp-gold)" }}>правовой защитой</em>
              </h1>

              <p
                className="text-lg font-light leading-relaxed mb-10 lp-fade-in"
                style={{ color: "var(--lp-muted)", maxWidth: 440, animationDelay: "0.24s" }}
              >
                Решаем юридические задачи любой сложности. От регистрации компании до защиты в суде — мы рядом на каждом этапе.
              </p>

              <div className="flex flex-wrap gap-4 lp-fade-in" style={{ animationDelay: "0.36s" }}>
                <Link to="/contacts" className="lp-btn-primary px-8 py-4 rounded-full text-base flex items-center gap-2.5">
                  Получить консультацию
                  <Icon name="ArrowRight" size={17} />
                </Link>
                <Link
                  to="/services"
                  className="px-8 py-4 rounded-full text-base flex items-center gap-2 transition-all duration-300"
                  style={{ border: "1px solid rgba(196,160,80,0.25)", color: "var(--lp-text)" }}
                >
                  Наши услуги
                </Link>
              </div>
            </div>

            {/* Right — trust card */}
            <div className="hidden lg:flex justify-end lp-fade-in" style={{ animationDelay: "0.48s" }}>
              <div
                className="rounded-3xl p-8 w-80"
                style={{
                  background: "rgba(13,26,46,0.8)",
                  border: "1px solid rgba(196,160,80,0.2)",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div className="mb-6 pb-6" style={{ borderBottom: "1px solid rgba(196,160,80,0.12)" }}>
                  <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--lp-gold)" }}>Наши результаты</p>
                  <div className="space-y-4">
                    {[
                      { num: "15+", label: "лет практики" },
                      { num: "800+", label: "успешных дел" },
                      { num: "300+", label: "клиентов B2B" },
                    ].map((s) => (
                      <div key={s.num} className="flex items-center justify-between">
                        <span className="font-display text-3xl font-light" style={{ color: "var(--lp-gold)" }}>{s.num}</span>
                        <span className="text-sm" style={{ color: "var(--lp-muted)" }}>{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    "Корпоративные споры",
                    "Налоговая защита",
                    "M&A сделки",
                    "Международный арбитраж",
                  ].map((tag) => (
                    <div key={tag} className="flex items-center gap-2.5">
                      <Icon name="CheckCircle" size={14} style={{ color: "var(--lp-gold)" }} />
                      <span className="text-sm" style={{ color: "var(--lp-muted)" }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: "var(--lp-muted)" }}>
          <span className="text-[10px] tracking-widest uppercase">Прокрутите вниз</span>
          <Icon name="ChevronDown" size={18} className="animate-bounce" />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-medium tracking-[0.2em] uppercase mb-3 block" style={{ color: "var(--lp-gold)" }}>Что мы делаем</span>
              <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Направления работы</h2>
            </div>
            <Link
              to="/services"
              className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
              style={{ color: "var(--lp-gold)" }}
            >
              Все услуги <Icon name="ArrowRight" size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link
                to="/services"
                key={i}
                className="lp-card group flex items-center gap-4 p-5 rounded-2xl"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{ background: "rgba(196,160,80,0.1)" }}
                >
                  <Icon name={s.icon} size={18} style={{ color: "var(--lp-gold)" }} />
                </div>
                <span className="text-sm font-medium" style={{ color: "var(--lp-text)" }}>{s.title}</span>
                <Icon name="ChevronRight" size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--lp-gold)" }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(12,30,58,0.5) 50%, transparent 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase mb-3 block" style={{ color: "var(--lp-gold)" }}>Почему мы</span>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="lp-card p-7 rounded-2xl">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(196,160,80,0.1)" }}
                >
                  <Icon name={a.icon} size={22} style={{ color: "var(--lp-gold)" }} />
                </div>
                <h3 className="font-display text-xl font-medium mb-3" style={{ color: "var(--lp-text)" }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-28 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase mb-3 block" style={{ color: "var(--lp-gold)" }}>Процесс</span>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Как мы работаем</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-px" style={{ background: "linear-gradient(to right, rgba(196,160,80,0.3), rgba(196,160,80,0.3))", zIndex: 0 }} />
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-5 font-display text-2xl font-light"
                  style={{
                    border: "1px solid rgba(196,160,80,0.4)",
                    background: "var(--lp-surface)",
                    color: "var(--lp-gold)",
                  }}
                >
                  {step.num}
                </div>
                <h4 className="font-display text-xl font-medium mb-3" style={{ color: "var(--lp-text)" }}>{step.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0c1e3a 0%, #071020 100%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(196,160,80,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,80,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div
          className="absolute pointer-events-none"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(196,160,80,0.08) 0%, transparent 70%)", borderRadius: "50%" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6" style={{ color: "var(--lp-text)" }}>
            Готовы защитить<br />
            <em className="not-italic" style={{ color: "var(--lp-gold)" }}>ваш бизнес</em>
          </h2>
          <p className="text-lg font-light leading-relaxed mb-10" style={{ color: "var(--lp-muted)" }}>
            Запишитесь на бесплатную первичную консультацию — расскажем, как решить вашу задачу.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacts" className="lp-btn-primary px-10 py-4 rounded-full text-base flex items-center gap-2.5">
              Записаться бесплатно
              <Icon name="ArrowRight" size={17} />
            </Link>
            <a href="tel:+74951234567" className="px-10 py-4 rounded-full text-base flex items-center gap-2 transition-all duration-300" style={{ border: "1px solid rgba(196,160,80,0.25)", color: "var(--lp-text)" }}>
              <Icon name="Phone" size={16} />
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
