
# SOLID Principles with JavaScript Examples

This repository provides a breakdown of the SOLID principles, each with a JavaScript example.

## 1. Single Responsibility Principle (SRP)

A class should have only one reason to change, meaning it should have only one job. Keeping classes focused makes them easier to maintain.

**Example:**
Instead of having one class handle both data and email responsibilities, split them into separate classes. This avoids tightly coupling unrelated responsibilities.

---

## 2. Open-Closed Principle (OCP)

Classes should be open for extension but closed for modification. This encourages adding new functionality by extending existing code rather than altering it.

**Example:**
In a payment processing system, you can add new payment methods by creating new classes instead of modifying the core processing class.

---

## 3. Liskov Substitution Principle (LSP)

Derived classes should be substitutable for their base classes without affecting the correctness of the program.

**Example:**
If you have a `Rectangle` class, a derived `Square` class should maintain the expected behavior when substituting it. Avoid inheritance if it breaks expected behavior.

---

## 4. Interface Segregation Principle (ISP)

Clients should not be forced to depend on interfaces they do not use. Instead of one large interface, create smaller, more specific ones.

**Example:**
A `Bird` class shouldn’t require a `Penguin` class to implement a `fly()` method if penguins don’t fly. Separate `FlyingBird` and `SwimmingBird` interfaces help achieve this.

---

## 5. Dependency Inversion Principle (DIP)

Depend on abstractions, not on concrete classes. High-level modules should not depend on low-level modules directly, but both should depend on abstractions.

**Example:**
A `PasswordReminder` class should depend on an abstract `DatabaseConnection` rather than a concrete `MySQLConnection`, allowing flexibility to switch databases.

---

Each principle folder in this repository contains a JavaScript file demonstrating the respective principle.
