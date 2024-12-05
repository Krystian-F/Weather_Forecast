const pickLocation = function () {
  const locations = ['Berlin', 'London', 'New York', 'Warsaw'];
  let randomLocation = locations[Math.floor(Math.random() * locations.length)];
  return randomLocation;
}

export { pickLocation };

