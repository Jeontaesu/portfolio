import Skills from '../components/Skills';

export default {
  title: 'Components/Skills',
  component: Skills,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '카테고리별 기술 스택 섹션. 각 스킬은 그라디언트 프로그레스 바로 숙련도 표시. HTML/CSS · JavaScript · Framework · Tools 4개 카테고리.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => <Skills />,
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => <Skills />,
};
