import { LucideIcon } from 'lucide-react';

interface IndustryCardProps {
  icon: LucideIcon;
  name: string;
  value: string;
  capabilities: string[];
}

export default function IndustryCard({ icon: Icon, name, value, capabilities }: IndustryCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 cursor-pointer group border-t-2 border-transparent hover:border-accent">
      <div className="mb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
          <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{value}</p>

      <div className="flex flex-wrap gap-2">
        {capabilities.map((capability, index) => (
          <span
            key={index}
            className="text-xs text-accent px-3 py-1 rounded-full border border-accent/30 bg-accent/5"
          >
            {capability}
          </span>
        ))}
      </div>
    </div>
  );
}
