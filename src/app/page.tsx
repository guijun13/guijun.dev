'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from '@/components/ui/card';
import { FiLinkedin, FiGithub, FiFlag, FiMoon, FiFileText } from 'react-icons/fi';
import TextLink from '@/components/textLink';

interface IGithubProjects {
  full_name: string;
  name: string;
  language: string;
  html_url: string;
}

export default function Home(): JSX.Element {
  const [githubProjects, setGithubProjects] = useState<IGithubProjects[] | []>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/guijun13/repos')
      .then((serverResponse) => serverResponse.json())
      .then((data) => setGithubProjects(data));
  }, []);

  return (
    <div
      key="1"
      className="min-h-screen bg-[#262a33] text-[#e5f7ef] font-mono scroll-behavior-smooth"
    >
      <header className="flex h-20 w-full items-center px-2 sm:px-4 md:px-6 fixed rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <nav className="ml-auto flex gap-2 sm:gap-4 md:gap-6">
          <TextLink href="">Home</TextLink>
          <TextLink href="about">About</TextLink>
          <TextLink href="projects">Projects</TextLink>
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
      <main className="flex flex-col px-2 sm:px-4 md:px-6">
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
          <div className="flex justify-center space-x-4 sm:space-x-8">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1-6vfA82C9raS6MbSfkMR1FUhCtT4gkB3/view?usp=sharing"
            >
              <FiFileText className="h-4 sm:h-6 w-4 sm:w-6 text-[#e5f7ef] transition-all transform hover:scale-110" />
            </Link>
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
        <section className="space-y-2 sm:space-y-4 min-h-screen pt-20" id="about">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-center text-[#e5f7ef]">
            About Me
          </h2>
          <p className="mx-auto max-w-[700px] text-[#e5f7ef] md:text-xl/relaxed text-center">
            I am a computer science student at Universidade de São Paulo (USP). I have two years of
            experience as a software engineer intern at Rocket.Chat, a leading open-source chat
            platform. My core competencies include front-end web and mobile development with React
            and Typescript, software development and UX/UI design with Figma.
          </p>
        </section>
        <section className="space-y-2 sm:space-y-4 min-h-screen py-20" id="projects">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tighter md:text-3xl lg:text-4xl text-center text-[#e5f7ef]">
            My Projects
          </h2>
          {/* <h4 className="text-center">🚧 Under construction 🚧</h4> */}
          <div className="grid gap-2 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {githubProjects.map((project) => {
              return (
                <Card key={project?.full_name} className="bg-[#262a33] text-[#e5f7ef]">
                  <CardHeader>
                    <CardTitle>{project.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#e5f7ef]">
                      {project.language != null ? project.language : '?'}
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link
                      className="text-xs sm:text-sm font-medium hover:underline underline-offset-4 text-[#e5f7ef]"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={project.html_url}
                    >
                      View Project
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
