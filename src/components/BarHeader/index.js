import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import BarSearch from '../BarSearch';
import BarView from '../BarView';

import Logo from '../../assets/images/logo-tmdbflix.png';

const useStyles = makeStyles(() => ({
   
   //plocation: {
     //color: '#808080',
     //[theme.breakpoints.down('xs')]: {
     //  flexDirection: 'column',
     //},
   //},

   header: {
      height: '360px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#999999',
   },

   logo: {
      height: '8rem',
      padding: '1rem 3rem',
      objectFit: 'cover',
      objectPosition: 'center',
   },
 }));

function HeaderBar(){
   const classes = useStyles();
   
   return (
      <div className={classes.header}>
         <div >
            <img className={classes.logo} src={Logo} alt="TMDB Flix logo"/>
         </div>
         <div>
            <BarSearch />
         </div>
         
      </div>
   );
};

export default HeaderBar;