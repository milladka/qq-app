<?php
$target_dir = "uploads/";
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo 1;
    } else {
        echo 0;
    }
}