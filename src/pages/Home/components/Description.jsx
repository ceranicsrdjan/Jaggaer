import React from "react";
import { Typography } from "@mui/material";
import "../styles/home.scss";

const Descrription = ({ data }) => {
  return (
    <div className="desctriptionDiv">
      <Typography className="mainTitle">DESCRIPTION</Typography>
      <Typography className="descriptionText">
        {data.article.description_long}
      </Typography>
    </div>
  );
};

export default Descrription;
