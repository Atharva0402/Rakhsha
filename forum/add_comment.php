<?php
include "db_connect.php";

if(isset($_POST['post_id']) && isset($_POST['comment_content'])) {
    $post_id = $_POST['post_id'];
    $content = $_POST['comment_content'];
    $author = $_POST['author'];  // you might be pulling this from a session or another source

    $query = "INSERT INTO comments (post_id, author, content) VALUES ('$post_id', '$author', '$content')";

    if ($conn->query($query) === TRUE) {
        header("Location: myforum.html");  // redirect back to forum
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}
?>
