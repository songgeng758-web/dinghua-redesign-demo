import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a1929] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">公司简介</h3>
            <p className="text-white/70 leading-relaxed">
              河南鼎华数字科技有限公司专注于为制造企业提供数字化转型解决方案，助力中国智能制造发展。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">快速链接</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#products" className="hover:text-accent transition-colors">核心产品</a></li>
              <li><a href="#solutions" className="hover:text-accent transition-colors">行业方案</a></li>
              <li><a href="#cases" className="hover:text-accent transition-colors">成功案例</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">关于我们</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">服务</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-accent transition-colors">解决方案咨询</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">系统实施部署</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">技术支持服务</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">定制开发</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>contact@dinghua.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>400-888-8888</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>河南省郑州市高新技术开发区</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2026 河南鼎华数字科技有限公司. 保留所有权利.</p>
          <p className="mt-1 text-white/30 text-xs">本站为改版提案演示版本，非公司官方网站</p>
          <p className="mt-3 text-white/30 text-xs">版式参考公司官方信息 · 改版提案 Demo</p>
        </div>
      </div>
    </footer>
  );
}
