function cone(r, h) {
    let volu = (((Math.PI * r * r) * h) / 3).toFixed(4);
    let str = 'volume'
    console.log(`${str} = ${volu}`);
    let s = Math.sqrt(r * r + h * h);
    let arr =  Math.PI * r * (r + s);
    let str1 = 'area';
    console.log(`${str1} = ${arr.toFixed(4)}`);
}

function cone(radius, height) {
    let volume = 0;
    let slantHeight = 0;
    totalSurfaceArea = 0;
    pi = Math.PI;
 
 
    slantHeight = Math.sqrt((radius * radius + height * height));
    volume = ((1/3 * pi) * (radius * radius)) * height;
    totalSurfaceArea = pi * radius * (radius + Math.sqrt(radius * radius + height * height));
 
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
 
}

cone(3, 5);
cone(3.3,7.8);