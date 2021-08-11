import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Search from '../components/Search/Search';
import TrackingInfo from '../components/TrackingInfo/TrackingInfo';

const pageContainer = {
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
  // below css is for the footer
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
  const [showTracking, setShowTracking] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has('track') && params.has('order')) {
      setOrderNumber(params.get('order'));
      setShowTracking(true);
    }

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
        <>
          <div style={searchContainer}>
            {!showTracking && (
              <Search onDisplayTrackingInfo={() => setShowTracking(true)} onOrderNumber={setOrderNumber} />
            )}
          </div>
          <div>{showTracking && <TrackingInfo orderNumber={orderNumber} />}</div>
        </>
      )}
    </>
  );
};

export default IndexPage;
