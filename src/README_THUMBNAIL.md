# 🖼️ Profesionální Thumbnail pro Elektrikář Praha

## ✨ Co je to?

Profesionální náhledový obrázek (1200×630 px) optimalizovaný pro:
- Facebook a LinkedIn sdílení (Open Graph)
- Twitter Cards
- Google Business Profile cover
- Website preview v Google Search

## 🎨 Dvě verze na výběr

### Verze 1: **Realistická fotka z ChatGPT** (📸 DOPORUČENO)
- ✅ **AI-generovaná fotka** profesionálního elektrikáře
- ✅ Elektrikář s multimetrem a rozvaděčem
- ✅ Text "ELEKTRIKÁŘ PRAHA" už součástí obrázku
- ✅ Moderní, trustworthy look
- ✅ **Žádný overlay potřeba** - obrázek je perfektní jak je
- ✅ **Automatický překlad CZ/EN podle jazyka prohlížeče**

**Text na thumbnail:**
- CZ: "ELEKTRIKÁŘ PRAHA" (již na obrázku)
- EN: "ELECTRICIAN PRAGUE" (lze přepnout v komponentě)

### Verze 2: **Ilustrovaný styl** (⚡)
- ✅ Abstraktní ikona blesku
- ✅ Circuit-like designové prvky
- ✅ Gradient pozadí
- ✅ Minimalistický

## 🎨 Design vlastnosti

### Styl:
- ✅ **Klidný a profesionální** (ne emergency/pohotovost)
- ✅ **Moderní, trustworthy look**
- ✅ **Tmavé pozadí** (slate/navy) s modrým akcentem
- ✅ **Čitelný na malých obrazovkách**

### Barvy:
- Pozadí: Gradient slate-900 → slate-800
- Akcent: Electric blue (#3B82F6)
- Text: White + blue gradient

### Typografie:
- Hlavní: "ELEKTRIKÁŘ PRAHA" (sans-serif, extrabold)
- Podnadpis: "Profesionální služby" (uppercase, tracked)
- Brand: "Jaroslav Soukup" (subtle, bottom)

## 📸 Jak exportovat thumbnail

### Krok 1: Otevřete preview
```
http://localhost:5173/thumbnail
```

### Krok 2: Chrome DevTools
1. Stiskněte `F12` (Windows) nebo `Cmd+Opt+I` (Mac)
2. Najděte element s třídou `.aspect-[1200/630]`
3. Pravé tlačítko → **"Capture node screenshot"**
4. PNG se automaticky stáhne (1200×630 px)

### Krok 3: Upload
Nahrajte stažený soubor jako:
- `thumbnail.png` nebo `og-image.png`
- Do `/public/` složky vašeho webu

## 🔧 Implementace do HTML

### Open Graph (Facebook, LinkedIn):
```html
<head>
  <meta property="og:image" content="https://elektrikar-praha.com/thumbnail.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Elektrikář Praha - Jaroslav Soukup" />
</head>
```

### Twitter Card:
```html
<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://elektrikar-praha.com/thumbnail.png" />
  <meta name="twitter:image:alt" content="Elektrikář Praha - Profesionální služby" />
</head>
```

### Google Business Profile:
1. Přejděte na Google Business Profile
2. Vyberte "Fotky" → "Cover photo"
3. Nahrajte thumbnail.png
4. Ideální rozměry: 1200×630 px

## 🧪 Testování

### Facebook Debugger:
```
https://developers.facebook.com/tools/debug/
```
Vložte URL vašeho webu a zkontrolujte náhled.

### Twitter Card Validator:
```
https://cards-dev.twitter.com/validator
```

### LinkedIn Post Inspector:
```
https://www.linkedin.com/post-inspector/
```

## 🎯 Preview v /thumbnail route

Route `/thumbnail` obsahuje:
- **Hlavní náhled** (1200×630) - plná velikost
- **Facebook preview** - 50% scale
- **Google Search preview** - 50% scale
- **Instrukce k exportu**

## 📐 Technické specifikace

| Vlastnost | Hodnota |
|-----------|---------|
| Rozměry | 1200 × 630 px |
| Formát | PNG (nebo JPEG) |
| Poměr stran | 1.91:1 |
| Max. velikost | < 5 MB (ideálně < 1 MB) |
| Color space | sRGB |

## 🔄 Variace

Pokud potřebujete upravit text na thumbnail:

### Možnost 1: "ELEKTRIKÁŘ PRAHA" (výchozí)
```typescript
// /components/Thumbnail.tsx - řádek ~45
<h1>ELEKTRIKÁŘ<br />PRAHA</h1>
```

### Možnost 2: "ELEKTROINSTALACE PRAHA"
```typescript
<h1>ELEKTROINSTALACE<br />PRAHA</h1>
```

### Možnost 3: "PROFESIONÁLNÍ ELEKTRIKÁŘ"
```typescript
<h1>PROFESIONÁLNÍ<br />ELEKTRIKÁŘ</h1>
```

## ✅ Checklist

- [ ] Exportovali jste thumbnail jako PNG (1200×630)
- [ ] Nahráli jste do `/public/thumbnail.png`
- [ ] Přidali jste Open Graph meta tagy
- [ ] Otestovali ve Facebook Debugger
- [ ] Otestovali v Twitter Card Validator
- [ ] Nahráli na Google Business Profile
- [ ] Ověřili zobrazení v Google Search

## 🚀 Tipy pro maximální dosah

1. **Komprese**: Použijte TinyPNG.com pro optimalizaci velikosti
2. **Cache busting**: Po aktualizaci změňte URL (`thumbnail.png?v=2`)
3. **Alt text**: Vždy přidejte popisný alt text
4. **Testování**: Otestujte na všech platformách před spuštěním
5. **Konzistence**: Používejte stejný thumbnail napříč všemi kanály

---

**Vytvořeno pro:** Elektrikář Praha – Jaroslav Soukup  
**Design:** Profesionální, klidný, trustworthy (2026 standard)  
**Optimalizováno pro:** Social media sharing + SEO