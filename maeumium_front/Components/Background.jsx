import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div `
    width: 390px;
    height: 100vh;
    background-image: url('../image/MainBackground.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

function Background ({children}) {
    return (
        <BackgroundImage>
            {children}
        </BackgroundImage>
    )
}
export default Background;