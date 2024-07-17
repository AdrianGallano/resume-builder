from django.db import models
from django.contrib.auth.models import User

class Resume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class ResumeTemplates(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    template_file = models.FileField(upload_to='templates/')


class PersonalInformation(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    linkedIn = models.URLField(blank=True, null=True)
    github = models.URLField(blank=True, null=True)
    website = models.URLField(blank=True, null=True)


class Education(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    institution = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    field_of_study = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    grade = models.CharField(max_length=255, blank=True, null=True)
    description = models.TextField(blank=True, null=True)


class WorkExperience(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)


class Skills(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    proficiency = models.CharField(max_length=50)  


class Projects(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField(blank=True, null=True)


class Certifications(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    issuing_organization = models.CharField(max_length=255)
    issue_date = models.DateField()
    expiration_date = models.DateField(blank=True, null=True)
    credential_id = models.CharField(max_length=255, blank=True, null=True)
    credential_url = models.URLField(blank=True, null=True)
