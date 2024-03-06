import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
        setVideos(data.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#1981B9", marginLeft: "10px" }}>
          {searchTerm}
        </span>{" "}
        videos
      </Typography>
      <Box display="flex" sx={{ ml: { sm: "100px" } }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default SearchFeed;
