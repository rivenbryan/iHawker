/**
 * React component that displays a randomly recommended food from the list of hawker stores.
 *
 * @component
 */
import { Typography, Link } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { HawkerContext } from '../../../context/HawkerContext';

/**
 * @typedef {Object} RandomFood
 * @property {string} stall_name - The name of the hawker store.
 */

/**
 * React component that displays a randomly recommended food from the list of hawker stores.
 *
 * @returns {JSX.Element} The React component.
 */
export default function RecFood() {
  const [randomFood, setRandomFood] = useState('');

  const { hawkerStores } = useContext(HawkerContext);

  useEffect(() => {
    setRandomFood(hawkerStores[Math.floor(Math.random() * hawkerStores.length)]);
  }, []);

  console.log(randomFood);

  return (
    <>
      <Typography variant="subtitle2"> {randomFood.stall_name}</Typography>
    </>
  );
}
