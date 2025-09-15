import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '功德充電站 - 地獄梗看完必備',
  description: '看完地獄梗後需要恢復功德？來功德充電站念經文、做善事，快速恢復你的功德值！',
  keywords: '功德, 地獄梗, 恢復, 念經, 善事, 充電站, 宗教文化',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
