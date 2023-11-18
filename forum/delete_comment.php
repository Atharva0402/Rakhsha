<?php
include "db_connect.php";

if(isset($_POST['comment_id'])) {
    $comment_id = $_POST['comment_id'];

    $query = "DELETE FROM comments WHERE id='$comment_id'";

    if ($conn->query($query) === TRUE) {
        header("Location: myforum.html");  // redirect back to forum
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}
?>
