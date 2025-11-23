export async function handler(event) {
  try {
    const HF_TOKEN = process.env.HF_TOKEN;

    const body = JSON.parse(event.body);

    const response = await fetch("https://router.huggingface.co/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
    
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error: " + err.message
    };
  }
}
