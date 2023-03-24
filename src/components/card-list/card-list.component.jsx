import { Component } from "react";
class CardList extends Component{
    render() {
        // console.log(this)
        const { coders } = this.props;
        return (
            <div>
                {coders.map((coder) => {
                    return (
                        <h1 key={coder.id}>{ coder.name}</h1>
                    )
                })}
               
         </div>   
        );
    }

    
}
export default CardList;