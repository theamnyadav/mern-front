const SmoothieCard = ({smoothie}) =>{
    return (
      <div>
        <h2>{smoothie.title}</h2>
        <h2>{smoothie.method}</h2>
        <h2>{smoothie.rating}</h2>
      </div>
    );
}
export default SmoothieCard