export default function Product({
  name,
  price,
  imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  width: imgWidth = "480px",
}) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgUrl} alt={name} width={imgWidth}></img>
      <p>Price: {price} credits</p>
    </div>
  );
}
