import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const img = data.image[0];
    var formData = new FormData();
    formData.append("image", img);
    console.log("formdata", formData);
    axios
      .post(`https://api.imgbb.com/1/upload?&key=(API_KEY)`, formData)
      .then(function (response) {
        console.log(response.data);
        if (response.data.data.url) {
          window.alert(
            `Image Uploaded successfull.Image Link: ${response.data.data.url}`
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className='App'>
      <h1>Upload a File</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='file'
          {...register("image", { required: true })}
          className='fileInput'
        />

        <input type='submit' />
      </form>
    </div>
  );
}

export default App;
