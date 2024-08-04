"use client";
import Link from "next/link";
import ProfileIcon from "../../../public/profile.svg";
import Image from "next/image";
import useAuth from "./useAuth"; // Adjust the path as needed

export default function ProfileButton() {
  const isLogin = useAuth();

  return (
    <li>
      <Link href={isLogin ? '/profile' : '/login'}>
        <Image src={ProfileIcon} alt="Profile Icon" />
      </Link>
    </li>
  );
}
