import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Dashboard - PinkStore",
  description: "Manage your store, products, and orders",
};

export default function AdminPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage your storefront and integrations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md border border-pink-100 p-6">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">📦</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Products</h3>
          <p className="text-gray-600 mb-4">Manage your product catalog and inventory</p>
          <div className="text-3xl font-bold text-primary">0</div>
          <p className="text-sm text-gray-500">Total products</p>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-pink-100 p-6">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">🛒</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Orders</h3>
          <p className="text-gray-600 mb-4">View and manage customer orders</p>
          <div className="text-3xl font-bold text-primary">0</div>
          <p className="text-sm text-gray-500">Total orders</p>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-pink-100 p-6">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Revenue</h3>
          <p className="text-gray-600 mb-4">Track your sales and earnings</p>
          <div className="text-3xl font-bold text-primary">$0.00</div>
          <p className="text-sm text-gray-500">Total revenue</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md border border-pink-100 p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Integrations</h2>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔗</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">AliExpress</h3>
                  <p className="text-sm text-gray-600">Import products from AliExpress</p>
                </div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Not Connected
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Configure your AliExpress API credentials to start importing products.
            </p>
            <div className="bg-gray-50 rounded p-4 text-sm font-mono text-gray-700">
              <p className="mb-1">Required: ALIEXPRESS_API_KEY</p>
              <p>Required: ALIEXPRESS_API_SECRET</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💳</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">PayPal</h3>
                  <p className="text-sm text-gray-600">Process payments securely</p>
                </div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Not Connected
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Configure your PayPal credentials to enable payment processing.
            </p>
            <div className="bg-gray-50 rounded p-4 text-sm font-mono text-gray-700">
              <p className="mb-1">Required: PAYPAL_CLIENT_ID</p>
              <p>Required: PAYPAL_CLIENT_SECRET</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">PostgreSQL Database</h3>
                  <p className="text-sm text-gray-600">Store products, orders, and user data</p>
                </div>
              </div>
              <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                Not Connected
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Configure your PostgreSQL database connection string.
            </p>
            <div className="bg-gray-50 rounded p-4 text-sm font-mono text-gray-700">
              <p>Required: DATABASE_URL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pink-50 rounded-lg p-6 border border-pink-200">
        <h3 className="font-semibold text-gray-900 mb-2">📝 Getting Started</h3>
        <p className="text-gray-600 text-sm mb-4">
          Configure your environment variables in{" "}
          <code className="bg-white px-2 py-1 rounded text-primary">.env.local</code> to enable
          integrations. Check{" "}
          <code className="bg-white px-2 py-1 rounded text-primary">.env.example</code> for all
          required variables.
        </p>
        <Link href="/" className="text-primary hover:text-primary-dark font-medium text-sm">
          View Documentation →
        </Link>
      </div>
    </div>
  );
}
