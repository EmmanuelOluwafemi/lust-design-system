import React from "react";
import ReactDOM from "react-dom/client";

import { Select } from "@lust/react"

import '@lust/scss/lib/Utilities.css'
import '@lust/scss/lib/Text.css'
import '@lust/scss/lib/Margin.css'
import '@lust/scss/lib/Select.css'
import '@lust/scss/lib/global.css'

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <div style={{ padding: '40px' }}>
    <Select options={options} />
  </div>
);