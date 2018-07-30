
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Mygarden').del()
    .then(function () {
      // Inserts seed entries
      return knex('Mygarden').insert([
        {
          id: 1,
          name: "Roses",
          description: "Creeping phlox (Phlox subulata) produces a colorful spring carpet of soft pastel hues. Little expert knowledge is needed on how to plant and care for creeping phlox. Growing creeping phlox over a rockery or in tough soil conditions provides a nearly carefree ground cover or cascading plant. Consider growing it in between pavers, in a planter or just as a part of a bright spring bed as well.",
          careOfPlant: "Little special care or maintenance is necessary when growing creeping phlox. The plant benefits from an early spring application of fertilizer to encourage new growth and flowering. Even established plants should have supplemental watering in hot summer periods and plants along rockeries may show signs of scorching due to the hot surroundings. The stems can be cut back after flowering to promote a second bloom. Care of creeping phlox may also include cutting the plant back in late winter to allow for rejuvenation and to produce young, more compact stems",
         imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgreePt5DF8nSxuyn-70C_FsLWjql3G0hEIYm322yacABX0IYw"
          },
      ]);
    });
};
