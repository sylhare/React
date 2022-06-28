import React, {Component} from "react";
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedSnackbars from "./SnackBars";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Inputs = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Input defaultValue="Hello world" inputProps={{ 'aria-label': 'description' }} />
      <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
      <Input defaultValue="Disabled" disabled inputProps={{ 'aria-label': 'description' }} />
      <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
    </form>
  );
}

const MaterialForm = () => {
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
    </FormControl>
  )
}

export default class Forms extends Component {
  render() {
    return (
      <div>
        <Inputs/>
        <MaterialForm/>
        <CustomizedSnackbars/>
      </div>
    );
  }
}
