import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { BrowserRouter as Router } from "react-dom";
import Cart from "./Cart";

import {
  AppBar,
  Toolbar,
  Link,
  ListItem,
  IconButton,
  ListItemText,
  Paper,
  InputBase,
  Divider,
  List,
  Badge,
  Box,
} from "@material-ui/core";
import {
  Menu,
  FavoriteBorder,
  ShoppingCart,
  Person,
  Settings,
  Search,
  AccountCircle,
  SentimentSatisfied,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    height: "100vh",
    backgroundColor: "#e6e6e6",
    paddingTop: 100,
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
  // menui slid
  const slideList1 = (slider) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={props.toggleSlider1(slider, false)}
    >
      <Divider />
      <List>
        {props.menuList.map((elem, index) => (
          <ListItem key={index} button>
            <Link>{elem}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // carti slid
  const cartList = (slider2) => (
    <Box
      className={classes.menuSliderContainer}
      component="div"
      onClick={props.toggleSlider2(slider2, false)}
    >
      <Divider />
      <List>
        {props.cartProducts.map((elem, index) => (
          <ListItem key={index} button>
            <Cart
              src={`${props.img}`}
              alt={props.titel}
              description={props.description}
              price={props.price}
              id={props.id}
              value={props.value}
              onSubmit={props.onsubmit}
              increment={props.increment}
              decrement={props.decrement}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar position="static">
        <Toolbar style={{ display: "grid" }}>
          <div>
            <IconButton onClick={props.toggleSlider1(`right`, true)}>
              <Menu className={classes.menu} />
            </IconButton>
            <MobilRightMenuSlider
              anchor="left"
              open={props.right}
              onClose={props.toggleSlider1(`right`, false)}
            >
              {slideList1(`right`)}
            </MobilRightMenuSlider>
          </div>
          <div>
            <Paper
              component="form"
              className={classes.root}
              onSubmit={props.onsubmit}
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
            <IconButton onClick={props.toggleSlider2(`left`, true)}>
              <Badge color="secondary" badgeContent={props.cartNumber} showZero>
                <ShoppingCart />
              </Badge>
            </IconButton>
            <MobilRightMenuSlider
              anchor="right"
              open={props.left}
              onClose={props.toggleSlider2(`left`, false)}
            >
              {cartList(`left`)}
            </MobilRightMenuSlider>
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
