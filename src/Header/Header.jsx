import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  InputBase,
  Badge,
} from "@material-ui/core";
import {
  Menu,
  FavoriteBorder,
  ShoppingCart,
  Person,
  Settings,
  Search,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    height: "100vh",
    backgroundColor: "#e6e6e6",
    paddingTop: 130,
    fontSize: "1em",
  },
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    maxWidth: 600,
    background: "null",
    borderRadius: "40px",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    background: "null",
    padding: " 0 30px",
  },
  iconButton: {
    padding: "10px",
    marginRight: "30px",
  },
}));

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: "grid" }}>
          <div ref={props.wrapper}>
            <IconButton>
              <Menu className={classes.menu} />
            </IconButton>
          </div>
          <div>
            <Paper
              component="form"
              className={classes.root}
              onSubmit={props.onSubmit}
            >
              <InputBase
                className={classes.input}
                placeholder="Search "
                inputProps={{ "aria-label": "search " }}
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Paper>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton>
              <FavoriteBorder />
            </IconButton>
            <IconButton>
              <Badge color="secondary" badgeContent={props.cartNumber} showZero>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton>
              <Person />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
