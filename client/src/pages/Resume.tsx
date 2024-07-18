import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Label } from "../@/components/ui/label";
import { Input } from "../@/components/ui/input";
import { Badge } from "../@/components/ui/badge";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../@/components/ui/select";
import { Textarea } from "../@/components/ui/textarea";
import { Card, CardContent } from "../@/components/ui/card";
import { Link } from "react-router-dom";
import ResumeFull from "../components/ResumeFull";

export default function Resume() {
  const [selectedTab, setSelectedTab] = useState("your-details");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  const [industryKnowledge, setIndustryKnowledge] = useState([
    "Data Structures",
    "Software Methodology",
    "Algorithms Analysis",
    "Database Management",
    "Artificial Intelligence",
    "Internet Technology",
    "Systems Programming",
    "Computer Architecture",
  ]);
  const [toolsTechnologies, setToolsTechnologies] = useState([
    "Figma",
    "Sketch",
    "ProtoPie",
    "Framer",
    "Invision",
    "Abstract",
    "Amplitude",
    "Zeplin",
    "Google Analytics",
  ]);
  const [otherSkills, setOtherSkills] = useState(["HTML", "CSS", "jQuery"]);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <ArrowLeftIcon className="w-6 h-6" />
          </Button>
          <h1 className="text-xl font-semibold">Your CV heading</h1>
        </div>
        <Tabs
          value={selectedTab}
          onValueChange={handleTabChange}
          className="space-x-4"
        >
          <TabsList>
            <TabsTrigger value="your-details">Your Details</TabsTrigger>
            <TabsTrigger value="short-bio">Short Bio</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>
        </Tabs>
      </header>
      <main className="flex flex-1 p-4 space-x-4 text-left">
        <section className="flex-1 p-4 bg-white rounded-lg shadow">
          {selectedTab === "your-details" && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Personal Information</h2>
              <p className="text-muted-foreground mb-4">
                Add some basic details.
              </p>
              <form className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <Input id="full-name" placeholder="First Last" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="email@gmail.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger id="country-code">
                          <SelectValue placeholder="+1" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+1">+1</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input id="phone" placeholder="123 456 7890" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input id="github" placeholder="github.com/username" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    placeholder="123 Street Name, Town, State 12345"
                  />
                </div>
                <div className="flex justify-between">
                  <Button variant="outline">Back</Button>
                  <Button>Save & Next</Button>
                </div>
              </form>
            </div>
          )}

          {selectedTab === "short-bio" && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Professional summary</h2>
              <p className="text-muted-foreground mb-4">
                Now, let's add a summary.
              </p>
              <div className="space-y-4">
                <Select>
                  <SelectTrigger id="font-family">
                    <SelectValue placeholder="Inter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inter">Inter</SelectItem>
                    <SelectItem value="arial">Arial</SelectItem>
                    <SelectItem value="times-new-roman">
                      Times New Roman
                    </SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="I'm a Senior Product Designer at MuseMind, creating meaningful, user-centered experiences. With a decade of design experience and a passion for pushing the boundaries of design."
                  className="min-h-[200px]"
                />
              </div>
              <div className="flex justify-between mt-4">
                <Button variant="outline">Back</Button>
                <Button>Save & Next</Button>
              </div>
            </div>
          )}

          {selectedTab === "experience" && (
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">Experience</h2>
              <p className="text-muted-foreground">
                Review your experience history.
              </p>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Software Engineer Intern, Electronics Company
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          City, State / May 2020 - August 2020
                        </p>
                        <ul className="list-disc list-inside">
                          <li>
                            Developed a service to automatically perform a set
                            of unit tests daily on a product in development.
                          </li>
                          <li>
                            Incorporated scripts using Python and PowerShell to
                            aggregate XML test results into an organized format.
                          </li>
                          <li>
                            Utilized Jenkins for continuous integration to
                            automate the entire process of loading the latest
                            build code and test files, running tests, and
                            generating reports.
                          </li>
                          <li>
                            Explored ways to visualize and send a daily report
                            of test results to team members using HTML,
                            JavaScript, and CSS.
                          </li>
                        </ul>
                        <Link to="#" className="text-sm text-primary">
                          See more
                        </Link>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-5">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">
                          Front End Developer Intern, Startup, Inc
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          City, State / May 2019 - August 2019
                        </p>
                        <ul className="list-disc list-inside">
                          <li>
                            Assisted in the development of the front end of a
                            mobile application for iOS/Android using Dart and
                            the Flutter framework.
                          </li>
                          <li>
                            Worked with Google Firebase to manage user input
                            data across multiple platforms including web and
                            mobile apps.
                          </li>
                          <li>
                            Collaborated with team members using version control
                            systems such as Git to organize modifications and
                            assign tasks.
                          </li>
                          <li>
                            Utilized Android Studio as a development environment
                            to visualize the application in both iOS and
                            Android.
                          </li>
                        </ul>
                        <Link to="#" className="text-sm text-primary">
                          See more
                        </Link>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="icon">
                          <FilePenIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <TrashIcon className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Button variant="outline" className="flex items-center space-x-2">
                <PlusIcon className="w-4 h-4" />
                <span>Add Experience</span>
              </Button>
              <div className="flex justify-between mt-4">
                <Button variant="outline">Back</Button>
                <Button>Save & Next</Button>
              </div>
            </div>
          )}

          {selectedTab === "education" && (
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold">Education</h2>
              <p className="text-muted-foreground">
                Review your education history
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-start justify-between p-4 border rounded-md shadow-sm">
                  <div>
                    <h3 className="text-lg font-semibold">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p>State University - May 2021</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <FilePenIcon className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <TrashIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <PlusIcon className="w-4 h-4" />
                  <span>Add Education</span>
                </Button>
              </div>
              <div className="flex justify-between mt-8">
                <Button variant="outline">Back</Button>
                <Button>Save & Next</Button>
              </div>
            </div>
          )}

          {selectedTab === "skills" && (
            <div className="flex-1 space-y-4">
              <Tabs>
                <div>
                  <div>
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold">Skills</h2>
                      <p className="text-muted-foreground">
                        Highlight six to eight of your top skills
                      </p>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold">Industry Knowledge</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {industryKnowledge.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}{" "}
                                <Button variant="ghost" size="sm">
                                  ×
                                </Button>
                              </Badge>
                            ))}
                            <Button variant="outline" size="sm">
                              Add skills
                            </Button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">
                            Tools & Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {toolsTechnologies.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}{" "}
                                <Button variant="ghost" size="sm">
                                  ×
                                </Button>
                              </Badge>
                            ))}
                            <Button variant="outline" size="sm">
                              Add skills
                            </Button>
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold">Other Skills</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {otherSkills.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}{" "}
                                <Button variant="ghost" size="sm">
                                  ×
                                </Button>
                              </Badge>
                            ))}
                            <Button variant="outline" size="sm">
                              Add skills
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tabs>
              <div className="flex justify-between mt-8">
                <Button variant="outline">Back</Button>
                <Button className="bg-primary text-primary-foreground">
                  Save & Next
                </Button>
              </div>
            </div>
          )}
        </section>
        <section className="flex-1 p-4 bg-white rounded-lg shadow">
          <ResumeFull />
        </section>
      </main>
    </div>
  );
}

function ArrowLeftIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function FilePenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
