export {};
// PUBLIC
class Restaurant {
    public food: string;

    constructor(food: string) {
        this.food = food;
    }

    display(): void {
        console.log("Food: " + this.food);
    }
}

let r1 = new Restaurant("Chicken Biryani");
r1.display();
console.log(r1.food);

// PRIVATE

class Mobile {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }

    unlock(): void {
        console.log("Mobile Unlocked Successfully");
    }
}

let m1 = new Mobile("mahitha@123");
m1.unlock();

// PROTECTED

class Hospital {
    protected patientName: string;

    constructor(patientName: string) {
        this.patientName = patientName;
    }
}

class Doctor extends Hospital {

    constructor(patientName: string) {
        super(patientName);
    }

    showPatient(): void {
        console.log("Patient Name: " + this.patientName);
    }
}

let d1 = new Doctor("mahitha");
d1.showPatient();