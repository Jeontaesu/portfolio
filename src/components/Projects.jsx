import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "커머스 플랫폼 리뉴얼",
    description: "대규모 이커머스 사이트의 UI/UX를 전면 개편하여 전환율 30% 향상을 달성했습니다.",
    period: "2024.03 - 2024.08",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
    techs: ["React", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "기업 관리자 대시보드",
    description: "실시간 데이터 시각화와 직관적인 관리 인터페이스를 구현했습니다.",
    period: "2024.01 - 2024.03",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    techs: ["React", "Chart.js", "Styled-components"],
    github: "#",
    demo: "#"
  },
  {
    title: "모바일 헬스케어 앱",
    description: "건강 데이터를 관리하는 크로스 플랫폼 앱의 웹뷰 퍼블리싱을 담당했습니다.",
    period: "2023.09 - 2023.12",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    techs: ["HTML", "CSS", "JavaScript", "SCSS"],
    github: "#",
    demo: "#"
  },
  {
    title: "브랜드 랜딩 페이지",
    description: "스크롤 인터랙션과 마이크로 애니메이션으로 브랜드 스토리를 효과적으로 전달했습니다.",
    period: "2023.06 - 2023.08",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    techs: ["HTML", "CSS", "GSAP", "JavaScript"],
    github: "#",
    demo: "#"
  },
  {
    title: "소셜 미디어 플랫폼",
    description: "실시간 피드와 채팅 기능이 포함된 소셜 네트워크 서비스의 프론트엔드를 구축했습니다.",
    period: "2023.02 - 2023.05",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    techs: ["React", "Tailwind CSS", "Firebase"],
    github: "#",
    demo: "#"
  },
  {
    title: "교육 플랫폼 UI",
    description: "온라인 강의 플랫폼의 수강 페이지와 대시보드를 반응형으로 구현했습니다.",
    period: "2022.10 - 2023.01",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
    techs: ["Vue.js", "SCSS", "Vuetify"],
    github: "#",
    demo: "#"
  }
];

const techColors = {
  React: "bg-sky-500/15 text-sky-400 border-sky-500/30",
  "Tailwind CSS": "bg-teal-500/15 text-teal-400 border-teal-500/30",
  TypeScript: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  JavaScript: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  HTML: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  CSS: "bg-indigo-500/15 text-indigo-400 border-indigo-500/30",
  SCSS: "bg-pink-500/15 text-pink-400 border-pink-500/30",
  "Chart.js": "bg-rose-500/15 text-rose-400 border-rose-500/30",
  "Styled-components": "bg-violet-500/15 text-violet-400 border-violet-500/30",
  GSAP: "bg-green-500/15 text-green-400 border-green-500/30",
  Firebase: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  "Vue.js": "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Vuetify: "bg-blue-500/15 text-blue-400 border-blue-500/30"
};

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group overflow-hidden rounded-2xl border border-2 border-t-border bg-t-card transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-sm leading-relaxed text-gray-200">{project.description}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-t-heading">{project.title}</h3>
          <span className="ml-2 text-xs whitespace-nowrap text-t-text">{project.period}</span>
        </div>

        <p className="mb-4 line-clamp-2 text-sm text-t-text">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.techs.map(tech => (
            <span
              key={tech}
              className={`rounded-full border px-2.5 py-1 text-xs font-medium ${
                techColors[tech] || "border-gray-500/30 bg-gray-500/15 text-gray-400"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.github}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-t-border py-2.5 text-sm font-medium text-t-text transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:text-primary"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016.02 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href={project.demo}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-dark"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="projects" className="px-4 py-24 md:px-8 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`mb-16 text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-sm font-medium tracking-widest text-primary uppercase">Projects</p>
          <h2 className="mb-4 text-3xl font-bold text-t-heading md:text-4xl">프로젝트</h2>
          <p className="mx-auto max-w-2xl text-t-text">다양한 프로젝트에서 UI/UX 구현과 퍼블리싱을 담당하며 쌓아온 경험입니다.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
