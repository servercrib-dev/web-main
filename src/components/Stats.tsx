const stats = [
  {
    value: "40%",
    label: "Reduction in Manual Errors",
  },
  {
    value: "99.9%",
    label: "Uptime Reliability",
  },
  {
    value: "35%",
    label: "Fewer Security Incidents",
  },
  {
    value: "50%",
    label: "Cloud Cost Savings",
  },
];

const Stats = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
