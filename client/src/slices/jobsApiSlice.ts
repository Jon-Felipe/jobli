import { apiSlice } from './apiSlice';

// extras
import { GetAllJobsArgType, GetAllJobsReturnType } from '../utils/types';

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query<GetAllJobsReturnType, GetAllJobsArgType>({
      query: ({ limit }) => ({
        url: `/jobs`,
        method: 'GET',
        params: { limit },
      }),
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllJobsQuery, useGetSingleJobQuery } = jobsApiSlice;
