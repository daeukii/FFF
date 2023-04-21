import React from 'react'
import { Link } from 'react-router-dom'
import './css.css';

export default function Main() {
  return (
    <div>
        <Link to='/Home' className="home">Home</Link>
        <Link to='/Story' className="story">Story</Link>
        <hr/>
    </div>
  )
}
