import React, { useEffect, useState } from 'react';
import './Newlester.css';
import 'aos/dist/aos.css';



const Newlester = () => {


const [showPop, setShowPop] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setShowPop(true), 5000);
  return () => clearTimeout(timer);
}, []);

  return (
        
      <section className="newsletter-section">
  <h2 style={{textTransform:'uppercase'}}>Inscription à la newsletter</h2>
  <p>Recevez les dernières actualités directement dans votre boîte mail.</p>
  <form
    className="newsletter-form"
    action="https://formspree.io/f/mldbbjkq"
    method="POST"
  >
    <label>
      Adresse mail:
      <input
        type="email"
        name="email"
        placeholder="Votre adresse e-mail"
        required
        aria-label="Adresse e-mail"
      />
    </label>

    {/* reCAPTCHA */}
    <div
      className="g-recaptcha"
      data-sitekey="6LdOXz4rAAAAAFuiTr3Vn_Fnvk468JJH0hjaBw4K"
    ></div>

    <label>
      <input type="checkbox" name="consent" required />
      En soumettant ce formulaire, j’accepte de recevoir les newsletters sélectionnées.
    </label>

    <button type="submit">S'inscrire</button>
  </form>
</section>


      
     
  

  );
};

export default Newlester;


