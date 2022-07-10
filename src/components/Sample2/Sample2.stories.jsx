import React from 'react';

import Sample2 from './Sample2';

export const Welcome = () => <Sample2 firstName="Vignesh" lastName="S" />;

export const WithoutLastname = () => <Sample2 firstName="Vignesh" />;

export default {
  title: 'Example/Sample2',
  component: Sample2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
