<?php

	$db = mysqli_connect("localhost", "root", "", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName FROM Employees ORDER BY LastName, FirstName";
	
	$rs = mysqli_query($db, $sql);
	
	echo "<h1>Employee Listing</h1>";
	echo "<p>[Request made by the {$_SERVER['REQUEST_METHOD']} method]</p>";
	echo "<ul>";
	while ($thisRow = mysqli_fetch_assoc($rs)) {
	
		echo "<li id=\"{$thisRow['EmployeeID']}\">{$thisRow['LastName']}, {$thisRow['FirstName']}</li>";
	
	};
	echo "</ul>";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>