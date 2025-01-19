"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  "/img/home/hero_image_1.jpg",
  "/img/home/hero_image_2.jpg",
  "/img/home/hero_image_3.jpg",
  "/img/home/hero_image_4.jpg"
]

export function HeroCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src || "/placeholder.svg"}
          alt={`Fitness background ${index + 1}`}
          fill
          style={{
            objectFit: 'cover',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'opacity 1.8s ease-in-out',
          }}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" /> {/* Overlay for better text visibility */}
    </div>
  )
}

