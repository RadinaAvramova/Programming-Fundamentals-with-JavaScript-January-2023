function arenaTier(arr) {
    let list = {}
    for (let el of arr) {
      if (el === 'Ave Cesar') {
        break
      }
      else if (el.includes(' -> ')) {
        add(el)
      }
      else if (el.includes(' vs ')) {
        battle(el)
      }
    }
    let tier = Object.entries(list)
    let array = []
    for (let elem of tier) {
      let name = elem[0]
      let pow = Object.entries(elem[1])
      let sum = pow.map(a => a[1]).reduce((a, b) => a + b)
      array.push([name, pow, sum])
    }
    array.sort((a, b) => b[2] - a[2] || a[0].localeCompare(b[0]))
    for (let part of array) {
      console.log(`${part[0]}: ${part[2]} skill`);
      part[1]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`- ${x[0]} <!> ${x[1]}`))
    }
   
    function add(el) {
      let [gladiator, skill, power] = el.split(' -> ')
      power = Number(power)
      if (!list.hasOwnProperty(gladiator)) {
        list[gladiator] = {}
        list[gladiator][skill] = power
      }
      else {
        if (!list[gladiator].hasOwnProperty(skill)) {
          list[gladiator][skill] = power
        }
        else {
          let oldPow = list[gladiator][skill]
          if (power > oldPow) {
            list[gladiator][skill] = power
          }
        }
      }
    }
    function battle(el) {
      let [gladiatorA, gladiatorB] = el.split(' vs ')
      if (list.hasOwnProperty(gladiatorA) && list.hasOwnProperty(gladiatorB)) {
        let skillA = list[gladiatorA]
        let skillB = list[gladiatorB]
        for (let elA in skillA) {
          for (let elB in skillB) {
            if (elA === elB) {
              if (skillA[elA] > skillB[elB]) {
                delete list[gladiatorB]
              }
              else if (skillA[elA] < skillB[elB]) {
                delete list[gladiatorA]
              }
            }
          }
        }
      }
    }
  }


  function arenaTier(input) {
    let arena = {};
    let totalSkills = {};
 
 
    for (let line of input) {
        if (line === 'Ave Cesar') {
            break;
        } else {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = Number(skill);
 
            if (technique !== undefined) {
                if (!arena[gladiator]) {
                    arena[gladiator] = {};
                    arena[gladiator][technique] = skill;
                } else {
                    if (!arena[gladiator][technique]) {
                        arena[gladiator][technique] = skill;
                    } else {
                        if (arena[gladiator][technique] < skill) {
                            arena[gladiator][technique] = skill;
                        }
                    }
                }
                getTotalSkills()
 
            } else {
                let [firstName, secondName] = gladiator.split(' vs ');
                if (arena.hasOwnProperty(firstName) && arena.hasOwnProperty(secondName)) {
                    let battleWin = false;
                    for (let techniques of Object.entries(arena[firstName])) {
                        for (let techniquesTwo of Object.entries(arena[secondName])) {
 
                            if (techniquesTwo[0] === techniques[0]) {
 
                                if (getTotalSkills(secondName) > getTotalSkills(firstName)) {
                                    delete totalSkills[firstName];
                                    delete arena[firstName];
                                    battleWin = true;
                                    break;
                                } else if (getTotalSkills(secondName) < getTotalSkills(firstName)) {
                                    delete totalSkills[secondName];
                                    delete arena[secondName];
                                    battleWin = true;
                                    break;
                                }
                            }
                        }
                        if (battleWin) {
                            break;
                        }
                    }
                }
            }
        }
    }
 
    function getTotalSkills(name) {
 
        for (let gladiator of Object.entries(arena)) {
            let sumOfSkills = 0;
            for (let technique of Object.entries(gladiator[1])) {
                sumOfSkills += technique[1];
            }
            totalSkills[gladiator[0]] = sumOfSkills;
 
        }
        return totalSkills[name];
    }
 
    let sortedByTotalSkills = Object.entries(totalSkills).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    });
 
    for (let i = 0; i < sortedByTotalSkills.length; i++) {
        console.log(`${sortedByTotalSkills[i][0]}: ${sortedByTotalSkills[i][1]} skill`);
 
        let sortedTechEntries = Object.entries(arena[sortedByTotalSkills[i][0]]).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });
 
        for (let i = 0; i < sortedTechEntries.length; i++) {
            console.log(`- ${sortedTechEntries[i][0]} <!> ${sortedTechEntries[i][1]}`);
        }
    }
}


function arenaTier(input) {
 
    const gladiators = {};
 
    for (const line of input) {
        if (line === 'Ave Cesar') {
            break;
        }
 
        if (!line.includes(' vs ')) {
            const [gladiator, technique, skill] = line.split(' -> ');
            if (!gladiators.hasOwnProperty(gladiator)) {
                gladiators[gladiator] = {};
            }
            if (!gladiators[gladiator].hasOwnProperty(technique)) {
                gladiators[gladiator][technique] = 0;
            }
            if (gladiators[gladiator][technique] < skill) {
                gladiators[gladiator][technique] = Number(skill);
            }
        } else if (line.includes(' vs ')) {
            const [gladiator1, gladiator2] = line.split(' vs ');
            if (gladiators.hasOwnProperty(gladiator1) && gladiators.hasOwnProperty(gladiator2)) {
                const firstTechniques = gladiators[gladiator1];
                const secondTechniques = gladiators[gladiator2];
 
                for (let technique of Object.entries(firstTechniques)) {
                    if (secondTechniques.hasOwnProperty(technique[0])) {
                        const firstPower = getTotalSkill(gladiators[gladiator1]);
                        const secondPower = getTotalSkill(gladiators[gladiator2]);
                        if (firstPower > secondPower) {
                            delete gladiators[gladiator2];
                            break;
                        } else if (secondPower > firstPower) {
                            delete gladiators[gladiator1];
                            break;
                        }
                    }
                }
            }
        }
    }
 
    Object.entries(gladiators)
        .sort((a, b) => getTotalSkill(b[1]) - getTotalSkill(a[1]) || a[0].localeCompare(b[0]))
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${getTotalSkill(kvp[1])} skill`);
            Object.entries(kvp[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(kvp => console.log(`- ${kvp[0]} <!> ${kvp[1]}`));
        });
 
    function getTotalSkill(man) {
        let totalSkill = 0;
        Object.keys(man).forEach(technique => totalSkill += Number(man[technique]));
        return totalSkill;
    }
 
}

function arenaTier(input = []) {
    let result = {};
    for (let i = 0; i < input.length; i++) {
      if (input[i].includes("Ave Cesar")) {
        break;
      }
      if (!input[i].includes("vs")) {
        let [name, technique, skill] = input[i].split(" -> ");
        skill = +skill;
        if (!result.hasOwnProperty(name)) {
          result[name] = {};
          result[name][technique] = skill;
        }
        if (!result[name].hasOwnProperty(technique)) {
          result[name][technique] = skill;
        } else {
          if (result[name][technique] < skill) {
            result[name][technique] = skill;
          }
        }
      } else {
        let [name1, name2] = input[i].split(" vs ");
        if (result.hasOwnProperty(name1) && result.hasOwnProperty(name2)) {
          let firstTech = [...Object.keys(result[name1])];
          let secondTech = [...Object.keys(result[name2])];
          let isTrue = false;
          for (let j = 0; j < firstTech.length; j++) {
            if (secondTech.includes(firstTech[j])) {
              isTrue = true;
              break;
            }
          }
          if (isTrue === true) {
            let firstSkill = 0;
            for (const key in result[name1]) {
              if (result[name1].hasOwnProperty(key)) {
                firstSkill += result[name1][key];
              }
            }
            let secondSkill = 0;
            for (const key in result[name2]) {
              if (result[name2].hasOwnProperty(key)) {
                secondSkill += result[name2][key];
              }
            }
            if (firstSkill > secondSkill) {
              delete result[name2];
            } else {
              delete result[name1];
            }
          }
        }
      }
    }
    let skillOrder = {};
    let names = [...Object.keys(result)];
    for (const name of names) {
      let sum = 0;
      for (const tech in result[name]) {
        sum += result[name][tech];
      }
      skillOrder[name] = sum;
    }
    let output = [...Object.entries(skillOrder)].sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < output.length; i++) {
      console.log(`${output[i][0]}: ${output[i][1]} skill`);
      let ss = [...Object.entries(result[output[i][0]])];
      for (const s of ss.sort(
        (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
      )) {
        console.log(`- ${s[0]} <!> ${s[1]}`);
      }
    }
  }

  function startSeason(input) {
    const map = new Map();
 
    for (let i = 0; i <= input.length - 1; i++) {
 
        if (input[i].includes('->')) {
            let [gladiator, technique, skill] = input[i].split(' -> ');
            skill = Number(skill);
 
            if (!map.has(gladiator)) {
                let innerMap = new Map();
                innerMap.set(technique, skill);
                map.set(gladiator, innerMap);
            } else {
                let innerMap = map.get(gladiator);
                if (!innerMap.has(technique)) {
                    innerMap.set(technique, skill);
                } else {
                    let currentPoints = map.get(gladiator).get(technique);
                    if (currentPoints < skill) {
                        map.get(gladiator).set(technique, skill);
                    }
                }
            }
 
 
        } else {
            let [gladiator1, gladiator2] = input[i].split(' vs ');
            if (map.has(gladiator1) && map.has(gladiator2)) {
                let canFight = false;
                for (let technique of map.get(gladiator1).keys()) {
                    if (map.get(gladiator2).has(technique)) {
                        canFight = true;
                        break;
                    }
                }
                if (canFight) {
                    let pointsGladiator1 = findTotalPoints(gladiator1);
                    let pointsGladiator2 = findTotalPoints(gladiator2);
 
                    if (pointsGladiator1>pointsGladiator2) {
                        map.delete(gladiator2);
                    } else if (pointsGladiator2>pointsGladiator1) {
                        map.delete(gladiator1);
                    }
                }
            }
 
        }
    }
 
    Array.from(map.keys()).sort((a,b)=>findTotalPoints(b)-findTotalPoints(a) || a.localeCompare(b)).forEach(element => {
       console.log(element+": "+findTotalPoints(element)+" skill");
       Array.from(map.get(element).entries()).sort((a,b)=>Number(b[1]-Number(a[1])) || a[0].localeCompare(b[0]))
       .forEach(e=>console.log(`- ${e[0]} <!> ${e[1]}`)); 
    });
 
    function findTotalPoints(name) {
       return Array.from(map.get(name).values()).reduce((a,b)=>a+b);
    }
}

function arenaTier(data) {
  let gladiatorsPool = new Map();
  let index = 0;
  let command = data[index];
  index++;

  while(command !== "Ave Cesar") {
    let action = command.split(" -> ");
    if (action.length === 3) {
      let [name, technique, skill] = action;
      if (!gladiatorsPool.has(name)) {
        gladiatorsPool.set(name, new Map());
      }
      if (!gladiatorsPool.get(name).has(technique) ||
          (gladiatorsPool.get(name).has(technique) && 
          gladiatorsPool.get(name).get(technique) < skill)) {
          gladiatorsPool.get(name).set(technique, Number(skill));
      }
    } else {
      let [gladiatorA, gladiatorB]= command.split(" vs ");
      if (gladiatorsPool.has(gladiatorA) && gladiatorsPool.has(gladiatorB)) {
        //'Gladius vs Julius'
        let techGladiatorA = gladiatorsPool.get(gladiatorA);
        let techGladiatorB = gladiatorsPool.get(gladiatorB);
        let bigSkillMap = Math.max(techGladiatorA.size, techGladiatorB.size)
        let smallSkillMap  = Math.min(techGladiatorA.size, techGladiatorB.size)
        for (let [techName, skill] of Array.from(bigSkillMap)) {
          if(smallSkillMap.has(techName)) {
            if(techGladiatorA.get(techName) > techGladiatorB.get(techName)) {
              techGladiatorB.delete(techName)
            } else {
              techGladiatorA.delete(techName)
            }
          }

        }
      }
    }

    command = data[index];
    index++;
  }

  let gladiatorPoints = new Map();

  for (let [gladiatorName, technique] of Array.from(gladiatorsPool)) {
    let sum = 0;
    for (let [tech, skill] of Array.from(technique)) {
      sum += skill;
    }
    if (sum !== 0) {
      gladiatorPoints.set(gladiatorName, sum);
    }
  }

  let sortGladiatorByPoints = Array.from(gladiatorPoints).sort((a,b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  })
  for (let [name, point] of sortGladiatorByPoints) {
    console.log(`${name}: ${point} skill`);
    let tech = Array.from(gladiatorsPool.get(name)).sort((a,b) => {
      return b[1] - a[1] || a[0].localeCompare(b[0]);
    });
    for ([techName, skillPoints] of tech) {
      console.log(`- ${techName} <!> ${skillPoints}`);
    }
  }
}

arenaTier([

  'Peter -> BattleCry -> 400',
  
  'Alex -> PowerPunch -> 300',
  
  'Stefan -> Duck -> 200',
  
  'Stefan -> Tiger -> 250',
  
  'Ave Cesar'
]);

arenaTier([ 'Peter -> Duck -> 400', 'Julius -> Shield -> 150', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 250', 'Gladius -> Shield -> 250', 'Peter vs Gladius', 'Gladius vs Julius', 'Gladius vs Maximilian', 'Ave Cesar' ])