<?php

function tutsplus_register_post_type($singluar, $plural) {
    $args = array(
        'label' => $plural,
        'labels' => array(
            'name' => $plural,
            'singular_name' => $singluar,
            'add_new_item' => 'Add New Traveler',
            'edit_item' => 'Edit Traveler',
            'new_item' => 'New Traveler',
            'view_item' => 'View Traveler',
            'search_items' => 'Search Travelers',
            'not_found' => 'No Travelers',
        ),
        'description' => 'A post type used to provide information on Time Travelers',
        'public' => true,
        'show_ui' => true,
        'supports' => array(
            'title',
            'editor',
            'excerpt',
        ),
    );

    register_post_type('time_traveler', $args);
}

function tutsplus_action() {
    do_action('tutsplus_action');
}

// add_action('tutsplus_action', 'tutsplus_action_example');

// function tutsplus_action_example() {
//     echo 'This is a custom action hook';
// }

// add_action('admin_notices', 'tutsplus_admin_notice');
// function tutsplus_admin_notice() {
//     tutsplus_action();
// }

add_action('init', 'tutsplus_register_custom_post_type');
function tutsplus_register_custom_post_type() {
    do_action('tutsplus_register_custom_post_type', 10, 2);
}

add_action('tutsplus_register_custom_post_type', 'tutsplus_register_time_traveler_type');
function tutsplus_register_time_traveler_type() {
    tutsplus_register_post_type('Time Traveler', 'Time Travelers');
}

function wpmu_register_post_type() {
    $labels = array( 
        'name' => __( 'Favorite Things' ),
        'singular_name' => __( 'Favorite Thing' ),
        'add_new' => __( 'New Favorite Thing' ),
        'add_new_item' => __( 'Add New Favorite Thing' ),
        'edit_item' => __( 'Edit Favorite Thing' ),
        'new_item' => __( 'New Favorite Thing' ),
        'view_item' => __( 'View Favorite Things' ),
        'search_items' => __( 'Search Favorite Things' ),
        'not_found' =>  __( 'No Favorite Things Found' ),
        'not_found_in_trash' => __( 'No Favorite Things found in Trash' ),
    );
    $args = array(
        'labels' => $labels,
        'has_archive' => true,
        'public' => true,
        'hierarchical' => false,
        'supports' => array(
            'title', 
            'thumbnail',
            'page-attributes'
        ),
    );
    register_post_type( 'favorite', $args );
    
}

add_action('init', 'wpmu_register_post_type');

function wpmu_add_favorite_metabox() {
	add_meta_box( 'wpmu_metabox_id', 'Why I Love It', 'wpmu_metabox_callback', 'favorite', 'normal', 'high' );
}
add_action( 'add_meta_boxes', 'wpmu_add_favorite_metabox' );

function wpmu_metabox_callback($post) {
    echo '<form action="" method="post">';

		wp_nonce_field( 'wpmu_metabox_nonce', 'wpmu_nonce' );
		
		//best field - fetch value if it exists
		$bestValue = get_post_meta( $post->ID, 'Best Thing', true );
		echo '<p>';
			echo '<label for "part1">Best thing about it: </label>';				
			echo '<p><textarea rows="3" cols="80" name="best" value=' . $bestValue . '>' . $bestValue . '</textarea></p>';
		echo '</p>';

		//worst field - fetch value if it exists
		$worstValue = get_post_meta( $post->ID, 'Downside', true );
		echo '<p>';
			echo '<label for "part2">Worst thing about it: </label>';				
			echo '<p><textarea rows="3" cols="80" name="worst" value=' . $worstValue . '>' . $worstValue . '</textarea></p>';
		echo '</p>';
		
	echo '</form>';
}

function wpmu_save_my_meta( $post_id ) {

	//check for nonce
	if( !isset( $_POST['wpmu_nonce'] ) ||
	!wp_verify_nonce( $_POST['wpmu_nonce'], 'wpmu_metabox_nonce' ) ) {
        return;
	}
	
	// Check if the current user has permission to edit the post.
	if ( !current_user_can( 'edit_post', $post->ID ) ) {
        return;
	}
	
	// best field - save data
	if ( isset( $_POST['best'] ) ) {		
		$new_value = ( $_POST['best'] );
		update_post_meta( $post_id, 'Best Thing', $new_value );		
	}
	
	// part 2 field - save data
	if ( isset( $_POST['worst'] ) ) {		
		$new_value = ( $_POST['worst'] );
		update_post_meta( $post_id, 'Downside', $new_value );		
	}

	
}
add_action( 'save_post', 'wpmu_save_my_meta' );

function wpmu_output_favorite() {
    if(is_page('22')) {
        // run the query and fetch the data - store it in an array of variables
        $args = array(
            'post_type' => 'favorite',
            'posts_per_page' => 3,
            'orderby' => 'rand'
        );
        if ( isset( $_GET['new_favorite'] ) ) {
            $args['meta_query'][0]['compare'] = '<';
        }
        $query = new WP_query ( $args );
        
        if ( $query->have_posts() ) {
            $currentpost = 0;
            
            while ( $query->have_posts() ) : $query->the_post();

            $favorite[$currentpost] = get_the_title();
            $best[$currentpost] = get_post_meta( get_the_ID(), 'Best Thing', true );
            $worst[$currentpost] = get_post_meta( get_the_ID(), 'Downside', true );

            $currentpost++;

            endwhile;
                    
            wp_reset_postdata();
        }


        echo '<section class="container favorite">';

            echo '<h3>My Favorite Things:</h3>';
            echo '<p>Today&apos;s Favorite Things are <b>' . $favorite[0] . '</b> plus <b>' . $favorite[1] . '</b> and a bit of <b>' . $favorite[2] . '</b> . The upsides are ' . $best[0] . ' and ' . $best[1] . ', but the downside is ' . $worst[2] . '.</p>';
            echo '<span class="button"><a href="' . esc_attr( add_query_arg( 'new_favorite' ) ) . '">Discover More Favorites</a></span>';
            
        echo '</section>';
    }
}

add_action( 'bootstrap_starter_theme_before_primary', 'wpmu_output_favorite' );