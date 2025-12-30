import { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Props {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/login"); // redirect if not logged in
    } else {
      setAuthorized(true);
    }
  }, [router]);

  if (!authorized) return null; // blank while checking

  return <>{children}</>;
};

export default PrivateRoute;
