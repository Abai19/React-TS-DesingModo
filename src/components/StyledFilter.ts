import styled from 'styled-components';
import { IActive, IProps } from './Filter';

export const StyledP = styled.p`
color: #788994;
`
export const StyledContainer = styled.div`
display:flex;
font-size: 11px;
`
export const StyledFontsContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
background: #FFFFFF;
border: 1px solid #E8ECF0;
border-radius: 4px;
padding: 10px;
cursor: pointer;
display: flex;
position: relative;
justify-content: space-between;
align-items:center;
margin-bottom: 10px;
// svg {
//     transform: translateY(-50%) rotate(180deg);
// }
`
export const StyledArrow = styled.div`
transform: translateY(-50%) rotate(180deg);
`

export const StyledFonts =styled.div<IProps>`
display: ${props =>props.font};
position: absolute;
top: 50px;
background: #FFFFFF;
z-index: 2;
box-shadow: 0px 4px 9px 0px rgba(34, 60, 80, 0.2);
width: 100%;
div{
    width: 100%;
    margin-bottom: 10px;
    padding: 4px
    }
}
`

export const StyledTextWeightContainer = styled.div`
background: #FFFFFF;
border: 1px solid #E8ECF0;
border-radius: 4px;
padding: 10px;
width: 80%;
cursor: pointer;
display: flex;

position: relative;
justify-content: space-between;
align-items:center;
// div{
//     display: flex; 
//     justify-content: space-between;
//     align-items:center;
// }
`

export const StyledTextWeight =styled.div<IProps>`
display: ${props => props.fontStyle};
position: absolute;
top: 50px;
background: #FFFFFF;
z-index: 2;
box-shadow: 0px 4px 9px 0px rgba(34, 60, 80, 0.2);
width: 100%;
div{
    width: 100%;
    margin-bottom: 5px;
    padding: 4px
    }
}
`
export const StyledTextSize = styled.input.attrs({type:"text"}) `
    display: block;
    width: 100%;
    // border: 1px solid #e8ecf0;
    border:none;
    //border-radius: 4px;
    padding: 10px;
    background: 0 0;
    text-align: right;
    text-overflow: ellipsis;
    width: 20px;
    &:focus {
        outline: none;
    }
`
export const StyledFontSizeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    gap: 5px;
    border: 1px solid #E8ECF0;
    svg{
        margin-left: 5px;
    }
`
export const StyledContainerText = styled.div `
    display:flex;
    margin-bottom: 10px;
    
`
export const StyledColorContainer = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    gap: 5px;
    border: 1px solid #E8ECF0;
    svg{
        margin-left: 5px;
    }
`
export const StyledColorBlock = styled.div `
    width: 18px;
    height: 18px;
    border-radius: 3px;
    background-color: ${(props) => props.color}
`
export const StyledColorBox = styled.div<IProps> `
        display: ${props =>props.color};
        position: absolute;
        top: 50px;
        
        //background: #FFFFFF;
        z-index: 2;
        box-shadow: 0px 4px 9px 0px rgba(34, 60, 80, 0.2);
        //width: 100%;
        
       
`
export const StyledLineContainer = styled.div`
        display: flex;
        margin-bottom: 10px;
`
export const StyledLineHeightInput = styled.input.attrs({type:"text"}) `
    display: block;
    width: 100%;
    // border: 1px solid #e8ecf0;
    border:none;
    //border-radius: 4px;
   // padding: 10px;
    
    background: 0 0;
     text-align: right;
    text-overflow: ellipsis;
    width: 30px;
    &:focus {
        outline: none;
    }
`
export const StyledLetterSpacingInput = styled.input.attrs({type:"text"}) `
    display: block;
    width: 100%;
    // border: 1px solid #e8ecf0;
    border:none;
    //border-radius: 4px;
   // padding: 10px;
    
    background: 0 0;
     text-align: right;
    text-overflow: ellipsis;
    width: 30px;
    &:focus {
        outline: none;
    }
`
export const StyledLineHeightContainer = styled.div`
        display: flex;
        align-items: center;
        width: 50%;
        border: 1px solid #E8ECF0;
        border-radius: 4px;
        padding: 10px;
        position: relative;
        svg:not(:first-child){
            position: absolute;
            right: 0;
            top: 10px;
        }
`
export const StyledLetterSpacingContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        border: 1px solid #E8ECF0;
        border-radius: 4px;
        padding: 10px;
        position: relative;
`

export const StyledTextPositionContainer = styled.div`
        display: flex;
        justify-content: space-around;
        border: 1px solid #E8ECF0;
        border-radius: 4px;
        margin-bottom: 10px;
        //padding: 10px;
        div {
            padding: 10px 25px 10px 10px;
            //padding: 10px 20px;
            align-items: center;
            text-align: center;
            cursor: pointer;
        }
        div:not(:last-child) {
            border-right: 1px solid #E8ECF0;
        }
        @media (max-width: 1400px) {
           div{
            padding: 10px 20px 10px 10px;
           }
        }
        @media (max-width: 1170px) {
            div{
             padding: 10px 15px 10px 10px;
            }
         }
`
export const StyledTextPositionSingle = styled.div<IActive>`
        display:flex;
        justify-content: center;
        text-align: center;
        svg g rect {
            fill: ${props => (props.active ? '#2198ED' : '#AAB2BB')};
        }
        #2198ED
`

export const StyledApplyButton = styled.button `
        background: #27AE60;
        border-radius: 4px;
        font-size: 14px;
        line-height: 16px;
        width: 100%;
        color: #FFFFFF;
        padding: 15px 20px;
        border: none;
        cursor: pointer;
        font-weight: bold;
        &:hover {
            background: #299055;
        }
`