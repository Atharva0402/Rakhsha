<?php
include "db_connect.php";

if(isset($_POST['post_id'])) {
    $post_id = $_POST['post_id'];

    $query = "DELETE FROM forum_posts WHERE id='$post_id'";

    if ($conn->query($query) === TRUE) {
        header("Location: myforum.html");  // redirect back to forum
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}
?>
