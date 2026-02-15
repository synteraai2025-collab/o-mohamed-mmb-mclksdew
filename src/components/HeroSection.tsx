'use client';

import React from 'react';

/**
 * HeroSection component for the restaurant landing page
 * Displays the main title, subtitle, and call-to-action buttons
 * @returns {JSX.Element} The rendered HeroSection component
 */
export default function HeroSection(): JSX.Element {
  const handleOrderNow = (): void => {
    alert('تم تحويلك إلى صفحة الطلبات');
  };

  const handleViewMenu = (): void => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/40 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            تذوق أشهى المأكولات السعودية
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            أطباق تقليدية بنكهة عصرية
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
              onClick={handleOrderNow}
            >
              اطلب الآن
            </button>
            <button 
              className="text-lg px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-200 hover:scale-105 font-medium"
              onClick={handleViewMenu}
            >
              شاهد القائمة
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm">مطبخ مفتوح • مكونات طازجة • خدمة سريعة</span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
