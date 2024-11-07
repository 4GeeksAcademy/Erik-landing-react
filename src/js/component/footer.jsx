import React from "react";

import footerl from "../../img/Footerl.jpg"


const Footer = () => {

    return (
        <nav class="bg-dark height-footer border-top border-primary mt-4 px-3 d-flex justify-content-between">
            <div class="d-flex image-l p-1">
            <img src={footerl}/>
            </div>
            <div>
                <p class="navbar-brand mb-0 text-light height-footer font-monospace pad">Game creator: CAPCOM | @copyright | Made with 🖤 by Erik</p>
            </div>
            <div class="d-flex image-r p-1">
            <img src={footerl}/>
            </div>
        </nav>
    )


}

export default Footer