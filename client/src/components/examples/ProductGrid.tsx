import ProductGrid from '../ProductGrid';
import productImage1 from '@assets/generated_images/BMS_12S_100A_product_bd1b8339.png';
import productImage2 from '@assets/generated_images/BMS_16S_150A_product_3636402c.png';
import productImage3 from '@assets/generated_images/BMS_13S_80A_product_a91a0b9a.png';

export default function ProductGridExample() {
  const mockProducts = [
    {
      id: "1",
      slug: "bms-12s-100a",
      title: "BMS 12S 100A (LiFePO4)",
      shortDescription: "High-current Battery Management System designed for 12-series LiFePO4 battery packs.",
      imageUrl: productImage1,
      category: "LiFePO4 BMS",
    },
    {
      id: "2",
      slug: "bms-16s-150a",
      title: "BMS 16S 150A (Li-ion)",
      shortDescription: "Premium high-power Battery Management System for 16-series lithium-ion configurations.",
      imageUrl: productImage2,
      category: "Li-ion BMS",
    },
    {
      id: "3",
      slug: "bms-13s-80a",
      title: "BMS 13S 80A (Li-ion)",
      shortDescription: "Compact and efficient Battery Management System for 13-series lithium-ion battery packs.",
      imageUrl: productImage3,
      category: "Li-ion BMS",
    },
  ];

  return (
    <div className="p-8">
      <ProductGrid products={mockProducts} />
    </div>
  );
}
