from django.shortcuts import render, HttpResponse
from rest_framework.viewsets import ModelViewSet
from .models import (
    Resume,
    ResumeTemplates,
    PersonalInformation,
    Education,
    WorkExperience,
    Skills,
    Projects,
    Certifications,
)
from .serializers import (
    ResumeSerializer,
    ResumeTemplatesSerializer,
    PersonalInformationSerializer,
    EducationSerializer,
    WorkExperienceSerializer,
    SkillsSerializer,
    ProjectsSerializer,
    CertificationsSerializer,
)


class ResumeViewSet(ModelViewSet):
    queryset = Resume.objects.all()
    serializer_class = ResumeSerializer


class ResumeTemplatesViewSet(ModelViewSet):
    queryset = ResumeTemplates.objects.all()
    serializer_class = ResumeTemplatesSerializer

class PersonalInformationViewSet(ModelViewSet): 
    queryset = PersonalInformation.objects.all() 
    serializer_class = PersonalInformationSerializer


class EducationViewSet(ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer

class WorkExperienceViewSet(ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer

class SkillsViewSet(ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer

class ProjectsViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer

class CertificationsViewSet(ModelViewSet):
    queryset = Certifications.objects.all()
    serializer_class = CertificationsSerializer

