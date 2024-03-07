import { apiSlice } from './apiSlice';

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: '/jobs',
        method: 'GET',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Jobs'],
    }),
    getSingleJob: builder.query({
      query: (id) => ({
        url: `/jobs/${id}`,
        method: 'GET',
      }),
      keepUnusedDataFor: 5,
      providesTags: ['Jobs'],
    }),
  }),
});

export const { useGetAllJobsQuery, useGetSingleJobQuery } = jobsApiSlice;
