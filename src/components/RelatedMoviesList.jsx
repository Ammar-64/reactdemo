import React from 'react'
import RelatedMovie from './RelatedMovie'
import { Col, Row } from 'react-bootstrap'
import styled from 'styled-components';
import {Link} from 'react-router';
import {URL_MOVIE, API_KEY} from '../const'

export default function RelatedMoviesList({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
    let relatedmovies = data.map(function(relatedmovie) {
      if(relatedmovie.id != null) {
        return(
          <div>           
              <Col xs={4} sm={3} md={2} key={relatedmovie.id} >
                <StyledLink to={"/movie/" + relatedmovie.id} ><RelatedMovie relatedMovie={relatedmovie} /></StyledLink>
              </Col>        
          </div>
          
        );
     }
    });
   
    

    return(
      <div>
        <h3>Related Movies</h3>
        <Row>
        {relatedmovies}
        </Row>
      </div>
    );
}