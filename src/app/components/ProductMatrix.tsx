import { Factory, Settings, Wifi, Database } from 'lucide-react';
import StaggerContainer from './animations/StaggerContainer';
import StaggerItem from './animations/StaggerItem';

const featuredProduct = {
  icon: Factory,
  title: '智能制造类',
  description: 'MES生产执行系统，实现生产过程数字化管理',
  details: '覆盖sMES、eMES、AMES三大产品线，全面支撑离散制造、精益生产、柔性智造等多元场景'
};

const products = [
  {
    icon: Settings,
    title: '运营管理类',
    description: 'ERP企业资源规划，优化企业运营效率'
  },
  {
    icon: Wifi,
    title: '工业物联网类',
    description: 'IoT设备互联，实时采集生产数据'
  },
  {
    icon: Database,
    title: '数据治理类',
    description: '数据集成与分析，支撑智能决策'
  }
];

export default function ProductMatrix() {
  const FeaturedIcon = featuredProduct.icon;

  return (
    <section className="py-24 bg-gradient-to-b from-white via-secondary to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-1 h-10 bg-accent rounded-full"></div>
            <h2 className="text-4xl font-bold text-primary">核心产品矩阵</h2>
          </div>
          <p className="text-gray-600 text-lg">覆盖企业数字化全场景</p>
        </div>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6" staggerDelay={0.05} immediate>
          <StaggerItem className="lg:col-span-2">
            <div className="bg-gradient-to-br from-primary via-primary to-[#0d2f54] rounded-xl p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="mb-6">
                <div className="w-20 h-20 bg-accent/20 rounded-xl flex items-center justify-center">
                  <FeaturedIcon className="w-11 h-11 text-accent" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{featuredProduct.title}</h3>
              <p className="text-white/90 text-lg mb-4 leading-relaxed">{featuredProduct.description}</p>
              <p className="text-white/70 leading-relaxed mb-6">{featuredProduct.details}</p>
              <button className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group-hover:gap-3">
                了解更多
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          </StaggerItem>

          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 cursor-pointer group border-t-2 border-transparent hover:border-accent">
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Icon className="w-8 h-8 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
