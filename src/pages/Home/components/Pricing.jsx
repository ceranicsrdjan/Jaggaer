import React from "react";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Typography, Divider, Box } from "@mui/material";

const Pricing = ({ data }) => {
  return (
    <div className="deatilsPricingDiv">
      <Typography className="mainTitle">PRICING & SHIPPING</Typography>
      <Divider />
      <Box className="featuresDiv">
        <Box className="keywordRow">
          <FiberManualRecordIcon
            style={{ width: "20px", padding: "0px 10px 5px 0px" }}
          />
          <Typography className="overviewText">Minimum order: </Typography>{" "}
          <Typography className="featureText">
            {data.article.minimum_order_quantity}
            {data.article.unit}
          </Typography>
        </Box>
        <Box className="keywordRow">
          <FiberManualRecordIcon
            style={{ width: "20px", padding: "0px 10px 5px 0px" }}
          />
          <Typography className="overviewText">Shipping: </Typography>{" "}
          <Typography className="featureText">
            {data.article.transport_costs}
            {data.article.currency}
          </Typography>
        </Box>
        <Box className="keywordRow">
          <FiberManualRecordIcon
            style={{ width: "20px", padding: "0px 10px 5px 0px" }}
          />
          <Typography className="overviewText">Delivery: </Typography>{" "}
          <Typography className="featureText">
            {data.article.delivery_time}
            days
          </Typography>
        </Box>
      </Box>
      <Box className="priceBreakDiv">
        <Typography className="overviewText">Price breaks</Typography>
        <Divider />
        {Object.entries(data.article.price_breaks).map((item, key) => {
          return (
            <div key={key}>
              <Box className="priceBreakDivItem">
                <Typography className="priceBreaksText">
                  ex {item[0]}
                  {data.article.currency}
                </Typography>
                <Typography className="priceBreaksText">
                  {item[1]}
                  {data.article.currency}/{data.article.unit}
                </Typography>
              </Box>
              <Divider />
            </div>
          );
        })}
      </Box>
    </div>
  );
};

export default Pricing;
