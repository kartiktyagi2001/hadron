import { useRoute, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft } from "lucide-react";

interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  category: string;
  specifications: Record<string, string>;
}

export default function ProductDetail() {
  const [, params] = useRoute("/products/:slug");
  const slug = params?.slug;

  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/data/products.json'],
  });

  const product = products?.find((p) => p.slug === slug);

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
          {/* Product Image */}
          <div className="bg-muted rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-full object-contain p-8"
              data-testid="img-product-detail"
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-4" data-testid="badge-category">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-product-title">
                {product.title}
              </h1>
              <p className="text-lg text-muted-foreground" data-testid="text-product-description">
                {product.fullDescription}
              </p>
            </div>

            {/* Specifications */}
            <div>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Technical Specifications
              </h2>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex flex-wrap gap-2 py-3 border-b last:border-0"
                    data-testid={`spec-${key.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="font-medium text-foreground min-w-[140px]">{key}:</span>
                    <span className="text-muted-foreground flex-1">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/contact">
              <Button size="lg" className="w-full" data-testid="button-inquire">
                Inquire Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
