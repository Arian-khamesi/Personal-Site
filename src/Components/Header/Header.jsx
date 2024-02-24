import React from 'react'
import "./Header.css"
import Topbar from '../Topbar/Topbar'
import Landing from '../Landing/Landing'

export default function Main() {
  return (
    <div class="w-100 first-bg">
        <Topbar/>
        <Landing/>
    </div>

  )
}
