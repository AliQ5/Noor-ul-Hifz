# نور الحفظ — Noor-ul-Hifz

> **Qur'an Memorization Student Monitoring, Batch Analytics & Daily Reporting System**

**Noor-ul-Hifz (نور الحفظ)** is an offline-first Windows desktop application designed to help Qur'an memorization institutes and Madaris manage daily student attendance, lateness, study batches, and recitation records in an organized, beautiful, and secure environment.

Powered by an embedded **React 19** single-page interface and **Tailwind CSS v4** inside Microsoft Edge WebView2, with an ultra-reliable local **SQLite** database.

Official Web Help & Support: [https://noorulhifz.netlify.app/](https://noorulhifz.netlify.app/)

---

## 📥 Releases & Downloads

| Version | Series | Status | Package | Download Link |
|:---|:---|:---|:---|:---|
| **V4.2.2 (Latest)** | *Basa'ir (Final)* | **★ Production Ready** | Windows Setup ZIP | [Download V4.2.2](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.2.2/Noor-ul-Hifz-Setup-4.2.zip) |
| **V4.2.1** | *Basa'ir* | Beta Milestone | Windows Setup ZIP | [Download V4.2.1](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.2.1/Noor-ul-Hifz-Setup-4.2.1.zip) |
| **V4.2.0** | *Nizam* | Beta Milestone | Windows Setup ZIP | [Download V4.2.0](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.2/Noor-ul-Hifz-Setup-4.2.zip) |
| **V4.1.0** | *Hawiyyah* | Beta Milestone | Windows Setup ZIP | [Download V4.1.0](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4.1/Noor-ul-Hifz-Setup-4.1.zip) |
| **V4.0.0** | *Itqan* | Milestone Release | Windows Setup ZIP | [Download V4.0.0](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_4/Noor-ul-Hifz-Setup-4.0.zip) |
| **V3.0** | *Muraja'ah* | Archived Release | Windows Setup ZIP | [Download V3.0](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_3/Noor-ul-Hifz-Setup-3.0.zip) |
| **V2.0** | *Initial* | Archived Release | Windows Setup ZIP | [Download V2.0](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_2/Noor-ul-Hifz-Setup-2.0.zip) |
| **V1.0** | *Prototype* | Initial Release | ZIP Archive | [Download V1.0](https://github.com/AliQ5/Noor-ul-Hifz_App/releases/download/Version_1/Noor-ul-Hifz_V1.zip) |

---

## 🚀 What's New in Production Release V4.2.2

- **React 19 SPA Desktop Engine**:
  - Embedded modern single-page architecture built with **React 19**, **Vite**, and **Tailwind CSS v4** packaged into a native Windows executable via Microsoft Edge WebView2 (`pywebview`).
  - Fluid view transitions, crisp typography, and instant responsiveness with zero web server lag.
  - Legacy Tkinter desktop fallback available via `python main.py --legacy`.
- **Class-Based Dark/Light Mode Fix**:
  - Tailored `@custom-variant dark (&:where(.dark, .dark *));` for instant, seamless switching between crisp Light slate canvas and deep Obsidian dark surfaces.
- **Brand Accent Color Picker & Live Palette Preview**:
  - 8 curated Islamic preset swatches: *Royal Blue, Cobalt, Teal, Emerald, Purple, Rose, Amber, Slate*.
  - Custom Hex input with HTML5 color dropper tool.
  - Live preview widget demonstrating dynamic button, pill, progress bar, and active navigation styles.
- **Study Batches & Class Rosters**:
  - Manage multiple study circles, halaqahs, and academic levels within your madrasah.
  - Side-by-side roster inspection with student search, ID matching, and cumulative metrics.
  - 1-click Excel batch roster export.
- **Comparative Analytics & Leaderboards**:
  - Timeframe progression analytics across 5 configurable periods: *Today, This Week, This Month, This Year, and All-Time*.
  - Score leaderboards with medals (🥇, 🥈, 🥉) and Islamic grade tiers (`Mumtaz ممتاز`, `Jayyid Jiddan جید جداً`, `Jayyid جید`, `Maqbool مقبول`).
- **Student Profile & 20-Day Interactive Activity Streak**:
  - Composite score index (0–100%) and 5 category clearance KPI cards (Attendance, Punctuality, Sabaq, Sabaqi, Manzil).
  - 20-day color-coded activity streak timeline (Green for clean day, Amber for takheer, Red for missed recitation/absence).
- **Automated 57-Point Test Suite**:
  - Automated test suite validating database transactions, backup generation, category CRUD, batch rosters, duplicate prevention, Excel import/export pipelines, composite scoring calculations, and GUI fallbacks.
- **Clean Institute Navigation & Help Web CTA**:
  - Neutral, institute-first header with direct link to online documentation at [https://noorulhifz.netlify.app/](https://noorulhifz.netlify.app/).

---

## 📊 Version Evolution & Comparison (V2.0 to V4.2.2)

| Version | Series Name | Architecture & UI | Core Capabilities Added | Key Differences Compared to V4.2.2 |
|:---|:---|:---|:---|:---|
| **V2.0** | *Initial* | Legacy Tkinter | Basic Excel daily attendance parsing, fixed column structure, local database storage. | No custom classes, no React UI, no scoring, no charts, no brand customisation, fixed Excel layout only. |
| **V3.0** | *Muraja'ah* | Tkinter Native | Dynamic condition categories (Absent, Takheer, Sabaq, Sabaqi, Manzil), manual entry dialog, initial search. | No batch management, basic UI layouts, plain text report dump, no comparative analytics. |
| **V4.0** | *Itqan* | Tkinter High-Speed | SQLite WAL mode, multi-faceted filtering (Date, Day, Week, Month, Year, Date Range), bulk Excel export. | Plain text reports, no class grouping, static branding, no performance scoring index. |
| **V4.1** | *Hawiyyah* | Tkinter Custom | Custom institute name, Arabic subtitle, preset logo icons (`ن`, `📖`, `🕌`, `🌙`, `⭐`), custom image upload. | No batch/class grouping, no visual comparison charts, no composite scoring. |
| **V4.2.0** | *Nizam* | Tkinter Polished | Study batches/classes system, student batch assignments, 5-section segmented settings bar. | Canvas-only rendering, no timeframe progression tracking, no leaderboard ranking. |
| **V4.2.1** | *Basa'ir* | Tkinter + Canvas | Batch progress over time (Day, Week, Month, Year, All-Time), Canvas leaderboard, composite scoring (0–100%) with Islamic grade tiers, student streak row. | Tkinter frontend, lacked modern web animations, limited color picker customization. |
| **V4.2.2** | **Basa'ir (Final)** | **React 19 + Tailwind v4 + WebView2** | **Full React SPA overhaul**, class-based dark/light mode toggle, 8-swatch accent palette picker + hex dropper, Help & Support web CTA, production hardening. | **Fastest, cleanest, and most customizable release to date. Complete modern desktop webview app with offline SQLite backend.** |

---

## ✨ Overview

Noor-ul-Hifz is built for institutes where teachers or office staff need to record daily student status such as:

- **غیر حاضری** — Absent
- **تاخیر** — Late
- **سبق کا ناغہ** — Sabaq not completed
- **سبقی کا ناغہ** — Sabqi not completed
- **منزل کا ناغہ** — Manzil not completed
- **رخصت** — Leave

---

## 🔒 Important Data Storage Location

When running as a packaged Windows application, records are stored locally and securely at:
```text
%LOCALAPPDATA%\Noor-ul-Hifz\student_logs.db
```
All data remains 100% offline, private, and protected on your computer.

---

## 👨‍💻 Author

### ALI QURESHI
**Software Developer**

- **Email:** [aliaqureshi75@gmail.com](mailto:aliaqureshi75@gmail.com)
- **Web Help & Support:** [https://noorulhifz.netlify.app/](https://noorulhifz.netlify.app/)
- **GitHub Repository:** [https://github.com/AliQ5/Noor-ul-Hifz_App](https://github.com/AliQ5/Noor-ul-Hifz_App)

---

## 📄 License

Copyright © ALI QURESHI.
Unless a separate license is provided with a specific release, the source code, branding, application design, and associated materials should not be redistributed, modified, or commercially reused without permission from the author.

---

## 📬 Support

For technical support or feature inquiries:
- ✉️ **Email:** [aliaqureshi75@gmail.com](mailto:aliaqureshi75@gmail.com)
- 🌐 **Online Documentation:** [https://noorulhifz.netlify.app/](https://noorulhifz.netlify.app/)
- 🐙 **Issue Tracker:** [GitHub Issues](https://github.com/AliQ5/Noor-ul-Hifz_App/issues)

---

## 🌙 Noor-ul-Hifz
**Simple records. Clear reports. Better student management.**
**نور الحفظ — Qur'an Memorization Student Monitoring System**
