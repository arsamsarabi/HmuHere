import type { Chatroom } from '../types'

export const mockChatrooms: Chatroom[] = [
  {
    id: '1',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri: 'https://i.pravatar.cc/300',
      },
      {
        id: 'u2',
        name: 'Lukas',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm1',
      content: 'Well done this sprint, guys! Lets do it again next time and win!',
      createdAt: '2021-05-22T22:48:00.000Z',
    },
  },
  {
    id: '2',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u3',
        name: 'Daniil',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm2',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    },
  },
  {
    id: '3',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u4',
        name: 'Alex',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm3',
      content: 'Hi, Vadim.',
      createdAt: '2020-10-02T14:48:00.000Z',
    },
  },
  {
    id: '4',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u5',
        name: 'Vlad',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm4',
      content: 'Can you review my last merge',
      createdAt: '2020-09-29T14:48:00.000Z',
    },
  },
  {
    id: '5',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u6',
        name: 'Elon Musk',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm5',
      content: 'I would be happy',
      createdAt: '2020-09-30T14:48:00.000Z',
    },
  },
  {
    id: '6',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u7',
        name: 'Adrian',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm6',
      content: 'I have a solution',
      createdAt: '2020-10-02T15:40:00.000Z',
    },
  },
  {
    id: '7',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u8',
        name: 'Borja',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm7',
      content: 'How are you doing?',
      createdAt: '2020-10-02T15:40:00.000Z',
    },
  },
  {
    id: '8',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u9',
        name: 'Mom',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm8',
      content: 'Dear, did you eat?',
      createdAt: '2020-09-27T15:40:00.000Z',
    },
  },
  {
    id: '9',
    users: [
      {
        id: 'u1',
        name: 'Vadim',
        imageUri:
          'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
      },
      {
        id: 'u10',
        name: 'Angelina Jolie',
        imageUri: 'https://i.pravatar.cc/300',
      },
    ],
    lastMessage: {
      id: 'm9',
      content: 'Meet me at the same place',
      createdAt: '2020-09-25T15:40:00.000Z',
    },
  },
]
