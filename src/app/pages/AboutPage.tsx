import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import { Target, Eye, Users, Award, TrendingUp, FileText, Medal, CheckCircle, FileCheck, ChevronRight, Calendar } from 'lucide-react';

const tabs = [
  { id: 'intro', label: '公司介绍', icon: FileText },
  { id: 'history', label: '发展历程', icon: TrendingUp },
  { id: 'honors', label: '资质荣誉', icon: Award },
  { id: 'team', label: '专家团队', icon: Users },
  { id: 'news', label: '动态新闻', icon: FileText }
];

const milestones = [
  {
    year: '2019',
    title: '南京鼎华成立',
    description: '由原鼎捷数字智能制造事业部合并台湾鼎华系统公司成立南京鼎华，开始专注智能制造业务发展'
  },
  {
    year: '2023',
    title: '河南鼎华成立',
    description: '南京鼎华与本地知名的行业专家合作成立河南鼎华，开始布局北方市场'
  },
  {
    year: '2024',
    title: '河南鼎华渠道大会召开',
    description: '河南省首届渠道大会顺利召开，超 200 家服务商参会，鼎华启动河南渠道布局'
  },
  {
    year: '2024',
    title: '入围三大运营商',
    description: '河南鼎华入围中国移动、中国电信、中国联通的供应商，成为其战略合作伙伴，业务覆盖全河南'
  },
  {
    year: '2024',
    title: '河南省数产协副会长单位',
    description: '加入河南省数字经济协会，董事长刘向阳当选协会副会长及工业互联网专委会会长'
  },
  {
    year: '2025',
    title: 'SMES7.0 发布',
    description: '2025 年基于低代码平台和 AI 底座的全新一代产品——鼎华 SMES7.0 正式发布，标志着鼎华 MES 产品进入 AI 时代'
  },
  {
    year: '2025',
    title: '定制化 MES 发布',
    description: '基于低代码平台，满足企业个性化应用的定制化 MES 正式发版，突破了离散制造的范畴'
  }
];

const honors = [
  {
    icon: Award,
    title: '工业互联网优秀解决方案',
    description: '获得工业互联网产业联盟优秀解决方案奖'
  },
  {
    icon: CheckCircle,
    title: 'ISO9001 认证',
    description: '通过 ISO9001 质量管理体系认证'
  },
  {
    icon: FileCheck,
    title: '软件著作权 50+',
    description: '拥有 50 余项软件著作权，技术实力雄厚'
  }
];

const experts = [
  {
    name: '刘向阳',
    position: '河南鼎华董事长',
    description: '企业数字化转型资深专家，河南省数字经济产业协会副会长，河南工程学院客座教授，郑州金蝶创始人，33 年企业数字化服务经验，擅长大型集团企业数字化整体规划，为超百家大中型企业提供数字化咨询规划服务'
  },
  {
    name: '付显明',
    position: '首席智能制造专家',
    description: '上海财经大学博士，曾在华孚集团、富安娜等国内著名企业任职，担任过总裁助理、营销总经理、生产运营总监、CIO 等职务。具有 30 年的大中型企业的市场管理、生产管理、IT 管理经验'
  },
  {
    name: '肖翀',
    position: '金属压延行业首席专家',
    description: '资深数字化转型专家，有色金属学会计算机学委会委员，河科大、河南理工客座教授，原洛铜集团 CIO，30+ 年数字化实战经验，擅长企业数字化顶层设计，主导 50+ 大型制造业数字化规划实施'
  },
  {
    name: '杨晨',
    position: '资深自动化控制专家',
    description: '河南鼎华高级顾问，自动化控制专家，原某大型集团副总裁、CIO，25 年生产管理、企业数字化建设、生产自动化控制等实践经验，曾主导开发 DCS 系统、IOT 平台、TPM 系统及设备预测性维护'
  },
  {
    name: '岳希波',
    position: 'MES 资深顾问',
    description: '河南鼎华高级顾问，12 年制造业数字化实战经验，精通 MES/MOM/QMS/WMS 等系统全链路规划与实施交付；擅长装备制造、电子电器、注塑、机械加工等多行业落地方案设计；主导交付体系与 SOP 流程建设，服务 20 余家企业实现生产管理数字化升级'
  },
  {
    name: '孙建辉',
    position: 'ERP 资深顾问',
    description: '河南鼎华合伙人，资深 ERP 顾问，20 年 ERP 领域实战经验，历任交付工程师、高级项目经理、部门经理、郑州浪潮总经理。成功主导多家百亿级、千亿级集团企业数字化整体规划与 ERP 整体建设'
  }
];

const news = [
  {
    title: '从自动化迈向自主化:AI Agent 驱动数智工厂新运筹',
    summary: '鼎华智能推出 AI agent，打造决策零时差',
    date: '2026/5/28'
  },
  {
    title: '鼎华智能战略投资鲸鹏芯海,布局商业航天相控阵芯片',
    summary: '风启新程，携手向芯生。近日，南京鼎华智能系统有限公司与鲸鹏芯海微电子科技(上海)有限公司正式达成战略投资合作，鼎华智能入股鲸鹏芯海。双方将以此次合作为纽带，深化产业链协同，共推商业航天领域的半导体上下游数智化创新升级',
    date: '2026/5/8'
  },
  {
    title: '南京鼎华获深创投 B 轮投了 4000 万元',
    summary: '继南京鼎华 22 年 A 轮、23 年 A+ 轮融资之后，南京鼎华再次获得深创投 B 轮投资 4000 万，助力其快速布局全国市场',
    date: '2026/5/8'
  }
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('intro');
  const [expandedNews, setExpandedNews] = useState<number | null>(null);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

        <main className="pt-16">
          <div className="bg-secondary pt-8 pb-8 px-4 sm:px-6 xl:px-12 2xl:px-16">
            <section className="max-w-[1800px] mx-auto px-6 py-20 bg-primary text-white rounded-2xl shadow-xl">
              <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">关于河南鼎华数字科技有限公司</h1>
                <p className="text-xl text-white/80">致力于成为领先的企业数字化解决方案提供商</p>
              </div>
            </section>
          </div>

          <section className="py-8 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 inline-flex items-center gap-2 ${
                        activeTab === tab.id
                          ? 'bg-accent text-white shadow-lg scale-105'
                          : 'bg-white text-gray-700 border border-gray-300 hover:border-accent hover:text-accent hover:shadow-md'
                      }`}
                    >
                      <Icon className="w-4 h-4" strokeWidth={2} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {activeTab === 'intro' && (
            <div className="bg-gradient-to-b from-secondary to-white py-20">
              <div className="max-w-7xl mx-auto px-6 space-y-12">
                <ScrollReveal immediate>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-2 border-accent/30">
                      <div className="flex items-start gap-6 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Target className="w-9 h-9 text-accent" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-2">企业使命</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        利用先进数字技术为客户创造可量化的价值
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-2 border-accent/30">
                      <div className="flex items-start gap-6 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Eye className="w-9 h-9 text-accent" strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary mb-2">企业愿景</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        成为受人尊敬的数字化服务商
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="grid lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-2 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-12">
                        <div className="text-center">
                          <div className="w-32 h-32 bg-gradient-to-br from-primary to-[#0d2f54] rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <span className="text-5xl font-bold text-accent">鼎华</span>
                          </div>
                          <p className="text-sm text-gray-500">团队合影</p>
                          <p className="text-xs text-gray-400 mt-2">（图片待上传）</p>
                        </div>
                      </div>

                      <div className="lg:col-span-3 p-10">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-1 h-10 bg-accent rounded-full"></div>
                          <h2 className="text-3xl font-bold text-primary">公司介绍</h2>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed">
                          <p>
                            河南鼎华数字科技有限公司是一家专注于企业数字化整体解决方案的专业服务商，成立于 2023 年 10 月，位于郑州高新区，是南京鼎华智能系统有限公司在河南省设立的合资公司，全面负责南京鼎华在河南及周边地区的业务运营。
                          </p>
                          <p>
                            公司依托南京鼎华近三十年的行业技术积淀，以智能制造运营管理（MOM）为核心蓝图，自主研发 MES、APS、QMS、WMS、IOT、IPASS 等智能化软件产品，融合大数据、人工智能、物联网等技术，为制造业提供全方位数字化转型解决方案。
                          </p>
                          <p>
                            作为区域业务中心，河南鼎华已构建覆盖河南 18 个地市的服务网络，在郑州、洛阳、南阳、新乡、焦作等重点城市设立城市合伙人机构，同时成为中国联通、中国电信、中国移动的重要合作伙伴。
                          </p>
                          <p>
                            凭借专业能力，公司已服务河南大指造纸装备、光力科技、千王钎具、佛山铝业、众诚润滑、铭泰电器、朝晖铜业、嘉盛电控、福隆特、天缘橡胶、新开源集团、龙宇钼业、竹林德盛等标杆客户，树立了一批行业数字化转型典范。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-primary to-[#0d2f54] rounded-2xl p-8 text-white text-center shadow-lg">
                      <div className="text-5xl font-bold text-accent mb-2">30年</div>
                      <div className="text-white/80">技术积淀</div>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-[#0d2f54] rounded-2xl p-8 text-white text-center shadow-lg">
                      <div className="text-5xl font-bold text-accent mb-2">18个</div>
                      <div className="text-white/80">地市覆盖</div>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-[#0d2f54] rounded-2xl p-8 text-white text-center shadow-lg">
                      <div className="text-5xl font-bold text-accent mb-2">100+</div>
                      <div className="text-white/80">标杆客户</div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="bg-gradient-to-b from-secondary to-white py-20">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-1 h-10 bg-accent rounded-full"></div>
                    <h2 className="text-4xl font-bold text-primary">发展历程</h2>
                  </div>
                  <p className="text-gray-600 text-lg">携手共进，创新发展</p>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-accent to-accent/30 rounded-full"></div>

                  <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                      <ScrollReveal key={index}>
                        <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                          <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                            <div className="inline-block bg-gradient-to-br from-primary to-[#0d2f54] px-6 py-2 rounded-full shadow-lg mb-4">
                              <span className="text-accent font-bold text-lg">{milestone.year} 年</span>
                            </div>
                            <div className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${index % 2 === 0 ? 'border-r-0 border-l-accent' : 'border-l-0 border-r-4 border-r-accent'}`}>
                              <h3 className="text-xl font-bold text-primary mb-3">{milestone.title}</h3>
                              <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                            </div>
                          </div>

                          <div className="relative z-10 flex-shrink-0">
                            <div className="w-6 h-6 bg-accent rounded-full border-4 border-white shadow-lg"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full"></div>
                          </div>

                          <div className="flex-1"></div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'honors' && (
            <div className="bg-gradient-to-b from-secondary to-white py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-1 h-10 bg-accent rounded-full"></div>
                    <h2 className="text-4xl font-bold text-primary">资质荣誉</h2>
                  </div>
                  <p className="text-gray-600 text-lg">专业资质认证，行业权威认可</p>
                </div>

                <ScrollReveal immediate>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {honors.map((honor, index) => {
                      const Icon = honor.icon;
                      return (
                        <div
                          key={index}
                          className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-accent group"
                        >
                          <div className="flex justify-center mb-6">
                            <div className="w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-[#0d2f54] transition-all duration-300">
                              <Icon className="w-12 h-12 text-accent group-hover:text-accent transition-colors" strokeWidth={1.5} />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-4 text-center">{honor.title}</h3>
                          <p className="text-gray-600 leading-relaxed text-center">{honor.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="bg-gradient-to-b from-secondary to-white py-20">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-1 h-10 bg-accent rounded-full"></div>
                    <h2 className="text-4xl font-bold text-primary">专家团队</h2>
                  </div>
                  <p className="text-gray-600 text-lg">汇聚行业顶尖专家，护航企业数字化转型</p>
                </div>

                <ScrollReveal immediate>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {experts.map((expert, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-accent/30 hover:border-accent"
                      >
                        <div className="flex flex-col items-center mb-6">
                          <div className="w-28 h-28 bg-gradient-to-br from-primary to-[#0d2f54] rounded-full flex items-center justify-center mb-4 shadow-lg">
                            <Users className="w-14 h-14 text-accent" strokeWidth={1.5} />
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-2">{expert.name}</h3>
                          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30">
                            <span className="text-sm text-accent font-medium">{expert.position}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-center text-sm">{expert.description}</p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )}

          {activeTab === 'news' && (
            <div className="bg-gradient-to-b from-secondary to-white py-20">
              <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="w-1 h-10 bg-accent rounded-full"></div>
                    <h2 className="text-4xl font-bold text-primary">动态新闻</h2>
                  </div>
                  <p className="text-gray-600 text-lg">了解鼎华最新动态与发展</p>
                </div>

                <ScrollReveal immediate>
                  <div className="space-y-6">
                    {news.map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-accent cursor-pointer"
                        onClick={() => setExpandedNews(expandedNews === index ? null : index)}
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                              {item.title}
                            </h3>
                            <p className={`text-gray-600 leading-relaxed mb-4 transition-all duration-300 ${
                              expandedNews === index ? 'line-clamp-none' : 'line-clamp-2'
                            }`}>
                              {item.summary}
                            </p>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Calendar className="w-4 h-4 text-accent" strokeWidth={2} />
                              <span>{item.date}</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0 flex items-center">
                            <div className={`w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                              expandedNews === index ? 'rotate-90 bg-accent' : ''
                            }`}>
                              <ChevronRight className={`w-5 h-5 transition-colors ${
                                expandedNews === index ? 'text-white' : 'text-accent'
                              }`} strokeWidth={2} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          )}

          <ScrollReveal>
            <section className="py-24 bg-gradient-to-br from-primary via-primary to-[#0d2f54]">
              <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  携手鼎华，共创数字未来
                </h2>
                <p className="text-white/80 text-lg mb-10">
                  期待与您合作，共同推动企业数字化转型升级
                </p>
                <button className="bg-accent text-white px-12 py-4 rounded hover:bg-accent/90 transition-colors font-medium text-lg shadow-lg">
                  联系我们
                </button>
              </div>
            </section>
          </ScrollReveal>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
