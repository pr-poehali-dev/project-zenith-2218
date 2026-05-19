export function Benefits() {
  const benefits = [
    {
      icon: "📄",
      title: "Помощь с резюме",
      description: "Составим и отредактируем резюме, которое привлечёт внимание работодателя",
    },
    {
      icon: "🎯",
      title: "Подготовка к собеседованию",
      description: "Тренировочные интервью, разбор типичных вопросов и советы по самопрезентации",
    },
    {
      icon: "🤝",
      title: "База работодателей",
      description: "Доступ к актуальным вакансиям от 200+ компаний-партнёров организации",
    },
    {
      icon: "🎓",
      title: "Карьерное консультирование",
      description: "Помощь в выборе направления, планирование карьерного пути и профориентация",
    },
    {
      icon: "📊",
      title: "Анализ рынка труда",
      description: "Актуальная информация о востребованных специальностях и уровне зарплат",
    },
    {
      icon: "📅",
      title: "Ярмарки вакансий",
      description: "Регулярные встречи с работодателями прямо на базе организации",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Наши услуги</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Всё для успешного старта карьеры
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Комплексная поддержка выпускников на каждом этапе — от поиска вакансии до выхода на работу
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
