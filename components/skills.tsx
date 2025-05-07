"use client"

import { motion } from "framer-motion"

const skills = [
  { name: "插画设计", level: 95 },
  { name: "平面设计", level: 90 },
  { name: "UI/UX设计", level: 85 },
  { name: "品牌设计", level: 80 },
  { name: "3D建模", level: 75 },
  { name: "动画制作", level: 70 },
]

export default function Skills() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">专业技能</h2>

          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                  <span className="text-gray-800 dark:text-gray-200">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <motion.div
                    className="bg-gray-800 dark:bg-gray-300 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
