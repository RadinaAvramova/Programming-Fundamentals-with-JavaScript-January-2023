function sortArray(input) {
    input.sort(twoCriteriaSort);
    input.forEach(el => console.log(el));
  
    function twoCriteriaSort(cur, next) {
      if (cur.length === next.length) {
        return cur.localeCompare(next);
      }
      return cur.length - next.length;
    }
}

function sortArray(input) {
    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}

function sortAnArrayBy2Criteria(input) {
    input.sort((a,b) => {
        if (a.length - b.length == 0) {
            return a.localeCompare(b);
        }
        return a.length - b.length
    })
    console.log(input.join("\n"));
}

sortAnArrayBy2Criteria(['alpha','beta','gamma']);
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
