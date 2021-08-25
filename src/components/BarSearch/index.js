import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import api from '../../Services/finderQuery';
import MyCard from '../MyCard';

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

// Modal

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

// Modal

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    width: "95vw",
    height: "8rem",
    
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize: '30pt',
  },
  iconButton: {
    width: '3em',
    height: '3em',
  },
  // modal
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function CustomizedInputBase() {
  const classes = useStyles();

  let [name, setName] = useState('avengers');
  const [results, setResults] = useState([]);

  let movieSearch = name;

  console.log(name);

  useEffect(() => {
    api.get(`${movieSearch}`).then(({ data }) => {
      setResults(data.results);
    });
  }, []);

  //console.log(results)

  const IMG_URL = 'https://image.tmdb.org/t/p/w500';

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
    <Paper component="form" className={classes.root}>
      <InputBase
        value={name} onChange={(e) => setName(e.target.value)}
        className={classes.input}
        placeholder="Pesquisar"
        inputProps={{ "aria-label": "Pesquisar" }}
      />
      <IconButton
        onClick={handleClickOpen}
        aria-label="search"
      >
        <SearchIcon className={classes.iconButton} />
      </IconButton>
    </Paper>
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      
      { results.map( movie => (
        <MyCard 
          key={movie.id}
          id={movie.id}
          movieName={movie.original_title}
          poster={IMG_URL+movie.backdrop_path}
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          overview={movie.overview}
        />
    ))}
      
    </Dialog>
    </>
  );
}

