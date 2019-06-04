<?php get_header(); ?>
    <div class="row">
        <div class="col-sm-8 blog-main">
            <?php get_template_part('content', get_post_format()); ?>
        </div>
    </div>
<?php get_footer(); ?>