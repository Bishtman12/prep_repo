## 1. What is Node.js?

**Definition:**
* Node.js is an open-source, cross-platform runtime environment that allows JavaScript to be executed server-side
* Traditionally, JavaScript was used only for client-side scripting in browsers
* Node.js extended its capability by using Chrome's V8 JavaScript engine

**Purpose:**
* Enables developers to write server-side logic in JavaScript
* Particularly useful for building scalable network applications

**Common Use Cases:**
1. Web servers
2. REST APIs
3. Real-time applications (chat apps, no tifications)

**Key Characteristics:**
* Asynchronous and event-driven
* Built on non-blocking I/O
* Single-threaded event loop model for concurrency

**Architecture Components:**
* V8 JavaScript engine
* Event loop
* Libuv for asynchronous I/O
* Core modules (fs, http, net)

---

## 2. What is the V8 Engine?

**Definition:**
* Open-source JavaScript and WebAssembly engine
* Written in C++ by Google
* Used by Chrome and Node.js

**Key Features:**
1. **Performance Optimization**
   * Just-In-Time (JIT) compilation to native machine code
   * Fast execution
   * Efficient memory management

2. **Language Support**
   * JavaScript
   * WebAssembly
   * Latest ECMAScript features

3. **Integration**
   * Used by Chrome browser
   * Core component of Node.js
   * Powering millions of web applications

4. **Architecture**
   * Optimizing compiler
   * Garbage collector
   * Memory management
   * Runtime library

---

## 3. What is a Runtime Environment?

**Definition:**
* Platform that provides necessary tools and infrastructure for program execution
* Manages program execution from start to finish

**Key Components:**
1. **Execution Environment**
   * JavaScript engine (e.g., V8)
   * Memory management
   * Garbage collection

2. **System Integration**
   * Libraries and APIs
   * System interaction mechanisms
   * Resource management

3. **In Node.js:**
   * V8 engine for JavaScript execution
   * Core modules (`fs`, `http`, `net`)
   * Event loop for asynchronous operations
   * Libuv for I/O operations

**Purpose:**
* Execute program code
* Manage system resources
* Handle memory allocation
* Provide system APIs
* Enable program interaction with the operating system

---


## 4. What is a Process?

A process is an instance of a running program. It has its own memory, environment variables, and system resources. In Node.js, the application runs in a single process but can spawn child processes using the `child_process` module to perform parallel tasks or execute shell commands.

Example: `process` is a global object in Node.js that gives access to environment variables, arguments, and process control functions.

---

## 5. What is a Thread?

A thread is the smallest unit of execution within a process. Node.js uses a single main thread for JavaScript execution. However, it delegates I/O and heavy operations to background threads via the libuv library (e.g., file reads, DNS resolution). For explicit multi-threading, Node.js supports the `worker_threads` module.

Key distinction:

* Main thread: Executes application code
* Worker threads: Handle heavy or blocking tasks

---

## 6. What is Event-Driven Architecture?

Event-driven architecture (EDA) is a programming paradigm where the flow of the application is determined by events. An event can be any occurrence like a user request, timer, or data read. Node.js implements EDA via its event loop and callback mechanisms, enabling efficient handling of multiple concurrent operations without blocking.

Core concepts:

* **Event Loop:** Continuously checks the event queue and invokes corresponding callbacks
* **Event Emitter:** Allows modules to emit and listen for named events

Example: In an HTTP server, every incoming request triggers an event which is handled by a callback function.

---

## 7. What are Frameworks?

Frameworks are abstraction layers or scaffolds that simplify application development by providing reusable components and a standardized way to build and organize code. In the Node.js ecosystem, frameworks like Express.js, NestJS, and Koa.js are popular for building web applications.

Benefits:

* Speed up development
* Encourage code modularity
* Provide built-in solutions for routing, middleware, and error handling

---

## 8. Difference between Runtime Environment, Frameworks, and Language

* **Programming Language (JavaScript):** The language used to write the application logic.
* **Runtime Environment (Node.js):** Executes the JavaScript code and provides APIs to interact with the operating system.
* **Frameworks (Express.js, NestJS):** Built on top of the runtime, frameworks provide developers with tools and patterns for building robust applications efficiently.

---

## 9. Features, Advantages, and Disadvantages of Node.js

**Features:**

* **Non-blocking I/O:** Asynchronous operations to maximize efficiency
* **Single-threaded Event Loop:** Manages multiple concurrent clients using callbacks
* **High Performance:** Powered by V8, optimized for performance
* **npm Ecosystem:** Rich set of packages and libraries

**Advantages:**

* Efficient for I/O-bound and real-time applications
* Enables full-stack JavaScript development
* Great community and third-party support
* Scalable with clustering and microservices architecture

**Disadvantages:**

* **Callback Hell/Pyramid of Doom:**
  * Nested callbacks can lead to complex, hard-to-read code
  * Makes debugging and maintenance challenging

* **CPU-Intensive Tasks:**
  * Single-threaded nature makes it inefficient for CPU-bound tasks
  * Not ideal for heavy computations or image processing

* **Memory Leaks:**
  * Event-driven architecture can lead to memory leaks if not handled properly
  * Garbage collection can cause performance issues

* **Blocking Operations:**
  * I/O operations can block the event loop
  * Improper use of synchronous operations can degrade performance

* **Learning Curve:**
  * Asynchronous programming model can be challenging for beginners
  * Requires understanding of callbacks, promises, and async/await

**When to Use Node.js:**

1. **Real-time Applications**
   * Chat applications
   * Real-time notifications
   * Multiplayer games

2. **I/O-bound Applications**
   * File systems
   * Data streaming
   * Network operations

3. **Microservices Architecture**
   * Lightweight, scalable services
   * API gateways
   * Event-driven systems

4. **Frontend Development**
   * Build tools (Webpack, Gulp)
   * Package managers (npm, yarn)
   * Frontend frameworks (React, Vue)

5. **Prototyping**
   * Rapid development
   * Large ecosystem of packages
   * Easy to get started

**When Not to Use Node.js:**

1. **CPU-Intensive Applications**
   * Video processing
   * Image manipulation
   * Complex mathematical computations

2. **Heavy Database Operations**
   * Large-scale data processing
   * Complex database queries
   * Batch processing

3. **Long-running Processes**
   * Scientific computations
   * Machine learning training
   * Heavy data analysis

4. **Memory-Critical Applications**
   * Systems requiring precise memory control
   * Embedded systems
   * Performance-critical applications

5. **Enterprise Legacy Systems**
   * Systems requiring strict transaction control
   * Systems needing formal verification
   * Systems with strict security requirements

---

## 10. How to set up a Node project?

**Basic Setup Steps:**
1. **Initialize Project**
   * Run `npm init` to create `package.json`
   * Configure project details
   * Set up dependencies

2. **Install Dependencies**
   * Use `npm install <package-name>`
   * Save to `package.json` with `--save`
   * Install dev dependencies with `--save-dev`

3. **Project Structure**
   * `package.json` - Project configuration
   * `node_modules` - Installed packages
   * `src/` or `lib/` - Source code
   * `test/` - Test files
   * `.gitignore` - Ignore files
   * `README.md` - Documentation

**Best Practices:**
* Use `package-lock.json` for consistent installations
* Keep `node_modules` out of version control
* Use `.npmrc` for configuration
* Follow semantic versioning

---

## 11. What is npm? What is the role of the node_modules folder in your project?

**Definition:**
* npm (Node Package Manager)
  * Default package manager for Node.js
  * Largest software registry in the world
  * Command-line tool for package management

**Key Features:**
1. **Package Management**
   * Install packages: `npm install`
   * Uninstall packages: `npm uninstall`
   * Update packages: `npm update`

2. **Registry Access**
   * Access to over 1.5 million packages
   * Search packages: `npm search`
   * Publish packages: `npm publish`

3. **Version Control**
   * Semantic versioning support
   * Package dependencies management
   * Lock files for consistent installations

**node_modules Folder:**

**Purpose:**
* Stores all installed packages
* Organized by package name
* Contains package dependencies
* Includes native modules (if any)

**Structure:**
* Direct dependencies at root level
* Nested dependencies in subdirectories
* Native modules in `node_modules/.bin`
* Symbolic links for global packages

**Best Practices:**
* Never commit node_modules to version control
* Use `package-lock.json` for consistent installations
* Regularly clean unused packages
* Use npm audit for security checks

---

## 12. What are Node modules?

**Definition:**
* Reusable code blocks in Node.js
* Can be functions, objects, or classes
* Encapsulated in separate files
* Export functionality for use by other modules

**Types of Modules:**
1. **Core Modules**
   * Built into Node.js
   * No installation required
   * Examples: `fs`, `http`, `path`

2. **Local Modules**
   * Created by developers
   * Stored in project directory
   * Used within the project

3. **External Modules**
   * Installed from npm registry
   * Stored in node_modules
   * Shared across projects

**Key Features:**
* Encapsulation
* Code reusability
* Modular architecture
* Easy maintenance

---

## 13. What is the role of the package.json file in Node?

**Purpose:**
* Project configuration file
* Dependency management
* Build and run scripts
* Project metadata

**Key Sections:**

1. **Project Information**
   * `name` - Project name
   * `version` - Current version
   * `description` - Project description
   * `author` - Project author
   * `license` - Project license

2. **Dependencies**
   * `dependencies` - Runtime dependencies
   * `devDependencies` - Development dependencies
   * `peerDependencies` - Peer dependencies
   * `optionalDependencies` - Optional dependencies

3. **Scripts**
   * `start` - Start the application
   * `test` - Run tests
   * `build` - Build the project
   * Custom scripts

4. **Configuration**
   * `main` - Entry point
   * `scripts` - Available scripts
   * `engines` - Node.js version requirements
   * `keywords` - Project keywords

**Best Practices:**
* Keep dependencies up to date
* Use semantic versioning
* Document scripts
* Include proper license
* Maintain consistent formatting

---

## 14. What are modules in Node? What is the difference between a function and a module?

**Modules in Node:**

1. **Definition**
   * Self-contained code block
   * Can export multiple functions/objects
   * Has its own scope
   * Can import other modules

2. **Structure**
   * Single file
   * Multiple functions/objects
   * Exports object
   * Module scope

**Functions vs Modules:**

1. **Scope**
   * Function: Local scope
   * Module: Global scope within file

2. **Purpose**
   * Function: Single task
   * Module: Multiple related functions

3. **Exportability**
   * Function: Can be exported
   * Module: Exports multiple functions

4. **Usage**
   * Function: Direct call
   * Module: Import required

**Example:**
```javascript
// Function
function add(a, b) {
  return a + b;
}

// Module
module.exports = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; }
};
```

---

## 15. How many ways are there to export a module?

**Export Methods:**

1. **Named Exports**
   ```javascript
   // Export multiple items
   module.exports.add = function(a, b) { return a + b; }
   module.exports.subtract = function(a, b) { return a - b; }
   ```

2. **Default Export**
   ```javascript
   // Export single item
   module.exports = {
     add: function(a, b) { return a + b; }
   }
   ```

3. **Object Assignment**
   ```javascript
   // Using object literal
   const math = {
     add: function(a, b) { return a + b; }
   }
   module.exports = math;
   ```

4. **ES6 Style**
   ```javascript
   // Using ES6 syntax
   export function add(a, b) { return a + b; }
   export { add as default }
   ```

**Best Practices:**
* Use named exports for multiple items
* Use default export for single items
* Be consistent in export style
* Document exported items
* Avoid circular dependencies

---

## 16. What will happen if you do not export the module?

**Consequences:**

1. **Accessibility**
   * Cannot be imported by other modules
   * Limited to current module scope
   * Only accessible within the file

2. **Code Organization**
   * Cannot reuse functionality
   * Violates modular design principles
   * Makes testing difficult

3. **Best Practices**
   * Always export intended functionality
   * Use proper export style
   * Document exported items
   * Follow module design patterns

**Example:**
```javascript
// Without export
function add(a, b) { return a + b; }  // Cannot be imported

// With export
module.exports.add = function(a, b) { return a + b; }  // Can be imported
```

---

## 17. How to import single or multiple functions from a module?

**Import Methods:**

1. **Single Function**
   ```javascript
   // Import single function
   const { add } = require('./math');
   // or
   const add = require('./math').add;
   ```

2. **Multiple Functions**
   ```javascript
   // Import multiple functions
   const { add, subtract } = require('./math');
   // or
   const math = require('./math');
   ```

3. **Rename Imports**
   ```javascript
   // Rename imported functions
   const { add: sum, subtract: minus } = require('./math');
   ```

4. **Default Import**
   ```javascript
   // Import default export
   const math = require('./math');
   ```

**Best Practices:**
* Use destructuring for clarity
* Import only what's needed
* Follow consistent import style
* Document imported items
* Avoid circular dependencies

---

## 18. What is the module wrapper function?

**Definition:**
* Automatically created wrapper around each module
* Provides module scope and functionality
* Prevents global variable pollution

**Structure:**
```javascript
(function(exports, require, module, __filename, __dirname) {
  // Module code here
  // Can use exports, require, module, etc.
});
```

**Purpose:**
1. **Scope Management**
   * Creates new scope
   * Prevents global pollution
   * Encapsulates module code

2. **Module Features**
   * Provides `exports` object
   * Provides `require` function
   * Provides `module` object
   * Provides `__filename` and `__dirname`

3. **Security**
   * Prevents global variable access
   * Encapsulates module variables
   * Protects module integrity

**Example:**
```javascript
// Without wrapper
function add(a, b) { return a + b; }

// With wrapper (automatically created)
(function(exports, require, module, __filename, __dirname) {
  function add(a, b) { return a + b; }
  module.exports = add;
});
```

---

## 19. What are the types of modules in Node?

**Module Types:**

1. **Core Modules**
   * Built into Node.js
   * No installation required
   * Examples: `fs`, `http`, `path`, `os`
   * Always available

2. **Local Modules**
   * Created by developers
   * Stored in project directory
   * Used within the project
   * Not shared

3. **External Modules**
   * Installed from npm
   * Stored in `node_modules`
   * Shared across projects
   * Version controlled

4. **Built-in Modules**
   * Core Node.js modules
   * Optimized for performance
   * Native implementations
   * Cross-platform support

**Loading Order:**
1. Core modules
2. Local modules
3. External modules
4. Built-in modules

**Best Practices:**
* Use core modules when possible
* Keep external dependencies minimal
* Document module usage
* Follow semantic versioning
* Regular updates

---