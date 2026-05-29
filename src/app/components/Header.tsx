import { Link, useLocation } from 'react-router';

export default function Header() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinkClass = (path: string) => {
    const active = isActive(path);
    return `relative py-2 transition-all ${
      active
        ? 'text-accent font-semibold'
        : 'text-gray-700 hover:text-accent'
    }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold">鼎</span>
            </div>
            <span className="text-xl font-bold text-primary">鼎华智能</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={navLinkClass('/')}>
              首页
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
            <Link to="/products" className={navLinkClass('/products')}>
              产品
              {isActive('/products') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
            <Link to="/solutions" className={navLinkClass('/solutions')}>
              行业方案
              {isActive('/solutions') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
            <Link to="/cases" className={navLinkClass('/cases')}>
              案例
              {isActive('/cases') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
            <Link to="/services" className={navLinkClass('/services')}>
              服务
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
            <Link to="/about" className={navLinkClass('/about')}>
              关于我们
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"></span>
              )}
            </Link>
          </nav>

          <button className="bg-accent text-white px-6 py-2 rounded hover:bg-accent/90 transition-colors">
            联系我们
          </button>
        </div>
      </div>
    </header>
  );
}
