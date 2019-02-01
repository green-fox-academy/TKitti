class Thing {
    name: string;
    completed: boolean;

    constructor(name: string, ){
        this.name = name;
    }

    complete() {
        this.completed = true;
        if(this.completed === true) {
            this.name = '[x]' + this.name;
        }  else {
            this.name = '[]' + this.name;
        }
    }
}


export { Thing };