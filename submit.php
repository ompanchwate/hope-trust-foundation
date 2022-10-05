<?php
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $suggestion = $_POST["suggestion"];

    //Database Connection
    $conn = new mysqli('localhost','root','','htf');
    if($conn->connect_error){
        die('connecton failed : '.$conn->connect_error);
    }else{
        $stmt = $conn->prepare("insert into suggestion(name,phone,email,suggestion) values(?,?,?,?)");
        $stmt->bind_param("ssss",$name,$phone,$email,$suggestion);
        $stmt->execute();
        echo"Suggestion submitted...";
        $stmt->close();
        $conn->close();
    }
?>
