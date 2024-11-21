import { File, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/chill-czar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sarthak-chaudhari-b2bb1325b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1b13eRe799Kx1FjV_m4-RIS_v8ub9XXutojPEx_zHFHg/edit?usp=sharing"
            className="text-muted-foreground hover:text-primary"
          >
            <File className="h-6 w-6" />
            <span className="sr-only">Resume</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
