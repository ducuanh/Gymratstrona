import React from 'react';
import { Link } from 'react-router-dom';  
import '../Styles/CoursesPage.css';

function CoursesPage() {
  return (
    <div className="courses-page">
      <h2>Kursy na trenera</h2>
      
      <div className="courses-container">
        
        {/* Karta kursu 1 */}
        <div className="course-card">
          <h3>KURS TRENERA PERSONALNEGO</h3>
          <p className="course-label">Opis:</p>
          <p>
            Oferujemy 120 godzin zajęć praktycznych i teoretycznych z najlepszymi ekspertami w dziedzinie fitness,
            którzy dzielą się z Tobą swoją wiedzą i doświadczeniem.
            Dzięki nim poznasz jak wygląda zawód trenera personalnego, nauczysz się programować jednostkę treningową,
            dobierzesz metody i ćwiczenia, którymi bezpiecznie poprowadzisz klienta podczas współpracy.
          </p>
          <p className="course-price">Cena: 2500 złotych za cały kurs</p>
          <button className="course-button">Wybieram</button>
          
          <div className="course-benefits">
            <p><strong>Benefity:</strong></p>
            <ul>
              <li>Certyfikat międzynarodowy w języku polskim i angielskim</li>
              <li>Materiały szkoleniowe PDF</li>
            </ul>
          </div>
          
          
          <Link to="/course-details/1" className="learn-more">
            dowiedz się więcej
          </Link>
        </div>
        
        {/* Karta kursu 2 */}
        <div className="course-card">
          <h3>KURS TRENERA PRZYGOTOWANIA MOTORYCZNEGO</h3>
          <p className="course-label">Opis:</p>
          <p>
            Oferujemy 90 godzin akademickich ćwiczeń, wykładów i hospitacji.
            W ostatnim dniu kursu uczestnicy zdają egzamin przed komisją CKKS.
            Kurs kończy się egzaminem.
          </p>
          <p className="course-price">Cena: 1500 złotych za cały kurs</p>
          <button className="course-button">Wybieram</button>
          
          <div className="course-benefits">
            <p><strong>Benefity:</strong></p>
            <ul>
              <li>Certyfikat międzynarodowy w języku polskim i angielskim</li>
              <li>Materiały szkoleniowe PDF</li>
            </ul>
          </div>
          
          <Link to="/course-details/2" className="learn-more">
            dowiedz się więcej
          </Link>
        </div>
        
        {/* Karta kursu 3 */}
        <div className="course-card">
          <h3>KURS TRENERA FITNESS</h3>
          <p className="course-label">Opis:</p>
          <p>
            Zapewniamy intensywny kurs trenera fitness, trwający 90 godzin,
            obejmujący zarówno praktykę, jak i teorię. Nauczysz się od doświadczonych
            instruktorów, zdobędziesz niezbędną wiedzę i umiejętności. 
            Kurs kończy się egzaminem przed komisją CKKS.
            Gotowy do rozpoczęcia kariery jako profesjonalny trener fitness? Dołącz do nas!
          </p>
          <p className="course-price">Cena: 2500 złotych za cały kurs</p>
          <button className="course-button">Wybieram</button>
          
          <div className="course-benefits">
            <p><strong>Benefity:</strong></p>
            <ul>
              <li>Certyfikat międzynarodowy w języku polskim i angielskim</li>
              <li>Materiały szkoleniowe PDF</li>
            </ul>
          </div>
          
          <Link to="/course-details/3" className="learn-more">
            dowiedz się więcej
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default CoursesPage;
