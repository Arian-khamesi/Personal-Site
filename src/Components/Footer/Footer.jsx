import React from 'react'
import Contact from '../Contact/Contact'

export default function Footer() {
    return (
        <div class="w-100 sixth-bg">
            <div class="container">
                <div class="row m-90">
                    <div class="col-lg-8">
                        <h3 class="text-white fs-1 mb-4 custom-font">Do you have any Project? <a href="#" class="text-decoration-none color custom-font">Let’s Talk</a></h3>
                        <p class="text-white custom-font">Sed eleifend sed nibh nec fringilla. Donec eu cursus sem, vitae tristique ante. Cras pretium rutrum egestas. Integer ultrices libero sed justo vehicula, eget tincidunt tortor tempus.</p>
                    </div>
                </div>
                <div class="row">
                    <Contact title={"Behance"} icon={"bi-behance"} />
                    <Contact title={"Dribble"} icon={"bi-dribbble"} />
                    <Contact title={"Medium"} icon={"bi-medium"} />
                    <Contact title={"Linkedin"} icon={"bi-linkedin"} />
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <p class="text-center copy custom-font">Copyright ©2022 All rights reserved | This template is made with by <a href="https://colorlib.com/" class="text-decoration-none color custom-font">Colorlib</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
