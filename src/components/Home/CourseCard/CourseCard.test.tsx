import React from 'react';
import { render } from '@testing-library/react';
import CourseCard from './CourseCard';

describe('CourseCard Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CourseCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
