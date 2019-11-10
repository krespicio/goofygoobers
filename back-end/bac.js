function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function calculate_BAC(drinks, body_mass, is_male, hours) {

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

function time_until_legal(drinks, body_mass, is_male, hours){
    
    time = 0
    
    while(calculate_BAC(drinks, body_mass, is_male, hours) >= 0.08) {
        time += 1
        hours += 1
    }

    return time
}

function another_shot_pls(drinks, body_mass, is_male, hours){
    time_until_another_drink = time_until_legal(drinks, body_mass, is_male, hours)

    console.log(time_until_another_drink)
    
    if (time_until_another_drink != 0){
        
        return ("Bummer, you should wait $time_until_another_drink hours until your next drink.")
    }

    else {
        
        return ("GO CRAZY!!")
    }
}