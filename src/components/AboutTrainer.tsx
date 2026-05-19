export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-trainer-headshot-smiling.jpg" alt="Специалист службы" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О службе</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Ваш надёжный партнёр в поиске работы
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Служба содействия трудоустройству работает при образовательной организации уже более 15 лет.
              Мы помогаем выпускникам всех специальностей найти своё место на рынке труда.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Наши специалисты имеют многолетний опыт работы с работодателями, знают требования рынка
              и помогут вам грамотно представить себя. Мы сотрудничаем с более чем 200 компаниями-партнёрами.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Аккредитованная служба</p>
                  <p className="text-sm text-muted-foreground">Официальное подразделение образовательной организации</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">1000+ трудоустроенных выпускников</p>
                  <p className="text-sm text-muted-foreground">87% находят работу в течение 6 месяцев</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Индивидуальный подход</p>
                  <p className="text-sm text-muted-foreground">Поддержка на каждом этапе поиска работы</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
