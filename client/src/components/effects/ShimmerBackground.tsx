import React from 'react';

const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep foundation layer - More dramatic */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000512] via-[#001224] to-[#000512]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#001428] via-[#000A1A] to-[#000816]" />
      
      {/* Enhanced depth layers with more dramatic colors */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#041A35] via-[#001122] to-[#020F25]" />
      <div className="absolute inset-0 bg-gradient-to-bl from-[#001A30] via-[#002040] to-[#000F20]" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#051C38] via-[#001528] to-[#031420]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#002045] via-[#041830] to-[#001225]" />

      {/* More dramatic directional lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(147,113,39,0.35),rgba(147,113,39,0.15)_40%,rgba(147,113,39,0.05)_70%,transparent_90%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.25),rgba(59,130,246,0.08)_50%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(168,85,247,0.18),rgba(168,85,247,0.05)_50%,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(16,185,129,0.15),rgba(16,185,129,0.04)_45%,transparent_70%)]" />
      
      {/* Additional dramatic lighting spots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(147,113,39,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_10%,rgba(236,72,153,0.12),transparent_50%)]" />

      {/* More dramatic shimmer effects */}
      <div className="absolute inset-0 opacity-80">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(147,113,39,0.40)] to-transparent
                     translate-x-[-100%] animate-shimmer"
        />
      </div>

      <div className="absolute inset-0 opacity-60">
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(59,130,246,0.25)] to-transparent
                     translate-x-[100%] animate-shimmer-reverse"
        />
      </div>

      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.20)] to-transparent
                     translate-x-[-100%] animate-shimmer"
          style={{ animationDelay: '3s', animationDuration: '12s' }}
        />
      </div>

      <div className="absolute inset-0 opacity-40">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(16,185,129,0.18)] to-transparent
                     translate-x-[100%] animate-shimmer-reverse"
          style={{ animationDelay: '6s', animationDuration: '14s' }}
        />
      </div>

      {/* Dramatic vertical shimmer */}
      <div className="absolute inset-0 opacity-35">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(147,113,39,0.15)] to-transparent
                     translate-y-[-100%] animate-shimmer-vertical"
          style={{ animationDuration: '15s' }}
        />
      </div>
      
      {/* Diagonal shimmer for complexity */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-br from-transparent via-[rgba(236,72,153,0.12)] to-transparent
                     translate-x-[-100%] translate-y-[-100%] animate-shimmer"
          style={{ animationDelay: '9s', animationDuration: '18s' }}
        />
      </div>

      {/* Dramatic multi-layered vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_5%,rgba(0,0,0,0.3)_35%,rgba(0,0,0,0.7)_65%,rgba(0,0,0,0.95)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,transparent_25%,rgba(0,0,0,0.5)_65%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_30%,rgba(0,0,0,0.4)_75%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,transparent_35%,rgba(0,0,0,0.5)_85%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,transparent_35%,rgba(0,0,0,0.5)_85%,rgba(0,0,0,0.9)_100%)]" />
      
      {/* Additional corner vignettes for drama */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_25%,transparent_40%,rgba(0,0,0,0.6)_90%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_75%,transparent_40%,rgba(0,0,0,0.6)_90%)]" />
      
      {/* Dramatic film-like texture and grain */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-noise mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='finegrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0.5 0.5 0.5 0 0 0.5 0.5 0.5 0 0 0.5 0.5 0.5 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23finegrain)'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
        mixBlendMode: 'soft-light'
      }} />
      
      {/* Additional dramatic grain layer */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='roughgrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0.3 0.3 0.3 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23roughgrain)'/%3E%3C/svg%3E")`,
        backgroundSize: '150px 150px',
        mixBlendMode: 'multiply'
      }} />
      
      {/* Dramatic atmospheric shadow casting */}
      <div className="absolute top-0 left-0 w-full h-2/5 bg-gradient-to-b from-black/80 via-black/45 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-black/90 via-black/55 to-transparent" />
      <div className="absolute left-0 top-0 w-2/5 h-full bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute right-0 top-0 w-2/5 h-full bg-gradient-to-l from-black/70 via-black/30 to-transparent" />

      {/* Dramatic corner shadow reinforcement */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-black/85 via-black/40 to-transparent" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-black/85 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-black/90 via-black/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black/90 via-black/50 to-transparent" />
      
      {/* Additional atmospheric depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-black/15 to-black/50" />
    </div>
  );
};

export default ShimmerBackground;
