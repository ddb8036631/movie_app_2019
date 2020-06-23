import React from 'react';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://shop1.phinf.naver.net/20200216_199/158186148202051NHa_JPEG/62049749L.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "http://post.phinf.naver.net/20160804_88/bbros6_1470273529224YQQBv_JPEG/mug_obj_201608041018498505.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20161001_278%2Filove_gray_1475252597158Vg141_PNG%2FDSC08778.png&type=b400"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "http://blogfiles.naver.net/MjAxNzA4MDZfMTY2/MDAxNTAyMDI1MjkzMzM1.6StMqgLAXbks36cOFlhgYp7v9rL9El7RPRBvXiQ_0qEg.xvCD4hY5IEiossQHlXdVQ0eqqnJjgivIakpmE2erivsg.JPEG.ksc0482/%B5%B7%B0%A1%BD%BA_00000.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://blogfiles.naver.net/20150331_188/4772201_1427781960075sObqs_JPEG/2015-03-31_15%3B08%3B35.jpg"
  }
];

// function renderFood(dish) {
//    console.log(dish);

//   return <Food key={dish.id} name={dish.name} picture={dish.image} />;
// }

function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </div>
  );
}

function App() {
  return (
    <div>
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image}/>
      ))}
    </div>
  );
}

export default App;
