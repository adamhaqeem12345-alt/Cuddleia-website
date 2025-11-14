import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{" "}
            <span className="text-primary bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              PinkStore
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing products with style. Your premium shopping destination with seamless
            checkout and worldwide shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/products">
              <Button variant="primary">Browse Products</Button>
            </Link>
            <Link href="/cart">
              <Button variant="outline">View Cart</Button>
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md border border-pink-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🛍️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Selection</h3>
            <p className="text-gray-600">
              Browse through thousands of products from top suppliers worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-pink-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">💳</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Checkout</h3>
            <p className="text-gray-600">Safe and secure payments powered by PayPal integration.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md border border-pink-100 hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Shipping</h3>
            <p className="text-gray-600">
              Quick and reliable delivery to your doorstep from our partners.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-pink-50 rounded-2xl p-12 border border-pink-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start shopping?</h2>
          <p className="text-gray-600 mb-6">
            Join thousands of happy customers and find your perfect products today.
          </p>
          <Link href="/products">
            <Button variant="primary">Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
