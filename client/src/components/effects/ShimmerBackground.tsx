import React from 'react';

const ShimmerBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep foundation layer - Enhanced */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000208] via-[#000612] to-[#000208]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#000410] via-transparent to-[#000308]" />
      
      {/* Enhanced depth layers with more complexity */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#020B1A] via-transparent to-[#010612]" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[#000B1F] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tl from-[#030C1B] via-transparent to-[#010814]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#020A18] to-transparent" />

      {/* Dramatic directional lighting - Enhanced */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(147,113,39,0.15),rgba(147,113,39,0.05)_40%,transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(59,130,246,0.08),rgba(59,130,246,0.02)_50%,transparent_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(168,85,247,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(16,185,129,0.04),transparent_45%)]" />

      {/* Enhanced shimmer effects with multiple layers */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(147,113,39,0.20)] to-transparent
                     translate-x-[-100%] animate-shimmer"
        />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[rgba(59,130,246,0.12)] to-transparent
                     translate-x-[100%] animate-shimmer-reverse"
        />
      </div>

      <div className="absolute inset-0 opacity-25">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(168,85,247,0.10)] to-transparent
                     translate-x-[-100%] animate-shimmer"
          style={{ animationDelay: '3s', animationDuration: '12s' }}
        />
      </div>

      {/* Vertical shimmer for added depth */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(147,113,39,0.08)] to-transparent
                     translate-y-[-100%] animate-shimmer-vertical"
          style={{ animationDuration: '15s' }}
        />
      </div>

      {/* Multi-layered vignette for dramatic depth - Enhanced */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_10%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.9)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,transparent_30%,rgba(0,0,0,0.4)_70%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,transparent_35%,rgba(0,0,0,0.3)_80%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,transparent_40%,rgba(0,0,0,0.4)_90%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_100%_50%,transparent_40%,rgba(0,0,0,0.4)_90%)]" />
      
      {/* Enhanced noise texture for film-like quality - Multi-layered */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-noise mix-blend-overlay" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='finegrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.95' numOctaves='5' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0.5 0.5 0.5 0 0 0.5 0.5 0.5 0 0 0.5 0.5 0.5 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23finegrain)'/%3E%3C/svg%3E")`,
        backgroundSize: '100px 100px',
        mixBlendMode: 'soft-light'
      }} />
      
      {/* Atmospheric shadow casting - Enhanced */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black/40 via-black/15 to-transparent" />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/40 via-black/15 to-transparent" />

      {/* Corner shadow reinforcement */}
      <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-black/70 to-transparent" />
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-gradient-to-bl from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-black/80 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-gradient-to-tl from-black/80 to-transparent" />
    </div>
  );
};

export default ShimmerBackground;
