import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Search from '../components/Search/Search';

const pageContainer = {
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const searchContainer = {
  position: 'relative',
  top: '30%',
  margin: 'auto',
  width: '100%',
  maxWidth: '700px'
};

const IndexPage = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
    return () => {
      setLoading(true);
    };
  }, []);

  return (
    <>
      <StaticImage
        alt="background"
        src="../images/background.webp"
        loading="eager"
        layout="fixed"
        style={pageContainer}
      />
      {!isLoading && (
        <div style={searchContainer}>
          <Search />
        </div>
      )}
    </>
  );
};

export default IndexPage;
