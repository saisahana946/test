export default function data(props) {
  console.log(props);
  return (
    <center>
      <h1 style={{ color: "green" }}>{props.name}</h1>
    </center>
  );
}
