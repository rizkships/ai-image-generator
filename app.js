const API_KEY = "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"
const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector('input')
const getImages = async () => {
    const options = {
        method: "Post",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "prompt" : inputElement.value,
            "n": 4,
            "size": "1024X1024"
        }) 
    }
    try {
     const response =  await fetch('https://api.openai.com/v1/images/generations', options)
     const data = await response.json()
     console.log(data)
    } catch (error) {
        console.error(error)
    }


}




submitIcon.addEventListener('click', getImages)