<?php
include "db_connect.php";
?>

<h2>Forum Posts</h2>
<div class="forum-section">

<?php
$query = "SELECT * FROM forum_posts";
$post_result = $conn->query($query);

if ($post_result && $post_result->num_rows > 0) {
    while($post = $post_result->fetch_assoc()) {
        ?>

        <div class="forum-post">
            <div class="post-header">
                <img src="path_to_images/<?php echo $post['author_img']; ?>" alt="<?php echo $post['author']; ?> Avatar"> <!-- assuming you have a column 'author_img' for author images -->
                <h3><?php echo $post['author']; ?></h3>
            </div>
            <div class="post-content">
                <h4>Topic: <?php echo $post['topic']; ?></h4>
                <p><?php echo $post['content']; ?></p>
            </div>
            <div class="post-comments">
                <h4>Comments</h4>

                <?php
                $comment_query = "SELECT * FROM comments WHERE post_id='" . $post['id'] . "'";
                $comment_result = $conn->query($comment_query);
                if($comment_result && $comment_result->num_rows > 0) {
                    while($comment = $comment_result->fetch_assoc()) {
                        ?>

                        <div class="comment">
                            <img src="path_to_comment_images/<?php echo $comment['author_img']; ?>" alt="<?php echo $comment['author']; ?> Avatar"> <!-- assuming you have a column 'author_img' for comment author images -->
                            <h3><?php echo $comment['author']; ?> :</h3>
                            <p><?php echo $comment['content']; ?></p>
                        </div>

                        <?php
                    }
                } else {
                    echo "<p>No comments yet.</p>";
                }
                ?>

            </div>
            <button id="add-post-button">Add Post</button>
            <button class="remove-post-button">Remove Post</button> 
        </div>

        <?php
    }
}
?>

</div>
