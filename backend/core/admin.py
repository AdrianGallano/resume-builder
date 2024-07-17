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

admin.site.register(Resume)
admin.site.register(ResumeTemplates)
admin.site.register(Certifications)
admin.site.register(PersonalInformation)
admin.site.register(Education)
admin.site.register(Projects)
admin.site.register(Skills)
admin.site.register(WorkExperience)

