import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

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
            <span style={{ color: "var(--lp-gold)" }}>Контакты</span>
          </div>
          <span className="text-xs font-medium tracking-[0.2em] uppercase mb-4 block" style={{ color: "var(--lp-gold)" }}>Связаться с нами</span>
          <h1 className="font-display text-5xl md:text-6xl font-light mb-6" style={{ color: "var(--lp-text)" }}>Контакты</h1>
          <p className="text-lg font-light leading-relaxed max-w-xl" style={{ color: "var(--lp-muted)" }}>
            Запишитесь на онлайн-консультацию или свяжитесь удобным способом — ответим в течение 2 часов.
          </p>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="py-16 pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left info */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact cards */}
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (495) 123-45-67", sub: "Звонки: Пн–Пт 9:00–20:00" },
                { icon: "Mail", label: "Email", value: "info@юрсервис.рф", sub: "Отвечаем в течение 2 часов" },
                { icon: "MapPin", label: "Адрес офиса", value: "Москва, Пресненская набережная, 6, стр. 2", sub: "Вход с Краснопресненской набережной" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–20:00", sub: "Сб: 10:00–16:00, Вс — выходной" },
              ].map((c) => (
                <div key={c.label} className="lp-card rounded-2xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(196,160,80,0.1)" }}>
                    <Icon name={c.icon} size={18} style={{ color: "var(--lp-gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--lp-gold)" }}>{c.label}</p>
                    <p className="text-sm font-medium mb-0.5" style={{ color: "var(--lp-text)" }}>{c.value}</p>
                    <p className="text-xs" style={{ color: "var(--lp-muted)" }}>{c.sub}</p>
                  </div>
                </div>
              ))}

              {/* Messengers */}
              <div className="lp-card rounded-2xl p-5">
                <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--lp-gold)" }}>Мессенджеры</p>
                <div className="flex flex-col gap-3">
                  {[
                    { icon: "Send", label: "Telegram", value: "@yuridichesky_servis" },
                    { icon: "MessageCircle", label: "WhatsApp", value: "+7 (495) 123-45-67" },
                  ].map((m) => (
                    <div key={m.label} className="flex items-center gap-3 text-sm" style={{ color: "var(--lp-muted)" }}>
                      <Icon name={m.icon} size={16} style={{ color: "var(--lp-gold)" }} />
                      <span className="font-medium" style={{ color: "var(--lp-text)" }}>{m.label}:</span>
                      <span>{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="lp-card rounded-3xl p-8 md:p-10">
                {formSent ? (
                  <div className="text-center py-16">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                      style={{ background: "rgba(196,160,80,0.1)", border: "1px solid rgba(196,160,80,0.3)" }}
                    >
                      <Icon name="CheckCircle" size={38} style={{ color: "var(--lp-gold)" }} />
                    </div>
                    <h3 className="font-display text-2xl font-light mb-3" style={{ color: "var(--lp-text)" }}>Заявка принята!</h3>
                    <p className="mb-2" style={{ color: "var(--lp-muted)" }}>
                      Мы свяжемся с вами в течение 2 часов в рабочее время.
                    </p>
                    <p className="text-sm" style={{ color: "var(--lp-muted)" }}>
                      Если срочно — позвоните по номеру{" "}
                      <a href="tel:+74951234567" className="hover:underline" style={{ color: "var(--lp-gold)" }}>+7 (495) 123-45-67</a>
                    </p>
                    <button
                      onClick={() => { setFormSent(false); setFormData({ name: "", company: "", phone: "", email: "", service: "", date: "", message: "" }); }}
                      className="mt-8 text-sm hover:underline"
                      style={{ color: "var(--lp-gold)" }}
                    >
                      Отправить ещё одну заявку
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-light mb-1" style={{ color: "var(--lp-text)" }}>Онлайн-запись на консультацию</h2>
                      <p className="text-sm" style={{ color: "var(--lp-muted)" }}>Первичная консультация — бесплатно</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="lp-label">Ваше имя *</label>
                          <input name="name" required value={formData.name} onChange={handleChange} placeholder="Иван Петров" className="lp-input" />
                        </div>
                        <div>
                          <label className="lp-label">Компания</label>
                          <input name="company" value={formData.company} onChange={handleChange} placeholder='ООО «Название»' className="lp-input" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="lp-label">Телефон *</label>
                          <input name="phone" required type="tel" value={formData.phone} onChange={handleChange} placeholder="+7 (___) ___-__-__" className="lp-input" />
                        </div>
                        <div>
                          <label className="lp-label">Email</label>
                          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="mail@company.ru" className="lp-input" />
                        </div>
                      </div>

                      <div>
                        <label className="lp-label">Направление</label>
                        <select name="service" value={formData.service} onChange={handleChange} className="lp-input">
                          <option value="">Выберите направление</option>
                          <option>Корпоративное право</option>
                          <option>Договорная работа</option>
                          <option>Судебная защита</option>
                          <option>Налоговый консалтинг</option>
                          <option>Международное право</option>
                          <option>Интеллектуальная собственность</option>
                          <option>Другое</option>
                        </select>
                      </div>

                      <div>
                        <label className="lp-label">Удобная дата и время</label>
                        <input name="date" type="datetime-local" value={formData.date} onChange={handleChange} className="lp-input" />
                      </div>

                      <div>
                        <label className="lp-label">Опишите вашу задачу</label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Кратко опишите ситуацию — это поможет нам подобрать нужного специалиста..."
                          className="lp-input resize-none"
                        />
                      </div>

                      <button type="submit" className="lp-btn-primary w-full py-4 rounded-xl flex items-center justify-center gap-2.5 text-base">
                        Записаться на консультацию
                        <Icon name="ArrowRight" size={18} />
                      </button>

                      <p className="text-center text-xs" style={{ color: "var(--lp-muted)" }}>
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <button type="button" className="hover:underline" style={{ color: "var(--lp-gold)" }}>
                          политикой конфиденциальности
                        </button>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
