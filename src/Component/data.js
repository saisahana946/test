export default function (props) {
  console.log(props);
  return (
    <center>
      <h1 style={{ color: "red" }}>{props.name}</h1>
    </center>
  );
}
