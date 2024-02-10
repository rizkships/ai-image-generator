const API_KEY = "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"
const submitIcon = document.querySelector("#submit-icon")

const getImages = () => {
    const options = {
        method: "Post",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "prompt" : "",
            "n": 4,
            "size": "1024X1024"
        }) 
    }
    try {
        fetch('https://api.openai.com/v1/images/generations', options)
    } catch (error) {
        console.error(error)
    }


}




submitIcon.addEventListener('click, getImages')