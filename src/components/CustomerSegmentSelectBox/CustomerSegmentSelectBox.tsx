import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, SelectorIcon } from "@heroicons/react/solid"
import { Fragment, useState } from "react"

const segments = [
  {
    id: 1,
    name: 'All Customers',
    count: '324,234',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 2,
    name: 'New Customers',
    count: '232,923',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  {
    id: 3,
    name: 'Loyal Customers',
    count: '74,001',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More segments...
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  options: object[]
}

const CustomerSegmentSelectBox = (props: Props) => {
  const { options } = props
  const [selected, setSelected] = useState(segments[0])

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">Customer segment</Listbox.Label>
            <div className="mt-1 relative">
              <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-8 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <span className="block truncate">{selected.name}</span>
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
                  {segments.map((segment) => (

                    <Listbox.Option
                    key={segment.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4'
                      )
                    }
                    value={segment}
                    >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center justify-between space-x-8">
                          <span className={classNames(selected ? 'font-semibold' : 'font-medium', 'block truncate')}>
                            {segment.name} 
                          </span>
                          <span className="text-gray-400">{segment.count}</span>
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

export default CustomerSegmentSelectBox
