<?php

	$db = mysqli_connect("localhost", "root", "root", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName, Title, Email FROM Employees ORDER BY LastName, FirstName";
	
	$rs = mysqli_query($db, $sql);
	
	echo "<h1>Employee Listing</h1>";
	echo "<p>[Request made by the {$_SERVER['REQUEST_METHOD']} method]</p>";
	echo "<table border=\"1\" cellpadding=\"8\">";
	echo "<tr><th>Name</th><th>Job Title</th><th>E-mail Address</th></tr>";
	
	while ($thisRow = mysqli_fetch_assoc($rs)) {
	
		echo "<tr id=\"{$thisRow['EmployeeID']}\">";
		echo "<td>{$thisRow['LastName']}, {$thisRow['FirstName']}</td>";
		echo "<td>{$thisRow['Title']}</td>";
		echo "<td>{$thisRow['Email']}</td>";
		echo "</tr>";
	
	};
	echo "</table>";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>