import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.error('Error fetching shows:', error));
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <ul>
        {shows.map(show => (
          <li key={show.show.id}>
            <h3>{show.show.name}</h3>
            <p>{show.show.network ? `Network: ${show.show.network.name}` : 'Network: N/A'}</p>
            <Link to={`/details/${show.show.id}`}>
              <button>Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
