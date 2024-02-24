import React from 'react'

export default function Progress({title,percent}) {
    return (
        <>
            <div class="mb-3 d-flex justify-content-between">
                <span class="text-white custom-font">{title}</span>
                <span class="text-white custom-font">{percent}%</span>
            </div>
            <div class="progress mb-4 prog-h">
                <div class={`progres-bar prog w-${percent}`}></div>
            </div>
        </>
    )
}
