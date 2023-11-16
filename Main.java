public class Main {
//    static void myMethod1(String fname, int age) {
//        System.out.println(fname + " is " + age);
//    }

//    static int myMethod2 (int x) {
//        return 5 + x;
//    };

    static int myMethod (int x, int y) {
        return x + y;
    };

    static void checkeAge (int age) {
        if (age < 18) {
            System.out.println("access denied");
        } else {
            System.out.println("access granted");
        }
    };

//    int myMethodLoad(int x);
//    float myMethodLoad(float x);
//    double myMethodLoad(double x, double x);

    static int plusMethod (int x, int y) {
        return x + y;
    };

    static double plusMethod (double x, double y) {
        return x + y;
    };

//    starting on OOP
    int y = 100;
    String fname ="John";
    String lname = "Doe";
    int dobYear = 1989;
    int modelYear;
    String modelName;

    //constructors review
    int jay = 10; //create a variable or attribute
    //create a class constructor for Main Class
    public Main () {
        jay = 115;
    }

    public Main (int year, String name) {
        modelYear =year;
        modelName = name;

    }



    public static void main(String[] args) {
//        myMethod("Liam", 5);
//        myMethod("Jenny", 8);
//        myMethod("Anja", 31);
//        System.out.println(myMethod(10));
        System.out.println(myMethod(5, 3));
        int z = myMethod(15, 5);
        System.out.println(z);
        checkeAge(20);
        System.out.println(plusMethod(1, 5));
        System.out.println(plusMethod(4.3, 5.6));

        Main myObj = new Main();
        System.out.println(myObj.y);
        System.out.println("Name: " + myObj.fname + " " + myObj.lname + ", "  + "Birth year: " + myObj.dobYear);
        System.out.println(myObj.dobYear);
        System.out.println(myObj.jay);

        Main myCar = new Main(1989, "Chevy"); //pass in values
        System.out.println(myCar.modelName + " " + myCar.modelYear);

    }
}