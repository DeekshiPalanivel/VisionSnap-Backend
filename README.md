# 🧠 VisionSnap – Backend API

VisionSnap is a Node.js + Express backend that uses AI to help users find visually similar images based on an uploaded image or keyword. It uses the **Clarifai API** to extract meaningful tags from images, and then searches the **Unsplash API** for related images.

> This repository contains the backend logic only. You can integrate it with any frontend for a complete image search experience.



---


## 🔗 API Endpoint

POST http://localhost:6969/VisionSnap/api/searchByImage



---


## 🧰 Tech Stack

- **Node.js** – Server environment
- **Express** – Routing and middleware
- **Clarifai API** – Image tagging via AI
- **Unsplash API** – To fetch similar images
- **Axios** – HTTP request handling
- **dotenv** – Secure environment variables
- **Postman** – API testing

---


## 📁 Project Structure

backend/  
│  
├── clarifai/  
│ └── getTagsFromImage.js # Clarifai API integration  
│  
├── unsplash/  
│ └── searchByTags.js # Unsplash API integration  
│  
├── .env # API keys and configs  
├── index.js # Main Express server  
├── package.json  



---


## 🚀 How It Works

### 1. 🔎 Tag Extraction
If an image URL or base64 string is sent, it is passed to **Clarifai**, which returns descriptive tags (like "dog", "tree", etc.).

### 2. 🖼️ Image Search
The tags are combined into a query and sent to **Unsplash** to retrieve up to 15 related high-quality images.



---


## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/vision-snap-backend.git
cd vision-snap-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create .env File

```bash
CLARIFAI_PAT=your_clarifai_personal_access_token  
UNSPLASH_ACCESS_KEY=your_unsplash_access_key
PORT=6969
```

### 4. Start the Server

```bash
node index.js
```

The server runs at http://localhost:6969.



---


## 🧪 Testing with Postman

Here’s how you can verify your backend works correctly using [Postman](https://www.postman.com/).

- Endpoint: /VisionSnap/api/searchByImage
- Method: POST
- URL: http://localhost:6969/VisionSnap/api/searchByImage
- Body (raw → JSON):

  ✅ Test with Image URL:
  
      {  
        "imageUrl": "https://i.ibb.co/album/sample-image.jpg"  
      }  
      
  |  You can use [imgbb.com](https://imgbb.com/) to upload an image and get a public URL.  
      
   ✅ Test with Keyword Search:
   
      {  
        "imageUrl": "beach sunset"  
      }  



---


### 📥 Expected Response:

{  
  "relatedImages": [  
    {  
      "id": "abc123",  
      "alt_description": "A dog running",  
      "urls": {  
        "regular": "https://images.unsplash.com/photo-..."  
      }  
    },  
    ...  
  ]  
}  



---


## 🤖 Why Clarifai?

Clarifai was chosen as the image tagging API for this project because:

- ✅ It offers **free-tier access** (great for testing and development)
- ✅ Provides tag predictions for a wide variety of images
- ✅ Requires no training or setup—just plug and play

### 🧠 Alternative Options

You can **easily swap Clarifai** with another image recognition solution such as:  

- Google Vision API 
- Microsoft Azure Computer Vision
- AWS Rekognition
- Your own custom-trained ML model (e.g., ResNet, MobileNet, etc.)

> **Note:** Most other providers require a paid subscription or a limited free quota, which is why Clarifai was selected for this project.

Just ensure your replacement function returns **an array of tags** from the input image—this is the only requirement for integrating with the rest of the backend.

