/* eslint-disable camelcase */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';

import PersonCard from '../../components/PersonCard/PersonCard';
import StarshipCard from '../../components/StarshipCard/StarshipCard';
import ScoreCounter from '../../components/ScoreCounter/ScoreCounter';
import useGame from './useGame';
import { selectScore } from '../../store/scoreSlice';
import {
  Step,
  Player,
  TypeCard,
} from '../../types';

const useStyles = makeStyles({
  countersWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  cardWrapper: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
});

const Game = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const {
    selectedTypeCard,
    winner,
    drawnPeopleCards,
    drawnStarshipsCards,
    handleSelectPeople,
    handleSelectStarship,
    step,
    handleChangeStep,
  } = useGame();
  const { scorePlayerA, scorePlayerB } = useSelector(selectScore);

  return (
    <>
      {step === Step.START && (
      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={handleChangeStep(Step.SELECT_RESOURCE)}
      >
        {t('Game.Start')}
      </Button>
      )}
      {step === Step.SELECT_RESOURCE && (
        <>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSelectStarship}
          >
            {t('Game.SelectStarships')}
          </Button>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleSelectPeople}
          >
            {t('Game.SelectPeople')}
          </Button>
        </>
      )}
      {step === Step.SELECT_WINNER && (
      <>
        <div className={classes.countersWrapper}>
          <ScoreCounter value={scorePlayerA} />
          <ScoreCounter value={scorePlayerB} />
        </div>
        <Alert severity="info">
          {winner === Player.A && t('GameStatus.WonPlayerA')}
          {winner === Player.B && t('GameStatus.WonPlayerB')}
          {winner === Player.BOTH && t('GameStatus.Draw')}
        </Alert>
        {TypeCard.People === selectedTypeCard && drawnPeopleCards && (
        <div className={classes.cardWrapper}>
          <PersonCard
            name={drawnPeopleCards?.playerA?.name || ''}
            eyeColor={drawnPeopleCards?.playerA?.eye_color || ''}
            hairColor={drawnPeopleCards?.playerA?.hair_color || ''}
            mass={drawnPeopleCards?.playerA?.mass || ''}
            height={drawnPeopleCards?.playerA?.height || ''}
            skinColor={drawnPeopleCards?.playerA?.skin_color || ''}
          />
          <PersonCard
            name={drawnPeopleCards?.playerB?.name || ''}
            eyeColor={drawnPeopleCards?.playerB?.eye_color || ''}
            hairColor={drawnPeopleCards?.playerB?.hair_color || ''}
            mass={drawnPeopleCards?.playerB?.mass || ''}
            height={drawnPeopleCards?.playerB?.height || ''}
            skinColor={drawnPeopleCards?.playerB?.skin_color || ''}
          />
        </div>
        )}
        {TypeCard.Starships === selectedTypeCard && drawnStarshipsCards && (
        <div className={classes.cardWrapper}>
          <StarshipCard
            name={drawnStarshipsCards?.playerA?.name || ''}
            cargoCapacity={drawnStarshipsCards?.playerA?.cargo_capacity || ''}
            costInCredits={drawnStarshipsCards?.playerA?.cost_in_credits || ''}
            crew={drawnStarshipsCards?.playerA?.crew || ''}
            hyperdriveRating={drawnStarshipsCards?.playerA?.hyperdrive_rating || ''}
          />
          <StarshipCard
            name={drawnStarshipsCards?.playerB?.name || ''}
            cargoCapacity={drawnStarshipsCards?.playerB?.cargo_capacity || ''}
            costInCredits={drawnStarshipsCards?.playerB?.cost_in_credits || ''}
            crew={drawnStarshipsCards?.playerB?.crew || ''}
            hyperdriveRating={drawnStarshipsCards?.playerB?.hyperdrive_rating || ''}
          />
        </div>
        )}
        <div className={classes.buttonWrapper}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={handleChangeStep(Step.SELECT_RESOURCE)}
          >
            {t('Game.PlayAgain')}
          </Button>
        </div>
      </>
      )}
    </>
  );
};

export default Game;
