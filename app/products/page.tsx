'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { useCart } from '../providers'

interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating: number
  slug: string
}

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Pink Wireless Headphones',
    price: 149.99,
    image: '🎧',
    category: 'Electronics',
    rating: 4.8,
    slug: 'pink-wireless-headphones',
  },
  {
    id: '2',
    name: 'Rose Gold Smartwatch',
    price: 299.99,
    image: '⌚',
    category: 'Electronics',
    rating: 4.9,
    slug: 'rose-gold-smartwatch',
  },
  {
    id: '3',
    name: 'Pink Leather Backpack',
    price: 89.99,
    image: '🎒',
    category: 'Accessories',
    rating: 4.7,
    slug: 'pink-leather-backpack',
  },
  {
    id: '4',
    name: 'Blush Pink Yoga Mat',
    price: 49.99,
    image: '🧘',
    category: 'Sports',
    rating: 4.6,
    slug: 'blush-pink-yoga-mat',
  },
  {
    id: '5',
    name: 'Pink Desk Lamp',
    price: 79.99,
    image: '💡',
    category: 'Home',
    rating: 4.5,
    slug: 'pink-desk-lamp',
  },
  {
    id: '6',
    name: 'Rose Quartz Phone Case',
    price: 34.99,
    image: '📱',
    category: 'Accessories',
    rating: 4.7,
    slug: 'rose-quartz-phone-case',
  },
  {
    id: '7',
    name: 'Pink Water Bottle',
    price: 29.99,
    image: '🧴',
    category: 'Sports',
    rating: 4.4,
    slug: 'pink-water-bottle',
  },
  {
    id: '8',
    name: 'Blush Pink Scarf',
    price: 44.99,
    image: '🧣',
    category: 'Accessories',
    rating: 4.8,
    slug: 'blush-pink-scarf',
  },
  {
    id: '9',
    name: 'Pink Bluetooth Speaker',
    price: 99.99,
    image: '🔊',
    category: 'Electronics',
    rating: 4.7,
    slug: 'pink-bluetooth-speaker',
  },
  {
    id: '10',
    name: 'Rose Gold Earbuds',
    price: 119.99,
    image: '🎵',
    category: 'Electronics',
    rating: 4.9,
    slug: 'rose-gold-earbuds',
  },
  {
    id: '11',
    name: 'Pink Throw Pillow',
    price: 39.99,
    image: '🛋️',
    category: 'Home',
    rating: 4.6,
    slug: 'pink-throw-pillow',
  },
  {
    id: '12',
    name: 'Millennial Pink Mug',
    price: 19.99,
    image: '☕',
    category: 'Home',
    rating: 4.5,
    slug: 'millennial-pink-mug',
  },
]

const categories = ['All', 'Electronics', 'Accessories', 'Sports', 'Home']

export default function ProductsPage() {
  const { addToCart } = useCart()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [notification, setNotification] = useState<string | null>(null)

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesSearch && matchesCategory && matchesPrice
    })
  }, [searchTerm, selectedCategory, priceRange])

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      rating: product.rating,
    })
    setNotification(`${product.name} added to cart!`)
    setTimeout(() => setNotification(null), 2000)
  }

  return (
    <>
      <div className="bg-gradient-to-r from-primary-100 to-primary-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-gray-700">
            Browse our collection of beautiful pink-themed products
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100 sticky top-20">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Categories */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-primary-500 cursor-pointer"
                      />
                      <span className="ml-2 text-gray-700 cursor-pointer">
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Price Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={priceRange[0]}
                    onChange={(e) =>
                      setPriceRange([Number(e.target.value), priceRange[1]])
                    }
                    className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Min"
                  />
                  <input
                    type="number"
                    min="0"
                    max="500"
                    value={priceRange[1]}
                    onChange={(e) =>
                      setPriceRange([priceRange[0], Number(e.target.value)])
                    }
                    className="w-1/2 px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Max"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ${priceRange[0]} - ${priceRange[1]}
                </p>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All')
                  setPriceRange([0, 500])
                }}
                className="w-full btn-secondary text-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <p className="text-gray-700">
                Showing <span className="font-bold">{filteredProducts.length}</span>{' '}
                products
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} href={`/products/${product.slug}`}>
                    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 overflow-hidden border border-primary-100 cursor-pointer h-full">
                      <div className="bg-primary-50 p-8 flex items-center justify-center text-6xl">
                        {product.image}
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {product.category}
                        </p>
                        <div className="flex items-center mb-4">
                          <span className="text-yellow-500 text-sm">★</span>
                          <span className="ml-1 text-sm text-gray-600">
                            {product.rating}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-primary-500">
                            ${product.price}
                          </span>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              handleAddToCart(product)
                            }}
                            className="btn-small-primary"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">
                  No products found matching your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                    setPriceRange([0, 500])
                  }}
                  className="mt-4 btn-primary"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Notification */}
      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
          {notification}
        </div>
      )}
    </>
  )
}
