function PetInfo(props) {
  const { animalName, animalAge, hasPet } = props;

  return hasPet ? (
    <h1>{`My animal ${animalName} is ${animalAge} years old`}</h1>
  ) : (
    <h2>I don't have a я pet</h2>
  );
}

export default PetInfo;
