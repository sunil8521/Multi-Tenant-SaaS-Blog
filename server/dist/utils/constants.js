export const welcomeEmailTemplate = (teamName, teamDomain, dashboardUrl, userEmail, fullName) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Your Team</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #000000;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 8px;
      padding: 32px;
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #eee;
    }
   
    h1 {
      font-size: 22px;
      margin: 16px 0;
      color: #111;
    }
    p {
      line-height: 1.6;
      color: #333;
    }
    .button {
      display: inline-block;
      background-color: #111;
      color: #fff !important;
      padding: 12px 24px;
      border-radius: 6px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 20px;
    }
    .button:hover {
      background-color: #333;
    }
    .footer {
      font-size: 13px;
      color: #777;
      border-top: 1px solid #eee;
      margin-top: 30px;
      padding-top: 20px;
      text-align: center;
    }
    a {
      color: #000;
      text-decoration: underline;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to ${teamName}</h1>
    </div>

    <main>
      <p>Hi ${fullName},</p>

      <p>
        Your team workspace <strong>${teamDomain}</strong> has been successfully created!
      </p>

      <p>
        You can now invite teammates, publish articles, and collaborate in real-time under your custom domain.
      </p>

      <a href="${dashboardUrl}" class="button">Go to Dashboard</a>

      <p style="margin-top: 24px;">
        If you have any questions, feel free to reach out at
        <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>.
      </p>
    </main>

    <div class="footer">
      <p>
        This email was sent to <a href="mailto:${userEmail}">${userEmail}</a>.<br/>
        © 2025 TeamLog. All rights reserved.
      </p>
    </div>
  </div>
</body>
</html>
`;
export const userInviteTemplate = (teamName, teamDomain, inviteLink) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Invitation to Join ${teamName}</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0d0d0d;
      color: #f5f5f5;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #111;
      border: 1px solid #222;
      border-radius: 10px;
      padding: 32px;
    }
    .header {
      text-align: center;
      padding-bottom: 20px;
      border-bottom: 1px solid #222;
    }
    .header img {
      width: 120px;
    }
    h1 {
      font-size: 22px;
      margin: 20px 0;
      color: #fff;
    }
    p {
      line-height: 1.6;
      color: #d1d1d1;
    }
    .button {
      display: inline-block;
      background-color: #fff;
      color: #000 !important;
      padding: 12px 24px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 24px;
    }
    .button:hover {
      background-color: #e6e6e6;
    }
    .footer {
      font-size: 13px;
      color: #999;
      border-top: 1px solid #222;
      margin-top: 30px;
      padding-top: 20px;
      text-align: center;
    }
    a {
      color: #fff;
      text-decoration: underline;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <h1>You're Invited to Join ${teamName}</h1>
    </div>

    <main>
      <p>
        You have been invited to join the team <strong>${teamName}</strong>.
      </p>

      <p>
        Join now to collaborate with your teammates and access your workspace:
      </p>

      <p style="font-size: 15px; background: #1a1a1a; padding: 10px; border-radius: 6px;">
        🌐 <strong>${teamDomain}</strong>
      </p>

      <a href="${inviteLink}" class="button">Accept Invitation</a>

      <p style="margin-top: 20px;">
        This link will expire in <strong>48 hours</strong>.  
        If you didn’t expect this email, you can safely ignore it.
      </p>
    </main>

    <div class="footer">
      <p>
        Need help? Contact us at
        <a href="mailto:support@yourdomain.com">support@yourdomain.com</a>
      </p>
      <p>© 2025 TeamLog. All Rights Reserved.</p>
    </div>
  </div>
</body>
</html>
`;
};
//# sourceMappingURL=constants.js.map