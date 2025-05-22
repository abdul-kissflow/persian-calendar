import React from 'react'
import { Calendar } from 'react-multi-date-picker'
import persian from 'react-date-object/calendars/persian'
import persian_fa from 'react-date-object/locales/persian_fa'

function FormField(props) {
    const { value, actions } = props
    const { updateValue } = actions
    return (
        <Calendar
            calendar={persian}
            locale={persian_fa}
            value={value}
            onChange={(dateObject) => {
                console.log(dateObject.format())
                updateValue(dateObject.format())
            }}
        />
    )
}

export default FormField
