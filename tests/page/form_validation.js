registerTest ('Checking form Validation') {
	setup:function () {
		// Populating form fields using values declared in config.json
		// Leaving one required field blank (eg Surname) and filling out all other mandatory fields. 
		// This will prevent the form from being submitted
        this.workspace.document.getElementById("firstName").value = this.config.firstName;
        this.workspace.document.getElementById("emailAddress").value = this.config.emailAddress;
        this.workspace.document.getElementById("contactNumber").value = this.config.contactNumber;
        this.workspace.document.getElementById("address").value = this.config.address;
        this.workspace.document.getElementById("suburb").value = this.config.suburb;
        this.workspace.document.getElementById("state").value = this.config.state;
        this.workspace.document.getElementById("postcode").value = this.config.postcode;
        this.workspace.document.getElementById("enquiryType").value = this.config.enquiryTypeOne; // Setting to generalEnquiry
	},
	
	load : function () {

		this
		.test('Check form validation', function() {
			// submit the form
			this.workspace.document.getElementById('submitForm').submit();
			
			var submittedFirstName = this.workspace.document.getElementById("firstName");
			var submittedSurname = this.workspace.document.getElementById("enquiryType");
			
			// make sure the surname field is blank and first name is populated
			if(submittedSurname.length == 0 && submittedFirstName.length != 0) { 
				// as the first name is still populated, we know we have been redirected to the form page without submission. If the
				// form was submitted the first name would be blank.
				ok(true, 'Form has not been submitted, so validation is working as expected');
			} else { 
				// as both surname and first name are blank, the form has been submitted so we need to recheck the validation of the form
				ok(false,'Form has been submitted, validation not working as expected');
			}
		});
	}
});