'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  price: number;
  rating: number;
  imageUrl: string;
  description: string;
}

/**
 * MenuSection component displaying restaurant menu items
 * Shows a grid of menu items with images, prices, ratings, and add-to-order functionality
 * @returns {JSX.Element} The rendered MenuSection component
 */
export default function MenuSection(): JSX.Element {
  const menuItems: MenuItem[] = [
    {
      id: 'kabsa-chicken',
      name: 'كبسة دجاج',
      price: 45,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
      description: 'دجاج طازج مع أرز كبسة مميز بالتوابل السعودية الأصيلة',
    },
    {
      id: 'mandi-lamb',
      name: 'مندي لحم',
      price: 65,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&h=300&fit=crop',
      description: 'لحم طري مع أرز مندي مدخن بنكهة فريدة من التوابل اليمنية',
    },
    {
      id: 'jareesh',
      name: 'جريش',
      price: 35,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop',
      description: 'طبق تقليدي سعودي من القمح المطحون مع اللحم والبصل والتوابل',
    },
    {
      id: 'biryani',
      name: 'برياني',
      price: 55,
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop',
      description: 'أرز برياني عطري مع اللحم والبهارات الهندية الأصلية',
    },
  ];

  const handleAddToOrder = (itemName: string): void => {
    alert(`تم إضافة "${itemName}" إلى طلبك`);
  };

  const renderStars = (rating: number): JSX.Element[] => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`star-${i}`}
          className="w-4 h-4 fill-primary text-primary"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative w-4 h-4">
          <Star className="w-4 h-4 text-primary opacity-30" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
            <Star className="w-4 h-4 fill-primary text-primary" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          className="w-4 h-4 text-primary opacity-30"
        />
      );
    }

    return stars;
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            قائمة الطعام
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف تشكيلتنا المتنوعة من الأطباق السعودية التقليدية
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-gradient-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name and Price */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">
                    {item.price} ريال
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.rating.toFixed(1)}
                  </span>
                </div>

                {/* Add to Order Button */}
                <button
                  onClick={() => handleAddToOrder(item.name)}
                  className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                >
                  أضف للطلب
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-3 left-3 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 right-3 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
