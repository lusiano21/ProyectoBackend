import twilio from 'twilio'
import config from '../config/config.js'
class TwilioService {
    constructor() {
        this.client = twilio(config.Twilio.AccountSid, config.Twilio.AuthToken)
    }

    async sendSMS(to, body) {
        return this.client.messages.create({
            body,
            to,
            from: config.Twilio.PhoneNumber,
        })
    }
}

export default new TwilioService()