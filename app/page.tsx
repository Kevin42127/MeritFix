'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import MeritSystem from '@/components/MeritSystem'
import RestorationMethods from '@/components/RestorationMethods'
import AnnouncementModal from '@/components/AnnouncementModal'
import SuccessToast from '@/components/SuccessToast'
import { Heart, Zap, Star, Crown, AlertTriangle, Flag } from 'lucide-react'

export default function Home() {
  const [merit, setMerit] = useState(100)
  const [toastMessage, setToastMessage] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<'success' | 'warning'>('success')

  const handleMeritChange = (amount: number) => {
    setMerit(prev => {
      const newMerit = Math.max(0, prev + amount)
      console.log(`功德值從 ${prev} 變更為 ${newMerit}`)
      
      // 顯示成功提示
      if (amount > 0) {
        setToastMessage(`功德恢復成功！獲得 ${amount} 功德值`)
        setToastType('success')
      } else {
        setToastMessage(`功德消耗 ${Math.abs(amount)} 點`)
        setToastType('warning')
      }
      setShowToast(true)
      
      return newMerit
    })
  }

  const handleCloseToast = () => {
    setShowToast(false)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <AnnouncementModal />
      <SuccessToast 
        message={toastMessage} 
        isVisible={showToast} 
        onClose={handleCloseToast}
        type={toastType}
      />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-shadow">
              功德充電站
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              功德值不足？別擔心！來這裡念經文、做善事，快速恢復你的功德值
            </p>
          </motion.div>

          {/* Merit System */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MeritSystem merit={merit} onMeritChange={handleMeritChange} />
          </motion.div>

        </div>
      </section>


      {/* Restoration Methods Section */}
      <section id="restore" className="py-16 bg-gradient-to-b from-gray-900/50 to-transparent">
        <RestorationMethods onMeritRestore={(amount) => handleMeritChange(amount)} />
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-shadow">
              關於功德充電站
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                className="p-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">功德系統</h3>
                <p className="text-gray-300">
                  完整的功德值管理系統，從大善人到地獄常客，清楚顯示你的功德狀態
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">快速恢復</h3>
                <p className="text-gray-300">
                  多種功德恢復方法，從念經文到做善事，總有一種適合你
                </p>
              </motion.div>

              <motion.div
                className="p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">娛樂體驗</h3>
                <p className="text-gray-300">
                  結合傳統文化與現代娛樂，讓功德恢復變得有趣又有效
                </p>
              </motion.div>
            </div>

            <div className="p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-600/30">
              <h3 className="text-2xl font-bold text-white mb-4">使用說明</h3>
              <div className="text-gray-300 text-left max-w-2xl mx-auto space-y-3">
                <p>1. <strong>功德恢復</strong>：選擇適合的恢復方法來增加功德值</p>
                <p>2. <strong>功德等級</strong>：根據功德值顯示不同的等級稱號</p>
                <p>3. <strong>持續修行</strong>：定期做善事維持功德值，避免下地獄</p>
                <p>4. <strong>多種方法</strong>：從念經文到做善事，總有適合你的方式</p>
              </div>
            </div>

            {/* 製作動機區塊 */}
            <div id="motivation" className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl border border-green-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">為什麼會製作這網站？</h3>
              <div className="text-gray-300 space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <p className="text-center text-lg leading-relaxed">
                    我本身也喜歡看地獄梗，某天看到網友留言希望社交媒體平台能新增「功德恢復系統」功能
                  </p>
                </div>
                
                <div className="text-center text-sm text-gray-400">
                  <p>這個想法讓我靈機一動 💡</p>
                  <p className="mt-2">既然官方沒有這個功能，那就自己來做一個「功德充電站」</p>
                  <p className="mt-2">希望能滿足大家看完地獄梗後恢復功德的需求 😄</p>
                </div>
              </div>
            </div>

            {/* PayPal 捐款區塊 */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center">支持功德充電站</h3>
              <p className="text-gray-300 text-center mb-4">
                如果你覺得這個功德充電站對你有幫助，歡迎通過 PayPal 支持我們的開發！
              </p>
              <div className="text-center">
                <a
                  href="https://www.paypal.com/ncp/payment/VK74VS8A93YL2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.105-.633c-.4-2.24-1.73-3.8-4.19-3.8H9.5c-.524 0-.968.382-1.05.9L6.1 19.337h4.576c.524 0 .968-.382 1.05-.9l1.12-7.106h2.19c2.57 0 4.578-.543 5.69-1.81 1.01-1.15 1.304-2.42 1.012-4.287z"/>
                  </svg>
                  通過 PayPal 支持
                </a>
              </div>
            </div>

            {/* 免責聲明區塊 */}
            <div id="disclaimer" className="mt-8 p-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
              <h3 className="text-xl font-bold text-white mb-4 text-center flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-400" />
                免責聲明
              </h3>
              <div className="text-gray-300 space-y-4">
                <div className="text-center">
                  <p className="text-lg font-bold text-yellow-400 mb-4">
                    本網站純屬娛樂，請勿認真
                  </p>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-3">⚠️ 重要注意事項：</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>本網站使用宗教文化概念純屬娛樂，無意冒犯任何宗教信仰，尊重各宗教的文化</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>功德值僅為娛樂用途，不具任何宗教或靈性意義</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>本網站內容純屬虛構，請理性看待，避免過度沉迷</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>如有任何不適或心理壓力，請立即停止使用並尋求專業協助</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>本網站不承擔任何因使用本服務而產生的直接或間接損失</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      <span>使用者應自行承擔使用本網站的所有風險</span>
                    </li>
                  </ul>
                </div>

                <div className="text-center text-sm text-gray-400">
                  <p>感謝您的理解與配合 🙏</p>
                  <p className="mt-2"></p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-600/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-4">
            <p className="text-gray-400">
              © 2025 功德充電站
            </p>
            
            {/* 檢舉連結 */}
            <a
              href="https://forms.gle/SAw9qmN2nkPmyQsTA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 border border-red-500/30 rounded-lg text-sm font-medium transition-all duration-300"
            >
              <Flag className="w-4 h-4 mr-2" />
              檢舉問題 / 意見反饋
            </a>
          </div>
          
          <p className="text-gray-500 text-sm">
            本網站使用宗教文化概念純屬娛樂，無意冒犯任何宗教信仰，尊重各宗教的文化。
          </p>
        </div>
      </footer>
    </div>
  )
}
