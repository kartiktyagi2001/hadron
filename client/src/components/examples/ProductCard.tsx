import ProductCard from '../ProductCard';


export default function ProductCardExample() {
  return (
    <div className="max-w-sm">
      <ProductCard
        id="example-1"
        slug="bms-12s-100a"
        title="BMS 12S 100A (LiFePO4)"
        shortDescription="High-current Battery Management System designed for 12-series LiFePO4 battery packs with robust protection features."
        imageUrl="/generated_images/BMS_12S_100A_product_bd1b8339.png"
        category="LiFePO4 BMS"
      />
    </div>
  );
}
