export default async function handler(req, res) {
  const { name, email, company, message } = req.body;

  try {
    // const response = await fetch(
    //   "https://api.emailjs.com/api/v1.0/email/send",
    //   {
    //     body: JSON.stringify({
    //       service_id: process.env.EMAILJS_SERVICE_ID,
    //       template_id: process.env.EMAILJS_TEMPLATE_ID,
    //       user_id: process.env.EMAILJS_USER_ID,
    //       template_params: {
    //         name,
    //         email,
    //         company,
    //         message,
    //       },
    //     }),
    //   }
    // );
    // const data = await response.json();

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
}
