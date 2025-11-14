'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from './providers'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Pink Wireless Headphones',
    price: 149.99,
    image: '🎧',
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Rose Gold Smartwatch',
    price: 299.99,
    image: '⌚',
    category: 'Electronics',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Pink Leather Backpack',
    price: 89.99,
    image: '🎒',
    category: 'Accessories',
    rating: 4.7,
  },
  {
    id: '4',
    name: 'Blush Pink Yoga Mat',
    price: 49.99,
    image: '🧘',
    category: 'Sports',
    rating: 4.6,
  },
]

export default function Home() {
  const { addToCart, cart } = useCart()
  const [showCart, setShowCart] = useState(false)

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating,
    })
    setShowCart(true)
    setTimeout(() => setShowCart(false), 2000)
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-primary-100 to-primary-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Welcome to <span className="text-primary-500">PinkStore</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Discover our premium collection of beautiful pink-themed products
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="btn-primary w-full sm:w-auto">
                  Shop Now
                </button>
              </Link>
              <button className="btn-outline w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">
              Check out our best-selling items
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-primary-100"
              >
                <div className="bg-primary-50 p-8 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500 text-sm">★</span>
                    <span className="ml-1 text-sm text-gray-600">
                      {product.rating} ({Math.floor(Math.random() * 500) + 50} reviews)
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-500">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="btn-small-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Free Shipping
              </h3>
              <p className="text-gray-600">
                Free shipping on all orders over $50
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Customer Love
              </h3>
              <p className="text-gray-600">
                Trusted by thousands of happy customers
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Secure Payment
              </h3>
              <p className="text-gray-600">
                100% secure and encrypted checkout
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cart Notification */}
      {showCart && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          Product added to cart! ({cart.length} items)
        </div>
      )}
    </>
  )
}
