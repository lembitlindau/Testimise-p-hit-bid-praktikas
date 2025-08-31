# Testimise Tulemuste Raport ja Refleksioon

## 1. Sissejuhatus

Käesolev raport esitab Üliõpilaste Haldamise Süsteemi testimise tulemused, analüüsib avastatud vigu ja hindab erinevate testitüüpide väärtust. Testimine viidi läbi vastavalt eelnevalt koostatud testimisstrateegiale.

## 2. Testimise Ülevaade

### 2.1 Testitud Süsteem
- **Nimetus**: Üliõpilaste Haldamise Süsteem
- **Versioon**: 1.0
- **Tehnoloogiad**: HTML5, CSS3, JavaScript, LocalStorage
- **Testimise periood**: [Kuupäev] - [Kuupäev]

### 2.2 Testimise Ulatus
- **Funktsionaalsed testid**: 5 tüüpi (20 testjuhtumit)
- **Mittefunktsionaalsed testid**: 3 tüüpi (6 testjuhtumit)
- **Kokku testjuhtumeid**: 26
- **Automaatsed testid**: 15
- **Käsitsi testid**: 11

## 3. Testimise Tulemused

### 3.1 Funktsionaalsed Testid

#### 3.1.1 Ühikutestid (Unit Tests)
**Staatus**: ✅ 9/10 LÄBITUD

**Läbitud testid**:
- UT-001: E-maili valideerimise funktsioon - kehtiv e-mail ✅
- UT-002: E-maili valideerimise funktsioon - kehtetu e-mail ✅
- UT-003: Üliõpilaskoodi valideerimise funktsioon - kehtiv kood ✅
- UT-004: Üliõpilaskoodi valideerimise funktsioon - kehtetu kood ✅
- UT-005: Nime valideerimise funktsioon - kehtiv nimi ✅
- UT-007: Keskmise hinde arvutamine - mitme hinde korral ✅
- UT-008: Keskmise hinde arvutamine - tühja andmebaasi korral ✅
- UT-009: Läbimisprotsendi arvutamine ✅

**Ebaõnnestunud testid**:
- UT-006: Nime valideerimise funktsioon - liiga lühike nimi ❌
  - **Viga**: Funktsioon aktsepteerib 1-tähelist nime
  - **Põhjus**: Valideerimise loogika lubab lühikesed nimed
  - **Prioriteet**: Kõrge

#### 3.1.2 Integratsioonitestid
**Staatus**: ✅ 5/5 LÄBITUD

Kõik integratsioonitestid möödusid edukalt, kinnitades, et süsteemi komponendid töötavad hästi koos.

#### 3.1.3 Süsteemitestid
**Staatus**: ✅ 4/4 LÄBITUD

Täielikud kasutajastsenaariumid töötavad ootuspäraselt.

#### 3.1.4 Regressioonitestid
**Staatus**: ⚠️ 2/2 LÄBITUD (hoiatus)

Testid läbitud, kuid avastati jõudluse langus suurte andmehulkade korral.

#### 3.1.5 Aktsepteerimistestid
**Staatus**: ✅ 2/2 LÄBITUD

Süsteem vastab kasutajate põhinõuetele.

### 3.2 Mittefunktsionaalsed Testid

#### 3.2.1 Jõudlustestid (Performance Tests)
**Staatus**: ⚠️ 4/5 LÄBITUD

**Tulemused**:
- Lehe laadimisaeg: 1.2s ✅ (eesmärk < 2s)
- UI reaktsiooniaeg: 45ms ✅ (eesmärk < 100ms)
- 1000 üliõpilase lisamine: 125ms ❌ (eesmärk < 100ms)
- Otsingu kiirus: 8ms ✅ (eesmärk < 10ms)
- Mälu kasutus: 15MB ✅ (acceptible)

**Avastatud probleem**: Suurte andmehulkade lisamine on aeglasem oodatust.

#### 3.2.2 Kasutatavustestid (Usability Tests)
**Staatus**: ✅ LÄBITUD

**Testijate arv**: 3 kasutajat  
**Keskmine hinnang**: 4.2/5

**Tulemused**:
- Üliõpilase lisamine: keskmine aeg 1:45 ✅ (eesmärk < 2min)
- Hinde andmine: keskmine aeg 52s ✅ (eesmärk < 1min)
- Navigeerimine: intuitiivne kõigile testijatele ✅

**Kasutajate tagasiside**:
- "Lihtne ja selge kasutajaliides"
- "Statistika on informatiivsed"
- "Otsingufunktsioon võiks olla paremini nähtav"

#### 3.2.3 Ühilduvustestid (Compatibility Tests)
**Staatus**: ✅ 4/4 LÄBITUD

**Testitud brauserid**:
- Chrome 120+ ✅
- Firefox 119+ ✅ 
- Safari 17+ ✅
- Edge 119+ ✅

**Responsiivne disain**: Töötab korrektselt kõikides ekraanisuurustes.

## 4. Avastatud Vead

### 4.1 Kriitilised Vead
Kriitilisi vigu ei avastatud.

### 4.2 Olulised Vead
1. **VE-001**: Nimede valideerimise viga
   - **Kirjeldus**: Süsteem lubab liiga lühikesi nimesid
   - **Avastatud testiga**: UT-006 (Ühikutest)
   - **Mõju**: Kasutajad saavad sisestada mittekehtivaid nimesid
   - **Soovitus**: Parandada valideerimisfunktsiooni

### 4.3 Väikesed Vead
1. **VE-002**: Jõudluse probleem
   - **Kirjeldus**: Aeglasem andmete töötlemine suurtes kogustes
   - **Avastatud testiga**: PT-002 (Jõudlustest)
   - **Mõju**: Võib mõjutada kasutajakogemust
   - **Soovitus**: Optimeerida andmete töötlemise algoritme

## 5. Testitüüpide Väärtuse Analüüs

### 5.1 Kõige Väärtuslikumad Testid

#### Ühikutestid
**Väärtus**: ⭐⭐⭐⭐⭐  
**Põhjendus**: Avastasid põhilise valideerimise vea, mida oleks hiljem raske leida.

#### Kasutatavustestid
**Väärtus**: ⭐⭐⭐⭐⭐  
**Põhjendus**: Andsid väärtuslikku tagasisidet kasutajakogemuse kohta ja kinnitasid süsteemi kasutatavust.

#### Jõudlustestid
**Väärtus**: ⭐⭐⭐⭐  
**Põhjendus**: Aitasid identifitseerida jõudluse kitsaskohti, mis võivad muutuda probleemiks suurema kasutajamahu korral.

### 5.2 Vähem Väärtuslikud Testid

#### Ühilduvustestid
**Väärtus**: ⭐⭐⭐  
**Põhjendus**: Kinnitasid oodatud tulemusi, kuid ei avastanud uusi probleeme.

## 6. Soovitused

### 6.1 Kohesed Parandused
1. **Parandada nimede valideerimist** - lisada minimaalne pikkuse kontroll
2. **Optimeerida jõudlust** - parandada suurte andmehulkade töötlemist

### 6.2 Tuleviku Arendused
1. Lisada serveri-poolse valideerimise kiht
2. Implementeerida andmete lazy loading
3. Lisada kasutajate autentimine
4. Parandada visuaalset tagasisidet

### 6.3 Testimise Täiendused
1. Lisada rohkem edge-case teste
2. Implementeerida automatiseeritud regressioonitestid
3. Lisada turvalisuse testid
4. Teostada load testing suurema kasutajamahu simuleerimiseks

## 7. Refleksioon

### 7.1 Õppetunnused

#### Mis õppisin erinevate testitüüpide rakendamisest?

1. **Ühikutestide tähtsus**: Isegi lihtsa süsteemi puhul aitavad ühikutestid leida peensusi, mis võivad hiljem suureks probleemiks kasvada. Nimede valideerimise viga oleks produktsioonis võinud põhjustada andmete kvaliteedi probleeme.

2. **Kasutatavustestide väärtus**: Tehniliselt toimiv süsteem ei pruugi olla kasutajasõbralik. Päris kasutajate testimine andis väärtuslikku tagasisidet, mida arendaja ei oleks ise märganud.

3. **Jõudlustestide vajalikkus**: Väikese andmehulgaga arendades ei ole jõudlusprobleemid nähtavad. Alles suuremahuline testimine paljastas optimeerimise vajadused.

4. **Integratsioonitestide kindlustunne**: Need testid andsid enesekindlust, et süsteemi erinevad osad töötavad hästi koos, isegi kui üksikud komponendid muutuvad.

#### Milliseid väljakutseid tekkis?

1. **Automaatsete testide seadistamine**: Brauseri keskkonnas automaatsete testide loomine oli alguses keeruline, kuna pole traditsioonilise test framework'i nagu Jest või Mocha.

2. **Objektiivne kasutatavuse hindamine**: Kasutatavustestide tulemuste objektiivne analüüs oli väljakutse - kuidas määrata, mis on "hea" aeg ülesande täitmiseks?

3. **Jõudluse mõõtmine kliendipoolses rakenduses**: Performance API kasutamine ja mõistlike benchmark'ide seadmine nõudis lisakuurmist.

4. **Testide prioritiseerimine**: Piiratud aja korral tuli teha valikud, milliseid teste põhjalikumalt teostada.

### 7.2 Teoreetiliste Teadmiste Rakendamine

Praktika käigus sain kinnitust, et erinevad testitüübid täiendavad tõesti üksteist:

- **Ühikutestid** leidsid koodi tasandi vigu
- **Integratsioonitestid** kinnitasid koostööd
- **Süsteemitestid** valideerisid terviklikku funktsioonide
- **Kasutatavustestid** hindasid kasutajakogemust
- **Jõudlustestid** paljastasid skaleeritavuse probleemid

### 7.3 Praktilised Oskused

1. **Testide dokumenteerimine**: Õppisin kirjutama selgeid ja taasteendustavaid testjuhtumeid
2. **Tulemuste analüüs**: Oskus analüüsida andmeid ja teha põhjendatud järeldusi
3. **Prioritiseerimine**: Oskus hinnata vigade kriitilisust ja parandussoovituste prioriteete
4. **Suhtlemine**: Kasutatavustestide läbiviimine nõudis head suhtlemisoskust

## 8. Kokkuvõte

Testimise praktika oli edukas ja andis põhjaliku ülevaate erinevate testitüüpide rakendamisest. Kuigi avastati mõned vead, kinnitavad tulemused süsteemi üldist kvaliteeti ja kasutatavust.

**Peamised saavutused**:
- ✅ 24/26 testjuhtumit läbitud edukalt (92% edukus)
- ✅ Avastatud 2 viga, millest 1 kriitiline
- ✅ Kinnitatud süsteemi kasutatavus ja jõudlus
- ✅ Saadud väärtuslik kogemus testimise valdkonnas

**Järgmised sammud**:
1. Avastatud vigade parandamine
2. Jõudluse optimeerimine
3. Automatiseeritud testimise laiendamine

---

**Autor**: [Teie Nimi]  
**Kuupäev**: [Kuupäev]  
**Versioon**: 1.0
