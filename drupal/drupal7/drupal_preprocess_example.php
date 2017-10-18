<?php

function template_preprocess_module_name(&$variables) {
    // use dpm($variables); to discover variable configurations to work with
  $thumbnail_url = isset($variables['item']['thumbnail']) ? $variables['item']['thumbnail'] : NULL;
	$style = 'feature_slick_slider_style';
  $alt = NULL;
	$title =  NULL;
	$height =  NULL;
	$width = NULL;

  if ($thumbnail_url !== NULL){
      if($file = file_load($thumbnail_url)){
        $uri = $file->uri;
        $thumbnail_url = file_uri_target($uri);

        $alt = (isset($file->field_file_image_alt_text['und']['0']['value'])) ? $file->field_file_image_alt_text['und']['0']['value'] : NULL;
				$title = (isset($file->field_file_image_title_text['und']['0']['value'])) ? $file->field_file_image_title_text['und']['0']['value'] : NULL;
				$height = (isset($file->height) ? $file->height : NULL);
				$width = (isset($file->width) ? $file->width : NULL);
      }
      else{
        $thumbnail_url = NULL;
      }
  }
  else{
    $thumbnail_url = NULL;
  }

  // Unset unneeded variables.
  unset($variables['item']);
  // Reset variables.
  $variables += array(
		'thumbnail' => array(
			'style_name' => $style,
			'path' => $thumbnail_url,
			'alt' => $alt,
			'title' => $title,
			'attributes' => array(
				'height' => $height,
				'width' => $width,
			),
		),
  );
}