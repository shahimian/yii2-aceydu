<?php
/**
 * Created by Notepad++
 * User: Shahimian
 * Date: 9/7/2020
 * Time: 11:05 PM
 */

namespace shahimian\aceydu;


use yii\web\AssetBundle;

class Assets extends AssetBundle
{

    public $sourcePath = "@vendor/shahimian/yii2-aceydu/assets";

    public $css = [
        'styles.css',
    ];
	
	public $js = [
		'js/main.js',
	];
	
	public $depends = [
		'yii\web\JqueryAsset',
	];

}
