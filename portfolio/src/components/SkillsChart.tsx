'use client'

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const skills = [
  { name: 'React', value: 90 },
  { name: 'TypeScript', value: 85 },
  { name: 'Node.js', value: 80 },
  { name: 'CSS', value: 75 },
  { name: 'Python', value: 70 },
  { name: 'SQL', value: 65 },
]

export default function SkillsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills Overview</CardTitle>
        <CardDescription>A visual representation of my technical skills</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            skills: {
              label: 'Skills',
              color: 'hsl(var(--chart-1))',
            },
          }}
          className="h-[300px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <Radar dataKey="value" fill="var(--color-skills)" fillOpacity={0.6} />
              <ChartTooltip content={<ChartTooltipContent />} />
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

