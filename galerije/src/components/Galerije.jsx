function Galerije(props) {

    var galerije = props.galerije
    return (
        <div className="galerijetbl">

            <table className="table table-striped " >


                <thead >
                    <tr className="tablenaslov">
                        <th className = "proba">ID</th>
                        <th>Naziv</th>
                        <th>Adresa</th>
                        <th>Grad</th>
                        <th>Email</th>
                        <th>Sajt</th>
                    </tr>
                </thead>


                <tbody className = "tablered">
                    {galerije.map(g => {
                        return (
                            <tr key={g.galerija_id}>
                                <td>{g.galerija_id}</td>
                                <td>{g.naziv}</td>
                                <td>{g.adresa}</td>
                                <td>{g.grad}</td>
                                <td>{g.email}</td>
                                <td>{g.sajt}</td>
                            </tr>
                        );
                    })}
                </tbody>


            </table>
        </div>
    )
}

export default Galerije;