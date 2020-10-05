import Link from "next/link";
import { useAuth } from "../contexts/auth";

const CheckAuth = () => {
  const { isAuthenticated, userInfo } = useAuth();
  console.log(userInfo);
  return (
    <div>
      <Link href="/">Goto Login</Link>
      <h3>Protected Route</h3>
      {isAuthenticated
        ? `You are loged ${userInfo.username}`
        : "You are not loged"}
      <p></p>
    </div>
  );
};

export default CheckAuth;
