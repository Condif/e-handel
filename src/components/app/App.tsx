import React from 'react';
import './App.css';
import Structure from '../layout/structure';
import '@shopify/polaris/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
const theme = {
  colors: {
    topBar: {
      background: '#357997',
    },
  },
  logo: {
    width: 124,
    topBarSource:
      'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
    url: 'http://jadedpixel.com',
    accessibilityLabel: 'Jaded Pixel',
  },
};

function App() {
  return (
    <AppProvider
      i18n= {{
        Polaris: {
          Avatar: {
            label: 'Avatar',
            labelWithInitials: 'Avatar with initials {initials}',
          },
          Frame: {skipToContent: 'Skip to content'},
          TopBar: {
            toggleMenuLabel: 'Toggle menu',
            SearchField: {
              clearButtonLabel: 'Clear',
              search: 'Search',
            },
          },
          enTranslations,
        },
      }}
      features={{ newDesignLanguage: false }}
      theme={theme}
    >
      <Structure />
    </AppProvider>
  );
}

export default App;
