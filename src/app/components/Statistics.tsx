import { Users, TrendingUp, Clock, Box } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: '企业客户', icon: Users },
  { value: 98, suffix: '%', label: '客户满意度', icon: TrendingUp },
  { value: 10, suffix: '年', label: '行业经验', icon: Clock },
  { value: 50, suffix: '+', label: '核心产品', icon: Box }
];

export default function Statistics() {
  return (
    <section className="py-28 bg-gradient-to-br from-primary via-[#0d2f54] to-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-accent"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-accent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}{stat.suffix}
                </div>
                <div className="h-px w-12 bg-accent/30 mx-auto mb-3"></div>
                <div className="text-white text-lg">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
