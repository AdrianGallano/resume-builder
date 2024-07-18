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
    filter_fields = ["user", "title", "created_at", "updated_at"]
    search_fields = ["title", "user__username", "created_at", "updated_at"]
    ordering_fields = ["title", "created_at", "updated_at"]
    ordering = ["-created_at"]


class ResumeTemplatesViewSet(ModelViewSet):
    queryset = ResumeTemplates.objects.all()
    serializer_class = ResumeTemplatesSerializer
    permission_classes = [IsAuthenticated]
    filter_filelds = ["name", "description"]
    search_fields = ["name", "description"]
    ordering_fields = ["name", "description"]
    ordering = ["name"]


class PersonalInformationViewSet(ModelViewSet):
    queryset = PersonalInformation.objects.all()
    serializer_class = PersonalInformationSerializer
    permission_classes = [IsAuthenticated]
    filter_fields = [
        "resume",
        "full_name",
        "email",
        "phone_number",
        "address",
        "linkedIn",
        "github",
    ]
    search_fields = [
        "full_name",
        "email",
        "phone_number",
        "address",
        "linkedIn",
        "github",
    ]
    ordering_fields = [
        "full_name",
        "email",
        "phone_number" "address",
        "linkedIn",
        "github",
    ]
    ordering = ["full_name"]


class EducationViewSet(ModelViewSet):
    queryset = Education.objects.all()
    serializer_class = EducationSerializer
    permission_classes = [IsAuthenticated]
    filter_fields = [
        "resume",
        "institution",
        "degree",
        "field_of_study",
        "start_date",
        "end_date",
        "grade",
        "description",
    ]
    search_fields = [
        "institution",
        "degree",
        "field_of_study",
        "start_date",
        "end_date",
        "grade",
        "description",
    ]
    ordering_fields = [
        "institution",
        "degree",
        "field_of_study",
        "start_date",
        "end_date",
        "grade",
        "description",
    ]
    ordering = ["institution"]


class WorkExperienceViewSet(ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer
    permission_classes = [IsAuthenticated]
    filter_fields = [
        "resume",
        "company",
        "position",
        "start_date",
        "end_date",
        "description",
    ]
    search_fields = ["company", "position", "start_date", "end_date", "description"]
    ordering_fields = ["company", "position", "start_date", "end_date", "description"]
    ordering = ["company"]


class SkillsViewSet(ModelViewSet):
    queryset = Skills.objects.all()
    serializer_class = SkillsSerializer
    permission_classes = [IsAuthenticated]
    filter_fields = ["resume", "name", "proficiency"]
    search_fields = ["name", "proficiency"]
    ordering_fields = ["name", "proficiency"]
    ordering = ["name"]


class ProjectsViewSet(ModelViewSet):
    queryset = Projects.objects.all()
    serializer_class = ProjectsSerializer
    permission_classes = [IsAuthenticated]
    filter_fields = ["resume", "title", "description", "link"]
    search_fields = ["title", "description", "link"]
    ordering_fields = ["title", "description", "link"]
    ordering = ["title"]


class CertificationsViewSet(ModelViewSet):
    queryset = Certifications.objects.all()
    serializer_class = CertificationsSerializer
    permission_classes = [IsAuthenticated]
    filter_fields = [
        "resume",
        "name",
        "issuing_organization",
        "issue_date",
        "expiration_date",
    ]
    search_fields = [
        "name",
        "issuing_organization",
        "issue_date",
        "expiration_date",
    ]
    ordering_fields = [
        "name",
        "issuing_organization",
        "issue_date",
        "expiration_date",
    ]
    ordering = ["name"]
