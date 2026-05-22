import { useScrollAnimation } from '../hooks/useScrollAnimation'

const skillCategories = [
  {
    category: 'HTML / CSS',
    color: 'from-orange-500 to-rose-500',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 95 },
      { name: 'SCSS/Sass', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 85 },
    ],
  },
  {
    category: 'JavaScript',
    color: 'from-yellow-500 to-amber-500',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'jQuery', level: 90 },
      { name: 'GSAP', level: 75 },
    ],
  },
  {
    category: 'Framework',
    color: 'from-sky-500 to-indigo-500',
    skills: [
      { name: 'React', level: 85 },
      { name: 'Vue.js', level: 75 },
      { name: 'Next.js', level: 70 },
    ],
  },
  {
    category: 'Tools',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma', level: 85 },
      { name: 'Webpack / Vite', level: 80 },
      { name: 'Photoshop', level: 75 },
    ],
  },
]

function SkillBar({ name, level, color, delay, parentVisible }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-t-heading">{name}</span>
        <span
          className={`text-xs font-bold transition-opacity duration-700 ease-out ${parentVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: `${delay + 300}ms` }}
        >
          {level}%
        </span>
      </div>
      <div className="h-2.5 bg-t-border/50 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{
            width: parentVisible ? `${level}%` : '0%',
            transitionDelay: `${delay + 300}ms`,
          }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ data, index }) {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`bg-t-card border border-t-border rounded-2xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${data.color}`} />
        <h3 className="text-lg font-bold text-t-heading">{data.category}</h3>
      </div>
      {data.skills.map((skill, i) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          color={data.color}
          delay={i * 100}
          parentVisible={isVisible}
        />
      ))}
    </div>
  )
}

export default function Skills() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section id="skills" className="py-24 md:py-32 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-t-heading mb-4">기술 스택</h2>
          <p className="text-t-text max-w-2xl mx-auto">
            카테고리별 기술 숙련도를 한눈에 확인하세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {skillCategories.map((cat, i) => (
            <SkillCategory key={cat.category} data={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
