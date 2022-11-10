import React, { useState } from "react";
import { selectedTableOptions } from "./SubmitButton";
import { RowContainer, RowText, RowTouchableHighlight, RowTouchableText } from "./styles";

const RadioRow: React.FC<{ title: string, options: number[] }> = ({ title, options }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const mappedButtons = [];

  for(let i = 0; i < options.length; i++) mappedButtons.push(
    <RowTouchableHighlight
      onPress={() => {
        if(selected === i) {
          setSelected(null);
        } else {
          setSelected(i);
          selectedTableOptions[title] = options[i];
        }
      }}
      isSelected={selected === i}
      isLastButton={i === options.length - 1}
    >
      <RowTouchableText isSelected={selected === i}>{ options[i] }</RowTouchableText>
    </RowTouchableHighlight>
  );

  return <RowContainer>
    <RowText text={title}/>

    { mappedButtons }
  </RowContainer>
}

export default RadioRow;