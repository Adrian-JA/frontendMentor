export function formatCountryInfo(titleInfo, textInfo) {
    return textInfo.map((text, index) => {
        if (Array.isArray(text)) {
            if (titleInfo[index] === "Currencies") {
                return text[0].name
            }

            if (titleInfo[index] === "Languages") {
                return text.map(lang => lang.name).join(", ")
            }

            return text.join(", ")
        }

        if (text === undefined) {
            return "No info"
        }


        if (titleInfo[index] === "Population") {
            return text.toLocaleString()
        }

        return text
    })
}