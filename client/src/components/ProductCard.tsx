import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      data-testid={`card-product-${slug}`}
      className="group"
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-colors relative">
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-0"
          initial={false}
        />
        
        <CardHeader className="p-0 relative">
          <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-muted to-muted/50 relative">
            <motion.img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain p-6"
              data-testid={`img-product-${slug}`}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: isHovered ? "100%" : "-100%" }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </CardHeader>
        
        <CardContent className="flex-1 p-6 space-y-3 relative z-10">
          <div className="flex items-center justify-between">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20" data-testid={`badge-category-${slug}`}>
              {category}
            </Badge>
          </div>
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-title-${slug}`}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-description-${slug}`}>
            {shortDescription}
          </p>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 relative z-10">
          <Link href={`/products/${slug}`}>
            <Button variant="outline" className="w-full group/btn" data-testid={`button-view-details-${slug}`}>
              View Details
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
