<?php

	$db = mysqli_connect("localhost", "root", "root", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName FROM Employees ORDER BY LastName, FirstName";
	
	$rs = mysqli_query($db, $sql);
	
	echo "{
			\"method\": \"{$_SERVER['REQUEST_METHOD']}\"";
			
	while ($thisRow = mysqli_fetch_assoc($rs)) {
	
		echo ", \"employee_{$thisRow['EmployeeID']}\": \"{$thisRow['FirstName']} {$thisRow['LastName']}\"";
	
	};
	echo "}";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>