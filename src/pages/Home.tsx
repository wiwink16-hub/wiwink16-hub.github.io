import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Gem, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-jewelry.jpg";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Home = () => {
  const collections = [
    { id: 1, name: "Diamond Rings", image: ring1, path: "/product/1" },
    { id: 2, name: "Gold Necklaces", image: necklace1, path: "/product/2" },
    { id: 3, name: "Pearl Earrings", image: earrings1, path: "/product/3" },
    { id: 4, name: "Luxury Bracelets", image: bracelet1, path: "/product/4" },
  ];

  const features = [
    {
      icon: Gem,
      title: "Premium Quality",
      description: "Each piece is crafted with the finest materials and attention to detail.",
    },
    {
      icon: Shield,
      title: "Lifetime Warranty",
      description: "We stand behind our craftsmanship with a comprehensive warranty.",
    },
    {
      icon: Sparkles,
      title: "Timeless Design",
      description: "Classic elegance that transcends trends and generations.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Timeless
            <br />
            <span className="text-primary">Elegance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
            Discover exquisite jewelry crafted with precision, passion, and an
            unwavering commitment to beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="text-lg">
              <Link to="/shop">
                Shop Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our curated selection of exceptional pieces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((item) => (
            <Link key={item.id} to={item.path}>
              <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-center group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/shop">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Begin Your Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect piece that tells your unique story
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
