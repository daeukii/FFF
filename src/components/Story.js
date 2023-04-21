import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'


export default function Story() {
  return (
    <div>
        <h1>StoryList</h1>
        <Link to='Apple' className="apple">appleStory</Link>
        <Link to='Orange' className="orange">orangeStory</Link>
        <Link to='Peach' className="peach">peachStory</Link>
        <Outlet/>
    </div>
  )
}
