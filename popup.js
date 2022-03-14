
const  uploadsrc = "upload.php";
const successmsg = "Image has been successfully uploaded!";
const  formtitle = "Image uploader"



$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});
function uploadFile() {

Swal.fire({
  title: formtitle,
  html: `
  <input type="text" id="filename" class="swal2-input" placeholder="FileName">
  <div class="file-upload">
  <div class="image-upload-wrap">
    <input class="file-upload-input" type='file' onchange="readURL(this);" accept="image/*" />
    <div class="drag-text">
      <h3>Drag and drop a file<br>or click here</h3>
    </div>
  </div>
  <div class="file-upload-content">
    <img class="file-upload-image" src="#" alt="your image" />
    <div class="image-title-wrap">
      <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
    </div>
  </div>
</div>`,
  confirmButtonText: 'Send',
  focusConfirm: false,
  preConfirm: () => {
    const fname = Swal.getPopup().querySelector('#filename').value;
    const aimage = Swal.getPopup().querySelector('.file-upload-input').files[0];
    
    if (!fname || !aimage) {
      Swal.showValidationMessage(`Add more details`)
    } else {
    
    let formData = new FormData();
    formData.append('image', aimage);
    formData.append('mime_type', aimage.type);
    formData.append('fname', fname);
    
    image = fetch(uploadsrc, {
        method: "POST", 
        body: formData
     })
    
}
}
})
}

function readURL(input) {
  if (input.files && input.files[0]) {

    var reader = new FileReader();

    reader.onload = function(e) {
      $('.image-upload-wrap').hide();

      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();

      $('.image-title').html(input.files[0].name);
    };

    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
}
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
});
function send() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: successmsg,
      showConfirmButton: false,
      timer: 1400
    })
}
