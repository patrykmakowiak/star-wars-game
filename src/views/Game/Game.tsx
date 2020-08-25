import React from 'react';
import Grid from '@material-ui/core/Grid';

import PersonCard from '../../components/PersonCard/PersonCard';
import ScoreCounter from '../../components/ScoreCounter/ScoreCounter';

const Game = () => (
  <Grid container>
    <Grid xs={6}>
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
    <Grid xs={6}>
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

export default Game;
