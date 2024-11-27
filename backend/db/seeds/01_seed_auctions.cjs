/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('auctions').del()
  await knex('auctions').insert([
    {
      uid: 'test_id', title: 'Headphones', description: 'Barely used modern headphones for cheap!', price: 100,
      min_bid_increment: 10, image: "adv-web-headphones.jpg", end_time: '2024-10-30 15:00:00+02'
    },
    {
      uid: 'test_id', title: 'Kettle', description: 'Old kettle, good quality', price: 50, 
      min_bid_increment: 5, image: "kettle.jpg", end_time: '2024-11-20 15:00:00+02'
    },
  ]);
};
