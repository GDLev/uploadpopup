# ImageUploader Popup
![Screenshot](screenshots/firefox_pwhZpCaMm7.png )
### Sample backend (PHP)
```php
<?php
$namef = $_POST['fname'];
$filename = $_FILES['file']['name'];
$location = "upload/".$namef;


if ( move_uploaded_file($_FILES['file']['tmp_name'], $location) ) { 
  echo $namef; 
} else { 
  echo 'Failure'; 
}
?>
```
