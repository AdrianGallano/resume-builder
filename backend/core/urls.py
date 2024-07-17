from django.urls import path
from . import views

urlpatterns = [
    path("resume/", views.ResumeViewSet.as_view({"get": "list", "post": "create"})),
    path(
        "resume-templates/",
        views.ResumeTemplatesViewSet.as_view({"get": "list", "post": "create"}),
    ),
    path(
        "personal-information/",
        views.PersonalInformationViewSet.as_view({"get": "list", "post": "create"}),
    ),
    path(
        "education/", views.EducationViewSet.as_view({"get": "list", "post": "create"})
    ),
    path(
        "work-experience/",
        views.WorkExperienceViewSet.as_view({"get": "list", "post": "create"}),
    ),
    path("skills/", views.SkillsViewSet.as_view({"get": "list", "post": "create"})),
    path("projects/", views.ProjectsViewSet.as_view({"get": "list", "post": "create"})),
    path(
        "certifications/",
        views.CertificationsViewSet.as_view({"get": "list", "post": "create"}),
    ),
    path(
        "resume/<int:pk>/",
        views.ResumeViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "resume-templates/<int:pk>/",
        views.ResumeTemplatesViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "personal-information/<int:pk>/",
        views.PersonalInformationViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "education/<int:pk>/",
        views.EducationViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "work-experience/<int:pk>/",
        views.WorkExperienceViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "skills/<int:pk>/",
        views.SkillsViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "projects/<int:pk>/",
        views.ProjectsViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
    path(
        "certifications/<int:pk>/",
        views.CertificationsViewSet.as_view(
            {"get": "retrieve", "put": "update", "delete": "destroy"}
        ),
    ),
]
