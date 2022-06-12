import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, SelectorIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface SelectBoxOption {
  title: string,
  value: string | number
}

interface Props {
  label?: string,
  inlineLabel?: boolean,
  options: SelectBoxOption[]
}

const SelectBox = (props: Props) => {
  const { label, inlineLabel, options } = props
  const DEFAULT_OPTION:SelectBoxOption = {
    title: "(No option)",
    value: -1
  }
  const [selected, setSelected] = useState(options.length > 0 ? options[0] : DEFAULT_OPTION)

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            { (label && !inlineLabel) && (
              <Listbox.Label className="block mb-1 text-sm font-medium text-gray-700">
                {label}
              </Listbox.Label>
            ) }
            <div className="relative">
              <Listbox.Button className="bg-white flex relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-8 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                { (label && inlineLabel) && (
                  <span className="text-gray-500 mr-1">{ label }:</span>
                ) }
                <span className="block truncate font-medium">{selected.title}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  { open ? (
                    <ChevronUpIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  ) }                
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute z-10 mt-1 w-auto bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.value}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-indigo-600' : 'text-gray-900',
                          'cursor-default select-none relative py-2 pl-8 pr-4'
                        )
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center justify-between space-x-8">
                            <span className={classNames(selected ? 'font-semibold' : 'font-medium', 'block truncate')}>
                              {option.title}
                            </span>
                          </div>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-green-500',
                                'absolute inset-y-0 left-0 flex items-center pl-2'
                              )}
                            >
                              <CheckIcon className="h-4 w-4" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>    
  )
}

export default SelectBox