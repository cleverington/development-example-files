<?php

$databases['default']['default'] = array(
  'driver' => 'mysql',
  'database' => 'db',
  'username' => 'drupal',
  'password' => 'drupal',
  'host' => 'localhost',
  'prefix' => '',
  'collation' => 'utf8_general_ci',
);

// Never enable on Production
$conf['theme_debug']=TRUE;
