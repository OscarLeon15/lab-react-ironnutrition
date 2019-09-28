
import React from 'react';



class FoodBox extends React.Component{

    render(){
        return(

<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={this.props.theImage}  className="img-size"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{this.props.theName}</strong> <br />
          <small>{this.props.theCalories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
          
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
          
        )
    }




}
export default FoodBox;





// import React from 'react';
// import food from '../foods.json'
// import 'bulma/css/bulma.css';

// class FoodBox extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             foodList: food,
//         }
//     }

//     showFood = () => {
//         return this.state.foodList.map((eachFood, index)=>{
//             return(
//                 <div className="box" style={{width:"600px", margin:"10px"}}>
//   <article key={index} className="media">
//     <div className="media-left">
//       <figure className="image is-64x64">
//         <img src={eachFood.image} />
//       </figure>
//     </div>
//     <div className="media-content">
//       <div className="content">
//         <p>
//           <strong>{eachFood.name}</strong> <br />
//           <small>{eachFood.calories}</small>
//         </p>
//       </div>
//     </div>
//     <div className="media-right">
//       <div className="field has-addons">
//         <div className="control">
//           <input
//             className="input"
//             type="number" 
//             value={eachFood.quantity}
//           />
//         </div>
//         <div className="control">
//           <button className="button is-info">
//           +
//           </button>
//         </div>
//       </div>
//     </div>
//   </article>
// </div>
//             )
//         })
//     }









//     render(){
//         console.log(this.state)
//         return(
//             <div>
//                 <p>test run</p>
//                 {this.showFood()}
//             </div>
        
//         );
        
//         // return();
//     }







// }



// export default FoodBox;









