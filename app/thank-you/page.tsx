import { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Thank You - PinkStore",
  description: "Your order has been received",
};

export default function ThankYouPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-lg border border-pink-100 p-8 md:p-12 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">✓</span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You for Your Order!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Your order has been successfully placed and is being processed.
        </p>

        <div className="bg-pink-50 rounded-lg p-6 mb-8 border border-pink-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-sm text-gray-600 mb-1">Order Number</p>
              <p className="font-semibold text-gray-900">#PS-{Date.now().toString().slice(-8)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Order Date</p>
              <p className="font-semibold text-gray-900">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Amount</p>
              <p className="font-semibold text-primary text-xl">$0.00</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Payment Status</p>
              <p className="font-semibold text-green-600">Paid</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Order Confirmation</h3>
                <p className="text-gray-600 text-sm">
                  You will receive an order confirmation email shortly.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Processing</h3>
                <p className="text-gray-600 text-sm">
                  Our team will process your order and prepare it for shipping.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">Shipping</h3>
                <p className="text-gray-600 text-sm">
                  You&apos;ll receive a tracking number once your order ships.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button variant="primary">Continue Shopping</Button>
          </Link>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
