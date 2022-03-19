# ImageUploader Popup
![](screenshots/2022-03-15-13-50-43-Trim.gif)
### Important
This project is not a ready-made photo sharing site! This is just a popup that you can add to your website. Of course, you can block the possibility of closing the popup and use the sample html page included in the project, but this is not a good solution... To display the popup, import all libraries (you will find them in the sample html file) and call the popup with the ```uploadFile();``` function

### Packages
* sweetalert2
* jQuery

The above libraries are already included in the project! you don't need to install them

### Backend
* this project is fully compatible with SimpleUploader created by kamehame-ha: ![Click!](https://github.com/kamehame-ha/simple-uploader)

* you can also use this sample PHP code:
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

### Support
All my codes are open source. If you want to support me, recommend my code or give a star to projects you like


