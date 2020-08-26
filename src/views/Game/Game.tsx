import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';

import { fetchPeople } from '../../app/peopleSlice';
import { fetchStarships } from '../../app/starshipsSlice';
import PersonCard from '../../components/PersonCard/PersonCard';
import ScoreCounter from '../../components/ScoreCounter/ScoreCounter';

const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeople());
    dispatch(fetchStarships());
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item xs={6}>
        <PersonCard
          name="C-3PO"
          eyeColor="yellow"
          hairColor="n/a"
          mass="75"
          height="167"
          skinColor="gold"
        />
        <ScoreCounter value={3} />
      </Grid>
      <Grid item xs={6}>
        <PersonCard
          name="C-3PO"
          eyeColor="yellow"
          hairColor="n/a"
          mass="75"
          height="167"
          skinColor="gold"
        />
        <ScoreCounter value={4} />
      </Grid>
    </Grid>
  );
};

export default Game;
