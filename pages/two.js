import Link from "next/link";
import { useAuth } from "../contexts/auth";

const CheckAuth = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div>
      <Link href="/">Goto Login</Link>
      <h3>Two Page</h3>
      {isAuthenticated ? "You are loged" : "You are not loged"}
    </div>
  );
};

export default CheckAuth;
