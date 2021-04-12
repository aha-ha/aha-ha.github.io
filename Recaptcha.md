# reCAPTCHA v3 mit Html, JavaScript und PHP einbinden

## Ein Google-reCAPTCHA erstellen

#### Die Admin Console öffnen

Ein neues Recaptcha kann man [hier](https://www.google.com/recaptcha/admin/create) erstellen.

Das Label sollte gut wiedererkennbar sein. (z.B. Login Aha-Ha).

Als reCAPTCHA-Typ sollte Version 3 ausgewählt werden. Eine Demo zu Version 3 gibt es [hier](https://recaptcha-demo.appspot.com/recaptcha-v3-request-scores.php).

Nun die Domain eintragen. (z.B. für localhost: 127.0.0.1).

Die Nutzungsbedingungen müssen akzeptiert werden.

Nach dem Absenden bekommt man nun 2 Schlüssel: Einen Websiteschlüssel und einen Geheimen Schlüssel.

#### HTML und JavaScript

Das HTML-Formular mit JavaScript:

```html
<form action="dieseseite.php" method="post">
	
	<input type="text" name="name" id="name" placeholder="Vor- und Nachname"><br>
	<input type="date" name="date" id="date" placeholder="Datum"><br>
	<input type="time" name="time" id="time" placeholder="Uhrzeit"><br>
	<input type="email" name="email" id="email" placeholder="E-Mail Adresse"><br>
	<input type="hidden" name="token" id="token">
	<button type="submit" name="check" id="checkbutton">Daten überprüfen...</button><br>
	<button type="submit" name="submit" id="submit" disabled>Termin vereinbaren!</button>
</form>
<!-- Google JS-Api holen -->
<script src="https://www.google.com/recaptcha/api.js?render=Websiteschlüssel"></script>
   <script>
   		document.getElementById("checkbutton").addEventListener('click', function(e){
   			console.log("click", e)
        	e.preventDefault();
        	grecaptcha.ready(()=>{    	
          		grecaptcha.execute('Websiteschlüssel', {action: 'submit'}).then(
          			(token)=>{
            			document.getElementById("token").value = token;
            			document.getElementById("submit").disabled = false;
            			document.getElementById("checkbutton").disabled = true;
            });
        });
      })
    document.getElementById("submit").addEventListener('click', console.log);
  </script>
```

#### PHP

Bei diesem Formular muss "dieseseite.php" durch den Namen der aktuellen Website ersetzt werden.

```php
if(isset($_POST["submit"])){
	    	$request = file_get_contents("https://www.google.com/recaptcha/api/siteverifysecret=Geheimschlüssel&response=".$_POST["token"]);
	    	$request = json_decode($request);
    $score = $request->score;
    $timestamp = $request->challenge_ts;
```

Danach ist die Variable "$score" auf den Recaptcha-Score gesetzt. Also ein [float](https://www.php.net/manual/de/language.types.float.php) zwischen 0.0 und 1.0.

Je niedriger die Zahl, umso größer ist die Warscheinlichkeit, dass ein Roboter das Formular abgesendet hat.

Die Variable "$timestamp" ist auf den Zeitstempel der Anfrage an Google gesetzt.

#### Das fertige Programm mit E-Mail-Benachrichtigung

```php+HTML
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Termin vereinbaren | Café Treu | Araco</title>
</head>
<body>



	    <?php
	    if(isset($_POST["submit"])){
	    	$request = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=Geheimschlüssel&response=".$_POST["token"]);
	    	$request = json_decode($request);
	    	
	    	
	    		if ($request->score >= 0.6) {
	    			 mail("E-Mail@beispiel.de", "Neuer Termin", 'Name: '.$_POST["name"].' Email: '.$_POST["email"].' Datum: '.$_POST["date"].' Uhrzeit: '.$_POST["time"].' Score: '.$request->score.' Timestamp: '.$request->challenge_ts);

     
      ?>
      <h1 style="color: green;">Das Terminformular wurde erfolgreich abgesendet!</h1>
      <?php
    }            
        } 
    
     ?>

<form action="termin.php" method="post">
	
	<input type="text" name="name" id="name" placeholder="Vor- und Nachname"><br>
	<input type="date" name="date" id="date" placeholder="Datum"><br>
	<input type="time" name="time" id="time" placeholder="Uhrzeit"><br>
	<input type="email" name="email" id="email" placeholder="E-Mail Adresse"><br>
	<input type="hidden" name="token" id="token">
	<button type="submit" name="check" id="checkbutton">Daten überprüfen...</button><br>
	<button type="submit" name="submit" id="submit" disabled>Termin vereinbaren!</button>
</form>
<!-- Google JS-Api holen -->
<script src="https://www.google.com/recaptcha/api.js?render=Websiteschlüssel"></script>
   <script>
   		document.getElementById("checkbutton").addEventListener('click', function(e){
   			console.log("click", e)
        	e.preventDefault();
        	grecaptcha.ready(()=>{    	
          		grecaptcha.execute('Websiteschlüssel', {action: 'submit'}).then(
          			(token)=>{
            			document.getElementById("token").value = token;
            			document.getElementById("submit").disabled = false;
            			document.getElementById("checkbutton").disabled = true;
            });
        });
      })
    document.getElementById("submit").addEventListener('click', console.log);
  </script>


</body>
</html>
```

#### Ergebnis

Das Ergebnis kommt in JSON-Format zurück:

```json
{
  "success": true,
  "hostname": "127.0.0.1",
  "challenge_ts": "2000-00-00T00:00:00Z",
  "apk_package_name": null,
  "score": 0.9,
  "action": "examples/v3scores",
  "error-codes": []
}
```



#### Vorteile

- Spam-Roboter werden keine Formulare absenden

#### Nachteile

- Google setzt auf der Website Cookies.

## Links



- [Google Developers](https://developers.google.com/recaptcha/docs/v3)
- [Ausführliche Anleitung von Tutorialwork auf Youtube](https://youtu.be/0vNM4_quSWA)
- [Das dazugehörige Kontaktformular](https://youtu.be/YuNVWBDSgnU)
- [Die Dateien auf GitHub](https://github.com/Tutorialwork/Tutorials/blob/master/PHP%20reCAPTCHA%20v3/index.php)
- [reCAPTCHA](https://google.com/recaptcha/about)