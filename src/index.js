import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './thems/default.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={defaultTheme}>
      <App />
    </ThemeProvider>
);