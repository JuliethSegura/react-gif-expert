import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <section id="speakers" className="mt-4">
                <div className="container">
                    <div className="card-grid">
                        {
                            images.map((image) => (
                                <GifItem
                                    key={image.id}
                                    {...image}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>





        </>
    )
}
