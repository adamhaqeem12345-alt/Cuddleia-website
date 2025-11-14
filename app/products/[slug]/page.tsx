import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} - PinkStore`,
    description: `Product details for ${params.slug}`,
  };
}

export default function ProductDetailPage({ params }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link href="/products" className="text-primary hover:text-primary-dark font-medium">
          ← Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg aspect-square flex items-center justify-center">
          <span className="text-9xl">🎁</span>
        </div>

        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
            {params.slug.replace(/-/g, " ")}
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-primary">$99.99</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              In Stock
            </span>
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">
            This is a placeholder product page. Once you connect your AliExpress integration and
            import products, this page will display real product information including descriptions,
            specifications, pricing, and inventory details.
          </p>

          <div className="bg-pink-50 rounded-lg p-6 mb-6 border border-pink-200">
            <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Premium quality materials</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Fast and reliable shipping</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>100% satisfaction guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Secure checkout with PayPal</span>
              </li>
            </ul>
          </div>

          <div className="flex gap-4">
            <Button variant="primary" className="flex-1">
              Add to Cart
            </Button>
            <Button variant="outline">Buy Now</Button>
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="font-semibold text-gray-900 mb-4">Product Information</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-600">SKU:</dt>
                <dd className="text-gray-900 font-medium">{params.slug.toUpperCase()}-001</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Category:</dt>
                <dd className="text-gray-900 font-medium">General</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Availability:</dt>
                <dd className="text-gray-900 font-medium">In Stock</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
