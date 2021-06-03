import React from 'react';
import { Button } from 'react-bootstrap';

function PokeButton(props) {
  return (
    <Button className="btn-dex" variant="danger">
      {props.data}
    </Button>
  );
}

export default PokeButton;
