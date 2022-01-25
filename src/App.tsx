import React from 'react';
import { ConfigProvider } from 'antd';
import deDe from 'antd/lib/locale/de_DE';
import enUS from 'antd/lib/locale/en_US';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/light/lightTheme';
import GlobalStyle from './styles/GlobalStyle';
import 'typeface-montserrat';
import { darkTheme } from '@app/styles/themes/dark/darkTheme';
import { AppRouter } from './components/router/AppRouter';
import { ThemeSwitcher } from '@app/components/common/ThemeSwitcher';
import { useLanguage } from './hooks/useLanguage';
import { useAppSelector } from './hooks/reduxHooks';
import { useAutoNightMode } from './hooks/useAutoNightMode';

const App: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);

  const { language } = useLanguage();

  useAutoNightMode();

  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ConfigProvider locale={language === 'en' ? enUS : deDe}>
          <ThemeSwitcher theme={theme}>
            <AppRouter />
          </ThemeSwitcher>
        </ConfigProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
