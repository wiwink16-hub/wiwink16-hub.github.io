import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Eternal Diamond Ring",
      category: "Rings",
      price: "$2,499",
      image: ring1,
      featured: true,
    },
    {
      id: 2,
      name: "Teardrop Pendant Necklace",
      category: "Necklaces",
      price: "$1,899",
      image: necklace1,
      featured: false,
    },
    {
      id: 3,
      name: "Pearl Drop Earrings",
      category: "Earrings",
      price: "$1,299",
      image: earrings1,
      featured: true,
    },
    {
      id: 4,
      name: "Filigree Gold Bracelet",
      category: "Bracelets",
      price: "$1,699",
      image: bracelet1,
      featured: false,
    },
    {
      id: 5,
      name: "Classic Solitaire Ring",
      category: "Rings",
      price: "$3,299",
      image: ring1,
      featured: false,
    },
    {
      id: 6,
      name: "Delicate Chain Necklace",
      category: "Necklaces",
      price: "$899",
      image: necklace1,
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each piece in our collection is a testament to timeless craftsmanship
            and enduring beauty
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 h-full">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-primary">
                      {product.price}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
