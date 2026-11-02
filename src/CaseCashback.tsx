import { useEffect, type CSSProperties } from "react";

const C = "/assets/cashback-case/";

type CaseImageProps = {
  src: string;
  alt: string;
  aspectRatio: string;
  className?: string;
  objectPosition?: string;
  eager?: boolean;
};

function CaseImage({
  src,
  alt,
  aspectRatio,
  className = "",
  objectPosition,
  eager = false,
}: CaseImageProps) {
  return (
    <figure
      className={`cashback-case-media ${className}`.trim()}
      style={{ aspectRatio } as CSSProperties}
    >
      <img
        src={`${C}${src}`}
        alt={alt}
        style={{ objectPosition }}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </figure>
  );
}

function ScreencastSlot({ label, src }: { label: string; src?: string }) {
  return (
    <div className="cashback-screencast">
      {src ? (
        <video autoPlay loop muted playsInline preload="metadata" aria-label={label}>
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <span>{label}</span>
      )}
    </div>
  );
}

function PhaseBlock({
  title,
  items,
  line,
  className = "",
}: {
  title: string;
  items: string[];
  line: string;
  className?: string;
}) {
  return (
    <section className={`cashback-phase ${className}`.trim()}>
      <h2>{title}</h2>
      <div className="cashback-phase-body">
        <img className="cashback-phase-line" src={`${C}${line}`} alt="" />
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function CaseCashback() {
  useEffect(() => {
    document.title = "Кэшач0к — кейс Ксюши Шевеленковой";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cashback-case-page">
      <header className="cashback-case-header">
        <a className="cashback-back" href="/">
          <img src={`${C}back-arrow.svg`} alt="" />
          <span>Ко всем кейсам</span>
        </a>

        <div className="cashback-case-heading cashback-case-column">
          <div>
            <h1>Кэшач0к</h1>
            <p>Игровой финансовый трекер</p>
          </div>
          <a
            className="cashback-dprofile"
            href="https://dprofile.ru/green"
            target="_blank"
            rel="noreferrer"
          >
            Кейс на Dprofile
          </a>
        </div>
      </header>

      <main className="cashback-case-column">
        <CaseImage
          src="hero.webp"
          alt="Кэшач0к — игровой финансовый трекер"
          aspectRatio="952 / 551"
          className="cashback-case-hero"
          eager
        />

        <section className="cashback-idea">
          <h2>Идея</h2>
          <div className="cashback-idea-copy">
            <p>
              Идея Кэшачка родилась на пересечении двух вещей, которые меня
              зацепили: индексов стоимости жизни и интернет-мемов, где стоимость
              нового айфона измеряли в целых коровах.
            </p>
            <p>
              Мне понравилась сама идея переводить абстрактные суммы в что-то
              осязаемое, понятное и немного абсурдное. Я задумалась:
            </p>
          </div>
          <p className="cashback-callout">
            а что, если использовать такие сравнения не просто ради шутки, а как
            инструмент осознанных трат?
          </p>
        </section>

        <h2 className="cashback-section-title">Конвертация трат</h2>
        <ScreencastSlot label="Скринкаст 1 сценарий" />

        <h2 className="cashback-section-title cashback-units-title">
          Бытовые эквиваленты [единицы]
        </h2>
        <ScreencastSlot label="Скринкаст единицы" />

        <PhaseBlock
          title="Ресерч"
          line="line-research.svg"
          items={[
            "Провести трендвотчинг и бенчмаркинг исследование",
            "Конкурентный анализ",
            "Составить гипотезы по ЦА и сегментам",
            "Провести первое количественное исследование",
          ]}
        />

        <CaseImage
          src="research.webp"
          alt="Исследование и конкурентный анализ Кэшачка"
          aspectRatio="952 / 494"
          objectPosition="50% 100%"
        />
        <CaseImage
          src="units.webp"
          alt="Механика бытовых эквивалентов"
          aspectRatio="952 / 470"
        />
        <CaseImage
          src="equivalents.webp"
          alt="Примеры пересчёта трат в бытовые единицы"
          aspectRatio="952 / 442"
          objectPosition="50% 100%"
        />

        <PhaseBlock
          title="Бренд"
          className="cashback-brand-phase"
          line="line-brand.svg"
          items={[
            "Сделать заходы на айдентику",
            "Разработать бренд-платформу",
            "Черновой прототип продукта",
            "Разработать первое MVP + продвижение (таргет + контекст)",
            "Начать вести соц-сети продукта",
            "PESTEL + SWOT",
          ]}
        />

        <CaseImage
          src="brand-story.webp"
          alt="Разработка бренда Кэшачок"
          aspectRatio="952 / 1744"
          objectPosition="50% 33%"
        />
        <CaseImage
          src="brand-board.webp"
          alt="Визуальная система бренда Кэшачок"
          aspectRatio="952 / 535"
        />
        <CaseImage
          src="product-screen-2.webp"
          alt="Коммуникационные материалы Кэшачка"
          aspectRatio="953 / 535"
        />
        <CaseImage
          src="product-screen-1.webp"
          alt="Экраны мобильного продукта Кэшачок"
          aspectRatio="952 / 534"
        />

        <PhaseBlock
          title="Продукт"
          className="cashback-product-phase"
          line="line-product.svg"
          items={[
            "Разработать лендинг в рамках продвижения",
            "MVP с основными механиками",
            "Создать дизайн-систему",
            "Собрать кликабельный прототип с основными сценариями",
            "Считаем рынок, юнит экономику, описать бизнес-модель и все остальное, что я не люблю",
          ]}
        />

        <CaseImage
          src="product-summary.webp"
          alt="Продуктовый интерфейс Кэшачка"
          aspectRatio="952 / 535"
        />
        <CaseImage
          src="boost-intro.webp"
          alt="Механика бустов в Кэшачке"
          aspectRatio="952 / 536"
        />
        <ScreencastSlot label="Скринкаст бусты" />
        <CaseImage
          src="boost-result.webp"
          alt="Результат применения бустов"
          aspectRatio="952 / 535"
        />
      </main>
    </div>
  );
}
