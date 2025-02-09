// implementation of a basic hash map in js

class HashMap {
    // construct hash map
    constructor(size) {
        // give hash map a size
        this.data = new Array(size);
    }

    // crude hash function
    _hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    // sets a key:value pair
    set(key, value) {
        // hash the key
        let index = this._hash(key);

        // check if hash index is empty
        if (!this.data[index]) {
            // if it is, declare array
            this.data[index] = [];
        }
        // add the key:value pair as an array to the array at index of key
        this.data[index].push([key, value]);
    }


    // retrieve value of key:value pair
    get(key) {
        // hash the key
        let index = this._hash(key);

        // ensure key index exists in hash map
        if (this.data[index]) {
            // loop over any arrays at the index
            for (let i = 0; i < this.data[index].length; i++) {
                // check if hash value exists in array
                if (this.data[index][i][0] === key) {
                    // if it does, return the value
                    return this.data[index][i][1];
                }
            }
        }
        // return as undefined if key index does not exist
        return undefined;
    }

    // returns array of all keys
    keys() {
        // declare array to store keys
        let allKeys = [];

        // loop over every index
        for (let i = 0; i < this.data.length; i++){
            // check if index contains data
            if (this.data[i]){
                // loop over every item of data
                for (let j = 0; j < this.data[i].length; j++) {
                    // push key to array
                    allKeys.push(this.data[i][j][0]);
                }
            }
        }
        return allKeys;
    }
}

let myHashMap = new HashMap(100);
