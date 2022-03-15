# ImageUploader Popup
![](screenshots/2022-03-15-13-50-43-Trim.gif)

### Sample backend (PHP)
```php
// upload.php

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


#### Used packages:
* sweetalert2
* jQuery
