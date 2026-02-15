'use client';

import React from 'react';
import { ChefHat, Eye, Leaf, Zap } from 'lucide-react';

interface Feature {
  id: string;
  title: string;
  description: string;
  Icon: React.ElementType;
}

/**
 * FeaturesSection component showcasing restaurant features
 * Displays four feature cards with icons and descriptions
 * @returns {JSX.Element} The rendered FeaturesSection component
 */
export default function FeaturesSection(): JSX.Element {
  const features: Feature[] = [
    {
      id: 'open-kitchen',
      title: 'مطبخ مفتوح',
      description: 'شاهد طهاةنا المحترفين وهم يعدون وجباتك بأعلى معايير النظافة والجودة',
      Icon: Eye,
    },
    {
      id: 'professional-chefs',
      title: 'طهاة محترفون',
      description: 'فريق من الطهاة ذوي الخبرة في المأكولات السعودية التقليدية والعالمية',
      Icon: ChefHat,
    },
    {
      id: 'fresh-ingredients',
      title: 'مكونات طازجة',
      description: 'نختار بعناية أفضل المكونات الطازجة والعضوية من الموردين الموثوقين',
      Icon: Leaf,
    },
    {
      id: 'quick-service',
      title: 'خدمة سريعة',
      description: 'خدمة سريعة وفعالة دون المساومة على الجودة أو تفاصيل الطبق',
      Icon: Zap,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            لماذا تختار مطعم النخبة؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم لكم تجربة طعام فريدة تجمع بين الأصالة والابتكار
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative bg-gradient-card rounded-xl p-6 sm:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Card Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.Icon className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
