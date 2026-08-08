function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
function wrapInBox<T>(item:T):{parcel: T;timestamp:Date}{
    return {
        parcel:item,
        timestamp: new Date()
    };
}
const cities=["mumbai","delhi","kolkata"];
const firstCity = getFirstPackage<string>(cities);
console.log(`sending first parcel to :${firstCity.toUpperCase()}`);
const pincodes=[400001,110001,560001];