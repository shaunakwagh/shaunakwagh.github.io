
import './App.css';
//import './public/profile_img.jpg'
const user = {
  name: 'Shaunak Wagh',
  image_src: './profile_img.jpg',
  imageSize: 90,
};

 function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.image_src}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}
export default Profile;