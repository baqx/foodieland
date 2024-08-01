import React from "react";
import "../../styles/RecipePageComponents/CookingStep.css";

interface Step {
  title: string;
  description: string;
  image?: string;
}

const CookingStep: React.FC = () => {
  const steps: Step[] = [
    {
      title: "1. Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      image: "images/step1.jpg",
    },
    {
      title: "2. Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      title: "3. Lorem ipsum dolor sit amet",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
  ];

  return (
    <div className="CookingStep-container">
      <h2>Directions</h2>
      {steps.map((step, index) => (
        <div key={index} className="CookingStep-step">
          <div className="CookingStep-step-number"></div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          {step.image && <img src={step.image} alt={`Step ${index + 1}`} />}
        </div>
      ))}
    </div>
  );
};

export default CookingStep;
