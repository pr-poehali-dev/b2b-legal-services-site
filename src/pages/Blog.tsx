import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const posts = [
  {
    date: "28 апреля 2026",
    category: "Корпоративное право",
    title: "Изменения в законодательстве об ООО: что нужно знать в 2026 году",
    excerpt: "Разбираем ключевые поправки, вступившие в силу с января, и их влияние на деятельность малого и среднего бизнеса. Обязательная читка для каждого собственника.",
    readTime: "7 мин",
    featured: true,
  },
  {
    date: "14 апреля 2026",
    category: "Налоги",
    title: "Дробление бизнеса: риски и законные альтернативы",
    excerpt: "ФНС усиливает контроль за схемами налоговой оптимизации. Анализируем безопасные способы структурирования группы компаний.",
    readTime: "12 мин",
    featured: false,
  },
  {
    date: "2 апреля 2026",
    category: "Арбитраж",
    title: "Досудебное урегулирование споров: пошаговое руководство",
    excerpt: "Как грамотно составить претензию и провести переговоры, чтобы решить конфликт без суда и сохранить деловые отношения.",
    readTime: "9 мин",
    featured: false,
  },
  {
    date: "18 марта 2026",
    category: "Международное право",
    title: "Санкционный комплаенс в 2026: новые требования для российского бизнеса",
    excerpt: "Обновлённые санкционные списки и обязательства компаний. Как выстроить комплаенс-систему, которая реально работает.",
    readTime: "15 мин",
    featured: false,
  },
  {
    date: "5 марта 2026",
    category: "Корпоративное право",
    title: "Due diligence при покупке готового бизнеса: что проверять в первую очередь",
    excerpt: "Детальный чек-лист для покупателя: юридические, налоговые и финансовые риски, которые нельзя пропустить.",
    readTime: "11 мин",
    featured: false,
  },
  {
    date: "20 февраля 2026",
    category: "Договоры",
    title: "Топ-10 ошибок в договорах, которые стоят бизнесу миллионы",
    excerpt: "Разбор реальных кейсов: типичные ошибки в договорах поставки, аренды и оказания услуг, которые приводят к судебным спорам.",
    readTime: "8 мин",
    featured: false,
  },
];

const categories = ["Все", "Корпоративное право", "Налоги", "Арбитраж", "Международное право", "Договоры"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Все");

  const filtered = activeCategory === "Все"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const featured = posts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured || activeCategory !== "Все");

  return (
    <>
      {/* PAGE HERO */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, #0c1e3a 0%, var(--lp-dark) 60%)" }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(196,160,80,0.25), transparent)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(196,160,80,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(196,160,80,0.025) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--lp-muted)" }}>
            <Link to="/" style={{ color: "var(--lp-muted)" }}>Главная</Link>
            <Icon name="ChevronRight" size={14} />
            <span style={{ color: "var(--lp-gold)" }}>Блог</span>
          </div>
          <span className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Экспертиза</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6" style={{ color: "var(--lp-text)" }}>Блог</h1>
          <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: "var(--lp-muted)" }}>
            Актуальные разборы законодательства, практические советы и кейсы от наших юристов.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      {activeCategory === "Все" && featured && (
        <section className="pb-6">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lp-card rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, rgba(196,160,80,0.04) 0%, transparent 100%)" }} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ background: "rgba(196,160,80,0.12)", border: "1px solid rgba(196,160,80,0.25)" }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--lp-gold)" }} />
                    <span className="text-[11px] font-medium tracking-widest uppercase" style={{ color: "var(--lp-gold)" }}>Главная статья</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-light mb-4 leading-snug" style={{ color: "var(--lp-text)" }}>{featured.title}</h2>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--lp-muted)" }}>{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm" style={{ color: "var(--lp-muted)" }}>
                    <span className="px-2.5 py-1 rounded-full text-[11px] tracking-wide" style={{ border: "1px solid rgba(196,160,80,0.3)", color: "var(--lp-gold)" }}>{featured.category}</span>
                    <span>{featured.date}</span>
                    <span className="flex items-center gap-1.5"><Icon name="Clock" size={12} />{featured.readTime} чтения</span>
                  </div>
                </div>
                <div className="rounded-2xl flex items-center justify-center" style={{ height: 220, background: "linear-gradient(135deg, rgba(196,160,80,0.06), rgba(26,58,107,0.2))", border: "1px solid rgba(196,160,80,0.12)" }}>
                  <Icon name="BookOpen" size={52} style={{ color: "rgba(196,160,80,0.25)" }} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FILTER */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={
                  activeCategory === cat
                    ? { background: "var(--lp-gold)", color: "var(--lp-dark)" }
                    : { border: "1px solid var(--lp-border)", color: "var(--lp-muted)", background: "transparent" }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((post, i) => (
              <article key={i} className="lp-card group rounded-2xl overflow-hidden cursor-pointer flex flex-col">
                <div className="flex items-center justify-center" style={{ height: 180, background: "linear-gradient(135deg, rgba(196,160,80,0.05), rgba(26,58,107,0.15))", borderBottom: "1px solid var(--lp-border)" }}>
                  <Icon name="BookOpen" size={36} style={{ color: "rgba(196,160,80,0.25)" }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ border: "1px solid rgba(196,160,80,0.3)", color: "var(--lp-gold)" }}>{post.category}</span>
                    <span className="text-xs" style={{ color: "var(--lp-muted)" }}>{post.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3 leading-snug group-hover:text-lp-gold transition-colors duration-300 flex-1" style={{ color: "var(--lp-text)" }}>{post.title}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--lp-muted)" }}>{post.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm" style={{ color: "var(--lp-gold)" }}>
                    <Icon name="Clock" size={13} />
                    <span>{post.readTime} чтения</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
