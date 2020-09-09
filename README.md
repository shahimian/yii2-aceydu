# Acey Ducey

This is a simulation of the Acey Ducey card game. In the game, the dealer (the computer) deals two cards face up. You have an option to bet or not to bet depending on whether or not you feel the next card dealt will have a value between the first two.
Your initial money is set to $100; you may alter Statement 170 if you want to start with more or less than $100. The game keeps going on until you lose all your money.

# Setup
Enter `composer shahimian\yii2-aceydu` and installing it and able to be run this module with this expression in `web.php` and that's it. enjoy it!

```php
$config = [
    'components' => [
    'modules' => [   
        'aceydu' => [
              'class' => 'shahimian\aceydu\Module',
              'layout' => 'main',
        ],
     ],
];
```

*Notice: This introduction of description is from 101 BASIC Computer Games book at 1975 by Digital Equipment Corporation.*
