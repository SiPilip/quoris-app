/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */

'use client';

import * as React from 'react';
import { Label, Pie, PieChart } from 'recharts';

import { Card, CardContent } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

const chartData = [
  { type: 'Pesan Keluar', count: 45, fill: '#4285F4' },
  { type: 'Pesan Gagal', count: 8, fill: '#34A853' },
  { type: 'Pesan Masuk', count: 23, fill: '#E0E0E0' },
];

const chartConfig = {
  'Pesan Keluar': {
    label: 'Total Pesan Keluar',
    color: '#4285F4',
  },
  'Pesan Gagal': {
    label: 'Total Pesan Gagal',
    color: '#34A853',
  },
  'Pesan Masuk': {
    label: 'Total Pesan Masuk',
    color: '#E0E0E0',
  },
};

export function ComponentChart() {
  const totalMessages = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.count, 0);
  }, []);

  return (
    <Card className="flex w-full flex-col border-0">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="-m-14 mx-auto -mb-8 aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="count"
              nameKey="type"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalMessages.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Pesan
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
