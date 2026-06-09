import Projects from '../components/Projects';

export default {
  title: 'Components/Projects',
  component: Projects,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '프로젝트 카드 그리드 섹션. 이미지 호버 오버레이, 기술 스택 태그, GitHub / Live Demo 링크 버튼 포함.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => <Projects />,
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => <Projects />,
};
