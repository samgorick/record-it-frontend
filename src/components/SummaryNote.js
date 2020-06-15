import React from 'react'

const SummaryNote = (props) => (
  <div>
    <h1>{props.note.title}</h1>
    <p>{props.note.content}</p>
    <button>View</button>
    <button>Edit</button>
  </div>
)

export default SummaryNote