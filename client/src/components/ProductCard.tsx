import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ProductCardProps {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  imageUrl: string;
  category: string;
}

export default function ProductCard({
  slug,
  title,
  shortDescription,
  imageUrl,
  category,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      data-testid={`card-product-${slug}`}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
              data-testid={`img-product-${slug}`}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-6 space-y-3">
          <Badge variant="secondary" data-testid={`badge-category-${slug}`}>
            {category}
          </Badge>
          <h3 className="text-xl font-heading font-semibold text-foreground" data-testid={`text-title-${slug}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground" data-testid={`text-description-${slug}`}>
            {shortDescription}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link href={`/products/${slug}`}>
            <Button variant="outline" className="w-full" data-testid={`button-view-details-${slug}`}>
              View Details
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
