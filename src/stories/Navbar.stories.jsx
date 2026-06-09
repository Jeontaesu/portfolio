import Navbar from '../components/Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '포트폴리오 상단 고정 내비게이션 바. 스크롤 시 배경 블러 처리, 모바일 햄버거 메뉴, 다크모드 토글 포함.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => (
    <div className="h-24 bg-t-bg">
      <Navbar />
    </div>
  ),
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => (
    <div className="h-24 bg-t-bg">
      <Navbar />
    </div>
  ),
};

export const Scrolled = {
  name: 'Scrolled State (Light)',
  parameters: { globals: { theme: 'light' } },
  render: () => (
    <div className="h-24 bg-t-bg">
      {/* scrolled 상태를 시각적으로 재현 — window.scrollY 제어 불가로 CSS로 직접 표현 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-t-bg/95 backdrop-blur-md shadow-lg border-b border-t-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#hero" className="text-xl md:text-2xl font-bold text-t-heading tracking-tight hover:text-primary transition-colors">
              Portfolio<span className="text-primary">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'Projects', 'Experience', 'Skills', 'Contact'].map((label) => (
                <a key={label} href="#" className="text-sm font-medium text-t-text hover:text-primary transition-colors tracking-wide">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  ),
};
