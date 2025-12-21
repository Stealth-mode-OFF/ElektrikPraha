# ⚡ OG IMAGE - KOMPLETNÍ SETUP

## ✅ CO JE HOTOVÉ:

### 1. **PREVIEW STRÁNKA:**
```
http://localhost:5173/og-image
```

**NA TÉTO STRÁNCE MŮŽEŠ:**
- ✅ Zobrazit náhled OG obrázku (tvoje fotka elektrikáře)
- ✅ Stáhnout obrázek jedním kliknutím
- ✅ Vidět, jak bude vypadat na WhatsApp, Facebook, atd.
- ✅ Získat odkazy na ověřovací nástroje

---

### 2. **META TAGY:**

Automaticky nastavené:
- ✅ `/components/SEO/MetaTags.tsx` - dynamické OG tagy
- ✅ `/public/index.html` - statické fallback tagy
- ✅ Správné rozměry: 1200×630
- ✅ URL: `{tvoje-domena}/og-image.png`

---

## 🎯 JAK TO NASTAVIT (3 KROKY):

### KROK 1: Otevři preview stránku
```
http://localhost:5173/og-image
```

### KROK 2: Klikni "STÁHNOUT OG IMAGE"
- Stáhne se soubor `og-image.png`

### KROK 3: Přesuň do `/public/`
```
/projekt/
  /public/
    og-image.png  ← TADY!
```

### KROK 4: Restart dev serveru
```bash
Ctrl+C
npm run dev
```

### KROK 5: Ověř
```
http://localhost:5173/og-image.png
```
Měl by se zobrazit tvůj thumbnail!

---

## 📱 KDE SE ZOBRAZÍ THUMBNAIL:

Po nahrání na server, když někdo pošle odkaz:
- ✅ **WhatsApp** - zobrazí náhled s fotkou
- ✅ **Facebook** - zobrazí náhled s fotkou
- ✅ **LinkedIn** - zobrazí náhled s fotkou
- ✅ **Twitter/X** - zobrazí náhled s fotkou
- ✅ **Telegram** - zobrazí náhled s fotkou
- ✅ **iMessage** - zobrazí náhled s fotkou

---

## 🔍 OVĚŘENÍ PO DEPLOY:

### 1. Zkontroluj, že obrázek existuje:
```
https://elektrikar-praha.com/og-image.png
```

### 2. Facebook Debugger:
```
https://developers.facebook.com/tools/debug/
→ zadej URL webu
→ klikni "Scrape Again"
```

### 3. LinkedIn Post Inspector:
```
https://www.linkedin.com/post-inspector/
→ zadej URL webu
```

---

## 🎨 CO OBSAHUJE THUMBNAIL:

- ✅ Realistická fotka elektrikáře
- ✅ Text "ELEKTRIKÁŘ PRAHA"
- ✅ Profesionální prostředí (rozvaděč v pozadí)
- ✅ Multiměr v ruce (důvěryhodnost)
- ✅ Rozměry: 1200×630 px
- ✅ Optimalizováno pro social media

---

## 🚨 TROUBLESHOOTING:

### ❌ "Obrázek se nestahuje"
→ Otevři console (F12) a koukni, jestli je chyba
→ Zkus refresh stránky (Ctrl+R)

### ❌ "Obrázek není na localhost:5173/og-image.png"
→ Zkontroluj, že je v `/public/og-image.png` (malé písmena!)
→ Restart dev serveru

### ❌ "Facebook stále ukazuje starý obrázek"
→ Facebook má cache!
→ Použij Debugger → "Scrape Again"

---

## 📝 SOUBORY:

- ✅ `/src/pages/OGImageDownload.tsx` - preview stránka
- ✅ `/components/SEO/MetaTags.tsx` - automatické meta tagy
- ✅ `/public/index.html` - fallback meta tagy
- ⏳ `/public/og-image.png` - **TENHLE MUSÍŠ STÁHNOUT A NAHRÁT!**

---

## 🚀 QUICK START:

```bash
# 1. Otevři preview:
http://localhost:5173/og-image

# 2. Klikni "STÁHNOUT OG IMAGE"

# 3. Přesuň do /public/og-image.png

# 4. Restart serveru

# 5. Ověř: http://localhost:5173/og-image.png

# ✅ HOTOVO!
```

---

**Po deploy na produkci testuj na Facebook Debugger!** 🔥
