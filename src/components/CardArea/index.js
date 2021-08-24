import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import api from '../../Services/api';
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
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    api.get('').then(({ data }) => {
      setResults(data.results);
    });
  }, []);
  
  return (
    <div className={classes.root}>
    { results.map( movie => (
        <MyCard key={movie.id} id={movie.id} movieName={movie.original_title} />
    ))}
    </div>
  );
}

export default CardArea;
