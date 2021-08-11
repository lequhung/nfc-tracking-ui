import { navigate } from 'gatsby';

const RedirectToHomePage = () => {
  if (typeof window !== 'undefined') {
    void navigate('/');
  }
  return null;
};

export default RedirectToHomePage;
