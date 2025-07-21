# 🌟 Gemini Image & Email Generator (Backend)

A simple Node.js + TypeScript backend that uses **Gemini API** to generate AI images and sends emails via an external service.

---

## 🔗 API Endpoints

### 1. **POST** `/api/v1/email`

Write a formal email to apply for a frontend developer position at Google.

#### Request :

```json
{
"message": "Write a formal email to apply for a frontend developer position at Google."
}


### 1. **POST** `/api/v1/image`

Generate an image using Gemini AI from a prompt.

#### Request:
```json
{
  "message": "A cat wearing sunglasses, sitting on a beach"
}
