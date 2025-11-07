import languages from "../../use_State_assets/languages"
import { useState } from "react"

export default function Main() {



    // const [budino, setBudino] = useState(0)



    return (

        <main className="container">
            <div className="d-flex">

                {languages.map((cosine) => (
                    <button key={cosine.id} className="btn btn-primary">
                        <h3>{cosine.title}</h3>
                    </button>
                ))}

            </div>

            <div class="card my-5">
                <div class="card-body">

                    {languages.map((cosine) => (
                        <p key={cosine.id}>{cosine.description}</p>
                    ))}

                </div>
            </div>
        </main>

    )
}



{/* <button className="btn btn-primary">
    <h3>HTML</h3>
</button> */}