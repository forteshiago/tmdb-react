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

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  
  useEffect(() => {
    api.get('').then(({ data }) => {
      setResults(data.results);
    });
  }, []);

  const sortedResults = results.sort((a, b) => b.vote_average - a.vote_average);
  
  return (
    <div className={classes.root}>
    { sortedResults.map( movie => (
        <MyCard 
          key={movie.id}
          id={movie.id}
          movieName={movie.original_title}
          poster={IMG_URL+movie.backdrop_path}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
        />
    ))}
    </div>
  );
}

export default CardArea;
