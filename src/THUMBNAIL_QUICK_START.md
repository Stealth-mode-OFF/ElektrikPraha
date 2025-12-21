# 🚀 THUMBNAIL - Rychlý start

## 📍 Přístup k thumbnail generátoru

```
http://localhost:5173/thumbnail
```

## 🎨 Nový profesionální thumbnail z ChatGPT!

**✅ Použit AI-generovaný obrázek:**
- Profesionální elektrikář s multimetrem
- Rozvaděč v pozadí
- Text "ELEKTRIKÁŘ PRAHA" (CZ) / "ELECTRICIAN PRAGUE" (EN)
- Moderní, důvěryhodný look
- **Automatická detekce jazyka prohlížeče**

---

## ⚡ 3 rychlé kroky k exportu

### 1️⃣ Otevři URL
Běž na `/thumbnail` v prohlížeči

### 2️⃣ Vyber styl
- **📸 Realistická fotka** (doporučeno) - reálná fotka elektrikáře
- **⚡ Ilustrovaný styl** - abstraktní ikona blesku

### 3️⃣ Exportuj
1. Otevři DevTools (`F12`)
2. Klikni pravým na element s class `.aspect-[1200/630]`
3. Vyber "Capture node screenshot"
4. Hotovo! Máš thumbnail 1200×630 px

---

## 📸 Co dostaneš:

### Verze 1: Realistická fotka
```
✅ Reálná fotka elektrikáře při práci
✅ Tmavý overlay pro čitelnost
✅ Text: "ELEKTRIKÁŘ PRAHA" (CZ) / "ELECTRICIAN PRAGUE" (EN)
✅ Auto-detekce jazyka prohlížeče
✅ Profesionální, důvěryhodný look
```

### Verze 2: Ilustrovaná
```
✅ Ikona blesku ve středu
✅ Circuit-like designové prvky
✅ Gradient pozadí
✅ Minimalistický styl
```

---

## 🎯 Použití exportovaného obrázku:

1. **Facebook/LinkedIn**: Open Graph meta tag
2. **Twitter**: Twitter Card
3. **Google Business**: Cover photo
4. **Google Search**: Website preview

---

## 🔧 Potřebuješ jinou fotku?

Otevři `/components/ThumbnailPhoto.tsx` a změň URL obrázku na řádku ~12:

```typescript
<img 
  src="TVOJE_NOVA_URL_OBRAZKU"
  alt="Professional electrician at work"
/>
```

Pro hledání fotek použij:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://pexels.com
- **Vlastní fotografie** (nejvíc autentické!)

---

## ✅ Checklist po exportu:

- [ ] Thumbnail exportován (1200×630 px)
- [ ] Nahrán do `/public/thumbnail.png`
- [ ] Přidány Open Graph meta tagy
- [ ] Otestováno ve Facebook Debugger
- [ ] Nastaveno v Google Business Profile

---

## 📚 Více info?

Viz kompletní dokumentace: `/README_THUMBNAIL.md`

---

**TIP:** Pro nejlepší výsledky použij **vlastní fotku** Jaroslava při práci! Stock fotky jsou OK, ale autenticita = důvěryhodnost. 📸