const elements = document.querySelectorAll('.element')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle('show', entry.isIntersecting)
      if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  },
  {
    threshold: 0.5,
    rootMargin: '100px'
  }
)

elements.forEach((el) => {
  observer.observe(el)
})
