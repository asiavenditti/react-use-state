import languages from "../db/languages";


export default function CardList({ item }) {


    if (!item) {

        return (
            <div className="card">
                <h2>Nessun linguaggio selezionato</h2>
            </div>
        );
    }
    else {
        return (

            <div className="card" >
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        )

    }

}