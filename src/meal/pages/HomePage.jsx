import imagen from '../../assets/images/portada-cocina.jpg'
import { Card } from '../components/Card';
import { useFetch } from '../helpers/useFetch'
import '../styles/HomePage.css'
export const HomePage = () => {
    const { data } = useFetch();
    return (
        <>
            <div className="container-fluid">
                <div className="row d-flex align-items-center justify-content-center container-img">
                    <img src={imagen} alt="portada-cocina" className="img-cocina" />
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center">
                        <form>
                            <div className="d-flex">
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Search...' />
                                <button type="submit" className="btn btn-primary">Search</button>
                            </div>
                        </form>
                    </div>
                    <div className="container text-center d-flex justify-content-center mt-4">
                        <div className="row">
                            {
                                data.map((item) => (
                                    <Card {...item} key={item.idMeal} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
