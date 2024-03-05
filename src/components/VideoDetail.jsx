import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack, Grid } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setVideos(data.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box
            sx={{
              width: "100%",
              position: "sticky",
              top: "86px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                position: "relative",
                top: "86px",
                display: "flex",
                justifyContent: "center", // Centers the player
                alignItems: "center",
              }}
            >
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                className="react-player"
                controls
                width="90%"
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                position: "relative",
                top: "86px",
                display: "flex",
                justifyContent: "center", // Centers the player
                alignItems: "center",
              }}
            >
              <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                {title}
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                top: "86px",
                display: "flex",
                justifyContent: "center", // Centers the player
                alignItems: "center",
              }}
            >
              <Stack
                direction="row"
                justifyContent="start"
                sx={{ color: "#fff" }}
                py={1}
                px={5}
              >
                <Link to={`/channel/${channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color="#fff"
                    sx={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {channelTitle}
                    <CheckCircleIcon
                      sx={{
                        fontSize: "12px",
                        color: "#fff",
                        paddingX: "12px",
                      }}
                    />
                  </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(likeCount).toLocaleString()} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Grid>
          <Box
            px={2}
            py={{ md: 1, xs: 4 }}
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "relative",
              top: "86px",
            }}
          >
            <Videos videos={videos} direction="column" />
          </Box>
        </Grid>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
