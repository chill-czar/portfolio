import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const projects = [
  {
    title: "SaaS | Realtime event tracking in Discord dm ",
    description:
      "Developed a real-time event monitoring platform that integrates with Discord to send instant notifications for critical events. Utilized Next.js, React, Prisma, and serverless architecture for efficient event tracking and secure user management.",
    technologies: [
      "⚛️ React",
      "🖥️ Next.js",
      "🔐 Clerk",
      "🗃️ Prisma",
      "📊 Neon",
      "🔄 Upstash Redis",
      "🔧 Hono",
      "🔒 Zod",
      "🎨 Tailwind CSS",
      "📋 React Hook Form",
    ],
    githubUrl: "https://github.com/chill-czar/pingpanda",
  },
  {
    title: "Real time chat app with socket.io",
    description:
      " Built a real-time chat app with React.js, Node.js, and MongoDB, enabling instant message exchange and secure user authentication. Implemented responsive design with Tailwind CSS and deployed the app using Heroku for easy access.",
    technologies: [
      "⚛️ React",
      "🚀 Vite",
      "🌐 Express",
      "💬 Socket.io",
      "🗄️ MongoDB",
      "🔋 Zustand",
      "🔗 Node.js",
      "🛠️ Mongoose",
      "☁️ Cloudinary",
      "🔐 JWT",
      "🔑 Bcrypt.js",
      "💅 DaisyUI",
      "🎨 Tailwind CSS",
    ],
    githubUrl: "https://github.com/chill-czar/employee-management-system",
  },
  {
    title: "Employee Management System",
    description:
      "Created a web application for managing employee tasks and performance with React and Vite, offering both front-end and back-end integration. Designed intuitive dashboards and secure authentication while optimizing performance metric calculations.",
    technologies: ["⚛️ React", "⚡ Vite", "🎨 Tailwind CSS", "📦 Context API"],
    githubUrl: "https://github.com/chill-czar/employee-management-system",
  },
];

export default function ProjectList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              {project.technologies.map((tech, i) => (
                <Badge key={i} variant="secondary" className="mr-2 mb-2">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex space-x-4 bottom-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                <Github className="mr-1 h-4 w-4" />
                GitHub
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
