import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';



export default function RelatedMovie({relatedMovie}) {
  console.log(relatedMovie);
  
  return (
        <Thumbnail src={URL_IMG+IMG_SIZE_SMALL+relatedMovie.poster_path} alt={relatedMovie.title}>
          <p>{relatedMovie.title}</p>
        </Thumbnail>

  );
}

RelatedMovie.propTypes = {
  relatedMovie: React.PropTypes.shape({
    poster_path: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  })
};
