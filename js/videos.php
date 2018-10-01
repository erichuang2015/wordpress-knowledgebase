<?php


header("Content-type: text/javascript");
header('Expires: '.gmdate('D, d M Y H:i:s', time()+86400).' GMT');
$video_javascript = true;


switch($_GET['video']) {
	case '1':
	case '2':
	case '3':
	case '5':
	case '6':
	case '7':
	case '8':
		require('../../includes/videos/'.$_GET['video'].'.php');
		break;
}


exit();
?>