import React, { useContext } from 'react';
import { GameContext } from '../../context/GameContext/GameContext';
import Box from '../Box/Box';
import './GameBoard.css';

export default function GameBoard() {
  const { board } = useContext(GameContext);

  return (
    board.map((box) => (
      <div className='game-board' key={box.id}><Box /></div>
    )));
}
