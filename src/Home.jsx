// import './App.css';
// import { useEffect } from 'react';
// import placeholder from './Assets/Images/placeholder.jpg';

// function Home() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const title = document.querySelector('.hero-title');
//       if (title) {
//         const offset = window.scrollY * 0.5;
//         title.style.transform = `translateY(${offset}px)`;
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Section 1 - Fullscreen Hero with Parallax Title */}
//       <section className="section hero">
//         <div className="hero-image">
//           <h2 className="hero-title">miles away by the sea</h2>
//         </div>
//       </section>

//       {/* Sections 2 - 4: Alternating image/text layout */}
//       <section className="section split fade-in">
//         <div className="text">
//           <h4>Background</h4>
//           <p>A small inn in Carmel by the Sea. 3 bedrooms, 2 bathrooms, 12,000- sft lot. Room for garden beds, chickens, bees and possibly some goats and sheep. Designed by Dustin Miles - architect/owner of Wallflower restaurant.</p>
//         </div>
//         <div className="image">
//           <img src={placeholder} alt="description 1" />
//           <span>Image description 1</span>
//         </div>
//       </section>

//       <section className="section split reverse fade-in">
//         <div className="text">
//           <h4>Vision</h4>
//           <p>A nightly opportunity to experience a special part of California, immersion into the Carmel culture and history, a beautifully designed space and an immersive experience for all the senses, to serve as a special occasion experience and getaway or simply a way to reconnect with family and a slower way of life.</p>
//         </div>
//         <div className="image">
//           <img src={placeholder} alt="description 2" />
//           <span>Image description 2</span>
//         </div>
//       </section>

//       {/* Section 5 - Contact Info */}
//       <section className="section contact fade-in">
//         <h4>Contact Us</h4>
//         <p>Email: info@milesawaybythesea.com</p>
//         <p>Instagram: @milesawaybythesea</p>
//       </section>
//     </>
//   );
// }

// export default Home;