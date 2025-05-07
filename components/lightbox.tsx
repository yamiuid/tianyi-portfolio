"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface LightboxProps {
  images: { src: string; title: string }[]
  currentIndex: number
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  onClose: () => void
  totalImages: number
}

export default function Lightbox({ images, currentIndex, setCurrentIndex, onClose, totalImages }: LightboxProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev: number) => (prev > 0 ? prev - 1 : totalImages - 1))
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev: number) => (prev < totalImages - 1 ? prev + 1 : 0))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose, setCurrentIndex, totalImages])

  const handlePrev = () => {
    setCurrentIndex((prev: number) => (prev > 0 ? prev - 1 : totalImages - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev: number) => (prev < totalImages - 1 ? prev + 1 : 0))
  }

  return (
    <div className="lightbox active" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>
        <X size={24} />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        {isLoading && <div className="loading">加载中...</div>}
        <div className="lightbox-image-container">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            onLoad={() => setIsLoading(false)}
            className={`${isLoading ? "hidden" : ""} max-h-[80vh] w-auto object-contain`}
          />
        </div>
        <div className="lightbox-caption">{images[currentIndex].title}</div>
      </div>

      <div className="lightbox-nav">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }} 
          className="lightbox-nav-button"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }} 
          className="lightbox-nav-button"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  )
}
