"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { works } from "@/data/works"

export default function PortfolioPreview() {
  // 只显示前6个作品
  const previewWorks = works.slice(0, 6)
  const router = useRouter()

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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">精选作品</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            这里展示了我最近的一些作品。每一个项目都代表了我对细节的关注和对创意的追求。
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {previewWorks.map((work) => (
            <motion.div
              key={work.id}
              className="portfolio-item"
              variants={item}
              onClick={() => router.push(`/works?category=${work.category}`)}
              style={{ cursor: "pointer" }}
            >
              <img src={work.image || "/placeholder.svg"} alt={work.title} className="w-full h-64 object-cover" />
              <div className="portfolio-overlay">
                <h3 className="text-xl font-bold">{work.title}</h3>
                <p className="text-sm opacity-80 mt-1">{work.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link href="/works" className="btn btn-primary">
            查看全部作品
          </Link>
        </div>
      </div>
    </section>
  )
}
