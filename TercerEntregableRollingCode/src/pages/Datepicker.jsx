import React from 'react'
// import Calendarcomp from '../components/Calendarcomp.jsx'
import DateRangeComp from '../components/DateRangeComp.jsx' 
// import DateRangePickerComp from '../components/DateRangePickerComp.jsx'

const Datepicker = () => {
  return (
    <div className='App'>
        <h4>date Select</h4>
        {/* <Calendarcomp/> */}
        <br /><br />
        <hr />

        <h4 className='text-center'>Selecciona tu turno</h4>
        <DateRangeComp/>
        <input type="datetime-local" />
 
        <br /><br />
        <hr />
        {/* <DateRangePickerComp/> */}
        
        </div>
        
  )
}

export default Datepicker