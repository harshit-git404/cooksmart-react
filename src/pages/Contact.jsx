import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="page-shell">
      <section className="container page-section content-panel contact-page-card">
        <h1 className="page-title">Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-field">
            <label htmlFor="contact-name" className="section-label">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              className="text-input"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email" className="section-label">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className="text-input"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message" className="section-label">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              className="text-area"
              rows="6"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="primary-button contact-button">
            Send Message
          </button>
        </form>

        {isSubmitted && (
          <p className="success-message">
            Thank you! Your message has been received.
          </p>
        )}
      </section>
    </main>
  )
}

export default Contact
