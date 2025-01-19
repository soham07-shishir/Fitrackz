"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";
import { ProfileDrop } from "./nav-drop";
import { useTheme } from "next-themes";

export function Header() {
  // const { isUserAuthenticated, user } = useSession();
  const { theme } = useTheme();
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold text-primary">
          {(theme == "dark") ? (
            <Image src="/img/header/icon_dark.png" alt="Fitrackz" width={120} height={100}/>
          ) : (
            <Image src="/img/header/icon_light.png" alt="Fitrackz" width={120} height={100}/>
          )}
          </Link>
        </div>
        <nav className="flex space-x-4 items-center">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <ProfileDrop />
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
