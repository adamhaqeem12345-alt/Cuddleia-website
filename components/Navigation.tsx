import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-500">
              PinkStore
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Cart
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cart" className="text-gray-700 hover:text-primary-500 transition-colors">
              <span className="text-xl">🛒</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
