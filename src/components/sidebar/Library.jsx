import React, { useState, useEffect } from "react";

const Library = ({ fetchByCategory }) => {
  const [categorys, setCategorys] = useState([]);

  const fetchCategorys = async () => {
    const API_KEY = "c78bc7b8ec55f3dd4bdc0bec579cba83";
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);
    const data = await response.json();
    const genres = data.genres;
    setCategorys(genres);
    console.log(genres);
  };

  useEffect(() => {
    fetchCategorys();
  }, []);

  return (
    <div className="library">
      <h2 className="section-title">Category</h2>
      <ul className="library-nav">
        {categorys.map((category) => (
          <li key={category.id} data-id={category.id} onClick={fetchByCategory}>
            {category.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
