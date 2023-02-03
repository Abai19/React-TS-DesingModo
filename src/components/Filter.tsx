import React, { useState } from "react"
import {  ReactComponent as ArrowIcon } from '../assets/arrow.svg'
import {  ReactComponent as FontSizeIcon } from '../assets/Font_Size.svg'
import {  ReactComponent as LineHeightIcon } from '../assets/Line_Height.svg'
import {  ReactComponent as LetterSpicingIcon } from '../assets/Letter_Spacing.svg'
import {  ReactComponent as PxIcon } from '../assets/px.svg'
import {  ReactComponent as PercentIcon } from '../assets/percent.svg'
import {  ReactComponent as AlignLeftIcon } from '../assets/Align_Left.svg'
import {  ReactComponent as AlignRightIcon } from '../assets/Align_Right.svg'
import {  ReactComponent as AlignCenterIcon } from '../assets/Align_Center.svg'
import {  ReactComponent as AlignJustifyIcon } from '../assets/Align_Justify.svg'
import { HexColorPicker } from "react-colorful";
import { IGlobalStyle } from "../App"
import { toast } from "react-toastify"
import {
    StyledApplyButton, StyledColorBlock, StyledColorBox, StyledColorContainer ,StyledContainerText,
    StyledFonts,StyledFontsContainer,StyledFontSizeContainer,StyledLetterSpacingContainer,StyledLetterSpacingInput,StyledLineContainer,
    StyledLineHeightContainer,StyledLineHeightInput,StyledP, StyledTextPositionContainer, StyledTextPositionSingle, StyledTextSize, StyledTextWeight, 
    StyledTextWeightContainer} from './StyledFilter'
export interface IProps {
    font?: string,
    fontStyle?: string,
    color? : string
}
export interface IActive {
    active: boolean
}
export interface IFilterPr {
    globalStyle : IGlobalStyle,
    setGlobalStyle: React.Dispatch<React.SetStateAction<IGlobalStyle>>,
}
function Filter ({globalStyle,setGlobalStyle } : IFilterPr) {
    const [check,setCheck] = useState({
        font: false,
        fontStyle: false,
        color: false
    })
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const  onChange=(e: React.MouseEvent<HTMLDivElement>)=>{
        const val = e.currentTarget.dataset.value
        const n = e.currentTarget.dataset.name
        if(val)
        setGlobalStyle({
            ...globalStyle,
            [n!]: val
        })
    }
    const handleClick = (index:number, value: string) => {
        setActiveIndex(index === activeIndex ? null : index);
        setGlobalStyle({
            ...globalStyle,
            position: value
        })
      };
    const fonts = ['Fira Sans','Segoe UI', 'Roboto', 'Oxygen','Ubuntu']
    const textWeight = ['Bold','Normal', 'Italic','Underlined']
    //console.log(globalStyle)
    const iconsPosition = [{
        value: "left",
        icon:<AlignLeftIcon/>},
        {
            value: "center",
            icon: <AlignCenterIcon/>},
            {
                value: "right",
                icon:<AlignRightIcon/>},
                {
                    value: "justify",
                    icon:<AlignJustifyIcon/>},
        ]
        function handleSubmit(globalStyle : IGlobalStyle){
            localStorage.setItem('styles', JSON.stringify(globalStyle))
            toast.success('Succesfully saved')
        }
   
    return (
        <>
            <StyledP>TEXT</StyledP>
            <StyledFontsContainer onClick={()=>setCheck({...check, font: !check.font})}> 
                {globalStyle.font}
                <ArrowIcon/>
                <StyledFonts font={check.font ? "block" : "none"}>
                    {fonts.map((item,index)=>(
                        <div key={index} data-name="font" data-value={item} onClick={onChange} >{item}</div>
                    ))}
                </StyledFonts>
            </StyledFontsContainer>
           <StyledContainerText>
           <StyledTextWeightContainer onClick={()=>setCheck({...check, fontStyle: !check.fontStyle})}>
               {globalStyle.fontStyle}
               <ArrowIcon/>
               <StyledTextWeight fontStyle={check.fontStyle ? "block" : "none"} >
                   {textWeight.map((item,index)=>(
                           <div key={index} data-name="fontStyle" data-value={item} onClick={onChange} >{item}</div>
                   ))}
               </StyledTextWeight>
           </StyledTextWeightContainer>
           <StyledFontSizeContainer> 
               <FontSizeIcon/>
               <StyledTextSize value={globalStyle.fontSize} onChange={(v: React.ChangeEvent<HTMLInputElement>)=> setGlobalStyle({...globalStyle, fontSize: v.target.value})}/>
           </StyledFontSizeContainer>
           </StyledContainerText>

           <StyledColorContainer onClick={()=>setCheck({...check, color: !check.color})}>
            <StyledColorBlock color={globalStyle.color}/>
            {globalStyle.color}
            <ArrowIcon/>
            <StyledColorBox color={check.color ? "block" : "none"}>
                <HexColorPicker  color={globalStyle.color} onChange={(color)=> setGlobalStyle({...globalStyle, color:color})}/>
            </StyledColorBox>
           </StyledColorContainer>
                <StyledLineContainer>
                    <StyledLineHeightContainer>
                        <LineHeightIcon/>
                        <StyledLineHeightInput value={globalStyle.lineHeight} onChange={(v: React.ChangeEvent<HTMLInputElement>)=> setGlobalStyle({...globalStyle, lineHeight: v.target.value})}/>
                        <PercentIcon/>
                    </StyledLineHeightContainer>
                    <StyledLetterSpacingContainer>
                        <LetterSpicingIcon/>
                        <StyledLetterSpacingInput value={globalStyle.letterSpacing} onChange={(v: React.ChangeEvent<HTMLInputElement>)=> setGlobalStyle({...globalStyle, letterSpacing: v.target.value})}/>
                        <PxIcon/>
                    </StyledLetterSpacingContainer>
                  
                </StyledLineContainer>
            
                <StyledTextPositionContainer>
                    {
                        iconsPosition.map((icon,index)=>(
                            <StyledTextPositionSingle key={index} active ={icon.value === globalStyle.position} onClick={() => handleClick(index, icon.value)}> {icon.icon}</StyledTextPositionSingle>
                        ))
                    }
                </StyledTextPositionContainer>
                <StyledApplyButton onClick={()=> handleSubmit(globalStyle)}> Apply Changes</StyledApplyButton>
        </>
    )
}
export default Filter