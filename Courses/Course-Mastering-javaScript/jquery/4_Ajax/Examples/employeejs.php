<?php

	$db = mysqli_connect("localhost", "root", "", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName FROM Employees WHERE EmployeeID = 5";
	
	$rs = mysqli_query($db, $sql);
	
	$thisRow = mysqli_fetch_assoc($rs);
	
	echo "function notify() {alert('{$thisRow['FirstName']} {$thisRow['LastName']} is employee number {$thisRow['EmployeeID']}.');}";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>