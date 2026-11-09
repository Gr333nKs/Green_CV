import { useState, type CSSProperties, type ReactNode } from "react";
import CaseCashback from "./CaseCashback";
import CaseSpotify from "./CaseSpotify";

const A = "/assets/";

const orbitIcons = Array.from({ length: 8 }, (_, index) =>
  `${A}orbit-${index + 1}.png`,
);

type Project = {
  title: string;
  description: string;
  image?: string;
  kind?: "cashback" | "laba" | "nda";
  href?: string;
};

type Experience = {
  year: string;
  logo?: string;
  company: string;
  status?: string;
  role: string;
  description: string;
  projects?: Project[];
  compact?: boolean;
};

const experiences: Experience[] = [
  {
    year: "2026",
    logo: `${A}logo-rwb.svg`,
    company: "RWB",
    status: "Сейчас",
    role: "Продуктовый дизайнер",
    description:
      "Занимаюсь разработкой R&D-проектов от исследования и информационной архитектуры до тестовых MVP, включая реализацию с использованием AI-инструментов и вайбкодинга.",
    projects: [
      {
        title: "B2C",
        description:
          "Проектирую внутренний B2C сервис: исследую сценарии, формирую user flow, создаю прототипы и финальные интерфейсы.",
        kind: "nda",
      },
    ],
  },
  {
    year: "2026",
    logo: `${A}logo-bbe.png`,
    company: "BBE (Bang Bang Education)",
    status: "Октябрь",
    role: "Арт-директор цифрового продукта",
    description: "Курсы повышения квалификации",
    projects: [
      {
        title: "Spotify Mind",
        description: "Сервис нейропсихотерапии в экосистеме Spotify",
        image: `${A}spotify.png`,
        href: "/cases/spotify-mind",
      },
    ],
  },
  {
    year: "2025",
    logo: `${A}logo-hse.png`,
    company: "Школа дизайна НИУ ВШЭ",
    role: "Дизайн и продвижение цифрового продукта",
    description: "[Магистратура]",
    projects: [
      {
        title: "Кэшач0к [Стартап]",
        description:
          "Игровой финансовый трекер. Разработка геймифицированного приложения EdTech × FinTech + стратегии продвижения + MVP(3)",
        kind: "cashback",
        href: "/cases/cashback",
      },
      {
        title: "SHAPE",
        description:
          "Виртуальный стилист (разработка приложения) + продвижение бренда",
        image: `${A}shape.png`,
      },
      {
        title: "LOMO",
        description: "Приложение для пленочных фотографов",
        image: `${A}lomo.png`,
      },
    ],
  },
  {
    year: "2024",
    logo: `${A}logo-instinct.png`,
    company: "Instinct (BBDO)",
    role: "Младший креатор",
    description:
      "Разработала идеи и дизайн-решения для 5+ рекламных кампаний, собрала презентации для защиты решений перед командой и создала визуализации концепций.",
    projects: [
      {
        title: "Рекламные кампании",
        description:
          "Работала с кейсами крупных брендов, участвовала в брейнштормах, собирала key visual, презентации и визуализации с помощью AI-инструментов.",
        kind: "nda",
      },
    ],
  },
  {
    year: "2024",
    logo: `${A}logo-bd.png`,
    company: "B&D (Институт бизнеса и дизайна)",
    role: "Дизайн в цифровой среде",
    description: "[Бакалавриат]",
    projects: [
      {
        title: "Adventures Lab (LABA)",
        description:
          "Разработка фирменного стиля и приложения для детского туроператора «Лаборатория приключений».",
        kind: "laba",
      },
      {
        title: "IPT2021",
        description:
          "Бронзовое место, участие в выставке плакатов в Японии, Тояма.",
        image: `${A}poster-air.png`,
      },
      {
        title: "Posterist",
        description: "Участие в выставке плакатов, Стамбул, Турция.",
        image: `${A}poster-posterist.png`,
      },
      {
        title: "ABSURD",
        description: "Участие в выставке плакатов, Словения.",
        image: `${A}poster-absurd.png`,
      },
    ],
  },
  {
    year: "2023",
    company: "Фриланс",
    role: "Цифровой дизайнер",
    description:
      "Разработка фирменного стиля, лого, сайтов, цифровой рисунок.",
    compact: true,
  },
  {
    year: "2019",
    logo: `${A}logo-bhsad.png`,
    company: "BHSAD (Британская высшая школа дизайна)",
    role: "Цифровой дизайн",
    description: "Интенсив, освоение Adobe CC, основ цифрового дизайна.",
    compact: true,
  },
];

function ProjectArt({ project }: { project: Project }) {
  if (project.kind === "nda") {
    return <span className="nda">NDA</span>;
  }

  if (project.kind === "cashback") {
    return (
      <span className="case-collage cashback-collage" aria-hidden="true">
        <img src={`${A}cashback-main.png`} alt="" />
        <span className="phone-collage">
          <img src={`${A}cashback-phone-side.png`} alt="" />
          <img src={`${A}cashback-person.png`} alt="" />
          <img src={`${A}cashback-phone.png`} alt="" />
        </span>
      </span>
    );
  }

  if (project.kind === "laba") {
    return (
      <span className="case-collage laba-collage" aria-hidden="true">
        <span className="laba-wide">
          <img src={`${A}laba-back.png`} alt="" />
          <img src={`${A}laba-front.png`} alt="" />
        </span>
        <img className="laba-mobile" src={`${A}laba-mobile.png`} alt="" />
      </span>
    );
  }

  return <img className="project-image" src={project.image} alt="" />;
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const featured = project.kind === "cashback" || project.kind === "laba";
  const content: ReactNode = (
    <>
      <ProjectArt project={project} />
      <span className="project-copy">
        <strong>{project.title}</strong>
        <span>{project.description}</span>
      </span>
    </>
  );

  if (project.href) {
    return (
      <a
        className={`project ${featured ? "project-featured" : ""}`}
        href={project.href}
        aria-label={`${project.title}. Открыть страницу кейса`}
        data-case-index={index}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`project ${featured ? "project-featured" : ""}`}
      type="button"
      aria-label={`${project.title}. Страница кейса появится позже`}
      title="Страница кейса появится позже"
      data-case-index={index}
    >
      {content}
    </button>
  );
}

function ExperienceEntry({ item }: { item: Experience }) {
  return (
    <article
      className={`experience ${item.compact ? "experience-compact" : ""} ${
        item.logo ? "has-logo" : "no-logo"
      }`}
    >
      <time>{item.year}</time>
      <span className="timeline-dot" aria-hidden="true" />
      <div className="experience-body">
        {item.logo && (
          <span className="company-logo">
            <img src={item.logo} alt="" />
          </span>
        )}
        <div className="experience-copy">
          <div className="company-line">
            <h2>{item.company}</h2>
            {item.status && <span className="status">{item.status}</span>}
          </div>
          <h3>{item.role}</h3>
          <p>{item.description}</p>
        </div>
        {item.projects && (
          <div className="projects">
            {item.projects.map((project, index) => (
              <ProjectRow key={project.title} project={project} index={index} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function Hero({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <header className={`hero ${expanded ? "is-expanded" : ""}`}>
      <div className="identity">
        <strong>Ксюша Шевеленкова</strong>
        <span>Москва</span>
        <a
          className="resume-download"
          href="/resume.pdf"
          download="Шевеленкова Ксения — Резюме.pdf"
        >
          <img src={`${A}resume-download.svg`} alt="" aria-hidden="true" />
          Резюме
        </a>
      </div>

      <div className="portrait-stage">
        <div className="orbit" aria-hidden="true">
          {orbitIcons.map((src, index) => (
            <img key={src} src={src} alt="" style={{ "--i": index } as CSSProperties} />
          ))}
        </div>
        <button
          className="portrait-button"
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={expanded ? "Скрыть мой дизайн-стек" : "Показать мой дизайн-стек"}
        >
          <img src={`${A}portrait.png`} alt="Ксюша Шевеленкова" />
        </button>
      </div>

      {!expanded && (
        <span className="click-hint" aria-hidden="true">
          <img src={`${A}cursor.png`} alt="" />
          тык-стэк
        </span>
      )}

      <div className="hero-copy">
        <h1>Продуктовый дизайнер</h1>
        <p>Product Designer (Middle)</p>
        <p>B2C · R&amp;D · AI-powered prototyping</p>
      </div>
    </header>
  );
}

function FloatingMenu() {
  const links = [
    { label: "Dprofile", href: "https://dprofile.ru/green" },
    { label: "Behance", href: "https://www.behance.net/kseniashevele" },
    { label: "Написать мне", href: "https://t.me/shev_Kk" },
    { label: "Почта", href: "mailto:green.ks@icloud.com" },
  ];

  return (
    <nav className="floating-menu" aria-label="Контакты">
      {links.map(({ label, href }) => (
        <span className="menu-item" key={label}>
          <a
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          >
            {label}
          </a>
        </span>
      ))}
    </nav>
  );
}

function PortfolioPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="site-shell">
      <Hero expanded={expanded} onToggle={() => setExpanded((value) => !value)} />

      <main className="timeline" aria-label="Опыт и образование">
        <img className="timeline-arrow" src={`${A}timeline-arrow.svg`} alt="" />
        {experiences.map((item) => (
          <ExperienceEntry key={`${item.year}-${item.company}`} item={item} />
        ))}
        <p className="childhood">Мам, запиши меня в художку!..</p>
        <div className="roots-note">
          <span>Вот и корешки</span>
          <img src={`${A}roots.svg`} alt="" />
        </div>
      </main>

      <FloatingMenu />
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/cases/cashback") {
    return <CaseCashback />;
  }

  if (path === "/cases/spotify-mind") {
    return <CaseSpotify />;
  }

  return <PortfolioPage />;
}
