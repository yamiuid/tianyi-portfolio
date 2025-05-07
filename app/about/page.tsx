import Link from "next/link"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">关于我</h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="fade-in">
            <img src="/images/profile.png" alt="天一寨主" className="w-full h-auto rounded-lg shadow-lg" />
          </div>

          <div className="slide-up space-y-4">
            <h2 className="text-2xl font-bold">天一寨主</h2>
            <p className="text-gray-600 dark:text-gray-300">
              我是一位充满激情的创意设计师，专注于视觉艺术和数字媒体创作。拥有超过8年的行业经验，
              我致力于将独特的创意理念转化为令人惊叹的视觉作品。
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              我的创作涵盖了插画、平面设计、UI/UX设计和数字艺术等多个领域。我相信设计不仅仅是关于美学，
              更是关于解决问题和讲述故事。每一个项目对我来说都是一次新的冒险，一次将想法转化为现实的机会。
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              在我的职业生涯中，我有幸与各种规模的客户合作，从初创企业到大型品牌。我擅长理解客户的需求，
              并将其转化为既美观又实用的设计解决方案。
            </p>
          </div>
        </div>

        <div className="slide-up space-y-8">
          <h2 className="text-2xl font-bold">我的经历</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-gray-800 pl-4 py-2">
              <h3 className="text-xl font-semibold">资深设计师 | 创意工作室</h3>
              <p className="text-gray-500">2020 - 至今</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                负责品牌设计、UI/UX设计和插画创作，为客户提供全方位的视觉设计解决方案。
              </p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4 py-2">
              <h3 className="text-xl font-semibold">UI/UX设计师 | 科技公司</h3>
              <p className="text-gray-500">2017 - 2020</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                参与多个移动应用和网站的用户界面设计，优化用户体验，提升产品转化率。
              </p>
            </div>

            <div className="border-l-4 border-gray-800 pl-4 py-2">
              <h3 className="text-xl font-semibold">平面设计师 | 广告公司</h3>
              <p className="text-gray-500">2015 - 2017</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                负责品牌视觉识别系统设计、广告创意和营销物料设计。
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/contact" className="btn btn-primary">
            联系我
          </Link>
        </div>
      </div>
    </div>
  )
}
