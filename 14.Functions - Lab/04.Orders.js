function orders(orderMethod,numberMethod) {
        switch (orderMethod) {
            case "coffee":
                console.log((numberMethod * 1.50).toFixed(2));
                break;
            case "water":
                console.log((numberMethod * 1.00).toFixed(2));
                break;
            case "coke":
                console.log((numberMethod * 1.40).toFixed(2));
                break;
            case "snacks":
                console.log((numberMethod * 2.00).toFixed(2));
                break;
            default:
                break;
        }
}

function orders(type, quantity) {
    let result = 0.00;
    switch (type) {
        case "coffee":
            result = quantity * 1.50;
            break;
        case "water":
            result = quantity * 1.00;
            break;
        case "coke":
            result = quantity * 1.40;
            break;
        case "snacks":
            result = quantity * 2.00;
            break;
        default:
            break;
    }
    console.log(result.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);