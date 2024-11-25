function sendmail() {
    let params = {
        name: document.getElementById("fname").value,
        email: document.getElementById("femail").value,
        subject: document.getElementById("fsubject").value,
        budget: document.getElementById("fbudget").value,
        comment: document.getElementById("fcomment").value
    }

    emailjs.send("service_fu2teh2","template_qvpwo64",params).then(alert("Email is sent"));
}