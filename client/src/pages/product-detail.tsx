import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  category: string;
  price: number;
  specifications: Record<string, string>;
}

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/data/products.json'],
  });

  const product = products?.find((p) => p.slug === slug);
  const currentImage = product?.images[selectedImageIndex] || "/images/placeholder.jpg";

  const nextImage = () => {
    if (product) {
      setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
    }
  };

  const prevImage = () => {
    if (product) {
      setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-[calc(100vh-4rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Skeleton className="aspect-square w-full" />
            <div className="space-y-6">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Product not found
          </h2>
          <Link href="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link href="/products">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="bg-muted rounded-lg overflow-hidden aspect-square flex items-center justify-center relative group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImageIndex}
                  src={currentImage}
                  alt={product.title}
                  className="w-full h-full object-contain p-8"
                  data-testid="img-product-detail"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>
              
              {/* Navigation arrows - only show if multiple images */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail strip - only show if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                      index === selectedImageIndex
                        ? "border-primary"
                        : "border-transparent hover:border-muted-foreground/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.title} - Image ${index + 1}`}
                      className="w-full h-full object-contain bg-muted p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20" data-testid="badge-category">
                  {product.category}
                </Badge>
                <span className="text-lg font-semibold text-foreground" data-testid="price">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>
              <h1 className="text-4xl font-heading font-bold text-foreground mb-4 leading-tight" data-testid="text-product-title">
                {product.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-product-description">
                {product.fullDescription}
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg p-6 border">
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                Technical Specifications
              </h2>
              <div className="space-y-1">
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <div
                    key={key}
                    className={`flex flex-wrap gap-2 py-4 px-4 rounded-md hover-elevate ${
                      index % 2 === 0 ? 'bg-background/50' : ''
                    }`}
                    data-testid={`spec-${key.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="font-semibold text-foreground min-w-[160px]">{key}</span>
                    <span className="text-muted-foreground flex-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="space-y-3">
              <Link href="/contact">
                <Button size="lg" className="w-full group" data-testid="button-inquire">
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <p className="text-sm text-center text-muted-foreground">
                Get in touch for pricing, availability, and technical support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
