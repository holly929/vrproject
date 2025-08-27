'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const chartData = [
  { month: 'January', time: 186 },
  { month: 'February', time: 305 },
  { month: 'March', time: 237 },
  { month: 'April', time: 173 },
  { month: 'May', time: 209 },
  { month: 'June', time: 250 },
];

const chartConfig = {
  time: {
    label: 'Time (minutes)',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

export function MonthlyLearningChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Monthly Learning</CardTitle>
        <CardDescription>
          Time spent in learning modules over the last 6 months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="time" fill="var(--color-time)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
