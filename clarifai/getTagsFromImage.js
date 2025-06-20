const axios = require("axios");

const USER_ID = "your_clarifai_user_id";
const APP_ID = "your_clarifai_app_id";
const MODEL_ID = "general-image-recognition";
const PAT = "your_clarifai_personal_access_token";

async function getTagsFromImage(imageUrl) {
  try {
    console.log("Sending request to Clarifai for image:", imageUrl);

    const response = await axios.post(
      `https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`,
      {
        user_app_id: {
          user_id: USER_ID,
          app_id: APP_ID
        },
        inputs: [
          {
            data: {
      image: imageUrl.startsWith('data:')
      ? { base64: imageUrl.split(',')[1] }
      : { url: imageUrl }
        }
          }
        ]
      },
      {
        headers: {
          Authorization: `Key ${PAT}`,
          "Content-Type": "application/json"
        }
      }
    );

    const concepts = response.data.outputs[0].data.concepts;
    const tags = concepts.map(c => c.name);
    return tags;
  } catch (err) {
    console.error("Clarifai API error:", err.response?.data ?? err.message);
    throw new Error("Clarifai API error");
  }
}

module.exports = { getTagsFromImage };
