import React from 'react';
import { connect } from 'react-redux';
import { _createThing } from './store';

const ThingForm = ({ createThing })=> {
  return (
    <div>
      <button onClick={ createThing }>+</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch)=> {
  return {
    createThing: ()=> {
      dispatch(_createThing());
    }
  };
}

export default connect(null, mapDispatchToProps)(ThingForm);
