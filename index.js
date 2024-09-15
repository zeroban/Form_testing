// Event listener for toggling forms
document.getElementById('toggleButton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button behavior
        var content1 = document.getElementById('form-container');
        var content2 = document.getElementById('vms-form-container');

        if (content1.style.display === 'none') {
                content1.style.display = 'block';
                content2.style.display = 'none';
        } else {
                content1.style.display = 'none';
                content2.style.display = 'block';
        }
});

// Event listener for the VMS toggle button
document.getElementById('toggleButtonVMS').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default button behavior
        var content1 = document.getElementById('form-container');
        var content2 = document.getElementById('vms-form-container');

        if (content1.style.display === 'none') {
                content1.style.display = 'block';
                content2.style.display = 'none';
        } else {
                content1.style.display = 'none';
                content2.style.display = 'block';
        }
});

// fuction that will handle the submit buttons actions
function handleSubmit() {
        var resultsDiv = document.getElementById('results');
        var formData = '';

        // Checks if the Bloom T2 form is visable
        var isT2FormVisible = document.getElementById('form-container').style.display !== 'none';

        if (isT2FormVisible) {
                // Gets the element ID from each form question
                var q1 = document.getElementById('question1').value;
                var q2 = document.getElementById('question2').value;
                var q3 = document.getElementById('question3').value;
                var q4 = document.getElementById('question4').value;
                var q5 = document.getElementById('question5').value;
                var q6 = document.getElementById('question6').value;
                var q7 = document.getElementById('question7').value;
                var q8 = document.getElementById('question88').value;
                var q9 = document.getElementById('question9').value;

                // Will create the form results with the answers provided by the user
                formData = `
                <h2>Ready to escalate - copy everything below here and paste it into your ticket escalation</h2>
                <p><strong>Subdomain/DB Name:</strong> ${q1}</p>
                <p><strong>Frontline Requester:</strong> ${q2}</p>
                <p><strong>Area of product affected (Ex. Events, Donation Form, Reports):</strong> ${q3}</p>
                <p><strong>Brief Summary of the issue:</strong> ${q4}</p>
                <p><strong>Expected Behavior:</strong> ${q5}</p>
                <p><strong>Actual Behavior:</strong> ${q6}</p>
                <p><strong>Breakdown of any troubleshooting you did:</strong> ${q7}</p>
                <p><strong>Can you reproduce the issue? (Yes/No):</strong> ${q8}</p>
                <p><strong>Any other relevant details?</strong> ${q9}</p>
            `;
        } else {
                // Get values from the VMS Escalation Form
                var orgID = document.getElementById('orgID').value;
                var oppID = document.getElementById('oppID').value;
                var userImpact = document.getElementById('userImpact').value;
                var issueDesc = document.getElementById('issueDesc').value;
                var issueLocation = document.getElementById('issueLocation').value;
                var troubleshooting = document.getElementById('troubleshooting').value;
                var reproduceIssue = document.getElementById('reproduceIssue').value;
                var yourName = document.getElementById('yourName').value;

                // Will create the form results with the answers provided by the user
                formData = `
                <h2>Ready to escalate - copy everything below here and paste it into your ticket escalation</h2>
                <p><strong>Org ID number:</strong> ${orgID}</p>
                <p><strong>Opportunity ID number:</strong> ${oppID}</p>
                <p><strong>User impacted and Role:</strong> ${userImpact}</p>
                <p><strong>Description of the issue:</strong> ${issueDesc}</p>
                <p><strong>Location of Issue:</strong> ${issueLocation}</p>
                <p><strong>Breakdown of any troubleshooting you did:</strong> ${troubleshooting}</p>
                <p><strong>Can you reproduce the issue? (Yes/No):</strong> ${reproduceIssue}</p>
                <p><strong>Your Name:</strong> ${yourName}</p>
            `;
        }

        resultsDiv.innerHTML = formData;
        resultsDiv.style.display = 'block';
}

// fuction that will handle the clear button actions
function clearButton() {
        var clearForm = document.getElementById('myForm');

        // calling the reset() method for the form to set all values to default
        clearForm.reset();
};

