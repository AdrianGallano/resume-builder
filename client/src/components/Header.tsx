import { Link } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "../@/components/ui/avatar";
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import "../app/globals.css";

export default function Headerx() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Input
          type="search"
          placeholder="Search or type a command"
          className="w-64"
        />
        <span className="text-gray-500">⌘ F</span>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="default">Hire Professional</Button>
        <Button variant="ghost" size="icon">
          <BellIcon className="w-6 h-6" />
        </Button>
        <Avatar>
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </div>
    </header>
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
