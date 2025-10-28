import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ruler, Info } from "lucide-react";

const SizeGuide = () => {
  const ringSizes = [
    { us: "4", uk: "H", eu: "47", circumference: "46.8 mm" },
    { us: "5", uk: "J½", eu: "49", circumference: "49.3 mm" },
    { us: "6", uk: "L½", eu: "52", circumference: "51.9 mm" },
    { us: "7", uk: "N½", eu: "54", circumference: "54.4 mm" },
    { us: "8", uk: "P½", eu: "57", circumference: "57.0 mm" },
    { us: "9", uk: "R½", eu: "59", circumference: "59.5 mm" },
    { us: "10", uk: "T½", eu: "62", circumference: "62.1 mm" },
  ];

  const necklaceLengths = [
    { length: "16 inches (40cm)", description: "Choker - Sits at the collarbone" },
    { length: "18 inches (45cm)", description: "Princess - Most popular length" },
    { length: "20 inches (50cm)", description: "Matinee - Falls below collarbone" },
    { length: "24 inches (60cm)", description: "Opera - Falls at the breastbone" },
  ];

  const braceletSizes = [
    { size: "Extra Small", wrist: "5.5 - 6 inches (14-15cm)" },
    { size: "Small", wrist: "6 - 6.5 inches (15-16.5cm)" },
    { size: "Medium", wrist: "6.5 - 7 inches (16.5-18cm)" },
    { size: "Large", wrist: "7 - 7.5 inches (18-19cm)" },
    { size: "Extra Large", wrist: "7.5 - 8 inches (19-20cm)" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Size Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive sizing guide
          </p>
        </header>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Ring Sizes */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Ring Sizes</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Info className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">How to Measure Your Ring Size</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Wrap a string or paper strip around your finger</li>
                      <li>2. Mark where the ends meet</li>
                      <li>3. Measure the length in millimeters</li>
                      <li>4. Use the chart below to find your size</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>US Size</TableHead>
                      <TableHead>UK Size</TableHead>
                      <TableHead>EU Size</TableHead>
                      <TableHead>Circumference</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ringSizes.map((size, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{size.us}</TableCell>
                        <TableCell>{size.uk}</TableCell>
                        <TableCell>{size.eu}</TableCell>
                        <TableCell>{size.circumference}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>

          {/* Necklace Lengths */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Necklace Lengths</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {necklaceLengths.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.length}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">Choosing Your Length</h3>
                    <p className="text-sm text-muted-foreground">
                      The perfect necklace length depends on your style and
                      neckline. 18 inches is the most versatile length, suitable
                      for most occasions and outfits.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Bracelet Sizes */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-semibold">Bracelet Sizes</h2>
            </div>

            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-2">How to Measure Your Wrist</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Use a flexible measuring tape or string to measure your
                      wrist just below the wrist bone. Add 0.5-1 inch for a
                      comfortable fit.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              {braceletSizes.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{item.size}</h3>
                    <p className="text-sm text-muted-foreground">{item.wrist}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Professional Sizing */}
          <section>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  Need Professional Sizing?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Visit one of our stores for complimentary professional sizing,
                  or contact us for a free ring sizer kit delivered to your home.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Request Ring Sizer
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SizeGuide;
