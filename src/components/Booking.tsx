import { Button } from "@/components/ui/button"

export function Booking() {
  const handleContactClick = () => {
    alert("Форма обращения будет подключена. Напишите нам, что настроить!")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Получить помощь</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Обратитесь в службу</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Запишитесь на бесплатную консультацию — специалист ответит на все вопросы и поможет с поиском работы
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Запись на консультацию</h3>
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <p className="text-muted-foreground mb-4">Выберите удобный способ записи</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>📅 Личный приём по предварительной записи</p>
                <p>📞 Консультация по телефону</p>
                <p>✉️ Ответ на заявку в течение одного рабочего дня</p>
              </div>
              <Button
                onClick={handleContactClick}
                className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground w-full"
              >
                Оставить заявку
              </Button>
            </div>
          </div>

          {/* Info Section */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">Информация о приёме</h3>
            <div className="space-y-6">
              <div className="bg-muted/50 rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-4">Услуги службы бесплатны для выпускников:</p>
                <div className="flex gap-3 items-center justify-center py-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded border border-border">
                    <span className="text-2xl">🎓</span>
                    <span className="font-semibold text-foreground">Выпускникам</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-background rounded border border-border">
                    <span className="text-2xl">📚</span>
                    <span className="font-semibold text-foreground">Студентам</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Режим работы</span>
                  <span className="font-semibold text-foreground">Пн–Пт, 9:00–17:00</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Длительность консультации</span>
                  <span className="font-semibold text-foreground">45–60 минут</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-semibold text-foreground">Стоимость</span>
                  <span className="text-2xl font-bold text-accent">Бесплатно</span>
                </div>
              </div>

              <Button
                onClick={handleContactClick}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
              >
                Записаться на консультацию
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ✓ Бесплатно • ✓ Конфиденциально • ✓ Индивидуальный подход
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
