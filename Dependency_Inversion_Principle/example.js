
// Dependency Inversion Principle

// Bad
class PasswordReminder {
    constructor(mysqlConnection) {
        this.mysqlConnection = mysqlConnection;
    }
}

// Good
class PasswordReminder {
    constructor(dbConnection) {
        this.dbConnection = dbConnection;
    }
}

class MySQLConnection {
    connect() {
        console.log("Connected to MySQL database");
    }
}

class PostgreSQLConnection {
    connect() {
        console.log("Connected to PostgreSQL database");
    }
}

const dbConnection = new MySQLConnection();
const reminder = new PasswordReminder(dbConnection);
