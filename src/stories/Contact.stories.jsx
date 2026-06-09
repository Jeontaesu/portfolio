import Contact from '../components/Contact';

export default {
  title: 'Components/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '연락처 카드 섹션. Email · GitHub · Blog 3개 카드가 그리드로 배치. 호버 시 카드 상승 + 아이콘 배경 전환 효과.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => <Contact />,
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => <Contact />,
};
