'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, X, AlertTriangle } from 'lucide-react'

interface SuccessToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
  type?: 'success' | 'warning'
}

export default function SuccessToast({ message, isVisible, onClose, type = 'success' }: SuccessToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000) // 3秒後自動關閉
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-20 right-4 z-50"
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`${
            type === 'success' 
              ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400/30' 
              : 'bg-gradient-to-r from-red-500 to-pink-600 border-red-400/30'
          } text-white px-6 py-4 rounded-lg shadow-lg border max-w-sm`}>
            <div className="flex items-center space-x-3">
              {type === 'success' ? (
                <CheckCircle className="w-6 h-6 text-white flex-shrink-0" />
              ) : (
                <AlertTriangle className="w-6 h-6 text-white flex-shrink-0" />
              )}
              <div className="flex-1">
                <p className="font-medium text-sm">{message}</p>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white transition-colors duration-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
