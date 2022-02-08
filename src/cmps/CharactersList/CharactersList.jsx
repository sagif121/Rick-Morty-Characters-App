import React, { useEffect, useState } from "react";
import "./CharactersList.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import Model from "../model/model";

const CharactersList = ({ gender, status }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [modalCharacter, setModalCharacter] = useState(null);
  const [showModel, setShowModel] = useState(false);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}&gender=${gender}&status=${status}`
        );

        setCharacters(res.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getCharacters();
  }, [query, page, gender, status]);

  const handlePageClick = (data) => {
    const currentPage = data.selected + 1;
    setPage(currentPage);
  };

  const openModel = (user) => {
    setModalCharacter(user);
    setShowModel(!showModel);
  };

  return (
    <section>
      <Model
        showModel={showModel}
        setShowModel={setShowModel}
        user={modalCharacter}
      ></Model>

      <div className="table">
        <form className="example">
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
        </form>
      </div>
      <div className="table-wrapper-scroll-y my-custom-scrollbar ">
        <table className="table table-bordered table-striped mb-0 ">
          <thead className="tr">
            <tr>
              <th scope="row">Avatar</th>
              <th scope="row">Name</th>
              <th scope="row">Origin</th>
              <th scope="row">Status</th>
              <th scope="row">Species</th>
              <th scope="row">Gender</th>
            </tr>
          </thead>
          <tbody>
            {characters &&
              characters.length > 0 &&
              characters.map((user) => (
                <tr key={user.id} onClick={() => openModel(user)}>
                  <th>
                    <img
                      src={user.image}
                      alt="Avatar"
                      style={{ width: "50px", height: "40px" }}
                    />
                  </th>
                  <td> {user.name}</td>
                  <td>{user.origin.name}</td>
                  <td>{user.status}</td>
                  <td>{user.species}</td>
                  <td>{user.gender}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={"previos"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={42}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      ></ReactPaginate>
    </section>
  );
};

export default CharactersList;
