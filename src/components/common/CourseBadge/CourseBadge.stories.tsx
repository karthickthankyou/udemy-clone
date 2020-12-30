import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CourseBadge, { ICourseBadgeProps } from './CourseBadge';

export default {
  title: 'common/CourseBadge',
  component: CourseBadge,
} as Meta;

const Template: Story<ICourseBadgeProps> = (args) => <CourseBadge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  badgeType: 'NEW'
};
