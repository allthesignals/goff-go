const TIERS = [
  ['diamond', 12],
  ['gold', 0, 4, 20, 24],
  ['bronze', 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23],
  ['silver', 2, 6, 8, 10, 14, 16, 18, 22],
];

export function getTier(tilePosition) {
  const [tierName] = TIERS.find(([, ...positions]) => {
    return positions.includes(tilePosition);
  });

  return tierName;
}

export default TIERS;
