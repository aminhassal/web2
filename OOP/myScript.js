class Car {
    constructor(id, name, Model) {
        this.id = id;
        this.name = name;
        this.Model = Model;
    }
    CarAge() {
        var date = new Date();
        return date.getFullYear() - this.Model;
    }
}
function Func(){ 
    
    var Car1 = new Car(1, "Totota camry", 2004);
    var Car2 = new Car(2, "Totota corola", 2012);
    
    document.write(Car1.name + " age " + Car1.CarAge() +  " year ago" + " <br> ");
    document.write(Car2.name + " age " + Car2.CarAge() + " year ago"+ " <br> ");
    
    var z = Car1.CarAge() - Car2.CarAge();
    
    document.write("Deferent between cars is " + z + " years");

}