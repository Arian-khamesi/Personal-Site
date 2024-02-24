import React from 'react'

export default function ServiceBox({icon,title,desc}) {
    return (
        <div class="col-12 col-md-6 col-lg-4 px-3">
            <div class="py-5 px-4 mx-auto text-center custom-border max-w">
                <img src={icon} alt="icon" />
                <h3 class="fs-4 mt-4 mb-3 color custom-font">{title}</h3>
                <p class="text-white custom-font">{desc}</p>
            </div>
        </div>
    )
}
