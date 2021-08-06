import { CssModuels } from "./compornents/CssModules";
import { InlineStyle } from "./compornents/inlineStyle";
import { StyledJsx } from "./compornents/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModuels />
      <StyledJsx />
    </div>
  );
}
