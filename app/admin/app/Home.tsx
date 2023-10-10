"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Loader from "./components/Loader/Loader";

export const HomePage = ({ name }) => {
  const router = useRouter();
  React.useEffect(() => {
    if (name) router.push("/dashboard/home/" + name);
  }, []);

  if (name) return <Loader />;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white ">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full ">
        <Image className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] " src="/mosque2.png" alt="Next.js Logo" width={280} height={100} priority />
      </div>
      <h1 className="  mb-10">
        You don't seem to be logged in.
        <Link className="text-indigo-500 hover:underline" href="/login">
          Login here
        </Link>
      </h1>
    </main>
  );
};
