/**
 * Tell if array B of the array A
 * @param {[Number]} a Main array
 * @param {[Number]} b Array to evaluate if it is part of Array a
 */
const containOrEqualArray = (a, b) => b.map(e => a.includes(e)).every(e => e);


export function groupBySequence(list) {
    return list.reduce((acc, cur) => {
      if (acc.length < 1) return acc = [[cur]];
  
      const group = acc[acc.length - 1];
      const lastGroupItem = group[group.length - 1];
  
      if (cur - lastGroupItem === 1) {
        group.push(cur);
      } else {
        acc.push([cur]);
      }
  
      return acc;
    }, [])
  }

export default function(list) {
    let formatedDay = list.map(e => Number(e)).sort((a, b) => a - b)

    formatedDay = [...formatedDay, ...formatedDay.map(e => e + 7)]
    
    formatedDay = groupBySequence(formatedDay)

    formatedDay = formatedDay.map(list => list.map(e => e % 7))

    return formatedDay
    .sort((a, b) => a.length - b.length)
    .filter((group, index, self) => !self.slice(index + 1).map(e => containOrEqualArray(e, group)).some(e => e))
    .sort((a, b) => a[0] - b[0])
}