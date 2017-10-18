<?php

// Local development configuration.
// 'host' should be 127.0.0.1, not localhost
// 'port' should be the active MYSQL port
if (!defined('PANTHEON_ENVIRONMENT')) {
  // Database.
  $databases['default']['default'] = array(
    'database' => 'db',
    'username' => 'drupal',
    'password' => 'drupal',
    'host' => '127.0.0.1',
    'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
    'driver' => 'mysql',
    'port' => 3306,
    'prefix' => '',
  );
}

if (!isset($config_directories)) {
$config_directories = array();
}

// To get Pantheon Hash-Salt (Not needed, but fun)
// terminus drush <site>.<env> -- en 'return getenv("DRUPAL_HASH_SALT")'

// Assign a Temporary Hash_Salt, if working Locally
if (!array_key_exists('hash_salt', $settings) || is_null($settings['hash_salt'])) {
  $settings['hash_salt'] = 'local_hash_salt_change_for_production';
}



// Local Development Testing, Logging, etc.
$config['system.logging']['error_level'] = 'verbose';
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;
$settings['extension_discovery_scan_tests'] = TRUE;
$settings['rebuild_access'] = TRUE;
$settings['skip_permissions_hardening'] = TRUE;
