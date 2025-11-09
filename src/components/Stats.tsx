const stats = [
  { value: "50K+", label: "Articles Generated" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "10x", label: "Faster Content Creation" },
  { value: "24/7", label: "AI Availability" },
];

export function Stats() {
  return (
    <section className="bg-primary text-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="mx-auto max-w-[1200px] px-[120px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mb-2 text-4xl" style={{ fontWeight: 700 }}>{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
