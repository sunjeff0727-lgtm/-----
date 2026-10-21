# 小杰的小考：資料結構

繁體中文資料結構線上小考，共 12 道單選題，每題 1 分。

## 功能

- 陣列、鏈結串列、堆疊、佇列、二分搜尋、二元樹、二元搜尋樹、堆積、雜湊表、BFS、排序與複雜度。
- 作答進度、題目導覽、漏答提醒。
- 交卷後自動計分，顯示正確答案及每題詳解。
- 可重新測驗，支援手機排版與鍵盤操作。
- 純靜態網頁，不需要安裝套件。成績不會傳送或儲存，重新整理後會清空。

## 本機開啟

使用瀏覽器開啟 `index.html`。請讓 `index.html`、`style.css`、`quiz.js` 保持在同一個資料夾。Google Fonts 無法連線時會使用系統字型。

## 發布到 GitHub Pages

1. 登入自己的 GitHub 帳號。
2. 建立名為 `xiaojie-quiz` 的公開（Public）repository。電腦上的資料夾仍可保留「小杰的小考」。
3. 使用 **Add file → Upload files** 上傳 `index.html`、`style.css`、`quiz.js`、`.nojekyll` 與本說明，並提交變更。`index.html` 必須直接位於 repository 根目錄。
4. 開啟 repository 的 **Settings → Pages**。
5. 在 **Build and deployment** 中，將 Source 設為 **Deploy from a branch**，Branch 選擇 **main**、資料夾選擇 **/(root)**，按 **Save**。
6. 等待部署完成，從 Pages 頁面複製實際網站網址，開啟確認可以作答後再交給老師。

網址格式是 `https://你的GitHub帳號.github.io/xiaojie-quiz/`，這只是格式示範；尚未上傳部署前不是可用網址。

官方說明：https://docs.github.com/en/pages/quickstart

## 檔案

- `index.html`：頁面結構。
- `style.css`：桌面與手機樣式。
- `quiz.js`：12 題題庫、作答、計分及重試邏輯。
- `.nojekyll`：讓 GitHub Pages 直接提供靜態檔案。

這是學習練習網頁，答案包含在前端原始碼中，不適合用於需要防作弊的正式考試。
