import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

import {
  demoVideoTitle,
  demoChannelTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={`/video/${videoId || "cV2gBU6hKfY"}`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title || "Video title"}
        sx={{ height: 180 }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#2C2C2C", height: "96px" }}>
      <Link
        to={`/video/${videoId || "cV2gBU6hKfY"}`}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="subtitle1"
          color="#fff"
          fontWeight="bold"
          gutterBottom
        >
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={`/channel/${snippet?.channelId || "defaultChannelId"}`}
        style={{ textDecoration: "none" }}
      >
        <Typography
          variant="subtitle2"
          color="gray"
          display="flex"
          alignItems="center"
        >
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: 12, ml: 0.5 }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
