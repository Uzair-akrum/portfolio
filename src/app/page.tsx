"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { FaNodeJs, FaReact, FaDocker, FaPython } from 'react-icons/fa';

export default function Component() {
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState("Home")
  const [hoverPosition, setHoverPosition] = useState<number | null>(null);
  const hoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleTabHover = (tabName: string) => {
    const items = ["Home", "Blog", "Snippets", "Resources", "Projects"];
    const index = items.indexOf(tabName);
    setHoverPosition(index);
    setActiveTab(tabName);
  }

  const handleNavMouseLeave = () => {
    setHoverPosition(null);
    setActiveTab("");
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
      <header className={`sticky top-0 z-50 transition-all duration-200 ${scrolled ? (darkMode ? "bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-md shadow-sm") : ""}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <button onClick={toggleDarkMode} className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
                {darkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>
            </div>
            <nav className="relative" onMouseLeave={handleNavMouseLeave}>
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-1 relative">
                <ul className="flex relative z-10">
                  {["Home", "Blog", "Snippets", "Resources", "Projects"].map((item, index) => (
                    <li key={item} className="relative flex-1">
                      <Link
                        href="#"
                        className={`block px-4 py-2 text-sm font-medium text-center transition-colors duration-200 ${activeTab === item
                          ? "text-teal-500 dark:text-teal-400"
                          : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                          }`}
                        onMouseEnter={() => handleTabHover(item)}
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                {hoverPosition !== null && (
                  <div
                    className="absolute top-1 bottom-1 left-1 w-[calc(20%-2px)] bg-white dark:bg-gray-700 transition-transform duration-300 ease-in-out rounded-md"
                    style={{ transform: `translateX(${hoverPosition * 100}%)` }}
                  />
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24">
        <section className="flex justify-between items-start mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Uzair Akram</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Building <span className="font-medium">Aceternity</span>, <span className="font-medium">Rogue</span> other cool things
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
              Software Engineer with 2.5 years of experience in building Scalable WebApps
              Find me on <a href="#" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">Linkedin</a> .
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=128&width=128"
              alt="Uzair"
              width={128}
              height={128}
              className="rounded-lg"
            />
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Recent Blogs</h2>
          <div className="space-y-4">
            <Card className="dark:bg-gray-800 cursor-pointer transition-transform hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Quickest Way to Improve Your Docker Image</CardTitle>
              </CardHeader>
              {/* <CardContent>
                <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">14,238 views</Badge>
              </CardContent> */}
            </Card>
            {/* <Card className="dark:bg-gray-800 cursor-pointer transition-transform hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-lg dark:text-white">Free portfolio website template that gets you hired in 2021</CardTitle>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">4,883 views</Badge>
              </CardContent>
            </Card> */}
          </div>
          <Button variant="link" className="mt-4 p-0 dark:text-gray-300">
            See All Blogs
            <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Tech Stack</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { name: 'Node.js', icon: FaNodeJs },
              { name: 'React', icon: FaReact },
              { name: 'Docker', icon: FaDocker },
              { name: 'Python', icon: FaPython },
            ].map((tech) => (
              <Card key={tech.name} className="dark:bg-gray-800 transition-all duration-300 hover:shadow-lg group relative overflow-hidden cursor-pointer hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardContent className="relative z-10 flex flex-col items-center justify-center p-2">
                  <tech.icon className="w-8 h-8 mb-2 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" />
                  <h3 className="text-xs font-semibold text-gray-900 dark:text-white text-center">{tech.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="dark:bg-gray-800 transition-all duration-300 hover:shadow-lg group relative overflow-hidden cursor-pointer hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
                  IntellaWaste
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="mb-4 text-gray-600 dark:text-gray-300">IntellaWaste is an advanced software solution designed to enhance waste management processes. Developed by Global Trash Solutions (GTS), it provides real-time monitoring and automated invoicing capabilities, making it a comprehensive tool for businesses looking to optimize their waste handling practice</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">GPT-4o Vision</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Next.js</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">React</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">TailwindCSS</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Python</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">NestJS</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Docker</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Micro-Services</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Postgres</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Redis</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">App Platform</Badge>





                </div>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800 transition-all duration-300 hover:shadow-lg group relative overflow-hidden cursor-pointer hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-2 dark:text-white">
                  <div className="w-6 h-6 bg-gray-200 dark:bg-gray-700 rounded" />
                  ForthGroup
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="mb-4 text-gray-600 dark:text-gray-300">Forth Group aims to streamline property management processes through technology. They provide consulting services to help property managers optimize their use of platforms like Buildium, ensuring that clients can leverage the software's full capabilities.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Next.js</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">React</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">TailwindCSS</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Full-Stack</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Rabbit-MQ</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Docker</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">Micro-Services</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">MongoDB</Badge>
                  <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">AWS EC2</Badge>





                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}