function cats(arr) {
 
    class Cat {
        constructor(name,age) {
            this.name = name;
            this.age = age;
        }
 
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
 
    for (let i = 0; i < arr.length; i++) {
        let catData = arr[i].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        let cat = new Cat(name, age);
 
        cat.meow();
    }
}


function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const line of input) {
        // let [name, age] = line.split(' '); // ['mellow', '2']
        let args = line.split(' ');
        let name = args[0];
        let age = Number(args[1]);

        let cat = new Cat(name, age);
        cat.meow();
    }
}


function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for(let catInfo of input) {
        let [name, age] = catInfo.split(" ");
        let newCat = new Cat(name, age);
        newCat.meow();
    }
}

cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);