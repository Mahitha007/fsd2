namespace GovernmentID {

    const aadharLength = 12;

    export function validateAadhar(aadhar: string): boolean {

        const isNumeric = /^\d+$/.test(aadhar);

        return isNumeric && aadhar.length === aadharLength;
    }

    export function validatePAN(pan: string): boolean {

        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;

        return panRegex.test(pan.toUpperCase());
    }

    export namespace Tax {

        export function calculateIncomeTax(amount: number): number {

            return amount * 0.18;
        }
    }
}

const aadharNumber = "123456789012";
const myPAN = "ABCDE1234F";

console.log("Aadhar Valid:", GovernmentID.validateAadhar(aadharNumber));
console.log("PAN Valid:", GovernmentID.validatePAN(myPAN));

const billAmount = 10000;

const tax = GovernmentID.Tax.calculateIncomeTax(billAmount);

console.log(`GST on ${billAmount} is: ${tax}`);