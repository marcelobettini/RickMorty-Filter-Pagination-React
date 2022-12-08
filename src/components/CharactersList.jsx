import Character from './Character';
import React from 'react';
import { Row } from 'react-bootstrap';

export default function CharactersList({ characters }) {
  console.log("CharactersList mounted");
  return (
    <Row className='justify-content-evenly gap-3'>
      {characters.map(ch =>
        <Character ch={ch} key={ch.id} />
      )}
    </Row>
  );
}
