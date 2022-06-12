// ref: https://github.com/msnegurski/tailwind-react-datepicker

import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "./DateRangePicker.css"
import { format } from "date-fns"
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { InformationCircleIcon } from "@heroicons/react/outline";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  useEffect(() => {
      if (startDate > endDate) setStartDate(endDate)
  }, [endDate])

  useEffect(() => {
      if (startDate > endDate) setEndDate(startDate)
  }, [startDate])

  return (
    <div className="inline-flex items-center px-4 py-2 border bg-gray-100 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-200">
      <button type="button">
        <InformationCircleIcon className="h-5 w-5 mr-2 hover:text-blue-500" aria-hidden="true" />
      </button>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date ?? new Date())}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        customInput={<ButtonInput />}
        renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
        }) => (
            <div className="flex items-center justify-between px-2 py-2">
                <span className="text-lg text-gray-700">
                    {format(date, 'MMMM yyyy')}
                </span>

                <div className="space-x-2">
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        type="button"
                        className={`
                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                        `}
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        type="button"
                        className={`
                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                        `}
                    >
                        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        )}
      />

      <ArrowSmRightIcon className="h-5 w-5 mx-2 text-gray-500" aria-hidden="true" />

      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date ?? new Date())}
        selectsEnd
        showYearPicker
        startDate={startDate}
        endDate={endDate}
        customInput={<ButtonInput />}
        renderCustomHeader={({
            date,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
        }) => (
            <div className="flex items-center justify-between px-2 py-2">
                <span className="text-lg text-gray-700">
                    {format(date, 'MMMM yyyy')}
                </span>

                <div className="space-x-2">
                    <button
                        onClick={decreaseMonth}
                        disabled={prevMonthButtonDisabled}
                        type="button"
                        className={`
                            ${prevMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                        `}
                    >
                        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
                    </button>

                    <button
                        onClick={increaseMonth}
                        disabled={nextMonthButtonDisabled}
                        type="button"
                        className={`
                            ${nextMonthButtonDisabled && 'cursor-not-allowed opacity-50'}
                            inline-flex p-1 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500
                        `}
                    >
                        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>
        )}
      />
    </div>
  )
}

const ButtonInput = React.forwardRef(({ value, onClick }:any, ref) => (
  <button
      onClick={onClick}
      // ref={ref}
      type="button"
      className='w-auto text-sm font-medium text-gray-700 hover:text-blue-500'
  >
      {format(new Date(value), 'dd MMMM yyyy')}
  </button>
))

export default DateRangePicker