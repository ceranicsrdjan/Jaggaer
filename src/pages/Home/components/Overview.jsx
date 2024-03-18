import React from "react";
import {
  Box,
  Typography,
  Link,
  Rating,
  TextField,
  Button,
} from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import packageIcon from "../../../assets/icons/package.svg";
import iconAdd from "../../../assets/icons/add.svg";
import discountIcon from "../../../assets/icons/discount.svg";
import "../styles/home.scss";

const Overview = ({ data, changeNumber, numberItems, addToCart }) => {
  return (
    <Box className="overviewDiv">
      <Box className="firstColumnOverview">
        <Box className="imageFirstBoxDiv">
          <img src={packageIcon} className="iconn" />
        </Box>
        <Box className="imageBoxDiv">
          <img src={packageIcon} className="iconn" />
        </Box>
      </Box>
      <Box className="secondColumn">
        <Box>
          <Box className="imageBoxDivLarge">
            <img src={packageIcon} className="iconBoxLarge" />
          </Box>
        </Box>
      </Box>
      <Box className="thirdColumn">
        <Box>
          <Typography className="overviewTitle">
            {data.article.title}
            {/* lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllhhhhhhhhhhhhhhhhh */}
          </Typography>
          <Typography className="overviewText">
            by{" "}
            <Link href={data.article.supplier_link} underline="none">
              {data.article.supplier_name}
            </Link>
          </Typography>
          <Rating name="read-only" value={parseInt(3)} readOnly />
          <ArrowDropDownIcon />
          <Box style={{ display: "flex" }}>
            <Typography className="overviewTitle">
              {data.article.price} {data.article.currency}
            </Typography>
            <Typography className="overviewText">
              {" "}
              + {data.article.transport_costs} {data.article.currency} shipping
            </Typography>
            <img src={discountIcon} className="discountImg" />
          </Box>
          <Typography className="overviewText">
            all prices incl. {data.article.vat_percent} % texes
          </Typography>
        </Box>
        <Box>
          <Box className="keywordRow">
            <TextField
              variant="outlined"
              value={numberItems}
              InputProps={{ inputProps: { min: 0 } }}
              type="number"
              onChange={(e) => changeNumber(e)}
            />
            <Typography className="pceText">PCE</Typography>
            <Button
              variant="contained"
              className="addButton"
              onClick={() => addToCart()}
              disabled={numberItems == ""}
            >
              <img src={iconAdd} className="iconAdd" />
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Overview;
