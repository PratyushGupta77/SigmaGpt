import "dotenv/config";

const getOpenAIAPIResponse = async (messages) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: messages 
        })
    };

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", options);
    const data = await response.json();
    
    // Agar API key galat hogi toh yahan error aayega
    if (data.error) {
        console.error("Groq Error:", data.error);
        throw new Error(data.error.message);
    }
    
    return data.choices[0].message.content;
}

export default getOpenAIAPIResponse;