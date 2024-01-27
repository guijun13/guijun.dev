import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { JSX, SVGProps } from 'react';

export default function Home() {
  return (
    <main>
      <div
        key="1"
        className="min-h-screen bg-[#262a33] text-[#e5f7ef] font-mono scroll-behavior-smooth"
      >
        <header className="flex h-20 w-full items-center px-2 sm:px-4 md:px-6">
          <nav className="ml-auto flex gap-2 sm:gap-4 md:gap-6">
            <Link
              className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
              href="#"
            >
              Home
            </Link>
            <Link
              className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
              href="#"
            >
              About
            </Link>
            <Link
              className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
              href="#"
            >
              Projects
            </Link>
            <Link
              className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <Toggle
            aria-label="Toggle language"
            className="ml-2 sm:ml-4 text-[#e5f7ef]"
            variant="outline"
          >
            <FlagIcon className="h-4 w-4" />
            <FlagIcon className="h-4 w-4" />
          </Toggle>
          <Toggle
            aria-label="Toggle theme"
            className="ml-2 sm:ml-4 text-[#e5f7ef]"
            variant="outline"
          >
            <MoonIcon className="h-4 w-4" />
          </Toggle>
        </header>
        <main className="flex flex-col gap-8 sm:gap-16 px-2 sm:px-4 md:px-6 py-6 sm:py-12">
          <section
            className="space-y-2 sm:space-y-4 text-center min-h-screen flex flex-col justify-center"
            id="home"
          >
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-[#e5f7ef]">
              Hi, I&apos;m Guilherme Jun
            </h1>
            <p className="mx-auto max-w-[700px] text-[#e5f7ef] md:text-xl/relaxed">
              A passionate web developer with experience in various technologies.
            </p>
            <Button className="mx-auto bg-[#43ffaf] text-[#262a33]">Hire me</Button>
          </section>
          <section className="space-y-2 sm:space-y-4 min-h-screen" id="about">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-center text-[#e5f7ef]">
              About Me
            </h2>
            <p className="mx-auto max-w-[700px] text-[#e5f7ef] md:text-xl/relaxed text-center">
              I am a full-stack web developer with a passion for creating dynamic and user-friendly
              websites. I specialize in JavaScript, React, Node.js, and MongoDB. I am always eager
              to learn new technologies and improve my skills.
            </p>
          </section>
          <section className="space-y-2 sm:space-y-4 min-h-screen" id="projects">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-center text-[#e5f7ef]">
              My Projects
            </h2>
            <div className="grid gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-[#262a33] text-[#e5f7ef]">
                <CardHeader>
                  <CardTitle>Project 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#e5f7ef]">A brief description of the project goes here.</p>
                </CardContent>
                <CardFooter>
                  <Link
                    className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
                    href="#"
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </section>
          <section className="space-y-2 sm:space-y-4 min-h-screen" id="social">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-center text-[#e5f7ef]">
              Follow Me
            </h2>
            <div className="flex justify-center space-x-4 sm:space-x-8">
              <Link href="#">
                <FacebookIcon className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
              <Link href="#">
                <TwitterIcon className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
              <Link href="#">
                <InstagramIcon className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
              <Link href="#">
                <LinkedinIcon className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
              <Link href="#">
                <GithubIcon className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 4-1V3s-1 1-4 1-5-2-8-2-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function MoonIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 9 1 1-9-9Z" />
    </svg>
  );
}

function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 12.63 8 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 1 6v7h-4v-7a2 2 0-2-2 0-2 2v7h-4v-7a6 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0-1-3.5c3 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2c-.3 1.15-.3 2.35 3.5A5.403 5.403 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
