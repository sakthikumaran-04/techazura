export const TICKET_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechAzura Symposium Ticket</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            font-size: 24px;
            font-weight: bold;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
        }
        .ticket-content {
            padding: 20px;
            text-align: center;
        }
        .ticket-content h2 {
            color: #333;
        }
        .ticket-info {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            margin: 15px 0;
            font-size: 16px;
            color: #555;
            text-align: left;
        }
        .footer {
            text-align: center;
            padding: 15px;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="header">TechAzura Symposium 2025</div>
    
    <div class="ticket-content">
        <h2>Welcome, {PARTICIPANT_NAME}!</h2>
        <p>We are excited to have you at the TechAzura Symposium.</p>
        
        <div class="ticket-info">
            <p><strong>Event Date:</strong> April 04, 2025</p>
            <p><strong>Venue:</strong> Hindusthan College Of Engineering And Technology</p>
            <p><strong>Time:</strong> 09:30 AM - 4:30 PM</p>
            <p><strong>Ticket ID:</strong> {UNIQUE_TICKET_ID}</p>
        </div>
    </div>

    <div class="footer">
        If you have any questions, contact us at <a href="mailto:support@techazura.com">support@techazura.com</a>.
    </div>
</div>

</body>
</html>
`;

export const WELCOME_TEMPLATE = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to TechAzura 2025!</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
    }
    .header {
      background-color: #007bff;
      color: white;
      padding: 20px;
      text-align: center;
      font-size: 24px;
      font-weight: bold;
    }
    .content {
      padding: 20px;
      text-align: center;
    }
    .content p {
      font-size: 16px;
      color: #333;
      line-height: 1.5;
    }
    .cta-button {
        display: inline-block;
        background-color: #007bff;
        color: #ffffff !important; /* Ensures white text */
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
        border: none;
    }
    .footer {
      background-color: #f4f4f4;
      text-align: center;
      padding: 15px;
      font-size: 14px;
      color: #666;
    }
    .footer a {
      color: #007bff;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      Welcome to TechAzura 2025 🎉
    </div>
    <div class="content">
      <p>Dear <strong>{PARTICIPANT_NAME}</strong>,</p>
      <p>We’re thrilled to welcome you to <strong>TechAzura 2025</strong>! Get ready for an exciting experience filled with innovation, networking, and learning.</p>
      <p>Stay tuned for event updates and prepare for an unforgettable journey with us.</p>
      <a href="https://techazura.online" class="cta-button">Visit TechAzura</a>
    </div>
    <div class="footer">
      <p>Need help? Contact us at <a href="mailto:techazura.dev@gmail.com">techazura.dev@gmail.com</a></p>
      <p>© 2025 TechAzura. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
`