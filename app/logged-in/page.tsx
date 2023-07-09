"use client";
import { useRouter, useSearchParams } from "next/navigation";

const LoggedIn = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  if (data) {
    localStorage.setItem("userData", data.toString());
  }
  router.push("/");
  return <main>Main Page</main>;
};

export default LoggedIn;
