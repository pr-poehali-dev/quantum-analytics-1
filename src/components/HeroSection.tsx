import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/85636a70-dc84-484c-8c08-7e2279a5e7e7/files/57d3a124-1782-4e3c-be3c-6877168e925e.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-2.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-4.jpg',
  'https://cdn.poehali.dev/templates/creative-portfolio-ru/gallery-5.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* BG Images */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img src={src} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>

      {/* Dark overlay + grain effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-8">

            {/* Tag line */}
            <div
              className={cn(
                'transform transition-all duration-700 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <span className="inline-block rounded-none border border-[#FF3B3B]/60 bg-[#FF3B3B]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#FF3B3B]">
                ВЖМ · ВЕЧНО ЖИВАЯ МОЛОДЁЖЬ
              </span>
            </div>

            {/* Main title */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-150 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <h1 className="font-black uppercase leading-none tracking-tight text-white">
                <span className="block text-5xl md:text-7xl lg:text-8xl">ВЖМ</span>
                <span className="block text-xl md:text-3xl lg:text-4xl font-light tracking-[0.15em] text-white/70 mt-2">
                  Молодёжь. Улица. Движение.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <p className="max-w-lg text-base font-light leading-relaxed text-white/60 md:text-lg">
                Некоммерческое комьюнити для тех, кто ценит вечную молодость духа.
                Музыка, творчество, живое общение — без рекламы и спама.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={cn(
                'flex flex-wrap gap-4 transform transition-all duration-1000 delay-500 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <a
                href="https://t.me/VZH_CHANNELL"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#FF3B3B] px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:bg-[#FF3B3B]/80"
              >
                <span className="relative z-10">Вступить в группу</span>
                <div className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0" />
              </a>
              <a
                href="https://t.me/courtyardsongs"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white/70 transition-all duration-300 hover:border-white/70 hover:text-white"
              >
                Courtyardsongs
              </a>
            </div>

            {/* Social links */}
            <div
              className={cn(
                'flex items-center gap-6 transform transition-all duration-1000 delay-700 ease-out',
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-white/30">Написать</span>
              <div className="h-px w-8 bg-white/20" />
              <a
                href="https://t.me/zavoevatel23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 transition-colors hover:text-white"
                aria-label="Telegram admin"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                <span className="text-xs tracking-widest">@zavoevatel23</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between border-t border-white/10 bg-black/40 px-8 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-6">
          <a
            href="https://t.me/VZH_CHANNELL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white/80"
          >
            t.me/VZH_CHANNELL
          </a>
          <span className="text-white/20">·</span>
          <a
            href="https://telegra.ph/Politika-konfidencialnosti-02-27-8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] text-white/40 transition-colors hover:text-white/80"
          >
            Политика конфиденциальности
          </a>
        </div>

        {/* Slide indicators */}
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                'h-px transition-all duration-300',
                currentIndex === index ? 'w-10 bg-[#FF3B3B]' : 'w-6 bg-white/30 hover:bg-white/60'
              )}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}