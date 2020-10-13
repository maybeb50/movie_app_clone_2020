import React, { component } from 'react';
import Proptype from 'prop-types';

function Movie({ id, title, year, summary, poster }) {
    return <h1>{ title }</h1>;
}

Movie.proptype = {
    id: Proptype.number.isRequired,
    year: Proptype.number.isRequired,
    title: Proptype.string.isRequired,
    summary: Proptype.string.isRequired,
    poster: Proptype.string.isRequired,
    rating: Proptype.number,
};

export default Movie;

