import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Droplets, Sun, Shield } from "lucide-react";

const CareInstructions = () => {
  const careTips = [
    {
      icon: Sparkles,
      title: "Regular Cleaning",
      description:
        "Clean your jewelry regularly with a soft cloth to maintain its shine. For deeper cleaning, use warm water with mild soap and a soft brush.",
    },
    {
      icon: Droplets,
      title: "Avoid Chemicals",
      description:
        "Remove jewelry before swimming, bathing, or using cleaning products. Chlorine and harsh chemicals can damage precious metals and gemstones.",
    },
    {
      icon: Sun,
      title: "Proper Storage",
      description:
        "Store each piece separately in a soft pouch or jewelry box to prevent scratching. Keep jewelry away from direct sunlight and extreme temperatures.",
    },
    {
      icon: Shield,
      title: "Professional Maintenance",
      description:
        "Have your jewelry professionally cleaned and inspected annually. This ensures settings are secure and your pieces remain in optimal condition.",
    },
  ];

  const metalCare = {
    gold: {
      title: "Gold Jewelry",
      tips: [
        "Gold is durable but can scratch. Store separately from other pieces",
        "Clean with warm soapy water and a soft brush",
        "Professional polishing recommended annually",
        "Avoid wearing during heavy physical activities",
      ],
    },
    platinum: {
      title: "Platinum Jewelry",
      tips: [
        "Platinum develops a natural patina over time",
        "Clean with jewelry cleaner specifically for platinum",
        "More scratch-resistant than gold",
        "Professional polishing can restore original luster",
      ],
    },
    silver: {
      title: "Silver Jewelry",
      tips: [
        "Store in anti-tarnish bags when not in use",
        "Clean regularly with silver polishing cloth",
        "Avoid exposure to air and moisture",
        "Remove before showering or swimming",
      ],
    },
  };

  const gemstoneCare = [
    {
      name: "Diamonds",
      care: "Very durable. Clean with warm soapy water. Avoid harsh impacts.",
    },
    {
      name: "Pearls",
      care: "Delicate. Wipe with soft cloth after wearing. No chemicals or ultrasonic cleaners.",
    },
    {
      name: "Emeralds",
      care: "Fragile. Clean gently with damp cloth. Avoid temperature changes.",
    },
    {
      name: "Sapphires & Rubies",
      care: "Durable. Clean with warm soapy water. Professional cleaning safe.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Care Instructions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Keep your jewelry beautiful for generations with proper care
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* General Care Tips */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">
              Essential Care Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {careTips.map((tip, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <tip.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {tip.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Metal-Specific Care */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Metal Care Guide</h2>
            <div className="space-y-4">
              {Object.values(metalCare).map((metal, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">{metal.title}</h3>
                    <ul className="space-y-2">
                      {metal.tips.map((tip, tipIndex) => (
                        <li
                          key={tipIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Gemstone Care */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Gemstone Care</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {gemstoneCare.map((gem, index) => (
                    <div key={index} className="pb-4 border-b last:border-0">
                      <h3 className="font-semibold mb-2">{gem.name}</h3>
                      <p className="text-sm text-muted-foreground">{gem.care}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Do's and Don'ts */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Do's and Don'ts</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-green-200 dark:border-green-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-green-700 dark:text-green-400">
                    ✓ Do
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Remove jewelry before exercising or sleeping
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Put jewelry on last when getting dressed
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Store in original packaging or soft pouches
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Have pieces inspected annually
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-red-200 dark:border-red-900">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-red-700 dark:text-red-400">
                    ✗ Don't
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Wear jewelry in pools, hot tubs, or while showering
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Apply perfume, lotion, or hairspray while wearing
                        jewelry
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Store different pieces together in one container
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span className="text-muted-foreground">
                        Use harsh chemicals or abrasive materials for cleaning
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Professional Services */}
          <section>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Professional Cleaning Services
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Bring your Lumière Jewels pieces to any of our locations for
                  complimentary professional cleaning and inspection.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Find a Location
                </a>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareInstructions;
