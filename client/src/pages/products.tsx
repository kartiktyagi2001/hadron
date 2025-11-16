import { useQuery } from "@tanstack/react-query";
import ProductGrid from "@/components/ProductGrid";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

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
      {/* Header Section */}
      <div className="relative py-20 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <motion.div
          className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Product Catalog
            </span>
            <h1 className="text-5xl font-heading font-bold text-foreground mb-6" data-testid="text-products-title">
              Battery Management Systems
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional BMS solutions engineered for reliability, performance, and safety across diverse industrial applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
