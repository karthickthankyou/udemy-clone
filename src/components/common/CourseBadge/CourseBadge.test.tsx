import React from 'react';
import { render } from '@testing-library/react';
import CourseBadge from './CourseBadge';

describe('CourseBadge Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<CourseBadge />);
    expect(asFragment()).toMatchSnapshot();
  });
});
