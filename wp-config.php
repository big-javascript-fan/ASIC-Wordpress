<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'asic' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ',)J6zD|:,u]A00{e(>71Nk<G(8z2gc||myRaO:m4_Rte&jip09<feRATvPecsfp[' );
define( 'SECURE_AUTH_KEY',  '<ibJR|m>h&E0*BN7;&1Fo:j<)71cEOl;x_Fv5m15KHNQl ~iPw&+MYWh[X04;Ds&' );
define( 'LOGGED_IN_KEY',    'Df<Z9fr965qK^~gS/u@||M J|EUw,lUcR2g)j6k;[c*z&ttJk(,a>5*N#=!Bp7!2' );
define( 'NONCE_KEY',        'cwnsRgC;M[3RKIbq9>^o:Lg@=pC;;i. hl/;AZFjvN}b]iWg.E|*!z:Wj|RGqu%#' );
define( 'AUTH_SALT',        'hdbO:nJ5G;uyrHdX<|NYCJ$^d5!H_t?]onU`hBQ@a5 1lJHj&C[YX_t053OW+hz~' );
define( 'SECURE_AUTH_SALT', 'Z 0W?1MR> tGn)o2JgcpMT}]pgzNBv~so I4N}IrnstgO}~4[zP6`z?LAZX=@FB&' );
define( 'LOGGED_IN_SALT',   '9e&S?0l|AnIjAVyLqjosm8= 3L)5jzTTA!{}RL[OH!5$=n}NF<5gfze XpZn.f~w' );
define( 'NONCE_SALT',       't:thq4y}!33[T0xq]:<UN+l/]V?=8U3:HVn~fqxG$j 6X0k0x|avA!=@}^.CSAzF' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
