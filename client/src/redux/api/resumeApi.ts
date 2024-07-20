import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PersonalInformation } from '../types/profile';
import { Resume, WorkExperience, Education, Project, Skill, Certification } from '../types/resume';

const baseUrl = 'http://127.0.0.1:8000/api';

export const resumeApi = createApi({
  reducerPath: 'resumeApi',
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
 
  endpoints: (builder) => ({
    // Personal Information Endpoints
    getPersonalInformations: builder.query<PersonalInformation[], void>({
      query: () => '/personal-informations',
    }),
    getPersonalInformationById: builder.query<PersonalInformation, number>({
      query: (id) => `/personal-informations/${id}`,
    }),
    createPersonalInformation: builder.mutation<PersonalInformation, Partial<PersonalInformation>>({
      query: (personalInfo) => ({
        url: '/personal-informations',
        method: 'POST',
        body: personalInfo,
      }),
    }),
    updatePersonalInformation: builder.mutation<PersonalInformation, PersonalInformation>({
      query: (updatedInfo) => ({
        url: `/personal-informations/${updatedInfo.id}`,
        method: 'PUT',
        body: updatedInfo,
      }),
    }),
    deletePersonalInformation: builder.mutation<void, number>({
      query: (id) => ({
        url: `/personal-informations/${id}`,
        method: 'DELETE',
      }),
    }),
    // Resume Endpoints
    createResume: builder.mutation<Resume, Partial<Resume>>({
      query: (resumeData) => ({
        url: '/resumes',
        method: 'POST',
        body: resumeData,
      }),
    }),
    // Work Experience Endpoints
    createWorkExperience: builder.mutation<WorkExperience, WorkExperience>({
      query: (workExperienceData) => ({
        url: '/work-experiences',
        method: 'POST',
        body: workExperienceData,
      }),
    }),
    // Education Endpoints
    createEducation: builder.mutation<Education, Education>({
      query: (educationData) => ({
        url: '/educations',
        method: 'POST',
        body: educationData,
      }),
    }),
    // Projects Endpoints
    createProject: builder.mutation<Project, Project>({
      query: (projectData) => ({
        url: '/projects',
        method: 'POST',
        body: projectData,
      }),
    }),
    // Skills Endpoints
    createSkill: builder.mutation<Skill, Skill>({
      query: (skillsData) => ({
        url: '/skills',
        method: 'POST',
        body: skillsData,
      }),
    }),
    // Certifications Endpoints
    createCertification: builder.mutation<Certification, Certification>({
      query: (certificationData) => ({
        url: '/certifications',
        method: 'POST',
        body: certificationData,
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
  useCreateResumeMutation,
  useCreateWorkExperienceMutation,
  useCreateEducationMutation,
  useCreateProjectMutation,
  useCreateSkillMutation,
  useCreateCertificationMutation,
} = resumeApi;

export default resumeApi;
