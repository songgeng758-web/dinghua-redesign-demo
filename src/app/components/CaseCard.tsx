interface CaseCardProps {
  companyName: string;
  description: string;
  industry: string;
  logoPlaceholder: string;
  highlights?: string[];
  featured?: boolean;
}

export default function CaseCard({
  companyName,
  description,
  industry,
  logoPlaceholder,
  highlights = [],
  featured = false
}: CaseCardProps) {
  if (featured) {
    return (
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden border-t-2 border-transparent hover:border-accent">
        <div className="grid md:grid-cols-5 gap-0">
          <div className="md:col-span-2 bg-gradient-to-br from-primary via-primary to-[#0d2f54] group-hover:from-[#0d2f54] group-hover:via-primary group-hover:to-primary transition-all duration-500 flex items-center justify-center p-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent mb-4">
                {logoPlaceholder}
              </div>
              <div className="text-sm text-white/60">重点案例</div>
            </div>
          </div>

          <div className="md:col-span-3 p-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/5 mb-4">
              <span className="text-xs text-accent font-medium">{industry}</span>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">{companyName}</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

            {highlights.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="text-xs text-accent px-3 py-1 rounded-full border border-accent/30 bg-accent/5"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            )}

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors">
                查看详情
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group overflow-hidden border-t-2 border-transparent hover:border-accent">
      <div className="h-48 bg-gradient-to-br from-primary via-primary to-[#0d2f54] group-hover:from-[#0d2f54] group-hover:via-primary group-hover:to-primary transition-all duration-500 flex items-center justify-center p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
        </div>
        <div className="text-center relative z-10">
          <div className="text-5xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
            {logoPlaceholder}
          </div>
          <div className="text-sm text-white/60">客户标识</div>
        </div>
      </div>

      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{companyName}</h3>
        <p className="text-gray-600 leading-relaxed mb-4 min-h-[3rem]">{description}</p>

        {highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {highlights.map((highlight, index) => (
              <span
                key={index}
                className="text-xs text-accent px-3 py-1 rounded-full border border-accent/30 bg-accent/5"
              >
                {highlight}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            <span className="text-sm text-accent font-medium">{industry}</span>
          </div>

          <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
            <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
              查看详情
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
