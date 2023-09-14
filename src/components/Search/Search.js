import React, { useEffect, useState } from 'react'
import classes from './Search.module.css'
import { useNavigate, useParams } from 'react-router-dom';

export default function Search() {
  const [term, setTerm]= useState();
  const navigate = useNavigate();
  const {searchTerm} = useParams();

  useEffect(() => {
    setTerm(searchTerm ?? ' ');
  }, [searchTerm]);

  const search = () => {
    term ? navigate('/search/' + term) : navigate('/');
  }

  return (
    <div className={classes.container}>
      <input 
        type='text'
        placeholder='Search Foods ...'
        onChange={e => setTerm(e.target.value)}
        value={term}
      />

      <button onClick={search}>Search</button>
    </div>
  )
}
