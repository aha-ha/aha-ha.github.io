# Webserver erstellen

Hier erkläre ich, wie man einen einfachen Webserver erstellen kann.

Dieses Projekt funktioniert mit Windows und Linux.

Bitte alle Fehler an [ahawespe@gmail.com](mailto:ahawespe@gmail.com) mailen.

## 1.  Download

### Windows

Die Download-Datei ist [hier](https://github.com/aha-ha/webserver/raw/main/webserver.zip).

Bitte herunterladen, und entpacken.

### Linux

#### Webserver-Creator

Die Download-Datei ist [hier](https://github.com/aha-ha/webserver/raw/main/webserver_linux.zip)

Bitte herunterladen und entpacken.

#### Golang

Bitte das Terminal öffnen und folgendes mit Administratorrechten eingeben:

```shell
sudo apt install golang-go
```

Ohne Administratorrechte:

```shell
su -c 'sudo apt install golang-go' name
```

Dabei "name" durch einen Benutzernamen mit Administratorrechten ersetzen.

## 2. Vorbereitung

Die Datei "webserver.exe" bzw "webserver.go" in ein leeres Verzeichnis stellen.

Ein neues Verzeichnis mit dem Namen "data" erstellen.

Die Gewünschten Dateien in "data" kopieren.

Es sollte nun so aussehen:

```text
Hauptverzeichnis --
                   |
                   |- data -- 
                   |         | - Die Dateien für den Webserver
                   |
                   |
                   | - webserver.exe / webserver.go
```





## 3.  Webserver starten

### Windows

Das Hauptverzeichnis öffnen.

Rechte Maustaste und dann "Eingabeaufforderung hier öffnen" auswählen.

```shell
webserver.exe
```

eintippen.

Die Ausgabe wird ähnlich wie folgende aussehen:

```shell
Hallo!
Der Server wird erstellt...
Server fertig. Bitte öffne im Browser: localhost:8080 oder http://127.0.0.1:8080
```

Auf localhost:8080 oder [127.0.0.1:8080](http://127.0.0.1:8080) Können die Dateien eingesehen werden.

### Linux

Das Hauptverzeichnis öffnen.

Rechte Maustaste und dann "Im Terminal öffnen" auswählen.

```shell
go run webserver.go
```

eintippen.

Die Ausgabe wird ähnlich wie folgende aussehen:

```shell
Hallo!
Der Server wird erstellt...
Server fertig. Bitte öffne im Browser: localhost:8080 oder http://127.0.0.1:8080
```

Auf localhost:8080 oder [127.0.0.1:8080](http://127.0.0.1:8080) Können die Dateien eingesehen werden.

# Tipps

- Es geht auch mit Installiertem Python:

```shell
python -m http.server
```

- Der Quellcode kann [hier](https://github.com/aha-ha/webserver/blob/main/webserver.go) angesehen werden. Diese Datei wird auch (als Zip) bei der Linux-Variante verwendet.

- Aus der webserver.go kann bei installiertem Go ganz einfach eine webserver.exe-Datei machen:

  ```shell
  go build webserver.go
  ```

- Unter Windows kann man Go [hier](https://golang.org/dl/go1.16.3.windows-amd64.msi) installieren.
- Den Quellcode für Golang gibts [hier](https://golang.org/dl/go1.16.3.src.tar.gz)
- [Die Homepage von Golang](https://golang.org)