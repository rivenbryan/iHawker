import React from 'react'

export default function Content({filteredList}) {
  
  return (
    <>
    {filteredList && filteredList.map((item) => (
      <li> {item.name_of_centre}</li>
    ))}
    </>
  )
}
