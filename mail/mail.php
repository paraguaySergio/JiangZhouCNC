<head>
     <meta charset="UTF-8">
</head>
<?php
header("Content-type: text/html;charset=\"utf-8\"");

$nom = $_GET['nombres'];
$ape = $_GET['apellidos'];
$email = $_GET['email'];
$tel = $_GET['telefono'];
$msm = $_GET['mensaje'];



$header = 'From: '.$nom." " .$ape . "\r\n".
'Reply-To:'.$nom." " .$ape . "\r\n".
'X-Mailer: PHP/'.phpversion();

$mensaje = "CLIENTE: " . $nom ." ". $ape . " \r\n";
$mensaje .= "CORREO: " . $email . " \r\n";
$mensaje .= "TELÉFONO: " . $tel . " \r\n";
$mensaje .= "MENSAJE: ".$msm. " \r\n";


$para = 'contacto@maquinariascnc.com';

if (empty($nom) && empty($ape) && empty($tel) && empty($msm) ) {
  echo "<script>
    alert('Debe Llenar el formulario para poder enviar una Consulta...');
    window.location.href='https://www.maquinariascnc.com/';
  </script>";
}elseif(mail($para,"NUEVA CONSULTA - Desde maquinariascnc.com!",utf8_decode($mensaje), $header)){
echo "<script>alert('En seguida lo contáctaremos.');
        location.href='https://www.maquinariascnc.com/';
      </script>";
}
?>