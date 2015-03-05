<?php

	$db = mysqli_connect("localhost", "root", "", "Northwind");
	
	$sql = "SELECT EmployeeID, FirstName, LastName, Title, Email FROM Employees WHERE EmployeeID = " . $_POST['id'];
	
	$rs = mysqli_query($db, $sql);
	
	$thisRow = mysqli_fetch_assoc($rs);
	
	echo "<form>";
	echo "<input type=\"hidden\" id=\"EmployeeID\" value=\"{$_POST['id']}\" />";
	echo "<table cellpadding=\"8\">";
	
	echo "<tr>";
	echo "<td><b>First Name:</b></td>";
	echo "<td><input type=\"text\" id=\"FirstName\" value=\"{$thisRow['FirstName']}\" size=\"30\" /></td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td><b>Last Name:</b></td>";
	echo "<td><input type=\"text\" id=\"LastName\" value=\"{$thisRow['LastName']}\" size=\"30\" /></td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td><b>Title:</b></td>";
	echo "<td><input type=\"text\" id=\"Title\" value=\"{$thisRow['Title']}\" size=\"30\" /></td>";
	echo "</tr>";
	
	echo "<tr>";
	echo "<td><b>E-mail:</b></td>";
	echo "<td><input type=\"text\" id=\"Email\" value=\"{$thisRow['Email']}\" size=\"30\" /></td>";
	echo "</tr>";
	
	echo "</table>";
	echo "</form>";
	
	mysqli_free_result($rs);
	mysqli_close($db);

?>