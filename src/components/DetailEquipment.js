import React from "react";
import '../styles/components/detailpreps.css';

export default function DetailEquipment({ equipments }) {
  if (!equipments) {
    return (
      <section id="equipmentSection" className="equipment section">
        <h3>Equipments</h3>
        <p>No equipment recorded</p>
      </section>
    )
  }

  return (
    <section id="equipmentSection" className="equipment section">
        <h3>Equipments</h3>
        <div id="spoonacular-equipment-vis-grid">
          {
            equipments.map(equipment => (
              <div key={equipment.id} className="spoonacular-grid-item">
                <div className="spoonacular-equipment">
                  <div className="spoonacular-image-wrapper">
                    <img src={`https://spoonacular.com/cdn/equipment_100x100/${equipment.image}`} alt={equipment.name} />
                  </div>
                  <span className="spoonacular-name">{equipment.name}</span>
                </div>
              </div>
            ))
          }
          </div>
      </section>
  )
}
