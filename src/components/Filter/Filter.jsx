import React from 'react';
import makes from './makes.json';
import prices from './prices.json';
import {
  ButtonStyles,
  FormStyles,
  SelectStyles,
  SpanStyles,
  TextStyles,
} from './Filter.styled';

export const Filter = () => {
  return (
    <div>
      <FormStyles>
        <SpanStyles>
          <TextStyles>
            Car brend
                      </TextStyles>
          <SelectStyles>
            {makes.map((car, idx) => (
              <option key={idx} value={car}>
                {car}
              </option>
            ))}
          </SelectStyles>
        </SpanStyles>
        <SpanStyles>
          <TextStyles>
            Price / 1 hour
            
          </TextStyles>
          <SelectStyles>
            {prices.map((price, idx) => (
              <option key={idx} value={price}>
                {price}
              </option>
            ))}
          </SelectStyles>
        </SpanStyles>
        <SpanStyles>
          <TextStyles>
            Сar mileage / km
            
          </TextStyles>
          <SelectStyles></SelectStyles>
        </SpanStyles>
        <ButtonStyles type="submit">Search</ButtonStyles>
      </FormStyles>
    </div>
  );
};
