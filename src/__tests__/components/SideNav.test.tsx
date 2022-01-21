import { render, screen } from '@testing-library/react';
import SideNav from '../../components/SideNav';

test('renders Nav', () => {
  render(<SideNav />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

