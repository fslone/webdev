<?php

	$db = mysqli_connect("localhost", "root", "", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName, Title, Email FROM Employees ORDER BY LastName, FirstName";
	
	$rs = mysqli_query($db, $sql);
	
	Header("Content-type: text/xml");
	
	echo "<employees>";
	
	while ($thisRow = mysqli_fetch_assoc($rs)) {
	
		echo "<employee id=\"{$thisRow['EmployeeID']}\">";
		echo "<firstname>{$thisRow['FirstName']}</firstname>";
		echo "<lastname>{$thisRow['LastName']}</lastname>";
		echo "<title>{$thisRow['Title']}</title>";
		echo "<email>{$thisRow['Email']}</email>";
		echo "</employee>";
	
	};
	echo "</employees>";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>