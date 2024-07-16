import { useState } from "react";
import { Button } from "../@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Label } from "../@/components/ui/label";
import { Input } from "../@/components/ui/input";
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

export default function Resume() {
  const [selectedTab, setSelectedTab] = useState("your-details");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

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
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>MA</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="icon">
                  <PlusIcon className="w-6 h-6" />
                </Button>
              </div>
              <form className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Input id="job-title" placeholder="Senior Product Designer" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Maksud" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Alam" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="maksud@musemind.agency" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="flex items-center space-x-2">
                      <Select>
                        <SelectTrigger id="country-code">
                          <SelectValue placeholder="+880" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="+880">+880</SelectItem>
                        </SelectContent>
                      </Select>
                      <Input id="phone" placeholder="123 456 7890" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Dhaka, Bangladesh" />
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
                          Senior Product Designer, Musemind - UI/UX Design
                          Agency
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Dhaka, Bangladesh - (02/08/2021 - present)
                        </p>
                        <ul className="list-disc list-inside">
                          <li>Designed high-fidelity visual designs.</li>
                          <li>
                            Created design specifications and documentation for
                            development teams.
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
                          Product Designer, Lunchbox
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Ukraine, Kiev - (01/01/2020 - 01/07/2021)
                        </p>
                        <ul className="list-disc list-inside">
                          <li>
                            Designed and launched several digital products for
                            clients in the hospitality industry, including a
                            mobile ordering and payment app.
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
                          UX Designer, Moonson
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Dhaka, Bangladesh - (01/06/2019 - 31/12/2019)
                        </p>
                        <ul className="list-disc list-inside">
                          <li>
                            Designed high-fidelity visual designs and created
                            design specifications for development teams.
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
            <div>
              <h2 className="text-2xl font-bold mb-2">Education</h2>
              {/* Add education form content here */}
            </div>
          )}

          {selectedTab === "skills" && (
            <div>
              <h2 className="text-2xl font-bold mb-2">Skills</h2>
              {/* Add skills form content here */}
            </div>
          )}
        </section>
        <section className="flex-1 p-4 bg-white rounded-lg shadow">
          <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-bold">MAKSUD ALAM</h2>
                <p className="text-sm">Senior Product Designer</p>
                <p className="text-sm text-muted-foreground">
                  I'm a Senior Product Designer at MuseMind, creating
                  meaningful, user-centered experiences. With a decade of design
                  experience and a passion for pushing the boundaries of design.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Work Experience</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="font-medium">
                    Senior Product Designer, Musemind Digital Agency
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Dhaka, Bangladesh / 02/08/2021 - present
                  </p>
                  <ul className="text-sm list-disc list-inside">
                    <li>Designed high-fidelity visual designs.</li>
                    <li>
                      Created design specifications and documentation for
                      development teams.
                    </li>
                    <li>
                      Mentored junior designers and conducted design reviews to
                      maintain design quality and consistency.
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium">Product Designer, Lunchbox</h4>
                  <p className="text-sm text-muted-foreground">
                    Ukraine, Kiev / 01/01/2020 - 01/07/2021
                  </p>
                  <ul className="text-sm list-disc list-inside">
                    <li>
                      Designed and launched several digital products for clients
                      in the hospitality industry, including a mobile ordering
                      and payment app.
                    </li>
                    <li>
                      Worked closely with developers to ensure design
                      feasibility and quality.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="font-medium">BFA Industrial Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Rhode Island School - 2013
                  </p>
                  <p className="text-sm">Top 3% class GPA</p>
                </div>
                <div>
                  <h4 className="font-medium">BA in Interaction Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Brown University - 2016
                  </p>
                  <p className="text-sm">Top 3% class GPA</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold">Skills</h3>
              <div className="mt-2 space-y-2">
                <div>
                  <h4 className="font-medium">Industry Knowledge</h4>
                  <p className="text-sm text-muted-foreground">
                    Product Design, User Interface, User Experience, Interaction
                    Design, Wire-framing
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Tools & Technologies</h4>
                  <p className="text-sm text-muted-foreground">
                    Figma, Sketch, Prototyping, Framer, Invision, Abstract,
                    Zeplin, Google Analytics
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Other Skills</h4>
                  <p className="text-sm text-muted-foreground">
                    HTML, CSS, jQuery
                  </p>
                </div>
              </div>
            </div>
          </div>
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
