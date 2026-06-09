import ScrollToTop from '../components/ScrollToTop';

export default {
  title: 'Components/ScrollToTop',
  component: ScrollToTop,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '페이지 최하단에 도달하면 나타나는 "맨 위로" 버튼. 스크롤 이벤트로 표시 여부 제어.',
      },
    },
  },
};

// 실제 scroll 이벤트 없이도 버튼을 시각적으로 확인할 수 있도록 visible 상태를 직접 렌더링
export const Visible = {
  name: 'Visible State',
  parameters: { globals: { theme: 'light' } },
  render: () => (
    <div className="relative h-32 bg-t-bg">
      <button
        type="button"
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center transition-all duration-300 cursor-pointer opacity-100 translate-y-0"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  ),
};

export const VisibleDark = {
  name: 'Visible State (Dark)',
  parameters: { globals: { theme: 'dark' } },
  render: () => (
    <div className="relative h-32 bg-t-bg">
      <button
        type="button"
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl hover:shadow-primary/25 flex items-center justify-center transition-all duration-300 cursor-pointer opacity-100 translate-y-0"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  ),
};
