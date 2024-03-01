import { apiSlice } from './apiSlice';

export const jobsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => ({
        url: '/jobs',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllJobsQuery } = jobsApiSlice;
