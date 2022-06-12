import { CubeTransparentIcon } from "@heroicons/react/solid"
import React from "react"

const navigation = [
  { name: 'Lorem ipsum', href: '#', current: true },
  { name: 'Dolor Sit', href: '#', current: false },
  { name: 'Consectetur', href: '#', current: false },
  { name: 'Adipiscing', href: '#', current: false },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center space-x-2">
              <CubeTransparentIcon className="h-8 w-8 text-blue-500" aria-hidden="true" />
              <span className="h-8 w-20 rounded bg-red-600" />
              {/* <span className="text-lg font-medium">
                x 
              </span> */}
              <span className="h-8 w-20 rounded bg-blue-400" />
            {/* <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                alt="Workflow"
              /> */}
            </div>
            {/* <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Header