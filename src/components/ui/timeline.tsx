"use client";

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
      <h2 className="text-xl font-fell text-foreground mb-2">{title}</h2>
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
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-belle text-brand mb-8 text-center">
          City Timeline
        </h1>
        <div className="border-l-2 border-brand">
          {events.map((event, index) => (
            <TimelineEvent
              key={index}
              title={event.title}
              date={event.date}
              description={event.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
