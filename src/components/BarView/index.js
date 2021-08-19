import React from 'react';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  setor: {
    fontSize: '20pt',
  },
  icon: {
      fontSize: '40pt',
  }
});

export default function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
        <Tab className={classes.setor} icon={<WhatshotIcon className={classes.icon}/>} label="TRENDING" />
        <Tab className={classes.setor} icon={<FavoriteIcon className={classes.icon}/>} label="FAVORITES" />
        <Tab className={classes.setor} icon={<MoreIcon className={classes.icon}/>} label="MORE" />
      </Tabs>
    </Paper>
  );
}
