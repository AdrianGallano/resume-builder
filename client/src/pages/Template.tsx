import { Button } from "../@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../@/components/ui/select";
import { Card, CardContent } from "../@/components/ui/card";
import placeholder from "../img/placeholder.png";
import Headerx from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import { useCreateResumeMutation } from "../redux/api/resumeApi";
import { useAppSelector } from "../redux/hooks";
import { setResumeId } from "../redux/features/resume/resumeSlice";
import { useDispatch } from "react-redux";

export default function Template() {
  const [createResume, { isLoading }] = useCreateResumeMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const userId = useAppSelector((state) => state.auth.id);
  const username = useAppSelector((state) => state.auth.username);

  const handleCreateResume = async () => {
    if (!token) {
      console.error("User is not authenticated");
      return;
    }

    if (!userId || !username) {
      console.error("User data is not available");
      return;
    }

    try {
      const result = await createResume({
        title: `${username}'s Resume`,
        user: userId,
      }).unwrap();
      dispatch(setResumeId(result.id)); // Dispatch action to set resume ID
      navigate("/resume");
    } catch (error) {
      console.error("Failed to create resume: ", error);
    }
  };
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <div className="p-8">
          <Headerx />
        </div>
        <div className="px-4 md:px-8 lg:px-16 text-left">
          <header className="mb-8">
            <h1 className="text-2xl font-bold mb-3">
              Professional CV templates
            </h1>
            <p className="text-muted-foreground mb-4">
              Browse high quality Professional CV templates for your next
              design!
            </p>
          </header>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="flex items-center space-x-2">
                <FilterIcon className="h-4 w-4" />
                <span>Apply Filter</span>
              </Button>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="category1">Category 1</SelectItem>
                  <SelectItem value="category2">Category 2</SelectItem>
                  <SelectItem value="category3">Category 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-muted-foreground">8 templates</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card key={index} className="relative">
                <div className="absolute top-2 right-2 flex space-x-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <StarIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    onClick={handleCreateResume}
                    disabled={isLoading}
                  >
                    <ExpandIcon className="h-5 w-5" />
                  </Button>
                </div>
                <img
                  src={placeholder}
                  alt="Resume Template"
                  className="w-full"
                />
                <CardContent className="space-y-2">
                  <h3 className="text-lg font-semibold">Professional CV</h3>
                  <p className="text-muted-foreground">Resume by Author</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpandIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function FilterIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function StarIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
