"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  useTypewriter,
  Cursor,
  TypewriterHelper,
} from "react-simple-typewriter";

export default function Header() {
  const [text]: [string, TypewriterHelper] = useTypewriter({
    words: ["Sarthak Chaudhari", "Fullstack Developer"],
    loop: {},
  });

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          I&apos;m
          <span className="vt323-regular "> {text} </span>
          <Cursor />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" asChild>
                <Link href="#skills">Skills</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="#projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button variant="ghost" asChild>
                <Link href="#contact">Contact</Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
