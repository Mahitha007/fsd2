class Locker<T> {

    private contents: T;

    constructor(initialItem: T) {
        this.contents = initialItem;
    }

    public getItem(): T {
        console.log("Accessing locker...");
        return this.contents;
    }
}

const cashLocker = new Locker<number>(5000);

const cash = cashLocker.getItem();

console.log(`Current Balance: ${cash}`);

const documentLocker = new Locker<string>("Property papers - Mumbai Flat");

console.log(`Document in locker: ${documentLocker.getItem()}`);

interface Gold {
    weightGrams: number;
    purity: string;
}

const goldLocker = new Locker<Gold>({
    weightGrams: 50,
    purity: "24K"
});

const myGold = goldLocker.getItem();

console.log(`Gold in locker: ${myGold.weightGrams} grams`);