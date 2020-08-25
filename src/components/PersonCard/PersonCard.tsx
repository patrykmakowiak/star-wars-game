/* eslint-disable camelcase */
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles({
  card: {
    maxWidth: 250,
  },
});

type Props = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
};

const PersonCard = ({
  name, height, mass, hairColor, skinColor, eyeColor,
}: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2" gutterBottom>
          {t('Person.Name')}
          {' '}
          {name}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Person.Height')}
          {' '}
          {height}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Person.HairColor')}
          {' '}
          {hairColor}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Person.SkinColor')}
          {' '}
          {skinColor}
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          {t('Person.EyeColor')}
          {' '}
          {eyeColor}
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          {t('Person.Mass')}
          {' '}
          {mass}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
