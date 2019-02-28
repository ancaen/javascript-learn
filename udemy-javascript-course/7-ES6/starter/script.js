/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElements {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
  
  calculateAge() {
    return new Date().getFullYear() - this.buildYear;
  }
}

class TownStreet extends TownElements {
  constructor(name, buildYear, streetLength, size = 3) {
    super(name, buildYear);
    this.streetLength = streetLength; 
    this.size = size;
  }

  classifyStreet() {
    const classification =  new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`This ${this.name} is a street of size ${classification.get(this.size)}`);
  }
}

class TownPark extends TownElements {
  constructor(name, buildYear, numberOfTrees, areaSize) {
    super(name, buildYear);
    this.numberOfTrees = numberOfTrees;
    this.areaSize = areaSize;
  }

  calculateTreeDensity() {
    return (Math.floor(this.numberOfTrees / this.areaSize * 100) / 100);
  }
}

class Town {
  constructor(streets = [], parks = []) {
    this.streets = streets;
    this.parks = parks;
    this.parkTreeDensity = null;
  }

  getParksTreeDensities() {
    return this.parks.map( cur => `${cur.name} with density ${cur.calculateTreeDensity()}`);
  }

  getParksAverageAge() {
    let sum = 0;
    this.parks.forEach( cur => sum += cur.calculateAge() );
    return (Math.floor(sum/this.parks.length * 100) / 100 );
  }

  getParksWithTreesMoreThan(treesMax) {
    let result = [];
    this.parks.forEach( cur => {
      if (cur.numberOfTrees > treesMax) {
          result.push(cur.name)
      };
      return;
    });
    return result;
  }

  getStreetsTotalAvg() {
    const sum = this.streets
      .map(el => el.streetLength)
      .reduce((prev, curr, index) => (prev + curr), 0);
    return [ sum, sum / this.streets.length];
  }

  getAllStreetClassiffication() {
    return this.streets.forEach(cur => cur.classifyStreet());
  }
}

const streets = [
  new TownStreet('Potters Wheel', 1990, 200,1),
  new TownStreet('Old Abbey', 1900, 250, 2),
  new TownStreet('Trafalgar', 1995, 500, 4),
  new TownStreet('Malboro Court', 1982, 560, 4),
];

const parks = [
  new TownPark('Pilgrim Park', 1990, 45, 400),
  new TownPark('Lorelai Park', 1985, 200, 550),
  new TownPark('Blue Trail', 1900, 1020, 600),
];

const town = new Town(streets, parks);

console.log(town.getParksTreeDensities());
console.log(`Average age of town parks is : ${town.getParksAverageAge()}`);
console.log(`The parks with more than 1000 trees are : ${town.getParksWithTreesMoreThan(1000)}`);
console.log(`Total length and avg of town streets length is : ${town.getStreetsTotalAvg()}`);
//console.log(`Average street length is : ${town.getAverageStreetsLength()}`);
town.getAllStreetClassiffication();