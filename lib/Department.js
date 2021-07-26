const viewDepartments = () => {
    
}

class createDepartment {
    constructor( id, name ) {
    this.id = id;
    this.name = name;
    }
    printDepartment() {
        console.log(this.name)
    }
}

module.exports = createDepartment;