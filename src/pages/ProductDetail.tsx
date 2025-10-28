import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ring1 from "@/assets/ring-1.jpg";
import necklace1 from "@/assets/necklace-1.jpg";
import earrings1 from "@/assets/earrings-1.jpg";
import bracelet1 from "@/assets/bracelet-1.jpg";

const ProductDetail = () => {
  const { id } = useParams();

  const products: Record<string, any> = {
    "1": {
      name: "Eternal Diamond Ring",
      category: "Rings",
      price: "$2,499",
      image: ring1,
      description:
        "A stunning diamond ring featuring a brilliant-cut center stone set in 18K gold. This timeless piece exemplifies elegance and sophistication, perfect for those special moments.",
      details: [
        "18K Gold Band",
        "Brilliant-cut Diamond",
        "Certified Authentic",
        "Lifetime Warranty",
      ],
    },
    "2": {
      name: "Teardrop Pendant Necklace",
      category: "Necklaces",
      price: "$1,899",
      image: necklace1,
      description:
        "An elegant teardrop pendant crafted from 18K gold with a delicate chain. The refined design makes it perfect for both everyday wear and special occasions.",
      details: [
        "18K Gold Chain",
        "Teardrop Pendant",
        "Adjustable Length",
        "Hypoallergenic",
      ],
    },
    "3": {
      name: "Pearl Drop Earrings",
      category: "Earrings",
      price: "$1,299",
      image: earrings1,
      description:
        "Exquisite pearl drop earrings featuring lustrous pearls and intricate gold detailing. These earrings add a touch of sophistication to any ensemble.",
      details: [
        "Genuine Pearls",
        "18K Gold Setting",
        "Secure Closure",
        "Gift Boxed",
      ],
    },
    "4": {
      name: "Filigree Gold Bracelet",
      category: "Bracelets",
      price: "$1,699",
      image: bracelet1,
      description:
        "A beautifully crafted bracelet featuring intricate filigree work in 18K gold. The delicate design showcases exceptional craftsmanship and attention to detail.",
      details: [
        "18K Gold",
        "Filigree Design",
        "Adjustable Fit",
        "Handcrafted",
      ],
    },
  };

  const product = products[id || "1"] || products["1"];

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Link
          to="/shop"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary mb-6">
              {product.price}
            </p>

            <p className="text-lg text-muted-foreground mb-8">
              {product.description}
            </p>

            <Card className="p-6 mb-8">
              <h3 className="font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Need Assistance?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our jewelry experts are here to help you find the perfect piece.
              </p>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
