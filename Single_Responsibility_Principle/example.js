
// Single Responsibility Principle

// Bad
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    saveToDatabase() {
        console.log("Saving to database...");
    }
    
    sendEmail() {
        console.log(`Sending email to ${this.email}`);
    }
}

// Good
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserDatabase {
    save(user) {
        console.log("Saving to database...");
    }
}

class EmailService {
    sendEmail(user) {
        console.log(`Sending email to ${user.email}`);
    }
}
