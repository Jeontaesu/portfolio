/** @type { import('@storybook/react-vite').Preview } */
import { useEffect } from 'react';
import '../src/index.css';
import { ThemeProvider } from '../src/hooks/useTheme.jsx';

// IntersectionObserver mock — Chromatic 스냅샷 시 scroll 애니메이션 즉시 보이도록
class AlwaysVisibleObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(target) {
    this.callback([{ isIntersecting: true, target }]);
  }
  unobserve() {}
  disconnect() {}
}

if (typeof window !== 'undefined') {
  window.IntersectionObserver = AlwaysVisibleObserver;
}

const withThemeProvider = (Story, context) => {
  const isDark = context.globals?.theme === 'dark';

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

const preview = {
  decorators: [withThemeProvider],

  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Light / Dark 테마 전환',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'sun', title: 'Light' },
          { value: 'dark', icon: 'moon', title: 'Dark' },
        ],
        showName: true,
      },
    },
  },

  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
