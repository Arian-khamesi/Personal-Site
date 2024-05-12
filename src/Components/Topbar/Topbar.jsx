import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark custom-nav custom-back">
    <div class="container-fluid">
      <a class="navbar-brand fs-1 color custom-font" href="#">Arian</a>
      <button class="navbar-toggler border-dark bgmenu" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <div>
            <span class="text-white custom-font color">Menu</span>
            <span class="navbar-toggler-icon"></span>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 vb">
          <li class="nav-item ms-lg-4 ms-xxl-5">
            <a class="nav-link link-hover color custom-font" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item ms-lg-4 ms-xxl-5">
            <a class="nav-link link-hover color custom-font" href="#">Works</a>
          </li>
          <li class="nav-item ms-lg-4 ms-xxl-5">
            <a class="nav-link link-hover color custom-font" href="#">Services</a>
          </li>
          <li class="nav-item ms-lg-4 ms-xxl-5 dropdown">
            <a class="nav-link dropdown-toggle custom-drop link-hover color custom-font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              pages
            </a>
            <ul class="dropdown-menu custom-menu" aria-labelledby="navbarDropdown">
              <li><Link class="dropdown-item" to="/persian">persion version</Link></li>
              <li><a class="dropdown-item" href="#">Work Details</a></li>
            </ul>
          </li>
          <li class="nav-item ms-lg-4 ms-xxl-5">
            <a class="nav-link link-hover color custom-font" href="#">About</a>
          </li>
          <li class="nav-item ms-lg-4 ms-xxl-5 dropdown">
            <a class="nav-link dropdown-toggle custom-drop link-hover color custom-font" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Blog
            </a>
            <ul class="dropdown-menu custom-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">Single-blog</a></li>
            </ul>
          </li>
          <li class="nav-item ms-lg-4 ms-xxl-5">
            <a class="nav-link link-hover color custom-font" href="#">Contact</a>
          </li>
        </ul>
        <form class="d-flex d-none d-lg-block">
          <Link class="btn custom-btn color custom-font" type="submit" to={"/persian"}>فارسی</Link>
        </form>
      </div>
    </div>
  </nav>
  )
}
