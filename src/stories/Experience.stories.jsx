import Experience from '../components/Experience';

export default {
  title: 'Components/Experience',
  component: Experience,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '타임라인 형식의 경력 섹션. 데스크탑에서 좌우 교차 배치, 모바일에서 단일 컬럼 레이아웃. 스크롤 애니메이션(좌/우 슬라이드인) 포함.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => <Experience />,
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => <Experience />,
};
