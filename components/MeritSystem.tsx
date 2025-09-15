'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart, Zap, Star, Crown } from 'lucide-react'

interface MeritSystemProps {
  merit: number
  onMeritChange: (amount: number) => void
}

export default function MeritSystem({ merit, onMeritChange }: MeritSystemProps) {
  const [meritLevel, setMeritLevel] = useState('大善人')
  const [showAnimation, setShowAnimation] = useState(false)

  const meritLevels = [
    { min: 0, max: 20, name: '地獄常客', color: 'text-red-500', icon: Crown },
    { min: 21, max: 40, name: '罪孽深重', color: 'text-orange-500', icon: Zap },
    { min: 41, max: 60, name: '普通人', color: 'text-yellow-500', icon: Star },
    { min: 61, max: 80, name: '善人', color: 'text-green-500', icon: Heart },
    { min: 81, max: 100, name: '大善人', color: 'text-blue-500', icon: Heart },
    { min: 101, max: 150, name: '聖人', color: 'text-purple-500', icon: Heart },
    { min: 151, max: 200, name: '菩薩', color: 'text-pink-500', icon: Heart },
  ]

  useEffect(() => {
    const level = meritLevels.find(l => merit >= l.min && merit <= l.max)
    if (level) {
      setMeritLevel(level.name)
    }
  }, [merit])


  const consumeMerit = (amount: number) => {
    onMeritChange(-amount)
    setShowAnimation(true)
    setTimeout(() => setShowAnimation(false), 1000)
  }

  const restoreMerit = (amount: number) => {
    onMeritChange(amount)
    setShowAnimation(true)
    setTimeout(() => setShowAnimation(false), 1000)
  }

  const currentLevel = meritLevels.find(l => merit >= l.min && merit <= l.max)
  const IconComponent = currentLevel?.icon || Heart

  return (
    <motion.div
      className="merit-card max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* Merit Level */}
        <motion.div
          className="flex items-center justify-center space-x-2 mb-4"
          animate={showAnimation ? { scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <IconComponent className={`w-8 h-8 ${currentLevel?.color}`} />
          <h2 className={`text-2xl font-bold ${currentLevel?.color}`}>
            {meritLevel}
          </h2>
        </motion.div>

        {/* Merit Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-300 mb-2">
            <span>功德值</span>
            <span className="font-bold text-yellow-400">{merit}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(100, merit)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          {merit > 100 && (
            <div className="text-center mt-2">
              <span className="text-xs text-purple-400 font-bold">
                超越極限！功德值 {merit}
              </span>
            </div>
          )}
        </div>

        {/* Merit Actions */}
        <div className="space-y-3">
          {/* Consume Merit Actions */}
          <div className="mb-4">
            <h3 className="text-sm font-bold text-red-400 mb-2 text-center">消耗功德</h3>
            <div className="space-y-2">
              <button
                onClick={() => consumeMerit(8)}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                觀看地獄梗 (-8 功德)
              </button>
              <button
                onClick={() => consumeMerit(5)}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                說謊 (-5 功德)
              </button>
              <button
                onClick={() => consumeMerit(10)}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                生氣罵人 (-10 功德)
              </button>
              <button
                onClick={() => consumeMerit(15)}
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                做壞事 (-15 功德)
              </button>
            </div>
          </div>

          {/* Restore Merit Actions */}
          <div>
            <h3 className="text-sm font-bold text-green-400 mb-2 text-center">恢復功德</h3>
            <div className="space-y-2">
              <button
                onClick={() => restoreMerit(5)}
                className="w-full karma-button"
              >
                念經文 (+5 功德)
              </button>
              
              <button
                onClick={() => restoreMerit(10)}
                className="w-full karma-button"
              >
                做善事 (+10 功德)
              </button>
              
              <button
                onClick={() => restoreMerit(15)}
                className="w-full karma-button"
              >
                志工服務 (+15 功德)
              </button>
            </div>
          </div>
        </div>

        {/* Merit Status */}
        <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
          <p className="text-gray-300 text-sm">
            {merit >= 151 && '功德無量，已成菩薩！'}
            {merit >= 101 && merit < 151 && '功德圓滿，已成聖人！'}
            {merit >= 80 && merit < 101 && '功德圓滿，善哉善哉！'}
            {merit >= 60 && merit < 80 && '功德尚可，繼續努力！'}
            {merit >= 40 && merit < 60 && '功德一般，需要多行善事。'}
            {merit >= 20 && merit < 40 && '功德不足，小心下地獄！'}
            {merit < 20 && '功德全無，地獄在等你！'}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
