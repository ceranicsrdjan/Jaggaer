import React from "react";
import { Typography, Divider, Box, Link } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import attachmentIcon from "../../../assets/icons/attachment.svg";

const Deatils = ({ data }) => {
  return (
    <div className="deatilsPricingDiv">
      <Typography className="mainTitle">DETAILS</Typography>
      <Divider />
      <Box className="featuresDiv">
        <Typography className="overviewText">Features</Typography>
        {Object.entries(data.article.features).map((item, key) => {
          return (
            <Box className="featureRowDiv" key={key}>
              <FiberManualRecordIcon
                style={{ width: "20px", padding: "0px 10px 5px 0px" }}
              />
              <Typography className="overviewText">{item[0] + ":"}</Typography>
              <Typography className="featureText">{item[1]}</Typography>
            </Box>
          );
        })}
      </Box>
      <Box>
        <Typography className="overviewText">Attachments</Typography>
        {data.article.attachments.map((item, key) => {
          return (
            <Box className="fileNameDiv" key={key}>
              <img src={attachmentIcon} className="attachmentIcon" />
              <Link href={item.file_link} underline="none">
                {item.file_label}
              </Link>
            </Box>
          );
        })}
      </Box>
      <Box className="featuresDiv">
        <Typography className="overviewText">Keywords</Typography>
        <Box className="keywordRow">
          {data.article.keywords.map((item, key) => {
            return (
              <Typography className="keywords" key={key}>
                {item}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default Deatils;
