import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.error('Error fetching show details:', error));
  }, [id]);

  return (
    <div>
      <h1>Show Details</h1>
      {show ? (
        <>
          <h2>{show.name}</h2>
          <p>{show.summary}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
