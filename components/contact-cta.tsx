"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function ContactCTA() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">准备好开始您的项目了吗？</h2>
          <p className="text-gray-300 mb-8 text-lg">
            无论您有项目合作、咨询需求，还是只是想打个招呼，我都很乐意听取您的想法。 让我们一起创造令人惊叹的作品！
          </p>
          <Link href="/contact" className="btn bg-white text-gray-900 hover:bg-gray-100">
            联系我
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
