# 功德充電站 (Merit Charging Station)

一個有趣的功德值管理網站，讓用戶在看完地獄梗後可以通過各種方式恢復功德值。

## 🎯 功能特色

### 核心功能
- **功德系統**：完整的功德值管理，從 0-100 分
- **功德等級**：大善人、善人、普通人、罪孽深重、地獄常客
- **地獄梗展示**：分類展示各種地獄梗，消耗功德值
- **功德恢復**：多種恢復方法（念經文、做善事、冥想等）

### 技術特色
- **現代化 UI**：使用 Tailwind CSS 和 Framer Motion
- **響應式設計**：支援各種裝置尺寸
- **動畫效果**：流暢的動畫和互動效果
- **無需登入**：直接使用，無需註冊

## 🚀 快速開始

### 安裝依賴
```bash
npm install
```

### 開發模式
```bash
npm run dev
```

### 建置專案
```bash
npm run build
```

### 啟動生產版本
```bash
npm start
```

## 🛠️ 技術棧

- **框架**：Next.js 14 (App Router)
- **語言**：TypeScript
- **樣式**：Tailwind CSS
- **動畫**：Framer Motion
- **圖標**：Lucide React
- **部署**：Vercel

## 📁 專案結構

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全域樣式
│   ├── layout.tsx         # 根佈局
│   └── page.tsx          # 首頁
├── components/            # React 組件
│   ├── Header.tsx        # 導航列
│   ├── MeritSystem.tsx   # 功德系統
│   ├── MemeGallery.tsx   # 地獄梗展示
│   └── RestorationMethods.tsx # 恢復方法
├── public/               # 靜態資源
└── package.json          # 專案配置
```

## 🎮 使用方式

1. **觀看地獄梗**：點擊任何地獄梗會消耗相應的功德值
2. **功德恢復**：選擇適合的恢復方法來增加功德值
3. **功德等級**：根據功德值顯示不同的等級稱號
4. **持續修行**：定期做善事維持功德值

## 🎨 設計理念

- **傳統文化**：結合佛教功德概念
- **現代娛樂**：地獄梗等網路文化
- **互動體驗**：豐富的動畫和反饋
- **視覺效果**：漸層背景和發光效果

## 📱 響應式支援

- 桌面版：完整功能展示
- 平板版：適配中等螢幕
- 手機版：優化觸控體驗

## 🚀 部署到 Vercel

1. 將專案推送到 GitHub
2. 在 Vercel 連接 GitHub 倉庫
3. 自動部署完成

## 📄 授權

MIT License - 可自由使用和修改

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request！

---

**注意**：本網站純屬娛樂，請勿過度沉迷 😄
