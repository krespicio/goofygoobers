function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function calculate_BAC(drinks, weight, is_male, hours) {

    body_mass = weight / 2.205

    grams_of_alcohol = drinks * 16
    if (is_male) {
        widmark_factor = 0.68
        elimination_rate = 0.15
    }

    else {
        widmark_factor = 0.55
        elimination_rate = 0.17
    }

    BAC = ((grams_of_alcohol)/(widmark_factor * body_mass) - elimination_rate * hours)/10
    
    return round(BAC, 2)
}

function time_until_legal(drinks, weight, is_male, hours){
    
    body_mass = weight / 2.205

    time = 0
    
    while(calculate_BAC(drinks, body_mass, is_male, hours) >= 0.08) {
        time += 1
        hours += 1
    }

    return time
}

function another_shot_pls(drinks, weight, is_male, hours){
    
    body_mass = weight / 2.205

    time_until_another_drink = time_until_legal(drinks, body_mass, is_male, hours)
    
    if (time_until_another_drink != 0){
        
        return ("Bummer, you should wait $time_until_another_drink hours until your next drink.")
    }

    else {
        
        return ("GO CRAZY!!")
    }
}

function drunk_scale(drinks, weight, is_male, hours){

    bac = calculate_BAC(drinks, weight, is_male, hours)
    

    if (bac >= 0.2) {
        scale = 100
    }

    else if (bac >= 0.15) {
        scale = 10
    }

    else if (bac >= 0.1) {

        scale = 9
    }

    else if (bac >= 0.8) {

        scale = 8
    }

    else {

        scale = bac * 10
    }

    return round(scale, 1)
}

console.log(calculate_BAC(12, 381, false, 2))

module.exports = {
calculate_BAC,
time_until_legal,
another_shot_pls,
round
}