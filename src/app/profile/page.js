"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    router.push('/');
  };
  useEffect(()=>{
    const auth = localStorage.getItem('auth');
        if(!auth){
            router.push('/');
        }
    })

  return (
    <>
      <div className="container">
        <h1 onClick={logout}>Logout</h1>
      </div>
    </>
  );
}
