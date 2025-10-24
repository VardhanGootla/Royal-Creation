# Email Setup Instructions

This document explains how to set up email functionality for the Royal Creation booking system.

## Prerequisites

1. A Gmail account (or any email service that supports SMTP)
2. Node.js and npm installed
3. The backend dependencies installed (`npm install`)

## Email Configuration

### 1. Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

### 2. Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/royal-creation

# JWT Secret
JWT_SECRET=your_jwt_secret_here

# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
ADMIN_EMAIL=admin@royalcreation.com

# Server
PORT=5000
```

**Important**: Replace the placeholder values with your actual credentials.

### 3. Alternative Email Services

If you prefer to use a different email service, update the `createTransporter` function in `backend/services/emailService.js`:

```javascript
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: 'smtp.your-provider.com', // e.g., 'smtp.outlook.com'
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};
```

## Testing Email Functionality

### 1. Test the Email Service

Run the test script to verify email configuration:

```bash
cd backend
node test-email.js
```

### 2. Test with a Real Booking

1. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

2. Start the frontend:
   ```bash
   cd frontend
   npm start
   ```

3. Navigate to the booking page and submit a test booking
4. Check your email inbox for confirmation emails

## Email Templates

The system sends two types of emails:

### 1. User Confirmation Email
- Sent to the customer who made the booking
- Contains booking details and next steps
- Professional, branded template

### 2. Admin Notification Email
- Sent to the admin/team
- Contains all booking details
- Includes action items for follow-up

## Troubleshooting

### Common Issues

1. **"Invalid login" error**:
   - Make sure you're using an App Password, not your regular Gmail password
   - Verify 2-Factor Authentication is enabled

2. **"Less secure app access" error**:
   - Use App Passwords instead of enabling less secure apps
   - App Passwords are more secure

3. **Emails not being sent**:
   - Check the console logs for error messages
   - Verify all environment variables are set correctly
   - Test with the `test-email.js` script

4. **Emails going to spam**:
   - Add your email address to the recipient's contacts
   - Consider using a professional email service for production

### Debug Mode

To see detailed email sending logs, check the console output when running the server. The email service logs success/failure messages.

## Production Considerations

1. **Use a professional email service** like SendGrid, Mailgun, or AWS SES for production
2. **Set up proper DNS records** (SPF, DKIM, DMARC) to improve deliverability
3. **Monitor email delivery rates** and handle bounces
4. **Consider email templates** with your branding
5. **Implement email queuing** for high-volume scenarios

## Security Notes

- Never commit the `.env` file to version control
- Use strong, unique passwords for email accounts
- Regularly rotate App Passwords
- Monitor email account activity for suspicious behavior
