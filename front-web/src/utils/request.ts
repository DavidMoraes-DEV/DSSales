import axios from 'axios';
import { FilterData } from '../types';
import { formatDateToServe } from './formatters';

const baseURL = 'http://localhost:8080';

export const makeRequest = axios.create({
  baseURL
});

export const buildFilterParams = (
  filterData?: FilterData,
  extraParams?: Record<string, unknown>
) => {
  return {
    minDate: formatDateToServe(filterData?.dates?.[0]),
    maxDate: formatDateToServe(filterData?.dates?.[1]),
    gender: filterData?.gender,
    ...extraParams
  };
};
