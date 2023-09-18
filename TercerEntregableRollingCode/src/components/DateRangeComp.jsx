import { useEffect, useRef, useState } from 'react'
import { DateRange } from "react-date-range"

import format from "date-fns/format"
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const DateRangecomp = () => {


  // date state
const  [range, setRange] = useState([
{
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key:'selection'
}
])


// open close
const [open, setOpen] =useState(false)

const refOne = useRef(null)

useEffect(() => {
  
  document.addEventListener("keydown", hideOnScape, True)
  document.addEventListener("click", hideOnClickOutside, True)
}, [])


// hide dropdown on ESC press
const hideOnEscape = (e) => {
  console.log(e.key)
  if( e.key === "Escape") {
    setOpen(false)
  }

}

const hideOnClickOutside = () => {
  // console.log(refOne.current)
  // console.log(e.target)
  if ( refOne.current && !refOne.current.contains(e.target) ){
    setOpen(false)
  }
}


  return (
    <div className='calendarWrap'>

      <input 
      value={ `${format(range[0].startDate, "MM/dd/yyyy")} to ${format(range[0].endDate, "MM/dd/yyyy")}` }
      readOnly
      className='inputBox'
      onclick={() => setOpen(open => !open) }
      />


      <div ref={refOne}>

      {open &&
    <DateRange 
    onChange={item => setRange([item.selection])}
    editableDateInputs={true}
    moveRangeOnFistSelection={false}
    ranges={range}
    months={1}
    direction="vertical"
    className="calendarElement"
    />
      }
    </div>
    </div>
  )
}

export default DateRangecomp