import { Button } from "../@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "../@/components/ui/tabs";
import { Input } from "../@/components/ui/input";
import { Card } from "../@/components/ui/card";
import placeholder from "../img/placeholder.png";
import Sidebar from "../components/Sidebar";
import Headerx from "../components/Header";

export default function Document() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="p-8">
          <Headerx />
        </div>
        <div className="px-4 md:px-8 lg:px-16 text-left">
          <header className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold mb-3">Welcome back, Maheen!</h1>
              <p className="text-muted-foreground">You have 4 documents.</p>
            </div>
            <Button variant="default" className="ml-auto">
              <PlusIcon className="mr-2" />
              Create New
            </Button>
          </header>

          <Tabs defaultValue="all-documents">
            <TabsList className="mb-6">
              <TabsTrigger value="all-documents">All documents</TabsTrigger>
              <TabsTrigger value="resumes">Resumes (4)</TabsTrigger>
              <TabsTrigger value="cover-letters">Cover letters (0)</TabsTrigger>
            </TabsList>
            <div className="flex justify-between items-center mb-6">
              <Input type="search" placeholder="Search" className="w-1/3" />
              <div className="flex items-center">
                <span className="mr-2">View:</span>
                <Button variant="ghost" size="icon">
                  <LayoutGridIcon className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ListIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <img
                    src={placeholder}
                    alt="Resume"
                    className="w-48 h-64 object-cover"
                  />
                  <Button variant="outline" size="sm" className="ml-auto">
                    <TagIcon className="mr-2" />
                    Add label
                  </Button>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-muted-foreground">
                  RESUME #1
                </h3>
                <h2 className="text-lg font-semibold">New Resume (4)</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Edited 16 days ago
                </p>
                <div className="mt-4 space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <FilePenIcon className="mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <DownloadIcon className="mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <TrashIcon className="mr-2" />
                    Delete
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Created on Jun 25, 2024
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <img
                    src={placeholder}
                    alt="Resume"
                    className="w-48 h-64 object-cover"
                  />
                  <Button variant="outline" size="sm" className="ml-auto">
                    <TagIcon className="mr-2" />
                    Add label
                  </Button>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-muted-foreground">
                  RESUME #2
                </h3>
                <h2 className="text-lg font-semibold">New Resume (3)</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Edited 21 days ago
                </p>
                <div className="mt-4 space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <FilePenIcon className="mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <DownloadIcon className="mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <TrashIcon className="mr-2" />
                    Delete
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Created on Jun 25, 2024
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex justify-between items-start">
                  <img
                    src={placeholder}
                    alt="Resume"
                    className="w-48 h-64 object-cover"
                  />
                  <Button variant="outline" size="sm" className="ml-auto">
                    <TagIcon className="mr-2" />
                    Add label
                  </Button>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-muted-foreground">
                  RESUME #3
                </h3>
                <h2 className="text-lg font-semibold">New Resume (3)</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Edited 21 days ago
                </p>
                <div className="mt-4 space-y-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <FilePenIcon className="mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <DownloadIcon className="mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full flex items-center justify-start"
                  >
                    <TrashIcon className="mr-2" />
                    Delete
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Created on Jun 25, 2024
                </p>
              </Card>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CopyIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
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

function LayoutGridIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function ListIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
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

function TagIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
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
