interface FeaturedCaseProps {
  companyName: string;
  description: string;
  industry: string;
  logoPlaceholder: string;
  achievements: { label: string; value: string }[];
}

export default function FeaturedCase({
  companyName,
  description,
  industry,
  logoPlaceholder,
  achievements
}: FeaturedCaseProps) {
  return (
    <div className="bg-gradient-to-br from-primary via-primary to-[#0d2f54] rounded-xl p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-white">
          <div className="inline-flex items-center px-3 py-1 bg-accent/20 rounded-full mb-6">
            <span className="text-sm text-accent font-medium">明星案例</span>
          </div>

          <div className="mb-6">
            <div className="w-20 h-20 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <span className="text-4xl font-bold text-accent">{logoPlaceholder}</span>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-4">{companyName}</h3>
          <p className="text-white/80 text-lg leading-relaxed mb-4">{description}</p>

          <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full mb-6">
            <span className="text-sm text-white/80">{industry}</span>
          </div>

          <div className="mt-6">
            <button className="bg-accent text-white px-8 py-3 rounded hover:bg-accent/90 transition-colors font-medium inline-flex items-center gap-2">
              查看详情
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-accent mb-2">{achievement.value}</div>
              <div className="text-white/70 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
