import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import ring1 from "@assets/stock_images/elegant_diamond_ring_f9a73730.jpg";
import ring2 from "@assets/stock_images/elegant_diamond_ring_810671c2.jpg";
import ring3 from "@assets/stock_images/elegant_diamond_ring_6c85e9bd.jpg";
import ring4 from "@assets/stock_images/sapphire_gemstone_ri_0a2a676b.jpg";
import ring5 from "@assets/stock_images/sapphire_gemstone_ri_45bb8532.jpg";

import necklace1 from "@assets/stock_images/luxury_gold_necklace_c4ee9628.jpg";
import necklace2 from "@assets/stock_images/luxury_gold_necklace_8b694e63.jpg";
import necklace3 from "@assets/stock_images/luxury_gold_necklace_5f856af2.jpg";
import necklace4 from "@assets/stock_images/emerald_necklace_lux_2b62e80f.jpg";
import necklace5 from "@assets/stock_images/emerald_necklace_lux_8194b6d8.jpg";

import earrings1 from "@assets/stock_images/beautiful_pearl_earr_31ed7c04.jpg";
import earrings2 from "@assets/stock_images/beautiful_pearl_earr_d4fb5bfb.jpg";
import earrings3 from "@assets/stock_images/beautiful_pearl_earr_c00d25e9.jpg";
import earrings4 from "@assets/stock_images/ruby_gemstone_earrin_32086311.jpg";
import earrings5 from "@assets/stock_images/ruby_gemstone_earrin_a6c4fbbe.jpg";

import bracelet1 from "@assets/stock_images/elegant_gold_bracele_e9ad1e3c.jpg";
import bracelet2 from "@assets/stock_images/elegant_gold_bracele_366a0129.jpg";
import bracelet3 from "@assets/stock_images/elegant_gold_bracele_dbd87202.jpg";
import bracelet4 from "@assets/stock_images/tennis_bracelet_diam_6d48b257.jpg";
import bracelet5 from "@assets/stock_images/tennis_bracelet_diam_cf895cd5.jpg";

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
      image: ring2,
      featured: false,
    },
    {
      id: 6,
      name: "Delicate Chain Necklace",
      category: "Necklaces",
      price: "$899",
      image: necklace2,
      featured: false,
    },
    {
      id: 7,
      name: "Radiant Cut Diamond Ring",
      category: "Rings",
      price: "$4,299",
      image: ring3,
      featured: true,
    },
    {
      id: 8,
      name: "Luxury Gold Pendant",
      category: "Necklaces",
      price: "$2,199",
      image: necklace3,
      featured: false,
    },
    {
      id: 9,
      name: "Elegant Pearl Studs",
      category: "Earrings",
      price: "$899",
      image: earrings2,
      featured: false,
    },
    {
      id: 10,
      name: "Vintage Gold Bangle",
      category: "Bracelets",
      price: "$1,499",
      image: bracelet2,
      featured: false,
    },
    {
      id: 11,
      name: "Sapphire Halo Ring",
      category: "Rings",
      price: "$3,799",
      image: ring4,
      featured: true,
    },
    {
      id: 12,
      name: "Emerald Statement Necklace",
      category: "Necklaces",
      price: "$5,299",
      image: necklace4,
      featured: true,
    },
    {
      id: 13,
      name: "Pearl Cluster Earrings",
      category: "Earrings",
      price: "$1,599",
      image: earrings3,
      featured: false,
    },
    {
      id: 14,
      name: "Diamond Tennis Bracelet",
      category: "Bracelets",
      price: "$4,599",
      image: bracelet4,
      featured: true,
    },
    {
      id: 15,
      name: "Royal Sapphire Ring",
      category: "Rings",
      price: "$4,999",
      image: ring5,
      featured: false,
    },
    {
      id: 16,
      name: "Emerald Luxury Pendant",
      category: "Necklaces",
      price: "$3,899",
      image: necklace5,
      featured: false,
    },
    {
      id: 17,
      name: "Ruby Drop Earrings",
      category: "Earrings",
      price: "$2,299",
      image: earrings4,
      featured: true,
    },
    {
      id: 18,
      name: "Classic Tennis Bracelet",
      category: "Bracelets",
      price: "$3,999",
      image: bracelet5,
      featured: false,
    },
    {
      id: 19,
      name: "Ruby Halo Earrings",
      category: "Earrings",
      price: "$2,799",
      image: earrings5,
      featured: false,
    },
    {
      id: 20,
      name: "Twisted Gold Bracelet",
      category: "Bracelets",
      price: "$2,199",
      image: bracelet3,
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
            <Link key={product.id} to={`/product/${product.id}`} data-testid={`link-product-${product.id}`}>
              <Card className="group overflow-hidden border-border hover:border-primary transition-all duration-300 h-full" data-testid={`card-product-${product.id}`}>
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      data-testid={`img-product-${product.id}`}
                    />
                    {product.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary" data-testid={`badge-featured-${product.id}`}>
                        Featured
                      </Badge>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2" data-testid={`text-category-${product.id}`}>
                      {product.category}
                    </p>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors" data-testid={`text-name-${product.id}`}>
                      {product.name}
                    </h3>
                    <p className="text-lg font-bold text-primary" data-testid={`text-price-${product.id}`}>
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
