import React, { useEffect, useState } from "react";

import "./search.css";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import SearchResults from "../searchResults/SearchResults";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../logo/Logo";

const Search = ({ placeHolder, type }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState([]);
  const { songs, status } = useSelector((state) => state.song);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  useEffect(() => {
    const query = searchInput.replace(/\s/g, "").toLowerCase();
    filterSongsBySearch(songs, query);
  }, [searchInput]);

  const filterSongsBySearch = (songs, searchInput) => {
    if (searchInput === "") {
      setSearchData([]);
    } else {
      const filteredSongs = songs.filter((song) =>
        song.title.replace(/\s/g, "").toLowerCase().includes(searchInput)
      );
      setSearchData(filteredSongs);
    }
  };
  return (
    <Box
      sx={{
        ...(type === "mobile"
          ? { display: { xs: "block", sm: "none", md: "none" }, width: "100%" }
          : {
              display: { xs: "none", sm: "block", md: "block" },
              width: "50%",
            }),
        position: "relative",
      }}
    >
      <form className="search">
        <input
          className={type === "mobile" ? "search-input-mobile" : "search-input"}
          type="text"
          placeholder={placeHolder}
          onChange={handleChange}
          value={searchInput}
        />
        {type === "mobile" ? (
          searchInput.length > 0 ? (
            <Box className="close-button-mobile">
              <CloseIcon onClick={() => setSearchInput("")} />
            </Box>
          ) : null
        ) : (
          <Box className="close-button">
            {searchInput.length > 0 ? (
              <CloseIcon onClick={() => setSearchInput("")} />
            ) : (
              <img src={"../../assets/Searchicon.svg"} alt="Search Icon" />
            )}
          </Box>
        )}
      </form>
      <SearchResults data={searchData} />
    </Box>
  );
};

export default Search;
