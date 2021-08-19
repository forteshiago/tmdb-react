import React from "react";

import { makeStyles } from '@material-ui/core/styles';

import Logo from "../../assets/images/logo-tmdbflix.png";
import Avatar from "../../assets/images/profile-mockup.png";

const useStyles = makeStyles(() => ({
   
   //plocation: {
     //color: '#808080',
     //[theme.breakpoints.down('xs')]: {
     //  flexDirection: 'column',
     //},
   //},

   logo: {
      height: '8rem',
      padding: '1rem 3rem',
      objectFit: 'cover',
      objectPosition: 'center',
   },
   avatar: {
      height: '8rem',
      padding: '1rem 3rem',
      borderRadius: '100%',
   },
 }));

function HeaderBar(){
   const classes = useStyles();
   
   return (
      <header>
         <div >
            <img className={classes.logo} src={Logo} alt="TMDB Flix logo"/>
         </div>
         <div>
            <img className={classes.avatar} src={Avatar} alt="Avatar Image"/>
         </div>
      </header>
   );
};

export default HeaderBar;