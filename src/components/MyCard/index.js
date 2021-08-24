import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MovieTitle from '../../assets/styles/MovieTitle';
import mainImage from '../../assets/images/mockup-card.jpg';

const useStyles = makeStyles({
  myCard: {

    width: '460px',
    marginTop: '20px',
    textAlign: 'center',

    backgroundColor:'#999999',
    borderRadius: '1rem',
  },

  myDate: {
    fontFamily: 'Roboto',
    fontSize: '26pt',
    fontStyle: 'italic',
    color: '#404040',

    padding: '1rem',
  }
  
});

function MyCard( {id, movieName} ) {

  const classes = useStyles();
  //const detail = `details/${movie.uid}`;
  const detail = '/more'
  return (
    <div className={classes.myCard} >
      <Link style={{ textDecoration: 'none', padding: 0, borderRadius: '1rem' }} to={detail}>
        <img
          src={mainImage}
          alt="Poster Movie"
          id="imageExample"
          style={{ width: '100%' ,borderRadius: '1rem' }}
        />
      
      <MovieTitle>{movieName}</MovieTitle>
      <h3 className={classes.myDate}>10-10-2022</h3>
      </Link>

      <IconButton aria-label="add to favorites">
        <FavoriteIcon style={{ height: '3.4rem', width:'3.4rem' }}/>
      </IconButton>
    </div>
  );
}

export default MyCard;
