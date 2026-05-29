import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import PageTransition from '../components/animations/PageTransition';
import ScrollReveal from '../components/animations/ScrollReveal';
import { Factory, Settings, Wifi, Database, Users, Wrench, BarChart3, FileStack } from 'lucide-react';

const productCategories = [
  {
    id: 'manufacturing',
    title: '智能制造类',
    featured: true,
    products: [
      {
        icon: Factory,
        name: 'sMES智能车间执行系统',
        description: '面向离散制造，构筑全流程数字化生产体系',
        featured: true
      },
      {
        icon: Settings,
        name: 'eMES精益制造执行系统',
        description: '面向中小制造，搭建精益化车间管控体系',
        featured: true
      },
      {
        icon: Factory,
        name: 'AMES柔性智造执行系统',
        description: '面向全行业，打造灵活适配的定制化生产管理体系',
        featured: true
      }
    ]
  },
  {
    id: 'operation',
    title: '运营管理类',
    featured: false,
    products: [
      {
        icon: Users,
        name: 'CRM客户关系管理系统',
        description: '面向多元行业，搭建全周期客户经营管理体系',
        featured: false
      }
    ]
  },
  {
    id: 'iot',
    title: '工业物联网类',
    featured: false,
    products: [
      {
        icon: Wifi,
        name: 'IoT平台',
        description: '面向全域制造，搭建设备互联数据采集管控体系',
        featured: false
      },
      {
        icon: Wrench,
        name: '预测性维护',
        description: '面向工业生产，构建设备事前预警智能化运维体系',
        featured: false
      }
    ]
  },
  {
    id: 'data',
    title: '数据治理类',
    featured: false,
    products: [
      {
        icon: Database,
        name: '数据中台',
        description: '整合企业全域数据，支撑智能决策分析',
        featured: false
      },
      {
        icon: FileStack,
        name: '主数据管理',
        description: '统一数据标准，保障数据质量一致性',
        featured: false
      }
    ]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('manufacturing');

  useEffect(() => {
    const handleScroll = () => {
      const sections = productCategories.map(cat => ({
        id: cat.id,
        element: document.getElementById(cat.id)
      }));

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveCategory(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const getGridClass = (productCount: number) => {
    if (productCount === 1) return 'grid-cols-1';
    if (productCount === 2) return 'grid-cols-1 lg:grid-cols-2';
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Header />

      <main className="pt-16">
        <div className="bg-secondary pt-8 pb-8">
          <section className="max-w-6xl mx-auto px-6 py-20 bg-primary text-white rounded-2xl shadow-xl">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">产品矩阵</h1>
              <p className="text-xl text-white/80">覆盖企业数字化全场景，助力企业数智转型</p>
            </div>
          </section>
        </div>

        <div className="bg-secondary py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex gap-12">
              <aside className="hidden lg:block w-64 flex-shrink-0">
                <div className="sticky top-24">
                  <nav className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-6">产品分类</h3>
                    <ul className="space-y-2">
                      {productCategories.map((category) => (
                        <li key={category.id}>
                          <button
                            onClick={() => scrollToCategory(category.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all relative ${
                              activeCategory === category.id
                                ? 'bg-accent/10 text-accent font-medium'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            {activeCategory === category.id && (
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r"></div>
                            )}
                            <span className="block">{category.title}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </aside>

              <div className="flex-1 space-y-20">
                {productCategories.map((category) => (
                  <section key={category.id} id={category.id}>
                    <div className="flex items-center gap-4 mb-10">
                      <div className="w-1 h-10 bg-accent rounded-full"></div>
                      <h2 className="text-3xl font-bold text-primary">{category.title}</h2>
                    </div>
                    <div className={`grid ${getGridClass(category.products.length)} gap-6`}>
                      {category.products.map((product, productIndex) => (
                        <ProductCard
                          key={productIndex}
                          icon={product.icon}
                          name={product.name}
                          description={product.description}
                          featured={product.featured}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

        <Footer />
      </div>
    </PageTransition>
  );
}
