import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const attendanceApi = createApi({
  reducerPath: "attendanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.durban.joshdev.tech/attendance" }),
  tagTypes: ["Attendance"],
  endpoints: (build) => ({
    getAttendance: build.query({
      query: (date) => `/?date=${date}`,
      providesTags: ["Attendance"],
    }),
    createAttendance: build.mutation({
      query(body) {
        return {
          url: "/create",
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Attendance"],
    }),
  }),
});

export const { useGetAttendanceQuery, useCreateAttendanceMutation } =
  attendanceApi;
