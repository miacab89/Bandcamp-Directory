

class bandHead {  
   constructor(name, genre, location, head) {
       this.head = head;
       this.name = name;
       this.genre = genre;
       this.location = location;
   }
    getHead() {
        return this.head; 
    }
    getName() {
        return this.name; 
    }
    getGenre() {
        return this.genre; 
    }
    getLocation() {
        return this.location
    }
    
    
}

module.exports = bandHead; 


