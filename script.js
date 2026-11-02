"use strict";

class InvalidKeyError extends Error {}
class VaultLockedError extends Error {}

function accessVault(key){
    if (key === "SECRET_123"){
        return "Access Granted";
    }
    else if (key === undefined || Number.isNaN(key)){
        throw new InvalidKeyError("Key is missing or corrupted");
    }
    else if (key !== "SECRET_123"){
        throw new VaultLockedError("Incorrect key provided");
    }
}

function attemptEntry(key){
    try {
        return accessVault(key);

    }catch (error){
        if (error instanceof VaultLockedError){
            return "User Error: Please try again.";
        }
        else if (error instanceof InvalidKeyError) {
            return "Security Alert: System corruption detected.";
        }
        else{
            console.log(error);
        }
    } 
    finally {
            console.log("Vault attempt completed. \n");
    }
}  

function testAccessVaultVaultLockedError() {    
    try { 
        accessVault(NaN); 
        return false; 
    } catch(e) { 
        return e instanceof VaultLockedError; 
    }
}

function testAccessVaultInvalidKeyError() {    
    try { 
        accessVault(undefined); 
        return false; 
    } catch(e) { 
        return e instanceof InvalidKeyError; 
    }
}

function testAccessVaultSuccess() {    
    try { 
        return accessVault("SECRET_123") === "Access Granted"; 
    } catch(e) { 
        return false; 
    }
}

//console.log(attemptEntry("SECRET_123"));
console.log(attemptEntry(undefined));
//console.log(attemptEntry(NaN));
//console.log(attemptEntry("random_key"));
//console.log(attemptEntry("idk"));
console.log("Success Test:", testAccessVaultSuccess());
console.log("InvalidKey Test:", testAccessVaultInvalidKeyError());
console.log("VaultLocked Test:", testAccessVaultVaultLockedError());