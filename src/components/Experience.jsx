import { useScrollAnimation } from '../hooks/useScrollAnimation'

const experiences = [
  {
    company: '(주) 테크스타트',
    role: '시니어 프론트엔드 개발자',
    period: '2023.03 - 현재',
    description: [
      '대규모 이커머스 플랫폼 프론트엔드 아키텍처 설계 및 개발',
      'React + TypeScript 기반 컴포넌트 시스템 구축',
      '웹 접근성(WCAG 2.1 AA) 준수 및 성능 최적화',
      '주니어 개발자 멘토링 및 코드 리뷰',
    ],
  },
  {
    company: '(주) 디자인랩',
    role: '웹 퍼블리셔 / 프론트엔드 개발자',
    period: '2021.06 - 2023.02',
    description: [
      '반응형 웹사이트 퍼블리싱 (50+ 프로젝트)',
      'Vue.js 기반 기업 관리자 대시보드 개발',
      'SCSS/BEM 방법론을 활용한 CSS 아키텍처 수립',
      '크로스 브라우저 호환성 이슈 해결',
    ],
  },
  {
    company: '(주) 웹에이전시',
    role: '주니어 웹 퍼블리셔',
    period: '2020.01 - 2021.05',
    description: [
      'PSD/Figma 디자인을 HTML/CSS로 변환',
      'jQuery 기반 인터랙션 및 애니메이션 구현',
      'Bootstrap/Foundation 프레임워크 활용',
      '이메일 템플릿 코딩 및 뉴스레터 제작',
    ],
  },
]

function TimelineCard({ experience, align }) {
  return (
    <div className="bg-t-card border border-t-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-0.5">
      <span className="text-xs font-medium text-primary tracking-wider">{experience.period}</span>
      <h3 className="text-lg font-bold text-t-heading mt-2">{experience.company}</h3>
      <p className="text-sm text-accent font-medium mt-1">{experience.role}</p>
      <ul className={`mt-4 space-y-2 ${align === 'right' ? 'text-right' : 'text-left'}`}>
        {experience.description.map((desc) => (
          <li key={desc} className="text-sm text-t-text flex items-start gap-2">
            {align === 'right' && <span className="flex-1">{desc}</span>}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
            {align !== 'right' && <span className="flex-1">{desc}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

function TimelineItem({ experience, index }) {
  const [ref, isVisible] = useScrollAnimation(0.15)
  const isEven = index % 2 === 0

  return (
    <div ref={ref} className="relative flex flex-col md:flex-row items-center md:gap-8">
      <div className={`hidden md:block w-5/12 ${isEven ? 'text-right' : 'order-2 text-left'}`}>
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : isEven
                ? 'opacity-0 -translate-x-10'
                : 'opacity-0 translate-x-10'
          }`}
        >
          <TimelineCard experience={experience} align={isEven ? 'right' : 'left'} />
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full border-4 border-primary bg-t-bg transition-all duration-500 ease-out ${
            isVisible ? 'scale-100' : 'scale-0'
          }`}
        />
      </div>

      <div className={`hidden md:block w-5/12 ${isEven ? 'order-2' : ''}`} />

      <div
        className={`md:hidden w-full mt-4 mb-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
      >
        <div className="ml-8">
          <TimelineCard experience={experience} align="left" />
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="experience" className="py-24 md:py-32 px-4 md:px-8 lg:px-16 bg-t-card/30">
      <div className="max-w-5xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-t-heading mb-4">경력</h2>
          <p className="text-t-text max-w-2xl mx-auto">
            다양한 환경에서 사용자 경험을 개선해온 여정입니다.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
