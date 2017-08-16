exports.seed = function(knex, Promise) {

  return knex('heroes').del()
    .then(function () {

      return knex('heroes').insert([
        {id: 51, name:'Judy Hopps', description: "officer", image_url: "https://vignette2.wikia.nocookie.net/p__/images/4/45/Judy_Hopps_Zootopia_.png/revision/latest?cb=20160311015507&path-prefix=protagonist", cartoon_id: 1},
      {id: 52, name:'Nick Wilde', description: "fox", image_url: 'http://vignette4.wikia.nocookie.net/p__/images/e/ef/Nick_Wilde_Zootopia.png/revision/latest?cb=20160222120536&path-prefix=protagonist', cartoon_id: 1},
      {id: 53, name:'Elsa', description: "princes", image_url: 'https://cdn.suwalls.com/wallpapers/cartoons/elsa-frozen-25377-1920x1200.jpg', cartoon_id: 2},
      {id: 54, name:'Anna', description: "sister", image_url: 'http://www.cartoonswallpapers.net/wallpapers/disney-frozen-movie-anna-elsa-cartoon-full-hd-wallpaper-image-android.jpg', cartoon_id: 2},
      {id: 55, name:'Smurfette', description: "girl", image_url: 'https://www.google.co.nz/url?sa=i&rct=j&q=&esrc=s&source=imgres&cd=&cad=rja&uact=8&ved=0ahUKEwit6NStntrVAhWEk5QKHRRKDO4QjRwIBw&url=http%3A%2F%2Fsmurfs.wikia.com%2Fwiki%2FSmurfette&psig=AFQjCNHuoAm7uKH6SfaBs-DBeTy9hh0DWw&ust=1502920784988617', cartoon_id: 3},
      {id: 56, name:'Papa Smurf', description: "boss", image_url: 'http://www.bettervapes.com/assets/images/papasmurf.jpg', cartoon_id: 3}
      ]);
    });
};
