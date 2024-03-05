import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null); // Initialized as null for consistency
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const channelData = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetail(channelData?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet,id&order=date`
      );
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "50px",
            background:
              "linear-gradient(90deg, rgba(33, 2, 77, 1) 0%, rgba(235, 27, 118, 1) 50%, rgba(67, 238, 251, 1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box p={2} display="flex" sx={{ alignContent: "start" }}>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
