# ImageUploader Popup
![](screenshots/2022-03-15-13-50-43-Trim.gif)

### Sample backend (PHP)
```php
// upload.php

<?php
$namef = $_POST['fname'];
$location = "upload/".$namef;


if ( move_uploaded_file($_FILES['somefile']['tmp_name'], $location) ) { 
  echo $namef; 
} else { 
  echo 'Failure'; 
}
?>
```


### Used packages:
* sweetalert2
* jQuery

The above libraries are already included in the project! you don't need to install them

<span style="color:gray">this project is fully compatible with SimpleUploader created by kamehame-ha [![url](https://github.com/kamehame-ha/simple-uploader)]</span>
