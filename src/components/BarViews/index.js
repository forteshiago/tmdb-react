import React from 'react';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles({
  root: {
    width: '95%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  setor: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      backgroundColor: '#5416B4',
      color: 'white',
      padding: '2rem 3.5rem',
      textDecoration: 'none',
      fontFamily: 'Roboto',
      borderRadius: '1rem',
      borderStyle: 'none',
      fontSize: '30pt',
      fontWeight: 'bold',
  },
  icon: {
      fontSize: '40pt',
  }
});
export default function IconLabelTabs() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <Link to='/trending' className={classes.setor}><WhatshotIcon className={classes.icon}/>Trending</Link>
    <Link to='/favorite' className={classes.setor}><FavoriteIcon className={classes.icon}/>Favorite</Link>
    <Link to='/more' className={classes.setor}><MoreIcon className={classes.icon}/>More</Link>
    </div>
  );
}
