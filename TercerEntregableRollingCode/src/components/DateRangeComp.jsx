import React from "react"
import { useEffect, useRef, useState } from 'react'
import { DateRange } from "react-date-range"

import format from "date-fns/format"
import { addDays } from 'date-fns'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file


const DateRangecomp = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // turno seleccionado
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(false);

  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', hideOnEscape, true);
    document.addEventListener('click', hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  };

  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleTurnoSeleccionado = () => {
    setTurnoSeleccionado(true);
    setOpen(false); // Oculta el calendario cuando se selecciona un turno.
  };

  return (
    <div className='calendarWrap'>
      {turnoSeleccionado ? (
        <input
          value={`${format(
            range[0].startDate,
            'MM/dd/yyyy'
          )} - ${format(range[0].endDate, 'MM/dd/yyyy')}, Turno Seleccionado`}
          readOnly
          className='inputBox'
        />
      ) : (
        <button onClick={() => setOpen(!open)} className='selectButton'>
          Seleccionar Turno
        </button>
      )}

      <div ref={refOne}>
        {open && !turnoSeleccionado && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFistSelection={false}
            ranges={range}
            months={1}
            direction='vertical'
            className='calendarElement'
            showDateDisplay={false} // Oculta la visualización de fechas en el calendario.
          />
        )}
      </div>

      {open && !turnoSeleccionado && (
        <button onClick={handleTurnoSeleccionado} className='selectButton'>
          Confirmar Turno
        </button>
      )}
    </div>
  );
};

export default DateRangecomp;