<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

function superfast_gutenblocks_assets() {
	wp_enqueue_script(
		'superfast_gutenblocks_js',

		//IN PRODUCTION put plugins_url( '/build/main.js', dirname( __FILE__ ) )
		'http://localhost:8000/main.js', 
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' )
	);
} 

add_action( 'enqueue_block_editor_assets', 'superfast_gutenblocks_assets' );
