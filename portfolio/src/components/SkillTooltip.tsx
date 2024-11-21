import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface SkillTooltipProps {
  active?: boolean
  payload?: Array<{ payload: { category: string; value: number; skills: string[] } }>
}

export function SkillTooltip({ active, payload }: SkillTooltipProps) {
  if (active && payload && payload.length) {
    const data = payload[0].payload
    return (
      <Card className="bg-background border rounded shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
        <CardHeader>
          <CardTitle>{data.category}</CardTitle>
          <CardDescription>Proficiency: {data.value}%</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-1">
            {data.skills.map((skill, index) => (
              <li key={index} className="text-sm transition-all duration-300 ease-in-out hover:translate-x-1 hover:text-primary">
                • {skill}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    )
  }
  return null
}

