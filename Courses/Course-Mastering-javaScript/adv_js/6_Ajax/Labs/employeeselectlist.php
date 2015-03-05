<?php

	$db = mysqli_connect("localhost", "root", "root", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName FROM Employees ORDER BY LastName, FirstName";
	
	$rs = mysqli_query($db, $sql);
	
	echo "<form>";
	echo "<select id=\"employeeList\" size=\"1\">";
	echo "<option value=\"0\">-- Choose One --</option>";
	while ($thisRow = mysqli_fetch_assoc($rs)) {
	
		echo "<option value=\"{$thisRow['EmployeeID']}\">{$thisRow['LastName']}, {$thisRow['FirstName']}</option>";
	
	};
	echo "</select>";
	echo "</form>";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>