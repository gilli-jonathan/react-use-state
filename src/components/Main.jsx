import languages from "../../use_State_assets/languages"
import { useState } from "react"

export default function Main() {



    const [budino, setBudino] = useState(null)

    function budinoInTavola(id) {
        setBudino(budino === id ? null : id)

        // if (budino === id ){
        //     setBudino(null)
        // } else { 
        //     setBudino(id)
        // }

    }



    return (

        <main className="container">
            <div className="d-flex">

                {languages.map((cosine) => (
                    <button onClick={() => budinoInTavola(cosine.id)} key={cosine.id} className="btn btn-primary">
                        <h3>{cosine.title}</h3>
                    </button>
                ))}

            </div>

            <div className="card my-5">
                <div className="card-body">

                    {languages.map((cosine) => (

                        budino === cosine.id && <p key={cosine.id}>{cosine.description}</p>

                    ))}

                </div>
            </div>
        </main>

    )
}
