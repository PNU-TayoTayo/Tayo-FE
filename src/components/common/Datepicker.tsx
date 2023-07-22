import React, {useState} from 'react';
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css'
import {ko} from "date-fns/locale";

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            className="outline-none w-full text-16 cursor-pointer"
            selected={startDate}
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            onChange={(date) => setStartDate(date)}
        />
    );
};

export default Datepicker;