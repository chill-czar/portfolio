import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://ecommerce-platform.example.com',
  },
  {
    title: 'Weather App',
    description: 'A weather application using OpenWeatherMap API',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/weather-app',
    liveUrl: 'https://weather-app.example.com',
  },
  {
    title: 'Task Manager',
    description: 'A simple task management application with user authentication',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://task-manager.example.com',
  },
]

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
            <div className="flex space-x-4">
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
  )
}

