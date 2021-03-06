//////////////////////////////////////////////////////  Functions
/*
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const fin = describeCountry('Finland', 6, 'Helsinki');
const usa = describeCountry('USA', 800, 'Washington D.C.');
const ger = describeCountry('Germany', 83, 'Berlin');
    console.log(fin, usa, ger);
    



    //////////////////////////////////////////////////  Function Declarations vs. Expressions

    function percentageOfWorld1(population) {
        return (population / 7900) * 100;
    }
    const percentageOfWorld2 = function (percentageOfWorld) {
        return (population / 7900) * 100; 
    }

    const percPortugal1 = percentageOfWorld1(10);
    const percChina1 = percentageOfWorld1(1441);
    const percUSA1 = percentageOfWorld1(332);
    console.log(percPortugal1, percChina1, percUSA1);




//////////////////////////////////////////////////////  Arrow Functions

// const percentageOfWorld3 = population => (population / 7900) *100;
//  const percPortugal1 = percentageOfWorld3(10);
//     const percChina1 = percentageOfWorld3(1441);
//     const percUSA1 = percentageOfWorld3(332);
//     console.log(percPortugal1, percChina1, percUSA1);




//////////////////////////////////////////////////////  Functions Calling Other Functions

const describePopulation = function (country, population) {
 const percentage = percentageOfWorld1(population);
 const description = `${country} has ${population} million
 people, which is about ${percentage}% of the world.`;
 console.log(description);
 };
 describePopulation('Portugal', 10);
 describePopulation('China', 1441);
 describePopulation('USA', 332);



 ///////////////////////////////////////////////////  Introduction to Arrays

  function percentageOfWorld1(populations) {
        return (populations / 7900) * 100;
    }

 const populations = [10, 20, 30, 40];
 console.log(populations.length === 4);

 const percentages = [
     percentageOfWorld1(populations [0]),
     percentageOfWorld1(populations [1]),
     percentageOfWorld1(populations [2]),
     percentageOfWorld1(populations [3])
 ];
 console.log(percentages);
 */


 ///////////////////////////////////////////////////  Basic Array Operations (Methods)

 const neighbors = ['Canada', 'Mexico']
 console.log(neighbors);

 neighbors.push('Utopia');
 console.log(neighbors);

 neighbors.pop();
 console.log(neighbors);

 if (!neighbors.includes('Germany')) {
     console.log('Probably not a Central European country.');
 }

 neighbors[neighbors.indexOf('Canada')] = 'Country of Canada';
 console.log(neighbors);




 ////////////////////////////////////////////////////////////////////////  Dot vs. Bracket Notation


console.log(`${neighbors[0]} has `)




/////////////////////////////////////////////////////////////////////////  Object Methods


