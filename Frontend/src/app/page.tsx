"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/admin/home");
  }, []);

  return (
    <main>
      <div></div>
    </main>
  );  
}
