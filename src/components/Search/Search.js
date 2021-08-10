import * as React from 'react';
import * as styles from './search.module.css';
import { Button, TextField, Dialog, DialogActions, DialogContent, Typography } from '@material-ui/core';

const errorMessage = {
  marginTop: '8px',
  fontSize: '12px'
};

const Search = () => {
  const [isError, setError] = React.useState(false);
  const [isModelOpen, setModelOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      setError(false);
      setModelOpen(false);
      setSearchValue('');
    };
  }, []);

  const onSearchValueChange = (event) => {
    setError(false);
    setSearchValue(event.target.value);
  };

  const onTrackClick = () => {
    setError(false);

    if (searchValue) {
      setModelOpen(true);
    } else {
      setError(true);
    }
  };

  const onModelClose = () => {
    setModelOpen(false);
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchForm} autoComplete="off">
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
          error={isError}
          inputRef={inputRef}
          onChange={onSearchValueChange}
        />
        <Button variant="contained" color="primary" onClick={onTrackClick}>
          Track
        </Button>
      </form>
      {isError && (
        <Typography color="error" style={errorMessage}>
          Tracking number is required
        </Typography>
      )}
      <Dialog open={isModelOpen} onClose={onModelClose}>
        <DialogContent>
          <TextField autoFocus margin="dense" id="orderNumber" label="Order Number" type="text" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={onModelClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onModelClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Search;
