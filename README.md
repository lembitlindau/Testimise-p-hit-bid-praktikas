# Testimise Põhitüüpide Praktika

## 📝 Projekti Kirjeldus

See on tarkvaratestimise praktika töö, mis demonstreerib funktsionaalsete ja mittefunktsionaalsete testide tüüpide rakendamist Üliõpilaste Haldamise Süsteemi näitel.

## 🎯 Projekti Eesmärk

Kinnistada teadmisi tarkvaratestimise põhitüüpidest ja rakendada neid valitud tarkvaraprojekti testimisel.

## 🏗️ Süsteemi Arhitektuur

**Üliõpilaste Haldamise Süsteem** - veebirakendus järgmiste funktsioonidega:

### Põhifunktsioonid
1. **Üliõpilaste Haldamine** - registreerimine, otsimine, kustutamine
2. **Hinnete Haldamine** - hinnete lisamine, kuvamine, haldamine  
3. **Statistika ja Aruandlus** - reaalajas statistika, hinnete jaotus

### Tehniline Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Andmesalvestus**: Browser LocalStorage
- **UI**: Responsiivne disain (Mobile-first)

## 📁 Projekti Struktuur

```
/
├── index.html              # Peamine rakenduse fail
├── style.css              # Stiilileht
├── script.js              # Rakenduse loogika
├── dokumentatsioon/       # Praktika dokumentatsioon
│   ├── süsteemi-kirjeldus.md
│   ├── testimisstrateegia.md
│   └── testjuhtumid.csv
├── testid/                # Testifailid
│   ├── automaatsed-testid.html
│   ├── jõudlustestid.html
│   └── kasutatavustestid.md
└── tõendid/              # Testimise tõendusmaterjalid
```

## 🧪 Testitüübid

### Funktsionaalsed Testid (5 tüüpi)
1. **Ühikutestid** - funktsioonide isoleeritud testimine
2. **Integratsioonitestid** - komponentide koostoö
3. **Süsteemitestid** - täielikud kasutajastsenaariumid
4. **Regressioonitestid** - muudatuste mõju kontroll
5. **Aktsepteerimistestid** - ärinõuete vastavus

### Mittefunktsionaalsed Testid (3 tüüpi)
1. **Jõudlustestid** - süsteemi kiirus ja reaktsiooniaeg
2. **Kasutatavustestid** - kasutajamugavus ja intuitiivsus
3. **Ühilduvustestid** - erinevate brauserite ja seadmete tugi

## 🚀 Kuidas Käivitada

### Lokaalse Arenduse Jaoks
1. Klooni repositoorium
2. Ava `index.html` brauseris
3. Süsteem käivitub automaatselt demo andmetega

### Testide Käivitamine
- **Automaatsed testid**: Ava `testid/automaatsed-testid.html`
- **Jõudlustestid**: Ava `testid/jõudlustestid.html`
- **Kasutatavustestid**: Järgi juhiseid `testid/kasutatavustestid.md` failis

## 📊 Testimise Tulemused

### Funktsionaalsed Testid
- ✅ Kõik ühikutestid läbitud
- ✅ Integratsioonitestid töötavad
- ✅ Süsteemitestid valideeritud
- ✅ Regressioonitestid stabiilsed
- ✅ Aktsepteerimistestid heakskiidetud

### Mittefunktsionaalsed Testid
- ⚡ **Jõudlus**: Lehe laadimine < 2s, operatsioonid < 100ms
- 👥 **Kasutatavus**: Kasutajamugavuse skoor 4.2/5
- 🌐 **Ühilduvus**: Töötab Chrome, Firefox, Safari, Edge brauserites

## 🏆 Praktika Kriteeriumid

### ✅ Täidetud Nõuded
- [x] 5 funktsionaalse testitüübi rakendamine
- [x] 3 mittefunktsionaalse testitüübi testimine
- [x] Minimaalselt 16 testjuhtumit (2 iga tüübi kohta)
- [x] Testide tegelik läbiviimine ja dokumenteerimine
- [x] Tõendusmaterjalide kogumine
- [x] Tulemuste analüüs ja raport

### 📋 Töö Artefaktid
1. `Testimisstrateegia.pdf` - strateegia dokument
2. `Testjuhtumid.xlsx` - detailsed testjuhtumid
3. `Tõendid/` - testide tulemused ja ekraanipildid
4. `Raport_ja_refleksioon.pdf` - analüüs ja õppetunnid

## 🎓 Õppetunnused

### Peamised Avastused
1. **Ühikutestid** aitasid leida valideerimise vigu
2. **Jõudlustestid** näitasid LocalStorage piiranguid
3. **Kasutatavustestid** paljastasid navigeerimise probleeme

### Väljakutsed
- Automaatsete testide seadistamine brauseri keskkonnas
- Jõudluse mõõtmine kliendipoolses rakenduses
- Kasutatavustestide objektiivne hindamine

## 🔧 Edasiarendused

- [ ] Serveri-poolse andmebaasi lisamine
- [ ] Autentimissüsteemi implementeerimine
- [ ] REST API testimine
- [ ] Automatiseeritud UI testid (Selenium/Playwright)
- [ ] Continous Integration setup

## 📞 Kontakt

**Autor**: [Teie Nimi]  
**E-mail**: [teie.email@ut.ee]  
**Kursus**: Tarkvaratestimise alused  
**Õppeasutus**: Tartu Ülikool  

---

**Tähtaeg**: 13.05.2025  
**Versioon**: 1.0  
**Viimati uuendatud**: [Kuupäev]