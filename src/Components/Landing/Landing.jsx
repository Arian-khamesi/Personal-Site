import React from 'react'

export default function Landing() {
  return (
    <div class="container h-100 px-0">
        <div class="row d-flex justify-content-center h-100">
          <div class="col-10 col-lg-8 d-lg-inline-block align-self-center px-0">
              <h2 class="mb-5 text-white custom-h2 custom-font">Hi There, I Am Arian<br/><span class="color custom-font">Creative Director</span></h2>
              <a href="#" class="border border-1 px-5 py-3 text-decoration-none color custom-btn2 custom-font">View Works</a>
          </div>
          <div class="d-none d-lg-inline-block col-4 align-self-center  img-div">
            <img src="images/arian.png" class="img-fluid w-100 h-100 rounded-circle" alt=""/>
          </div>
        </div>
      </div>
  )
}
