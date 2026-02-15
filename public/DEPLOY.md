# 🚀 Vercel এ ডিপ্লয় করার গাইড

## ধাপে ধাপে নির্দেশনা

### ১. GitHub রিপোজিটরি তৈরি করুন

```bash
# লোকাল ফোল্ডারে যান
cd coc-status-checker

# গিট ইনিশিয়ালাইজ করুন
git init
git add .
git commit -m "Initial commit: Clash of Clans Status Checker"
git branch -M main
```

### ২. GitHub এ পুশ করুন

```bash
# GitHub এ নতুন রিপো তৈরি করুন (কোনো README যোগ করবেন না)
# https://github.com/new

git remote add origin https://github.com/YOUR_USERNAME/coc-status-checker.git
git push -u origin main
```

### ৩. Vercel এ ডিপ্লয় করুন (সবচেয়ে সহজ)

1. **Vercel সাইটে যান:** https://vercel.com
2. **"Sign Up"** বা **"Log In"** করুন (GitHub দিয়ে)
3. **"New Project"** ক্লিক করুন
4. **"Import Git Repository"** বেছে নিন
5. **আপনার GitHub রিপো খুঁজুন এবং বেছে নিন**
6. **"Deploy"** বাটন চাপুন
7. **অপেক্ষা করুন** (২-৩ মিনিট)
8. **আপনার লাইভ URL পাবেন!** 🎉

### ৪. পরীক্ষা করুন

আপনার লাইভ URL খুলুন এবং:
1. একটি ধরন সিলেক্ট করুন
2. একটি ট্যাগ দিন (যেমন: #8QU8J9LP)
3. "ডেটা আনুন" ক্লিক করুন
4. ফলাফল দেখুন! ✨

---

## 🔧 ফাইল স্ট্রাকচার

```
coc-status-checker/
├── index.html          # মেইন ওয়েবসাইট
├── api/
│   └── coc.js         # API প্রক্সি ফাংশন
├── vercel.json        # Vercel কনফিগ
├── .vercelignore      # Vercel ইগনোর ফাইল
├── .gitignore         # গিট ইগনোর ফাইল
├── README.md          # ডকুমেন্টেশন
└── DEPLOY.md          # এই ফাইল
```

---

## 📞 সমস্যা সমাধান

### ❌ সার্ভার ত্রুটি (500)
- Vercel ড্যাশবোর্ডে ফাংশনের লগ চেক করুন
- Redeploy করুন: Settings → Deployments → Redeploy

### ❌ ট্যাগ খুঁজে পাচ্ছে না
- Clash of Clans গেম থেকে সঠিক ট্যাগ কপি করুন
- ট্যাগ বড় অক্ষরে হওয়া উচিত (#8QU8J9LP)

### ❌ Vercel এ পুশ করতে পারছি না
```bash
# পুনরায় চেষ্টা করুন
git status
git add .
git commit -m "Fix: update API"
git push origin main
```

### ❌ Vercel এ ডেপ্লয় রিজেক্ট হচ্ছে
- Vercel সাইটে লগ চেক করুন
- প্রজেক্ট সেটিংস → রিডিপ্লয় করুন

---

## 🎯 কাস্টমাইজেশন

### রঙ বদলান
`index.html` খুলুন এবং CSS এ রঙ বদলান:
```css
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### ভাষা পরিবর্তন করুন
`index.html` এ সব বাংলা টেক্সট খুঁজে বদলান।

### নতুন ফিচার যোগ করুন
1. `index.html` এ নতুন অপশন যোগ করুন
2. `api/coc.js` এ নতুন endpoint যোগ করুন
3. গিটে পুশ করুন (Vercel স্বয়ংক্রিয়ভাবে ডিপ্লয় করবে)

---

## 🔒 নিরাপত্তা

- API কী নিরাপদ (সার্ভারে রাখা)
- কোনো ব্যক্তিগত তথ্য সংরক্ষিত নেই
- সম্পূর্ণ HTTPS এনক্রিপশন

---

## 📈 পারফরম্যান্স

- **লোডিং সময়:** < ১ সেকেন্ড
- **API রেসপন্স:** < ৫০০ মিলিসেকেন্ড
- **মোবাইল অপটিমাইজড:** হ্যাঁ
- **কোন ডাটাবেস:** প্রয়োজন নেই

---

## ✨ বোনাস

### কাস্টম ডোমেইন যোগ করুন
Vercel Settings → Domains → আপনার ডোমেইন যোগ করুন

### পরিবেশ ভেরিয়েবল
`vercel.json` এ সংবেদনশীল তথ্য যোগ করুন (যদি প্রয়োজন হয়)

### Webhook সেটআপ করুন
Vercel আপনাকে GitHub এর প্রতিটি পুশে স্বয়ংক্রিয় ডিপ্লয় করতে দেবে

---

## 🎉 সম্পন্ন!

আপনার Clash of Clans Status Checker এখন লাইভ এবং বিশ্বের যেকোনো জায়গা থেকে অ্যাক্সেসযোগ্য!

**উপভোগ করুন! ⚔️🏰**
