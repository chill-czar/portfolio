"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const skills = [
  { name: "Frontend", value: 95 },
  { name: "Backend", value: 85 },
  { name: "Database", value: 65 },
  { name: "Devops", value: 40 },
  { name: "System Design", value: 40 },
];

export default function SkillsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills Overview</CardTitle>
        <CardDescription>
          A visual representation of my technical skills
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            skills: {
              label: "Skills",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar
                dataKey="value"
                fill="var(--color-skills)"
                fillOpacity={0.6}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
