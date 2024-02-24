import React from 'react'
import ServiceBox from '../ServiceBox/ServiceBox'

export default function Services() {
    return (
        <div class="w-100 third-bg">
            <div class="container">
                <div class="row mb-5">
                    <div class="col-12">
                        <h3 class="text-white custom-font">My Services</h3>
                    </div>
                </div>
                <div class="row">
                    <ServiceBox
                        title={"Web & Mobile Design"}
                        desc={"Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero"}
                        icon={"images/1.svg"}
                    />
                    <ServiceBox
                        title={"Web Development"}
                        desc={"Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero"}
                        icon={"images/2.svg"}
                    />
                    <ServiceBox
                        title={"E-commerce"}
                        desc={"Sed eleifend sed nibh nec fringilla. Donec eu cursus sem vitae tristique ante ibero"}
                        icon={"images/3.svg"}
                    />
                </div>
            </div>
        </div>
    )
}
