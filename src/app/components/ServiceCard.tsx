import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 cursor-pointer group border-t-2 border-accent/30">
      <div className="mb-6">
        <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
          <Icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
