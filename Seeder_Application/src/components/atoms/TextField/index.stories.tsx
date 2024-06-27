import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomTextField, { CustomTextFieldProps } from '.';
import lock from '../../public/assets/icons/lock.svg';
import eye from '../../public/assets/icons/eye.svg';

export default {
  title: 'Atoms/CustomTextField',
  component: CustomTextField,
} as Meta;

const Template: StoryFn<CustomTextFieldProps> = (args) => (
  <CustomTextField {...args} />
);

export const WithStartAdornment = Template.bind({});
WithStartAdornment.args = {
  startAdornment: <img src={lock} alt="Lock" />,
  placeholder: 'Enter your password',
};

export const WithEndAdornment = Template.bind({});
WithEndAdornment.args = {
  endAdornment: <img src={eye} alt="Eye" />,
  placeholder: 'Enter your password',
};

export const WithBothAdornments = Template.bind({});
WithBothAdornments.args = {
  startAdornment: <img src={lock} alt="Lock" />,
  endAdornment: <img src={eye} alt="Eye" />,
  placeholder: 'Enter your password',
};

export const WithoutAdornments = Template.bind({});
WithoutAdornments.args = {
  placeholder: 'Enter your password',
};

export const FocusedWithBothAdornments = Template.bind({});
FocusedWithBothAdornments.args = {
  startAdornment: <img src={lock} alt="Lock" />,
  endAdornment: <img src={eye} alt="Eye" />,
  placeholder: 'Enter your password',
  InputProps: {
    className: 'Mui-focused',
  },
};
