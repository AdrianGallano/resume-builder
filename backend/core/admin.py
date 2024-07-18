from django.contrib import admin
from .models import (
    Resume,
    ResumeTemplates,
    Certifications,
    PersonalInformation,
    Education,
    Projects,
    Skills,
    User,
    WorkExperience,
)


class ResumeAdmin(admin.ModelAdmin):
    list_display = ["title", "user", "created_at", "updated_at"]
    search_fields = ["title", "user__username"]


class UserAdmin(admin.ModelAdmin):
    list_display = ["username", "email", "is_staff", "is_active"]
    search_fields = ["username", "email"]


class ResumeTemplatesAdmin(admin.ModelAdmin):
    list_display = ["name", "description"]
    search_fields = ["name", "description"]


class PersonalInformationAdmin(admin.ModelAdmin):
    list_display = ["full_name", "email", "phone_number"]
    search_fields = ["full_name", "email", "phone_number"]


class EducationAdmin(admin.ModelAdmin):
    list_display = ["institution", "degree", "field_of_study", "start_date", "end_date"]
    search_fields = ["institution", "degree", "field_of_study", "start_date", "end_date"]


class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ["company", "position", "start_date", "end_date"]
    search_fields = ["company", "position", "start_date", "end_date"]


class SkillsAdmin(admin.ModelAdmin):
    list_display = ["name", "proficiency"]
    search_fields = ["name", "proficiency"]


class ProjectsAdmin(admin.ModelAdmin):
    list_display = ["title", "description", "link"]
    search_fields = ["title", "description", "link"]


class CertificationsAdmin(admin.ModelAdmin):
    list_display = ["name", "issuing_organization", "issue_date", "expiration_date"]
    search_fields = ["name", "issuing_organization", "issue_date", "expiration_date"]


admin.site.register(Resume, ResumeAdmin)
admin.site.register(ResumeTemplates, ResumeTemplatesAdmin)
admin.site.register(PersonalInformation, PersonalInformationAdmin)
admin.site.register(Education, EducationAdmin)
admin.site.register(WorkExperience, WorkExperienceAdmin)
admin.site.register(Skills, SkillsAdmin)
admin.site.register(Projects, ProjectsAdmin)
admin.site.register(Certifications, CertificationsAdmin)
