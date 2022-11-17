import Header from './feedback/Header';
import FeedBackItem from './feedback/FeedBackItem';

const HeaderStyles={
    backgroundColor: '#ed51a3',
    color: 'red',
}

function App(){
        return(
            <div className="container">

                    {/*Props para ingresar informacion*/}
                    <Header 

                    bgColor={15} 
                    c="blue" />

                    <FeedBackItem/>
                    <FeedBackItem/>
                    <FeedBackItem/>
            </div>
        
            
        )
}

export default App;