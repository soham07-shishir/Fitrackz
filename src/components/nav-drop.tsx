"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LoginLink,
  RegisterLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

interface SessionProps {
  isUserAuthenticated: boolean;
}

interface UserProps {
  user: object;
}

// export function ProfileDrop({ isUserAuthenticated, user}: SessionProps & UserProps) {
export function ProfileDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src="/img/header/placeholder_profile.jpg" width={20} height={20} alt="YOU!"/>
        {/* <Image src={null} alt={"You!"} /> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {/* {isUserAuthenticated ? (
          <>
            <DropdownMenuItem>Dashboard</DropdownMenuItem>
            <DropdownMenuItem>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <LoginLink>Login</LoginLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <RegisterLink>Register</RegisterLink>
            </DropdownMenuItem>
          </>
        )} */}
        <DropdownMenuItem>
          <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        <DropdownMenuItem>
          <RegisterLink>Register</RegisterLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LoginLink>Login</LoginLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutLink>Logout</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
