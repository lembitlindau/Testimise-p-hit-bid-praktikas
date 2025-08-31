# Testimisstrateegia - Üliõpilaste Haldamise Süsteem

## 1. Sissejuhatus

Käesolev dokument kirjeldab Üliõpilaste Haldamise Süsteemi testimisstrateegiat, mis hõlmab nii funktsionaalseid kui mittefunktsionaalseid testide tüüpe. Strateegia eesmärk on tagada süsteemi kvaliteet, töökindlus ja kasutajamugavus.

## 2. Funktsionaalsed Testitüübid

### 2.1 Ühikutestid (Unit Testing)
**Eesmärk**: Kontrollida üksikute funktsioonide ja meetodite õigset toimimist isoleeritult.
- Valideerimisfunktsioonide kontrollimine (e-mail, nimi, üliõpilaskood)
- Arvutuslike funktsioonide testimine (keskmine hinne, läbimisprotsent)
- **Põhjendus**: Tagab, et kõik põhilised funktsioonid töötavad oodatult

### 2.2 Integratsioonitestid (Integration Testing)
**Eesmärk**: Kontrollida erinevate süsteemi osade koostööd ja andmevoogu.
- LocalStorage ja JavaScript koostoö
- Vormide ja andmete töötlemise integratsioon
- **Põhjendus**: Tagab, et süsteemi komponendid suhtlevad õigesti omavahel

### 2.3 Süsteemitestid (System Testing)
**Eesmärk**: Kontrollida terve süsteemi toimimist kasutaja vaatenurgast.
- Täielike kasutajastsenaariumide läbimine
- Kõigi põhifunktsioonide end-to-end testimine
- **Põhjendus**: Tagab süsteemi töötamise reaalses kasutuskeskkonnas

### 2.4 Regressioonitestid (Regression Testing)
**Eesmärk**: Kontrollida, et uued muudatused ei riku olemasolevat funktsionaalsust.
- Põhifunktsioonide korduvtestimine pärast muudatusi
- Kriitiliste kasutajateekondade kontroll
- **Põhjendus**: Tagab süsteemi stabiilsuse muudatuste tegemisel

### 2.5 Aktsepteerimistestid (Acceptance Testing)
**Eesmärk**: Kontrollida, kas süsteem vastab kasutajate vajadustele ja nõuetele.
- Lõppkasutaja stsenaariumide kontrollimine
- Äriloogika vastavuse testimine
- **Põhjendus**: Tagab, et süsteem täidab oma eesmärki kasutaja vaatenurgast

## 3. Mittefunktsionaalsed Testitüübid

### 3.1 Jõudlustestid (Performance Testing)
**Eesmärk**: Kontrollida süsteemi jõudlust erinevates koormuse tingimustes.
- Lehe laadimise kiiruse mõõtmine
- Suurte andmehulkade töötlemise testimine
- **Põhjendus**: Tagab kasutajamugavuse ja süsteemi reaktsioonikiiruse

### 3.2 Kasutatavustestid (Usability Testing)
**Eesmärk**: Hinnata süsteemi kasutajamugavust ja intuitiivsust.
- Kasutajaliidese selguse kontrollimine
- Navigeerimise lihtsuse testimine
- **Põhjendus**: Tagab, et süsteem on kasutajasõbralik ja tõhus

### 3.3 Ühilduvustestid (Compatibility Testing)
**Eesmärk**: Kontrollida süsteemi toimimist erinevates keskkondades.
- Erinevate brauserite tugi (Chrome, Firefox, Safari, Edge)
- Responsiivse disaini testimine erinevates seadmetes
- **Põhjendus**: Tagab süsteemi töötamise kõigis target-keskkondades

## 4. Testimise Lähenemisviis

### Testimise Prioriteedid
1. **Kriitilised funktsioonid**: Üliõpilaste lisamine, hinnete sisestamine
2. **Andmete terviklikkus**: Valideerimised, salvestamine
3. **Kasutajamugavus**: Navigeerimine, tagasiside

### Automaatne vs Käsitsi Testimine
- **Automaatne**: Ühikutestid, lihtsamad integratsioonitestid
- **Käsitsi**: Kasutatavustestid, visuaalsed kontrollid, kompleksemad stsenaariumid

### Testimise Keskkonnad
- **Arenduskeskkond**: Esmane funktsionaalsuse kontroll
- **Testikeskkond**: Täielik testimine enne produktsiooni
- **Erinevad brauserid**: Ühilduvuse tagamiseks

## 5. Riski Analüüs

### Kõrge Risk
- Andmete kadumine LocalStorage rikke korral
- Valideerimiste möödalaskmine
- Brauserite ühilduvuse probleemid

### Madal Risk
- Visuaalsed disaini probleemid
- Väike jõudluse langus

## 6. Kriteeriume Läbimiseks

- Kõik kriitilised testjuhtumid peavad läbi minema
- Mitte ühtegi blokeerivat viga ei tohi olla
- Süsteem peab töötama kõigis põhilistes brauserites
- Kasutajamugavuse skoor peab olema vähemalt 4/5

---

*Koostatud: [Kuupäev]*  
*Autor: [Nimi]*  
*Versioon: 1.0*
