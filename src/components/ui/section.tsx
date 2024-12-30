interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-6 py-8">
      <h2 className="text-3xl font-extrabold text-brand-400">{title}</h2>
      <div className="text-lg text-gray-300 space-y-4">{children}</div>
    </section>
  );
}
