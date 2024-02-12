<?php
	header("Content-type: text/xml);
	$names = array (
	"Abraham", "Bob", "Carrie", "Dike", "Elias", "Frank", "Grant", "Harold", "Ingrid", "Jake", "Kate", "Livia", "Matthew", "Nate", "Obrianna", "Perk", "Quintin", "Rachel", "Sally", "Tin-tin", "Uran", "Veran", "Warner", "X-man", "Yamen", "Z");
if (!$query) {
	$query=$_GET['query'];
}
echo "<?xml version=\"1.0\" ?>\n";
echo "<names>\n";
while (list($k, $v)=each($names)) {
	if (stristr($v,$query)) {
		echo "<name>&v</name>\n";
	}
}
echo "</names>\n";
?>