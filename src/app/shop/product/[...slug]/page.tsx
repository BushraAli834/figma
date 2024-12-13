import { newArrivalsData, relatedProductData, topSellingData,} from "@/app/page";
  import ProductListSec from "@/app/components/common/ProductList";
  import BreadcrumbProduct from "@/app/components/productpage/BreadcrumbProduct";
  import Header from "@/app/components/productpage/Header";
  import Tabs from "@/app/components/productpage/Tabs";
  import { Product } from "@/app/components/types/producttypes";
  import { notFound } from "next/navigation";
  
  const data: Product[] = [
    ...newArrivalsData,
    ...topSellingData,
    ...relatedProductData,
  ];
  
  export default function ProductPage({
    params,
  }: {
    params: { slug: string[] };
  }) {
    const productData = data.find(
      (product) => product.id === Number(params.slug[0])
    );
  
    if (!productData?.title) {
      notFound();
    }
  
    return (
      <main>
        <div className="max-w-frame mx-auto px-4 xl:px-0">
          <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
          <BreadcrumbProduct title={productData?.title ?? "product"} />
          <section className="mb-11">
            <Header data={productData} />
          </section>
          <Tabs />
        </div>
        <div className="mb-[50px] sm:mb-20">
          <ProductListSec title="You might also like" data={relatedProductData} />
        </div>
      </main>
    );
  }