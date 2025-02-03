interface person2 { 
    name: string,
    age: number,
    occupation: string
}

type personKeys = keyof person2;

let keys: personKeys = 'name';
