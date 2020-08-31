import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';

import Game from './views/Game/Game';
import { fetchPeople, selectPeople } from './store/peopleSlice';
import { fetchStarships, selectStarships } from './store/starshipsSlice';

const useStyles = makeStyles({
  app: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

const App = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { error: errorPeople, loading: loadingPeople } = useSelector(selectPeople);
  const { error: errorStarships, loading: loadingStarships } = useSelector(selectStarships);

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchStarships());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      {(loadingPeople || loadingStarships) && (<CircularProgress />)}
      {(errorPeople || errorStarships) && (t('Error.FetchData'))}
      {!loadingPeople && !loadingStarships && !errorPeople && !errorStarships
      && (<Game />)}
    </div>
  );
};

export default App;
