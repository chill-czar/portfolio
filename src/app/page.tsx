import SkillsChart from "../components/SkillsChart";
import ProjectList from "../components/ProjectList";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <SkillsChart />
            <Card>
              <CardHeader>
                <CardTitle>Skill Details</CardTitle>
                <CardDescription>
                  A breakdown of my technical expertise
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <strong>Frontend:</strong> Next.js, React, TypeScript,
                    JavaScript, Redux, Tailwind CSS
                  </li>
                  <li>
                    <strong>Backend:</strong> Node.js, Express
                  </li>
                  <li>
                    <strong>Database:</strong> MongoDB, PostgreSQL
                  </li>
                  <li>
                    <strong>Authentication:</strong> Clerk Auth
                  </li>
                  <li>
                    <strong>API Development:</strong> RESTful APIs, GraphQL
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="projects">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <ProjectList />
        </section>
      </main>
      <Footer />
    </div>
  );
}
