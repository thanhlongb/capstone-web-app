import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { hasNextPage, hasPreviousPage } from "./pagination"

export interface DataTableState {
  customers: any[],
  grain: string,
  startDate: string,
  endDate: string,
  filter: {
    search: string,
    segment: string
  },
  sort: {
    column: string,
    order: string,
  },
  pagination: {
    customerCount: number,
    page: number,
    limit: number,
  },
  isLoading: boolean
}

const initialState: DataTableState = {
  customers: [],
  grain: 'day',
  startDate: '',
  endDate: '',
  filter: {
    search: '',
    segment: ''
  },
  sort: {
    column: '',
    order: 'asc',
  },
  pagination: {
    customerCount: 0,
    page: 1,
    limit: 3,
  },
  isLoading: true
}

export const dataTableSlice = createSlice({
  name: 'dataTable',
  initialState,
  reducers: {
    startLoading: (state: DataTableState) => {
      state.isLoading = true
    },
    stopLoading: (state: DataTableState) => {
      state.isLoading = false
    },
    setLoading: (state: DataTableState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setCustomers: (state: DataTableState, action: PayloadAction<any[]>) => {
      state.customers = action.payload.slice(
        (state.pagination.page - 1) * state.pagination.limit,
        Math.min(state.pagination.page * state.pagination.limit, action.payload.length))
      state.pagination.customerCount = action.payload.length
    },
    // PAGINATIONS
    setPaginationPage: (state: DataTableState, action: PayloadAction<number>) => {
      if (action.payload > 0 && 
          action.payload < state.customers.length/state.pagination.limit + 1) {
            state.pagination.page = action.payload
          }
    },
    goToNextPage: (state: DataTableState) => {
      if (hasNextPage(
          state.pagination.page, 
          state.pagination.limit, 
          state.pagination.customerCount) === true) {
        state.pagination.page++
      }
    },
    goToPreviousPage: (state: DataTableState) => {
      if (hasPreviousPage(state.pagination.page) === true) {
        state.pagination.page--
      }
    },
    // FILTERS
    clearFilters: (state: DataTableState) => {
      state.filter.search = ""
      state.filter.segment = ""
    }
  }
})

export const {
  startLoading,
  stopLoading,
  setLoading,
  setCustomers,
  clearFilters,
  setPaginationPage,
  goToNextPage,
  goToPreviousPage
} = dataTableSlice.actions 

export default dataTableSlice.reducer