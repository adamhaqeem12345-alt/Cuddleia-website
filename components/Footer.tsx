import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-primary-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-primary-500 mb-4">PinkStore</h3>
            <p className="text-gray-600 text-sm">
              Your one-stop shop for amazing products with a touch of pink.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-primary-500 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Shipping Info
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-500 transition-colors">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} PinkStore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
