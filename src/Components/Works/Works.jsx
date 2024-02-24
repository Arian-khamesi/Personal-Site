import React from 'react'
import MyWork from '../MyWork/MyWork'

export default function Works() {
    return (
        <div class="w-100 fourth-bg">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12">
                        <h3 class="text-white fs-1 custom-font">My Works</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <MyWork img={"images/work1.webp"} title={"Front End"} desc={"Colorlib App Project"}/>
                        <MyWork img={"images/work2.webp"} title={"Java Script"} desc={"Colorlib App Project"}/>
                    </div>
                    <div class="col-md-6">
                    <MyWork img={"images/work3.webp"} title={"React Js"} desc={"Colorlib App Project"}/>
                    <MyWork img={"images/work4.webp"} title={"Next Js"} desc={"Colorlib App Project"}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="custom-border2">
                            <a href="#" class="w-100 h-100 d-block text-center text-decoration-none py-3 px-5 color more-work custom-font">More Works</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
