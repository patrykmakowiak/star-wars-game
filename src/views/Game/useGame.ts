/* eslint-disable default-case */
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPeople } from '../../store/peopleSlice';
import { selectStarships } from '../../store/starshipsSlice';
import { incrementScorePlayerA, incrementScorePlayerB, incrementScoreBothPlayer } from '../../store/scoreSlice';

import {
  Step,
  Person,
  Starship,
  Player,
  TypeCard,
} from '../../types';
import { randCard, unifyCrew, unifyMass } from '../../utils/index';

type DrawnPeopleCards = {
  playerA: null | Person;
  playerB: null | Person;
};

type DrawnStarshipsCards = {
  playerA: null | Starship;
  playerB: null | Starship;
};

type Winner = null | Player.A | Player.B | Player.BOTH;

type SelectedTypeCard = null | TypeCard.People | TypeCard.Starships;

type Steps = Step.SELECT_RESOURCE | Step.SELECT_WINNER | Step.START;

const useGame = () => {
  const dispatch = useDispatch();
  const { starships } = useSelector(selectStarships);
  const { people } = useSelector(selectPeople);
  const [step, setStep] = useState<Steps>(Step.START);
  const [selectedTypeCard, setSelectedTypeCard] = useState<SelectedTypeCard>(null);
  const [drawnPeopleCards, setDrawnPeopleCards] = useState<DrawnPeopleCards>({
    playerA: null,
    playerB: null,
  });
  const [drawnStarshipsCards, setDrawnStarshipsCards] = useState<DrawnStarshipsCards>({
    playerA: null,
    playerB: null,
  });
  const [winner, setWinner] = useState<Winner>(null);

  const handleChangeStep = useCallback(
    (nextStep: Steps) => () => setStep(nextStep), [],
  );

  const handleSelectPeople = useCallback((): void => {
    setSelectedTypeCard(TypeCard.People);
    const indexCardPlayerA = randCard(people.length);
    const indexCardPlayerB = randCard(people.length);
    const peopleA = people[indexCardPlayerA];
    const peopleB = people[indexCardPlayerB];
    setDrawnPeopleCards({
      playerA: peopleA,
      playerB: peopleB,
    });
    const massA = unifyMass(peopleA.mass);
    const massB = unifyMass(peopleB.mass);
    if (massA === massB) {
      dispatch(incrementScoreBothPlayer());
      setWinner(Player.BOTH);
    } else if (massA > massB) {
      dispatch(incrementScorePlayerA());
      setWinner(Player.A);
    } else {
      dispatch(incrementScorePlayerB());
      setWinner(Player.B);
    }
    setStep(Step.SELECT_WINNER);
  }, [dispatch, people]);

  const handleSelectStarship = useCallback((): void => {
    setSelectedTypeCard(TypeCard.Starships);
    const indexCardPlayerA = randCard(starships.length);
    const indexCardPlayerB = randCard(starships.length);
    const starshipA = starships[indexCardPlayerA];
    const starshipB = starships[indexCardPlayerB];
    setDrawnStarshipsCards({
      playerA: starshipA,
      playerB: starshipB,
    });
    const crewA = unifyCrew(starshipA.crew);
    const crewB = unifyCrew(starshipB.crew);
    if (crewA === crewB) {
      dispatch(incrementScoreBothPlayer());
      setWinner(Player.BOTH);
    } else if (crewA > crewB) {
      dispatch(incrementScorePlayerA());
      setWinner(Player.A);
    } else {
      dispatch(incrementScorePlayerB());
      setWinner(Player.B);
    }
    setStep(Step.SELECT_WINNER);
  }, [dispatch, starships]);

  return {
    drawnPeopleCards,
    handleSelectPeople,
    drawnStarshipsCards,
    handleSelectStarship,
    winner,
    selectedTypeCard,
    step,
    handleChangeStep,
  };
};

export default useGame;
