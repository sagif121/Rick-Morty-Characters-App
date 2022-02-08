import React, { useState } from "react";
import "./Filters.css";

const Filters = ({ setGenderFilter, setStatusFilter }) => {
  const genderOptions = ["Gender", "Male", "Female", "genderless", "Unknown"];
  const statusOptions = ["status", "alive", "dead", "unknown"];

  return (
    <section>
      <div className="filters-containers">
        <select
          className="gender"
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          {genderOptions.map((gender, index) => (
            <option key={index}>{gender}</option>
          ))}
        </select>
        <select
          className="status"
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statusOptions.map((status, index) => (
            <option key={index}>{status}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
