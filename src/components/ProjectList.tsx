import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SaaS | Realtime event tracking in Discord dm ",
    description: "A full-stack application to track events in Discord DMs",
    technologies: ["Nextjs", "Neon", "Prisma", "Clerk", "Zod"],
    githubUrl: "https://github.com/chill-czar/pingpanda",
    liveUrl: "https://github.com/chill-czar/pingpanda",
  },
  {
    title: "Employee Management System",
    description: " A full-stack application to manage employees",
    technologies: ["React", "Tailwind CSS", "ContextApi", "LocalStorage"],
    githubUrl: "https://github.com/chill-czar/employee-management-system",
    liveUrl: "https://github.com/chill-czar/employee-management-system",
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
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-primary"
              >
                <ExternalLink className="mr-1 h-4 w-4" />
                Live Demo
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
