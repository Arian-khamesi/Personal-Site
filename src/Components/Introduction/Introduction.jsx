import React from 'react'

export default function Introduction() {
  return (
    <div class="w-100 second-bg py-90">
      <div class="container">
        <div class="row">
          <div class="col-xl-10 mb-4 mb-md-5">
            <h3 class="text-white mb-3 text-start fs-1 custom-font">I’m a Creative director based on sanandaj, who loves clean, simple & unique design. I also enjoy crafting </h3>
          </div>
          <div class="col-12 col-md-6 mb-5">
            <p class="text-white text-start my-4 custom-fonnt">Proin laoreet elementum ligula, ac tincidunt lorem accumsan nec. Fusce eget urna ante. Donec massa velit, varius a accumsan ac, tempor iaculis massa. Sed placerat justo sed libero varius vulputate. Ut a mi tempus massa malesuada fermentum. </p>
            <p class="text-white text-start mb-4 custom-font">Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget </p>
            <a href="#" class="mt-5 d-block text-decoration-none py-3 px-5 custom-link custom-font">Download CV</a>
          </div>
          <div class="col-12 col-md-6 col-lg-5 offset-lg-1 max-width px-3">
            <div class="mb-3 d-flex justify-content-between">
              <span class="text-white custom-font">Wireframing</span>
              <span class="text-white custom-font">78%</span>
            </div>
            <div class="progress mb-4 prog-h">
              <div class="progres-bar prog"></div>
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <span class="text-white custom-font">UI/UX</span>
              <span class="text-white custom-font">75%</span>
            </div>
            <div class="progress mb-4 prog-h">
              <div class="progres-bar w-75 prog"></div>
            </div>
            <div class="mb-3 d-flex justify-content-between">
              <span class="text-white custom-font">Interaction design</span>
              <span class="text-white custom-font">50%</span>
            </div>
            <div class="progress mb-4 prog-h">
              <div class="progres-bar w-50 prog"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
