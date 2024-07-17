import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Progress } from "../@/components/ui/progress";
import { Button } from "../@/components/ui/button";
import "../app/globals.css";

export default function Sidebar() {
  return (
    <aside className="w-64 p-4 bg-gray-50">
      <div className="flex items-center mb-8">
        <span className="text-xl font-bold">Resume Builder</span>
      </div>
      <nav className="space-y-4">
        <Link to="#" className="flex items-center space-x-2 text-gray-900">
          <HomeIcon className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 text-gray-600">
          <LayoutTemplateIcon className="w-5 h-5" />
          <span>Template Gallery</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 text-gray-600">
          <FilesIcon className="w-5 h-5" />
          <span>Documents</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 text-gray-600">
          <LinkIcon className="w-5 h-5" />
          <span>Profile</span>
        </Link>
        <Link to="#" className="flex items-center space-x-2 text-gray-600">
          <AppleIcon className="w-5 h-5" />
          <span>Settings</span>
        </Link>
      </nav>
      <div className="mt-8 p-4 bg-white rounded-lg shadow">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-sm font-medium">Complete your profile!</p>
            <p className="text-xs text-gray-500">
              For better recommendations please provide your details.
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          <Progress value={50} className="w-full" />
          <Button variant="outline" className="ml-auto">
            Complete Now
          </Button>
        </div>
      </div>
    </aside>
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
