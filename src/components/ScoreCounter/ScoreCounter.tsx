import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    maxWidth: 140,
  },
  content: {
    textAlign: 'center',
  },
});

type Props = {
  value: number;
}

const ScoreCounter = ({ value }: Props) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      <CardContent className={classes.content}>
        <Typography variant="h5" component="h2" gutterBottom>
          {t('ScoreCounter.Score')}
        </Typography>
        <Typography variant="h2" component="p">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ScoreCounter;
