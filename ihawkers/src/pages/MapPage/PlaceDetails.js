/**
* Renders details of a hawker centre
* @param {object} place - An object containing details of a hawker centre
* @returns {JSX.Element} - Rendered component
*/

import React from 'react'

export default function PlaceDetails({place}) {
  return (
    <div>{place.name}</div>
  )
}
