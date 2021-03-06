import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Actor = ({ actor }) => {
  const {
    name, id, height, birthday,
  } = actor;
  return (
    <div className='container-item'>
      { actor
      && (
      <>
        <div className='item'>Name:{name}</div>
        <div className='item'>Id:{id}</div>
        <div className='item'>Height:{height}</div>
        <div className='item'>Birthday:{birthday}</div>
      </>
      )}
    </div>
  );
};

Actor.propTypes = {
  actor: PropTypes.instanceOf(Object),
};
Actor.defaultProps = {
  actor: {},
};

export default Actor;
