import { apiSlice } from './apiSlice';

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
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
