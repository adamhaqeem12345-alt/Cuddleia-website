import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products - PinkStore",
  description: "Browse our collection of amazing products",
};

export default function ProductsPage() {
  const placeholderProducts = [
    { id: 1, name: "Product 1", slug: "product-1" },
    { id: 2, name: "Product 2", slug: "product-2" },
    { id: 3, name: "Product 3", slug: "product-3" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">All Products</h1>
        <p className="text-gray-600">
          Discover our curated collection of premium products from around the world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placeholderProducts.map((product) => (
          <Link href={`/products/${product.slug}`} key={product.id}>
            <div className="bg-white rounded-lg shadow-md border border-pink-100 hover:shadow-xl transition-all hover:-translate-y-1 duration-200 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <span className="text-6xl">🎁</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Premium quality product with fast shipping
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary">$99.99</span>
                  <button className="bg-pink-100 hover:bg-pink-200 text-pink-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-pink-50 rounded-lg p-8 border border-pink-200">
          <p className="text-gray-600 mb-4">
            More products coming soon! Connect your AliExpress integration to import products.
          </p>
          <Link
            href="/admin"
            className="text-primary hover:text-primary-dark font-semibold underline"
          >
            Go to Admin Panel
          </Link>
        </div>
      </div>
    </div>
  );
}
