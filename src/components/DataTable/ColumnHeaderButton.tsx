import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/outline"
import { ReactNode, useState } from "react"

interface Props {
  title: string,
  preTitleComponent?: ReactNode,
  postTitleComponent?: ReactNode,
  isSortable?: boolean
}

const ColumnHeaderButton = (props: Props) => {
  const { 
    title, 
    preTitleComponent, 
    postTitleComponent,
    isSortable
  } = props
  const [sorting, setSorting] = useState<boolean | undefined>(undefined)
  
  return (
    <button
      onClick={() => (isSortable && (setSorting(!sorting)))}
      className={`${sorting !== undefined ? "text-blue-500" : "text-gray-500"} px-6 py-3 text-sm font-medium flex space-x-1 items-center hover:text-blue-500`}
    >
      { preTitleComponent }
      <span>
        { title }
      </span>
      { postTitleComponent }
      { sorting !== undefined && (
        sorting === true ? (
          <ArrowSmUpIcon className="h-5 w-5" aria-hidden="true" />
        ) : (
          <ArrowSmDownIcon className="h-5 w-5" aria-hidden="true" />
        )
      ) }      
    </button>
  )
}

export default ColumnHeaderButton