import React from "react";

const PageLayout = ({header,children,footer}) =>{


    return(
        <div>
            <h1>{header}</h1>
            <h6>{children}</h6>
            <h3>{footer}</h3>
        </div>
    )
}