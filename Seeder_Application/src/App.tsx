import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from './Theme/theme';
import CustomTextField from './components/atoms/TextField';
import lock from '../public/assets/icons/lock.svg';
import eye from '../public/assets/icons/eye.svg';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: '20px' }}>
        <CustomTextField
          startAdornment={<img src={lock} alt="Lock" />}
          endAdornment={<img src={eye} alt="Eye" />}
          placeholder="Enter your password"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
