class Test{
    Test(int number1, int number2 ){
        System.out.println("int constructor invoked");
        int res = number1+number2;
        System.out.println("Add===> " + res );
    }
    Test(double number1 ){
        System.out.println("double constructor invoked with one parameter");
        System.out.println("number=>" + number1 );
    }

    public static void main(String[] args) {
        Test test = new Test(4,5);
        Test test1 = new Test(4.50000);

    }

}