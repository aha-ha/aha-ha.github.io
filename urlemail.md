# Urls und E-Mail-Adressen identifizieren mit PhP
## Code:
```php
<?php
$text = "Text";
 
$urlsuch[]="/([^]_a-z0-9-=\"'\/])((https?|ftp):\/\/|www\.)([^ \r\n\(\)\^\$!`\"'\|\[\]\{\}<>]*)/si";
$urlsuch[]="/^((https?|ftp):\/\/|www\.)([^ \r\n\(\)\^\$!`\"'\|\[\]\{\}<>]*)/si";
 
$urlreplace[]="\\1[URL]\\2\\4[/URL]";
$urlreplace[]="[URL]\\1\\3[/URL]";
 
$text = preg_replace($urlsuch, $urlreplace, $text);
 
 

 
$text = preg_replace("/\[URL\]www.(.*?)\[\/URL\]/si", "<a target=\"_blank\" href=\"http://www.\\1\">www.\\1</a>", $text);
 
$text = preg_replace("/\[URL\](.*?)\[\/URL\]/si", "<a target=\"_blank\" href=\"\\1\">\\1</a>", $text);
$emailsuch[]="/([\s])([_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,}))/si";
 
$emailsuch[]="/^([_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,}))/si";
$emailreplace[]="\\1[EMAIL]\\2[/EMAIL]";
$emailreplace[]="[EMAIL]\\0[/EMAIL]";
 
if (strpos($text, "@")){
    $text = preg_replace($emailsuch, $emailreplace, $text);
}

$text = preg_replace("/\[EMAIL\](.*?)\[\/EMAIL\]/si", "<a href=\"mailto:\\1\">\\1</a>", $text);
 
$text = preg_replace("/\[EMAIL=(.*?)\](.*?)\[\/EMAIL\]/si", "<a href=\"mailto:\\1\">\\2</a>", $text); 
 
 
echo $text;
```
 ### Beispiel:
 Der String _"https://github.com email@beispiel.de"_ ergibt folgende Ausgabe:
 _[https://github.com](https://github.com) [email@beispiel.de](mailto:email@beispiel.de)_
 Also in Html:
 ```html
<a target="_blank" href="https://github.com">https://github.com</a>
<a href="mailto:email@beispiel.de">email@beispiel.de</a>
```
