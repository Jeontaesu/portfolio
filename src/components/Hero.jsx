import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const base = 'transition-all duration-700 ease-out'
  const hidden = 'opacity-0 translate-y-8'
  const visible = 'opacity-100 translate-y-0'

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 overflow-hidden bg-[url(assets/hero.png)]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-t-bg via-t-bg to-primary/10" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p
          className={`text-primary font-medium tracking-widest uppercase text-sm md:text-base mb-4 ${base} ${mounted ? visible : hidden}`}
        >
          Frontend Developer &amp; Publisher
        </p>

        <h1
          className={`text-4xl md:text-5xl lg:text-7xl font-bold text-t-heading leading-tight tracking-tight mb-6 ${base} ${mounted ? visible : hidden}`}
          style={{ transitionDelay: '150ms' }}
        >
          더 나은 사용자 경험을
          <br />
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            만드는 퍼블리셔
          </span>
          입니다
        </h1>

        <p
          className={`text-base md:text-lg text-t-text max-w-2xl mx-auto mb-10 leading-relaxed ${base} ${mounted ? visible : hidden}`}
          style={{ transitionDelay: '300ms' }}
        >
          섬세한 UI 구현과 완벽한 반응형 웹을 추구합니다.
          <br className="hidden md:block" />
          사용자 중심의 인터페이스로 가치를 전달합니다.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${base} ${mounted ? visible : hidden}`}
          style={{ transitionDelay: '450ms' }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-full transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            프로젝트 보기
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-t-border text-t-heading font-medium rounded-full hover:border-primary hover:text-primary transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            이력서 다운로드
          </a>
        </div>

        <div
          className={`mt-20 ${base} ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <a href="#projects" className="text-t-text/50 hover:text-primary transition-colors inline-block animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
