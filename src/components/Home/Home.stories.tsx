import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Home, {IHomeProps} from './Home';

export default {
  title: 'Home/Home',
  component: Home,
} as Meta;

const Template: Story<IHomeProps> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
