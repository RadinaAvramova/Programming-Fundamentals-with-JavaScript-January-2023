function triangleArea( a, b, c ) {
    const s = (a + b + c) / 2
    return Math.sqrt( s * (s - a) * (s - b) * (s - c) )
}

triangleArea(2,3.5,4);
triangleArea(3,5.5,4);

