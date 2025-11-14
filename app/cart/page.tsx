'use client'

import Link from 'next/link'
import { useCart } from '../providers'

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 50 ? 0 : 10
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Shopping Cart
          </h1>

          <div className="bg-primary-50 rounded-lg p-12 text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start shopping to add items to your cart
            </p>
            <Link href="/products" className="btn-primary">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-primary-100 to-primary-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-700 mt-2">
            You have {cart.length} item{cart.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md border border-primary-100 overflow-hidden">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.name}`}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 border-b border-gray-200 last:border-b-0"
                >
                  {/* Product Image */}
                  <div className="bg-primary-50 p-4 rounded-lg text-4xl flex-shrink-0">
                    {item.image}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">{item.category}</p>
                    <p className="text-primary-500 font-bold text-lg">
                      ${item.price}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-300 rounded-lg bg-white">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(0, item.quantity - 1)
                        )
                      }
                      className="px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      −
                    </button>
                    <span className="px-4 py-2 border-l border-r border-gray-300 min-w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      className="px-3 py-2 text-gray-600 hover:text-primary-500 transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                    <p className="text-2xl font-bold text-primary-500">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 font-semibold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link href="/products" className="text-primary-500 hover:text-primary-600 font-semibold">
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-primary-100 p-6 sticky top-20">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>
                    Shipping
                    {subtotal > 50 && (
                      <span className="text-green-600 text-sm ml-2">(FREE)</span>
                    )}
                  </span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Tax (estimated)</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-primary-500">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link href="/checkout" className="w-full block">
                <button className="w-full btn-primary py-3 mb-3">
                  Proceed to Checkout
                </button>
              </Link>

              <button
                onClick={clearCart}
                className="w-full btn-secondary py-3"
              >
                Clear Cart
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 text-center text-sm text-gray-600">
                <p className="mb-3">🔒 Secure checkout</p>
                <p>💳 All major cards accepted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
