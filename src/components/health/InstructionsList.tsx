
import React from 'react';

interface InstructionsListProps {
  instructions: string[];
}

const InstructionsList = ({ instructions }: InstructionsListProps) => {
  return (
    <div>
      <h5 className="font-medium text-sm">Instructions</h5>
      <ol className="text-sm space-y-1 mt-1 list-decimal list-inside">
        {instructions.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
