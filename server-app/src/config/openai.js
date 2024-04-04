const {OpenAI} = require("openai");

module.exports = class openAi {
    static init() {
        return new OpenAI();
    }

    static textCompletion({prompt}) {
        return {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ]
        }
    }

}