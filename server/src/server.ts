<<<<<<< HEAD
import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { projects } from './data/Projects';

// Load the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- Setup Email Transporter ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Reads from .env
    pass: process.env.EMAIL_PASS  // Reads from .env
  }
});

// --- Routes ---

app.get('/', (req: Request, res: Response) => {
  res.send('Nikhil Portfolio API is Running!');
});

app.get('/api/projects', (req: Request, res: Response) => {
  res.json(projects);
});

// Real Email Endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // The sender's email
    to: process.env.EMAIL_USER, // Your email (where you get the message)
    subject: `Portfolio: New Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully from ${email}`);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
=======
import express, { Request, Response } from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { projects } from './data/Projects';

// Load the .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// --- Setup Email Transporter ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Reads from .env
    pass: process.env.EMAIL_PASS  // Reads from .env
  }
});

// --- Routes ---

app.get('/', (req: Request, res: Response) => {
  res.send('Nikhil Portfolio API is Running!');
});

app.get('/api/projects', (req: Request, res: Response) => {
  res.json(projects);
});

// Real Email Endpoint
app.post('/api/contact', async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email, // The sender's email
    to: process.env.EMAIL_USER, // Your email (where you get the message)
    subject: `Portfolio: New Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      
      Message:
      ${message}
    `
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent successfully from ${email}`);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
>>>>>>> 43f06c49a4eaa6df75cec31c851edc837136c9dc
});