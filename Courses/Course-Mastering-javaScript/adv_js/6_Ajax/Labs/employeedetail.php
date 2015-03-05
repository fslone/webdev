<?php

	$db = mysqli_connect("localhost", "root", "root", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName, Title, Email FROM Employees WHERE EmployeeID = " . $_GET['id'];
	
	$rs = mysqli_query($db, $sql);
	
	$thisRow = mysqli_fetch_assoc($rs);
	
	echo "<table cellpadding=\"8\">";
	
	echo "<tr>";
	echo "<td><b>First Name:</b></td>";
	echo "<td>{$thisRow['FirstName']}</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td><b>Last Name:</b></td>";
	echo "<td>{$thisRow['LastName']}</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td><b>Title:</b></td>";
	echo "<td>{$thisRow['Title']}</td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td><b>E-mail:</b></td>";
	echo "<td>{$thisRow['Email']}</td>";
	echo "</tr>";
	
	echo "</table>";
	echo "</form>";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>