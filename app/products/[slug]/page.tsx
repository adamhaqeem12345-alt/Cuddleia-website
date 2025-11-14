'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/app/providers'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
  slug: string
  description: string
  details: string[]
}

const products: Record<string, Product> = {
  'pink-wireless-headphones': {
    id: '1',
    name: 'Pink Wireless Headphones',
    price: 149.99,
    image: '🎧',
    category: 'Electronics',
    rating: 4.8,
    slug: 'pink-wireless-headphones',
    description:
      'Premium wireless headphones in beautiful pink with superior sound quality and 30-hour battery life.',
    details: [
      'Wireless Bluetooth 5.0 connectivity',
      '30-hour battery life',
      'Active Noise Cancellation',
      'Comfortable over-ear design',
      'Built-in microphone for calls',
      'Foldable design for portability',
    ],
  },
  'rose-gold-smartwatch': {
    id: '2',
    name: 'Rose Gold Smartwatch',
    price: 299.99,
    image: '⌚',
    category: 'Electronics',
    rating: 4.9,
    slug: 'rose-gold-smartwatch',
    description:
      'Elegant rose gold smartwatch with health tracking, notifications, and long battery life.',
    details: [
      'Rose gold stainless steel body',
      '7-day battery life',
      'Heart rate and sleep tracking',
      'GPS built-in',
      'Water resistant (50m)',
      'AMOLED display',
    ],
  },
  'pink-leather-backpack': {
    id: '3',
    name: 'Pink Leather Backpack',
    price: 89.99,
    image: '🎒',
    category: 'Accessories',
    rating: 4.7,
    slug: 'pink-leather-backpack',
    description:
      'Stylish and functional pink leather backpack perfect for school, work, or travel.',
    details: [
      '100% genuine leather',
      'Multiple compartments',
      'Laptop pocket',
      'Ergonomic straps',
      'Dimensions: 15" x 12" x 5"',
      'Water-resistant coating',
    ],
  },
  'blush-pink-yoga-mat': {
    id: '4',
    name: 'Blush Pink Yoga Mat',
    price: 49.99,
    image: '🧘',
    category: 'Sports',
    rating: 4.6,
    slug: 'blush-pink-yoga-mat',
    description:
      'Premium non-slip yoga mat in beautiful blush pink. Perfect for yoga, pilates, and floor exercises.',
    details: [
      'TPE material - eco-friendly',
      '6mm thickness for comfort',
      'Non-slip surface',
      '71" x 26" dimensions',
      'Easy to clean and maintain',
      'Includes carrying strap',
    ],
  },
  'pink-desk-lamp': {
    id: '5',
    name: 'Pink Desk Lamp',
    price: 79.99,
    image: '💡',
    category: 'Home',
    rating: 4.5,
    slug: 'pink-desk-lamp',
    description:
      'Modern pink desk lamp with adjustable brightness and USB charging port.',
    details: [
      'LED technology',
      'Adjustable brightness levels',
      'USB charging port',
      'Flexible gooseneck design',
      'Touch control',
      'Energy efficient',
    ],
  },
  'rose-quartz-phone-case': {
    id: '6',
    name: 'Rose Quartz Phone Case',
    price: 34.99,
    image: '📱',
    category: 'Accessories',
    rating: 4.7,
    slug: 'rose-quartz-phone-case',
    description:
      'Beautiful rose quartz-inspired phone case that protects your device in style.',
    details: [
      'Compatible with iPhone 12-15',
      'Shock-absorbing material',
      'Rose quartz texture design',
      'Anti-fingerprint coating',
      'Slim and lightweight',
      'Drop protection up to 6ft',
    ],
  },
  'pink-water-bottle': {
    id: '7',
    name: 'Pink Water Bottle',
    price: 29.99,
    image: '🧴',
    category: 'Sports',
    rating: 4.4,
    slug: 'pink-water-bottle',
    description:
      'Insulated stainless steel water bottle in pink. Keeps drinks cold for up to 24 hours.',
    details: [
      '32oz capacity',
      'Double-wall insulation',
      'BPA-free',
      'Fits car cup holders',
      'Easy-to-clean design',
      'Leak-proof lid',
    ],
  },
  'blush-pink-scarf': {
    id: '8',
    name: 'Blush Pink Scarf',
    price: 44.99,
    image: '🧣',
    category: 'Accessories',
    rating: 4.8,
    slug: 'blush-pink-scarf',
    description: 'Luxurious blush pink silk scarf perfect for any season.',
    details: [
      '100% silk material',
      '35" x 35" square scarf',
      'Hand-sewn edges',
      'Wrinkle resistant',
      'Perfect for gifting',
      'Available in multiple colors',
    ],
  },
  'pink-bluetooth-speaker': {
    id: '9',
    name: 'Pink Bluetooth Speaker',
    price: 99.99,
    image: '🔊',
    category: 'Electronics',
    rating: 4.7,
    slug: 'pink-bluetooth-speaker',
    description:
      'Portable Bluetooth speaker with excellent sound quality and long battery life.',
    details: [
      ' Bluetooth 5.0 connectivity',
      '12-hour battery life',
      '360° sound',
      'Water resistant (IPX5)',
      'Built-in microphone',
      'Compact portable design',
    ],
  },
  'rose-gold-earbuds': {
    id: '10',
    name: 'Rose Gold Earbuds',
    price: 119.99,
    image: '🎵',
    category: 'Electronics',
    rating: 4.9,
    slug: 'rose-gold-earbuds',
    description:
      'Premium rose gold wireless earbuds with noise cancellation and great bass.',
    details: [
      'Active Noise Cancellation',
      '6-hour battery per charge',
      'Charging case with 24-hour total battery',
      'Touch controls',
      'Water resistant (IPX4)',
      'Fits securely with multiple ear tip sizes',
    ],
  },
  'pink-throw-pillow': {
    id: '11',
    name: 'Pink Throw Pillow',
    price: 39.99,
    image: '🛋️',
    category: 'Home',
    rating: 4.6,
    slug: 'pink-throw-pillow',
    description: 'Decorative pink throw pillow to add comfort and style to your home.',
    details: [
      '18" x 18" size',
      'Soft velvet material',
      'Machine washable cover',
      'Hypoallergenic fill',
      'Invisible zipper',
      'Perfect for couch or bed',
    ],
  },
  'millennial-pink-mug': {
    id: '12',
    name: 'Millennial Pink Mug',
    price: 19.99,
    image: '☕',
    category: 'Home',
    rating: 4.5,
    slug: 'millennial-pink-mug',
    description:
      'Millennial pink ceramic mug perfect for your favorite beverages and gifting.',
    details: [
      '12oz capacity',
      '100% ceramic material',
      'Dishwasher safe',
      'Microwave safe',
      'Perfect for coffee or tea',
      'Makes a great gift',
    ],
  },
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const { addToCart } = useCart()
  const product = products[params.slug]
  const [quantity, setQuantity] = useState(1)
  const [notification, setNotification] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-lg text-gray-600 mb-4">Product not found</p>
          <Link href="/products" className="btn-primary">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        rating: product.rating,
      })
    }
    setNotification(true)
    setTimeout(() => setNotification(false), 2000)
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link
              href="/products"
              className="text-primary-500 hover:text-primary-600 font-medium"
            >
              ← Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-primary-50 rounded-lg p-8 flex items-center justify-center">
              <div className="text-9xl">{product.image}</div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="flex items-center mb-4">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="ml-2 text-lg text-gray-700">
                  {product.rating} (248 reviews)
                </span>
              </div>

              <div className="mb-6">
                <p className="text-gray-600 text-lg mb-4">{product.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold text-primary-500">
                  ${product.price}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6 flex items-center gap-4">
                <label className="font-semibold text-gray-900">Quantity:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 text-gray-600 hover:text-primary-500"
                  >
                    −
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 text-gray-600 hover:text-primary-500"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full btn-primary mb-4 py-4 text-lg"
              >
                Add to Cart
              </button>

              <button className="w-full btn-secondary py-4 text-lg">
                Add to Wishlist
              </button>

              {/* Product Details */}
              <div className="mt-12 border-t border-gray-200 pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Product Details
                </h2>
                <ul className="space-y-3">
                  {product.details.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-700"
                    >
                      <span className="text-primary-500 mr-3">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Shipping Info */}
              <div className="mt-8 bg-primary-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-3">Shipping Info</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>✓ Free shipping on orders over $50</li>
                  <li>✓ Standard shipping: 5-7 business days</li>
                  <li>✓ Express shipping available</li>
                  <li>✓ 30-day money-back guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {quantity} item(s) added to cart!
        </div>
      )}
    </>
  )
}
