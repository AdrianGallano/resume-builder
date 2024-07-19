import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../@/components/ui/button";
import { Input } from "../@/components/ui/input";
import Sidebar from "../components/Sidebar";
import Headerx from "../components/Header";
import { PersonalInformation } from "../redux/types/profile";

export default function UserProfile() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<PersonalInformation>();
  const [submitting, setSubmitting] = useState(false);

  // Handle form submission
  const onSubmit = async (data: any) => {
    setSubmitting(true);
    try {
      // Replace with your API call to update user profile
      console.log("Form data:", data);
      // Example: await updateUserProfile(data);
      alert("Profile updated successfully!");
      navigate("/"); // Redirect to home page or any other route
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again later.");
    } finally {
      setSubmitting(false);
    }
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
          <h2 className="text-2xl font-bold mb-4 text-left">Profile Information</h2>
          <p className="text-gray-600 mb-4 text-left">
            Update your personal information.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    {...register("full_name", { required: "Full Name is required" })}
                    type="text"
                    id="full_name"
                    placeholder="Full Name"
                    defaultValue="Tom"
                  />
                  {errors.full_name && (
                    <span className="text-red-500">{errors.full_name.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    {...register("email", { required: "Email is required" })}
                    type="email"
                    id="email"
                    placeholder="Email"
                    defaultValue="tom@example.com"
                  />
                  {errors.email && (
                    <span className="text-red-500">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    {...register("phone_number", { required: "Phone Number is required" })}
                    type="tel"
                    id=" phone_number"
                    placeholder="Phone Number"
                    defaultValue="+1234567890"
                  />
                  {errors.phone_number && (
                    <span className="text-red-500">{errors.phone_number.message}</span>
                  )}
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                    Address
                  </label>
                  <Input
                    {...register("address", { required: "Address is required" })}
                    type="text"
                    id="address"
                    placeholder="Address"
                    defaultValue="123 Main St"
                  />
                  {errors.address && (
                    <span className="text-red-500">{errors.address.message}</span>
                  )}
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">
                    LinkedIn
                  </label>
                  <Input
                    {...register("linkedIn")}
                    type="url"
                    id="linkedin"
                    placeholder="LinkedIn"
                    defaultValue="https://linkedin.com/in/tom"
                  />
                </div>
                <div>
                  <label htmlFor="github" className="block text-sm font-medium text-gray-700">
                    Github
                  </label>
                  <Input
                    {...register("github")}
                    type="url"
                    id="github"
                    placeholder="Github"
                    defaultValue="https://github.com/tom"
                  />
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                    Website
                  </label>
                  <Input
                    {...register("website")}
                    type="url"
                    id="website"
                    placeholder="Website"
                    defaultValue="https://tom.com"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <Button variant="default" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : "Save Changes"}
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
