import React from 'react'
import "./Header.css"
import Topbar from '../../Components/Topbar/Topbar'
import Landing from '../../Components/Landing/Landing'

export default function Main() {
  return (
    <div class="w-100 first-bg">
        <Topbar/>
        <Landing/>
    </div>

  )
}
