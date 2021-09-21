import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import McLarenCarImg from "../../../assets/images/mclaren-orange-big.png"
import BlobImg from "../../../assets/images/blob.svg"
import { SCREENS } from '../../components/responsive'
import Button from '../../components/button'




const TopsectionContainer = styled.div`
min-height: 80vh;
margin-top: 6em;
    ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    pl-3
    pr-3
    lg:pl-12
    lg:pr-12
    `}
`;


const LeftContainer = styled.div`
 ${tw`
    w-1/2
    flex
    flex-col
    `}
`

const RightContainer = styled.div`
 ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
    `}
`

const Slogan = styled.h1`
 ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug 
    lg:leading-normal
    xl:leading-relaxed
`}
`
const Description = styled.p`
 ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
    `}
`

const BlobContainer = styled.div`
width: 20rem;
height: 10rem;
position: absolute;
right: -5rem;
top: -9rem;
z-index: -1;
transform: rotate(-30deg);

    img{ 
        width: 100%;
        height: auto;
        max-height: max-content;
    }
    @media (min-width: ${SCREENS.sm}){
        width: 40em;
        max-height: 10em;
        right: -9em;
        top: -16em;
        transform: rotate(-25deg);
    }
    @media (min-width: ${SCREENS.lg}){
        width: 50em;
        max-height: 10em;
        right: -7em;
        top: -15em;
        transform: rotate(-30deg);
    }
    @media (min-width: ${SCREENS.xl}){
        width: 70em;
        max-height: 30em;
        right: -15em;
        top: -25em;
        transform: rotate(-20deg);
    }
`;

const StandaloneCar = styled.div`
width: auto;
height: 10em;
position: absolute;
right: -6rem;
top: -5rem;
    img{ 
        width: auto;
        height: 100%;
        max-width: fit-content;
    }
    @media (min-width: ${SCREENS.sm}){
        height: 16em;
        right: -6em;
        top: -6em;
    }
    @media (min-width: ${SCREENS.lg}){
        height: 21em;
        right: -8em;
        top: -5em;
    }
    @media (min-width: ${SCREENS.xl}){
        height: 30em;
        right: -13em;
        top: -9em;
    }
`;

const ButtonsContainer = styled.div`
${tw`
    flex
    mt-4
    flex-wrap
`}
`

 function Topsection() {
    return (
        <TopsectionContainer>
            <LeftContainer>
                <Slogan>Get The best Cars</Slogan>
                <Description>
                    Get the best affordable Car from our local stores or order if remotely at the best price for you and get the best quality cars for as long as you like
                </Description>
                <ButtonsContainer>
                <Button text="Book your ride"/>
                <Button theme="filled" text="Sell your Car"/>
                </ButtonsContainer>

            </LeftContainer>
            <RightContainer>
                <BlobContainer>
                    <img src={BlobImg}  />
                </BlobContainer>
                <StandaloneCar>
                    <img src={McLarenCarImg} />
                </StandaloneCar>
            </RightContainer>
        </TopsectionContainer>
    )
}

export default Topsection