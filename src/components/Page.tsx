import { IGlobalStyle } from "../App"
import styled from 'styled-components'
import { IFilterPr } from "./Filter";
import React from "react";

const PageContent = styled.div<IGlobalStyle>`
        color: ${props=>    props.color };
        font-size: ${props=>  props.fontSize  }px;
        font-weight: ${props=> props.fontStyle ==='Bold' ?"bold" : ""};
        font-style: ${props=> props.fontStyle ==='Italic' ?"italic" : "normal"};
        text-decoration: ${props=> props.fontStyle ==='Underlined' ?"underline" : ""};
        font-family: ${props=> props.font} , sans-serif ;
        line-height: ${props=> props.lineHeight}%;
        letter-spacing: ${props=> props.letterSpacing}px;
       text-align: ${props=> props.position};
`
function Page ({globalStyle,setGlobalStyle } : IFilterPr) {
    function handleChange(event: React.ChangeEvent<HTMLDivElement>){
        setGlobalStyle({...globalStyle, text: event.target.textContent!})
    }
    return(
        <PageContent {...globalStyle}  contentEditable suppressContentEditableWarning={true} onBlur={handleChange}>
            {globalStyle.text}
        </PageContent>
    )

}
export default Page