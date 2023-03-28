import { Component } from "react";
class CardList extends Component{
    render() {
        // console.log(this)
        const { coders } = this.props;
        return (
            <div className="card-list">
                {coders.map((coder) => {
                    return (
                        <div className="container" key={coder.id}>
                            <img alt={` coder ${coder.name}`}
                                src={`https://robohash.org/${coder.id}?set=set5&size=180x180`} />
                            <h2>{coder.name}</h2>
                            <p>{ coder.email}</p>
                            
                        </div>
                            
                    )
                })}
               
         </div>   
        );
    }

    
}
export default CardList;