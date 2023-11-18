<?php
include "db_connect.php";

if(isset($_POST['post_content'])) {
    $content = $_POST['post_content'];
    $topic = $_POST['topic'];
    $author = $_POST['author'];

    $query = "INSERT INTO forum_posts (topic, content, author) VALUES ('$topic', '$content', '$author')";

    if ($conn->query($query) === TRUE) {
        header("Location: myforum.html");  // redirect back to forum
    } else {
        echo "Error: " . $query . "<br>" . $conn->error;
    }
}
?>
