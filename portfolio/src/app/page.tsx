import Header from "@/components/Header";
import ProjectList from "./../components/ProjectList";
import SkillsChart from "./../components/SkillsChart";
import Footer from "@/components/Footer";
import { SkillTooltip } from "@/components/SkillTooltip";

export default function Home() {
  return (
    <>
      <Header />
      <SkillsChart />
      <SkillTooltip />
      <ProjectList />
      <Footer />
    </>
  );
}
