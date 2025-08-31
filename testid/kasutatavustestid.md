# Kasutatavustestide Plaan

## Testimise Eesmärk
Hinnata Üliõpilaste Haldamise Süsteemi kasutajamugavust ja intuitiivsust.

## Testpersonad

### Persona 1: Õppejõud Mari (45 a)
- **Taustinfo**: Keskmine IT-oskused, kasutab arvutit igapäevaselt
- **Eesmärk**: Lisada üliõpilasi ja hinnata neid
- **Ootused**: Lihtne, intuitiivne kasutajaliides

### Persona 2: Administraator Jaan (32 a)
- **Taustinfo**: Head IT-oskused, kasutab mitmeid süsteeme
- **Eesmärk**: Hallata andmeid ja genereerida raporteid
- **Ootused**: Kiire töövoog, detailne informatsioon

## Kasutatavustestide Stsenaariumid

### Stsenaarium 1: Uue üliõpilase registreerimine
**Ülesanne**: "Registreerige süsteemi uus üliõpilane nimega Anna Kask, e-mail anna.kask@ut.ee, üliõpilaskood 234567"

**Mõõdikud**:
- Aeg ülesande täitmiseks (eesmärk: < 2 minutit)
- Vigade arv
- Abi vajamise sagedus
- Kasutaja rahulolu (1-5 skaalal)

**Vaatlusküsimused**:
- Kas kasutaja leiab kiiresti üliõpilaste lisamise vormi?
- Kas vorm on selgelt märgistatud?
- Kas valideerimisveated on arusaadavad?

### Stsenaarium 2: Hinde lisamine
**Ülesanne**: "Andke üliõpilasele Anna Kask hinne 4.5 aines Matemaatika tänase kuupäeva kohta"

**Mõõdikud**:
- Aeg ülesande täitmiseks (eesmärk: < 1 minut)
- Kas kasutaja leiab õige üliõpilase?
- Kas hinde sisestamine on intuitiivne?

### Stsenaarium 3: Statistika vaatamine
**Ülesanne**: "Leidke süsteemi keskmine hinne ja vaadake hinnete jaotust"

**Mõõdikud**:
- Navigeerimise kiirus
- Informatsiooni leidmise aeg
- Graafikute arusaadavus

### Stsenaarium 4: Üliõpilase otsimine
**Ülesanne**: "Leidke üliõpilane nimega Anna ja vaadake tema andmeid"

**Mõõdikud**:
- Otsinguaja efektiivsus
- Tulemuste selgus
- Kasutajamugavus

## Testimise Protokoll

### Ettevalmistus
1. Valmista ette test andmetega täidetud süsteem
2. Selgita testijale üldist konteksti (ilma spetsiifiliste juhendideta)
3. Paluge testijal "mõelda valjusti"

### Testimise Käik
1. Anna ülesanne selgelt ette
2. Ära anna lisakinnitusi ega abi
3. Märgi üles:
   - Kasutaja tegevused
   - Vigade kohad
   - Ebakõhkumised
   - Kommentaarid

### Andmete Kogumine
- **Kvantitavne**: Ajad, klikkide arv, vigade arv
- **Kvalitatiivne**: Kasutaja kommentaarid, emotsioonid, soovitused

## Testimise Küsimustik (pärast testi)

### Üldised küsimused
1. Kuidas hindate süsteemi üldist kasutajamugavust? (1-5)
2. Mis oli kõige lihtsam süsteemis?
3. Mis valmistas raskusi?
4. Mida muudaksite süsteemis?

### Spetsiifilised küsimused
1. Kuidas hindate navigeerimist? (1-5)
2. Kas vormid olid selged ja arusaadavad? (Jah/Ei)
3. Kas vigade teateid oli piisavalt? (Jah/Ei)
4. Kas statistika oli informatiivsed? (Jah/Ei)

### Soovitused
"Kirjeldage kolme peamist parandust, mida sooviksite süsteemis näha"

## Tulemuste Analüüs

### Edukuse kriteeriumid
- **Väga hea** (5p): Kõik ülesanded täidetud alla eesmärgiaja, 0-1 viga
- **Hea** (4p): Enamik ülesandeid täidetud õigel ajal, 2-3 viga
- **Keskmine** (3p): Ülesanded täidetud, kuid aeglaselt või mitme veaga
- **Halb** (1-2p): Ülesandeid ei suudetud lõpule viia

### Analüüsitavad aspektid
1. **Efektiivsus**: Aeg ülesannete täitmiseks
2. **Tõhusus**: Vigade arv ja abi vajamise sagedus
3. **Rahulolu**: Kasutaja tagasiside ja hinnangud
4. **Õpitavus**: Kas kasutaja õpib kiiresti süsteemi kasutama

## Raporti Vorm

### Kokkuvõte
- Testijate arv
- Üldine edukuse määr
- Peamised leitud probleemid

### Detailsed tulemused
- Iga stsenaariumi tulemused
- Kasutajate kommentaarid
- Kvantitavne analüüs

### Soovitused
- Prioritiseeritud parandusettepanekud
- Kiired parandused
- Pikaajalised arendusvajadused

---

**Tähtis**: Kasutatavusteste tuleb läbi viia vähemalt 3 erinevate kasutajaga, et saada usaldusväärset tagasisidet.
