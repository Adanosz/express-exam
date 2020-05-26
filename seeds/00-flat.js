exports.seed = (knex) => {
  return knex('flats').insert([
    {
      title: 'first-flat',
      price: 11000000,
      floorArea: 40,
      country: 'Hungary',
      zip: 6722,
      city: 'Szeged',
      street: 'Gyöngytyúk'
    },
    {
      title: 'second-flat',
      price: 17000000,
      floorArea: 66,
      country: 'Hungary',
      zip: 6722,
      city: 'Szeged',
      street: 'Retek'
    },
    {
      title: 'third flat',
      price: 32000000,
      floorArea: 70,
      country: 'Hungary',
      zip: 6722,
      city: 'Szeged',
      street: 'Semmelweis'
    }
  ]);
};