var facts = [
    'The energy received from the sun to power your home is called Solar Energy, and this is possible through a Solar panel.',
    'Wind energy comes from the wind and can be used to power a number of homes. This is possible through wind turbine.',
    'In Nigeria, Solar panles are an important element in the plan to increase energy access in the country.',
    'If you boil a kettle of water twice every day, that is equivalent to 1% of an average UK monthly energy bill.'
]

function newFacts() {
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('factDisplay').innerHTML = facts[randomNumber];
}