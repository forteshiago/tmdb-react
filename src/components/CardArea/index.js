import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import MyCard from '../MyCard';

const useStyles = makeStyles({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
  }
});

function CardArea() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
     <MyCard />
     <MyCard />
     <MyCard />
     <MyCard />
     <MyCard />
     <MyCard />
     <MyCard />
    </div>
  );
}

export default CardArea;
