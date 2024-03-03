import { useState } from 'react';
import { uploadFile } from './firebase/config.js';

function App() {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file)
      console.log(result)
    } catch (error) {
      console.error(error);
      alert('Fallo el sistema, intente mas tarde')
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='file' name='' id='' onChange={(e) => setFile(e.target.files[0])} />
        <button>UpLoad</button>
      </form>
    </>
  )
}
export default App
