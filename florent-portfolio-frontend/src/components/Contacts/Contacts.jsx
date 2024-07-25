import React, { useState } from 'react';
import DOMPurify from 'dompurify';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || isSubmitted) return; // Prevent multiple submissions

    setIsSubmitting(true);
    try {
      // Désinfecter les données avant l'envoi
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        message: DOMPurify.sanitize(formData.message)
      };

      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(sanitizedData)
      });
      if (response.ok) {
        setIsSubmitted(true);
        setSubmissionError(null);
      } else {
        setSubmissionError('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setSubmissionError('Erreur lors de l\'envoi du message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts">
      <h2>Démarrons un projet ensemble, n'hésitez pas à me contacter !</h2>
      <br />
      <form onSubmit={handleSubmit} id='contacts'>
        <label htmlFor="name">Nom:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" disabled={isSubmitting || isSubmitted}>
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>

      {isSubmitted && (
        <div className="confirmation">
          <p>Message envoyé avec succès !</p>
        </div>
      )}
      {submissionError && <div className="error">{submissionError}</div>}
    </section>
  );
}

export default Contacts;
