const express = require("express")
const cors = require("cors")
const app = express()
const port = 3001

app.use(cors())
app.listen(port,() => {console.log(`App is listening on port ${port}`)})

app.get("/",(req,res) => {
  console.log(req)
//   res.send({ 
//     message: "hello world from express!",
//     title: "This is Lorem Ipsum :)",
//     summary: "It is a bit of text people use a lot. It's kinda funny.",
//     day: new Date(),
//     jsonThing: {title: "Foo", title2: "Bar"},
//     arrayOfNums: [1,2,3,4]
//  })

//  res.sendFile("/home/dc/nodeCode/personal-website-backend/beaver.jpg", function (err) {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('Sent:', "beaver.jpg")
//     }
//  })
  res.send({
    title: "My First Blog Post",
    date: "May 14th, 2024",
    series: "My First Website",
    arrayOfImageURLS: [
      "/home/dc/nodeCode/personal-website-backend/beaver.jpg",
      "/home/dc/nodeCode/personal-website-backend/beaver2.jpeg"
    ],
    arrayOfParagraphText: [
      "This is a beaver.",
      "Isn't it just adorable?",
      "This is another beaver"
    ],
    arrayOfHeaders: [
      "First Beaver",
      "Second Beaver"
    ],
    arrayOfStructure: [
      "header 1",
      "paragraph 1",
      "image 1",
      "paragraph 2",
      "header 2",
      "paragraph 3",
      "image 2"
    ]
  })

})


/* 
Blog data format

blog ID
Title
Date
Series
Series Number
key points
associated with key points
summary
writeup
skills

Published (if published, returned on query)

Images Path
*/