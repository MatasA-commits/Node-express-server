import { PrivateViewMovieModel } from './types';

const moviesData: PrivateViewMovieModel[] = [
  {
    id: '1',
    title: 'Harry Potter and the Sorcerers Stone',
    main_character: {
      actor: 'Daniel Radcliffe',
      role: 'Harry Potter',
    },
    images: [
      'https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTc1MDg0MDgzMV5BMl5BanBnXkFtZTcwOTIzNjUwNA@@._V1_.jpg',
      'https://www.pluggedin.com/wp-content/uploads/2019/12/harry-potter-and-the-sorcerers-stone.jpg',
    ],
    year: '2001',
    rating: 7.6,
  },
  {
    id: '2',
    title: 'Edge of Tommorow',
    main_character: {
      actor: 'Tom Cruise',
      role: 'Cage',
    },
    images: [
      'https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_.jpg',
      'https://m.media-amazon.com/images/M/MV5BMTgyMjY2NTM5NF5BMl5BanBnXkFtZTgwMzgxNTU4MTE@._V1_.jpg',
      'https://api.time.com/wp-content/uploads/2014/06/844558_full.jpg?quality=85&w=1000',
    ],
    year: '2014',
    rating: 7.9,
  },
  {
    id: '3',
    title: 'James Bond Skyfall',
    main_character: {
      actor: 'Daniel Craig',
      role: 'James Bond',
    },
    images: [
      'https://media.vanityfair.com/photos/54ca91a3b8f23e3a0313ce98/master/w_2560%2Cc_limit/image.jpg',
      'https://www.denofgeek.com/wp-content/uploads/2022/11/james-bond-skyfall.jpg?fit=2048%2C1169',
      'https://media.gq.com/photos/5ac545c74d4aaf738d975185/16:9/w_1280,c_limit/Skyfall-Peak-Menswear-gq-april-040418.jpg',
    ],
    year: '2012',
    rating: 7.8,
  },
  {
    id: '4',
    title: 'Glass Onion: A Knives Out Mystery',
    main_character: {
      actor: 'Daniel Craig',
      role: 'Benoit Blanc',
    },
    images: [
      'https://m.media-amazon.com/images/M/MV5BYmZlZDZkZjYtNzE5Mi00ODFhLTk2OTgtZWVmODBiZTI4NGFiXkEyXkFqcGdeQXVyMTE5MTg5NDIw._V1_.jpg',
      'https://occ-0-1007-2568.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABekeLR1_UTvm-LGCdAfnoJm8ghWkXLS8izpG3FQ9ok9fwONCMPKSy6iLZz82y9QqnSgbgBBJNw0DsROmZ3Ye3c0ERgCAp7yLMvy5.jpg?r=878',
      'https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQUUFWS-EYnR9Q3FDMP8Rj7u2BlemzIpCZuM-kP78uFp2mU-ZbfpY4J1j3LGkHjR6rF0r3knYGdi-rwQjDmOO27ShUACJjoIyFN5zVClGJRsEAAFPG4JluuMSJmYLeACpQRJb-CSyN0nveSbWAicz6XzzySc.jpg?r=143',
    ],
    year: '2022',
    rating: 7.2,
  },
  {
    id: '5',
    title: '1917',
    main_character: {
      actor: 'George MacKay',
      role: 'Lance Corporal Schofield',
    },
    images: [
      'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
      'https://media.cnn.com/api/v1/images/stellar/prod/191219200337-1917-movie.jpg?q=w_4500,h_3000,x_0,y_0,c_fill',
      'http://media.forumcinemas.lt/1012/Event_10162/gallery/1917-filmas-8.jpg',
    ],
    year: '2019',
    rating: 8.2,
  },
  {
    id: '6',
    title: 'Dunkirk',
    main_character: {
      actor: 'Fionn Whitehead',
      role: 'Tommy',
    },
    images: [
      'https://i.ytimg.com/vi/F-eMt3SrfFU/maxresdefault.jpg',
      'https://m.media-amazon.com/images/M/MV5BNjUwMjg0NTY5MV5BMl5BanBnXkFtZTgwODcyOTIyMjI@._V1_.jpg',
      'https://www.denofgeek.com/wp-content/uploads/2022/03/dunkirk-ww2-moments.jpg?fit=1865%2C1072',
    ],
    year: '2017',
    rating: 7.8,
  },
  {
    id: '7',
    title: 'All Quiet on the Western Front',
    main_character: {
      actor: 'Felix Kammerer',
      role: 'Paul Bäumer',
    },
    images: [
      'https://m.media-amazon.com/images/M/MV5BYTE1MmZiMWYtYTFmZi00YjA3LWI2ODgtMWFlNWYxZjdmNGE3XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX1000_.jpg',
      'https://occ-0-1360-360.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbAFrGVOP1XOWpfk5HNwoD99oSsxKSCGRrVtHCQpCIVntZdDWeCbDPAzOxDdMOB-FmFCsIuhmXXseIlvJK1XTxG8Piis7JZnXvYQ.jpg?r=f77',
      'https://compote.slate.com/images/9c69d83b-145c-4523-91da-414a9130f9fa.jpeg?crop=6036%2C4024%2Cx6%2Cy0&width=1560',
    ],
    year: '2022',
    rating: 7.8,
  },
  {
    id: '8',
    title: 'Knives Out',
    main_character: {
      actor: 'Daniel Craig',
      role: 'Benoit Blanc',
    },
    images: [
      'https://i.ytimg.com/an/xi-1NchUqMA/5962b9c2-6478-4cf2-8a20-413bcca79d94_mq.jpg?v=5e4d7e8d',
      'https://variety.com/wp-content/uploads/2020/02/knivesout_new.jpg',
      'https://m.media-amazon.com/images/M/MV5BNDM2NTBiOWYtN2E3Mi00MDdjLTk2MjMtZjlmMWE2N2QxNjdjXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg',
    ],
    year: '2019',
    rating: 7.9,
  },
  {
    id: '9',
    title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
    main_character: {
      actor: 'Johnny Depp',
      role: 'Jack Sparrow',
    },
    images: [
      'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C6AB0EDCE8F41882EBBB782B76DD4F05D7E360D7C3F23B4F6D02C24699B26105/scale?width=1200&aspectRatio=1.78&format=jpeg',
      'https://www.slantmagazine.com/wp-content/uploads/2003/07/piratesofthecaribbean.jpg',
      'https://media1.popsugar-assets.com/files/thumbor/X11whfw1UPkodJXYEIcZAM0VxTc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/02/18/844/n/1922283/3db3dccf78d46500_MCDPIOF_EC367_H/i/Pirates-Caribbean-Curse-Black-Pearl.JPG',
    ],
    year: '2003',
    rating: 8.1,
  },
  {
    id: '10',
    title: 'Black Mass',
    main_character: {
      actor: 'Johnny Depp',
      role: "James 'Whitey' Bulger",
    },
    images: [
      'https://m.media-amazon.com/images/M/MV5BNzg0ODI3NDQxNF5BMl5BanBnXkFtZTgwMzgzNDA0NjE@._V1_.jpg',
      'https://i.ytimg.com/vi/R_F-lVhSfx8/maxresdefault.jpg',
      'https://variety.com/wp-content/uploads/2015/08/black-mass.jpg?crop=0px%2C0px%2C1000px%2C557px&resize=681%2C383',
    ],
    year: '2015',
    rating: 6.9,
  },
  {
    id: '11',
    title: 'Legend',
    main_character: {
      actor: 'Tom Hardy',
      role: 'Reggie Kray',
    },
    images: [
      'https://images.moviesanywhere.com/300f4e04e7392b3c4ba8d1a0c6141915/49e74647-0018-435f-b06f-ca8960722c4e.jpg',
      'https://resizing.flixster.com/erf0iB1Sy6-pFR-duCW3Eh9uRT4=/740x380/v2/https://statcdn.fandango.com/MPX/image/NBCU_Fandango/239/503/Legend_intl_TRAILER.jpg',
      'https://static01.nyt.com/images/2015/11/20/arts/20LEGEND1/20LEGEND1-superJumbo.jpg',
    ],
    year: '2015',
    rating: 6.3,
  },
  {
    id: '12',
    title: 'No Sudden Move',
    main_character: {
      actor: 'Don Cheadle',
      role: 'Curt Goynes',
    },
    images: [
      'https://www.filmink.com.au/wp-content/uploads/2021/08/no-sudden-move-793x991.jpg',
      'https://m.media-amazon.com/images/M/MV5BY2E4MTc3YmItZDVkYS00YzNkLWI4YjAtYmUwMTIxODcyZjY0XkEyXkFqcGdeQWFybm8@._V1_.jpg',
      'https://media.newyorker.com/photos/60de1f9e609df7ed7e65f9cd/master/w_2560%2Cc_limit/Brody-NoSuddenMove.jpg',
    ],
    year: '2021',
    rating: 6.4,
  },
];

export default moviesData;
