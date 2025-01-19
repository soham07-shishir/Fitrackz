"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function AnimatedImage() {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <div ref={imgRef} className="relative h-full w-full">
      <Image
        src="/img/home/home_section1_right_cropped.png"
        alt="Woman running"
        width={3264}
        height={4896}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  )
}

