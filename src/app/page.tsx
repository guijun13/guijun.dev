import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { FiLinkedin, FiGithub, FiFlag, FiMoon } from 'react-icons/fi';
import TextLink from '@/components/textLink';

export default function Home() {
  return (
    <main>
      <div
        key="1"
        className="min-h-screen bg-[#262a33] text-[#e5f7ef] font-mono scroll-behavior-smooth"
      >
        <header className="flex h-20 w-full items-center px-2 sm:px-4 md:px-6">
          <nav className="ml-auto flex gap-2 sm:gap-4 md:gap-6">
            <TextLink href="">Home</TextLink>
            <TextLink href="about">About</TextLink>
            <TextLink href="projects">Projects</TextLink>
            <TextLink href="social">Contact</TextLink>
          </nav>
          {/* <Toggle
            aria-label="Toggle language"
            className="ml-2 sm:ml-4 text-[#e5f7ef]"
            variant="outline"
          >
            <FiFlag className="h-4 w-4" />
          </Toggle>
          <Toggle
            aria-label="Toggle theme"
            className="ml-2 sm:ml-4 text-[#e5f7ef]"
            variant="outline"
          >
            <FiMoon className="h-4 w-4" />
          </Toggle> */}
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
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/guilherme-jun-grillo"
              >
                <FiLinkedin className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
              <Link rel="noopener noreferrer" target="_blank" href="https://github.com/guijun13">
                <FiGithub className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
              </Link>
            </div>
          </section>
        </main>
      </div>
    </main>
  );
}
