import * as React from 'react';
import * as styles from './search.module.css';
import { Button, TextField, Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const errorMessage = {
  marginTop: '8px',
  fontSize: '12px'
};

const Search = ({ onDisplayTrackingInfo, onOrderNumber }) => {
  const [isErrorOnSearch, setErrorOnSearch] = React.useState(false);
  const [isErrorOnOrderNumber, setErrorOnOrderNumber] = React.useState(false);
  const [isModelOpen, setModelOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [orderNumber, setOrderNumber] = React.useState('');
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      setErrorOnSearch(false);
      setErrorOnOrderNumber(false);
      setModelOpen(false);
      setSearchValue('');
      setOrderNumber('');
    };
  }, []);

  const onSearchValueChange = (event) => {
    setErrorOnSearch(false);
    setSearchValue(event.target.value);
  };

  const onTrackClick = () => {
    setErrorOnSearch(false);

    if (searchValue) {
      setModelOpen(true);
    } else {
      setErrorOnSearch(true);
    }
  };

  const onTrackKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onTrackClick();
    }
  };

  const onOrderNumberChange = (event) => {
    setOrderNumber(event.target.value);
    onOrderNumber(event.target.value);
  };

  const onModelCloseCancel = () => {
    setErrorOnOrderNumber(false);
    setModelOpen(false);
  };

  const onModelCloseOk = () => {
    setErrorOnOrderNumber(false);

    if (orderNumber) {
      setModelOpen(false);
      onDisplayTrackingInfo();
    } else {
      setErrorOnOrderNumber(true);
    }
  };

  const onOrderNumberKeydown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onModelCloseOk();
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchForm}>
        <TextField
          id="searchTextField"
          variant="outlined"
          placeholder="Enter tracking number"
          type="search"
          autoFocus
          fullWidth
          inputProps={{ maxLength: 50 }}
          InputProps={{
            className: styles.inputWrapper
          }}
          error={isErrorOnSearch}
          inputRef={inputRef}
          onChange={onSearchValueChange}
          onKeyDown={onTrackKeyDown}
          autoComplete="off"
        />
        <Button variant="contained" color="primary" onClick={onTrackClick}>
          Track
        </Button>
      </div>
      {isErrorOnSearch && (
        <Typography color="error" style={errorMessage}>
          Tracking number is required
        </Typography>
      )}
      <Dialog open={isModelOpen} onClose={onModelCloseCancel}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="orderNumber"
            label="Order Number"
            type="text"
            fullWidth
            onChange={onOrderNumberChange}
            onKeyDown={onOrderNumberKeydown}
            error={isErrorOnOrderNumber}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onModelCloseCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={onModelCloseOk} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

Search.propTypes = {
  onDisplayTrackingInfo: PropTypes.func,
  onOrderNumber: PropTypes.func
};

export default Search;
