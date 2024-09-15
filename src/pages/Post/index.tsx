import React, { FC, ChangeEvent, useState, useEffect } from 'react'
const postData = [
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
   {
      id: 1234,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
      author: {
         id: 5,
         name: 'Chelsey Dietrich',
         username: 'Kamren',
         email: 'Lucio_Hettinger@annie.ca',
         pathImg: 'img',
         age: 23,
         address: {
            street: 'Skiles Walks',
            suite: 'Suite 351',
            city: 'Roscoeview',
            zipcode: '33263',
            geo: {
               lat: '-31.8129',
               lng: '62.5342',
            },
         },
         phone: '(254)954-1289',
         website: 'demarco.info',
         company: {
            name: 'Keebler LLC',
            catchPhrase: 'User-centric fault-tolerant solution',
            bs: 'revolutionize end-to-end systems',
         },
         status: 'active',
      },
      date: Date(),
      status: true,
   },
]
const Post = () => {
   const [postResource, setPostResource] = useState<Posts[]>(postData)

   useEffect(() => {}, [postResource])

   const [title, setTitle] = useState<string>('')
   const [content, setContent] = useState<string>('')
   const [author, setAuthor] = useState<string>('')

   const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {}

   const addData = () => {
      //    const newData
      //   setPostResource(...postResource, newData)
   }
   return (
      <div>
         <input type="text" />
      </div>
   )
}

export default Post
