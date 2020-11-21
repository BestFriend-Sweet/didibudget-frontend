import React, { useState, useEffect } from 'react';

import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';

import { Calendar } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

export const DateSelector = ({ onChange }) => {
	Moment.locale('en')
	momentLocalizer()

	const [date, setDate] = useState(new Date())

	useEffect(() => {
	    onChange(date)
	}, [date, onChange])

	return (
		<Calendar
			className="mb-4 mt-1"
			id={'datePicker'}
			max={new Date()}
			value={date}
			onChange={date => setDate(date)}
			views={['month', 'year']}
			footer={false}
		/>
	)
}
