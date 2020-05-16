import React, { useContext } from "react"
import styled from "@emotion/styled"
import { purple, white } from "../styles/colors"
import ThemeContext from "../context/theme"

// Reference: https://codepen.io/aaroniker/pen/KGpXZo

const Label = styled.label`
  cursor: pointer;
  input {
    display: none;
    & + div {
      border-radius: 50%;
      width: 36px;
      height: 36px;
      position: relative;
      box-shadow: inset 10px -10px 0 0 ${white.C80};
      transform: scale(1) rotate(-2deg);
      transition: box-shadow 0.5s ease 0s, transform 0.4s ease 0.1s;
      &:before {
        content: "";
        width: inherit;
        height: inherit;
        border-radius: inherit;
        position: absolute;
        left: 0;
        top: 0;
        transition: background 0.3s ease;
      }
      &:after {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin: -4px 0 0 -4px;
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 0 -23px 0 ${purple.C70}, 0 23px 0 ${purple.C70},
          23px 0 0 ${purple.C70}, -23px 0 0 ${purple.C70},
          15px 15px 0 ${purple.C70}, -15px 15px 0 ${purple.C70},
          15px -15px 0 ${purple.C70}, -15px -15px 0 ${purple.C70};
        transform: scale(0);
        transition: all 0.3s ease;
      }
    }
    &:checked + div {
      box-shadow: inset 32px -32px 0 0 ${white.C80};
      transform: scale(0.5) rotate(0deg);
      transition: transform 0.3s ease 0.1s, box-shadow 0.2s ease 0s;
      &:before {
        background: ${purple.C70};
        transition: background 0.3s ease 0.1s;
      }
      &:after {
        transform: scale(1.5);
        transition: transform 0.5s ease 0.15s;
      }
    }
  }
`

const ThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <Label>
      <input type="checkbox" onChange={toggleTheme} />
      <div />
    </Label>
  )
}

export default ThemeButton
