
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../redux/store";
import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Progress } from "../@/components/ui/progress";
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../@/components/ui/card";
import "../app/globals.css";
import { Badge } from "../@/components/ui/badge";
import Sidebar from "../components/Sidebar";
import Headerx from "../components/Header";

export default function Dashboard() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  // const { loading, error } = useSelector((state: RootState) => state.resume);

  const handleCreateResume = async () => {
    // const resultAction = await dispatch(createResume());
    // if (createResume.fulfilled.match(resultAction)) {
    //   navigate("/resume");
    // }
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-8">
        <Headerx />
        <section className="mt-8 mb-8 p-4 bg-blue-50 rounded-lg flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">
              Get access to 1000+ Premium Resume Templates at $23.50 USD / Code
              - RB50%
            </p>
          </div>
          <Button variant="default">View Details</Button>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-left">Hello, Tom!</h2>
          <p className="text-gray-600 mb-4 text-left">
            What Do You Want To Create.
          </p>
          <div className="flex space-x-4 mb-8">
            <Button
              variant="default"
              className="flex items-center space-x-2"
              onClick={handleCreateResume}
              // disabled={loading}
            >
              <FileIcon className="w-5 h-5" />
              <span>Resume</span>
            </Button>
            <Button variant="default" className="flex items-center space-x-2">
              <FileTextIcon className="w-5 h-5" />
              <span>Cover Letter</span>
            </Button>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Your Documents</h2>
            <Button variant="ghost" className="flex items-center space-x-2">
              <span>View All</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
          <Tabs className="text-left">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="cover-letters">Cover Letters</TabsTrigger>
              <TabsTrigger value="resignation-letters">
                Resignation Letters
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <CardHeader className="text-left">
                    <CardTitle>My Resume</CardTitle>
                    <CardDescription>Last Updated 2 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/placeholder.svg"
                      alt="Resume"
                      className="w-full h-auto"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="default">Resume</Badge>
                    <Badge variant="secondary">Professional</Badge>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="text-left">
                    <CardTitle>My Resume</CardTitle>
                    <CardDescription>Last Updated 2 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/placeholder.svg"
                      alt="Resume"
                      className="w-full h-auto"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="default">Resume</Badge>
                    <Badge variant="secondary">Template</Badge>
                  </CardFooter>
                </Card>
                <Card>
                  <CardHeader className="text-left">
                    <CardTitle>My Resume</CardTitle>
                    <CardDescription>Last Updated 2 days ago</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="/placeholder.svg"
                      alt="Resume"
                      className="w-full h-auto"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Badge variant="default">Coverletter</Badge>
                    <Badge variant="secondary">Professional</Badge>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        <section>
          <h2 className="text-xl font-bold mb-4 text-left">
            Best Templates For You!
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="text-left">
                <CardTitle>Unsure About Your Resume?</CardTitle>
                <CardDescription>
                  Send it our way and let our experts review and bring it to
                  perfection! Illustrated with real-life examples.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Template"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-left">
                <CardTitle>Resume Examples For Every Industry</CardTitle>
                <CardDescription>
                  We'll show you the type of language used in your field.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src="/placeholder.svg"
                  alt="Template"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

function AppleIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
      <path d="M10 2c1 .5 2 2 2 5" />
    </svg>
  );
}

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function BellIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  );
}

function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}

function FilesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
      <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
      <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
    </svg>
  );
}

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutTemplateIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="7" x="3" y="3" rx="1" />
      <rect width="9" height="7" x="3" y="14" rx="1" />
      <rect width="5" height="7" x="16" y="14" rx="1" />
    </svg>
  );
}

function LinkIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
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
