export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">С</span>
              </div>
              <span className="font-semibold">Служба трудоустройства</span>
            </div>
            <p className="text-sm text-background/70">Содействие трудоустройству выпускников образовательной организации.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#about" className="hover:text-background transition">
                  О службе
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-background transition">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-background transition">
                  Обратиться
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-background transition">
                  Отзывы
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#faq" className="hover:text-background transition">
                  Частые вопросы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Вакансии партнёров
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Расписание мероприятий
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Адрес приёма
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Телефон
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Email
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/70">
          <p>&copy; 2026 Служба содействия трудоустройству выпускников. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
