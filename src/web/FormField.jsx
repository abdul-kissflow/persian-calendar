import React from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

function FormField(props) {
    const { value, actions } = props
    const { updateValue } = actions
    return (
        <DatePicker
            calendar={persian}
            locale={persian_fa}
            currentDate={new DateObject(value)}
            onChange={(dateObject) => {
                console.log(dateObject.format('YYYY/MM/DD'))
                updateValue(dateObject.format('YYYY/MM/DD'))
            }}
        />
    )
}

export default FormField
