import React, { useState } from "react";
import Filters from "../cmps/Filters/Filters";
import AppHeader from "../cmps/AppHeader/AppHeader";
import CharactersList from "../cmps/CharactersList/CharactersList";

const Home = () => {
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [query, setQuery] = useState("");
  return (
    <main>
      <AppHeader />

      <Filters
        setGenderFilter={setGenderFilter}
        setStatusFilter={setStatusFilter}
        setCurrentPage={setCurrentPage}
        setQuery={setQuery}
      />
      <CharactersList
        gender={genderFilter}
        status={statusFilter}
        currentPage={currentPage}
        query={query}
      />
    </main>
  );
};

export default Home;
