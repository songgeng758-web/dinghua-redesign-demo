import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import StaggerContainer from '../components/animations/StaggerContainer';
import StaggerItem from '../components/animations/StaggerItem';
import { Lightbulb, Rocket, HeadphonesIcon, Code, Users, Zap, Shield, TrendingUp, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: '解决方案咨询',
    description: '深入诊断企业现状，定制数字化转型路径'
  },
  {
    icon: Rocket,
    title: '系统实施部署',
    description: '专业团队驻场实施，保障项目高质量交付'
  },
  {
    icon: HeadphonesIcon,
    title: '技术支持服务',
    description: '7×24 响应机制，全程护航系统稳定运行'
  },
  {
    icon: Code,
    title: '定制开发',
    description: '贴合业务需求，提供个性化功能定制开发'
  }
];

const serviceSteps = [
  { number: '1', title: '需求调研', description: '深入了解企业业务流程与痛点' },
  { number: '2', title: '方案设计', description: '制定针对性的数字化解决方案' },
  { number: '3', title: '系统实施', description: '专业团队驻场完成系统部署' },
  { number: '4', title: '培训上线', description: '全员培训确保系统顺利上线' },
  { number: '5', title: '运维支持', description: '持续优化提供长期技术保障' }
];

const advantages = [
  {
    icon: Users,
    title: '专业团队',
    description: '10年行业经验，资深技术专家全程护航'
  },
  {
    icon: Zap,
    title: '快速响应',
    description: '7×24小时技术支持，问题快速解决'
  },
  {
    icon: Shield,
    title: '全程护航',
    description: '从咨询到运维，提供全生命周期服务'
  },
  {
    icon: TrendingUp,
    title: '持续优化',
    description: '定期回访优化，助力企业持续提升'
  }
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    requirements: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('表单提交:', formData);
    alert('感谢您的咨询，我们将尽快与您联系！');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

      <main className="pt-16">
        <div className="bg-secondary pt-8 pb-8">
          <section className="max-w-6xl mx-auto px-6 py-20 bg-primary text-white rounded-2xl shadow-xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">服务支持</h1>
              <p className="text-xl text-white/80">全周期专业服务，助力企业数字化转型落地</p>
            </div>
          </section>
        </div>

        <section className="py-20 bg-gradient-to-b from-secondary to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-1 h-10 bg-accent rounded-full"></div>
                <h2 className="text-4xl font-bold text-primary">核心服务</h2>
              </div>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.05}>
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <ServiceCard
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-1 h-10 bg-accent rounded-full"></div>
                <h2 className="text-4xl font-bold text-primary">服务流程</h2>
              </div>
              <p className="text-gray-600 text-lg">标准化服务流程，确保项目成功落地</p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {serviceSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-t-2 border-accent/30 h-full">
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg relative z-10">
                          {step.number}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center">{step.description}</p>
                    </div>

                    {index < serviceSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                        <ArrowRight className="w-6 h-6 text-accent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-white to-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-1 h-10 bg-accent rounded-full"></div>
                <h2 className="text-4xl font-bold text-primary">服务保障</h2>
              </div>
              <p className="text-gray-600 text-lg">专业可靠的服务体系，值得信赖的合作伙伴</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 hover:ring-2 hover:ring-accent transition-all duration-300 border-t-2 border-transparent hover:border-accent group">
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Icon className="w-10 h-10 text-accent group-hover:text-white transition-colors" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-center">{advantage.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-1 h-10 bg-accent rounded-full"></div>
                <h2 className="text-4xl font-bold text-primary">在线咨询</h2>
              </div>
              <p className="text-gray-600 text-lg">填写您的需求，我们将尽快与您联系</p>
            </div>

            <div className="grid lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-primary via-primary to-[#0d2f54] rounded-2xl p-8 text-white h-full shadow-xl">
                  <h3 className="text-2xl font-bold mb-8">联系方式</h3>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">电话咨询</div>
                        <div className="text-white/80">400-888-8888</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">邮箱联系</div>
                        <div className="text-white/80">contact@dinghua.com</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="font-medium mb-1">公司地址</div>
                        <div className="text-white/80">河南省郑州市高新技术开发区</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/20">
                    <p className="text-white/70 text-sm leading-relaxed">
                      我们提供7×24小时在线咨询服务，无论您是需要了解产品详情、获取行业方案，还是寻求技术支持，我们的专业团队随时为您提供帮助。
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        姓名 <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="请输入您的姓名"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">公司名称</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="请输入公司名称"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        联系电话 <span className="text-accent">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="请输入联系电话"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">邮箱地址</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors"
                        placeholder="请输入邮箱地址"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">需求描述</label>
                    <textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="请简要描述您的需求..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent text-white py-4 rounded-lg hover:bg-accent/90 transition-colors font-medium text-lg shadow-lg"
                  >
                    提交咨询
                  </button>

                  <p className="text-sm text-gray-500 mt-4 text-center">
                    我们将严格保护您的隐私信息，提交后24小时内与您取得联系
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
