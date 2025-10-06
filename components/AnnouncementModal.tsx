'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertTriangle } from 'lucide-react'

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // 檢查是否已經顯示過公告
    const hasSeenAnnouncement = localStorage.getItem('hasSeenAnnouncement')
    if (!hasSeenAnnouncement) {
      // 延遲1秒後顯示公告
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // 記錄用戶已經看過公告
    localStorage.setItem('hasSeenAnnouncement', 'true')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 max-w-md w-full border border-yellow-400/30 shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            {/* 關閉按鈕 */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* 公告內容 */}
            <div className="text-center">
              <div className="mb-4">
                <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-white mb-4">重要公告</h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-lg leading-relaxed">
                  <span className="text-yellow-400 font-bold">本網站純屬娛樂，請勿認真</span>
                </p>
                
                <div className="bg-gray-700/50 rounded-lg p-4 text-sm">
                  <p className="mb-2">⚠️ 注意事項：</p>
                  <ul className="text-left space-y-1">
                    <li>• 本網站使用宗教文化概念純屬娛樂，無意冒犯任何宗教信仰，尊重各宗教的文化</li>
                    <li>• 功德值僅為娛樂用途</li>
                    <li>• 不具任何宗教或靈性意義</li>
                    <li>• 請理性看待，避免過度沉迷</li>
                    <li>• 如有任何不適，請立即停止使用</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400">
                  感謝您的理解與配合 🙏
                </p>
              </div>

              {/* 確認按鈕 */}
              <button
                onClick={handleClose}
                className="mt-6 w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                我已了解，開始使用
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
