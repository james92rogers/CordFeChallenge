import React from "react";
import styled, { css } from "styled-components";

import * as colors from "../../colors";

import SearchBar from "../../components/searchbar";
import SearchIcon from "../../images/search-icon-yellow.png";
import FilterIcon from "../../images/filter-icon.png";
import YearIcon from "../../images/year-icon.png";
import AccordionFilter from "../accordionfilter";

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies,
  screenWidth,
}) {
  const genreList = genres.genres;

  const searchForMovies = (keyword, id) => {
    searchMovies(keyword, id);
  };

  return (
    <FiltersWrapper>
      <SearchFiltersCont className="search_inputs_cont" marginBottom>
        <SearchBar
          id="keyword"
          type="text"
          icon={{ src: SearchIcon, alt: "Magnifying glass" }}
          placeholder="Search for movies"
          onChange={searchForMovies}
        />
        {screenWidth > 600 ? (
          <SearchBar
            id="year"
            type="number"
            icon={{ src: YearIcon, alt: "Calendar icon" }}
            placeholder="Year of release"
            onChange={searchForMovies}
          />
        ) : (
          <FilterIconDiv>
            <img src={FilterIcon} alt="filter icon" />
          </FilterIconDiv>
        )}
      </SearchFiltersCont>
      {screenWidth > 600 && (
        <SearchFiltersCont>
          <CategoryTitle>Movies</CategoryTitle>
          {/* TODO: Complete the "AccordionFilter" component and re-use it for all filter categories */}
          {genreList && (
            <>
              <AccordionFilter label={"Select genre(s)"} list={genreList} />
              <AccordionFilter label={"Select min.vote"} list={ratings} />
              <AccordionFilter label={"Select language"} list={languages} />
            </>
          )}
        </SearchFiltersCont>
      )}
    </FiltersWrapper>
  );
}

const FiltersWrapper = styled.div`
  position: relative;
`;

const SearchFiltersCont = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  .search_bar_wrapper:first-child {
    margin-bottom: 15px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    width: 75vw;
  }

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 15px;
    `}
`;

const CategoryTitle = styled.h3`
  margin: 0 0 15px 0;
`;

const FilterIconDiv = styled.div`
  img {
    border-bottom: 2px solid ${colors.primaryColor};
    width: 30px;
    padding: 8px;
    margin: 0 10px;
  }
`;
