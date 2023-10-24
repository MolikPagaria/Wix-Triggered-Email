import { emailMember } from 'backend/triggeredEmails.jsw';
export function wixForms2_wixFormSubmitted() {
    emailMember({
        "variables": {
            whatsapp: $w('#mobilenumber').value
        }
    })
}