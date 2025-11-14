'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ThankYouPage() {
  const [orderNumber, setOrderNumber] = useState('')

  useEffect(() => {
    setOrderNumber(`PN${Math.floor(100000 + Math.random() * 900000)}`)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white rounded-lg shadow-2xl border border-primary-100 p-8 sm:p-12 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <span className="text-5xl">✓</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Your order has been placed successfully.
          </p>

          {/* Order Number */}
          <div className="bg-primary-50 rounded-lg p-6 mb-8 border border-primary-200">
            <p className="text-sm text-gray-600 mb-2">Order Number</p>
            <p className="text-3xl font-bold text-primary-500 font-mono">
              {orderNumber}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Save this number for your records
            </p>
          </div>

          {/* Order Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Estimated Delivery</p>
              <p className="text-lg font-bold text-gray-900">5-7 Days</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Tracking</p>
              <p className="text-lg font-bold text-gray-900">Via Email</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600 mb-2">Support</p>
              <p className="text-lg font-bold text-gray-900">24/7</p>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary-50 rounded-lg p-6 mb-8 border border-primary-200 text-left">
            <h2 className="font-bold text-gray-900 mb-4">What's Next?</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 font-bold">1.</span>
                <span>
                  You'll receive a confirmation email with your order details and
                  tracking information
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 font-bold">2.</span>
                <span>
                  Your order will be processed and shipped within 1-2 business days
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 font-bold">3.</span>
                <span>
                  Track your package in real-time using the tracking link in your
                  email
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-3 font-bold">4.</span>
                <span>
                  If you have any questions, contact our support team at any time
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="flex-1">
              <button className="w-full btn-secondary py-3">
                Continue Shopping
              </button>
            </Link>
            <Link href="/" className="flex-1">
              <button className="w-full btn-primary py-3">
                Back to Home
              </button>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
            <p className="mb-4">
              Questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-primary-500 font-semibold">
              <a href="#" className="hover:text-primary-600">
                Contact Support
              </a>
              <span className="hidden sm:block">•</span>
              <a href="#" className="hover:text-primary-600">
                Track Order
              </a>
              <span className="hidden sm:block">•</span>
              <a href="#" className="hover:text-primary-600">
                Return Policy
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-8 text-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔒</span>
            <span>Secure Transaction</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚚</span>
            <span>Free Shipping on Orders Over $50</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">💚</span>
            <span>30-Day Money Back Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
