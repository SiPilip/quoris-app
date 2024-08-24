'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { month: '00:00', desktop: 0.7 },
  { month: '01:00', desktop: 0.68 },
  { month: '02:00', desktop: 0.65 },
  { month: '03:00', desktop: 0.62 },
  { month: '04:00', desktop: 0.6 },
  { month: '05:00', desktop: 0.58 },
  { month: '06:00', desktop: 0.55 },
  { month: '07:00', desktop: 0.53 },
  { month: '08:00', desktop: 0.5 },
  { month: '09:00', desktop: 0.52 },
  { month: '10:00', desktop: 0.54 },
  { month: '11:00', desktop: 0.56 },
  { month: '12:00', desktop: 0.58 },
  { month: '13:00', desktop: 0.6 },
  { month: '14:00', desktop: 0.62 },
  { month: '15:00', desktop: 0.64 },
  { month: '16:00', desktop: 0.66 },
  { month: '17:00', desktop: 0.68 },
  { month: '18:00', desktop: 0.7 },
  { month: '19:00', desktop: 0.67 },
  { month: '20:00', desktop: 0.65 },
  { month: '21:00', desktop: 0.63 },
  { month: '22:00', desktop: 0.6 },
  { month: '23:00', desktop: 0.58 },
  { month: '24:00', desktop: 0.55 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#3366FF',
  },
};

export function AreaChartComponent() {
  return (
    <Card>
      <CardHeader>
        {/* <CardTitle>Area Chart - Linear</CardTitle> */}
        {/* <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription> */}
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={5}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={5}
              domain={[0, 1]}
              ticks={[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]}
              interval={0} // Menampilkan semua ticks
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
