const nodemailer = require('nodemailer');

// Create transporter - you'll need to configure this with your email provider
const createTransporter = () => {
  console.log('Creating email transporter...');
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
  
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration missing. Please check EMAIL_USER and EMAIL_PASS in .env file');
  }
  
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Email template for user confirmation
const getUserEmailTemplate = (bookingData) => {
  return {
    from: process.env.EMAIL_USER,
    to: bookingData.email,
    subject: 'Booking Confirmation - Royal Creation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin-bottom: 10px;">Royal Creation</h1>
          <h2 style="color: #28a745; margin: 0;">Booking Confirmation</h2>
        </div>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-top: 0;">Dear ${bookingData.name},</h3>
          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            Thank you for choosing Royal Creation for your event! We have received your booking request and our team will contact you shortly to finalize the details.
          </p>
        </div>

        <div style="background-color: #ffffff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-top: 0; margin-bottom: 15px;">Booking Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Event:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.eventType || bookingData.event}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Event Date:</td>
              <td style="padding: 8px 0; color: #333;">${new Date(bookingData.eventDate).toLocaleDateString()}</td>
            </tr>
            ${bookingData.budget ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget:</td>
              <td style="padding: 8px 0; color: #333;">₹${bookingData.budget.toLocaleString()}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Status:</td>
              <td style="padding: 8px 0; color: #28a745; font-weight: bold;">${bookingData.status}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #e8f5e8; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h4 style="color: #28a745; margin-top: 0;">What's Next?</h4>
          <ul style="color: #555; margin: 0; padding-left: 20px;">
            <li>Our team will review your booking request</li>
            <li>We'll contact you within 24 hours to discuss your requirements</li>
            <li>We'll provide a detailed proposal and timeline</li>
            <li>Once confirmed, we'll begin planning your perfect event</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #666; font-size: 14px;">
            If you have any questions, please don't hesitate to contact us.
          </p>
          <p style="color: #666; font-size: 14px; margin: 5px 0;">
            <strong>Royal Creation Team</strong><br>
            Email: ${process.env.EMAIL_USER}<br>
            Phone: 9765728665
          </p>
        </div>
      </div>
    `,
  };
};

// Email template for admin notification
const getAdminEmailTemplate = (bookingData) => {
  return {
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // Admin email
    subject: 'New Booking Request - Royal Creation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2c3e50; margin-bottom: 10px;">Royal Creation</h1>
          <h2 style="color: #dc3545; margin: 0;">New Booking Request</h2>
        </div>
        
        <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #ffc107;">
          <h3 style="color: #856404; margin-top: 0;">New booking request received!</h3>
          <p style="font-size: 16px; line-height: 1.6; color: #856404; margin: 0;">
            A new booking request has been submitted through the website. Please review the details below and contact the client.
          </p>
        </div>

        <div style="background-color: #ffffff; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
          <h3 style="color: #2c3e50; margin-top: 0; margin-bottom: 15px;">Booking Details</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 30%;">Name:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Event:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData.eventType || bookingData.event}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Event Date:</td>
              <td style="padding: 8px 0; color: #333;">${new Date(bookingData.eventDate).toLocaleDateString()}</td>
            </tr>
            ${bookingData.budget ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget:</td>
              <td style="padding: 8px 0; color: #333;">₹${bookingData.budget.toLocaleString()}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Status:</td>
              <td style="padding: 8px 0; color: #ffc107; font-weight: bold;">${bookingData.status}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Booking ID:</td>
              <td style="padding: 8px 0; color: #333;">${bookingData._id}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
              <td style="padding: 8px 0; color: #333;">${new Date(bookingData.createdAt).toLocaleString()}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #d1ecf1; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h4 style="color: #0c5460; margin-top: 0;">Action Required</h4>
          <ul style="color: #0c5460; margin: 0; padding-left: 20px;">
            <li>Contact the client within 24 hours</li>
            <li>Review their requirements and budget</li>
            <li>Prepare a detailed proposal</li>
            <li>Update booking status in the admin panel</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <p style="color: #666; font-size: 14px;">
            This is an automated notification from the Royal Creation booking system.
          </p>
        </div>
      </div>
    `,
  };
};

// Send email to user
const sendUserConfirmationEmail = async (bookingData) => {
  try {
    console.log('Sending user confirmation email to:', bookingData.email);
    const transporter = createTransporter();
    const mailOptions = getUserEmailTemplate(bookingData);
    
    const result = await transporter.sendMail(mailOptions);
    console.log('User confirmation email sent:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending user confirmation email:', error);
    console.error('Error details:', error.message);
    return { success: false, error: error.message };
  }
};

// Send email to admin
const sendAdminNotificationEmail = async (bookingData) => {
  try {
    console.log('Sending admin notification email to:', process.env.ADMIN_EMAIL);
    const transporter = createTransporter();
    const mailOptions = getAdminEmailTemplate(bookingData);
    
    const result = await transporter.sendMail(mailOptions);
    console.log('Admin notification email sent:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    console.error('Error details:', error.message);
    return { success: false, error: error.message };
  }
};

// Send both emails
const sendBookingEmails = async (bookingData) => {
  try {
    const userEmailResult = await sendUserConfirmationEmail(bookingData);
    const adminEmailResult = await sendAdminNotificationEmail(bookingData);
    
    return {
      userEmail: userEmailResult,
      adminEmail: adminEmailResult,
    };
  } catch (error) {
    console.error('Error sending booking emails:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendUserConfirmationEmail,
  sendAdminNotificationEmail,
  sendBookingEmails,
};
