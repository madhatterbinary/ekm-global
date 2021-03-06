import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ActorsList = ({ actors }) => (
  <>
    {
    actors.map((actor) => {
      const {
        name, id, height, birthday,
      } = actor;
      return (
        <div key={id} className='container-list'>
          <div className='items'>Name:{name}</div>
          <div className='items'>Id:{id}</div>
          <div className='items'>Height:{height}</div>
          <div className='items'>Birthday:{birthday}</div>
        </div>
      );
    })
    }
  </>
);

ActorsList.propTypes = {
  actors: PropTypes.instanceOf(Array),
};
ActorsList.defaultProps = {
  actors: [],
};

export default ActorsList;
