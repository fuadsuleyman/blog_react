import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';


const Home = () => {

    const [name, setName] = useState('Rafiz') 
    const [age, setAge] = useState(45) 


    const handleEvent = (e) => {
        console.log("Salam, dostlar.", e.target);
        setName('Canavar')
        setAge('35')
    }

    // her hansi deyisiklik olduqda use effekt ishe dusur, eger curle bracketdeen sonra hecne yoxdusa
    // Yalniz birdefe sehife acilanda use effekt ishe dusur, eger curle bracketdeen [] qoyulubsa
    // [] icine ne yazsam deyisenlerden ancaq o deyisende use effect calisacaq, sehife acilanda da mutleq isleyir
    
    const {data, isPending, error } = useFetch('http://localhost:7777/blogs');

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>My name is {name}, and I am {age} years old.</p>
            <button onClick={handleEvent}>Click Me</button>

            {/* asagidaki props-du burdan child componente melumat gonderem */}
            {/* asagida && and isaresidi, blogs null olanda render etmir */}
            { error && <p>{error}</p> }
            { isPending && <p>Loading ...</p>}
            {data && <BlogList blogs={data} title="All blogs!"/>}

            {/* asagidaki super sohbet,author mario olan postlaridan ibaret olan post array gonderem props kimi */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs!" handleDelete={handleDelete}/> */}
        </div>
    );
}
 
export default Home;