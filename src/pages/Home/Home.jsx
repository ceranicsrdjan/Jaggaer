import React, { useState, useEffect } from "react";
import {
  Fade,
  Badge,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useScrollTrigger,
  Divider,
  CssBaseline,
} from "@mui/material";

import data from "../../data/data.json";
import favoriteIcon from "../../assets/icons/favorite.svg";
import factIcon from "../../assets/icons/facts-soft.svg";
import cartIcon from "../../assets/icons/cart.svg";
import iconAdd from "../../assets/icons/add.svg";

import Overview from "./components/Overview";
import Description from "./components/Description";
import Deatils from "./components/Details";
import Pricing from "./components/Pricing";

import "./styles/home.scss";

const Home = () => {
  const [cart, setCart] = useState(data.cart);
  const [numberItems, setNumberItems] = useState("");
  const [element, setElement] = useState([]);

  useEffect(() => {
    let elementNew = document.getElementsByName("praa");
    setElement(elementNew);
  }, []);

  const changeNumber = (e) => {
    setNumberItems(e.target.value);
  };

  const addToCart = () => {
    let newCart = cart;
    newCart.items += parseInt(numberItems);
    newCart.total_costs += parseInt(numberItems) * data.article.price;
    setCart(newCart);
    setNumberItems("");
    // alert(`${numberItems} items added to cart`);
  };

  const hasShadow = () => {
    return element[0]?.offsetHeight < window.innerHeight;
  };

  return (
    <div name="praa">
      <CssBaseline />
      <AppBar className={hasShadow() ? "header" : "headerShadow"}>
        <Toolbar className={hasShadow() ? "headerDiv" : "headerDivShadow"}>
          <Typography className="titleHeader">{data.article.title}</Typography>
          <Box className="iconsDiv">
            <ScrollTop
              addToCart={addToCart}
              changeNumber={changeNumber}
              numberItems={numberItems}
            />
            <img src={favoriteIcon} className="favoriteIcon" />
            <img src={factIcon} className="factIcon" />
            <Divider orientation="vertical" />
            <Badge badgeContent={cart?.items}>
              <img src={cartIcon} className="cartIcon" />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <div>
        <Overview
          data={data}
          changeNumber={changeNumber}
          numberItems={numberItems}
          addToCart={addToCart}
        />
        <div className="homeDescDetailDiv">
          <Description data={data} />
          <div className="homeDetailsPricingDiv">
            <Deatils data={data} />
            <Pricing data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollTop = (props) => {
  const trigger = useScrollTrigger({
    threshold: 400,
  });

  return (
    <Fade in={trigger} style={!trigger && { width: "0px" }}>
      <Box className="textBoxDiv">
        <TextField
          variant="outlined"
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          value={props.numberItems}
          onChange={(e) => props.changeNumber(e)}
        />
        <Typography className="pceText">PCE</Typography>
        <Button
          variant="contained"
          className="addButton"
          onClick={() => props.addToCart()}
          disabled={props.numberItems == ""}
        >
          <img src={iconAdd} className="iconAdd" />
          Add to cart
        </Button>
      </Box>
    </Fade>
  );
};

export default Home;
