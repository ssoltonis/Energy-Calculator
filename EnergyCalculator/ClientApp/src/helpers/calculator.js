export function calculateKineticEnergy(mass, velocity) {
    var energy = 0.5 * (mass * (velocity * velocity));
    return energy;
}

export function getComment(kineticEnergy) {
    if (kineticEnergy > 1000000000){
        return 'Don\'t play with this! This could end your existency!'
    }
    else if (kineticEnergy > 1000000) { 
        return 'Be careful! This could make some serious damage!'
    }
    else {
        return 'Don\'t worry! It\'s too small to cause any trouble.'
    }

}