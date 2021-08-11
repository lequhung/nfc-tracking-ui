import * as React from 'react';import { StaticImage } from 'gatsby-plugin-image';
import Search from '../components/Search/Search';
import TrackingInfo from '../components/TrackingInfo/TrackingInfo';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import { Link } from '@material-ui/core';

const pageWrapper = {
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  height: '100%',
  // below css is for the footer
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
};

const searchWrapper = {
  position: 'relative',
  top: '30%',
  margin: 'auto',
  width: '100%',
  maxWidth: '700px'
};

const backLinkWrapper = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  color: '#ffffff',
  margin: '16px'
};

const backLinkItem = {
  color: '#ffffff'
};

const IndexPage = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [showTracking, setShowTracking] = React.useState(false);
  const [showBackLink, setShowBackLink] = React.useState(false);
  const [orderNumber, setOrderNumber] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.has('track') && params.has('order')) {
      setOrderNumber(params.get('order'));
      setShowTracking(true);
      setShowBackLink(false);
    } else {
      setShowBackLink(true);
    }

    setLoading(false);

    return () => {
      setLoading(true);
      setShowTracking(false);
      setOrderNumber('');
    };
  }, []);

  const onBackClick = (event) => {
    event.preventDefault();

    setShowTracking(false);
    setOrderNumber('');
  };

  return (
    <>
      <StaticImage
        alt="background"
        src="../images/background.webp"
        layout="fixed"
        loading="eager"
        style={pageWrapper}
      />
      {!isLoading && (
        <>
          <div style={searchWrapper}>
            {!showTracking && (
              <Search onDisplayTrackingInfo={() => setShowTracking(true)} onOrderNumber={setOrderNumber} />
            )}
          </div>
          <div>
            {showTracking && (
              <>
                {showBackLink && (
                  <div style={backLinkWrapper}>
                    <ArrowBackTwoToneIcon />
                    <Link href="" onClick={onBackClick} style={backLinkItem}>
                      Back
                    </Link>
                  </div>
                )}
                <TrackingInfo orderNumber={orderNumber} />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default IndexPage;
