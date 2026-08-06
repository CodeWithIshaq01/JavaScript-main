const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
 
// console.log(marvel_heros);  ["thor", "Ironman", "spiderman"["superman", "flash", "batman"]]
                                //   0       1           2       |         3               |
                               // here problem aaray in Array
                                
// console.log(marvel_heros[3][1]); // flash


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); ["thor", "Ironman", "spiderman","superman", "flash", "batman"]
sounds good but most people perfer (spread ) below given //
                          

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros); ["thor", "Ironman", "spiderman"["superman", "flash", "batman"]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))  //false
console.log(Array.from("Hitesh")) // [`H`, `i`, `t`, `e`, `s`, `h`]
console.log(Array.from({name: "hitesh"})) // [] because array can't make a list from 
// plain object , so it gives an emoty list instead. 

let score1 = 100  /// converting numbers variables in                
let score2 = 200  // single array
let score3 = 300

console.log(Array.of(score1, score2, score3)); 