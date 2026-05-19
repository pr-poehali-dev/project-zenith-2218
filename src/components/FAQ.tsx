import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Кто может обратиться в службу трудоустройства?",
      answer:
        "Услуги службы доступны всем выпускникам и студентам образовательной организации. Обращаться можно как в год выпуска, так и в течение нескольких лет после окончания обучения.",
    },
    {
      question: "Сколько стоят услуги службы?",
      answer:
        "Все услуги службы содействия трудоустройству абсолютно бесплатны для выпускников и студентов образовательной организации.",
    },
    {
      question: "Как записаться на консультацию?",
      answer:
        "Вы можете оставить заявку через сайт, позвонить по телефону или лично прийти в офис службы в рабочее время. Мы ответим в течение одного рабочего дня.",
    },
    {
      question: "Помогаете ли вы составить резюме?",
      answer:
        "Да! Наши специалисты помогут составить резюме с нуля или доработать уже имеющееся. Мы учитываем требования конкретных работодателей и актуальные стандарты оформления.",
    },
    {
      question: "Есть ли у вас база вакансий?",
      answer:
        "Да, мы ведём актуальную базу вакансий от 200+ компаний-партнёров. Вакансии обновляются еженедельно, и мы подбираем предложения, соответствующие вашей специальности.",
    },
    {
      question: "Проводятся ли встречи с работодателями?",
      answer:
        "Регулярно! Мы организуем ярмарки вакансий, дни карьеры и встречи с представителями компаний прямо на базе образовательной организации. Следите за расписанием на сайте.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
