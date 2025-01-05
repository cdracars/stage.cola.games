"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

interface TimelineEventProps {
  title: string;
  date: string;
  description: React.ReactNode;
}

export function TimelineEvent({
  title,
  date,
  description,
}: TimelineEventProps) {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 text-textPrimary">
      <div className="absolute -left-4 top-0 bg-brand rounded-full h-6 w-6 border-4 border-background"></div>
      <h2 className="text-xl font-cinzel text-foreground mb-2">{title}</h2>
      <h4 className="text-sm font-dell text-brand italic">{date}</h4>
      <div className="mt-4 text-base font-marcellus">{description}</div>
    </div>
  );
}

interface TimelineProps {
  events: {
    title: string;
    date: string;
    description: React.ReactNode;
  }[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <Box className="border-l-2 border-brand mx-4 pb-4">
      {events.map((event, index) => (
        <TimelineEvent
          key={index}
          title={event.title}
          date={event.date}
          description={event.description}
        />
      ))}
    </Box>
  );
}
