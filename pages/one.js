import Link from "next/link";
import { useAuth } from "../contexts/auth";

const CheckAuth = () => {
  const { isAuthenticated, userInfo } = useAuth();
  return (
    <div>
      <Link href="/">Goto Login</Link>
      <h3>One Page</h3>
      {isAuthenticated
        ? `You are loged ${userInfo.username}`
        : "You are not loged"}
    </div>
  );
};

export default CheckAuth;
