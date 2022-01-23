import { render, screen } from '@testing-library/react';
import SideNav from '../../components/SideNav';

test('renders Nav', () => {
  render(<SideNav />);
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  const loginLink = screen.getByText(/Login/i);
  expect(loginLink).toBeInTheDocument();

  const frontPage = screen.getByText(/Front Page/i);
  expect(frontPage).toBeInTheDocument();

  const allPage = screen.getByText(/All/i);
  expect(allPage).toBeInTheDocument();
});

