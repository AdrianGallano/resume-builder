import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/api' }),
  endpoints: (builder) => ({
    createResume: builder.mutation({
      query: (resumeData) => ({
        url: '/resumes/',
        method: 'POST',
        body: resumeData,
      }),
    }),
    createPersonalInformation: builder.mutation({
      query: (personalInfoData) => ({
        url: '/personal-informations/',
        method: 'POST',
        body: personalInfoData,
      }),
    }),
    createWorkExperience: builder.mutation({
      query: (workExperienceData) => ({
        url: '/work-experiences/',
        method: 'POST',
        body: workExperienceData,
      }),
    }),
    createEducation: builder.mutation({
      query: (educationData) => ({
        url: '/educations/',
        method: 'POST',
        body: educationData,
      }),
    }),
    createProjects: builder.mutation({
      query: (projectData) => ({
        url: '/projects/',
        method: 'POST',
        body: projectData,
      }),
    }),
    createSkills: builder.mutation({
      query: (skillsData) => ({
        url: '/skills/',
        method: 'POST',
        body: skillsData,
      }),
    }),
    createCertifications: builder.mutation({
      query: (certificationData) => ({
        url: '/certifications/',
        method: 'POST',
        body: certificationData,
      }),
    }),
  }),
});

export const {
  useCreateResumeMutation,
  useCreatePersonalInformationMutation,
  useCreateWorkExperienceMutation,
  useCreateEducationMutation,
  useCreateProjectsMutation,
  useCreateSkillsMutation,
  useCreateCertificationsMutation,
} = api;

export default api;
