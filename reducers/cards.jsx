import { OPEN_CARD, DROP_CARD} from '../constants/ActionTypes';

const initialState = [{
  id:2,
  title: 'kek',
  lat: 55,
  lng: 36,
  img: '',
  link: '',
  mark: 3,
  shortDescription: '',
  description: ''
}];

const cardsPool = [
  {
    id: 1,
    title: 'Burger Story',
    lat: 55.781077,
    lng: 37.6000041,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/e5/4b/c7/burger-story.jpg',
    link: 'http://burgerstory.eu/ru/',
    mark: 4.3,
    shortDescription: 'Кафе на Новослобоской улице',
    description: 'Ублюдок, мать твою, а ну иди сюда говно собачье, решил ко мне лезть? Ты, засранец вонючий, мать твою, а? Ну иди сюда, попробуй меня трахнуть, я тебя сам трахну ублюдок, онанист чертов, будь ты проклят, иди идиот, трахать тебя и всю семью, говно собачье, жлоб вонючий, дерьмо, сука, падла, иди сюда, мерзавец, негодяй, гад, иди сюда ты - говно, ЖОПА!'
  },
  {
    id:2,
    title: 'kek',
    lat: 55,
    lng: 36,
    img: '',
    link: '',
    mark: 3,
    shortDescription: '',
    description: ''
  },
  {
    id: 3,
    lat: 55.7828555,
    lng: 37.5982967,
    title: 'Lucky Burger',
    img: 'https://lh4.googleusercontent.com/proxy/cuHP-s9wAzsANocs7dfXd4xwl5UiOYdIN-xvkdlphu9-b-jAqVuNsgc1lXI709545JbvpLNFwFrtyIZJoObN4d_KZEYnmPTIyjIGx-skZCxrBxF11ojeRnA=s512-k-no',
    link: 'http://www.myluckyburger.com/',
    mark: 4,
    shortDescription: 'Кафе на Новослобоской улице',
    description: 'Ублюдок, мать твою, а ну иди сюда говно собачье, решил ко мне лезть? Ты, засранец вонючий, мать твою, а? Ну иди сюда, попробуй меня трахнуть, я тебя сам трахну ублюдок, онанист чертов, будь ты проклят, иди идиот, трахать тебя и всю семью, говно собачье, жлоб вонючий, дерьмо, сука, падла, иди сюда, мерзавец, негодяй, гад, иди сюда ты - говно, ЖОПА!'

  }
];

export default function cards(state = initialState, action) {
  switch (action.type) {
  case OPEN_CARD:
    return cardsPool.filter((card) =>
      card.id === action.id
    );

  case DROP_CARD:
    return {};

  default:
    return state;
  }
}
