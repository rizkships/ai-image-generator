const API_KEY = "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"
const submitIcon = document.querySelector("#submit-icon")
const inputElement = document.querySelector("input")
const imageSection = document.querySelector(".images-section")

const getImages = async () => {
    const options = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "content-type": "application/json"
        },
        body: JSON.stringify({
            prompt : inputElement.value,
            n: 4,
            size: "1024x1024"
        }) 
    }
    try {
     const response =  await fetch("https://api.openai.com/v1/images/generations", options)
     const data = await response.json()
    } catch (error) {
        console.error(error)
    }

    data?.data.forEach(imageObject => {
        const imageContainer = document.createElement("div")
        imageContainer.classList.add("image-container")
        const imageElement = document.createElement("img")
        imageElement.setAttribute("src", imageObject.url)
        imageContainer.append(imageElement)
        images-section.append(imageContainer)

    })

}




submitIcon.addEventListener('click', getImages)