import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Package, Truck, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Shipping = () => {
  const shippingMethods = [
    {
      icon: Truck,
      title: "Standard Shipping",
      time: "5-7 Business Days",
      cost: "Free on orders over $500",
    },
    {
      icon: Package,
      title: "Express Shipping",
      time: "2-3 Business Days",
      cost: "$25 flat rate",
    },
    {
      icon: Clock,
      title: "Next Day Delivery",
      time: "1 Business Day",
      cost: "$50 flat rate",
    },
    {
      icon: MapPin,
      title: "International",
      time: "10-15 Business Days",
      cost: "Calculated at checkout",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Shipping Information
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver your precious jewelry with the utmost care and security
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Shipping Methods */}
          <section>
            <h2 className="text-2xl font-semibold mb-6">Shipping Methods</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shippingMethods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <method.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1">
                          {method.time}
                        </p>
                        <p className="text-sm font-medium text-primary">
                          {method.cost}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Processing Time */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Processing Time</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  All orders are processed within 1-2 business days. Orders are
                  not shipped or delivered on weekends or holidays.
                </p>
                <p className="text-muted-foreground">
                  If we are experiencing a high volume of orders, shipments may
                  be delayed by a few days. Please allow additional days in
                  transit for delivery.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Tracking */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Order Tracking</h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Once your order has shipped, you will receive a confirmation
                  email with tracking information. You can track your package
                  using the tracking number provided.
                </p>
                <p className="text-muted-foreground">
                  If you have any questions about your order, please contact our
                  customer service team at info@lumierejewels.com
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Insurance & Signature */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Insurance & Signature
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  All orders are fully insured during shipping. High-value items
                  (over $1,000) require a signature upon delivery for your
                  security.
                </p>
                <p className="text-muted-foreground">
                  Please ensure someone is available to sign for the package
                  during delivery hours.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* International Shipping */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              International Shipping
            </h2>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  We ship to most countries worldwide. International shipping
                  costs and delivery times vary by destination.
                </p>
                <p className="text-muted-foreground mb-4">
                  Please note that international orders may be subject to
                  customs fees, duties, and taxes imposed by your country. These
                  charges are the responsibility of the recipient.
                </p>
                <p className="text-muted-foreground">
                  Contact us for a shipping quote to your specific location.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
