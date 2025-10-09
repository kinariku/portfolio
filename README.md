# Portfolio

Kinari Kuramoとのポートフォリオサイト

## 技術スタック

- **フレームワーク**: TypeScript + Vite
- **スタイル**: CSS (Custom Design System)
- **CMS**: microCMS
- **アニメーション**: GSAP
- **多言語**: カスタムi18n実装

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

プロジェクトルートに `.env` ファイルを作成し、以下の内容を追加：

```
VITE_MICROCMS_SERVICE_DOMAIN=your-service-domain
VITE_MICROCMS_API_KEY=your-api-key
```

### 3. microCMS の設定

#### API スキーマ (works)

microCMS管理画面で「works」というAPIを作成し、以下のフィールドを設定：

| フィールドID | 表示名 | 種類 | 必須 |
|-------------|--------|------|------|
| title | タイトル（日本語） | テキストフィールド | ✓ |
| titleEn | タイトル（英語） | テキストフィールド | |
| subtitle | サブタイトル（日本語） | テキストフィールド | ✓ |
| subtitleEn | サブタイトル（英語） | テキストフィールド | |
| description | 説明（日本語） | テキストエリア | ✓ |
| descriptionEn | 説明（英語） | テキストエリア | |
| detailedDescription | 詳細説明（日本語） | 複数行テキスト | |
| detailedDescriptionEn | 詳細説明（英語） | 複数行テキスト | |
| thumbnail | サムネイル画像 | 画像 | |
| images | 画像一覧 | 画像（複数） | |
| tags | タグ | 複数行テキスト | ✓ |
| duration | 期間（日本語） | テキストフィールド | ✓ |
| durationEn | 期間（英語） | テキストフィールド | |
| role | 役割（日本語） | テキストフィールド | ✓ |
| roleEn | 役割（英語） | テキストフィールド | |
| technologies | 技術スタック | 複数行テキスト | ✓ |
| features | 主な機能（日本語） | 複数行テキスト | |
| featuresEn | 主な機能（英語） | 複数行テキスト | |
| challenges | 課題（日本語） | 複数行テキスト | |
| challengesEn | 課題（英語） | 複数行テキスト | |
| outcome | 成果（日本語） | テキストエリア | |
| outcomeEn | 成果（英語） | テキストエリア | |
| websiteUrl | ウェブサイトURL | テキストフィールド | |
| githubUrl | GitHub URL | テキストフィールド | |
| appStoreUrl | App Store URL | テキストフィールド | |
| googlePlayUrl | Google Play URL | テキストフィールド | |
| year | 年 | 数値 | ✓ |
| category | カテゴリ | セレクト | ✓ |
| featured | 注目作品 | 真偽値 | |

**カテゴリの選択肢:**
- web
- mobile
- design
- other

### 4. 開発サーバーの起動

```bash
npm run dev
```

## ビルド

```bash
npm run build
```

## プレビュー

```bash
npm run preview
```

## 機能

- ✅ レスポンシブデザイン
- ✅ 多言語対応（日本語/英語）
- ✅ ダークモード対応
- ✅ アニメーション
- ✅ Works詳細ページ
- ✅ microCMS連携
- ✅ フィルター・ソート機能

## ディレクトリ構造

```
portfolio/
├── src/
│   ├── components/      # UIコンポーネント
│   ├── core/           # フレームワークコア
│   ├── data/           # ローカルデータ（フォールバック）
│   ├── pages/          # ページコンポーネント
│   ├── styles/         # スタイルシート
│   ├── utils/          # ユーティリティ関数
│   ├── main.ts         # エントリーポイント
│   └── works-list.ts   # Works一覧ページ
├── index.html          # トップページ
├── works.html          # Works一覧ページ
└── package.json
```

## ライセンス

All rights reserved.
