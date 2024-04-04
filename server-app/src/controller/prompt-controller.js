const inputPrompt = require("../models/input-prompt");
const openAi = require("../config/openai");

module.exports = {
    async sendText(req, res){
        const openaiAPI = openAi.init();
        const inputModel = new inputPrompt(req.body);

        try {
            const response = await openaiAPI.chat.completions.create(openAi.textCompletion(inputModel));
            return res.status(200).json({
                success: true,
                data: response.choices[0].message
            });
        } catch (e) {
            return res.status(400).json({
                success: false,
                type: e.error.type || "error",
                error: `Error: ${e.error.message}` || "there was an error when fetching your request"
            })
        }
    }
}