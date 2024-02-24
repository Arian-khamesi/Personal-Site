import React from 'react'

export default function Contact({title,icon}) {
    return (
        <div class="col-12 col-md-3">
            <div class="py-4 d-flex justify-content-between align-items-center px-custom custom-border icon-cell">
                <span class="text-white custom-span custom-font">{title}</span>
                <a href="#"><i class={`bi ${icon} icon`}></i></a>
            </div>
        </div>
    )
}
