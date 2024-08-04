import React from "react";
import { AuthForm } from "./AuthForm";

// Define a type for your User Profile (optional, but good practice)
interface UserProfileProps {
  // ... add properties if your UserProfile component takes any
}

// UserProfile with type declaration
const UserProfile: React.FC<UserProfileProps> = () => {
  return (
    <div>
      <h1>Welcome to Your Profile</h1>
      {/* ... Your profile content ... */}
    </div>
  );
};

const Account: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem("dionysus-id");

  return <div>{isLoggedIn ? <UserProfile /> : <AuthForm />}</div>;
};

export default Account;
