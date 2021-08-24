import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MovieTitle from '../../assets/styles/MovieTitle';

const useStyles = makeStyles({
  myCard: {
    width: '460px',
    marginTop: '20px',
    textAlign: 'center',

    backgroundColor:'#b2b2b2',
    borderRadius: '1rem',
  },
  myDate: {
    fontFamily: 'Roboto',
    fontSize: '26pt',
    fontStyle: 'italic',
    color: '#404040',

    padding: '1rem',
  },

  footerCard: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  score: {
    backgroundColor: '#008000',
    padding: '0.6rem',
    borderRadius:'0.8rem',


    fontFamily: 'Roboto',
    fontSize: '26pt',
    fontWeight: 'bold',
    color: '#404040',

  }
  
});

function MyCard( {movieName, poster, releaseDate, voteAverage} ) {

  const classes = useStyles();
  //const detail = `details/${movie.uid}`;
  const detail = '/more';

  const ratedColor = voteAverage < 4 ? '#ff0d0d' : voteAverage < 7 ? '#ff8e15' : '#69b34c';

  return (
    <div className={classes.myCard} >
      <Link style={{ textDecoration: 'none', padding: 0, borderRadius: '1rem' }} to={detail}>
        <img
          src={poster}
          alt="Poster Movie"
          id="imageExample"
          style={
            {
              width: '100%',
              borderRadius: '1rem' 
            }
          }
        />
      
      <MovieTitle>{movieName}</MovieTitle>
      <h3 className={classes.myDate}>{releaseDate}</h3>
      </Link>
      
      <div className={classes.footerCard} >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ height: '3.4rem', width:'3.4rem' }}/>
        </IconButton>
        <h3 className={classes.score}
          style={{ backgroundColor: ratedColor }}
        >
          {voteAverage}
        </h3>
      </div>
    </div>
  );
}

export default MyCard;
