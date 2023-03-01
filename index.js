const testimonials = [
  {
    name: "John",
    photoUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "This is simply unbelievable! I would be lost without Webclick. The very best. Not able to tell you how happy I am with Webclick.",
  },
  {
    name: "David",
    photoUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "I would also like to say thank you to all your staff. Wow what great service, I love it! Webclick impressed me on multiple levels.",
  },
  {
    name: "Constantine",
    photoUrl:
      "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    text: "Thank you for making it painless, pleasant and most of all hassle free! I wish I would have thought of it first. The very best.",
  },
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0

updateTestimonial()

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx]
  imgEl.src = photoUrl
  textEl.innerText = text
  usernameEl.innerText = name
  idx++
  if (idx === testimonials.length) {
    idx = 0
  }
  setTimeout(() => {
    updateTestimonial()
  }, 10000)
}
