from rest_framework.serializers import ModelSerializer
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



    


class ResumeTemplatesSerializer(ModelSerializer):
    class Meta:
        model = ResumeTemplates
        fields = "__all__"


class PersonalInformationSerializer(ModelSerializer):
    class Meta:
        model = PersonalInformation
        fields = "__all__"


class EducationSerializer(ModelSerializer):
    class Meta:
        model = Education
        fields = "__all__"


class WorkExperienceSerializer(ModelSerializer):
    class Meta:
        model = WorkExperience
        fields = "__all__"


class SkillsSerializer(ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"


class ProjectsSerializer(ModelSerializer):
    class Meta:
        model = Projects
        fields = "__all__"


class CertificationsSerializer(ModelSerializer):
    class Meta:
        model = Certifications
        fields = "__all__"


class ResumeSerializer(ModelSerializer):
    personal_information = PersonalInformationSerializer()
    education = EducationSerializer(many=True)
    work_experience = WorkExperienceSerializer(many=True)
    skills = SkillsSerializer(many=True)
    projects = ProjectsSerializer(many=True)
    certifications = CertificationsSerializer(many=True)

    class Meta:
        model = Resume
        fields = "__all__"
