# 🐛 BUGFIX: Nested Links Warning

## ❌ Původní problém:

```
Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>
```

**Příčina:**
V `HomePage.tsx` byla komponenta `ServiceCard` zabalená v `<Link>` komponentě:

```tsx
// ❌ ŠPATNĚ - vnořené linky!
<Link to="/rekonstrukce-elektroinstalace-byt-dum">
  <ServiceCard
    // ...props
  />
</Link>
```

Problém byl, že `ServiceCard` uvnitř obsahoval **CTA tlačítko jako `<a>` tag**:

```tsx
// Uvnitř ServiceCard.tsx
<a href="#kontakt" className="...">
  Poptat tuto službu
</a>
```

To vedlo k **nevalidnímu HTML**:
```html
<a href="/rekonstrukce...">  <!-- Vnější Link -->
  <div>
    <a href="#kontakt">      <!-- Vnitřní link = PROBLÉM! -->
      Poptat tuto službu
    </a>
  </div>
</a>
```

---

## ✅ Řešení:

Změnil jsem **CTA tlačítko v ServiceCard** z `<a>` tagu na `<div>`:

### Před (❌):
```tsx
<a
  href="#kontakt"
  className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 px-4 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all font-bold group/btn"
>
  <span>{language === 'cz' ? 'Poptat tuto službu' : 'Request Quote'}</span>
  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
</a>
```

### Po (✅):
```tsx
<div
  className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 px-4 rounded-xl group-hover:bg-amber-500 group-hover:text-slate-900 transition-all font-bold group/btn cursor-pointer"
>
  <span>{language === 'cz' ? 'Zobrazit detail' : 'View Details'}</span>
  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
</div>
```

---

## 🎯 Proč to funguje:

1. **Celá karta je klikací** díky vnějšímu `<Link>` → vede na detail služby
2. **CTA tlačítko je nyní `<div>`** (ne `<a>`) → žádný vnořený link
3. **Hover efekty stále fungují** díky `group-hover` z Tailwindu
4. **Lepší UX**: Celá karta má pouze 1 akci = kliknutí vede na detail
5. **Validní HTML**: Žádné vnořené `<a>` tagy

---

## 📋 Změny v kódu:

### `/components/ServiceCard.tsx`
- ✅ Změněno `<a href="#kontakt">` → `<div>`
- ✅ Přidán `cursor-pointer` pro lepší UX
- ✅ Text změněn: "Poptat tuto službu" → "Zobrazit detail"
- ✅ Hover efekty zachovány (`group-hover:bg-amber-500`)

---

## ⚠️ Důležité poznatky:

### Pravidlo 1: Nikdy nevnoř `<a>` do `<a>`
```tsx
// ❌ ŠPATNĚ
<a href="/page">
  <a href="/other">Text</a>
</a>

// ✅ SPRÁVNĚ
<a href="/page">
  <div>Text</div>
</a>
```

### Pravidlo 2: React Router `<Link>` je `<a>` tag
```tsx
// ❌ ŠPATNĚ
<Link to="/page">
  <a href="/other">Text</a>
</Link>

// ✅ SPRÁVNĚ
<Link to="/page">
  <button onClick={handleClick}>Text</button>
</Link>
```

### Pravidlo 3: Pokud celá karta je link, vnitřní CTA by nemělo být `<a>`
```tsx
// ✅ SPRÁVNĚ - design pattern pro clickable cards
<Link to="/detail">
  <div className="card">
    <h3>Nadpis</h3>
    <p>Popis</p>
    <div className="cta-button">
      Zobrazit detail  {/* Div, ne <a> */}
    </div>
  </div>
</Link>
```

---

## 🧪 Jak testovat:

1. Otevři DevTools → Console
2. Zkontroluj, že **warning zmizela**
3. Klikni na kartu služby → mělo by vést na detail
4. Hover nad kartou → měl by fungovat hover efekt

---

## ✅ Status: VYŘEŠENO!

Warning by již **neměla** být vidět v konzoli. Pokud přetrvává:

1. **Hard refresh** (Ctrl+Shift+R / Cmd+Shift+R)
2. **Clear cache** a reload
3. Zkontroluj, že používáš aktuální verzi `/components/ServiceCard.tsx`

---

**Hotovo!** 🎉
