import React from 'react'

export default function MyWork({img,title,desc}) {
    return (
        <div class="text-center">
            <div>
                <img src={img} class="img-fluid" alt="Mobile" />
            </div>
            <div class="mt-2 py-4 mb-70">
                <span class="text-white custom-font">{title}</span><br />
                <a href="#" class="text-decoration-none fs-3 color custom-font">{desc}</a>
            </div>
        </div>
    )
}
