import Hero from '../components/Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '포트폴리오 메인 히어로 섹션. 진입 애니메이션, CTA 버튼(프로젝트 보기 / 이력서 다운로드), 스크롤 유도 인디케이터 포함.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => <Hero />,
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => <Hero />,
};
