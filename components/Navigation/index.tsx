"use client";
import { useRecommendationContext } from "@/providers/RecommendationContext";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ApiDown from "../ApiDown";

const Navigation = () => {
  const { isLoggedIn, isAPIDown } = useRecommendationContext();
  return (
    <>
      <nav className="p-2 w-full bg-primary border-b border-white flex justify-between">
        <Link href="/">
          <img
            src="/musicpal-logo.png"
            alt="Music Pal App"
            className="ml-4 w-10 h-10 rounded-full"
          />
        </Link>
        <ul className="text-white items-center text-bold  flex gap-4 justify-end">
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
      {isAPIDown ? <ApiDown /> : null}
    </>
  );
};

export default Navigation;
