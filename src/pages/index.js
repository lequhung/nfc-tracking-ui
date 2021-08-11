import * as React from 'react';
import Search from '../components/Search/Search';
import TrackingInfo from '../components/TrackingInfo/TrackingInfo';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import { Link } from '@material-ui/core';

const searchWrapper = {
  margin: 'auto',
  maxWidth: '700px',
  marginTop: '30vh'
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
      {!isLoading && (
        <>
          {!showTracking && (
            <div style={searchWrapper}>
              <Search onDisplayTrackingInfo={() => setShowTracking(true)} onOrderNumber={setOrderNumber} />
            </div>
          )}
          {showTracking && (
            <div>
              {showBackLink && (
                <div style={backLinkWrapper}>
                  <ArrowBackTwoToneIcon />
                  <Link href="" onClick={onBackClick} style={backLinkItem}>
                    Back
                  </Link>
                </div>
              )}
              <TrackingInfo orderNumber={orderNumber} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default IndexPage;
