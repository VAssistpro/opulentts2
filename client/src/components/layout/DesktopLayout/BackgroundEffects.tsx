import React from 'react';
import DramaticLighting from '../../effects/DramaticLighting';
import EnhancedTexture from '../../effects/EnhancedTexture';
import DepthShadows from '../../effects/DepthShadows';

const BackgroundEffects = () => {
  return (
    <>
      {/* Enhanced depth and shadow system */}
      <DepthShadows />

      {/* Dramatic lighting system */}
      <DramaticLighting />

      {/* Enhanced texture overlay */}
      <EnhancedTexture />

      {/* Deep dramatic gradient layers - Enhanced */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-black pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-black via-black/80 to-slate-900/70 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 pointer-events-none" />

      {/* Additional atmospheric layers */}
      <div className="fixed inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(0,0,0,0.2)_120deg,transparent_240deg,rgba(0,0,0,0.15)_360deg)] pointer-events-none" />
      
      {/* Enhanced floating orbs with dramatic lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Primary golden light source - Enhanced */}
        <div className="absolute top-1/6 left-1/5 w-[700px] h-[700px] bg-gold/20 rounded-full blur-3xl animate-pulse-slow opacity-80" />
        <div className="absolute top-1/6 left-1/5 w-[500px] h-[500px] bg-gold/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/6 left-1/5 w-[300px] h-[300px] bg-gold/12 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />

        {/* Secondary ambient lights - Enhanced */}
        <div className="absolute top-2/3 right-1/6 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-emerald-400/6 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '4s' }} />

        {/* Dramatic edge lighting - Enhanced */}
        <div className="absolute top-0 left-0 w-[800px] h-[300px] bg-gold/12 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[300px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[600px] h-[250px] bg-blue-400/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[650px] h-[250px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      
      {/* Enhanced particle system with multiple types */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary gold particles */}
        {[...Array(60)].map((_, i) => (
          <div
            key={`gold-${i}`}
            className="absolute bg-gold/40 rounded-full animate-float"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 25}s`,
              boxShadow: `0 0 ${3 + Math.random() * 6}px rgba(147,113,39,0.7)`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}

        {/* Secondary blue particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute bg-blue-400/30 rounded-full animate-float"
            style={{
              width: `${0.5 + Math.random() * 2}px`,
              height: `${0.5 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
              boxShadow: `0 0 ${2 + Math.random() * 4}px rgba(59,130,246,0.5)`,
              opacity: 0.2 + Math.random() * 0.3
            }}
          />
        ))}

        {/* Tertiary purple particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`purple-${i}`}
            className="absolute bg-purple-400/25 rounded-full animate-float"
            style={{
              width: `${0.8 + Math.random() * 1.5}px`,
              height: `${0.8 + Math.random() * 1.5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${25 + Math.random() * 15}s`,
              boxShadow: `0 0 ${2 + Math.random() * 3}px rgba(168,85,247,0.4)`,
              opacity: 0.15 + Math.random() * 0.25
            }}
          />
        ))}
      </div>
      
      {/* Dramatic directional light rays - Enhanced */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary light shafts */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-gold/30 via-gold/8 to-transparent transform -skew-x-12 blur-sm" />
        <div className="absolute top-0 right-1/3 w-1.5 h-full bg-gradient-to-b from-gold/25 via-gold/6 to-transparent transform skew-x-6 blur-sm" />
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-gold/20 via-gold/4 to-transparent transform -skew-x-3 blur-sm" />

        {/* Secondary light shafts */}
        <div className="absolute top-0 left-1/6 w-1 h-full bg-gradient-to-b from-blue-400/15 via-blue-400/3 to-transparent transform skew-x-8 blur-sm" />
        <div className="absolute top-0 right-1/5 w-1.5 h-full bg-gradient-to-b from-purple-400/12 via-purple-400/2 to-transparent transform -skew-x-5 blur-sm" />

        {/* Intersecting light beams */}
        <div className="absolute left-0 top-1/4 w-full h-1 bg-gradient-to-r from-transparent via-gold/20 to-transparent transform rotate-1 blur-sm" />
        <div className="absolute left-0 top-3/4 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent transform -rotate-1 blur-sm" />
      </div>
      
      {/* Complex radial lighting system - Enhanced */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_20%_10%,rgba(147,113,39,0.25),rgba(147,113,39,0.08)_40%,transparent_70%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_80%_90%,rgba(147,113,39,0.15),rgba(147,113,39,0.04)_50%,transparent_80%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),rgba(59,130,246,0.03)_60%,transparent_85%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_70%_20%,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_60%,rgba(16,185,129,0.06),transparent_45%)] pointer-events-none" />
      
      {/* Enhanced depth shadows - Multi-layered */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_20%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_30%_30%,transparent_25%,rgba(0,0,0,0.3)_60%,rgba(0,0,0,0.6)_90%)] pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
      <div className="fixed left-0 top-0 w-1/3 h-full bg-gradient-to-r from-black/40 via-black/15 to-transparent pointer-events-none" />
      <div className="fixed right-0 top-0 w-1/3 h-full bg-gradient-to-l from-black/40 via-black/15 to-transparent pointer-events-none" />
      
      {/* Enhanced film grain and texture layers */}
      <div className="fixed inset-0 opacity-[0.06] pointer-events-none bg-noise mix-blend-overlay" />
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='roughPaper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23roughPaper)'/%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
        mixBlendMode: 'multiply'
      }} />
      
      {/* Enhanced dynamic atmospheric fog */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/15 to-transparent animate-slow-drift opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-black/12 to-transparent animate-slow-drift-reverse opacity-70" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/8 to-transparent animate-slow-drift opacity-60" style={{ animationDelay: '6s' }} />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-black/6 to-transparent animate-slow-drift-reverse opacity-50" style={{ animationDelay: '9s' }} />
      </div>

      {/* Atmospheric haze layers */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-blue-400/3 animate-pulse-slow opacity-40" style={{ animationDuration: '15s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/2 via-transparent to-gold/3 animate-pulse-slow opacity-30" style={{ animationDuration: '20s', animationDelay: '5s' }} />
      </div>
    </>
  );
};

export default BackgroundEffects;
