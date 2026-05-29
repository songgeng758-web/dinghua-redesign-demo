import { Cog, Wrench, Car, Package, Cpu, Beaker, Flame, Coffee } from 'lucide-react';
import StaggerContainer from './animations/StaggerContainer';
import StaggerItem from './animations/StaggerItem';

const industries = [
  { icon: Cog, name: '装备制造', desc: '大型设备生产管理解决方案' },
  { icon: Wrench, name: '机械加工', desc: '精密加工过程控制与追溯' },
  { icon: Car, name: '汽配行业', desc: '汽配质量管理与供应链协同' },
  { icon: Package, name: '注塑行业', desc: '注塑生产实时监控与优化' },
  { icon: Cpu, name: '电子电器', desc: '电子制造全流程数字化管理' },
  { icon: Beaker, name: '化工行业', desc: '化工生产安全与合规管理' },
  { icon: Flame, name: '冶金行业', desc: '冶金能耗与质量智能管控' },
  { icon: Coffee, name: '食品饮料', desc: '食品安全追溯与批次管理' }
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-1 h-10 bg-accent rounded-full"></div>
              <h2 className="text-4xl font-bold text-primary">行业解决方案</h2>
            </div>
            <p className="text-gray-600 text-lg mb-6">深耕制造业，专业成就价值</p>
            <p className="text-gray-600 leading-relaxed">
              基于10年行业经验，我们为装备制造、机械加工、汽配、注塑、电子电器、化工、冶金、食品饮料等8大制造业细分领域提供深度定制化的数字化转型解决方案。每个方案都经过500+企业实践验证，确保贴合行业特性、落地即可用。
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl"></div>
            <div className="relative p-8 grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">8大</div>
                <div className="text-sm text-gray-600">行业覆盖</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-sm text-gray-600">成功案例</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">10年</div>
                <div className="text-sm text-gray-600">深耕经验</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-accent mb-2">定制化</div>
                <div className="text-sm text-gray-600">方案设计</div>
              </div>
            </div>
          </div>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.05}>
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <StaggerItem key={index}>
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 cursor-pointer group border-t-2 border-transparent hover:border-accent">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{industry.name}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{industry.desc}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
