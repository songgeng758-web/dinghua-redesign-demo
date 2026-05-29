import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustryCard from '../components/IndustryCard';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import StaggerItem from '../components/animations/StaggerItem';
import { Cog, Wrench, Car, Package, Cpu, Beaker, Flame, Coffee, TrendingUp, Users, Box, Target, Zap, Shield, Award } from 'lucide-react';

const industries = [
  {
    icon: Cog,
    name: '装备制造',
    value: '提升产品品质，产能全面提效',
    capabilities: ['大型设备管理', '生产追溯', '产能优化']
  },
  {
    icon: Wrench,
    name: '机械加工',
    value: '缩短订单交付天数，提升生产效率',
    capabilities: ['工艺管理系统', '设备健康监测', '智能排产']
  },
  {
    icon: Car,
    name: '汽配行业',
    value: '强化产业数位应用，提升产业竞争力',
    capabilities: ['供应链协同', '质量管理', '数位应用']
  },
  {
    icon: Package,
    name: '注塑行业',
    value: '管控车间全流程，实现提质降本增效',
    capabilities: ['车间全流程管控', '实时监控', '提质降本']
  },
  {
    icon: Cpu,
    name: '电子电器',
    value: '提出最适生产计划，提升排产与生产效率',
    capabilities: ['智能排产', '生产计划优化', '全流程数字化']
  },
  {
    icon: Beaker,
    name: '化工行业',
    value: '严控生产全过程，保障安全精益生产',
    capabilities: ['安全管控', '合规管理', '精益生产']
  },
  {
    icon: Flame,
    name: '冶金行业',
    value: '统筹生产能耗管理，提升企业产能效益',
    capabilities: ['能耗管理', '质量管控', '产能提升']
  },
  {
    icon: Coffee,
    name: '食品饮料',
    value: '严把产品质量关口，完善全链路溯源',
    capabilities: ['质量追溯', '批次管理', '全链路溯源']
  }
];

const trustPoints = [
  {
    icon: TrendingUp,
    value: '10年',
    label: '行业经验'
  },
  {
    icon: Users,
    value: '500+',
    label: '企业选择'
  },
  {
    icon: Box,
    value: '50+',
    label: '核心产品'
  }
];

const advantages = [
  {
    icon: Target,
    title: '深耕制造业',
    description: '10年专注制造业数字化转型，深刻理解行业痛点与需求'
  },
  {
    icon: Award,
    title: '深度定制',
    description: '基于行业特性量身定制解决方案，精准匹配企业实际场景'
  },
  {
    icon: Zap,
    title: '快速落地',
    description: '标准化实施流程配合专业团队，确保项目快速高效交付'
  },
  {
    icon: Shield,
    title: '全程护航',
    description: '从咨询到运维提供全生命周期服务，持续保障系统稳定'
  }
];

export default function SolutionsPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

      <main className="pt-16">
        <div className="bg-secondary pt-8 pb-8 px-4 sm:px-6 xl:px-12 2xl:px-16">
          <section className="max-w-[1800px] mx-auto px-6 py-20 bg-primary text-white rounded-2xl shadow-xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">行业解决方案</h1>
              <p className="text-xl text-white/80">深耕行业场景，为企业提供定制化的数字化转型方案</p>
            </div>
          </section>
        </div>

        <section className="py-16 bg-gradient-to-b from-secondary to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-primary via-primary to-[#0d2f54] rounded-2xl p-10 md:p-12 shadow-xl mb-16 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-white">
                  <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full mb-6">
                    <span className="text-sm text-accent font-medium">深耕制造业细分领域</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    8大制造业深度解决方案
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed mb-6">
                    鼎华智能深耕制造业10年，为装备制造、机械加工、汽配、注塑、电子电器、化工、冶金、食品饮料等8大细分领域提供深度定制化数字化转型方案。每个方案都经过500+企业实践验证，确保贴合行业特性、落地即可用。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2">8大</div>
                    <div className="text-white/80 text-sm">行业覆盖</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2">500+</div>
                    <div className="text-white/80 text-sm">成功案例</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2">定制化</div>
                    <div className="text-white/80 text-sm">方案设计</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-accent mb-2">落地快</div>
                    <div className="text-white/80 text-sm">快速交付</div>
                  </div>
                </div>
              </div>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.05}>
              {industries.map((industry, index) => (
                <StaggerItem key={index}>
                  <IndustryCard
                    icon={industry.icon}
                    name={industry.name}
                    value={industry.value}
                    capabilities={industry.capabilities}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-1 h-10 bg-accent rounded-full"></div>
                <h2 className="text-4xl font-bold text-primary">为什么选择我们</h2>
              </div>
              <p className="text-gray-600 text-lg">专业可靠的行业方案，值得信赖的合作伙伴</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary via-[#0d2f54] to-primary relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                        <Icon className="w-9 h-9 text-accent" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">{point.value}</div>
                    <div className="h-px w-12 bg-accent/30 mx-auto mb-3"></div>
                    <div className="text-white text-lg">{point.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-br from-primary via-primary to-[#0d2f54]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              获取专属行业方案
            </h2>
            <p className="text-white/80 text-lg mb-10">
              联系我们，了解适合您行业的数字化转型方案
            </p>
            <button className="bg-accent text-white px-12 py-4 rounded hover:bg-accent/90 transition-colors font-medium text-lg shadow-lg">
              立即咨询
            </button>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
