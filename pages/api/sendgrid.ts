import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(`${process.env.SENDGRID_API_KEY}`);

async function sendEmail(req: any, res: any) {
    try {
        // console.log("REQ.BODY", req.body);
        await sendgrid.send({
            to: "info@opklinika.lt", // Your email where you'll receive emails
            from: "info@opklinika.lt", // your website email address here
            subject: `Nauja žinutė nuo: ${req.body.name}, ${req.body.email}`,
            html: `<div>Nauja žinutė nuo: ${req.body.name}, ${req.body.email}: </br>${req.body.message} </div>`,
        });
    } catch (error) {
        console.log(error);
        // return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;