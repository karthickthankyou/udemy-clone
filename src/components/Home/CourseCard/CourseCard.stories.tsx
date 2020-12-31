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
  title: 'GitHub Ultimate: Master Git and GitHub - Beginner to Expert',
  updatedOn: 'March 2019',
  courseDuration: 6.5,
  desc: 'Go from complete novice to expert in Git and GitHub using step - by - step, no - assumptions learning',
  keyPoints: ['Learn the key concepts of the Git source control system',
    'Step through the entire Git workflow',
    'Compare the different states in Git'],
  rating: 4.3,
  reviewCount: 45555,
  badgeType: 'BESTSELLER'
};





