import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  featured?: boolean;
}

export default function ProductCard({ icon: Icon, name, description, featured = false }: ProductCardProps) {
  if (featured) {
    return (
      <div className="bg-gradient-to-br from-primary via-primary to-[#0d2f54] rounded-xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 cursor-pointer group">
        <div className="mb-6">
          <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
            <Icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
          </div>
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{name}</h3>
        <p className="text-white/80 leading-relaxed mb-6">{description}</p>
        <a href="#" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-2 transition-colors group-hover:gap-3">
          查看详情
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 cursor-pointer group relative border-t-2 border-accent/30">
      <div className="mb-5">
        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{name}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <a href="#" className="text-accent hover:text-accent/80 font-medium inline-flex items-center gap-1 transition-all group-hover:gap-2">
        查看详情
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
