import React from 'react';
import { PropTypes } from 'prop-types';

const PropTypesTrial = (props) => {
  return (
    <div>
      <p>Student Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};

PropTypesTrial.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};

export default PropTypesTrial;