import React from 'react';

// class Components
export class Product extends React.Component{
    render(){
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt="" />
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price}
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">Buy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Hook/Function component
// export function Product({name,price}) {
//   return (
//     <div>
//         <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
//             <div className="thumbnail">
//                 <img alt="" />
//                 <div className="caption">
//                     <h3>{name}</h3>
//                     <p>
//                         {price}
//                     </p>
//                     <p>
//                         <a href="#" className="btn btn-primary">Buy</a>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export Product;