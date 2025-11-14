import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              PinkStore
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Cart
            </Link>
            <Link
              href="/admin"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Admin
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="btn-outline py-2 px-4 text-sm">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
