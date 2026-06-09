import Footer from '../components/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: '포트폴리오 하단 푸터. 저작권 텍스트와 주요 섹션 링크 포함.',
      },
    },
  },
};

export const Light = {
  name: 'Light Mode',
  parameters: { globals: { theme: 'light' } },
  render: () => <Footer />,
};

export const Dark = {
  name: 'Dark Mode',
  parameters: { globals: { theme: 'dark' } },
  render: () => <Footer />,
};
