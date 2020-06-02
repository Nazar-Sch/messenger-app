import { SEND_MESSAGE, SELECT_ID, GET_JOKE } from '../constants/types';
import AliceAvatar from '../../assets/images/webp/alice.webp'
import JoseffinaAvatar from '../../assets/images/webp/josefiena.webp'
import VelazzquezAvatar from '../../assets/images/webp/velazzquez.webp'
import BarrieraAvatar from '../../assets/images/webp/bareira.webp'

const initialState = {
    contacts: [
        {
            name: 'Alice Freewoman',   
            avatar: AliceAvatar,   
            messagesList: [
                {
                    message: 'You are the worst!',
                    date: '2019-01-12T09:45:42',
                    sent: false,
                },
                {
                    message: 'Ok',
                    date: '2019-01-12T09:45:42',
                    sent: true,
                },
                {
                    message: `You can type and get a Chuck Norris Joke. Let's try it`,
                    date: '2019-01-12T09:45:42',
                    sent: false,
                },
            ],
            id: 1,
            checkedProfile: true,
        },
        {
            name: 'Josefiena',   
            avatar: JoseffinaAvatar,              
            messagesList: [
                {
                    message: 'Quickly come to the meeting room 18, we have a big server issue',
                    date: "2019-02-18T10:20:23",
                    sent: false,
                },
                {
                    message: `I'm having a breakfast right now, can't you wait for 10 minutes?`,
                    date: '2020-02-18T10:21:10',
                    sent: true,
                },
                {
                    message: 'We are loosing money! Quick!',
                    date: '2019-02-18T10:24:40',
                    sent: false,
                },
            ],
            id: 2,
            checkedProfile: true,
        },
        {
            name: 'Velazzquez',   
            avatar: VelazzquezAvatar,   
            messagesList: [
                {
                    message: 'Hi. How are you?',
                    date: "2019-03-18T12:04:23",
                    sent: false,
                },
                {
                    message: `Hi, very well. And you?`,
                    date: '2020-03-18T12:34:10',
                    sent: true,
                },
                {
                    message: 'Quickly come to the meeting room 1B, we have a big server issue',
                    date: '2019-03-18T12:59:40',
                    sent: false,
                },
            ],
            id: 3,
            checkedProfile: true,
        },
        {
            name: 'Bareira',   
            avatar: BarrieraAvatar,   
                messagesList: [
                    {
                        message: 'Hi. I have a problem. Can you help me?',
                        date: "2019-10-10T10:20:23",
                        sent: false,
                    },
                    {
                        message: `Yes. Of course`,
                        date: '2020-02-10T10:21:10',
                        sent: true,
                    },
                    {
                        message: 'Please, come to me in five minutes',
                        date: '2019-10-10T10:24:40',
                        sent: false,
                    },
                    {
                        message: 'Ok.',
                        date: '2019-10-10T10:24:40',
                        sent: true,
                    },
                    {
                        message: `Thank you`,
                        date: '2019-10-10T10:24:40',
                        sent: false,
                    },
                ],
                id: 4,
                checkedProfile: false,
        },
    ],
    selectedId: null,
  };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ID: {            
            return {
              ...state, 
              selectedId: action.payload,
            };
          }
        case SEND_MESSAGE: {
            return {
                ...state,
                contacts: state.contacts.map(dialog => {
                    if(dialog.id === action.id) {
                        return {
                            ...dialog,
                            messagesList: [
                                ...dialog.messagesList,
                                action.payload,
                            ]
                        }}
                        return dialog;
                })
            }
        }
        case GET_JOKE: {
            return {
                ...state,
                contacts: state.contacts.map(dialog => {
                    if(dialog.id === action.id) {
                        return {
                            ...dialog,
                            messagesList: [
                                ...dialog.messagesList,
                                action.payload,
                            ]
                        }}
                        return dialog;
                })
            }
        }
        default:
            return state;
        }
};
export default rootReducer;