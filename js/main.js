function checkEnquiryType() {
	// get the enquiry type selected
	var enquiryTypeValue  = document.testForm.enquiryType.value; 
	
	// if not product complaint, then submit the form
	if(enquiryTypeValue != 'productComplaint') {
		console.log("No Complaints Here");
		return true;
	}
	else {
		console.log("Complaint being Made");
		// get the Product Name, Size, Use By and Batch Code values
		var name = document.testForm.productName.value;
		var size = document.testForm.productSize.value;
		var useByDate = document.testForm.useByDate.value;
		var batchCode = document.testForm.batchCode.value;
		
		// ensure all are filled in on the form before it is submitted. If not alert the user
		if(name != '' && size != '' && useByDate != '' && batchCode != '') {
			console.log("Nothing is Empty");
			return true;
		}
		else {
			console.log("Something not filled out");
			alert("As you are lodging a Product Complaint, please ensure:\n\nProduct Name\nProduct Size\nUse By Date\nBatch Code\n\n are filled out before submitting your issue. Thank You");
			return false;
		}		
		return false;
	}
}
