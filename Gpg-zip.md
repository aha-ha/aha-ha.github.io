# GPG Verschlüsselung für Windows und Linux

## 1. Installation (Nur für Windows):

[Gpg4win](https://www.gpg4win.de/thanks-for-download.html) herunterladen.

Installationsdatei (*.exe) öffnen.

Ohne Administratorrechte kommt folgendes Popup:

![Ohne Administratorrechte fortfahren](https://raw.githubusercontent.com/aha-ha/aha-ha.github.io/main/admingpg.png)

Mit "Ja" bestätigen, mit "weiter" fortfahren und nochmals mit "weiter" fortfahren.

Installieren.

## 2. Komandozeile öffnen:

### Linux:

Das Programm "Eingabeaufforderung" öffnen. (Menü->Suchen->Eingabeaufforderung)

### Windows:

cmd oder PowerShell öffnen. (Windows-Logo-Taste->Suche->PowerShell / cmd)

## 3. Dateien verschlüsseln

Alle Dateien in einen Ordner packen.

Das Programm befindet sich aktuell in: C:Users\Benutzername. Zum Verzeichnes navigieren mit:

```shell
cd Verzeichnis
```

Achtung: Nicht in den Ordner mit Dateien navigieren

Im Verzeichnis folgenden Code ausführen:

```shell

zip dateien.zip ordner/*
gpg -c -a dateien.zip
```

### Was ist Passiert?

Es wurde ein [Zip-Ordner](https://de.wikipedia.org/wiki/ZIP-Dateiformat) mit den Dateien erstellt, welcher verschlüsselt wird (mit dem Namen dateien.zip.asc).

## 4. Dateien entschlüsseln

Im Verzeichnis folgenden Code ausführen:

```shell
gpg dateien.zip.asc
unzip -l dateien.zip
```
# Links

 - [Die Shell-Dateien](https://github.com/aha-ha/verschluesseln-mit-gpg)
