import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ApiEndpoints } from "../../api";
import { getFilteredUsersByFirstLater } from "../../helpers/users";
import { UserModelInterface } from "../../interfaces/models/user";
import { FilteredUserByLetterInterface } from "../../interfaces/pages";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<FilteredUserByLetterInterface[], null>({
      query: () => ({
        url: ApiEndpoints.USERS,
      }),
      // @ts-ignore
      transformResponse: (response) => {
        return getFilteredUsersByFirstLater(response as UserModelInterface[]);
      },
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
