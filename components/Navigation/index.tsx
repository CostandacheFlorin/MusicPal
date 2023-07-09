"use client";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const Navigation = () => {
  const { isLoggedIn } = useRecommendationContext();
  return (
    <>
      <nav className="p-4 w-full bg-primary border-b border-white flex justify-between">
        <div className=" ml-4 text-white">Music Pal</div>
        <ul className="text-white text-bold  flex gap-4 justify-end">
          <Link href="/settings">
            <div className="hover:text-tertiary">Settings</div>
          </Link>
          <Link href="/discover">
            <div className="hover:text-tertiary">Discover</div>
          </Link>
          {!isLoggedIn ? (
            <Link href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`}>
              <div className="hover:text-tertiary">Login</div>
            </Link>
          ) : (
            <div
              onClick={() => {
                localStorage.removeItem("userData");
                window.location.href = "/";
              }}
              className="hover:text-tertiary"
            >
              Log out
            </div>
          )}
        </ul>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Navigation;
