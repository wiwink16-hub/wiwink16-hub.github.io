import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.jpg";
import { Award, Heart, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every piece we create is infused with passion and dedication to the art of jewelry making.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality and craftsmanship in every creation.",
    },
    {
      icon: Users,
      title: "Heritage",
      description:
        "Three generations of master jewelers have passed down their expertise and techniques.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutHero})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A legacy of craftsmanship spanning three generations
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-center">
              Crafting Timeless Beauty
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Founded in 1950, Lumière Jewels began as a small atelier in the
                heart of the jewelry district. Our founder, Master Jeweler
                Alexandre Beaumont, had a vision: to create pieces that would
                transcend time and become cherished heirlooms.
              </p>
              <p>
                Today, three generations later, we continue to honor that vision.
                Each piece that leaves our workshop is a testament to the skills
                and techniques passed down through our family, combined with
                contemporary design sensibilities.
              </p>
              <p>
                Our master craftsmen spend years perfecting their art, ensuring
                that every ring, necklace, and bracelet meets the exacting
                standards that have made Lumière Jewels synonymous with
                excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are committed to sustainable and ethical practices throughout our
              supply chain. Every gemstone and precious metal we use is sourced
              responsibly, ensuring that your jewelry not only looks beautiful but
              also reflects your values.
            </p>
            <p className="text-lg text-muted-foreground">
              When you choose Lumière Jewels, you're not just purchasing jewelry –
              you're investing in a piece of art that will be treasured for
              generations to come.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
