import { navigate } from 'gatsby';

const RedirectToHomePage = () => {
  void navigate('/');
  return null;
};

export default RedirectToHomePage;
