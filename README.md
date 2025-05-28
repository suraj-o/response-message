# @suraj/response-messages

A simple utility library to generate standardized HTTP response messages for Node.js applications and microservices.

---

## Features

- ✅ Easily create consistent success and error response messages
- 📦 Supports adding optional payload data and metadata
- ⚡ Lightweight and zero dependencies
- 🌐 Ideal for REST APIs, socket servers, and general HTTP responses

---

## Installation

```bash
npm install @suraj/response-messages
```

## Usage

```javascript
const responseMessages = require("@suraj/response-messages");

// Success response with data
const successResponse = responseMessages.success("Operation successful", { id: 123, name: "John" });

// Error response with details
const errorResponse = responseMessages.error("Something went wrong", { code: "E500", debugInfo: "Database timeout" });

console.log(successResponse);
console.log(errorResponse);
```

## API

### `success(message: string, data?: object): object`
Creates a standardized success response object.

**Parameters:**
- `message` — A descriptive success message
- `data` (optional) — Additional data payload

### `error(message: string, details?: object): object`
Creates a standardized error response object.

**Parameters:**
- `message` — Error description
- `details` (optional) — Error metadata or debug information

---

## Example Output

```javascript
responseMessages.success("User created", { id: 1 });
/*
{
  status: "success",
  message: "User created",
  data: { id: 1 }
}
*/

responseMessages.error("Validation failed", { field: "email" });
/*
{
  status: "error",
  message: "Validation failed",
  details: { field: "email" }
}
*/
```

---

## Contributing

Contributions, issues and feature requests are welcome!
Feel free to check the issues on GitHub.

## License

MIT License
