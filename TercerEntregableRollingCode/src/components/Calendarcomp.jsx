import { useEffect, useRef, useState } from 'react'
import { Calendar } from "react-date-range"
import format from "date-fns/format"

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Calendarcomp = () => {


  // date state
const  [calendar, Setcalendar] = useState('')

// open close
const [open, setOpen] =useState(false)

const refOne = useRef(null)

useEffect(() => {
  
  Setcalendar(format(new Date, 'MM/dd/yyyy'))
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


// on date change, store date in state
const handleSelect = (date) => {
// console.log(date)
// console.log(format(date, 'MM/dd/yyyy'))
Setcalendar(format(date, 'MM/dd/yyyy'))
}

  return (
    <div className='calendarWrap'>

      <input 
      value={ calendar }
      readOnly
      className='inputBox'
      onclick={() => setOpen(open => !open) }
      />


      <div ref={refOne}>

      {open &&
    <Calendar 
    date={ new Date () }
    onChange = { handleSelect }
    className='calendarElement'
    />
      }
    </div>
    </div>
  )
}

export default Calendarcomp