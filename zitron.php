<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

class Zitron extends Theme
{

    public static function categories()
    {
        $options = Grav::instance()['config']->get('themes.zitron.categories');
        $categories = array();
        foreach ($options as $category) {
            $categories[$category] = $category;
        }
        return $categories;
    }

}