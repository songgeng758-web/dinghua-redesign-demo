export default function Hero() {
  return (
    <div className="bg-secondary pt-8 pb-8">
      <section className="relative h-[600px] flex items-center overflow-hidden max-w-6xl mx-auto px-6 rounded-2xl shadow-xl">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=1920&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />

        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(to right, rgba(10, 37, 64, 0.7) 0%, rgba(10, 37, 64, 0.4) 100%)'
          }}
        />

        <div className="relative z-10 w-full px-6">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              智能制造与数字化转型专家
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/80">
              为制造企业提供全方位的数字化解决方案，助力产业升级
            </p>
            <div className="flex gap-4">
              <button className="bg-accent text-white px-8 py-3 rounded hover:bg-accent/90 transition-colors font-medium">
                了解产品
              </button>
              <button className="bg-white/10 text-white px-8 py-3 rounded border-2 border-white hover:bg-white/20 transition-colors backdrop-blur-sm font-medium">
                免费咨询
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
