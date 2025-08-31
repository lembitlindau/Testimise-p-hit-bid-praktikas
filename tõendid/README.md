# Tõendusmaterjalide Juhend

See kaust sisaldab kõikide teostatud testide tõendusmaterjalid.

## 📁 Kausta Struktuur

```
tõendid/
├── funktsionaalsed-testid/
│   ├── yhikutestid/
│   │   ├── UT-001-email-valideerimine-success.png
│   │   ├── UT-002-email-valideerimine-fail.png
│   │   ├── UT-006-nimi-valideerimine-BUG.png
│   │   └── yhikutestide-tulemused.txt
│   ├── integratsioonitestid/
│   │   ├── IT-001-opilase-lisamine.png
│   │   ├── IT-002-hinde-seostamine.png
│   │   └── localStorage-test.png
│   ├── systeemitestid/
│   │   ├── ST-001-taiielik-registreerimine.gif
│   │   ├── ST-002-hinde-andmine.gif
│   │   └── brauseri-uuesti-laadimine.png
│   ├── regressioonitestid/
│   │   ├── RT-001-kustutamine-statistika.png
│   │   └── RT-002-mitme-operatsiooni-test.png
│   └── aktsepteerimistestid/
│       ├── AT-001-otsingu-test.png
│       └── AT-002-tagasiside-test.png
├── mittefunktsionaalsed-testid/
│   ├── joudlustestid/
│   │   ├── PT-001-lehe-laadimisaeg.png
│   │   ├── PT-002-suur-andmehulk-ISSUE.png
│   │   ├── performance-monitor.png
│   │   └── joudluse-raport.pdf
│   ├── kasutatavustestid/
│   │   ├── kasutaja1-sessioon.mp4
│   │   ├── kasutaja2-tagasiside.txt
│   │   ├── kasutaja3-kysimustik.pdf
│   │   └── kasutatavuse-kokkuvote.xlsx
│   └── yhilduvustestid/
│       ├── chrome-test.png
│       ├── firefox-test.png
│       ├── safari-test.png
│       ├── edge-test.png
│       ├── mobile-view.png
│       └── tablet-view.png
└── automaatsed-testid/
    ├── unit-tests-results.png
    ├── integration-tests-log.txt
    ├── performance-benchmark.png
    └── test-coverage-report.html
```

## 📸 Tõendite Kogumise Juhised

### Funktsionaalsed Testid

#### Ühikutestid
- **Ekraanipildid**: Iga testi tulemus (pass/fail)
- **Logifailid**: Console väljund vigade korral
- **Koodilõigud**: Testitud funktsioonide kood

#### Integratsioonitestid
- **Ekraanipildid**: Andmete liikumine komponentide vahel
- **LocalStorage dumps**: Salvestatud andmete näited
- **Network tab**: API kutsete jälgmine (kui rakendatav)

#### Süsteemitestid
- **Video salvestused**: Täielikud kasutajastsenaariumid
- **Step-by-step pildid**: Iga sammu dokumenteerimine
- **Browser DevTools**: Console vigade kontroll

### Mittefunktsionaalsed Testid

#### Jõudlustestid
- **Performance tab**: Chrome DevTools mõõtmised
- **Lighthouse raportid**: Üldine jõudluse hinnang
- **Memory heap snapshots**: Mälu kasutuse analüüs
- **Network timeline**: Ressursside laadimisajad

#### Kasutatavustestid
- **Video salvestused**: Kasutajate testimissessioonid
- **Audio kommentaarid**: "Think aloud" protokoll
- **Küsimustikud**: Täidetud tagasiside vormid
- **Ajastused**: Ülesannete täitmisajad

#### Ühilduvustestid
- **Ekraanipildid**: Süsteem erinevates brauserites
- **Responsive views**: Erinevad ekraanisuurused
- **CSS rendering**: Stiilide korrektne kuvamine
- **Functionality checks**: Funktsioonide töötamine

## 🏷️ Failinimede Konventsioonid

### Vormistus
```
[TestID]-[kirjeldus]-[staatus].[laiend]

Näited:
- UT-001-email-valideerimine-SUCCESS.png
- PT-002-suur-andmehulk-FAILED.png
- AT-001-kasutaja-otsing-WARNING.gif
```

### Staatused
- **SUCCESS**: Test läbitud edukalt
- **FAILED**: Test ebaõnnestus
- **WARNING**: Test läbitud, kuid hoiatused
- **BUG**: Avastatud viga
- **ISSUE**: Probleem, mis vajab uurimist

## 📋 Logifailide Vormistus

### Automaatsed Testid
```
[TIMESTAMP] [TEST_ID] [STATUS] [MESSAGE]

Näide:
2025-03-15 14:30:22 UT-001 PASS E-maili valideerimine töötab
2025-03-15 14:30:25 UT-006 FAIL Nimi valideerimise viga: lubab 1 märki
2025-03-15 14:30:30 IT-001 PASS Üliõpilane lisatud edukalt
```

### Käsitsi Testid
```
Test: [TEST_ID] - [Kirjeldus]
Kuupäev: [YYYY-MM-DD]
Tester: [Nimi]
Eeltingimused: [Kirjeldus]
Sammud:
1. [Samm 1]
2. [Samm 2]
...
Tulemus: [SUCCESS/FAILED]
Märkused: [Lisainfo]
```

## 📊 Raportite Genereerimine

### Automaatne Raportite Loomine
- HTML testiraportid
- Coverage raportid
- Performance benchmarks
- Lighthouse JSON ekspordid

### Käsitsi Raportite Koostamine
- Excel tabelid testitulemustega
- PDF dokumendid ekraanipiltidega
- Video kompilatsioone peamistest testidest

## 🔍 Kvaliteedikontroll

### Kontrollnimekiri
- [ ] Kõik testjuhtumid on dokumenteeritud
- [ ] Ekraanipildid on selged ja informatiivsed
- [ ] Video salvestused sisaldavad heli kommentaare
- [ ] Failinimed järgivad konventsioone
- [ ] Logifailid sisaldavad täielikku infot
- [ ] Vigade kirjeldused on detailsed

### Tõendite Valideerimine
Enne praktika esitamist kontrollige:
1. **Täielikkus**: Kõik testid on tõendatud
2. **Selgus**: Materjalid on arusaadavad
3. **Autentsus**: Tõendid on originaalsed
4. **Järjepidevus**: Vormistus on ühtne

---

**Märkus**: Reaalse praktika käigus tuleb see kaust täita vastavate tõendusmaterjalidega. Iga test peab olema visuaalselt või tekstiliselt dokumenteeritud.
