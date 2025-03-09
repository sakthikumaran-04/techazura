import { TICKET_TEMPLATE, WELCOME_TEMPLATE } from "./emailTemplate.js";
import { transport, sender } from "./mailtrap.config.js";

export async function sendWelcomeEmail(email, name) {
  try {
    const response = await transport
    .sendMail({
      from: sender,
      to: [email],
      subject:"🎉 Welcome to TechAzura 2025 – Let’s Get Started!",
      html: WELCOME_TEMPLATE.replace("{PARTICIPANT_NAME}",name),
      category:"welcome email"
    });
    console.log("Welcome email sent successfully", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}


export async function sendTicketEmail(name, email, ticketId) {
  try {
    const recipients = [email];

    const response = await transport.sendMail({
      from: sender,
      to: recipients,
      subject: "Here is your ticket for TechAzura 2025",
      html: TICKET_TEMPLATE.replace("{UNIQUE_TICKET_ID}", ticketId)
      .replace("{PARTICIPANT_NAME}", name),
      category: "Event Ticket",
    });

    console.log("Ticket email sent successfully:", response);
  } catch (error) {
    console.error("Error sending ticket email:", error);
  }
}
