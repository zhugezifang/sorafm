type GuideSection = {
  title: string;
  body: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type ContentItem = {
  title: string;
  name: string;
};

type HomeGuideDict = {
  eyebrow: string;
  title: string;
  description: string;
  guideTitle: string;
  guides: GuideSection[];
  checklistTitle: string;
  checklist: string[];
  faqTitle: string;
  faqs: FaqItem[];
  noteLabel: string;
  note: string;
};

export default function HomeGuide({ dict }: { dict: any }) {
  const homeGuide: HomeGuideDict | undefined = dict.homeGuide;
  const contentItems: ContentItem[] = dict.content || [];

  if (!homeGuide) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase text-emerald-700">
          {homeGuide.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
          {homeGuide.title}
        </h2>
        <p className="mt-5 text-base leading-8 text-gray-600">
          {homeGuide.description}
        </p>
      </div>

      {contentItems.length > 0 && (
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {contentItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-950">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.name}
              </p>
            </article>
          ))}
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-950">
          {homeGuide.guideTitle}
        </h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {homeGuide.guides.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-950">
            {homeGuide.checklistTitle}
          </h2>
          <ul className="mt-5 space-y-4">
            {homeGuide.checklist.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-7 text-gray-700"
              >
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-emerald-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-950">
            {homeGuide.faqTitle}
          </h2>
          <div className="mt-5 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white">
            {homeGuide.faqs.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="cursor-pointer list-none text-base font-semibold text-gray-950">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950">
        <strong>{homeGuide.noteLabel}</strong> {homeGuide.note}
      </div>
    </section>
  );
}
