"use strict";

class InvalidKeyError extends Error {}
class VaultLockedError extends Error {}

function accessVault(key){
    if (key === "SECRET_123"){
        return "Access Granted";
    }
    else if (key === undefined || Number.isNaN(key)){
        throw new InvalidKeyError ("Key is missing or corrupted");
    }
    else if (key !== "SECRET_123"){
        throw new VaultLockedError ("Incorrect key provided");
    }
}

console.log(accessVault("SECRET_123"));
console.log(accessVault(undefined));
console.log(accessVault(NaN));
console.log(accessVault("random_key"));
console.log(accessVault("idk"));

