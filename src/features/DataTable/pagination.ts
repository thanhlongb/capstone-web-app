import { DataTableState } from "./dataTableSlice"

const hasNextPage = (
  page: number,
  limit: number,
  customerCount: number
) => (
  page < Math.ceil(customerCount/limit)
) 

const hasPreviousPage = (
  currentPage: number
) => (
  currentPage > 1
)

export { 
  hasNextPage, 
  hasPreviousPage
}
