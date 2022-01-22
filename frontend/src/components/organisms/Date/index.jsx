import * as React from 'react'
import isWeekend from 'date-fns/isWeekend'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import StaticDatePicker from '@mui/lab/StaticDatePicker'
import PropTypes from 'prop-types'
import ptLocale from 'date-fns/locale/pt-BR'

const SelectDate = ({ handleDate }) => {
  const [value, setValue] = React.useState(new Date())

  function disableRandomDates() {
    return Math.random() > 0.7
  }
  return (
    <>
      <LocalizationProvider locale={ptLocale} dateAdapter={AdapterDateFns}>
        <StaticDatePicker
          // shouldDisableYear={disableRandomDates}
          format="dd/MM/yyyy"
          orientation="portrait"
          views={['day']}
          openTo="day"
          value={value}
          // shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue)
            handleDate(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </>
  )
}

SelectDate.propTypes = {
  handleDate: PropTypes.func,
}
export default SelectDate
