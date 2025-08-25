const emailVerificationTemplate = ({ name, url }) => {
    return`
    <p> Hello ${name},</p>
    <p> Thank you for registering with Sprightly. Please verify your email address by clicking the verify button:</p>
    <a href="${url}" style="color:white;background-color: blue; margin-top: 10px;">
        Verify Email
    </a>
    `
};

export default emailVerificationTemplate;