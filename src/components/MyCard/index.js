import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import MovieTitle from '../../assets/styles/MovieTitle';

// Modal

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

// Modal

const useStyles = makeStyles((theme) => ({
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

  },
  // modal
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  modDesc:{
    padding: '2rem',
    fontFamily: 'Roboto',
    fontSize: '30pt',
    color: '#404040',
    textAlign: 'center'
  }
  
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function MyCard( {id, movieName, poster, releaseDate, voteAverage, overview} ) {

  const classes = useStyles();
  //const detail = `details/${movie.uid}`;

  const ratedColor = voteAverage < 4 ? '#ff0d0d' : voteAverage < 7 ? '#ff8e15' : '#69b34c';

  // modal
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
  // modal

  return (
    <>
    <div className={classes.myCard} >
      <Link 
        onClick={handleClickOpen}
        style={{ textDecoration: 'none', padding: 0, borderRadius: '1rem' }}
        to='#'
        >
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

    <div>
      
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <img
          src={poster}
          alt="Poster Movie"
          id="imageExample"
          style={
            {
              width: '100%',
            }
          }
        />
      
      <MovieTitle style={{ fontSize: '50pt', textAlign: 'center' }} >
        {movieName}
      </MovieTitle>
      <h3 className={classes.modDesc}>{releaseDate}</h3>
      <p className={classes.modDesc}>{overview}</p>
      
    </Dialog>
    </div>
    </>
  );
}

export default MyCard;
