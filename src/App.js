import Button from "./Button";

function App() {
  return (
    <div className="parent">
      <Button />
      <Button variant="outline" />
      <Button variant="text" />
      <Button disableShadow />
      <Button disabled />
      <Button variant="text" disabled />
      <Button startIcon="local_grocery_store" />
      <Button endIcon="local_grocery_store" />
      <div className="container">
        <Button size="sm" />
        <Button size="md" />
        <Button size="lg" />
      </div>
      <div className="container">
        <Button color="default" />
        <Button color="primary" />
        <Button color="secondary" />
        <Button color="danger" />
      </div>
    </div>
  );
}

export default App;
