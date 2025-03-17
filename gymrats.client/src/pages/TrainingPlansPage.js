import React from 'react';
import TraningPlan from '../components/TraningPlan';
import '../Styles/Trainingplan.css'; // Import your custom CSS

function TrainingPlansPage() {
  return (
    <div className="training-plans-container">
      {/* lewa kolumna */}
      <div className="left-side">
        <h2>Przykładowe plany treningowe</h2>
        <TraningPlan title="Koszykówka" id={1} />
        <TraningPlan title="Sporty walki" id={2} />
        <TraningPlan title="Piłka nożna" id={3} />
      </div>

      {/* prawa kolumna */}
      <div className="right-side">
        <h2>Indywidualny plan treningowy</h2>
        {/* przycisk */}
        <div className="circle-plus">+</div>
        <p>
          opis
        </p>
      </div>
    </div>
  );
}

export default TrainingPlansPage;
