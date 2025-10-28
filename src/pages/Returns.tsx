import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, XCircle } from "lucide-react";

const Returns = () => {
  const eligibleItems = [
    "Unworn jewelry in original condition",
    "Items with original tags and packaging",
    "Purchases made within 30 days",
    "Items with proof of purchase",
  ];

  const ineligibleItems = [
    "Custom or personalized pieces",
    "Engraved jewelry",
    "Earrings (for hygiene reasons)",
    "Items without original packaging",
    "Damaged or altered items",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Returns & Exchanges
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your satisfaction is our priority. We offer a hassle-free return
            policy.
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Return Policy */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">30-Day Return Policy</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We want you to love your Lumière Jewels purchase. If for any
                  reason you're not completely satisfied, you may return eligible
                  items within 30 days of delivery for a full refund or exchange.
                </p>
                <p className="text-muted-foreground">
                  All returned items must be in their original condition, unworn,
                  and in the original packaging with all tags attached.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Eligible vs Ineligible */}
          <section className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 dark:border-green-900">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <h3 className="text-lg font-semibold">Eligible for Return</h3>
                </div>
                <ul className="space-y-2">
                  {eligibleItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-red-200 dark:border-red-900">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold">Not Eligible</h3>
                </div>
                <ul className="space-y-2">
                  {ineligibleItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* How to Return */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">How to Return</h2>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Contact Us",
                  description:
                    "Email info@lumierejewels.com with your order number and reason for return.",
                },
                {
                  step: "2",
                  title: "Receive Authorization",
                  description:
                    "We'll send you a Return Authorization (RA) number and instructions.",
                },
                {
                  step: "3",
                  title: "Package Your Item",
                  description:
                    "Securely pack the item in its original packaging with all tags attached.",
                },
                {
                  step: "4",
                  title: "Ship It Back",
                  description:
                    "Use the prepaid shipping label provided or your preferred carrier.",
                },
                {
                  step: "5",
                  title: "Receive Refund",
                  description:
                    "Once we receive and inspect your return, we'll process your refund within 5-7 business days.",
                },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Exchanges */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We're happy to exchange items for a different size or style,
                  subject to availability. To exchange an item, please follow the
                  return process and place a new order for the item you'd like.
                </p>
                <p className="text-muted-foreground">
                  For size exchanges on rings, please contact us before returning
                  to check availability.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Contact CTA */}
          <section>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Need Help with a Return?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Our customer service team is here to assist you with any
                  questions or concerns.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
