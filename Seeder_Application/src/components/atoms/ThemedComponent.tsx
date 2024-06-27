import React from 'react';
import { ThemeProvider, Typography, Button, Box } from '@mui/material';
import theme from '../../Theme/theme';

const ThemedComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.elevation0,
          color: theme.palette.text.primary,
          padding: 4,
        }}
      >
        <Typography variant="title">Title Typography</Typography>
        <br />
        <Typography variant="heading2">Heading2 Typography</Typography>
        <br />
        <Typography variant="heading3">Heading3 Typography</Typography>
        <br />
        <Typography variant="body1">Body1 Typography</Typography>
        <Typography variant="body2">Body2 Typography</Typography>
        <Typography variant="caption">Caption Typography</Typography>
        <br />
        <Typography variant="button">Button Typography</Typography>

        <Box sx={{ margin: 2 }}>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
        </Box>
        <Box sx={{ margin: 2 }}>
          <Button variant="contained" color="secondary">
            Secondary Button
          </Button>
        </Box>
        <Box sx={{ margin: 2 }}>
          <Button variant="outlined">Outlined Button</Button>
        </Box>
        <Box sx={{ margin: 2 }}>
          <Button variant="text">Text Button</Button>
        </Box>

        <Box
          sx={{
            backgroundColor: theme.palette.background.elevation0,
            padding: 2,
            margin: 2,
          }}
        >
          Elevation0 Background
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.elevation1,
            padding: 2,
            margin: 2,
          }}
        >
          Elevation1 Background
        </Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.elevation2,
            padding: 2,
            margin: 2,
          }}
        >
          Elevation2 Background
        </Box>

        <Box
          sx={{
            borderColor: theme.palette.Borders.highEmphasis,
            borderWidth: 1,
            borderStyle: 'solid',
            padding: 2,
            margin: 2,
          }}
        >
          High Emphasis Border
        </Box>
        <Box
          sx={{
            borderColor: theme.palette.Borders.lowEmphasis,
            borderWidth: 1,
            borderStyle: 'solid',
            padding: 2,
            margin: 2,
          }}
        >
          Low Emphasis Border
        </Box>

        <Box
          sx={{ color: theme.palette.Icon.highEmphasis, padding: 2, margin: 2 }}
        >
          High Emphasis Icon Color
        </Box>
        <Box
          sx={{ color: theme.palette.Icon.lowEmphasis, padding: 2, margin: 2 }}
        >
          Low Emphasis Icon Color
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ThemedComponent;
