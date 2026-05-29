import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaseCard from '../components/CaseCard';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';

const benchmarkCase = {
  companyName: '河南佛山铝业有限公司',
  industry: '冶金行业',
  logoPlaceholder: 'FS',
  achievements: [
    { label: '生产效率提升', value: '35%' },
    { label: '交付周期缩短', value: '28%' },
    { label: '质量合格率', value: '99.2%' },
    { label: '设备利用率', value: '92%' }
  ]
};

const cases = [
  {
    companyName: '光力科技股份有限公司',
    description: '光力科技成功案例分享',
    industry: '装备制造',
    logoPlaceholder: 'GL',
    highlights: ['效率提升', '质量管控', '数据可视化']
  },
  {
    companyName: '灵宝金源朝辉铜业有限公司',
    description: '朝辉铜业数字化转型实战',
    industry: '冶金行业',
    logoPlaceholder: 'CH',
    highlights: ['降本增效', '能耗优化', '智能排产']
  },
  {
    companyName: '洛阳嘉盛电控技术有限公司',
    description: '嘉盛电控MOM案例分享',
    industry: '电子电器',
    logoPlaceholder: 'JS',
    highlights: ['流程优化', '协同管理', '精益生产']
  },
  {
    companyName: '河南千王钎具有限责任公司',
    description: '鼎华MES赋能千王钎具',
    industry: '机械加工',
    logoPlaceholder: 'QW',
    highlights: ['生产透明化', '实时监控', '质量追溯']
  },
  {
    companyName: '河南大指造纸装备集成工程有限公司',
    description: '大型装备企业MES项目',
    industry: '装备制造',
    logoPlaceholder: 'DZ',
    highlights: ['项目管理', '成本管控', '交付优化']
  },
  {
    companyName: '洛阳富隆特体育用品有限公司',
    description: '富隆特成功案例分享',
    industry: '注塑行业',
    logoPlaceholder: 'FL',
    highlights: ['工艺管控', '批次追溯', '库存优化']
  },
  {
    companyName: '郑州众城润滑科技有限公司',
    description: '众城润滑科技数字化转型分享',
    industry: '汽配行业',
    logoPlaceholder: 'ZC',
    highlights: ['供应链协同', '品质管理', '柔性制造']
  }
];

const industries = [
  '全部案例',
  '装备制造',
  '机械加工',
  '汽配行业',
  '注塑行业',
  '电子电器',
  '化工行业',
  '冶金行业',
  '食品饮料'
];

const achievements = [
  { value: '500+', label: '服务客户' },
  { value: '8大', label: '覆盖行业' },
  { value: '50+', label: '交付项目' },
  { value: '98%', label: '客户满意度' }
];

export default function CasesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('全部案例');

  const filteredCases = selectedIndustry === '全部案例'
    ? cases
    : cases.filter(c => c.industry === selectedIndustry);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

      <main className="pt-16">
        <div className="bg-secondary pt-8 pb-8 px-4 sm:px-6 xl:px-12 2xl:px-16">
          <section className="max-w-[1800px] mx-auto px-6 py-20 bg-primary text-white rounded-2xl shadow-xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">行业案例</h1>
              <p className="text-xl text-white/80">探索各行业数字化转型成功案例</p>
            </div>
          </section>
        </div>

        <section className="py-12 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-12">
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                  <nav className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">行业分类</h3>
                    <ul className="space-y-2">
                      {industries.map((industry) => (
                        <li key={industry}>
                          <button
                            onClick={() => setSelectedIndustry(industry)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-out relative ${
                              selectedIndustry === industry
                                ? 'bg-accent/10 text-accent font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <AnimatePresence>
                              {selectedIndustry === industry && (
                                <motion.div
                                  initial={{ scaleY: 0, opacity: 0 }}
                                  animate={{ scaleY: 1, opacity: 1 }}
                                  exit={{ scaleY: 0, opacity: 0 }}
                                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                  className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r origin-center"
                                />
                              )}
                            </AnimatePresence>
                            <span className="block">{industry}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>

              <div className="flex-1 space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  className="bg-gradient-to-r from-primary to-[#0d2f54] rounded-xl p-8 shadow-lg"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl font-bold text-accent">{benchmarkCase.logoPlaceholder}</span>
                    </div>
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 rounded-full border border-accent/30 bg-accent/10 mb-2">
                        <span className="text-xs text-accent font-medium">标杆案例</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{benchmarkCase.companyName}</h3>
                      <p className="text-white/70 text-sm mt-1">{benchmarkCase.industry}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    {benchmarkCase.achievements.map((achievement, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent mb-1">{achievement.value}</div>
                        <div className="text-white/70 text-xs">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <AnimatePresence mode="wait">
                  {filteredCases.length > 0 ? (
                    <motion.div
                      key={selectedIndustry}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                    >
                      {filteredCases.map((caseItem, index) => (
                        <motion.div
                          key={`${selectedIndustry}-${index}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.04,
                            ease: [0.4, 0, 0.2, 1]
                          }}
                        >
                          <CaseCard
                            companyName={caseItem.companyName}
                            description={caseItem.description}
                            industry={caseItem.industry}
                            logoPlaceholder={caseItem.logoPlaceholder}
                            highlights={caseItem.highlights}
                            featured={false}
                          />
                        </motion.div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-20"
                    >
                      <p className="text-gray-500 text-lg">暂无该行业的案例</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <section className="py-24 bg-gradient-to-br from-primary via-primary to-[#0d2f54]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
              成为下一个成功案例
            </h2>
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
