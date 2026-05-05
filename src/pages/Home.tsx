import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/8d43203e-e41a-4fbe-a028-ce8fcf50b73c/files/a1e8db4f-963e-478d-ad2f-aa87b5fc380f.jpg";

const services = [
  { icon: "Briefcase", title: "Корпоративное право", desc: "Регистрация, реорганизация, корпоративные споры" },
  { icon: "FileText", title: "Договорная работа", desc: "Разработка и экспертиза любых договоров" },
  { icon: "Shield", title: "Судебная защита", desc: "Арбитраж, суды всех инстанций, медиация" },
  { icon: "Globe", title: "Международное право", desc: "ВЭД, санкционный комплаенс, иностранные контракты" },
  { icon: "Building2", title: "Налоговый консалтинг", desc: "Оптимизация, защита при проверках ФНС" },
  { icon: "Lock", title: "Интеллектуальная собственность", desc: "Товарные знаки, патенты, авторские права" },
];

const stats = [
  { num: "15+", label: "лет практики" },
  { num: "800+", label: "успешных дел" },
  { num: "300+", label: "клиентов B2B" },
  { num: "98%", label: "довольных клиентов" },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Оставьте заявку — ответим в течение 2 часов" },
  { num: "02", title: "Анализ", desc: "Изучаем ситуацию и определяем стратегию" },
  { num: "03", title: "Стратегия", desc: "Конкретный план с прозрачным ценообразованием" },
  { num: "04", title: "Результат", desc: "Сопровождаем до полного завершения задачи" },
];

const advantages = [
  { icon: "Award", title: "15 лет опыта", desc: "Практика с 2009 года. Крупнейшие корпоративные споры и сделки M&A." },
  { icon: "Users", title: "Команда экспертов", desc: "12 юристов с опытом в ведущих российских и международных фирмах." },
  { icon: "Target", title: "Результат — главное", desc: "98% клиентов рекомендуют нас. Работаем на результат, не на часы." },
  { icon: "Zap", title: "Быстрый старт", desc: "Онлайн-консультация за 2 часа. Работаем удалённо по всей России." },
];

export default function Home() {
  return (
    <div style={{ background: "var(--lp-bg)", color: "var(--lp-text)" }}>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "var(--lp-bg)" }}>

        {/* Subtle noise texture */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(196,160,80,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(196,160,80,0.04) 0%, transparent 40%)" }} />

        {/* Right image panel */}
        <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block overflow-hidden">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.55, filter: "grayscale(20%) contrast(1.05)" }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--lp-bg) 0%, transparent 35%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, var(--lp-bg) 0%, transparent 30%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="max-w-2xl">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-10 lp-fade-in">
              <div className="h-px w-10" style={{ background: "var(--lp-gold)" }} />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: "var(--lp-gold)" }}>
                Юридическое сопровождение бизнеса
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-light leading-[1.06] mb-8 lp-fade-in"
              style={{ fontSize: "clamp(3rem, 5.5vw, 5rem)", animationDelay: "0.1s", color: "var(--lp-text)" }}
            >
              Ваш бизнес.<br />
              Наша защита.<br />
              <span style={{ color: "var(--lp-gold)" }}>Ваш результат.</span>
            </h1>

            {/* Sub */}
            <p
              className="text-lg font-light leading-relaxed mb-12 lp-fade-in"
              style={{ color: "var(--lp-muted)", maxWidth: 480, animationDelay: "0.2s" }}
            >
              Решаем юридические задачи любой сложности. От регистрации компании до защиты в суде — рядом на каждом этапе.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-20 lp-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/contacts"
                className="lp-btn-primary px-9 py-4 rounded-full text-[15px] flex items-center gap-2.5"
              >
                Получить консультацию
                <Icon name="ArrowRight" size={16} />
              </Link>
              <Link
                to="/services"
                className="px-9 py-4 rounded-full text-[15px] font-medium transition-all duration-300"
                style={{ background: "var(--lp-surface-soft)", color: "var(--lp-text)", border: "1px solid var(--lp-border-soft)" }}
              >
                Наши услуги
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lp-fade-in" style={{ animationDelay: "0.4s" }}>
              {stats.map((s) => (
                <div key={s.num}>
                  <div className="font-display text-3xl font-light mb-1" style={{ color: "var(--lp-text)" }}>{s.num}</div>
                  <div className="text-xs" style={{ color: "var(--lp-muted)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ color: "var(--lp-muted)" }}>
          <span className="text-[10px] tracking-widest uppercase">Листайте</span>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28" style={{ background: "var(--lp-section-alt)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--lp-gold)" }}>Направления</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Чем мы помогаем</h2>
            </div>
            <Link to="/services" className="flex items-center gap-2 text-sm font-medium transition-opacity duration-300 hover:opacity-70" style={{ color: "var(--lp-gold)" }}>
              Все услуги <Icon name="ArrowRight" size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <Link to="/services" key={i} className="group block rounded-2xl p-6 transition-all duration-300" style={{ background: "var(--lp-card)", border: "1px solid var(--lp-border-soft)" }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 group-hover:scale-105" style={{ background: "rgba(196,160,80,0.1)" }}
                >
                  <Icon name={s.icon} size={20} style={{ color: "var(--lp-gold)" }} />
                </div>
                <h3 className="font-display text-lg font-medium mb-1.5" style={{ color: "var(--lp-text)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>{s.desc}</p>
                <div className="flex items-center gap-1.5 mt-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "var(--lp-gold)" }}>
                  Подробнее <Icon name="ArrowRight" size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANTAGES ── */}
      <section className="py-28" style={{ background: "var(--lp-bg)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--lp-gold)" }}>Почему мы</span>
              <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Наши преимущества</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((a, i) => (
              <div key={i} className="rounded-2xl p-7 transition-all duration-300 hover:shadow-lg" style={{ background: "var(--lp-card)", border: "1px solid var(--lp-border-soft)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(196,160,80,0.1)" }}>
                  <Icon name={a.icon} size={22} style={{ color: "var(--lp-gold)" }} />
                </div>
                <h3 className="font-display text-xl font-medium mb-2" style={{ color: "var(--lp-text)" }}>{a.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section className="py-28" style={{ background: "var(--lp-section-alt)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--lp-gold)" }}>Процесс</span>
              <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light" style={{ color: "var(--lp-text)" }}>Как мы работаем</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div
              className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px"
              style={{ background: "linear-gradient(to right, var(--lp-gold), var(--lp-gold))", opacity: 0.2 }}
            />
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center relative z-10">
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center mb-5 font-display text-2xl font-light"
                  style={{ border: "1px solid rgba(196,160,80,0.3)", background: "var(--lp-card)", color: "var(--lp-gold)" }}
                >
                  {step.num}
                </div>
                <h4 className="font-display text-xl font-medium mb-2" style={{ color: "var(--lp-text)" }}>{step.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-muted)" }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: "var(--lp-bg)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(196,160,80,0.07) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--lp-gold)" }}>Начать</span>
            <div className="h-px w-8" style={{ background: "var(--lp-gold)" }} />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-5" style={{ color: "var(--lp-text)" }}>
            Готовы защитить<br />
            <span style={{ color: "var(--lp-gold)" }}>ваш бизнес</span>
          </h2>
          <p className="text-lg font-light leading-relaxed mb-10" style={{ color: "var(--lp-muted)" }}>
            Первичная консультация — бесплатно. Расскажем, как решить вашу задачу.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contacts" className="lp-btn-primary px-10 py-4 rounded-full text-[15px] flex items-center gap-2.5">
              Записаться бесплатно
              <Icon name="ArrowRight" size={17} />
            </Link>
            <a
              href="tel:+74951234567"
              className="px-10 py-4 rounded-full text-[15px] font-medium flex items-center gap-2 transition-all duration-300"
              style={{ background: "var(--lp-surface-soft)", color: "var(--lp-text)", border: "1px solid var(--lp-border-soft)" }}
            >
              <Icon name="Phone" size={16} />
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
