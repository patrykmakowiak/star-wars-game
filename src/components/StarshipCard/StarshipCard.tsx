import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
});

type Props = {
  name: string;
  costInCredits: string;
  crew: string;
  cargoCapacity: string;
  hyperdriveRating: string;
}

const StarshipCard = ({
  name, costInCredits, crew, cargoCapacity, hyperdriveRating,
}: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('Starship.Name')}
          {' '}
          {name}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Starship.CostInCredits')}
          {' '}
          {costInCredits}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Starship.CargoCapacity')}
          {' '}
          {cargoCapacity}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Starship.HyperdriveRating')}
          {' '}
          {hyperdriveRating}
        </Typography>
        <Typography variant="h5" component="p">
          {t('Starship.Crew')}
          {' '}
          {crew}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StarshipCard;
