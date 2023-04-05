function extractEmails(text) {
    let pattern = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/g
    let emails = text.match(pattern);
    for(let email of emails) {
        console.log(email);
    }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.')
extractEmails('Many users @ SoftUni confuse email addresses. We @Softuni.BG provide high-quality training @ home or @ class.–- steve.parker@softuni.de.')