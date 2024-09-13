function handleSubmit() {
    // Get values from the form
    var q1 = document.getElementById('question1').value;
    var q2 = document.getElementById('question2').value;
    var q3 = document.getElementById('question3').value;
    var q4 = document.getElementById('question4').value;
    var q5 = document.getElementById('question5').value;
    var q6 = document.getElementById('question6').value;
    var q7 = document.getElementById('question7').value;
    var q8 = document.getElementById('question8').value;
    var q9 = document.getElementById('question9').value;

    // Generate the results section
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <h2>Ready to escalate - copy everything below here and paste it into your ticket escalation</h2>
       
        <p><strong>Subdomain/DB Name:</strong> ${q1}</p>
        <p><strong>Frontline Requester:</strong> ${q2}</p>
        <p><strong>Area of product affected (Ex. Events, Donation Form, Reports):</strong> ${q3}</p>
        <p><strong>Brief Summary of the issue (Ex. Scheduled report email not sending to
                recipients):</strong> ${q4}</p>
        <p><strong>Expected Behavior (Ex. When a report email is scheduled, it will send to the
                recipients on the schedule assigned):</strong> ${q5}</p>
        <p><strong>Actual Behavior (Ex. While the email did send for x amount of weeks, it hasn’t sent
                since x date):</strong> ${q6}</p>
        <p><strong>Breakdown of any troubleshooting you did (Ex. tested the report schedule to my own
                email, searched SendGrid for the email affected, etc):</strong> ${q7}</p>
        <p><strong>Can you reproduce the issue? (Yes/No):</strong> ${q8}</p>
        <p><strong>Any other relevant details? (Links to report/template, screenshots, or screen
                recordings of the error, etc.):</strong> ${q9}</p>
        
    `;

    // Show the results section
    resultsDiv.style.display = 'block';
}
