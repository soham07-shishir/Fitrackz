"use client";

import Link from "next/link";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export function Footer() {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 justify-between py-6">
          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <LoginLink>Login</LoginLink>
              </li>
              <li>
                <RegisterLink >Register</RegisterLink>
              </li>
              <li>
                <Link href="/newsletter">Newsletter</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Attribution</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.freepik.com" target="_blank">
                  Freepik
                </Link>
              </li>
              <li>
                <Link href="https://www.remove.bg" target="_blank">
                  remove.bg
                </Link>
              </li>
              <li>
                <Link href="https://www.unsplash.com" target="_blank">
                  Unsplash
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Powered by</h3>
            <Link href="https://kinde.com" target="_blank">
              <Image
                src="/kinde-logo.png"
                alt="Kinde"
                width={150}
                height={50}
              />
            </Link>
          </div>
        </div>
        <div className="text-center">
          <p>&copy; 2025 Fitrackz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
