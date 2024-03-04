import React from "react";
import { Link } from "react-router-dom";
import { Typography, Box, CardMedia, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => (
  <Box
    sx={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      maxWidth: { xs: "356px", md: "320px" },
      height: "326px",
      margin: "auto",
      mt: 2,
    }}
  >
    <Link
      to={`/channel/${channelDetail?.id?.channelId || "defaultChannel"}`}
      style={{ textDecoration: "none", color: "#fff" }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <CardMedia
          component="img"
          image={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title || "Channel Title"}
          sx={{
            borderRadius: "50%",
            height: 180,
            width: 180,
            mb: 2,
            border: "1px solid #f4f44",
            margin: "auto",
          }}
        />
        <Typography variant="h6" gutterBottom>
          {channelDetail?.snippet?.title}
          <CheckCircleIcon sx={{ color: "#a3a4a4", ml: 1, fontSize: 16 }} />
        </Typography>
        {channelDetail?.statistics?.subscriberCount && (
          <Typography variant="body2" color="text.secondary">
            {Number(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;
