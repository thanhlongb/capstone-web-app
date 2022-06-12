import { ArrowSmDownIcon, ChartPieIcon, CubeTransparentIcon } from "@heroicons/react/outline"
import CustomerSegmentSelectBox from "../CustomerSegmentSelectBox/CustomerSegmentSelectBox"
import Pagination from "../Pagination/Pagination"
import SearchBox from "../SearchBox/SearchBox"
import SelectBox from "../SelectBox/SelectBox"
import TableLimitSelectBox from "../PageLimitSelectBox/PageLimitSelectBox"
import DateRangePicker from "../DateRangePicker/DateRangePicker"
import ExportDropDown from "../ExportDropDown/ExportDropDown"
import ColumnHeaderButton from "./ColumnHeaderButton"
import GrainSelectBox from "../GrainSelectBox/GrainSelectBox"
import { useDispatch, useSelector } from "react-redux"
import { setCustomers, setLoading } from "../../features/DataTable/dataTableSlice"
import { useGetUsersQuery } from "../../services/sampleApi"
import { useEffect } from "react"
import { RootState } from "../../app/store"

interface Props {
  data: object[]
} 

const DataTable = (props?: Props) => {
  // const { data } = props
  const dataTable = useSelector((state: RootState) => state.dataTable)
  const dispatch = useDispatch()
  // const { data: bulbasaurData, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  // const { data: dittoData } = useGetPokemonByNameQuery('ditto')
  const { data, isSuccess, currentData, isLoading } = useGetUsersQuery(1)
  useEffect(() => {
    if (data) {
      dispatch(setCustomers(data.data))
    }
  }, [data, dataTable.pagination])

  return (
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
          <div>
            <h2 id="applicant-information-title" className="text-xl leading-6 font-medium text-gray-900">
              Customers
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Cillum non fugiat ipsum id laborum id.
            </p>
          </div>
          <div className="flex space-x-4">
            {/* <button
              onClick={() => {}}
              type="button"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Clear filters
            </button> */}
            <GrainSelectBox />
            <DateRangePicker />
            <ExportDropDown />
          </div>
        </div>
        <div className="border-t space-y-4 sm:space-y-0 sm:space-x-4 bg-gray-100 px-4 py-5 sm:px-6 sm:flex sm:flex-row">
          <SearchBox />
          <CustomerSegmentSelectBox options={[]} />
        </div>        
        <div className="border-t border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="sticky top-0 bg-white">
              <tr>
                <th scope="col" className="text-left">
                  <ColumnHeaderButton title="Name" isSortable={true} />
                </th>
                <th
                  scope="col"
                  className="text-left"
                >
                  <ColumnHeaderButton title="Title" />
                </th>
                <th
                  scope="col"
                  className="text-left"
                >
                  <ColumnHeaderButton title="Email" />
                </th>
                <th
                  scope="col"
                  className="float-right"
                >
                  <ColumnHeaderButton 
                    preTitleComponent={<CubeTransparentIcon className="h-5 w-5" aria-hidden="true" />}
                    title="Spedictions" 
                    isSortable={true} />
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              { (!isLoading && dataTable.customers) ? (
                dataTable.customers.map((customer:any) => (
                  <>
                  <tr className="hover:bg-blue-100" key={customer.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <span
                        title="User is acitve"
                        className={'bg-green-500 w-3 h-3 mr-4 rounded-full inline-block'}
                      />
                      {customer.first_name} {customer.last_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{customer.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-900">{customer.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900 flex">
                        <ChartPieIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="hidden sm:block ml-1">
                          Details
                        </span>
                      </a>
                    </td>
                  </tr>
                  </>
                ))

              ) : (
                <p>loading</p>
              ) }
            </tbody>
          </table>
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </section>
  )
}

export default DataTable