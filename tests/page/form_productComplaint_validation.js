registerTest ('Checking form Validation when Enquiry Type is Product Complaint') {
	setup:function () {
		// Populating form fields using values declared in config.json
		// filling out all other mandatory fields and setting enquiry type to productComplaint
		// Leaving product name blank and populating size, use by date and batch code
        this.workspace.document.getElementById("firstName").value = this.config.firstName;
        this.workspace.document.getElementById("surname").value = this.config.surname;
        this.workspace.document.getElementById("emailAddress").value = this.config.emailAddress;
        this.workspace.document.getElementById("contactNumber").value = this.config.contactNumber;
        this.workspace.document.getElementById("address").value = this.config.address;
        this.workspace.document.getElementById("suburb").value = this.config.suburb;
        this.workspace.document.getElementById("state").value = this.config.state;
        this.workspace.document.getElementById("postcode").value = this.config.postcode;
        this.workspace.document.getElementById("enquiryType").value = this.config.enquiryTypeTwo; // setting to productComplaint
        this.workspace.document.getElementById("productSize").value = this.config.productSize; 
        this.workspace.document.getElementById("useByDate").value = this.config.useByDate; 
        this.workspace.document.getElementById("batchCode").value = this.config.batchCode; 
	},
	
	load : function () {

		this
		.test('Check form validation when enquiry type is Product Complaint', function() {
			// submit the form
			this.workspace.document.getElementById('submitForm').submit();
			
			var submittedEnquiryType = this.workspace.document.getElementById("enquiryType").value; 
			var submittedProductName = this.workspace.document.getElementById("productName").value; 
			var submittedProductSize = this.workspace.document.getElementById("productSize").value; 
			
			// make sure the enquiry type is still set to productComplaint
			if(submittedEnquiryType == this.config.enquiryTypeTwo) {
				if(submittedProductName.length == 0 && submittedProductSize.length != 0) { 
					// as the product size is still populated, we know we have been redirected to the form page without submission. If the
					// form was submitted the product size would be blank.
					ok(true, 'Form has not been submitted, so validation is working as expected when enquiry type is Product Complaint');
				} else { 
					// as both product name and size are blank, the form has been submitted so we need to recheck the validation of the form
					// when product complaint has been selected as the enquiry type
					ok(false,'Form has been submitted, validation not working as expected when enquiry type is Product Complaint');
				}
			}
		});
	}
});