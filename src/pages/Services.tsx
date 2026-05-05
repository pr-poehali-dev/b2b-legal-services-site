import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Briefcase",
    title: "Корпоративное право",
    tag: "Популярно",
    short: "Сопровождение бизнеса на всех этапах: от регистрации до реорганизации.",
    points: [
      "Регистрация и ликвидация юридических лиц",
      "Подготовка уставных и корпоративных документов",
      "Корпоративные конфликты и споры участников",
      "Сделки с долями и акциями (M&A)",
      "Due diligence при покупке бизнеса",
    ],
  },
  {
    icon: "FileText",
    title: "Договорная работа",
    tag: null,
    short: "Разработка и экспертиза договоров любой сложности.",
    points: [
      "Разработка договоров с нуля под задачи клиента",
      "Правовая экспертиза контрагентских договоров",
      "Рамочные соглашения и типовые формы",
      "NDA, лицензионные и дистрибьюторские договоры",
      "Переговоры и согласование условий",
    ],
  },
  {
    icon: "Shield",
    title: "Судебная защита",
    tag: null,
    short: "Представление интересов в судах всех инстанций.",
    points: [
      "Арбитражные и гражданские суды",
      "Досудебное урегулирование и медиация",
      "Обжалование судебных актов",
      "Исполнительное производство",
      "Международный коммерческий арбитраж",
    ],
  },
  {
    icon: "Globe",
    title: "Международное право",
    tag: "Новое",
    short: "ВЭД, трансграничные сделки и санкционный комплаенс.",
    points: [
      "Внешнеэкономическая деятельность (ВЭД)",
      "Экспортный контроль и таможенное право",
      "Санкционный комплаенс и ограничения",
      "Международные контракты и споры",
      "Валютное регулирование",
    ],
  },
  {
    icon: "Building2",
    title: "Налоговый консалтинг",
    tag: null,
    short: "Оптимизация налогов и защита при проверках ФНС.",
    points: [
      "Налоговое планирование и структурирование",
      "Защита при выездных и камеральных проверках",
      "Налоговые споры в судебном порядке",
      "Трансфертное ценообразование",
      "Работа с дроблением бизнеса",
    ],
  },
  {
    icon: "Lock",
    title: "Интеллектуальная собственность",
    tag: null,
    short: "Регистрация и защита брендов, патентов и авторских прав.",
    points: [
      "Регистрация товарных знаков и патентов",
      "Защита авторских прав",
      "Лицензионные соглашения",
      "Споры о нарушении прав ИС",
      "Доменные споры",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0c1e3a 0%, var(--lp-dark) 60%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(196,160,80,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,80,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--lp-muted)" }}>
            <Link to="/" className="hover:text-lp-gold transition-colors duration-200" style={{ color: "var(--lp-muted)" }}>Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span style={{ color: "var(--lp-gold)" }}>Услуги</span>
          </div>
          <span className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Что мы делаем</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6" style={{ color: "var(--lp-text)" }}>Наши услуги</h1>
          <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: "var(--lp-muted)" }}>
            Комплексное юридическое сопровождение бизнеса — от регистрации компании до защиты в международном арбитраже.
          </p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="lp-card group rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(196,160,80,0.04) 0%, transparent 100%)" }} />
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "rgba(196,160,80,0.1)" }}>
                    <Icon name={s.icon} size={22} style={{ color: "var(--lp-gold)" }} />
                  </div>
                  {s.tag && (
                    <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ border: "1px solid rgba(196,160,80,0.35)", color: "var(--lp-gold)", background: "rgba(196,160,80,0.08)" }}>
                      {s.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-medium mb-2" style={{ color: "var(--lp-text)" }}>{s.title}</h3>
                <p className="text-sm mb-6" style={{ color: "var(--lp-muted)" }}>{s.short}</p>
                <ul className="space-y-2.5">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--lp-muted)" }}>
                      <Icon name="CheckCircle" size={13} style={{ color: "var(--lp-gold)", flexShrink: 0 }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-light mb-5" style={{ color: "var(--lp-text)" }}>
            Не нашли нужную услугу?
          </h2>
          <p className="text-lg font-light leading-relaxed mb-8" style={{ color: "var(--lp-muted)" }}>
            Свяжитесь с нами — мы рассмотрим вашу задачу индивидуально.
          </p>
          <Link to="/contacts" className="lp-btn-primary px-10 py-4 rounded-full text-base inline-flex items-center gap-2.5">
            Обсудить задачу
            <Icon name="ArrowRight" size={17} />
          </Link>
        </div>
      </section>
    </>
  );
}
