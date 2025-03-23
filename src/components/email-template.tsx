import React from "react";

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName, email, message
}) => (
  <div>
    <h1>Hello from {firstName}!</h1>
    <p>This message has been sent from {email} email</p>
    <p>{message}</p>
  </div>
);