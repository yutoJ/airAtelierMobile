const initialState = {
  rooms: [
    {
      id: 1,
      title: 'New York',
      homeType: 'House',
      image: {uri: 'https://i.pinimg.com/originals/47/f9/36/47f936a0115aa0ee91ee53b2f85bf90e.jpg'},
      bedRoom: 2,
      price: 150,
      instant: true
    },
    {
      id: 2,
      title: 'Melbourne',
      homeType: 'Apartment',
      image: {uri: 'https://cdn.trendhunterstatic.com/thumbs/nettleton-198-by-saota.jpeg'},
      bedRoom: 3,
      price: 250,
      instant: false
    },
    {
      id: 3,
      title: 'Paris',
      homeType: 'House',
      image: {uri: 'http://cdn.trendir.com/wp-content/uploads/2016/09/Glass-Graham-House-by-E.-Cobb-Architects-900x751.jpg'},
      bedRoom: 1,
      price: 99,
      instant: true
    },
  ]
};

export default function(state = initialState, action) {
  return state;
}
