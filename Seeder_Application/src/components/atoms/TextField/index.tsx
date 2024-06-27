import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import styled from '@emotion/styled';
import { useTheme, Theme } from '@mui/material/styles';

export interface CustomTextFieldProps {
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  placeholder?: string;
  InputProps?: object;
}

const StyledTextField = styled(TextField)(({ theme }: { theme: Theme }) => ({
  '& .MuiOutlinedInput-root': {
    height: 56,
    width: 434,
    borderRadius: 12,
    padding: '16px 15px',
    gap: 12,
    backgroundColor: theme.palette.structural.grey['100'],

    '& fieldset': {
      borderColor: theme.palette.Borders.highEmphasis,
    },

    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.purple['400'],
    },

    '& .MuiInputBase-input': {
      color: theme.palette.text.mediumEmphasis,
    },

    '& .MuiInputBase-input::placeholder': {
      color: theme.palette.text.lowEmphasis,
    },

    '& .MuiInputAdornment-root': {
      color: theme.palette.text.lowEmphasis,
    },

    '&.Mui-focused .MuiInputAdornment-root': {
      color: theme.palette.primary.purple['400'],
    },

    '&.Mui-focused .MuiInputAdornment-positionStart img': {
      filter:
        'brightness(0) saturate(100%) invert(61%) sepia(75%) saturate(314%) hue-rotate(206deg) brightness(99%) contrast(104%)',
    },
  },
}));

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  startAdornment,
  endAdornment,
  placeholder,
}) => {
  const theme = useTheme();

  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      InputProps={{
        startAdornment: startAdornment && (
          <InputAdornment position="start">{startAdornment}</InputAdornment>
        ),
        endAdornment: endAdornment && (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
      theme={theme}
    />
  );
};

export default CustomTextField;
