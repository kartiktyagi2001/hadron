import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { Skeleton } from "@/components/ui/skeleton";

interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
}

export default function Products() {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ['/data/products.json'],
  });

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-foreground mb-4" data-testid="text-products-title">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional Battery Management Systems engineered for reliability and performance.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[4/3] w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-center text-muted-foreground">No products available.</p>
        )}
      </div>
    </div>
  );
}
