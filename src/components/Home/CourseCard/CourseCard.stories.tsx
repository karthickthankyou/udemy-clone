import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import CourseCard, { ICourseCardProps } from './CourseCard';

export default {
  title: 'Home/CourseCard',
  component: CourseCard,
} as Meta;

const Template: Story<ICourseCardProps> = (args) => <CourseCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rating: 4.3,
  reviewCount: 45555,
  badgeType: 'BESTSELLER'
};
