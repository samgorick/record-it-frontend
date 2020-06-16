import React from 'react'
import { Link } from 'react-router-dom'

const SummaryNote = (props) => (
  <div className="item">
    <div className="content">
      <h1 className="header">{props.note.title}</h1>
      <div className="description">
        <p>{props.note.content.slice(0, 40)}{props.note.content.length > 40 ? "..." : ""}</p>
      </div>
      <div className="extra">
        <button className="ui right floated button">
          <Link key={props.note.id} to={`/notes/${props.note.id}`}>
            View
          </Link>
        </button>
        <button className="ui right floated button">
          <Link key={props.note.id} to={`/notes/edit/${props.note.id}`}>
            Edit
          </Link>
        </button>
      </div>
    </div>
  </div>
)

export default SummaryNote