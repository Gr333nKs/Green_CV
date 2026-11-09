import { useEffect, type CSSProperties } from "react";

const S = "/assets/spotify-mind/";

const sections = [
  {
    src: "01.webp",
    alt: "Spotify Mind — инструмент эмоциональной поддержки в экосистеме Spotify",
    aspectRatio: "3472 / 1950",
  },
  {
    src: "02.webp",
    alt: "Концепция нейропсихотерапии Spotify Mind и интерфейс диалога",
    aspectRatio: "3474 / 1952",
  },
  {
    src: "03.webp",
    alt: "Эмоциональный дневник и определение состояния пользователя",
    aspectRatio: "3472 / 1950",
  },
  {
    src: "04.webp",
    alt: "Исследование аудитории и задачи сервиса Spotify Mind",
    aspectRatio: "3472 / 1952",
  },
  {
    src: "05.webp",
    alt: "Сценарий использования Spotify Mind после расставания",
    aspectRatio: "3472 / 1952",
  },
  {
    src: "06.webp",
    alt: "Подбор музыки под эмоциональное состояние пользователя",
    aspectRatio: "3472 / 1952",
  },
  {
    src: "07.webp",
    alt: "Поддержка Spotify Mind в сложных эмоциональных ситуациях",
    aspectRatio: "3472 / 1952",
  },
  {
    src: "08.webp",
    alt: "Настройка приватности и персонализации Spotify Mind",
    aspectRatio: "3472 / 1952",
  },
  {
    src: "09.webp",
    alt: "Материалы продвижения и презентация Spotify Mind",
    aspectRatio: "3472 / 1952",
  },
  {
    src: "10.webp",
    alt: "Итоговая продуктовая концепция Spotify Mind",
    aspectRatio: "3472 / 1952",
  },
];

export default function CaseSpotify() {
  useEffect(() => {
    document.title = "Spotify Mind — кейс Ксюши Шевеленковой";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="spotify-case-page">
      <header className="spotify-case-header">
        <a className="spotify-back" href="/">
          <img src="/assets/cashback-case/back-arrow.svg" alt="" />
          <span>Ко всем кейсам</span>
        </a>

        <div className="spotify-case-heading spotify-case-column">
          <h1>Spotify Mind</h1>
          <p>Сервис нейропсихотерапии</p>
        </div>
      </header>

      <main className="spotify-case-column spotify-case-content">
        {sections.map(({ src, alt, aspectRatio }, index) => (
          <figure
            className="spotify-case-media"
            style={{ aspectRatio } as CSSProperties}
            key={src}
          >
            <img
              src={`${S}${src}`}
              alt={alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </figure>
        ))}
      </main>
    </div>
  );
}
