<?php

	$db = mysqli_connect("localhost", "root", "", "Northwind");
	
	$sql = "UPDATE Employees SET {$_POST['field']} = '{$_POST['newValue']}' WHERE EmployeeID = {$_POST['id']}";
	
	if ($rs = mysqli_query($db, $sql)) {
	
		echo "Success";
		
	} else {
	
		echo "Failed";
		
	};
	
	mysqli_close($db);

?>