interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="space-y-6 py-8">
      <h2 className="text-xl text-brand font-fell mb-2">{title}</h2>
      <div className="text-base text-gray-300 space-y-4 font-marcellus">
        {children}
      </div>
    </section>
  );
}
