import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import MenuSection from '@/components/MenuSection'
import { Users, Gift, Star, Calendar, Check } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <MenuSection />
      
      {/* Offers Section */}
      <section id="offers" className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              العروض الخاصة
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              استمتع بعروضنا المميزة طوال الأسبوع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Family Lunch Offer */}
            <div className="group bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">غداء عائلي</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                استمتع بوجبة غداء كاملة لـ 4 أشخاص بسعر 150 ريال فقط. تتضمن المقبلات، الأطباق الرئيسية، والمشروبات.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">150 ريال</span>
                <span className="text-sm text-muted-foreground line-through">200 ريال</span>
              </div>
            </div>

            {/* Kids Meals Offer */}
            <div className="group bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative">
              <div className="absolute top-4 left-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Gift className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 mt-4">وجبات الأطفال</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                وجبة خاصة للأطفال تشمل وجبة رئيسية، مشروب، وهدية مجانية. مناسبة للأعمار من 3-12 سنة.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-primary">25 ريال</span>
                <span className="text-sm text-muted-foreground line-through">35 ريال</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ما يقوله عملاؤنا عن تجربتهم في مطعم النخبة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop"
                  alt="عميل 1"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-foreground">سارة أحمد</h4>
                  <p className="text-sm text-muted-foreground">رياضية محترفة</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "أفضل مطعم سعودي جربته! الطعام لذيذ والخدمة ممتازة. أنصح الجميع بتجربة الكبسة."
              </p>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="عميل 2"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-foreground">خالد محمد</h4>
                  <p className="text-sm text-muted-foreground">رجل أعمال</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "الجودة والنظافة في أعلى المستويات. المكان مثالي للعائلات والاجتماعات الرسمية."
              </p>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="عميل 3"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="mr-4">
                  <h4 className="font-semibold text-foreground">فاطمة علي</h4>
                  <p className="text-sm text-muted-foreground">مدرسة</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "أحببت المطبخ المفتوح والأجواء العائلية. الأطفال يستمتعون دائماً بوقتهم هنا."
              </p>
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                احجز طاولتك
              </h2>
              <p className="text-lg text-muted-foreground">
                احجز مسبقاً لتأمين مكانك في مطعم النخبة
              </p>
            </div>

            <div className="bg-gradient-card rounded-xl p-8 border border-border shadow-lg">
              <form onSubmit={(e) => { e.preventDefault(); alert('تم حجز طاولتك بنجاح!'); }} className="space-y-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-foreground mb-2">
                    التاريخ
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="date"
                      id="date"
                      required
                      className="w-full pr-10 pl-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="people" className="block text-sm font-medium text-foreground mb-2">
                    عدد الأشخاص
                  </label>
                  <div className="relative">
                    <Users className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <select
                      id="people"
                      required
                      className="w-full pr-10 pl-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                    >
                      <option value="">اختر عدد الأشخاص</option>
                      <option value="1">شخص واحد</option>
                      <option value="2">شخصان</option>
                      <option value="3">3 أشخاص</option>
                      <option value="4">4 أشخاص</option>
                      <option value="5">5 أشخاص</option>
                      <option value="6">6 أشخاص</option>
                      <option value="7+">7 أشخاص أو أكثر</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <Check className="w-5 h-5" />
                  <span>احجز الآن</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
