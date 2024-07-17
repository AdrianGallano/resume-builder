from django.shortcuts import render, HttpResponse
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
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
    permission_classes = [IsAuthenticated]


class ResumeTemplatesViewSet(ModelViewSet):
    queryset = ResumeTemplates.objects.all()
    serializer_class = ResumeTemplatesSerializer
    permission_classes = [IsAuthenticated]
    
class PersonalInformationViewSet(ModelViewSet): 
    queryset = PersonalInformation.objects.all() 
    serializer_class = PersonalInformationSerializer
    permission_classes = [IsAuthenticated]


class EducationViewSet(ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticated]

class WorkExperienceViewSet(ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer
    permission_classes = [IsAuthenticated]

class SkillsViewSet(ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer
    permission_classes = [IsAuthenticated]

class ProjectsViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = [IsAuthenticated]

class CertificationsViewSet(ModelViewSet):
    queryset = Certifications.objects.all()
    serializer_class = CertificationsSerializer
    permission_classes = [IsAuthenticated]

