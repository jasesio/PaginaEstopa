import "./script.ts";

document.cookie = "cookieName=value; SameSite=None; Secure";

var imagenes = document.querySelectorAll('.img-fluid');

imagenes.forEach(function(imagen) {
  imagen.addEventListener('mouseover', function() {
    imagen.style.border = '4px solid #ff0000';
  });
  imagen.addEventListener('mouseout', function() {
    imagen.style.border = '2px solid transparent';
  });
});
