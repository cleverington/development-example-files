# Drupal 7 - Drush 7.x and 8.x Commonly Used Commands

# Clear Caches
```
drush @group.site.env cc all
drush @group.site.env cc theme-registry
drush @group.site.env cc css-js
```
# Drush Create One-Time UID1 Login
```
drush @group.site.env uli
```
# Stop Aggregating JS & CSS and Turn On Theme Debugging
```
drush @group.site.env vset 'preprocess_js' 0
drush @group.site.env vset 'preprocess_css' 0
drush @group.site.env vset 'theme_debug' 1
drush @group.site.env cache-clear all
```
# Restart JS/CSS Aggregation and Turn Off Theme Debugging
```
drush @group.site.env vset 'preprocess_js' 1
drush @group.site.env vset 'preprocess_css' 1
drush @group.site.env vset 'theme_debug' 0
drush @group.site.env cache-clear all
```
# Set Admin Theme & Active/Default Theme
```
drush @group.site.env vset admin_theme seven
drush @group.site.env vset theme_default forty_acres
```
# Disable Maintenance Mode (Drupal 7)
```
drush @group.site.env -l @group.site.env vset --always-set maintenance_mode 1
drush @group.site.env -l @group.site.env cache-clear all
```
# Enable Mainteace Mode (Drupal 7)

```
drush @group.site.env -l @group.site.env vset --always-set maintenance_mode 0
drush @group.site.env -l @group.site.env cache-clear all
```
# Drush Perform Pending Updates
```
drush @group.site.env updb -y
```
# Drush Transfer files/ - Local to Remote
```drush @group.site.env rsync ~/local/path/sites/default/files @group.site.env:%files/
```
# Enable Module(s)
```
drush @group.site.env pm-enable module_name
drush @group.site.env pm-enable module_name_one module_name_two module_name_three
```
# Disable Module(s)
```
drush @group.site.env pm-disable module_name
drush @group.site.env pm-disable module_name_one module_name_two module_name_three
```
# Uninstall Module(s)
```
drush @group.site.env pm-uninstall module_name
drush @group.site.env pm-uninstall module_name_one module_name_two module_name_three
```
# Force GA Tag Manager
```
drush @group.site.env vset utexas_google_tag_manager_gtm_code 'GTM-1234567'
```

## Drush & Features

**NOTE** - Requires usage of Drupal 7's 'Features' module.

### List all available features
```
drush @group.site.env features-list
```
### Update a (or all) Feature(s) Code on Site when Configuration has changed (aka: Overridden)
```drush @group.site.env features-update name_of_feature
drush @group.site.env fu name_of_feature
drush @group.site.env features-update-all
```
### Revert Feature(s) to 'Code', and remove 'Overridden' Status
```drush @group.site.env features-revert name_of_feature
drush @group.site.env features-revert-all
drush @group.site.env fra
```
### Show Diff of Code vs Configuration (aka: Overridden)
```drush @group.site.env features-diff name_of_feature
drush @group.site.env fd name_of_feature
```