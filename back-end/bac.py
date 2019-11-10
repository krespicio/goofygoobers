def calculate_BAC(drinks, body_mass, is_male, hours):
    grams_of_alcohol = drinks * 16
    if is_male:
        widmark_factor = 0.68
        elimination_rate = 0.15

    else:
        widmark_factor = 0.55
        elimination_rate = 0.17
        
    BAC = ((grams_of_alcohol)/(widmark_factor * body_mass) - elimination_rate * hours)/10
    
    return round(BAC, 2)

def time_until_legal(drinks, body_mass, is_male, hours):
    
    time_until_legal = 0
    
    while(calculate_BAC(drinks, body_mass, is_male, hours) >= 0.08):
        time_until_legal += 1
        hours += 1

    return time_until_legal

def another_shot_pls(drinks, body_mass, is_male, hours):
    time_until_another_drink = time_until_legal(drinks, body_mass, is_male, hours)
    
    if time_until_another_drink is not 0:
        
        return ("Bummer, you should wait %d hours until your next drink." % time_until_another_drink)

    else:
        
        return ("GO CRAZY!!")