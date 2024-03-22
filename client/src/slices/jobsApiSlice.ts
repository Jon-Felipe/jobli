import { apiSlice } from './apiSlice';

// extras
import {
  GetAllJobsArgType,
  GetAllJobsReturnType,
  GetJobArgType,
  GetJobReturnType,
} from '../utils/types';

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<GetAllJobsReturnType, GetAllJobsArgType>({
      query: ({ sort, limit }) => ({
        url: `/jobs`,
        method: 'GET',
        params: { sort, limit },
      }),
    }),
    getSingleJob: builder.query<GetJobReturnType, GetJobArgType>({
      query: ({ id }) => ({
        url: `/jobs/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, useGetSingleJobQuery } = jobsApiSlice;
