"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">关于我</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            我是天一寨主，一位充满激情的创意设计师和视觉艺术家。我专注于创造独特而有意义的视觉体验，
            通过我的作品讲述故事并传达情感。我的创作涵盖了插画、平面设计、UI/UX设计和数字艺术等多个领域。
          </p>
          <Link href="/about" className="btn btn-outline">
            了解更多
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
