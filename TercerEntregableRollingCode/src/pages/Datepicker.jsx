import React from 'react'
import Calendarcomp from '../components/Calendarcomp.jsx'
import DateRangeComp from '../components/DateRangeComp.jsx' 
import DateRangePickerComp from '../components/DateRangePickerComp.jsx'

const Datepicker = () => {
  return (
    <div className='App'>
        <h4>Recat date Select</h4>
        <Calendarcomp/>
        <br /><br />
        <hr />

        <h4>Recat Date Range Select</h4>
        <DateRangeComp/>
 
        <br /><br />
        <hr />

        <h4>React range Date picker</h4>
        <DateRangePickerComp/>
        
        </div>
        
  )
}

export default Datepicker