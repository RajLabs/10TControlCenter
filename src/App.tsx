import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import customTheme from 'utils/theme';
import AppContainer from 'AppContainer';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'store/configureStore';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={customTheme}>
          <BrowserRouter>
            <AppContainer />
          </BrowserRouter>
          <CssBaseline />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
