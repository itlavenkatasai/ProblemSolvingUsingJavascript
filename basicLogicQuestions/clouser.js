function outer() {
    function inner1() {
        function inner2() {
            console.log("i am inner 2",a);
        }
        inner2();
    }
    inner1();
}
var a = 10;
outer();