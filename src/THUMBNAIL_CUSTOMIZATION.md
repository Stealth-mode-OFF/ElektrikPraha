# 🎨 Přizpůsobení Thumbnail - Pokročilé možnosti

## 🌍 Jak vytvořit anglickou verzi?

Aktuální obrázek má **hardcoded** text "ELEKTRIKÁŘ PRAHA" přímo v obrázku z ChatGPT.

### Možnost 1: Vygenerovat nový obrázek (NEJLEPŠÍ)

Použij stejný prompt v ChatGPT/DALL-E, ale změň text:

```
Professional Czech electrician holding a multimeter, 
electrical panel in background, modern interior, 
confident smile, navy work shirt, 
photorealistic, professional photography style.

Text overlay: "ELECTRICIAN PRAGUE" 
- white bold sans-serif font
- thin blue underline below "PRAGUE"
```

### Možnost 2: Overlay text v CSS (komplikovanější)

Můžeš přidat textový overlay přes obrázek v `/components/ThumbnailPhoto.tsx`:

```typescript
export function ThumbnailPhoto() {
  const { language } = useLanguage();
  
  return (
    <div className="relative w-full h-[630px] overflow-hidden">
      {/* Original image */}
      <img src={thumbnailImage} className="w-full h-full object-cover" />
      
      {/* Custom text overlay (if needed) */}
      {language === 'en' && (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
          <h1 className="text-7xl font-extrabold text-white leading-none mb-2">
            ELECTRICIAN
          </h1>
          <h2 className="text-7xl font-extrabold text-white">
            PRAGUE
          </h2>
          <div className="w-full h-1 bg-blue-500 mt-2"></div>
        </div>
      )}
    </div>
  );
}
```

**⚠️ Problém:** Text na obrázku a CSS text se budou překrývat!

### Možnost 3: Dva samostatné obrázky (DOPORUČENO)

Vygeneruj dva obrázky:
1. `thumbnail-cz.png` - "ELEKTRIKÁŘ PRAHA"
2. `thumbnail-en.png` - "ELECTRICIAN PRAGUE"

Pak v komponentě:

```typescript
import thumbnailCZ from 'figma:asset/[CZ_ID].png';
import thumbnailEN from 'figma:asset/[EN_ID].png';

export function ThumbnailPhoto() {
  const { language } = useLanguage();
  const image = language === 'cz' ? thumbnailCZ : thumbnailEN;
  
  return (
    <div className="relative w-full h-[630px]">
      <img src={image} className="w-full h-full object-cover" />
    </div>
  );
}
```

---

## 🎯 Jak změnit pozici/styl textu na obrázku?

### Pokud chceš použít **Canva** nebo **Figma** místo ChatGPT:

1. **Stáhni aktuální obrázek** z `/thumbnail`
2. **Importuj do Canva/Figma**
3. **Uprav text** (font, barva, pozice)
4. **Exportuj jako PNG (1200×630)**
5. **Nahraj do projektu** jako `figma:asset/[NEW_ID].png`
6. **Aktualizuj** `/components/ThumbnailPhoto.tsx`

---

## 🖼️ Jak změnit samotnou fotku pozadí?

### Možnost A: ChatGPT/DALL-E
Prompt:
```
Professional Czech electrician, age 40-50, 
grey beard, holding yellow multimeter, 
electrical switchboard on the left, 
modern apartment blurred background,
navy blue work shirt, confident smile,
photorealistic studio lighting, 
professional headshot style
```

### Možnost B: Unsplash/Pexels
Hledej klíčová slova:
- "electrician professional portrait"
- "electrical technician multimeter"
- "electrician switchboard"

### Možnost C: Vlastní fotografie Jaroslava! (NEJLEPŠÍ)
Udělej profesionální fotku:
- ✅ Jaroslav v pracovním oblečení
- ✅ Rozvaděč nebo elektro práce v pozadí
- ✅ Multimetr nebo nářadí v ruce
- ✅ Přirozený úsměv
- ✅ Dobré osvětlení

Pak:
1. Nahraj do projektu
2. Přidej text v Canva/Figma
3. Exportuj a použij

---

## 🎨 Jak změnit barvy?

Aktuální thumbnail má:
- **Pozadí**: Tmavě šedé
- **Text**: Bílý
- **Akcent**: Modrá linka pod "PRAHA"

Pokud chceš jinou barevnou schému, vygeneruj nový obrázek s promptem:

```
[...same prompt...]
Color scheme: 
- Background: dark navy blue
- Text: bright yellow/gold
- Accent line: electric orange
```

---

## 📱 Jak zajistit, aby thumbnail vypadal dobře i na mobilu?

### Testování:
1. Otevři `/thumbnail` v prohlížeči
2. Otevři DevTools (`F12`)
3. Přepni na mobile view (Cmd+Shift+M)
4. Zkontroluj čitelnost

### Tipy:
- ✅ Text vpravo nahoře je nejčitelnější (jako teď)
- ✅ Minimálně 60px font na 1200×630 = čitelné i na 300px šířce
- ✅ Vysoký kontrast text/pozadí
- ❌ Vyhni se textu uprostřed (překryje hlavní element - obličej)

---

## 🔧 Pokročilá customizace: Dynamický text overlay

Pokud chceš **automaticky generovat text** podle jazyka:

```typescript
import thumbnailBase from 'figma:asset/BASE_IMAGE_WITHOUT_TEXT.png';

export function ThumbnailPhoto() {
  const { language } = useLanguage();
  
  const headline = language === 'cz' 
    ? { line1: 'ELEKTRIKÁŘ', line2: 'PRAHA' }
    : { line1: 'ELECTRICIAN', line2: 'PRAGUE' };
  
  return (
    <div className="relative w-full h-[630px]">
      {/* Base image without text */}
      <img src={thumbnailBase} className="w-full h-full object-cover" />
      
      {/* Dynamic text overlay */}
      <div className="absolute top-1/2 right-12 -translate-y-1/2 text-right">
        <h1 className="text-7xl font-black text-white leading-none tracking-tight drop-shadow-2xl">
          {headline.line1}
        </h1>
        <h2 className="text-7xl font-black text-white leading-none tracking-tight drop-shadow-2xl mt-2">
          {headline.line2}
        </h2>
        <div className="w-full h-1.5 bg-blue-500 mt-4 rounded-full shadow-lg shadow-blue-500/50"></div>
      </div>
    </div>
  );
}
```

**⚠️ Ale pozor:** Musíš vygenerovat **base image BEZ textu**!

---

## ✅ Doporučení

Pro tento projekt:

### Pro CZ verzi:
✅ **Použij aktuální obrázek** - je perfektní!

### Pro EN verzi:
1. **Vygeneruj nový obrázek v ChatGPT** se stejným promptem, ale text "ELECTRICIAN PRAGUE"
2. **Ulož oba obrázky** do projektu
3. **Přepínání podle jazyka** v komponentě

### Nebo ještě lépe:
🎯 **Pořiď vlastní fotku Jaroslava!**
- Nejvíc autentické
- Nejvíc důvěryhodné
- SEO benefit (unique content)
- Pak jen přidej text v Canva

---

## 🚀 Quick wins:

Pokud teď nemáš čas:
- ✅ **Použij aktuální CZ verzi** - funguje skvěle
- ✅ **Anglické návštěvníky to nezklame** - "Praha" chápou všichni
- ✅ **Až budeš mít čas, dolaď EN verzi**

Thumbnail je primárně pro **český trh**, takže "ELEKTRIKÁŘ PRAHA" je naprosto OK! 🇨🇿

---

**Potřebuješ pomoct s něčím konkrétním?** Napiš! 😊
