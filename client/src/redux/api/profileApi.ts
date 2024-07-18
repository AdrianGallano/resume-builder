import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PersonalInformation } from '../types/profile';

const baseUrl = 'http://127.0.0.1:8000/api/personal-informations/';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPersonalInformations: builder.query<PersonalInformation[], void>({
      query: () => '',
    }),
    getPersonalInformationById: builder.query<PersonalInformation, number>({
      query: (id) => `${id}/`,
    }),
    createPersonalInformation: builder.mutation<PersonalInformation, Omit<PersonalInformation, 'id'>>({
      query: (newInfo) => ({
        url: '',
        method: 'POST',
        body: newInfo,
      }),
    }),
    updatePersonalInformation: builder.mutation<PersonalInformation, PersonalInformation>({
      query: (updatedInfo) => ({
        url: `${updatedInfo.id}/`,
        method: 'PUT',
        body: updatedInfo,
      }),
    }),
    deletePersonalInformation: builder.mutation<void, number>({
      query: (id) => ({
        url: `${id}/`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export hooks for usage in components
export const {
  useGetPersonalInformationsQuery,
  useGetPersonalInformationByIdQuery,
  useCreatePersonalInformationMutation,
  useUpdatePersonalInformationMutation,
  useDeletePersonalInformationMutation,
} = profileApi;
