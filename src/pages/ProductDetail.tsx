import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart, ArrowLeft } from "lucide-react";
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
        "18K White Gold Band",
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
        "Teardrop Pendant Design",
        "Adjustable Length 16-18 inches",
        "Hypoallergenic",
      ],
    },
    "3": {
      name: "Pearl Drop Earrings",
      category: "Earrings",
      price: "$1,299",
      image: earrings1,
      description:
        "Exquisite pearl drop earrings featuring lustrous freshwater pearls and intricate gold detailing. These earrings add a touch of sophistication to any ensemble.",
      details: [
        "Genuine Freshwater Pearls",
        "18K Gold Setting",
        "Secure Push-back Closure",
        "Comes in Elegant Gift Box",
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
        "18K Yellow Gold",
        "Hand-crafted Filigree Design",
        "Adjustable Fit 6.5-7.5 inches",
        "Secure Lobster Clasp",
      ],
    },
    "5": {
      name: "Classic Solitaire Ring",
      category: "Rings",
      price: "$3,299",
      image: ring2,
      description:
        "A timeless solitaire ring featuring a stunning round brilliant diamond in a classic four-prong setting. The epitome of elegance and simplicity.",
      details: [
        "18K White Gold",
        "1.0 Carat Round Diamond",
        "GIA Certified",
        "Conflict-Free Diamond",
      ],
    },
    "6": {
      name: "Delicate Chain Necklace",
      category: "Necklaces",
      price: "$899",
      image: necklace2,
      description:
        "A delicate chain necklace perfect for layering or wearing alone. Crafted in 14K gold with a fine cable chain that catches the light beautifully.",
      details: [
        "14K Yellow Gold",
        "Fine Cable Chain",
        "16 inch Length",
        "Spring Ring Clasp",
      ],
    },
    "7": {
      name: "Radiant Cut Diamond Ring",
      category: "Rings",
      price: "$4,299",
      image: ring3,
      description:
        "An exceptional radiant cut diamond ring set in platinum. The unique cut maximizes brilliance and fire, creating a mesmerizing display of light.",
      details: [
        "Platinum Band",
        "1.5 Carat Radiant Cut Diamond",
        "VS1 Clarity, F Color",
        "Complimentary Resizing",
      ],
    },
    "8": {
      name: "Luxury Gold Pendant",
      category: "Necklaces",
      price: "$2,199",
      image: necklace3,
      description:
        "An opulent pendant featuring a sophisticated design in 18K gold. The intricate detailing makes this piece a true statement of luxury.",
      details: [
        "18K Yellow Gold",
        "Textured Finish",
        "18 inch Chain Included",
        "Handcrafted by Master Artisans",
      ],
    },
    "9": {
      name: "Elegant Pearl Studs",
      category: "Earrings",
      price: "$899",
      image: earrings2,
      description:
        "Classic pearl stud earrings featuring perfectly matched pearls set in 14K gold. A versatile essential for every jewelry collection.",
      details: [
        "AAA Grade Freshwater Pearls",
        "14K Yellow Gold Posts",
        "Secure Butterfly Backs",
        "7-8mm Pearl Size",
      ],
    },
    "10": {
      name: "Vintage Gold Bangle",
      category: "Bracelets",
      price: "$1,499",
      image: bracelet2,
      description:
        "A vintage-inspired bangle bracelet with intricate engraving and milgrain detailing. This piece combines old-world charm with modern elegance.",
      details: [
        "18K Yellow Gold",
        "Hand-engraved Pattern",
        "Hinged Design",
        "Interior Diameter 2.5 inches",
      ],
    },
    "11": {
      name: "Sapphire Halo Ring",
      category: "Rings",
      price: "$3,799",
      image: ring4,
      description:
        "A magnificent sapphire ring surrounded by a halo of brilliant diamonds. The deep blue center stone is complemented by sparkling accent diamonds.",
      details: [
        "18K White Gold",
        "2.0 Carat Ceylon Sapphire",
        "0.5 Carat Total Diamond Weight",
        "Certified Natural Sapphire",
      ],
    },
    "12": {
      name: "Emerald Statement Necklace",
      category: "Necklaces",
      price: "$5,299",
      image: necklace4,
      description:
        "A breathtaking emerald necklace featuring a vibrant green center stone surrounded by diamonds. This statement piece is perfect for special occasions.",
      details: [
        "Platinum Setting",
        "3.0 Carat Colombian Emerald",
        "1.5 Carat Total Diamond Weight",
        "Certificate of Authenticity",
      ],
    },
    "13": {
      name: "Pearl Cluster Earrings",
      category: "Earrings",
      price: "$1,599",
      image: earrings3,
      description:
        "Sophisticated cluster earrings featuring multiple pearls arranged in an artistic design. These earrings make a beautiful statement.",
      details: [
        "Multiple Freshwater Pearls",
        "18K White Gold",
        "Post and Butterfly Back",
        "Lightweight Design",
      ],
    },
    "14": {
      name: "Diamond Tennis Bracelet",
      category: "Bracelets",
      price: "$4,599",
      image: bracelet4,
      description:
        "A classic tennis bracelet featuring a continuous line of brilliant diamonds. This iconic piece adds sparkle to any outfit.",
      details: [
        "18K White Gold",
        "5.0 Carat Total Diamond Weight",
        "Round Brilliant Diamonds",
        "Secure Box Clasp with Safety",
      ],
    },
    "15": {
      name: "Royal Sapphire Ring",
      category: "Rings",
      price: "$4,999",
      image: ring5,
      description:
        "An extraordinary sapphire ring fit for royalty. The deep blue oval sapphire is set in a vintage-inspired mounting with intricate details.",
      details: [
        "Platinum and 18K Yellow Gold",
        "3.5 Carat Oval Sapphire",
        "Art Deco Inspired Design",
        "Certified Natural Gemstone",
      ],
    },
    "16": {
      name: "Emerald Luxury Pendant",
      category: "Necklaces",
      price: "$3,899",
      image: necklace5,
      description:
        "A luxurious emerald pendant showcasing the vivid green beauty of this precious gemstone. Surrounded by diamonds for added brilliance.",
      details: [
        "18K White Gold",
        "2.5 Carat Emerald Cut Emerald",
        "0.75 Carat Diamond Halo",
        "18 inch Adjustable Chain",
      ],
    },
    "17": {
      name: "Ruby Drop Earrings",
      category: "Earrings",
      price: "$2,299",
      image: earrings4,
      description:
        "Elegant ruby drop earrings featuring vibrant red gemstones accented with diamonds. Perfect for adding a pop of color to your look.",
      details: [
        "18K Yellow Gold",
        "Burmese Ruby Gemstones",
        "Diamond Accents",
        "Lever-back Closure",
      ],
    },
    "18": {
      name: "Classic Tennis Bracelet",
      category: "Bracelets",
      price: "$3,999",
      image: bracelet5,
      description:
        "A timeless tennis bracelet showcasing perfectly matched diamonds in a flexible setting. An essential piece for any jewelry collection.",
      details: [
        "Platinum Setting",
        "4.0 Carat Total Weight",
        "G-H Color, VS Clarity",
        "7 inch Length",
      ],
    },
    "19": {
      name: "Ruby Halo Earrings",
      category: "Earrings",
      price: "$2,799",
      image: earrings5,
      description:
        "Stunning ruby earrings with a brilliant diamond halo. The combination of red rubies and white diamonds creates a striking contrast.",
      details: [
        "18K White Gold",
        "1.5 Carat Ruby Total Weight",
        "0.5 Carat Diamond Halo",
        "Screw-back Posts for Security",
      ],
    },
    "20": {
      name: "Twisted Gold Bracelet",
      category: "Bracelets",
      price: "$2,199",
      image: bracelet3,
      description:
        "A modern twisted design bracelet in luxurious 18K gold. The unique form creates visual interest while maintaining timeless appeal.",
      details: [
        "18K Yellow Gold",
        "Twisted Rope Design",
        "Flexible Fit",
        "Magnetic Closure",
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
          data-testid="link-back-shop"
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
              data-testid="img-product-detail"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm text-muted-foreground mb-2" data-testid="text-category">
              {product.category}
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="text-product-name">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-primary mb-6" data-testid="text-product-price">
              {product.price}
            </p>

            <p className="text-lg text-muted-foreground mb-8" data-testid="text-description">
              {product.description}
            </p>

            <Card className="p-6 mb-8">
              <h3 className="font-semibold mb-4">Product Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-center text-sm" data-testid={`text-detail-${index}`}>
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1" data-testid="button-add-cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" data-testid="button-wishlist">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Need Assistance?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Our jewelry experts are here to help you find the perfect piece.
              </p>
              <Button asChild variant="outline" data-testid="button-contact">
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
