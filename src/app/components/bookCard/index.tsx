import React, { useState } from 'react'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Button from '../button'
import Marginer from '../marginer/index'
import Calendar from 'react-calendar'
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { SCREENS } from '../responsive'

const CardContainer = styled.div`
min-height: 4.3rem;
box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-6
    md:pr-6
`
}
`
const ItemContainer = styled.div`
${tw`
flex relative
`}
`

const Icon = styled.span`
${tw`
text-red-500
fill-current
text-xs
md:text-base
mr-1
md:mr-3
`}
`
const Name = styled.span`
${tw`
 text-gray-600
 text-xs
 md:text-sm
 cursor-pointer
 select-none
`}
`
const LineSeparator = styled.span`
width: 2px;
height: 45%;
${tw`
 bg-gray-300
 mr-2
 ml-2 
 md:mr-5
 md:ml-5
`}
`
const SmallIcon = styled.span`
${tw`
text-gray-700
fill-current
text-xs
md:text-base
ml-1 
`}
`

const DateCalender = styled(Calendar)`
 position: absolute;
 top: 2em;
 left: 0em;
 width: 380px;
 max-width: none;
 z-index: 1000;
 background-color: white;
 border: 2px solid whitesmoke;
 border-radius: 5px;
 user-select: none;
 
 ${({ offset}: any) => offset && css`
    left: -6rem;
 `}

 @media (min-width: ${SCREENS.md}) {
     top: 3.5em;
     lefft: -2em;
 }
`as any;

const BookCard = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [isStartCalendarOpen, setStartCalendarOpen] = useState(false);
    const [returnDate, setReturnDate] = useState<Date>(new Date());
    const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);
    console.log("The value is", startDate);
    const toggleStartDateCalendar = () => {
        setStartCalendarOpen(!isStartCalendarOpen)
        if(isReturnCalendarOpen) setReturnCalendarOpen(false)
    }
    const toggleReturnDateCalendar = () => {
        setReturnCalendarOpen(!isReturnCalendarOpen)
        if(isStartCalendarOpen) setStartCalendarOpen(false)
    }
    return <CardContainer>
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
        <Name onClick={toggleStartDateCalendar}>Pick Up Date</Name> 
        <SmallIcon>
            <FontAwesomeIcon icon={isStartCalendarOpen ? faCaretUp : faCaretDown}/>
        </SmallIcon>
       {isStartCalendarOpen && <DateCalender value={startDate} onChange={setStartDate as any}/>} 

        </ItemContainer>
        <LineSeparator />
        <ItemContainer>
            <Icon>
                <FontAwesomeIcon icon={faCalendarAlt}/>
            </Icon>
        <Name onClick={toggleReturnDateCalendar}>Return Date</Name> 
        <SmallIcon>
            <FontAwesomeIcon icon={isReturnCalendarOpen ? faCaretUp : faCaretDown}/>
        </SmallIcon>
        {isReturnCalendarOpen && <DateCalender offset={true as any} value={returnDate} onChange={setReturnDate as any}/>} 
        </ItemContainer>
        <Marginer direction="horizontal" margin="2rem"/>
        <Button text="Book your Ride" />
         </CardContainer>
    
}

export default BookCard
