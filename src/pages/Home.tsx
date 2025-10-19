import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Store, Users, Star, MapPin, Search, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-marketplace.jpg";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              {t('home.title')}
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {t('home.subtitle')}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/vendors">
                <Button variant="hero" size="lg" className="gap-2">
                  <Search className="h-5 w-5" />
                  {t('home.exploreVendors')}
                </Button>
              </Link>
              <Link to="/auth">
                <Button variant="outline" size="lg" className="gap-2">
                  <Store className="h-5 w-5" />
                  {t('home.registerBusiness')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            {t('home.whyChoose')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Store className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t('home.localVendors')}</h3>
              <p className="text-muted-foreground">
                {t('home.localVendorsDesc')}
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Star className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t('home.trustedReviews')}</h3>
              <p className="text-muted-foreground">
                {t('home.trustedReviewsDesc')}
              </p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow border-border bg-card">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">{t('home.easyToFind')}</h3>
              <p className="text-muted-foreground">
                {t('home.easyToFindDesc')}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-border">
            <Heart className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              {t('home.supportCommunity')}
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('home.supportDesc')}
            </p>
            <Link to="/vendors">
              <Button variant="default" size="lg">
                {t('home.startExploring')}
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <Store className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground">Nashik LocalConnect</span>
            - Empowering Local Businesses
          </p>
          <p className="mt-2 text-sm">© 2025 All rights reserved. Mhasrul, Nashik</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
