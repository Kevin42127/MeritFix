'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Hand, Star, Zap, Crown } from 'lucide-react'

interface RestorationMethod {
  id: string
  name: string
  description: string
  meritGain: number
  icon: any
  color: string
  duration: number
  category: string
}

const restorationMethods: RestorationMethod[] = [
  {
    id: 'chanting',
    name: '念經文',
    description: '虔誠念誦佛經，淨化心靈',
    meritGain: 5,
    icon: BookOpen,
    color: 'from-blue-500 to-indigo-600',
    duration: 30,
    category: '宗教'
  },
  {
    id: 'charity',
    name: '做善事',
    description: '幫助他人，積德行善',
    meritGain: 10,
    icon: Hand,
    color: 'from-green-500 to-emerald-600',
    duration: 60,
    category: '善行'
  },
  {
    id: 'meditation',
    name: '冥想靜心',
    description: '靜坐冥想，修身養性',
    meritGain: 8,
    icon: Star,
    color: 'from-purple-500 to-violet-600',
    duration: 45,
    category: '修行'
  },
  {
    id: 'volunteer',
    name: '志工服務',
    description: '無私奉獻，服務社會',
    meritGain: 15,
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    duration: 120,
    category: '服務'
  },
  {
    id: 'donation',
    name: '慈善捐款',
    description: '慷慨解囊，濟世助人',
    meritGain: 12,
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    duration: 5,
    category: '慈善'
  },
  {
    id: 'forgiveness',
    name: '懺悔寬恕',
    description: '真心懺悔，寬恕他人',
    meritGain: 20,
    icon: Crown,
    color: 'from-red-500 to-pink-600',
    duration: 90,
    category: '心靈'
  }
]

interface RestorationMethodsProps {
  onMeritRestore: (amount: number) => void
}

export default function RestorationMethods({ onMeritRestore }: RestorationMethodsProps) {
  const [selectedCategory, setSelectedCategory] = useState('全部')
  const [activeMethod, setActiveMethod] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)

  const categories = ['全部', ...Array.from(new Set(restorationMethods.map(method => method.category)))]

  const filteredMethods = selectedCategory === '全部' 
    ? restorationMethods 
    : restorationMethods.filter(method => method.category === selectedCategory)

  const handleMethodClick = (method: RestorationMethod) => {
    if (activeMethod === method.id) return
    
    setActiveMethod(method.id)
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          onMeritRestore(method.meritGain)
          setActiveMethod(null)
          return 0
        }
        return prev + (100 / (method.duration / 0.1))
      })
    }, 100)
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white mb-4 text-shadow">
          功德恢復方法
        </h2>
        <p className="text-gray-300 text-lg">
          選擇適合的方法來恢復你的功德值
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-green-500 text-black font-bold'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Methods Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {filteredMethods.map((method, index) => {
          const IconComponent = method.icon
          const isActive = activeMethod === method.id
          
          return (
            <motion.div
              key={method.id}
              className={`relative bg-gradient-to-br ${method.color} p-6 rounded-xl cursor-pointer group transition-all duration-300 ${
                isActive ? 'ring-4 ring-white ring-opacity-50' : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={() => handleMethodClick(method)}
            >
              {/* Progress Bar */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-white bg-opacity-30 rounded-t-xl overflow-hidden">
                  <motion.div
                    className="h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              )}

              <div className="text-center">
                <div className="mb-4">
                  <IconComponent className="w-12 h-12 text-white mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-white mb-2">{method.name}</h3>
                  <p className="text-white text-opacity-90 text-sm mb-4">{method.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-white text-sm">
                    <span>功德值</span>
                    <span className="font-bold">+{method.meritGain}</span>
                  </div>
                  <div className="flex justify-between text-white text-sm">
                    <span>時間</span>
                    <span>{method.duration}秒</span>
                  </div>
                  <div className="flex justify-between text-white text-sm">
                    <span>類別</span>
                    <span>{method.category}</span>
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    className="mt-4 text-white text-sm font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    進行中... {Math.round(progress)}%
                  </motion.div>
                )}
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Tips */}
      <motion.div
        className="mt-12 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold text-white mb-4 text-center">功德恢復小貼士</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div>
            <h4 className="font-bold text-white mb-2">💡 效率建議</h4>
            <ul className="space-y-1 text-sm">
              <li>• 懺悔寬恕功德值最高</li>
              <li>• 志工服務時間較長但效果佳</li>
              <li>• 慈善捐款最快完成</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">🎯 最佳策略</h4>
            <ul className="space-y-1 text-sm">
              <li>• 先做快速恢復，再選高功德</li>
              <li>• 定期做善事維持功德值</li>
              <li>• 避免連續看太多地獄梗</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
