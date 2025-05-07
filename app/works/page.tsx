"use client"

import { useState, useEffect } from "react"
import { works, categories } from "@/data/works"
import Lightbox from "@/components/lightbox"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"

export default function Works() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all")
  const [filteredWorks, setFilteredWorks] = useState(works)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  // 当URL参数变化时更新选中的分类
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredWorks(works)
    } else {
      setFilteredWorks(works.filter((work) => work.category === selectedCategory))
    }
  }, [selectedCategory])

  const openLightbox = (index: number) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  // 当组件挂载或分类变化时滚动到分类标签
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">作品集</h1>

      {/* 分类筛选 */}
      <div id="categories-section" className="flex flex-wrap justify-center mb-12">
        <button
          className={`tag ${selectedCategory === "all" ? "tag-active" : "tag-primary"}`}
          onClick={() => setSelectedCategory("all")}
        >
          全部
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`tag ${selectedCategory === category.id ? "tag-active" : "tag-primary"}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 作品瀑布流 */}
      <motion.div className="masonry-grid" variants={container} initial="hidden" animate="show">
        {filteredWorks.map((work, index) => (
          <motion.div key={work.id} className="portfolio-item aspect-square" variants={item} onClick={() => openLightbox(index)}>
            <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-full object-cover" />
            <div className="portfolio-overlay">
              <h3 className="text-xl font-bold">{work.title}</h3>
              <p className="text-sm opacity-80 mt-1">{work.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 灯箱 */}
      {lightboxOpen && (
        <Lightbox
          images={filteredWorks.map((work) => ({ src: work.image, title: work.title }))}
          currentIndex={currentImage}
          setCurrentIndex={setCurrentImage}
          onClose={closeLightbox}
          totalImages={filteredWorks.length}
        />
      )}
    </div>
  )
}
