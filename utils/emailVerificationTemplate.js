const emailVerificationTemplate = ({ name, url }) => {
    return `
    <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
        <p>Hello ${name},</p>
        <p>Thank you for registering with Sprightly. Please verify your email address by clicking the button below:</p>
        <a href="${url}" 
            style="
                display: inline-block;
                background-color: #071263;
                color: #ffffff;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                font-weight: bold;
                margin-top: 10px;
            ">
            Verify Email
        </a>
        <p>If the button doesn't work, copy and paste this link into your browser:</p>
        <p style="word-break: break-all;"><a href="${url}" style="color:#071263;">${url}</a></p>
    </div>
    `;
};

export default emailVerificationTemplate;
