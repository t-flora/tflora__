import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from 'next';

sendgrid.setApiKey(String( process.env.SENDGRID_API_KEY ));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body)
    try {
        await sendgrid.send({
            to: String( process.env.TO_EMAIL_ADDRESS ),
            from: String( process.env.FROM_EMAIL_ADDRESS ),
            subject: `Message from ${req.body.name}`,
            html: `
                Sender name: ${req.body.name} <br>
                Sender email: ${req.body.email} <br>
                Message: ${req.body.message}
            `
        })
    } catch (error: any) {
        return res.status(error.statusCode || 500).json({error: error.message})
    }

    return res.status(200).json({message: "Message sent successufully", error: ""})
}