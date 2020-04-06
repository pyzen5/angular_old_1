export class Person {
    constructor(public name: string, public place: string) {}
    // Declares a constructor parameter and its type.
    // Declares a public property of the same name.
    // Initializes that property with the corresponding argument when creating an instance of the class.

    // If public is not mentioned, then in the component template it will throw error when accessed
}
