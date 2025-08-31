# Üliõpilaste Haldamise Süsteemi Kirjeldus

## Süsteemi Ülevaade

Üliõpilaste Haldamise Süsteem on veebirakendus, mis võimaldab ülikooli personalil hallata üliõpilaste andmeid ja nende hinnet. Süsteem on loodud HTML5, CSS3 ja JavaScript tehnoloogiate abil ning kasutab brauseri LocalStorage andmete säilitamiseks.

## Põhifunktsioonid

### 1. Üliõpilaste Haldamine
- **Üliõpilaste registreerimine**: Võimaldab lisada uusi üliõpilasi süsteemi
- **Andmete valideerimine**: Kontrollib sisestatud andmete õigsust
- **Üliõpilaste otsimine**: Pakub otsingufunktsionaalsust
- **Üliõpilaste kustutamine**: Võimaldab eemaldada üliõpilasi andmebaasist

### 2. Hinnete Haldamine
- **Hinnete lisamine**: Võimaldab anda hinnet üliõpilastele erinevates ainetes
- **Hinnete valideerimine**: Kontrollib, et hinded on vahemikus 1-5
- **Hinnete kuvamine**: Näitab kõiki antud hinnet
- **Hinnete kustutamine**: Võimaldab eemaldada vale hinnet

### 3. Statistika ja Aruandlus
- **Üldstatistika**: Kuvab üliõpilaste arvu, keskmist hinnet ja läbimisprotsenti
- **Hinnete jaotus**: Visualiseerib hinnete jaotust graafikuna
- **Detailne statistika**: Näitab kõrgeimat/madalaimat hinnet, aktiivsemat üliõpilast jne

## Tehnilised Omadused

- **Kasutajaliides**: Responsiivne disain, mis töötab kõikides seadmetes
- **Andmete salvestamine**: LocalStorage kasutamine andmete säilitamiseks
- **Valideerimised**: Kliendipoolsed andmete kontrollid
- **Navigeerimine**: Ühelehekülje rakendus (SPA) navigeerimisega

## Kasutajate Tüübid

- **Administraator/Õppejõud**: Saab lisada, muuta ja kustutada üliõpilaste ning hinnete andmeid

## Süsteemi Eelised

- Lihtne ja intuitiivne kasutajaliides
- Kiire jõudlus (klient-server arhitektuur puudub)
- Automaatne andmete valideerimine
- Reaalajas statistika
- Offline töövõime (LocalStorage)

## Tuleviku Arendused

Süsteemi saab edasi arendada lisades:
- Serveri-poolse andmebaasi toe
- Kasutajate autentimist
- Eksport/import funktsionaalsusi
- Täiendavaid statistika vaateid
- E-maili teavitusi

---

*Loodud testimise praktika raames 2025. aastal*
